'use client'
import React from 'react'
import { AppProgressBar as RoutingProgressBar } from 'next-nprogress-bar';

const ProgressBar = () => {
  return (
    <RoutingProgressBar 
      height="4px"
      color="#19d1ff"
      options={{ showSpinner: false }}
      shallowRouting
    />
  )
}

export default ProgressBar