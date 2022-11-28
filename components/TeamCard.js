import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import tem from '../public/images/team.jpg'

const TeamCard = ({url,name}) => {
    const about=useRef('')
    useEffect(()=>{
       
    },[])
  return (
    <div className="relative overflow-hidden z-10 t-card" >
        <div className=''>
        <Image src={tem} style={{ objectFit: "cover" }}></Image>
        </div>
        <div className='absolute -bottom-72  text-left t-card-cntnt' ref={about}>
        <h2 className="font-bold text-2xl text-[#EE6C4D] drop-shadow-lg skew-y-12 mx-10 border-b-8 border-b-[#d6421d]">{name || 'MUSK'}</h2>
        <div className="skew-y-12 backdrop-blur-lg bg-[#4d68ee3a] h-96 px-10 ">
            <h3 className="font-semibold text-md">President</h3>
            <div className="text-xl -skew-y-12 pt-16 text-[#120303] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis impedit et odio minus, sapiente iure eos consectetur exercitationem perspiciatis omnis!
            </div>
        </div>
        </div>
    </div>
  )
}

export default TeamCard