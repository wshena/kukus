import MainWrapper from '@/components/MainWrapper';
import { StarRating } from '@/components/StarRating';
import { getGameDetail } from '@/utils/actions/fetcher.action';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react'

const page = async ({params}:{params:any}) => {
  const { id, slug } = params;
  const gameDetail = await getGameDetail(id);

  const { name, rating } = gameDetail?.res;

  return (
    <MainWrapper>
      <Stack width={'100%'} alignItems={'start'} gap={'10px'}>
        <Heading fontWeight={'bold'} fontSize={{base:'2rem', md:'3rem'}}>{name}</Heading>
        <Flex alignItems={'center'} gap={'8px'}>
          <StarRating rating={rating} />
          <Text fontSize={{base:'.9rem', md:'1rem'}}>{rating}</Text>
        </Flex>
      </Stack>
    </MainWrapper>
  )
}

export default page