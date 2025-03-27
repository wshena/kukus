'use client'
import { AngleLeftIcon, AngleRightIcon } from '@/icons/Icon';
import { Box, Center, Flex, Heading, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useRef } from 'react'
import Slider from 'react-slick';
import Carousel from './Carousel';
import { CardSkeleton } from '../skeletons/Skeletons';
import { CardCarouselSettings, H1FontSize } from '@/constants';

interface Props {
  title: string;
  url: string;
}

const Game_Carousel = ({title, url}:Props) => {
  const sliderRef = useRef<Slider>(null);

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <Stack gap={'20px'}>
      <Flex width={'100%'} alignItems={'center'} justifyContent={'space-between'}>
        {url ? (
          <Link href={'#'}>
            <Flex alignItems={'center'} gap={'10px'} cursor={'pointer'}>
              <Heading as={'h1'} fontSize={H1FontSize} textTransform={'capitalize'} fontWeight={'bold'}>{title}</Heading>
              <AngleRightIcon size={20} color='white' />
            </Flex>
          </Link>
        ) : (
          <Heading as={'h1'} fontSize={H1FontSize} textTransform={'capitalize'} fontWeight={'bold'}>{title}</Heading>
        )}

        {/* next prev button for desktop */}
        <Flex display={{base:'none', md:'flex'}} alignItems={'center'} gap={'0px'}>
          <button onClick={handlePrev}>
            <Box padding={'.4rem'} borderRadius={'full'} cursor={'pointer'} _hover={{bgColor:'gray.700'}}> <AngleLeftIcon size={25} color='white' /> </Box>
          </button>
          <button onClick={handleNext}> 
            <Box padding={'.4rem'} borderRadius={'full'} cursor={'pointer'} _hover={{bgColor:'gray.700'}}> <AngleRightIcon size={25} color='white' /> </Box>
          </button>
        </Flex>
      </Flex>

      <Carousel ref={sliderRef} settings={CardCarouselSettings}>
        {Array.from({ length: 20 }).map((_, idx:number) => {
          return (
            <Box key={idx} className="">
              <Center width={'100%'}>
                <CardSkeleton />
              </Center>
            </Box>
          )
        })}
      </Carousel>

      {/* next prev button for mobile */}
      <Center width={'100%'} display={{md:'none'}}>
        <Flex alignItems={'center'} gap={'0px'}>
          <button onClick={handlePrev}>
            <Box padding={'.4rem'} borderRadius={'full'} cursor={'pointer'} _hover={{bgColor:'gray.700'}}> <AngleLeftIcon size={20} color='white' /> </Box>
          </button>
          <button onClick={handleNext}> 
            <Box padding={'.4rem'} borderRadius={'full'} cursor={'pointer'} _hover={{bgColor:'gray.700'}}> <AngleRightIcon size={20} color='white' /> </Box>
          </button>
        </Flex>
      </Center>
    </Stack>
  )
}

export default Game_Carousel