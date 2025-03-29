import React from 'react'
import { Box, VStack } from '@chakra-ui/react'
import { CardHeight, CardWidth, MediumCardHeight, MediumCardWidth } from '@/constants'
import OnViewAnimationWrapper from '../wrapper/OnViewAnimationWrapper'

export const CardSkeleton = () => {
  return (
    <OnViewAnimationWrapper>
      <VStack width={CardWidth} gap={{base:'10px', md:'15px'}} alignItems={'start'}>
        <Box width={'100%'} height={CardHeight} bgColor={'gray.700'} borderRadius={'10px'} className='animate-pulse' />
        <Box width={'100%'} height={'10px'} bgColor={'gray.700'} borderRadius={'10px'} className='animate-pulse'></Box>
        <Box width={'50%'} height={'10px'} bgColor={'gray.700'} borderRadius={'10px'} className='animate-pulse'></Box>
      </VStack>
    </OnViewAnimationWrapper>
  )
}

export const MediumCardSkeleton = () => {
  return (
    <OnViewAnimationWrapper>
      <VStack width={MediumCardWidth} gap={{base:'10px', md:'15px'}} alignItems={'start'}>
        <Box width={'100%'} height={MediumCardHeight} bgColor={'gray.700'} borderRadius={'10px'} className='animate-pulse' />
        <Box width={'100%'} height={'10px'} bgColor={'gray.700'} borderRadius={'10px'} className='animate-pulse'></Box>
        <Box width={'50%'} height={'10px'} bgColor={'gray.700'} borderRadius={'10px'} className='animate-pulse'></Box>
      </VStack>
    </OnViewAnimationWrapper>
  )
}