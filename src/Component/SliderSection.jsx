import React from 'react'
import Container from './Container'
import Img from "../assets/quote-left.png"
import PropAnimation from '../Animation/PropAnimation'

const SliderSection = () => {
  return (
    <>
    <PropAnimation>
      <Container  className=" bg-[#89d32a] my-[50px]  py-[48px] px-[36px]">
        <div className=' w-[447px] py-[48px] px-[35px] bg-[#fff] rounded-[16px] shadow-[0px_0px_20px_rgba(0,0,0,0.3)]'>
            <img src={Img} alt="alt" />
            <p className=' mt-[20px] mb-[30px] font-semibold text-[25px] leading-[40px] '>This platform is one of the best companies I have dealt with in Indonesia. They’re always happy to help, and i wouldn’t hesitate to recommend them.</p>
            <h4 className='text-[20px] leading-[28px]'>Daniel Anderson</h4>
            <span className='text-[16px] italic'>Verified customer</span>
        </div>
      </Container>
    </PropAnimation>
    </>
  )
}

export default SliderSection
