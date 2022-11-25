import React from 'react'
import Content from './Content'
import Graphic from './Graphic'

const Header = () => {
  return (
    <>
    <div className="md:grid md:grid-cols-10 flex flex-col">
        <div className="col-span-5">
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