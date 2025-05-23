'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import OnViewAnimationWrapper from '../wrapper/OnViewAnimationWrapper';
import { Box, Text, VStack } from '@chakra-ui/react';
import { CardHeight, CardWidth } from '@/constants';
import Image from 'next/image';
import { CardSkeleton } from '../skeletons/Skeletons';
import { truncateText } from '@/utils/actions/general.action';

const GameCard = ({data}:{data:any}) => {
  const { id, slug, name, background_image } = data;

  const fallbackImage = '/image/placeholder-image.jpg';
  const initialSrc = background_image || fallbackImage;

  const [imageSrc, setImageSrc] = useState(initialSrc)
  const [reloadCount, setReloadCount] = useState(0)

  const handleImageError = () => {
    if (reloadCount < 3) {
      setReloadCount(prev => prev + 1)
      // Tambahkan query param unik untuk menghindari cache
      setImageSrc(background_image + `?reload=${new Date().getTime()}`)
    } else {
      setImageSrc(fallbackImage)
    }
  }

  if (!data) {
    return (
      <CardSkeleton />
    )
  }
  
  return (
    <Link href={`/game/${id}/${slug}`} className='w-fit cursor-pointer'>
      <OnViewAnimationWrapper>
        <VStack width={CardWidth} gap={{base:'10px', md:'15px'}} alignItems={'start'}>
          <Box position={'relative'} width={'100%'} height={CardHeight}>
            <Image src={imageSrc} alt={name} fill style={{
              objectFit: 'cover',
              borderRadius: '10px'
            }} onError={handleImageError} loading='lazy' />
          </Box>
          <Text fontSize={{base:'.9rem', md:'1rem'}}>{truncateText(name, 20)}</Text>
        </VStack>
      </OnViewAnimationWrapper>
    </Link>
  )
}

export default GameCard