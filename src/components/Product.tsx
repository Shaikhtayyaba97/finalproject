import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../lib/client";

// Create an image URL builder
const builder = imageUrlBuilder(client);

// Function to generate image URLs
const urlFor = (source: { _ref: string }) => builder.image(source);

interface Product {
  _id: string;
  name: string;
  slug: any;
  images: { asset: { _ref: string } }[];
  description: string;
  price: number;
}

const productQuery = `*[_type == "product"] {
  _id,
  name,
  slug,
  images,
  description,
  price,
}`;

export default async function Products() {
  const products: Product[] = await client.fetch(productQuery);
  console.log("PRODUCT: ", products, products[0].slug.current)
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 p-4">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg p-4">
            {product.images?.length > 0 && (
              <Link href={`/products/${product.slug.current}`}>
                <Image
                  src={urlFor(product.images[0].asset).width(500).url()}
                  alt={product.name}
                  height={200}
                  width={300}
                  className="object-cover rounded-lg"
                />
              </Link>
            )}
            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
            <p className="text-blue-950 font-bold">£{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}