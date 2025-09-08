import { useEffect, useState } from 'react';
import { info } from 'console';
import Banner from '../../components/Banner';
import ProductsList from '../../components/ProductsList';
import residente from '../../assets/images/resident.png';
import diablo from '../../assets/images/diablo.png';
import zelda from '../../assets/images/zelda.png';
import starWars from '../../assets/images/star_wars.png';

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api';

export interface GalleryItem {
  type: 'video' | 'image';
  url: string;
}

export type Game = {
  id: number;
  name: string;
  title: string;
  description: string;
  release_date?: string;
  prices: {
    discount?: number;
    old?: number;
    current?: number;
  };
  details: {
    category: string;
    system: string;
    developer: string;
    publisher: string;
    languages: string[];
  };
  media: {
    thumbnail: string;
    cover: string;
    gallery: GalleryItem[];
  };
};

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery();
  const { data: soonGames } = useGetSoonQuery();

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductsList
          id="on-sale"
          games={onSaleGames}
          title="Promoções"
          background="gray"
        />
        <ProductsList
          id="coming-soon"
          games={soonGames}
          title="Em Breve"
          background="black"
        />
      </>
    );
  }

  return <h4>Carregando...</h4>;
};

export default Home;
