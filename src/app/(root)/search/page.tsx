import MainWrapper from '@/components/wrapper/MainWrapper'
import React from 'react'

const page = ({searchParams}:{searchParams:any}) => {
  const { q } = searchParams;
  
  return (
    <MainWrapper>
      <h1>{q}</h1>
      <div>page</div>
    </MainWrapper>
  )
}

export default page