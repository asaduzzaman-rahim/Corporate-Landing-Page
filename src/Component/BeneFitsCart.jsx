import React from 'react'
import HoverTips from '../Animation/HoverTips';


const BeneFitsCart = ({img, tittle, para}) => {
  return (
    <>
    <HoverTips>
          <div className=' w-[370px] px-[35px] h-[350px] text-center rounded-[10px] hover:shadow-[0px_0px_20px_rgba(0,0,0,0.3)]'>
              <img className='w-[92px] h-[92] mx-auto pb-[20px]  ' src={img} alt="" />
              <h3 className='text-[22px] font-bold pt-[20px] pb-[10px] leading-[32px] tracking-[0px] '>{tittle}</h3>
              <p className='pb-[36px] text-[16px] leading-[32px]' >{para}</p>
          </div>
    </HoverTips>
    </>
  )
}

export default BeneFitsCart
