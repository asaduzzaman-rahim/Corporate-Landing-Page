import React from 'react'

const FooterCart = ({list1, list2, list3, list4, list5, list6}) => {
  return (
    <div>
      <ul>
        <li className='text-[18px] font-[700] text-[#313131] cursor-pointer  mb-[31px]'>{list1}</li>
        <li className='text-[16px] font-[400] text-[#676767] cursor-pointer  mb-[24px]'>{list2}</li>
        <li className='text-[16px] font-[400] text-[#676767] cursor-pointer  mb-[24px]'>{list3}</li>
        <li className='text-[16px] font-[400] text-[#676767] cursor-pointer  mb-[24px]'>{list4}</li>
        <li className='text-[16px] font-[400] text-[#676767] cursor-pointer  mb-[24px]'>{list5}</li>
        <li className='text-[16px] font-[400] text-[#676767] cursor-pointer  mb-[24px]'>{list6}</li>
      </ul>
    </div>
  )
}

export default FooterCart
