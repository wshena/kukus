import GenreCarousel from '@/components/carousels/GenreCarousel'
import MainWrapper from '@/components/wrapper/MainWrapper'
import { getAllGenres } from '@/utils/actions/fetcher.action'
import React from 'react'
import SearchFilter from './SearchFilter'

const page = async () => {
  const allGenre = await getAllGenres();

  return (
    <MainWrapper>
      <GenreCarousel
        title='popular genre' 
        data={allGenre} 
      />
      <SearchFilter />
    </MainWrapper>
  )
}

export default page