'use client'
import React from 'react'
import { HiSortAscending } from "react-icons/hi"
import { RootState } from '@/lib/redux/store'
import { setPlatformFilter } from '@/lib/redux/slice/filter.action'
import { allPlatforms } from '@/constants'
import GenericFilter from './GenericFilter'

const PlatformFilter = ({ pathname }: { pathname: string }) => {
  const reduxSelector = (state: RootState) => state.filter.platformFilter;
  
  return (
    <GenericFilter
      filterName="platform"
      displayName="Platform"
      options={allPlatforms}
      icon={<HiSortAscending />}
      pathname={pathname}
      reduxActionCreator={setPlatformFilter}
      reduxSelector={reduxSelector}
      paramName="platform"
    />
  )
}

export default PlatformFilter