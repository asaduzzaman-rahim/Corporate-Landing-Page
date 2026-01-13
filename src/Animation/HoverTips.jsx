import React from 'react'
import { motion } from "motion/react"


const HoverTips = ({children}) => {
  return (
    <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
     >
      {children}
    </motion.div>
  )
}

export default HoverTips

