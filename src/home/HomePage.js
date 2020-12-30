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
          <Post 
          time="Há 1 hora"
          user="The_Guapiano"
          userName="The_Guapiano"
          userLegend="Estou tentnado clonar a interface do Instagram Web para praticar."
          />
        </MainContentsContainer>
      </Container>
  )
}

