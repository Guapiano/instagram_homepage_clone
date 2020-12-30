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
    @media(max-width: 380px){
        display: none;
    }
`;

export const StoriesContents = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;