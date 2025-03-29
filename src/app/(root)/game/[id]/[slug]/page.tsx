import GameCoverImage from '@/components/GameCoverImage';
import GameDescription from '@/components/GameDescription';
import { StarRating } from '@/components/StarRating';
import { getGameDetail } from '@/utils/actions/fetcher.action';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react'

const page = async ({params}:{params:any}) => {
  const { id } = params;
  const gameDetail = await getGameDetail(id);

  const { name, rating, background_image, description } = gameDetail?.res;

  return (
    <>
      <Stack width={'100%'} alignItems={'start'} gap={'10px'}>
        <Heading fontWeight={'bold'} fontSize={{base:'2rem', md:'3rem'}}>{name}</Heading>
        <Flex alignItems={'center'} gap={'8px'}>
          <StarRating rating={rating} />
          <Text fontSize={{base:'.9rem', md:'1rem'}}>{rating}</Text>
        </Flex>
      </Stack>
      
      <Flex alignItems={'start'} justifyContent={'space-between'} flexDir={{base:'column', lg:'row'}} gap={{base:'40px', md:'50px'}}>
        <Stack width={{base:'100%', lg:'60%'}} border={'1px solid white'} gap={'40px'}>
          {/* cover image */}
          <GameCoverImage image={background_image} name={name} />
          {/* game descriptions */}
          <GameDescription description={description} />
        </Stack>
      </Flex>
    </>
  )
}

export default page