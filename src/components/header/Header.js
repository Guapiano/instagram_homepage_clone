import React from 'react';
import {AiFillHome, AiOutlineSend, AiOutlineUser,AiOutlineHeart} from 'react-icons/ai';
import {HeaderComponent, HeaderContents, IconsContainer, SearchInput, Link} from './HeaderStyle';

export default function Header(){
    return(
        <HeaderComponent>
            <HeaderContents>
                <SearchInput placeholder="Pesquisar"/>
                <IconsContainer>
                    <Link href="#"><AiFillHome size={25} /></Link>
                    <Link href="#"><AiOutlineSend size={25} /></Link>
                    <Link href="#"><AiOutlineHeart size={25}/></Link>
                    <Link href="#"><AiOutlineUser size={25}/></Link>
                </IconsContainer>
            </HeaderContents>
        </HeaderComponent>
    )
}