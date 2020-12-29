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
          user="Ashley R."
          time="HÁ 1 MINUTO."
          userName="Ashley R."
          userLegend="Aproveitando minhas férias neste lugar maravilhoso."
          />

          <Post
          user="Demian P."
          time="HÁ 20 SEGUNDOS."
          userName="Demian P."
          userLegend="Olha que Design incrível que foi desenvolvido por mim durante minhas férias!"
          />
        </MainContentsContainer>
      </Container>
  )
}

