import Image from "next/image"; // Import Image from Next.js
import { Content, Yellowimg } from "../components";
import { CiCircleCheck } from "react-icons/ci";
import Link from "next/link";
import Product from "../components/Product";

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-full bg-[url('/background.png')] bg-cover bg-center flex flex-col lg:flex-row">
        <div className="w-full lg:w-[800px]"></div>
        <div className="bg-white m-8 lg:m-[200px] w-full lg:w-[1000px] h-auto lg:h-[400px] p-8 lg:p-0">
          <p className="mt-6 ml-12 lg:mt-14 text-lg lg:text-3xl text-[rgb(34,36,46)]">
            Luxury homeware for people <br /> who love timeless design quality
          </p>
          <p className="ml-12 text-xs lg:text-base text-[rgb(91,96,118)] mt-4 lg:mt-8">
            Shop the new Spring 2022 collection today
          </p>
          <Link href='/productlisting2'>
          <button className="ml-14 py-2 px-6 bg-gray-50 text-[rgb(91,96,118)] text-xs mt-6 lg:mt-36 hover:bg-blue-700">
            View Collectionn
          </button></Link>
        </div>
      </div>

      <div className="mx-4 lg:mx-10 bg-[repeating-linear-gradient(to_right,rgba(255,192,203,0.7)_0px,rgba(255,192,203,0.7)_60px,transparent_60px,transparent_80px)] py-8">
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
      <Product/>
      <div className="items-center text-center ml-18">
      <button className="bg-white text-blue-950 p-2 w-52  hover:bg-blue-600">
      View collection
    </button></div>
      <div className="flex gap-2 m-4">
        <div><Content/></div>
        <div><Yellowimg/></div>
      </div>
      <div className="text-center text-white   py-8 px-4 bg-orange-700">
          <h2 className="text-2xl lg:text-4xl mb-6">Join the club and get the benefits</h2>
          <p className="text-sm mb-6">
            Sign up for our newsletter and receive exclusive offers on <br /> new ranges, sales, pop-up stores, and more
          </p>
          <ul className="flex flex-wrap justify-center gap-5">
            <li className="flex gap-2">
              <CiCircleCheck color="white" />
              Exclusive offers
            </li>
            <li className="flex gap-2">
              <CiCircleCheck color="white" />
              Free events
            </li>
            <li className="flex gap-2">
              <CiCircleCheck color="white" />
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
  );
}