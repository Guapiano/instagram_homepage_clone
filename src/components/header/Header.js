import React from 'react';
import {AiFillHome, AiOutlineSend, AiOutlineUser,AiOutlineHeart} from 'react-icons/ai';
import {HeaderComponent, HeaderContents, IconsContainer, SearchInput, Button} from './HeaderStyle';

export default function Header(){

    return(  
        <HeaderComponent>
            <HeaderContents>
                <SearchInput placeholder="Pesquisar"/>
                <IconsContainer>
                    <Button><AiFillHome size={20}/></Button>
                    <Button><AiOutlineSend size={20} /></Button>
                    <Button><AiOutlineHeart size={20}/></Button>
                    <Button><AiOutlineUser size={20}/></Button>
                </IconsContainer>
            </HeaderContents>
        </HeaderComponent>
    )
}