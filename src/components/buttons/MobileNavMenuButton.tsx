'use client'
import React from 'react'
import { MobileNavMenuIcon } from '@/icons/Icon'
import { useAppDispatch } from '@/lib/hooks'
import { setMobileNavMenu } from '@/lib/redux/slice/utility.action'

const MobileNavMenuButton = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(setMobileNavMenu(true));

  return (
    <button onClick={handleClick} className='block md:hidden'>
      <MobileNavMenuIcon size={25} color='white' />
    </button>
  )
}

export default MobileNavMenuButton