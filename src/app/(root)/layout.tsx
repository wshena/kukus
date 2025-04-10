import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { getCurrentUser } from '@/utils/actions/auth.action';
import React from 'react'

const RootLayout = async ({children}:{children:React.ReactNode}) => {
  const user = await getCurrentUser();
  
  return (
    <>
      <Navbar userData={user} />
      {children}
      <Footer />
    </>
  )
}

export default RootLayout