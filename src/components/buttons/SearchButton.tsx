'use client'
import { SearchIcon } from '@/icons/Icon'
import { useAppDispatch } from '@/lib/hooks'
import { setOffScreenDiv } from '@/lib/redux/slice/utility.action'
import React from 'react'

const SearchButton = () => {
  const dispatch = useAppDispatch();

  return (
    <button 
      onClick={() => {
        dispatch(setOffScreenDiv({
          status: true,
          type:'search-form'
        }))
      }}
      className='cursor-pointer'
      aria-label='search some games'
      role='search'>
      <SearchIcon size={25} color='white' />
    </button>
  )
}

export default SearchButton