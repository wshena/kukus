import { getAllGenres, getGameList } from '@/utils/actions/fetcher.action'
import React from 'react'
import Genre from './Genre';
import { slugToText } from '@/utils/actions/general.action';
import MainWrapper from '@/components/wrapper/MainWrapper';
import GenreCarousel from '@/components/carousels/GenreCarousel';

const page = async ({params}:{params:any}) => {
  const { id, slug } = params;
  const [gameList, allGenre] = await Promise.all([
    getGameList({
      page: 1,
      genres: {id}
    }),
    getAllGenres()
  ]);

  const genre = slugToText(slug);

  return (
    <MainWrapper>
      <Genre id={id} initialData={gameList?.res} genre={genre} />
      {allGenre?.success && (
        <GenreCarousel
          title='popular genre' 
          data={allGenre} 
        />
      )}
    </MainWrapper>
  )
}

export default page