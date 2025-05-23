'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import GameCard from '@/components/cards/GameCard'
import { CardSkeleton } from '@/components/skeletons/Skeletons'
import MainWrapper from '@/components/wrapper/MainWrapper'
import { getGameList } from '@/utils/actions/fetcher.action'
import { Center, Heading, Stack, Text } from '@chakra-ui/react'
import CustomPagination from '@/components/Pagination'
import GridContentWrapper from '@/components/wrapper/GridContentWrapper'

const SearchPage = () => {
  const searchParams = useSearchParams()
  const q = searchParams.get('q') || '';
  const page = searchParams.get('page') || 1;
  
  const [gameList, setGameList] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    let isMounted = true;
    
    const fetchGames = async () => {
      if (!q) {
        setIsLoading(false);
        return;
      }
      
      setIsLoading(true);
      setError('');
      
      try {
        const data = await getGameList({
          page: page,
          search: q,
        });
        
        if (isMounted) {
          // Verifikasi data sebelum set state
          if (data && typeof data === 'object') {
            setGameList(data);
          } else {
            console.error('Invalid data format:', data);
            setError('Received invalid data format from API');
          }
        }
      } catch (error:any) {
        console.error('Error fetching games:', error);
        if (isMounted) {
          setError(error.message || 'Failed to fetch games');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchGames();
    
    return () => {
      isMounted = false;
    };
  }, [q, page]);

  if (!q || q === '') {
    return (
      <MainWrapper>
        <Center width={'100%'}>
          <Text fontSize={{base:'1.5rem', md:'2rem'}}>Provide input to the search from above</Text>
        </Center>
      </MainWrapper>
    )
  }
  
  return (
    <MainWrapper>
      <Stack alignItems={'center'} gap={{base:'30px', md:'40px'}}>
        {error && (
          <Center width="100%">
            <Text color="red.500">Error: {error}</Text>
          </Center>
        )}

        <Heading as={'h1'} fontSize={{base:'1.3rem', md:'2rem'}}>Search results for '{q}'</Heading>
        
        <GridContentWrapper>
          {isLoading ? (
            <>
              {Array.from({length:12}).map((_, idx) => (
                <CardSkeleton key={`skeleton-${idx}`} />
              ))}
            </>
          ) : (
            <>
              {(!gameList || 
                gameList.success === false || 
                !gameList.res?.results || 
                gameList.res.results.length <= 0) ? (
                <Center gridColumn="1 / -1" p={8}>
                  <Text>No games found matching your search criteria.</Text>
                </Center>
              ) : (
                <>
                  {gameList.res.results.map((item:any) => (
                    <Center width={'100%'} key={`game-${item.id}`}>
                      <GameCard data={item} />
                    </Center>
                  ))}
                </>
              )}
            </>
          )}
        </GridContentWrapper>
        
        {gameList?.res?.next && (
          <Center width={'100%'}>
            <CustomPagination count={gameList?.res?.count} pageSize={gameList?.res?.results?.length} defaultPage={1} />
          </Center>
        )}
      </Stack>
    </MainWrapper>
  )
}

export default SearchPage