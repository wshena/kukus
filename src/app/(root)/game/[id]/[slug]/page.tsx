import { StarRating } from '@/components/StarRating';
import { getGameDetail } from '@/utils/actions/fetcher.action';
import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react'

const page = async ({params}:{params:any}) => {
  const { id } = params;
  const gameDetail = await getGameDetail(id);

  const { name, rating } = gameDetail?.res;

  return (
    <>
      <Stack width={'100%'} alignItems={'start'} gap={'10px'}>
        <Heading fontWeight={'bold'} fontSize={{base:'2rem', md:'3rem'}}>{name}</Heading>
        <Flex alignItems={'center'} gap={'8px'}>
          <StarRating rating={rating} />
          <Text fontSize={{base:'.9rem', md:'1rem'}}>{rating}</Text>
        </Flex>
      </Stack>
      {/* <Flex alignItems={'start'} justifyContent={'space-between'} gap={'50px'}>

      </Flex> */}
    </>
  )
}

export default page