import { RiFacebookBoxFill } from "react-icons/ri";
import { LuInstagram } from "react-icons/lu";
import { GrSkype } from "react-icons/gr";
import { FaTwitter, FaPinterest, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import React from "react";

export default function Footerr() {
  return (
    <div className="bg-[rgb(24,37,75,100)] text-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row text-white justify-around gap-10 border-b-2 p-8">
        {/* Menu */}
        <div>
          <ul className="space-y-4">
            <li className="font-bold">Menu</li>
            <li><Link href="/new-arrivals">New arrivals</Link></li>
            <li><Link href="/best-sellers">Best sellers</Link></li>
            <li><Link href="/recently-viewed">Recently viewed</Link></li>
            <li><Link href="/popular">Popular this week</Link></li>
            <li><Link href="/all-products">All products</Link></li>
          </ul>
        </div>
        {/* Categories */}
        <div>
          <ul className="space-y-4">
            <li className="font-bold">Categories</li>
            <li><Link href="/crockery">Crockery</Link></li>
            <li><Link href="/furniture">Furniture</Link></li>
            <li><Link href="/homeware">Homeware</Link></li>
            <li><Link href="/plant-pots">Plant pots</Link></li>
            <li><Link href="/chairs">Chairs</Link></li>
            <li><Link href="/crockery">Crockery</Link></li>
          </ul>
        </div>
        {/* Our Company */}
        <div>
          <ul className="space-y-4">
            <li className="font-bold">Our company</li>
            <li><Link href="/about-us">About us</Link></li>
            <li><Link href="/vacancies">Vacancies</Link></li>
            <li><Link href="/contact-us">Contact us</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/returns-policy">Returns policy</Link></li>
          </ul>
        </div>
        {/* Mailing List */}
        <div>
          <ul className="space-y-4">
            <li className="font-bold">Join our mailing list</li>
            <li>
              <div className="flex w-full max-w-md h-10 bg-transparent">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="p-2 w-3/4 focus:outline-none"
                  style={{ background: "rgba(77,78,147,0.39)" }}
                />
                <button className="py-2 px-6 bg-slate-100 text-[rgb(24,37,75,100)] text-xs hover:bg-blue-700">
                  Sign Up
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-10">
        <div>Copyright 2022 Avion LTD</div>
        <div className="flex gap-7">
          <Link href="https://facebook.com">
            <RiFacebookBoxFill color="white" size={40} />
          </Link>
          <Link href="https://instagram.com">
            <LuInstagram color="white" size={40} />
          </Link>
          <Link href="https://skype.com">
            <GrSkype color="white" size={40} />
          </Link>
          <Link href="https://twitter.com">
            <FaTwitter color="white" size={40} />
          </Link>
          <Link href="https://pinterest.com">
            <FaPinterest color="white" size={40} />
          </Link>
          <Link href="https://linkedin.com">
            <FaLinkedin color="white" size={40} />
          </Link>
        </div>
      </div>
    </div>
  );
}