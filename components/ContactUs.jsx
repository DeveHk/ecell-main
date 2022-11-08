import React from "react";
import buildings from "../public/images/contact us/buildings.svg";

import Image from "next/image";

export default function ContactUs() {
  return (
    <div className=" bg-primary w-screen">
      <div className="flex justify-between h-max">
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
                  <input className="rounded-full text-lg pl-4 mr-5 md:mr-5" placeholder="Full Name"></input>
                  <input className="rounded-full text-lg pl-4 " placeholder="Contact"></input>
                </div>
                
                <div className="absolute right-20 top-16 md:right-36 md:top-16 p-2 m-3 text-gray-100 bg-primary rounded-3xl px-10">Connect</div>

                  <div className="rounded-3xl mt-10 p-4 bg-gray-100"><textarea id="message" className="w-3/4 bg-gray-100" placeholder="Message"></textarea></div>
                
                </div>
            </form>
            <span className="mt-20 text-gray-100 font-bold text-2xl">Mail Us at:</span>
            <button onClick={() => window.location = 'mailto:yourmail@domain.com'}><span className="mt-20 text-gray-100 text-2xl ml-5">xyz@ecellnsut.com</span></button>
          </div>


        </div>
        <div className="hidden xl:block h-max w-full">
          <Image  src={buildings} alt='' objectFit="fill" />
        </div>
      </div>
    </div>
  );
}
