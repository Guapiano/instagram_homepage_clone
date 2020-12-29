import React from 'react';
import {StorieContainer, StoriesCircle, UserName} from './UsersStyle'

export default function Users(props){
    return(
        <StorieContainer>
            <StoriesCircle></StoriesCircle>
            <UserName>{props.name}</UserName>
        </StorieContainer>
    )
}