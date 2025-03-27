import React from 'react'
import MainWrapper from '@/components/MainWrapper'
import { getGameList } from '@/utils/actions/fetcher.action'
import { CardSkeleton } from '@/components/skeletons/Skeletons'
import SectionAndTitle from '@/components/SectionAndTitle'
import CardCarousel from '@/components/carousels/CardCarousel'

const page = async () => {
  // const GameList = await getGameList({
  //   page: 1,
  //   page_size: 20
  // });

  return (
    <MainWrapper>
      <CardCarousel title='Discover Something New' url='#' />
      <CardCarousel title='New and Upcoming Released' url='#' />
      <CardCarousel title='Top Most Popular' url='#' />
      <CardCarousel title='recently updated' url='#' />
    </MainWrapper>
  )
}

export default page