import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import HoverTips from '../Animation/HoverTips';


const ServiceCart = ({img, tittle, para, click}) => {

  return (
    <HoverTips>
      <div className='my-[15px] py-[40px] px-[45px] w-[370px] text-center rounded-[10px] shadow-[0px_0px_20px_rgba(0,0,0,0.3)]'>
          <img className='w-[92px] h-[92] pt-[30px] mx-auto pb-[20px]  ' src={img} alt="" />
          <h3 className='text-[25px] font-bold leading-[32px] tracking-[1px] '>{tittle}</h3>
          <p className='w-[280px] text-[16px] pt-[20px] pb-[15px] leading-[30px]' >{para}</p>
          <div className='flex items-center gap-2 w-[117px] font-bold text-[16px] text-center  cursor-pointer mb-[30px] mx-auto '>
              <a href="#">{click}</a> 
              <FaArrowRightLong />
          </div>
      </div>
    </HoverTips>
  )
}

export default ServiceCart
