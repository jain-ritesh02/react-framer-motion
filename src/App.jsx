import React from 'react'
import { motion } from "framer-motion"

const App = () => {
  return (
    <div>
      <motion.div
      animate={{
      x: 600,
      y: 300,
      scale: 1,
      rotate: 360,
      }} 
      transition=
      {{
        duration: 1,
        ease: 'easeInOut'
      }}
  className="box">
    BOX
  </motion.div>
    </div>
  )
}

export default App
