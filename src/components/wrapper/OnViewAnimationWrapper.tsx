'use client'
import React, { useState } from 'react'
import { motion } from 'motion/react';

const MotionBox = motion.div;

const OnViewAnimationWrapper = ({ children }: { children: React.ReactNode }) => {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <MotionBox
      // Jika belum pernah memasuki view, terapkan initial state
      initial={!hasEntered ? { opacity: 0, y: 50 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      // Callback ketika komponen memasuki viewport
      onViewportEnter={() => setHasEntered(true)}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </MotionBox>
  )
}

export default OnViewAnimationWrapper;
