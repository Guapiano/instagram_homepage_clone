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
          time="HÁ 20 MINUTOS"
          user="Demian Pabst Guapiano"
          userName="Demian Pabst Guapiano"
          userLegend="Tive uma ideia brilhante neste último mês! Irei compartilhar ela com vocês em breve..."
          />
        </MainContentsContainer>
      </Container>
  )
}

