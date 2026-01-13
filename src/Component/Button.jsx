import React  from 'react'

  const Button = ({classname, children}) => {
  return  (
       <div className={`${classname} bg-[#89D32A] text-white font-bold text-[20px] px-[30px] py-[15px] rounded-[10px] inline-block cursor-pointer hover:bg-[#629f13]`}> {children} </div>
 ) 
}

export default Button
