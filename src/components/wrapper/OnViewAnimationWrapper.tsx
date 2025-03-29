'use client'
import React from 'react'
import { motion } from 'motion/react';

const MotionBox = motion.div;

const OnViewAnimationWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className='w-fit'
    >
      {children}
    </MotionBox>
  )
}

export default OnViewAnimationWrapper