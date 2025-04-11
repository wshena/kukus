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

interface RemoveFromWishlistProps {
  gameData: GameProps;
  onToggleWishlist: () => void;
}

const RemoveFromWishlist = ({ gameData, onToggleWishlist }: RemoveFromWishlistProps) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveFromWishlist = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/wishlist', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gameId: gameData.id })
      });

      const result = await response.json();

      if (result.success) {
        dispatch(setAlert({ type: 'success', label: result.message }));
        onToggleWishlist();
      } else {
        dispatch(setAlert({ type: 'error', label: result.message }));
      }
    } catch (error: any) {
      console.error(error);
      dispatch(setAlert({
        type: 'error',
        label: error.message || 'Terjadi kesalahan saat menghapus game dari wishlist.'
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button onClick={handleRemoveFromWishlist} aria-label="remove from wishlist">
      <Center
        padding=".7rem"
        width="100%"
        bgColor="red.500"
        cursor="pointer"
        borderRadius="5px"
        _hover={{ transform: 'scale(0.95)' }}
        className="transition-all duration-300 ease-in-out"
      >
        {isLoading ? 
          <Spinner size="sm" color="black" /> : 
          <Text color="white">Remove from Wishlist</Text>
        }
      </Center>
    </button>
  );
};

export default RemoveFromWishlist;
