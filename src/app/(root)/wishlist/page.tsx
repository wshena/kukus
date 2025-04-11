import MainWrapper from '@/components/wrapper/MainWrapper'
import { getCurrentUser, isAuthenticated } from '@/utils/actions/auth.action';
import { getUserWishlist } from '@/utils/actions/db.action';
import { Center, Heading } from '@chakra-ui/react';
import React from 'react'
import Wishlist from './Wishlist';
import { redirect } from 'next/navigation';

export async function generateMetadata() {
  return {
    title: `Wishlist - Kukus`,
    description: 'Your personal wishlist, add with the game you want to buy',
  };
}

const page = async () => {
  const user = await getCurrentUser();
  const userWishlist = await getUserWishlist(user?.data?.id ? user?.data?.id : '');  

  if (!user) {
    // Redirect server side jika user tidak terautentikasi
    redirect('/login');
  }

  return (
    <MainWrapper>

      {userWishlist?.data?.gameList?.length <= 0 ? (
        <Center width={'100%'}>
          <Heading as={'h1'} fontWeight={'bold'} fontSize={{base:'2rem', md:'3rem'}}>Your Wishlist is empty</Heading>
        </Center>
      ) : (
        <>
          <Heading as={'h1'} fontWeight={'bold'} fontSize={{base:'2rem', md:'3rem'}}>Your Wishlist</Heading>
          <Wishlist gameList={userWishlist?.data?.gameList} />
        </>
      )}
    </MainWrapper>
  )
}

export default page