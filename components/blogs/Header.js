import Link from 'next/link';
import Image from 'next/image';

import icon from '../../public/images/NAv/logo 2 1.svg'
import name from '../../public/images/NAv/eCELL NSUT.svg'
const Header = () => {
  return (
    <header className="bg-gray-100 text-[1.3em]  text-black shadow w-full">
      <div className="container mx-auto flex flex-wrap  p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0">
            <div className="flex justify-center">
              <Image src={icon} />
              <div className="invisible">--</div>
              <Image src={name} />
            </div>
          </a>
        </Link>
        <nav className="flex flex-wrap md:w-4/5  items-center justify-end text-base md:ml-auto">
        <Link href="/" >
            <div  className='w-[100px]'>
            <a className="mx-5 cursor-pointer nav-links">
              Home
            </a>
            </div>
          </Link>
          <Link href="/blogs/blog" >
            <div  className='w-[100px]'>
            <a className="mx-5 cursor-pointer nav-links">
              Blog
            </a>
            </div>
          </Link>
          <Link href="/blogs/about">
          <div className='w-[100px]'>
            <a className="mx-5 cursor-pointer nav-links ">
              About
            </a>
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
