'use client'
import * as React from 'react';
import Navbar from '@/components/Header/navbar';
import NewsCarousel from '@/components/Carousel/NewsCarousel';
import NewsCard from '@/components/Cards/NewsCard';
import { Container } from '@mui/material';
import Posts from '@/components/Posts';
// my json file for CardSliders and Carousel
import dataCardSliders from '../../public/json/dataCardSliders.json';
import dataCarousel from '../../public/json/dataCarousel.json';
// my json file for posts


export default function Home() {
  return (
    
      <>
      <Navbar/>
      <Container sx={{height:150}}>
      </Container>
      <NewsCarousel items={dataCarousel.items}/>
      <NewsCard items={dataCardSliders.items}/>
      <Posts/>
      </>
  );
}
