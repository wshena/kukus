'use client'
import React, { useEffect } from 'react'
import { Center, Flex, Heading } from '@chakra-ui/react'

import GameScreenshot from '@/components/GameScreenshot';
import { GameScreenshotsSkeleton } from '@/components/skeletons/Skeletons';
import { useGameScreenShots } from '@/hooks/useSWRCaching';
import { useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/redux/store';

const GameScreenshotDisplay = ({id, initialData}:{id:number, initialData:any}) => {
  const {name} = useAppSelector((state:RootState) => state.game);
  const { data, error, isLoading } = useGameScreenShots(id ? Number(id) : null, initialData);

  if (error) return (
    <Center width={'100%'}>
      <div>Error loading game screenshots.</div>
    </Center>
  );
    
  if (data?.results?.length <= 0) return (
    <Center width={'100%'}>
      <div>Screenshots list not found.</div>
    </Center>
  );

  return (
    <>
      <Heading as={'h1'} fontWeight={'bold'} fontSize={{base:'2rem', md:'3rem'}}>{name}</Heading>

      <Center width={'100%'}>
        {isLoading ? (
          <Flex alignItems={'center'} gap={'20px'} flexWrap={'wrap'}>
            {Array.from({length: 6}).map((_, idx:number) => (
              <Center key={idx}>
                <GameScreenshotsSkeleton />
              </Center>
            ))}
          </Flex>
        ) : (
          <Flex alignItems={'center'} gap={'20px'} flexWrap={'wrap'}>
            {data?.results?.map((item:any) => (
              <Center width={{base:'100%', md:'fit-content'}} key={item.id}>
                <GameScreenshot data={item} />
              </Center>
            ))}
          </Flex>
        )}
      </Center>
    </>
  )
}

export default GameScreenshotDisplay