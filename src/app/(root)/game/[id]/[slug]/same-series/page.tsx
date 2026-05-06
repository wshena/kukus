import { getGameDetail, getGameOnTheSameSeries } from '@/utils/actions/fetcher.action';
import React from 'react'
import dynamic from 'next/dynamic';

const SameSeries = dynamic(() => import('./SameSeries'));

const page = async ({params}:{params:any}) => {
  const { id } = params;
  const sameSeries = await getGameOnTheSameSeries(id);
    
  return (
    <SameSeries id={id} initialData={sameSeries?.res} />
  )
}

export default page