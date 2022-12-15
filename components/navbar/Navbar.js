import Image from "next/image";
import React, {useState } from "react";
import { Menu } from "./Menu";
import icon from '../../public/images/NAv/logo 2 1.svg'
import name from '../../public/images/NAv/eCELL NSUT.svg'
import Link from 'next/link';

const Navbar = () => {
  const [clicked,setClicked]=useState(false)
  const onIconClick = () => {
    setClicked(!clicked)
  }
    return (
      <nav className='h-[75px] flex justify-center items-center text-[1.3em] navbar z-[100]'>

        <div className="flex justify-center">
          <Image src={icon}/>
          <div className="invisible">--</div>
          <Image src={name}/>
        </div>

        <div className="md:hidden absolute top-4 right-5 text-[1.8rem] cursor-pointer text-black" onClick={onIconClick}>
          <i
            className={clicked ? "fa fa-times text-[2rem]" : "fa fa-align-right text-[2rem]"}
            aria-hidden="true"
          ></i>
        </div>

        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {Menu.map((item, i) => {
            return (
              <li key={i}>
                <Link href={item.url}>
                <a className={item.className}>
                  {item.title}
                </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  
}

export default Navbar;
