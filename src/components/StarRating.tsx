import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface StarRatingProps {
  rating: number; // Nilai rating maksimal 5
}

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  // Hitung banyak full star
  const fullStars = Math.floor(rating);
  // Jika nilai rating tidak bilangan bulat, maka ada 1 half star, jika bilangan bulat, maka 0 half star
  const hasHalfStar = rating % 1 !== 0;
  const halfStars = hasHalfStar ? 1 : 0;
  // Sisa bintang hingga maksimal 5 akan dianggap sebagai empty/hollow star
  const emptyStars = 5 - fullStars - halfStars;

  const stars = [];

  // Tambahkan full star
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar size={20} key={`full-${i}`} color="white" />);
  }
  
  // Tambahkan half star jika ada
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt size={20} key="half" color="white" />);
  }
  
  // Tambahkan empty star
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar size={20} key={`empty-${i}`} color="white" />);
  }

  return (
    <Flex alignItems={'center'} justifyContent={'center'} gap={'3px'}>
      {stars}
    </Flex>
  )
};
