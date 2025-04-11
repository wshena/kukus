'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Box, Center, Flex, Heading, Stack, Text } from '@chakra-ui/react';

import { StarRating } from '@/components/StarRating';
import GameCoverImage from '@/components/GameCoverImage';
import GameDescription from '@/components/GameDescription';
import AddToWishlistButton from '@/components/buttons/AddToWishlistButton';
import RemoveFromWishlist from '@/components/buttons/RemoveFromWishlist';
import { GameCoverSkeleton, GameDescriptionSkeleton, GameInfoSkeleton, GameTitleSkeleton } from '@/components/skeletons/Skeletons';

import { useGameDetail } from '@/hooks/useSWRCaching';
import GameGenres from '@/components/GameGenres';
import GameTags from '@/components/GameTags';
import GameSystemRequirement from '@/components/GameSystemRequirement';
import { useAppDispatch } from '@/lib/hooks';
import { setGameName } from '@/lib/redux/slice/game.action';

const GameDetail = ({ id, initialData, alreadyInWishlist }: { id: number, initialData: any, alreadyInWishlist: boolean }) => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGameDetail(id, initialData);
  const gameData = data ?? {};

  const { name, slug, rating, background_image, description, genres, tags, platforms, developers, publishers, released, playtime, stores } = gameData;
  const PcPlatform = platforms?.find((item: any) => item.platform.name === 'PC');

  // Buat state lokal untuk status wishlist
  const [inWishlist, setInWishlist] = useState(alreadyInWishlist);

  useEffect(() => {
    dispatch(setGameName(name));
  }, [data]);

  if (isLoading || !data) return (
    <Stack gap={'20px'} width={'100%'}>
      <GameTitleSkeleton />
      <Flex alignItems={'start'} justifyContent={'space-between'} flexDir={{ base: 'column', lg: 'row' }} gap={{ base: '40px', md: '50px' }}>
        <Stack width={{ base: '100%', lg: '60%' }} gap={'40px'}>
          <GameCoverSkeleton />
          <GameDescriptionSkeleton />
        </Stack>
        <Box width={{ base: '100%', md: '40%' }}>
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
        <Heading as={'h1'} fontWeight={'bold'} fontSize={{ base: '2rem', md: '3rem' }}>{name}</Heading>
        <Flex alignItems={'center'} gap={'8px'}>
          <StarRating rating={rating} />
          <Text fontSize={{ base: '.9rem', md: '1rem' }}>{rating}</Text>
        </Flex>
      </Stack>

      <Flex alignItems={'start'} justifyContent={'space-between'} flexDir={{ base: 'column', lg: 'row' }} gap={{ base: '40px', md: '50px' }}>
        <Stack width={{ base: '100%', lg: '60%' }} gap={'40px'}>
          <GameCoverImage image={background_image} name={name} />
          <GameDescription description={description} />
          <GameGenres genres={genres} />
          <GameTags tags={tags} />
          <GameSystemRequirement platform={PcPlatform} name={name} />
        </Stack>

        <Stack width={{ base: '100%', lg: '40%' }} gap={'20px'}>
          <Stack paddingBottom={'10px'} borderBottom={'1px solid white'}>
            <Text>Developers</Text>
            <Flex alignItems={'center'} gap={'5px'} flexWrap={'wrap'}>
              {developers?.map((item: any, index: number) => (
                <React.Fragment key={item.id}>
                  <Link href={`/developer/${item.id}/${item.slug}`}>
                    <Text cursor={'pointer'} fontSize={'1rem'} color={'gray.500'} _hover={{ color: 'white' }}>
                      {item.name}
                    </Text>
                  </Link>
                  {index < developers.length - 1 && (
                    <Text color={'gray.500'}>,</Text>
                  )}
                </React.Fragment>
              ))}
            </Flex>
          </Stack>
          <Stack paddingBottom={'10px'} borderBottom={'1px solid white'}>
            <Text>Publisher</Text>
            <Flex alignItems={'center'} gap={'5px'} flexWrap={'wrap'}>
              {publishers?.map((item: any, index: number) => (
                <React.Fragment key={item.id}>
                  <Link href={`/publisher/${item.id}/${item.slug}`}>
                    <Text cursor={'pointer'} fontSize={'1rem'} color={'gray.500'} _hover={{ color: 'white' }}>
                      {item.name}
                    </Text>
                  </Link>
                  {index < publishers.length - 1 && (
                    <Text color={'gray.500'}>,</Text>
                  )}
                </React.Fragment>
              ))}
            </Flex>
          </Stack>
          <Flex alignItems={'center'} justifyContent={'space-between'} paddingBottom={'10px'} borderBottom={'1px solid white'}>
            <Text>Released Date</Text>
            <Text>{released}</Text>
          </Flex>
          {playtime !== 0 && (
            <Flex alignItems={'center'} justifyContent={'space-between'} paddingBottom={'10px'} borderBottom={'1px solid white'}>
              <Text>Average Playtime</Text>
              <Text>{playtime} hours</Text>
            </Flex>
          )}
          <Stack paddingBottom={'10px'} borderBottom={'1px solid white'}>
            <Text>Where to buy</Text>
            <Flex alignItems={'center'} gap={'5px'} flexWrap={'wrap'}>
              {stores?.map((item: any, index: number) => (
                <React.Fragment key={item.id}>
                  <Link href={`https://${item.store.domain}`}>
                    <Text cursor={'pointer'} fontSize={'1rem'} color={'gray.500'} _hover={{ color: 'white' }}>
                      {item.store.name}
                    </Text>
                  </Link>
                  {index < stores.length - 1 && (
                    <Text color={'gray.500'}>,</Text>
                  )}
                </React.Fragment>
              ))}
            </Flex>
          </Stack>

          {inWishlist ? (
            <RemoveFromWishlist
              gameData={{
                id: id.toString(),
                title: name,
                game_cover_url: background_image,
                slug: slug
              }}
              onToggleWishlist={() => setInWishlist(false)}
            />
          ) : (
            <AddToWishlistButton
              gameData={{
                id: id.toString(),
                title: name,
                game_cover_url: background_image,
                slug: slug
              }}
              onToggleWishlist={() => setInWishlist(true)}
            />
          )}
        </Stack>
      </Flex>
    </>
  );
};

export default GameDetail;
