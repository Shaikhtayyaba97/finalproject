

import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
import Product from "../../components/Product";
import Products from "../../components/Product";
import Productss from "../../components/Nineproduct";

export default function NineProduct(){
    return(
        <div className="bg-[repeating-linear-gradient(to_right,rgba(255,192,203,0.7)_0px,rgba(255,192,203,0.7)_60px,transparent_60px,transparent_80px)]">
            <div>
        <Image src="/Page Headers.png" alt="headerpic" width={2000} height={200} />
      </div>
      <div className="flex flex-wrap justify-between px-6 py-4">
        <ul className="flex gap-4 flex-wrap text-sm sm:text-base">
          <li className="flex gap-1">Category<IoMdArrowDropdown /></li>
          <li className="flex gap-1">Product Type<IoMdArrowDropdown /></li>
          <li className="flex gap-1">Price<IoMdArrowDropdown /></li>
          <li className="flex gap-1">Brand<IoMdArrowDropdown /></li>
        </ul>
        <ul className="flex gap-3 flex-wrap text-sm sm:text-base">
          <li>Sorting by:</li>
          <li className="flex gap-1">Date Added<IoMdArrowDropdown /></li>
        </ul>
      </div>
            <Product/>
            <Productss/>
            <Product/>
            <div className="items-center text-center ml-18">
<Link href='/productlisting'>
      <button className="bg-white text-blue-950 p-2 w-52  hover:bg-blue-600">
      View collection
    </button></Link></div>
        </div>
    )
}