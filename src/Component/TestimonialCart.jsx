import React from 'react'

const TestimonialCart = ({ClintTittle,ClintPhoto,ClintName,Customer}) => {
  return (
      <div className='w-[370px] h-[342px] px-[56px] py-[52px] rounded-[10px] shadow-[0px_0px_20px_rgba(0,0,0,0.2)] ' >
            <p className='text-[16px] leading-[32px] mt-[20px] mb-[30px]' >{ClintTittle}</p>
            <div className='flex items-center gap-[16px]'>
                <img className=' w-[40px] h-[40px]' src={ClintPhoto} alt="Clint1" />
                <div>
                    <h4>{ClintName}</h4>
                    <p>{Customer}</p>
                </div>
            </div>
        </div>
  )
}

export default TestimonialCart
