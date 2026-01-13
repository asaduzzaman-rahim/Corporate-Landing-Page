import React from 'react'
import { motion } from "motion/react"


const PropAnimation = ({children}) => {
  return (
    <motion.div
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }}
        transition={{duration: 1.5}}
     >
      {children}
    </motion.div>
  )
}

export default PropAnimation

