import React from 'react'
import Container from './Container'
import Flex from './Flex'
// import Grid from './Grid'

import TipsImg1 from "../assets/Tips-Section (1).png"
import TipsImg2 from "../assets/Tips-Section (2).png"
import TipsImg3 from "../assets/Tips-Section (3).png"
import PropAnimation from '../Animation/PropAnimation'

const TipsSection = () => {
  return (
    <>
      <Container >
        <PropAnimation>
          <Flex className="justify-between flex-wrap gap-5 mx-auto ">
              <div>
                <img src={TipsImg1} alt="Tips Image 01" />
              </div>
              <div className='text-center '>
                <img src={TipsImg2} alt="Tips Image 02" />
                <h3 className='mt-[20px] mb-[10px] w-[326px] mx-auto text-[25px] font-semibold leading-[40px]'>How to prevent and protect your family from Carbon monoxide</h3>
                <p className='w-[308px] mx-auto '>We share common trends, strategies ideas, opinion, short & log stories from the team behind company.</p>
              </div>
              <div>
                <img src={TipsImg3} alt="Tips Image 03" />
              </div>
          </Flex>
        </PropAnimation>
      </Container>
    </>
  )
}

export default TipsSection
