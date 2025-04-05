import { getAllTags, getGameList } from '@/utils/actions/fetcher.action'
import React from 'react'
import { slugToText } from '@/utils/actions/general.action';
import MainWrapper from '@/components/wrapper/MainWrapper';
import GenreCarousel from '@/components/carousels/GenreCarousel';
import Tags from './Tags';

const page = async ({params}:{params:any}) => {
  const { id, slug } = params;
  const [gameList, allGenre] = await Promise.all([
    getGameList({
      page: 1,
      tags: {id}
    }),
    getAllTags()
  ]);

  const tags = slugToText(slug);

  return (
    <MainWrapper>
      <Tags id={id} initialData={gameList?.res} tags={tags} />
      {allGenre?.success && (
        <GenreCarousel
          title='popular tags' 
          data={allGenre} 
        />
      )}
    </MainWrapper>
  )
}

export default page