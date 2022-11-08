import Image from 'next/image'
import ins from "../public/images/footer/ins.png";
import twi from "../public/images/footer/ins.png";
import fb from "../public/images/footer/ins.png";
import logo from "../public/images/footer/ins.png";

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
            <Image src="/images/footer/logo1.png" height="2.5rem" width="2.5rem" className='' alt="eCell" srcSet="" />
            <span className='font-mono text-white  w-16 ml-2 text-sm'>eCell NSUT</span>
        </div>
        <div className='flex space-x-3'>
            <Image src="/images/footer/fb.png" height="1.5rem" width="1.5rem" alt="facebook" className='transition-all hover:scale-125 h-6' />
            <Image src="/images/footer/twi.png" height="1.5rem" width="1.5rem" alt="twitter" className=' transition-all hover:scale-125 '/>
            <Image src="/images/footer/ins.png" height="1.5rem" width="1.5rem" alt="" className='hover:scale-125 transition-all  '/>
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