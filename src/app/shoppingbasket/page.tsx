import Link from "next/link";
import Image from "next/image";

export default function Shopping() {
  return (
    <div className="ml-4 sm:ml-8 lg:ml-10 mr-4 sm:mr-8 lg:mr-10 relative bg-[repeating-linear-gradient(to_right,_rgba(255,192,203,0.7)_0px,_rgba(255,192,203,0.7)_60px,_transparent_60px,_transparent_80px)] py-8">
    
      <div>
        <h1 className="ml-4 sm:ml-10 text-3xl sm:text-4xl lg:text-6xl m-4 sm:m-6 lg:m-10 text-blue-950">
          Your Shopping Cart
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-10 md:gap-x-4 ml-4 md:ml-8">
        <div className="font-bold ml-10">Product</div>
        <div className="font-bold ml-52">Quantity</div>
        <div className="font-bold ml-48">Total</div>

        {/* First Product */}
        <div className="flex items-start">
          <Image src="/card1.png" alt="cardpic" width={150} height={150} />
          <ul className="ml-5 mt-5">
            <li className="text-blue-950 text-lg sm:text-2xl">Graystone Vase</li>
            <li className="mt-2 text-sm sm:text-base">
              A timeless ceramic vase with <br />
              a tri-color grey glaze.
            </li>
            <li className="mt-2 text-blue-950 text-sm sm:text-base">£85</li>
          </ul>
        </div>
        <div className="mt-5 md:mt-10 text-center">1</div>
        <div className="mt-5 md:mt-10 text-center">£85</div>

        {/* Second Product */}
        <div className="flex items-start">
          <Image src="/card2.png" alt="cardpic" width={150} height={150} />
          <ul className="ml-5 mt-5">
            <li className="text-blue-950 text-lg sm:text-2xl">Basic White Vase</li>
            <li className="mt-2 text-sm sm:text-base">
              Beautiful and simple, this is <br />
              one for the classics.
            </li>
            <li className="mt-2 text-blue-950 text-sm sm:text-base">£125</li>
          </ul>
        </div>
        <div className="mt-5 md:mt-14 text-center">1</div>
        <div className="mt-5 md:mt-12 text-center">£125</div>
      </div>

      <div className="mt-10 mb-8">
        <ul className="text-right text-sm sm:text-base lg:text-lg space-y-4">
          <li className="text-gray-500">subtotal</li>
          <li className="text-gray-500">
            Taxes and shipping are calculated at checkout
          </li>
          <li>
            <Link href='/productlisting2'>
            <button className="py-2 px-4 sm:px-6 bg-[rgba(128,0,128,0.5)] text-white text-xs sm:text-sm mt-2 hover:bg-blue-700">
              View Collection
            </button></Link>
          </li>
        </ul>
      </div>
    
    </div>
  );
}