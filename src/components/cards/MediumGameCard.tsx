'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import OnViewAnimationWrapper from '../wrapper/OnViewAnimationWrapper';
import { Box, Text, VStack } from '@chakra-ui/react';
import { MediumCardHeight, MediumCardWidth } from '@/constants';
import Image from 'next/image';
import { truncateText } from '@/utils/actions/general.action';
import { MediumCardSkeleton } from '../skeletons/Skeletons';

const MediumGameCard = ({data}:{data:any}) => {
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
      <MediumCardSkeleton />
    )
  }

  return (
    <Link href={`/game/${id}/${slug}`} className='w-fit cursor-pointer'>
      <OnViewAnimationWrapper>
        <VStack width={MediumCardWidth} gap={{base:'10px', md:'15px'}} alignItems={'start'}>
          <Box position={'relative'} width={'100%'} height={MediumCardHeight}>
            <Image src={imageSrc} alt={name} fill style={{
              objectFit: 'cover',
              borderRadius: '10px'
            }} onError={handleImageError} loading='lazy' />
          </Box>
          <Text fontSize={{base:'.9rem', md:'1.3rem'}}>{name}</Text>
          <Text fontSize={{base:'.8rem', md:'1rem'}} color={'gray.500'}>
            {truncateText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat ipsa, earum et ut qui obcaecati, ad aliquid itaque harum quisquam molestias quos reprehenderit velit cum. Tenetur debitis quae veritatis?', 100)}
          </Text>
        </VStack>
      </OnViewAnimationWrapper>
    </Link>
  )
}

export default MediumGameCard