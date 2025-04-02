import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const GameTags = ({tags}:{tags:GameTagsProps[]}) => {
  return (
    <Stack gap={'10px'}>
      <Heading as='h2' fontSize={'1.5rem'} fontWeight={'bold'}>Tags</Heading>
      <Flex alignItems={'center'} gap={'10px'} flexWrap={'wrap'}>
        {tags?.map((item:GameTagsProps) => (
          <Link key={item?.id} href={`/tags/${item?.id}/${item.slug}`}>
            <Box padding={'.3rem 1rem'} bgColor={'gray.700'} borderRadius={'5px'}>
              <Text fontSize={{base:'.9rem', md:'1rem'}} color={'white'}>{item?.name}</Text>
            </Box>
          </Link>
        ))}
      </Flex>
    </Stack>
  )
}

export default GameTags