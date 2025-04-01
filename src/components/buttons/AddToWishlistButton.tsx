import { Center, Text } from '@chakra-ui/react'
import React from 'react'

const AddToWishlistButton = () => {
  return (
    <button aria-label='add to wishlist'>
      <Center padding={'.7rem'} width={'100%'} bgColor={'blue.500'} cursor={'pointer'} borderRadius={'5px'} _hover={{scale:'95%'}} className='transition-all duration-300 ease-in-out'>
        <Text>Add to Wishlist</Text>
      </Center>
    </button>
  )
}

export default AddToWishlistButton