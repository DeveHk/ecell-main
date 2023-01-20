import React from "react";
import up from "../public/images/contact us/up.svg";
import buildings from "../public/images/contact us/buildings.svg";

import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="relative ">
      <Image src={up}
        fill
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
      <div className=" lg:px-20 h-max bg-primary flex lg:flex-row flex-col items-center ">
        
        <div className="flex flex-col justify-center mx-10 md:max-w-[700px]">
          <span className="text-4xl  font-bold text-gray-100 leading-2	">Contact Us</span>
          <span className="text-gray-100 text-md font-thin md:mt-10 md:mr-36 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            ipsa tempora soluta mollitia delectus nam architecto possimus id aut
            debitis?
          </span>

          <div>
            <form className="mt-5 lg:mt-10  mb-20">
              <div className="flex flex-col pr-20 md:pr-36 relative">
                <div className="flex justify-between flex-col md:flex-row space-y-3 md:space-y-0">
                  <input className="rounded text-lg px-4 py-1.5 mr-5 focus:outline-0 md:mr-5 h-12 w-72" placeholder="Full Name"></input>
                  <input className="rounded text-lg px-4 py-1.5 focus:outline-0 w-72 h-12" placeholder="Contact"></input>
                </div>

                <textarea id="message" className="rounded mt-4 p-2 px-4 w-full focus:outline-0" rows="3" placeholder="Message"></textarea>
                <button className="p-2 mt-4 bg-white text-xl text-gray-500  rounded px-10 w-fit hover:bg-gray-200">Connect</button>


              </div>
            </form>
            <span className="mt-20 text-gray-100 font-semibold text-2xl ">Mail Us at:&nbsp;</span>
            <a href="mailto:xyz@ecell.com" className="text-gray-100 text-2xl">xyz@ecell.com</a>
          </div>


        </div>
        <div className="hidden lg:block absolute md:right-20 right-6 top-24 ">
          <Image src={buildings} alt='' height={600} width={600} />
        </div>
      </div>
    </div>
  );
}
