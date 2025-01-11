import client from "../../lib/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";


// Create an image URL builder
const builder = imageUrlBuilder(client);

// Function to generate the image URL
const urlFor = (source: { _ref: string }) => builder.image(source);

// Define the Product interface
interface Productts {
  _id: string;
  name: string;
  slugValue: string;
  images: { asset: { _ref: string } }[];
  description: string;
  price: number;
}

const productQuery = `*[_type == "productss"] {
  _id,
  name,
  "slugValue": slug.current,
  images,
  description,
  price
}`;

export default async function Productss() {
  // Fetch all products from Sanity
  const productss: Productts[] = await client.fetch(productQuery);

  return (
    <div>
    <div className="grid grid-cols-4 gap-4 p-4">
      
      {productss.map((product, index) => (
        <div key={index} className="border rounded-lg p-4">
          {product.images?.length > 0 && (
           
           <Image
              src={urlFor(product.images[0].asset).width(500).url()}
              alt={product.name}
              height={200}
              width={300}
              className="object-cover rounded-lg"
            />
          )}
          <h2 className="text-lg font-bold mt-2">{product.name}</h2>
          
          <p className="text-blue-950 font-bold"> £{product.price}</p>
        </div>
      ))}  
     
    </div></div>
  );
}