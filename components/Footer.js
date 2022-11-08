import Image from 'next/image'
import ins from "../public/images/footer/ins.png";
import twi from "../public/images/footer/twi.png";
import fb from "../public/images/footer/fb.png";
import logo from "../public/images/footer/logo1.png";

let titles = [
    ['Links', 'Home', 'About', 'Team', 'Initiatives', 'Community'],
    ['Departments', 'Investment Board', 'Industry Research', 'Market Research', 'Technology', 'Community'],
    ['Events', 'eSummit', 'Ideathon', 'Workshops'],
    ['Contacts', '909*******', 'support@ecell.nsut.ac.in']
];
const Pgs = ({ title }) => {
    return (
        <li className="hover:underline transition-all hover:font-semibold">{title}</li>

    );
}

const List = ({ tits }) => {
    return (
        <ul className="space-y-1 text-xs md:space-y-4">
            <span className="text-sm font-semiimg">
                <Pgs title={tits[0]}></Pgs>
            </span>

            {tits.slice(1).map((t) => <Pgs key={Math.ceil(Math.random()*1000+10)} title={t}></Pgs>
            )}
        </ul>
    );
}


 const Contact = () => {
  return (
    <div className='md:w-52 h-32 md:h-56 flex flex-col sm:flex-row md:flex-col first-letter: justify-around items-center'>
        <div className='flex justify-center items-center '>
        <Image src={logo}  width={60} height={60} alt="eCell" className='hover:scale-y-105 transition-all '/>
            <span className='font-mono text-white  w-16 ml-2 text-sm'>eCell NSUT</span>
        </div>
        <div className='flex space-x-3'>
            <div>
            <Image src={fb} alt="fb" width={30} height={30} className='hover:scale-125 transition-all mr-10'/>
            </div>
            <div className="">
            <Image src={twi} alt="tw" width={30} height={30} className='hover:scale-125 transition-all '/>
            </div>
            <div className="">
            <Image src={ins} alt="ins" width={30} height={30} className='hover:scale-125 transition-all '/>
            </div>
        </div>
    </div>
  )
}

const Footer = () => {
    return (

        <div className="bg-[#293241] flex flex-col md:flex-row pb-5 px-10 pt-4 ">
            <Contact/>
            <div className="flex flex-col space-y-4 px-5 py-10 md:w-4/5 md:space-y-0   
            justify- text-white md:grid md:grid-cols-4 md:pl-10 ">
                {
                    titles.map((t) => {
                        return <List key={Math.ceil(Math.random()*1000+10)} tits={t} />
                    })
                }
            </div>
            <hr className="mx-10" />
        </div>

    )
}

export default Footer;