'use client'
import React, { useState } from 'react'
import { CardSkeleton } from '../skeletons/Skeletons';
import Link from 'next/link';
import OnViewAnimationWrapper from '../wrapper/OnViewAnimationWrapper';
import { Box, Text, VStack } from '@chakra-ui/react';
import { CardHeight, CardWidth } from '@/constants';
import Image from 'next/image';
import { truncateText } from '@/utils/actions/general.action';

interface Props {
  id: number,
  slug: string,
  title: string,
  created_at: string,
  wishlist_id: string,
  cover_image_url: string
}

const GameWishlistCard = ({data}:{data:Props}) => {
  const fallbackImage = '/image/placeholder-image.jpg';
  const initialSrc = data?.cover_image_url || fallbackImage;

  const [imageSrc, setImageSrc] = useState(initialSrc)
  const [reloadCount, setReloadCount] = useState(0)

  const handleImageError = () => {
    if (reloadCount < 3) {
      setReloadCount(prev => prev + 1)
      // Tambahkan query param unik untuk menghindari cache
      setImageSrc(data?.cover_image_url + `?reload=${new Date().getTime()}`)
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
    <Link href={`/game/${data?.id}/${data?.slug}`} className='w-fit cursor-pointer'>
      <OnViewAnimationWrapper>
        <VStack width={CardWidth} gap={{base:'10px', md:'15px'}} alignItems={'start'}>
          <Box position={'relative'} width={'100%'} height={CardHeight}>
            <Image src={imageSrc} alt={data?.title} fill style={{
              objectFit: 'cover',
              borderRadius: '10px'
            }} onError={handleImageError} loading='lazy' />
          </Box>
          <Text fontSize={{base:'.9rem', md:'1rem'}}>{truncateText(data?.title, 20)}</Text>
        </VStack>
      </OnViewAnimationWrapper>
    </Link>
  )
}

export default GameWishlistCard