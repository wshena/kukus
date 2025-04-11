import GameWishlistCard from '@/components/cards/GameWishlistCard'
import { CardSkeleton } from '@/components/skeletons/Skeletons'
import GridContentWrapper from '@/components/wrapper/GridContentWrapper'
import { Center, Text } from '@chakra-ui/react'
import React from 'react'

const Wishlist = ({gameList}:{gameList:any}) => {
  return (
    <GridContentWrapper>
      {gameList?.length <= 0 ? (
        <>
          {Array.from({length:12}).map((_, idx) => (
            <CardSkeleton key={`skeleton-${idx}`} />
          ))}
        </>
      ) : (
        <>
          {(!gameList || 
            gameList?.length <= 0) ? (
            <Center gridColumn="1 / -1" p={8}>
              <Text>No games found matching your search criteria.</Text>
            </Center>
          ) : (
            <>
              {gameList?.map((item:any) => (
                <Center width={'100%'} key={`game-${item.id}`}>
                  <GameWishlistCard data={item} />
                </Center>
              ))}
            </>
          )}
        </>
        )}
    </GridContentWrapper>
  )
}

export default Wishlist