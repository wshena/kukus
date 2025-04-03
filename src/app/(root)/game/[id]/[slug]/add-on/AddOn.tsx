'use client'
import GameCard from '@/components/cards/GameCard';
import { CardSkeleton } from '@/components/skeletons/Skeletons';
import GridContentWrapper from '@/components/wrapper/GridContentWrapper';
import { useGameAdditions } from '@/hooks/useSWRCaching';
import { useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/redux/store';
import { Center, Heading } from '@chakra-ui/react';
import React from 'react'

const AddOn = ({id, initialData}:{id:number, initialData:any}) => {
  const { name } = useAppSelector((state:RootState) => state.game);
  const { data, error, isLoading } = useGameAdditions(id ? Number(id) : null, initialData);
  
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
        {name} - Add-ons
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

export default AddOn