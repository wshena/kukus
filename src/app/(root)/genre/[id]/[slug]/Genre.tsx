'use client'
import GameCard from '@/components/cards/GameCard';
import CustomPagination from '@/components/Pagination';
import { CardSkeleton } from '@/components/skeletons/Skeletons';
import GridContentWrapper from '@/components/wrapper/GridContentWrapper';
import { useGameList } from '@/hooks/useSWRCaching'
import { Center, Heading, Stack, Text } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';
import React from 'react'

const Genre = ({id, initialData, genre}:{id:number, initialData:any, genre:string}) => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || 1;

  const { data, error, isLoading } = useGameList({
    page: page,
    genres: id
  }, initialData);

  if (error) return (
    <Center width={'100%'}>
      <div>Error loading game screenshots.</div>
    </Center>
  );

  console.log(data)

  return (
    <>
      <Stack alignItems={'start'} gap={'20px'}>
        <Heading as={'h1'} fontSize={{base:'2rem', md:'2rem'}} textTransform={'capitalize'} fontWeight={'bold'}>{genre} games</Heading>
        <Text width={{base:'100%', md:'70%'}}>Kukus Games Store offers some of the best {genre} games. Download today and start playing fun and exciting PC {genre} games.</Text>
      </Stack>

      <GridContentWrapper>
        {isLoading ? (
          <>
            {Array.from({length:12}).map((_, idx) => (
              <CardSkeleton key={`skeleton-${idx}`} />
            ))}
          </>
        ) : (
          <>
            {(!data || 
              !data.results || 
              data.results.length <= 0) ? (
              <Center gridColumn="1 / -1" p={8}>
                <Text>No games found matching your search criteria.</Text>
              </Center>
            ) : (
              <>
                {data?.results.map((item:any) => (
                  <Center width={'100%'} key={`game-${item.id}`}>
                    <GameCard data={item} />
                  </Center>
                ))}
              </>
            )}
          </>
        )}
      </GridContentWrapper>
      
      {data?.next && (
        <Center width={'100%'}>
          <CustomPagination count={data?.count} pageSize={data?.results?.length} defaultPage={1} />
        </Center>
      )}
    </>
  )
}

export default Genre