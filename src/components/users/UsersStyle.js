import styled from 'styled-components';

export const StorieContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    @media(max-width: 380px){
        display: none;
    }
`;

export const StoriesCircle = styled.img`
    width: 60px;
    height: 60px;
    cursor: pointer;
    margin-bottom: 10px;
    border-style: solid;
    border-width: 2.5px;
    border-radius: 100px;
    border-color: #F50057;
`;

export const UserName = styled.p`
    color: #222222;
    cursor: pointer;
    font-size: 14px;
`;