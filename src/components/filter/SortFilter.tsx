'use client'
import React from 'react'
import { BiSortAlt2 } from "react-icons/bi"
import { RootState } from '@/lib/redux/store'
import { setSortOrder } from '@/lib/redux/slice/filter.action'
import { allOrder } from '@/constants'
import GenericFilter from './GenericFilter'

const SortFilter = ({ pathname }: { pathname: string }) => {
  const reduxSelector = (state: RootState) => state.filter.sortOrder;
  
  return (
    <GenericFilter
      filterName="sort"
      displayName="Sort"
      options={allOrder}
      icon={<BiSortAlt2 />}
      pathname={pathname}
      reduxActionCreator={setSortOrder}
      reduxSelector={reduxSelector}
      paramName="order"
    />
  )
}

export default SortFilter