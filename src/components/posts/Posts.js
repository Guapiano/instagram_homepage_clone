import React from 'react';
import user from '../../assets/user.png';
import {AiFillHeart,AiOutlineComment} from 'react-icons/ai';
import {PostBackground, UserContainer, UserPhoto, UserName,Photo, InteractionsContainer, Like, Comment, UserNameContainer, User, Legend, Time, CommentContainer, CommentText, PublishButton} from './PostsStyle';

export default function Post(props){
    return(
        <PostBackground>
            <UserContainer>
                <UserPhoto src={user}/>
                <UserName>{props.userName}</UserName>
            </UserContainer>
            <Photo/>
            <InteractionsContainer>
               <Like href="#"><AiFillHeart size={35}/></Like>
               <Comment href="#"><AiOutlineComment size={35}/></Comment>
            </InteractionsContainer>
            <UserNameContainer>
                <User>{props.user}</User><Legend>{props.userLegend}</Legend>
            </UserNameContainer>
            <Time>{props.time}</Time>
            <CommentContainer>
                <CommentText>Adicione um comentário...</CommentText>
                <PublishButton href="#">Publicar</PublishButton>
            </CommentContainer>
        </PostBackground>
    )
}