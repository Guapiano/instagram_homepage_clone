import styled from 'styled-components';

export const PostBackground = styled.div`
    height: 820px;
    max-width: 960px;
    margin: 30px auto;
    border-width: 1px;
    border-radius: 5px;
    border-style: solid;
    border-color: #dfdfdf;
    background-color: #fff; 
`;

export const UserContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    padding: 40px;
    align-items: center; 
`;

export const UserPhoto = styled.div`
    width: 40px;
    height: 40px;
    border-width: 2px;
    border-style: solid;
    border-radius: 100px;
    border-color: #F50057;
    background-color: #222222;
`;

export const UserName = styled.p`
    color: #222222;
    font-size: 14px;
    font-weight: bold;
    margin-left: 14px;
`;

export const Photo = styled.div`
    width: 100%;
    height: 510px;
    background-color: #222222;
`;

export const InteractionsContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    padding: 35px;  
    align-items: center; 
`;

export const Like = styled.button`
    border: none;
    color: #ed4956;
    cursor: pointer;
    background-color: transparent;
`;

export const Comment = styled.button`
    border: none;
    color: #222222;
    cursor: pointer;
    margin-left: 20px;
    background-color: transparent;
`;

export const UserNameContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0px 0px 0px 35px;
`;

export const User = styled.p`
    font-weight: bold;
    font-size: 14px;
    color: #222222;
`;

export const Legend = styled.p`
    color: #222222;
    font-size: 14px;
    margin-left: 5px;
`;

export const Time = styled.p`
    color: #adadad;
    font-size: 14px;
    padding: 10px 0px 0px 35px;
`;