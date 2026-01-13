import React  from 'react'

const Grid = ({children, className}) => {
  return (
    <div className={`${className} grid` }>
      {children}
    </div>
  )
}

export default Grid
