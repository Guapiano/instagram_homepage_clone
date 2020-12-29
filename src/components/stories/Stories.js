import React from 'react';
import {StoriesBackground, StoriesContents, StorieContainer, StoriesCircle, UserName} from './StoriesStyle'

export default function Stories(){
    return(
        <StoriesBackground>
            <StoriesContents>

                <StorieContainer>
                    <StoriesCircle></StoriesCircle>
                    <UserName>Ashley R.</UserName>
                </StorieContainer>

                <StorieContainer>
                    <StoriesCircle></StoriesCircle>
                    <UserName>Demian P.</UserName>
                </StorieContainer>

                <StorieContainer>
                    <StoriesCircle></StoriesCircle>
                    <UserName>Fabrício A.</UserName>
                </StorieContainer>

                <StorieContainer>
                    <StoriesCircle></StoriesCircle>
                    <UserName>Yasmin M.</UserName>
                </StorieContainer>

                <StorieContainer>
                    <StoriesCircle></StoriesCircle>
                    <UserName>Paulo T.</UserName>
                </StorieContainer>

                <StorieContainer>
                    <StoriesCircle></StoriesCircle>
                    <UserName>Ribeiro N.</UserName>
                </StorieContainer>

                <StorieContainer>
                    <StoriesCircle></StoriesCircle>
                    <UserName>Sílvio A.</UserName>
                </StorieContainer>

            </StoriesContents>
        </StoriesBackground>
    )
}