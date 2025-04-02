import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const GameGenres = ({genres}:{genres:GameGenresProps[]}) => {
  return (
    <Stack gap={'10px'}>
      <Heading as='h2' fontSize={'1.5rem'} fontWeight={'bold'}>Genres</Heading>
      <Flex alignItems={'center'} gap={'10px'} flexWrap={'wrap'}>
        {genres?.map((item:GameGenresProps) => (
          <Link key={item?.id} href={`/genre/${item?.id}/${item.slug}`}>
            <Box padding={'.3rem 1rem'} bgColor={'gray.700'} borderRadius={'5px'}>
              <Text fontSize={{base:'.9rem', md:'1rem'}} color={'white'}>{item?.name}</Text>
            </Box>
          </Link>
        ))}
      </Flex>
    </Stack>
  )
}

export default GameGenres