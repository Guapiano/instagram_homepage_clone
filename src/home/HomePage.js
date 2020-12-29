import React from 'react';
import {Container,MainContentsContainer} from './HomePageStyle';
import Header from '../components/header/Header';
import Stories from '../components/stories/Stories';
import Post from '../components/posts/Posts';

export default function Home() {
  return(
      <Container>
        <Header/>
        <MainContentsContainer>
          <Stories/>
          <Post/>
          <Post/>
          <Post/>
        </MainContentsContainer>
      </Container>
  )
}

