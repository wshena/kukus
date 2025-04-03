'use client'
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image';
import React, { useState } from 'react'
import OnViewAnimationWrapper from './wrapper/OnViewAnimationWrapper';
import { GameAchievementSkeleton } from './skeletons/Skeletons';

const AchievementCard = ({data}:{data:GameAchievementProps}) => {
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

  if (!data) {
    return (
      <GameAchievementSkeleton />
    )
  }

  return (
    <OnViewAnimationWrapper>
      <Flex flexDir={{base:'column', md:'row'}} alignItems={'start'} gap={{base:'20px', md:'30px'}}>
        <Box position={'relative'} width={{base:'100px', md:'150px'}} height={{base:'100px', md:'150px'}}>
          <Image src={imageSrc} alt={data?.name} fill onError={handleImageError} style={{
            objectFit: 'cover'
          }} />
        </Box>
        <Stack alignItems={'start'} gap={'10px'}>
          <Heading as={'h3'}>{data?.name}</Heading>
          <Text>{data?.description}</Text>
        </Stack>
      </Flex>
    </OnViewAnimationWrapper>
  )
}

export default AchievementCard