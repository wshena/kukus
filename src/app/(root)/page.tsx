import React from 'react'
import MainWrapper from '@/components/wrapper/MainWrapper'
import { getGameList } from '@/utils/actions/fetcher.action'
import CardCarousel from '@/components/carousels/CardCarousel'
import { getRandomItems, getThreeRandomItems } from '@/utils/actions/general.action'
import { Center, Flex } from '@chakra-ui/react'
import MediumGameCard from '@/components/cards/MediumGameCard'
import HomeJumbotron from '@/components/HomeJumbotron'

const page = async () => {
  const [gameList, recentlyUpdatedGameList, upcomingReleasedGameList, MostPopularGameList] = await Promise.all([
    getGameList({ page: 1, page_size: 20 }),
    getGameList({ page: 1, page_size: 20, ordering: '-updated' }),
    getGameList({ page: 1, page_size: 20, ordering: ['-released', '-rating'] }),
    getGameList({ page: 1, page_size: 20, ordering: '-metacritic' }),
  ]);
  
  const threeRandomGameList = getThreeRandomItems(gameList?.res?.results);
  const threeRandomRecentyUpdated = getThreeRandomItems(recentlyUpdatedGameList?.res?.results);
  const threeRandomMostPopular = getThreeRandomItems(MostPopularGameList?.res?.results);
  const homeJumbotronItemlist = getRandomItems(gameList?.res?.results, 5);

  return (
    <MainWrapper>
      <HomeJumbotron itemList={homeJumbotronItemlist} />
      <CardCarousel 
        title='Discover Something New' 
        url={`/collection/discover-something-new`} 
        data={gameList} 
      />
      <CardCarousel 
        title='New and Upcoming Released' 
        url={`/collection/upcoming-released`} 
        data={upcomingReleasedGameList} 
      />
      
      <Flex width={'100%'} gap={{base:'20px', md:'0px'}} alignItems={'center'} justifyContent={'space-between'} flexWrap={'wrap'}>
        {threeRandomGameList?.map((item:any) => (
          <Center width={{base:'100%', md:'fit-content'}} key={item?.id}>
            <MediumGameCard key={item?.id} data={item} />
          </Center>
        ))}
      </Flex>

      <CardCarousel 
        title='Top Most Popular' 
        url={`/collection/most-popular`} 
        data={MostPopularGameList}
      />

      <Flex width={'100%'} gap={{base:'20px', md:'0px'}} alignItems={'center'} justifyContent={'space-between'} flexWrap={'wrap'}>
        {threeRandomRecentyUpdated?.map((item:any) => (
          <Center width={{base:'100%', md:'fit-content'}} key={item?.id}>
            <MediumGameCard key={item?.id} data={item} />
          </Center>
        ))}
      </Flex>

      <CardCarousel 
        title='recently updated' 
        url={`/collection/recently-update`} 
        data={recentlyUpdatedGameList} 
      />

      <Flex width={'100%'} gap={{base:'20px', md:'0px'}} alignItems={'center'} justifyContent={'space-between'} flexWrap={'wrap'}>
        {threeRandomMostPopular?.map((item:any) => (
          <Center width={{base:'100%', md:'fit-content'}} key={item?.id}>
            <MediumGameCard key={item?.id} data={item} />
          </Center>
        ))}
      </Flex>
    </MainWrapper>
  )
}

export default page