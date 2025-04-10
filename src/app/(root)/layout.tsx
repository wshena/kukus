import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { getCurrentUser } from '@/utils/actions/auth.action';
import { generateWishlist } from '@/utils/actions/db.action';
import React from 'react'

const RootLayout = async ({children}:{children:React.ReactNode}) => {
  const user = await getCurrentUser();

  if (user?.success === true && user?.data !== null) {
    await generateWishlist();
  };

  return (
    <>
      <Navbar userData={user} />
      {children}
      <Footer />
    </>
  )
}

export default RootLayout