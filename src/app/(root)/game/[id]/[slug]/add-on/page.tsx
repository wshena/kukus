import React from 'react'
import AddOn from './AddOn';
import { getGameAdditions, getGameDetail } from '@/utils/actions/fetcher.action';

const page = async ({params}:{params:any}) => {
  const { id } = params;  
  const gameAddOn = await getGameAdditions(id);

  return (
    <AddOn id={id} initialData={gameAddOn?.res} />
  )
}

export default page