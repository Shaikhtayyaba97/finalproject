import client from "../../lib/client";
import imageUrlBuilder from "@sanity/image-url";
import React from "react";


// Create an image URL builder
const builder = imageUrlBuilder(client);

// Function to generate the image URL
const urlFor = (source: { _ref: string }) => builder.image(source);

interface ProductDetails {
  h1Heading: string;
  price: number;
  h2Heading1: string;
  paragraph: string;
  list: string[];
  h2Heading2: string;
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
  addToCart: {
    amount: number;
    incrementButton: string;
    decrementButton: string;
    defaultValue: number;
  };
}

const query = `*[_type == "productDetails"] {
  h1Heading,
  price,
  h2Heading1,
  paragraph,
  list,
  h2Heading2,
  dimensions {
    height,
    width,
    depth
  },
  addToCart {
    amount,
    incrementButton,
    decrementButton,
    defaultValue
  }
}`;


export default async function DanyChair() {
  // Fetch data from Sanity
  const sanityData: ProductDetails[] = await client.fetch(query);

  if (!sanityData || sanityData.length === 0) {
    return <p>No data found for Dany Chair.</p>;
  }

  const productDetails = sanityData[0]; // Assuming only one "Dany Chair"

  return (
    <div>
    <div className="text-blue-950">
      <h1 className="text-3xl m-6 ml-16">{productDetails.h1Heading}</h1>
      <p className="ml-16 mt-4 mb-14">Price: ${productDetails.price}</p>
      <h2 className="ml-16">{productDetails.h2Heading1}</h2>
      <p className="ml-16 mt-4">{productDetails.paragraph}</p>
      <ul className="ml-16 mt-4 ">
        {productDetails.list.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="ml-16 mt-7">{productDetails.h2Heading2}</h2>
      <div className=" ml-16 grid grid-cols-3 ">
  
  
  <div className="p-4">
    <div>Height</div>
    <div>110cm</div>
  </div>
  <div className="p-4">
    <div>Width</div>
    <div>75</div>
  </div>
  <div className="p-4">
    <div>Depth</div>
    <div>50 cm</div>
  </div>
</div>
      
<div className="flex flex-col gap-4 mt-7">
  {/* Amount Section */}
  <div className="flex items-center gap-4">
    <h2 className="text-xl font-semibold ml-16">Amount</h2>
    <div className="flex items-center gap-2">
      <button className="border p-2 rounded-md text-lg">-</button>
      <span className="text-lg">1</span>
      <button className="border p-2 rounded-md text-lg">+</button>
      <div className="ml-[600px]">
    <button className="bg-blue-500 text-white p-2  w-full hover:bg-blue-600">
      Add to Cart
    </button>
    </div>
    
  </div>
  </div>
</div>
</div>


    </div>

    
  );
}