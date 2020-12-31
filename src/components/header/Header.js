import React from 'react';
import {AiFillHome, AiOutlineSend, AiOutlineUser,AiOutlineHeart} from 'react-icons/ai';
import {HeaderComponent, HeaderContents, IconsContainer, SearchInput, Navigate} from './HeaderStyle';

export default function Header(){
    return(
        <HeaderComponent>
            <HeaderContents>
                <SearchInput placeholder="Pesquisar"/>
                <IconsContainer>
                    <Navigate href="#"><AiFillHome size={25} /></Navigate>
                    <Navigate href="#"><AiOutlineSend size={25} /></Navigate>
                    <Navigate href="#"><AiOutlineHeart size={25}/></Navigate>
                    <Navigate href="#"><AiOutlineUser size={25}/></Navigate>
                </IconsContainer>
            </HeaderContents>
        </HeaderComponent>
    )
}