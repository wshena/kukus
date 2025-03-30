import { SearchIcon } from '@/icons/Icon'
import React from 'react'

const SearchButton = () => {
  return (
    <button className='cursor-pointer' aria-label='search some games' role='search'>
      <SearchIcon size={25} color='white' />
    </button>
  )
}

export default SearchButton