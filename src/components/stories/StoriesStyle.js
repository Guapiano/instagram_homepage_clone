import styled from 'styled-components';

export const StoriesBackground = styled.div`
    height: 120px;
    max-width: 960px;
    margin: 30px auto;
    border-width: 1px;
    border-radius: 5px;
    border-style: solid;
    border-color: #dfdfdf;
    background-color: #fff; 
`;

export const StoriesContents = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const StorieContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const StoriesCircle = styled.div`
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
    border-style: solid;
    border-width: 2.5px;
    border-radius: 100px;
    border-color: #F50057;
    background-color: #222222;
`;

export const UserName = styled.p`
    color: #222222;
    font-size: 14px;
`;