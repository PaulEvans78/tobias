import styled from "styled-components";


export const StyledCountriesCard = styled.div`
    position: relative; 
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    max-width: 100vw;
    background-color: black;
    font-family: 'Lexend';
    font-size: 1.2rem;
    overflow: hidden;
`;

export  const StyledImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100vw;
`;
   
export const StyledCountriesCardImg = styled.img`
    width: 100%;
    align-self: center;
    object-fit: cover;
 `; 

export const StyledHeaderContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 100%;
    margin-bottom: 2.5em;
    padding: 2em 2em 1em 2em;

    @media screen and (max-width: 960px) {
        margin-bottom: 0em;
    }
`;

export const Styledh3 = styled.h3`
    margin-bottom: 0em;
    white-space: pre-wrap;
    color: whitesmoke;
    font-family: 'MuseoModerno', cursive;
    font-size: 72px;

    @media screen and (max-width: 960px) {
        margin-bottom: 0em;
    }

    @media screen and (max-width: 700px) {
        font-size: 38px;
    }   
`;

export const StyledInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 100%;
    background-color: rgba(0, 0, 0, 0.9);     
    margin-bottom: 2.5em;
    padding: 2em 2em 1em 2em;
`;

export const StyledCardp = styled.p`
     color: whitesmoke;
    font-size: 16px;
    line-height: 2rem;
    text-align: left;
`;




