import React from 'react'

import Logo from "../assets/logo.png"
import Container from './Container'
import Flex from './Flex'
import Button from './Button'

const NavBer = () => {
  return (
    <nav>
      <Container>
        <Flex className=" justify-between items-center mt-[50px]">
            <div className="w-[275px] h-[54px] cursor-pointer ">
              <img src={Logo} alt="Logo" />
            </div>   
            <ul className='flex gap-10 items-center text-[16px] '>
              <li>Home</li>
              <li>Pages</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul> 

            <Button>Call Now</Button>

        </Flex>
      </Container>
    </nav>
  )
}


export default NavBer
