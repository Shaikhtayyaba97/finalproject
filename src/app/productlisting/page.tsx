import React from "react";
import DanyChair from "../../components/Danychair";
import Imagee from "../../components/Image";
import { Products } from "../../components";
import { CiCircleCheck } from "react-icons/ci";
import Image from "next/image";


export default function Productlisting(){
    return(
        <div>
        <div className="flex justify-between">
<div>
    <Imagee/>
</div>

            <div>
<DanyChair/></div>


        </div>
        <div>
    <h1 className="text-3xl text-blue-950 m-7">You might also like
        <Products/>
    </h1>
</div>
<div className="mx-4 lg:mx-10  py-8">
        <h1 className="text-blue-900 text-center mb-10 text-2xl lg:text-3xl">
          What makes our brand different
        </h1>
        <div className="flex flex-wrap justify-between gap-6 lg:gap-10 px-4 lg:px-24">
          {[
            {
              icon: "/delivery.png",
              title: "Next day as standard",
              description: "Order before 3pm and get your order the next day as standard",
            },
            {
              icon: <CiCircleCheck color="blue" size={30} />,
              title: "Made by true artisans",
              description: "Handmade crafted goods made with real passion and craftsmanship",
            },
            {
              icon: "/Purchase.png",
              title: "Unbeatable prices",
              description: "For our materials and quality, you won’t find better prices anywhere",
            },
            {
              icon: "/Sprout.png",
              title: "Recycled packaging",
              description: "We use 100% recycled to ensure our footprint is more manageable",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-blue-900 bg-gray-200 bg-opacity-20 p-4 w-full lg:w-[22%]"
            >
              <ul>
                <li className="mb-4 flex justify-center">
                  {typeof feature.icon === "string" ? (
                    <Image src={feature.icon} alt={feature.title} width={40} height={40} />
                  ) : (
                    feature.icon
                  )}
                </li>
                <li className="text-center text-lg font-semibold">{feature.title}</li>
                <li className="mt-2 text-center text-sm">{feature.description}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center text-blue-950  py-8 px-4 ">
          <h2 className="text-2xl lg:text-4xl mb-6">Join the club and get the benefits</h2>
          <p className="text-sm mb-6">
            Sign up for our newsletter and receive exclusive offers on <br /> new ranges, sales, pop-up stores, and more
          </p>
          <ul className="flex flex-wrap justify-center gap-5">
            <li className="flex gap-2">
              <CiCircleCheck color="blue" />
              Exclusive offers
            </li>
            <li className="flex gap-2">
              <CiCircleCheck color="blue" />
              Free events
            </li>
            <li className="flex gap-2">
              <CiCircleCheck color="blue" />
              Large discounts
            </li>
          </ul>
          <div className="flex mt-[50px] ml-[500px] pt-2 w-full max-w-md h-12 bg-transparent">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="p-2 w-3/4 focus:outline-none"
                  style={{ background: "rgba(77,78,147,0.39)" }}
                />
                
                <button className="py-2 px-6 bg-blue-950 text-white text-xs hover:bg-blue-700">
                  Sign Up
                </button>
              </div>
    </div>
        </div>
    )
}