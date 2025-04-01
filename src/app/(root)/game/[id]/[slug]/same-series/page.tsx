'use client'
import GameCard from '@/components/cards/GameCard';
import { CardSkeleton } from '@/components/skeletons/Skeletons';
import GridContentWrapper from '@/components/wrapper/GridContentWrapper';
import { useGameOnTheSameSeries } from '@/hooks/useSWRCaching';
import { Center, Heading } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import React from 'react'

const page = () => {
  const params = useParams();
  const id = params?.id;

  const { data, error, isLoading } = useGameOnTheSameSeries(id ? Number(id) : null);

  if (error) return (
    <Center width={'100%'}>
      <div>Error loading game list.</div>
    </Center>
  );
  
  if (data?.results?.length <= 0) return (
    <Center width={'100%'}>
      <div>Game list not found.</div>
    </Center>
  );
    
  return (
    <>
      <Heading as={'h1'} fontWeight={'bold'} fontSize={{base:'2rem', md:'3rem'}} textTransform={'capitalize'}>
        game part of the same series
      </Heading>

      {isLoading ? (
        <GridContentWrapper>
          {Array.from({length:10}).map((_,idx:number) => (
            <CardSkeleton key={`skeleton - ${idx}`} />
          ))}
        </GridContentWrapper>
      ) : (
        <GridContentWrapper>
          {data?.results?.map((item:any) => (
            <GameCard key={item.id} data={item} />
          ))}
        </GridContentWrapper>
      )}
    </>
  )
}

export default page