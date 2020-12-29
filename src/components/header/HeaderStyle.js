import styled from 'styled-components';

export const HeaderComponent = styled.div`
    width: 100%;
    height: 80px;
    border-bottom: solid;
    border-color: #dfdfdf;
    background-color: #fff;
    border-width: 1px;
`;

export const HeaderContents = styled.div`
    height: 100%;
    display: flex;
    margin: 0 auto;
    max-width: 960px;
    align-items: center;
    justify-content: space-between;
`;

export const SearchInput = styled.input`
    height: 40px;
    width: 220px;
    padding: 10px;
    border-radius: 4px;
    border-style: solid;
    border-width: 0.5px;
    border-color: #cccccc;
    background-color: #fafafa;
    ::placeholder{
        color: #cccccc;
    }
`;

export const IconsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Link = styled.a`
    color: #333333;
    margin: 0px 0px 0px 15px;
`;