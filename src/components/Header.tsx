import { IoIosSearch } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import React from "react";

import Link from "next/link";

export default function Nav() {
  return (
    <div>
      {/* Top Section */}
      <div className="flex flex-wrap items-center justify-between border-b p-3">
        {/* Search Icon */}
        <div className="flex items-center">
          <IoIosSearch color="purple" size={30} />
        </div>
        {/* Logo */}
        <Link href="/" className="text-xl text-[rgba(42,37,75,1)] font-bold">Avion</Link>
        {/* Shopping Cart and Logo */}
        
       
         
          
          <button className="relative text-[25px] ">
        <RiShoppingCart2Line color="purple" size={30} /> <span className="absolute text-[12px] top-0 right-[-5px] bg-red-600 w-[18px] h-[18px] rounded-3xl text-center text-white font-bold">0</span>
        
        </button>
      </div>

      {/* Navigation Section */}
      <div className="py-4">
        {/* Categories */}
        <ul className="flex flex-wrap justify-center gap-4 text-gray-500 text-sm md:text-base">
          <li><Link href="/plant-pots">Plant pots</Link></li>
          <li><Link href="/ceramics">Ceramics</Link></li>
          <li><Link href="/tables">Tables</Link></li>
          <li><Link href="/chairs">Chairs</Link></li>
          <li><Link href="/crockery">Crockery</Link></li>
          <li><Link href="/tableware">Tableware</Link></li>
          <li><Link href="/cutlery">Cutlery</Link></li>
        </ul>

        {/* Main Navigation */}
        <ul className="flex flex-wrap justify-center gap-6 mt-4 text-purple-800 text-sm md:text-base">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/productlisting">Product Listing</Link></li>
          <li><Link href="/shoppingbasket">Shopping Basket</Link></li>
          <li><Link href="/productlisting2">Product Listing 2</Link></li>
        </ul>
      </div>
    </div>
  );
}