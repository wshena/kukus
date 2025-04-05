'use client'
import React from 'react'
import { BsFilter } from "react-icons/bs"
import { RootState } from '@/lib/redux/store'
import { setGenreFilter } from '@/lib/redux/slice/filter.action'
import GenericFilter from './GenericFilter'
import { allGenre } from '@/constants'

const GenreFilter = ({ pathname }: { pathname: string }) => {
  const reduxSelector = (state: RootState) => state.filter.genreFilter;
  
  return (
    <GenericFilter
      filterName="genre"
      displayName="Genre"
      options={allGenre}
      icon={<BsFilter />}
      pathname={pathname}
      reduxActionCreator={setGenreFilter}
      reduxSelector={reduxSelector}
      paramName="genre"
    />
  )
}

export default GenreFilter
