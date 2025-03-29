'use client'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useState } from 'react'

const GameCoverImage = ({image, name}:{image:string, name:string}) => {
  const fallbackImage = '/image/placeholder-image.jpg';
  const initialSrc = image || fallbackImage;
  
  const [imageSrc, setImageSrc] = useState(initialSrc)
  const [reloadCount, setReloadCount] = useState(0)
  
  const handleImageError = () => {
    // 3 kali reload
    if (reloadCount < 3) {
      setReloadCount(reloadCount + 1)
      // Tambahkan query param unik untuk menghindari cache
      setImageSrc(image + `?reload=${new Date().getTime()}`)
    }
  }

  return (
    <Box width={'100%'} position={'relative'} height={{base:'250px', md:'300px'}}>
      <Image src={imageSrc} onError={handleImageError} alt={name} fill objectFit='cover' className='rounded-[10px] rounded-[10px]' />
    </Box>
  )
}

export default GameCoverImage