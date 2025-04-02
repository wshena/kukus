'use client'

import React, { useEffect } from 'react'
import Link from 'next/link';
import { Box, Center, Flex, Heading, Stack, Text } from '@chakra-ui/react';

import { StarRating } from '@/components/StarRating';
import GameCoverImage from '@/components/GameCoverImage';
import GameDescription from '@/components/GameDescription';
import AddToWishlistButton from '@/components/buttons/AddToWishlistButton';
import { GameCoverSkeleton, GameDescriptionSkeleton, GameInfoSkeleton, GameTitleSkeleton } from '@/components/skeletons/Skeletons';

import { useGameDetail } from '@/hooks/useSWRCaching';
import GameGenres from '@/components/GameGenres';
import GameTags from '@/components/GameTags';
import GameSystemRequirement from '@/components/GameSystemRequirement';
import { useAppDispatch } from '@/lib/hooks';
import { setGameName } from '@/lib/redux/slice/game.action';

const GameDetail = ({id, initialData}:{id:number, initialData:any}) => {
  const dispatch = useAppDispatch();

  const { data, error, isLoading } = useGameDetail(id ? Number(id) : null, initialData);
  const gameData = data ?? {};

  const { name, rating, background_image, description, genres, tags, platforms, developers, publishers, released, playtime, stores } = gameData;
  const PcPlatform = platforms?.find((item:any) => item.platform.name === 'PC');

  useEffect(() => {
    dispatch(setGameName(name));
  }, [data]);

  if (isLoading || !data) return (
    <Stack gap={'20px'} width={'100%'}>
      <GameTitleSkeleton />
      <Flex alignItems={'start'} justifyContent={'space-between'} flexDir={{base:'column', lg:'row'}} gap={{base:'40px', md:'50px'}}>
        <Stack width={{base:'100%', lg:'60%'}} gap={'40px'}>
          <GameCoverSkeleton />
          <GameDescriptionSkeleton />
        </Stack>
        <Box width={{base:'100%', md:'40%'}}>
          <GameInfoSkeleton />
        </Box>
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
          <GameSystemRequirement platform={PcPlatform} name={name} />
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

export default GameDetail