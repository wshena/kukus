import { getGameAchievement } from '@/utils/actions/fetcher.action';
import React from 'react'
import Achievements from './Achievements';

const page = async ({params}:{params:any}) => {
  const {id} = params;
  const achievements = await getGameAchievement(id);

  return (
    <Achievements id={id} initialData={achievements?.res} />
  )
}

export default page