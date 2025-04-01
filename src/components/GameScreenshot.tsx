'use client'
import { Box, Center } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react'

const GameScreenshot = ({data}:{data:any}) => {
  const fallbackImage = '/image/placeholder-image.jpg';
  const initialSrc = data?.image || fallbackImage;
  
  const [imageSrc, setImageSrc] = useState(initialSrc)
  const [reloadCount, setReloadCount] = useState(0)
  
  const handleImageError = () => {
    if (reloadCount < 3) {
      setReloadCount(prev => prev + 1)
      // Tambahkan query param unik untuk menghindari cache
      setImageSrc(data?.image + `?reload=${new Date().getTime()}`)
    } else {
      setImageSrc(fallbackImage)
    }
  }

  return (
    <Center cursor={'pointer'}>
      <Box width={{base:'200px', md:'300px'}} height={{base:'180px', md:'200px'}} position={'relative'}>
        <Image src={imageSrc} fill alt={data?.id} loading='lazy' onError={handleImageError} />
      </Box>
    </Center>
  )
}

export default GameScreenshot