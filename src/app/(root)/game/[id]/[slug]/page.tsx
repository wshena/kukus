'use client'

import AddToWishlistButton from '@/components/buttons/AddToWishlistButton';
import GameCoverImage from '@/components/GameCoverImage';
import GameDescription from '@/components/GameDescription';
import { GameCoverSkeleton, GameDescriptionSkeleton, GameInfoSkeleton, GameTitleSkeleton } from '@/components/skeletons/Skeletons';
import { StarRating } from '@/components/StarRating';
import { useGameDetail } from '@/hooks/useSWRCaching';
import { getGameDetail } from '@/utils/actions/fetcher.action';
import { Box, Center, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
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

const SystemRequirement = ({platform, name}:{platform:any, name:string}) => {
  return (
    <Box key={platform.platform.id}>
      {Object.keys(platform?.requirements).length !== 0 && (
        <Stack key={platform?.platform.id} alignItems={'start'}>
          <Heading as={'h1'} fontSize={'1.5rem'} fontWeight={'bold'} textTransform={'capitalize'}>
              {name} system requirement for {platform?.platform?.name}
          </Heading>
          <Stack gap={'10px'} padding={'1rem'} borderRadius={'10px'} bgColor={'gray.700'}>
            {platform?.requirements?.minimum && (
              <Text whiteSpace="pre-line">
                {platform?.requirements?.minimum}
              </Text>
            )}
            {platform?.requirements?.recommended && (
              <Text whiteSpace="pre-line">
                {platform?.requirements?.recommended?.replaceAll('&quot;', '"')}
              </Text>
            )}
          </Stack>
        </Stack>
      )}
    </Box>
  )
}

const page = () => {
  const params = useParams();
  const id = params?.id;

  const { data, error, isLoading } = useGameDetail(id ? Number(id) : null);
  const gameData = data ?? {};

  const { name, rating, background_image, description, genres, tags, platforms, developers, publishers, released, playtime, stores } = gameData;
  const PcPlatform = platforms?.find((item:any) => item.platform.name === 'PC');

  if (isLoading || !data) return (
    <Stack gap={'20px'} width={'100%'}>
      <GameTitleSkeleton />
      <Flex alignItems={'start'} justifyContent={'space-between'} flexDir={{base:'column', lg:'row'}} gap={{base:'40px', md:'50px'}}>
        <Stack width={{base:'100%', lg:'60%'}} gap={'40px'}>
          <GameTitleSkeleton />
          <GameCoverSkeleton />
          <GameDescriptionSkeleton />
        </Stack>
        <GameInfoSkeleton />
      </Flex>
    </Stack>
  );

  if (error) return (
    <Center width={'100%'}>
      <div>Error loading game detail.</div>
    </Center>
  );

  if (!data) return (
    <Center width={'100%'}>
      <div>Game not found.</div>
    </Center>
  );
  
  return (
    <>
      <Stack width={'100%'} alignItems={'start'} gap={'10px'}>
        <Heading as={'h1'} fontWeight={'bold'} fontSize={{base:'2rem', md:'3rem'}}>{name}</Heading>
        <Flex alignItems={'center'} gap={'8px'}>
          <StarRating rating={rating} />
          <Text fontSize={{base:'.9rem', md:'1rem'}}>{rating}</Text>
        </Flex>
      </Stack>
      
      <Flex alignItems={'start'} justifyContent={'space-between'} flexDir={{base:'column', lg:'row'}} gap={{base:'40px', md:'50px'}}>
        <Stack width={{base:'100%', lg:'60%'}} gap={'40px'}>
          {/* cover image */}
          <GameCoverImage image={background_image} name={name} />
          {/* game descriptions */}
          <GameDescription description={description} />
          {/* genres */}
          <GameGenres genres={genres} />
          {/* tags */}
          <GameTags tags={tags} />
          {/* system requirements */}
          <SystemRequirement platform={PcPlatform} name={name} />
        </Stack>

        <Stack width={{base:'100%', lg:'40%'}} gap={'20px'}>
          {/* developers */}
          <Stack paddingBottom={'10px'} borderBottom={'1px solid white'}>
            <Text>Developers</Text>
            <Flex alignItems={'center'} gap={'5px'} flexWrap={'wrap'}>
              {developers?.map((item:DeveloperProps, index:number) => (
                <React.Fragment key={item.id}>
                  <Link href={`/publisher/${item.id}/${item.slug}`}>
                    <Text cursor={'pointer'} fontSize={'1rem'} color={'gray.500'} _hover={{color:'white'}}>
                      {item.name}
                    </Text>
                  </Link>
                  {index < developers.length - 1  && (
                    <Text color={'gray.500'}>,</Text>
                  )}
                </React.Fragment>
              ))}
            </Flex>
          </Stack>
          {/* publishers */}
          <Stack paddingBottom={'10px'} borderBottom={'1px solid white'}>
            <Text>Publisher</Text>
            <Flex alignItems={'center'} gap={'5px'} flexWrap={'wrap'}>
              {publishers?.map((item:PublisherProps, index:number) => (
                <React.Fragment key={item.id}>
                  <Link href={`/publisher/${item.id}/${item.slug}`}>
                    <Text cursor={'pointer'} fontSize={'1rem'} color={'gray.500'} _hover={{color:'white'}}>
                      {item.name}
                    </Text>
                  </Link>
                  {index < publishers.length - 1  && (
                    <Text color={'gray.500'}>,</Text>
                  )}
                </React.Fragment>
              ))}
            </Flex>
          </Stack>
          {/* relesed date */}
          <Flex alignItems={'center'} justifyContent={'space-between'} paddingBottom={'10px'} borderBottom={'1px solid white'}>
            <Text>Released Date</Text>
            <Text>{released}</Text>
          </Flex>
          {/* average playtime */}
          {playtime !== 0 && (
            <Flex alignItems={'center'} justifyContent={'space-between'} paddingBottom={'10px'} borderBottom={'1px solid white'}>
              <Text>Average Playtime</Text>
              <Text>{playtime} hours</Text>
            </Flex>
          )}
          {/* where to buy */}
          <Stack paddingBottom={'10px'} borderBottom={'1px solid white'}>
            <Text>Where to buy</Text>
            <Flex alignItems={'center'} gap={'5px'} flexWrap={'wrap'}>
              {stores?.map((item:GameStoresProps, index:number) => (
                <React.Fragment key={item.id}>
                  <Link href={`https://${item.store.domain}`}>
                    <Text cursor={'pointer'} fontSize={'1rem'} color={'gray.500'} _hover={{color:'white'}}>
                      {item.store.name}
                    </Text>
                  </Link>
                  {index < stores.length - 1  && (
                    <Text color={'gray.500'}>,</Text>
                  )}
                </React.Fragment>
              ))}
            </Flex>
          </Stack>
          
          <AddToWishlistButton />
        </Stack>
      </Flex>
    </>
  )
}

export default page