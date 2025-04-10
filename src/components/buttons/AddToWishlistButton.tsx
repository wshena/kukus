'use client'

import { Center, Spinner, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useAppDispatch } from '@/lib/hooks'
import { setAlert } from '@/lib/redux/slice/alert.action'

interface GameProps {
  id: string;
  title: string;
  game_cover_url: string;
  slug: string;
}

const AddToWishlistButton = ({ gameData }: { gameData: GameProps }) => {
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const handleAddToWishlist = async () => {
    setIsLoading(true);
  
    try {
      const response = await fetch('/api/wishlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(gameData)
      });
  
      const result = await response.json();
  
      dispatch(setAlert({
        type: result.success ? 'success' : 'warning',
        label: result.message
      }));
  
    } catch (error: any) {
      console.error(error);
      dispatch(setAlert({
        type: 'error',
        label: error.message || 'Terjadi kesalahan saat menambahkan ke wishlist.'
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button onClick={handleAddToWishlist} aria-label="add to wishlist">
      <Center
        padding=".7rem"
        width="100%"
        bgColor="blue.500"
        cursor="pointer"
        borderRadius="5px"
        _hover={{ transform: 'scale(0.95)' }}
        className="transition-all duration-300 ease-in-out"
      >
        {isLoading ? 
          <Spinner size="sm" color="black" /> : 
          <Text color="white">Add to Wishlist</Text>
        }
      </Center>
    </button>
  );
};

export default AddToWishlistButton;
