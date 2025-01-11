import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../lib/client";

const builder = imageUrlBuilder(client);

const urlFor = (source: { _ref: string }) => builder.image(source);

interface Product {
  name: string;
  slugValue: string;
  images: { asset: { _ref: string } }[];
  price: number;
}
const query = `*[_type == "product"] {
    name,
    "slugValue": slug.current,
    images,
    description,
    price
  }`;
  

const Card = ({ product }: { product: Product }) => {
  return (
    <div className="flex justify-center sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 gap-4">
      <Link href={`/product/${product.slugValue}`} className="block w-full">
        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden transition-all hover:shadow-2xl">
          {/* Product Image */}
          {product.images?.[0]?.asset && (
            <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 flex justify-center">
              <Image
                src={urlFor(product.images[0].asset).width(400).url()}
                alt={product.name}
                height={400}
                width={400}
                className="object-cover w-full h-full"
              />
            </div>
          )}

          {/* Product Name and Price */}
          <div className="p-4 text-center">
            <h1 className="text-lg font-semibold truncate">{product.name}</h1>
            <p className="text-blue-950 text-xl font-bold mt-1">${product.price.toFixed(2)}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;