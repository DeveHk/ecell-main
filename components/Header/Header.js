import React from 'react'
import useScrollAnimation from '../Hooks/useScrollAnimation'
import Content from './Content'
import Graphic from './Graphic'


const Header = () => {
  let card=useScrollAnimation(['slide-right-v'],['invisible', '-translate-x-10'])
  return (
    <>
    <div className="md:grid md:grid-cols-10 flex flex-col">
        <div className="col-span-5 invisible -translate-x-10" ref={card}>
    <Content/>
    </div>
    <div className="col-span-5">
    <Graphic/>
    </div>
    </div>
    </>
  )
}

export default Header