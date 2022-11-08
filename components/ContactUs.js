import React from "react";
import up from "../public/images/contact us/up.svg";
import buildings from "../public/images/contact us/buildings.svg";

import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="relative">
      <Image src={up} 
      fill
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
      <div className="flex justify-between h-max bg-primary ">
        <div className="px-10 md:px-24 pt-15 md:pt-10 flex flex-col">
          <span className="text-3xl font-bold text-gray-100">Contact Us</span>
          <span className="text-gray-100 text-md font-thin mt-10 mr-36 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            ipsa tempora soluta mollitia delectus nam architecto possimus id aut
            debitis?
          </span>

          <div>
            <form className="mt-5 lg:mt-10  mb-20">
                <div className="flex flex-col pr-20 md:pr-36 relative">
                  <div className="flex justify-between">
                  <input className="rounded text-lg px-4 py-1.5 mr-5 focus:outline-0 md:mr-5" placeholder="Full Name"></input>
                  <input className="rounded text-lg px-4 py-1.5 focus:outline-0" placeholder="Contact"></input>
                </div>
              
                <textarea id="message" className="rounded mt-4 p-2 px-4 w-full focus:outline-0" rows="3" placeholder="Message"></textarea>
                <button className="p-2 mt-4 bg-white text-xl text-gray-500  rounded px-10 w-fit hover:bg-gray-200">Connect</button>
                    
                
                </div>
            </form>
            <span className="mt-20 text-gray-100 font-semibold text-2xl ">Mail Us at:&nbsp;</span>
            <a href="mailto:xyz@ecell.com" className="text-gray-100 text-2xl">xyz@ecell.com</a>
          </div>


        </div> 
        <div className="hidden xl:block h-max w-full">
          <Image  src={buildings} alt='' objectFit="fill" />
        </div>
      </div>
    </div>
  );
}
