import React from 'react';
import {StorieContainer, StoriesCircle, UserName} from './UsersStyle';
import user_2 from '../../assets/user-2.png';

export default function Users(props){

    return(
        <StorieContainer>
            <StoriesCircle src={user_2}></StoriesCircle>
            <UserName>{props.name}</UserName>
        </StorieContainer>
    )
}