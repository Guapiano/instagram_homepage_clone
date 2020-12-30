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
    @media(max-width: 380px){
        width: 95%;
        height: 450px;
        min-height: 450px;
    }
`;

export const UserContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    padding: 40px;
    align-items: center; 
    @media(max-width: 380px){
        width: 95%;
        padding: 30px 0px 30px 20px;
        display: flex;
        align-items: center;
    }
`;

export const UserPhoto = styled.img`
    width: 35px;
    height: 35px;
    border-width: 2px;
    border-style: solid;
    border-radius: 100px;
    border-color: #F50057;
`;

export const UserName = styled.p`
    color: #222222;
    font-size: 14px;
    font-weight: bold;
    margin-left: 10px;
`;

export const Photo = styled.div`
    width: 100%;
    height: 510px;
    background-image: url('https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_960_720.png');
    @media(max-width: 380px){
        height: 200px;
        background-size: cover;
        background-repeat: no-repeat;
    }
`;

export const InteractionsContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    padding: 35px;  
    align-items: center; 
    @media(max-width: 380px){
        width: 100%;
        padding: 30px 0px 30px 20px;
    }
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
    padding: 0px 0px 0px 40px;
    @media(max-width: 380px){
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 10px;
        padding: 0px 0px 5px 5px;
    }
`;

export const User = styled.p`
    color: #222222;
    font-size: 14px;
    font-weight: bold;
    @media(max-width: 380px){
        margin: 10px 0px 10px 20px;
    }
`;

export const Legend = styled.p`
    color: #222222;
    font-size: 14px;
    margin-left: 5px;
    @media(max-width: 380px){
        width: 100%;
        max-width: 305px; 
        text-align: justify;
        margin: 0 0px 0px 20px;
    }
`;

export const Time = styled.p`
    color: #adadad;
    font-size: 14px;
    margin-bottom: 30px;
    padding: 10px 0px 0px 40px;
    @media(max-width: 380px){
        margin-bottom: 20px;
        padding: 0px 0px 0px 25px;
    }
`;

export const CommentContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    border-top: solid;
    align-items: center; 
    border-width: 1px;
    border-color: #dfdfdf;
    background-color: #fff;
    padding: 0px 40px 0px 40px;
    border-bottom-left-radius: 5px;
    justify-content: space-between;
    border-bottom-right-radius: 5px;
    @media(max-width: 380px){
        display: none; 
    }
`;

export const CommentText = styled.p`
    color: #adadad;
    font-size: 14px;
`;

export const PublishButton = styled.a`
    color: #00B0FF;
    font-size: 14px;
    font-weight: bold;
`;