import React from 'react'
import Container from './Container'
import Grid from './Grid'
import Flex from './Flex'

import logo from "../assets/logo.png"
import icon1 from "../assets/Icon1.png"
import icon2 from "../assets/Icon2.png"
import icon3 from "../assets/Icon3.png"
import icon4 from "../assets/Icon4.png"
import FooterCart from './FooterCart'

const FooterSection = () => {
  return (
    <>
        <footer>
            <Container>
                <Grid className="  grid-cols-6 ">
                    <div className='col-span-2 w-[260px]'>
                        <img className='w-[208px]' src={logo} alt="Footer-Logo" />
                        <p className='mt-[15px] mb-[32px] text-[16px] font-[400] leading-[28px]'>
                            Build a modern and creative website with crealand
                        </p>
                        <Flex className="gap-[10px]">
                            <img src={icon1} alt="icon" />
                            <img src={icon2} alt="icon" />
                            <img src={icon3} alt="icon" />
                            <img src={icon4} alt="icon" />
                        </Flex>
                    </div>
                    <FooterCart
                    list1="Product"
                    list2="Landingpage"
                    list3="Features"
                    list4="Documentation"
                    list5="Referral Program"
                    list6="Pricing"
                    />
                    <FooterCart
                    list1="Service"
                    list2="Documentation"
                    list3="Design"
                    list4="Themes"
                    list5="Illustrations"
                    list6="UI Kit"
                    />
                    <FooterCart
                    list1="Company"
                    list2="Landingpage"
                    list3="About"
                    list4="Terms"
                    list5="Privacy Policy"
                    />
                    <FooterCart
                    list1="More"
                    list2="Changelog"
                    list3="License"
                    />
                </Grid>    
            </Container> 
            <div>
                <div class="bg-[#313131]  shadow-xs ">
                    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                        <span class="text-sm text-body sm:text-center !text-white" >© 2023 All Rights Reserved.</span>
                        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
                            <li className=" text-white me-4 md:me-6">About</li>
                            <li className=" text-white me-4 md:me-6">Blog</li>
                            <li className=" text-white me-4 md:me-6">Page</li>

                        </ul>
                    </div>
                </div>
            </div>   
        </footer>      
    </>
  )
}

export default FooterSection
