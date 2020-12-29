import React from 'react';
import {AiFillHeart,AiOutlineComment} from 'react-icons/ai'
import {PostBackground, UserContainer, UserPhoto, UserName,Photo, InteractionsContainer, Like, Comment, UserNameContainer, User, Legend, Time, CommentContainer, CommentText} from './PostsStyle'

export default function Post(){
    return(
        <PostBackground>
            <UserContainer>
                <UserPhoto/>
                <UserName>Ashley R.</UserName>
            </UserContainer>
            <Photo/>
            <InteractionsContainer>
               <Like href="#"><AiFillHeart size={35}/></Like>
               <Comment href="#"><AiOutlineComment size={35}/></Comment>
            </InteractionsContainer>
            <UserNameContainer>
                <User>Ashley R.</User><Legend>Aproveitando as minhas férias neste lugar incrível.</Legend>
            </UserNameContainer>
            <Time>HÁ 1 MINUTO.</Time>
            <CommentContainer>
                <CommentText>Adicione um comentário...</CommentText>
            </CommentContainer>
        </PostBackground>
    )
}