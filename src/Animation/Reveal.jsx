import React from 'react'
import { motion } from "motion/react"

const Reveal = ({children}) => {
  return (
    <div className="relative overflow-hidden">
        <motion.div
        variants={{
            hidden: {opacity: 0, y: 75},
            visible : {opacity: 1, y: 0},
        }}
            initial="hidden"
            animate="visible"
            // initial={{ opacity: 0, scale: 0.5}}
            // animate={{opacity:1, scale: 1}}
            transition={{ duration:2}}
        >{children}</motion.div>
    </div>
  )
}

export default Reveal
