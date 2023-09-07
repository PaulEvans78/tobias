import styled from "styled-components";


export const StyledSituationCard = styled.div`
    position: relative; 
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    max-width: 100vw;
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

export const StyledSituationCardImg = styled.img`
    width: 100%;
    align-self: center;
    object-fit: cover;
 `; 

export const StyledHeaderContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-items: flex-start; */
    max-width: 100%;
    margin-bottom: 15em;
    padding: 2em 2em 1em 2em;

    @media screen and (max-width: 1460px) {
    margin-bottom: 8em;
}

    @media screen and (max-width: 960px) {
        margin-bottom: 0em;
    }
`;

export const Styledh2 = styled.h2`
    margin-bottom: 0em;
    white-space: pre-wrap;
    color: whitesmoke;
    font-family: 'MuseoModerno', cursive;
    font-size: 64px;
    margin-left: 1em;

    @media screen and (max-width: 1460px) {
    font-size: 48px;
    margin-left: 0em;
}

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
    /* background-color: rgba(0, 0, 0, 0.9);      */
    margin-bottom: 2.5em;
    padding: 2em 2em 1em 2em;
`;

export const StyledCardp = styled.p`
    color: whitesmoke;
    font-size: 16px;
    line-height: 2rem;
    text-align: left;
`;




