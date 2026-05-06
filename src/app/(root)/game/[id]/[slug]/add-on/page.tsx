import React from 'react'
import { getGameAdditions, getGameDetail } from '@/utils/actions/fetcher.action';
import dynamic from 'next/dynamic';

const AddOn = dynamic(() => import('./AddOn'));

const page = async ({params}:{params:any}) => {
  const { id } = params;  
  const gameAddOn = await getGameAdditions(id);

  return (
    <AddOn id={id} initialData={gameAddOn?.res} />
  )
}

export default page