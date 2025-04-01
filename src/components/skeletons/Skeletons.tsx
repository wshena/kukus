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

export const GameTitleSkeleton = () => {
  return (
    <OnViewAnimationWrapper>
      <VStack width={'100%'} gap={{base:'10px', md:'15px'}} alignItems={'start'}>
        <Box width={'100%'} height={{base:'10px', md:'30%'}} bgColor={'gray.700'} borderRadius={'10px'} className='animate-pulse' />
      </VStack>
    </OnViewAnimationWrapper>
  )
}

export const GameCoverSkeleton = () => {
  return (
    <OnViewAnimationWrapper>
      <Box width={'100%'} height={{base:'250px', md:'300px'}} bgColor={'gray.700'} borderRadius={'10px'} className='animate-pulse' />
    </OnViewAnimationWrapper>
  )
}

export const GameDescriptionSkeleton = () => {
  return (
    <OnViewAnimationWrapper>
      <VStack width={'100%'} gap={{base:'10px', md:'15px'}} alignItems={'start'}>
        <Box width={'100%'} height={{base:'10px', md:'30%'}} bgColor={'gray.700'} borderRadius={'10px'} className='animate-pulse' />
        <Box width={'100%'} height={{base:'10px', md:'30%'}} bgColor={'gray.700'} borderRadius={'10px'} className='animate-pulse' />
        <Box width={'100%'} height={{base:'10px', md:'30%'}} bgColor={'gray.700'} borderRadius={'10px'} className='animate-pulse' />
      </VStack>
    </OnViewAnimationWrapper>
  )
}

export const GameInfoSkeleton = () => {
  return (
    <OnViewAnimationWrapper>
      <VStack width={{base:'100%', lg:'40%'}} gap={{base:'10px', md:'15px'}} alignItems={'start'}>
        <Box width={'100%'} height={{base:'10px', md:'30%'}} bgColor={'gray.700'} borderRadius={'10px'} className='animate-pulse' />
        <Box width={'100%'} height={{base:'10px', md:'30%'}} bgColor={'gray.700'} borderRadius={'10px'} className='animate-pulse' />
        <Box width={'100%'} height={{base:'10px', md:'30%'}} bgColor={'gray.700'} borderRadius={'10px'} className='animate-pulse' />
        <Box width={'100%'} height={{base:'10px', md:'30%'}} bgColor={'gray.700'} borderRadius={'10px'} className='animate-pulse' />
      </VStack>
    </OnViewAnimationWrapper>
  )
}

export const GameScreenshotsSkeleton = () => {
  return (
    <OnViewAnimationWrapper>
      <Box width={{base:'200px', md:'300px'}} height={{base:'180px', md:'200px'}} bgColor={'gray.700'} borderRadius={'10px'} className='animate-pulse' />
    </OnViewAnimationWrapper>
  )
}