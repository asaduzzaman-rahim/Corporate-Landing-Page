import React, { useState } from 'react'

import Logo from "../assets/logo.png"
import Container from './Container'
import Flex from './Flex'
import Button from './Button'

import { IoMenuSharp } from "react-icons/io5";


const NavBer = () => {

  const [navber, SetNavber] = useState(false)

  const handleClick = () =>{
    SetNavber(!navber)
  }

  return (
    <nav>
      <Container>

      {/*  **  Destop View section start */}

      <div className='hidden lg:block '>
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
      </div>

        {/*  **  Destop View section End */}
        
        {/*  **  Mobile and Tab View section start */}

        <div className='lg:hidden'>
          <Flex className="items-center justify-between ">
            <div className="w-[275px] h-[54px] cursor-pointer ">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="icon">
              <IoMenuSharp onClick={handleClick} className='text-[44px] border-2 rounded-[5px] cursor-pointer text-[#313131]' />
            </div>
          </Flex> 
            { navber ?
            <div>
              <ul className='flex flex-col gap-3 my-6 '>
                <li>Home</li>
                <li>Pages</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul> 
  
              <Button>Call Now</Button>
                </div>
               : null }
               {/*  **  Mobile and Tab View section end */}
        </div>


      </Container>
    </nav>
  )
}


export default NavBer
