'use client'

import GameScreenshot from '@/components/GameScreenshot';
import { GameScreenshotsSkeleton } from '@/components/skeletons/Skeletons';
import { useGameScreenShots } from '@/hooks/useSWRCaching';
import { Center, Flex, Heading } from '@chakra-ui/react'
import { useParams } from 'next/navigation';
import React from 'react'

const page = () => {
  const params = useParams();
  const id = params?.id;  

  const { data, error, isLoading } = useGameScreenShots(id ? Number(id) : null);
  
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
      <Heading as={'h1'} fontWeight={'bold'} fontSize={{base:'2rem', md:'3rem'}} textTransform={'capitalize'}>
        Game Screenshots
      </Heading>

      <Center width={'100%'}>
        {isLoading ? (
          <Flex width={'fit-content'} alignItems={'center'} gap={'20px'} flexWrap={'wrap'}>
            {Array.from({length: 6}).map((_, idx:number) => (
              <GameScreenshotsSkeleton key={idx} />
            ))}
          </Flex>
        ) : (
          <Flex width={'fit-content'} alignItems={'center'} gap={'20px'} flexWrap={'wrap'}>
            {data?.results?.map((item:any) => (
              <GameScreenshot key={item.id} data={item} />
            ))}
          </Flex>
        )}
      </Center>
    </>
  )
}

export default page