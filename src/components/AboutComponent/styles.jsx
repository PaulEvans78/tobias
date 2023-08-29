import styled from "styled-components";


export const StyledAboutMainContainer = styled.div`
    max-width: 100vw;
    /* overflow-x: hidden; */
`;

export  const StyledImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100vw;
`;

export  const StyledAboutImg = styled.img`
    max-width: 100%;
    align-self: center;
    object-fit: cover;
`;

export  const StyledHContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100vw;
    min-width: 100vw;
    background-color: rgba(0, 0, 0, 0.8);  
    padding: 2em 0em 2em 0em;
    margin-bottom: 8em;
    overflow: hidden;

    animation-name: fadeIn;
    animation-duration: 2s;
    animation-delay: 0s;

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @media screen and (max-width: 960px) {
        margin-bottom: 0em;
        padding: 1em 0em 1em 0em;
    }

    @media screen and (max-width: 700px) {
        display: none;
    }
`;

export  const Styledh3 = styled.h3`
    text-align: left;
    margin-top: 0.25em;
    margin-bottom: 0.25em;
    white-space: pre-wrap;
    color: whitesmoke;
    font-family: 'MuseoModerno', cursive;
    font-size: 52px;
    letter-spacing: 0.5rem;
`;

export const StyledMobContainer = styled.div`
    display: none;

    @media screen and (max-width: 700px) {
        display: flex;
        justify-content: center;
    }
`;

export  const StyledInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 100%;
    padding: 3em;
    font-family: 'Lexend';
    font-size: 16px;
    line-height: 1.5rem;
    overflow: hidden;

    @media screen and (max-width: 960px) {
        padding: 2em;
    }

    @media screen and (max-width: 700px) {
        padding: 1em;
    }
`;

export  const Styledp = styled.p`
    color: whitesmoke;
    font-size: 16px;
    margin-right: 50px;
    margin-left: 50px;
    text-align: left;

    @media screen and (max-width: 700px) {
        text-align: center;
    }
`;

export const StyledTypewriter = styled.span `
    align-self: center; 
    font-family: 'Delicious Handrawn', cursive;
    font-size: 32px;
    color: whitesmoke;
    margin-top: 1em;
    margin-bottom: 1.5em;

    @media screen and (max-width: 700px) {
        text-align: center;
        line-height: 1.25em;
    }
`;

export  const StyledAboutImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: space-evenly;
    align-items: center;
    width: 100%;
    margin-top: 2em;
    margin-bottom: 6em;

    @media screen and (max-width: 700px) {
        flex-direction: column;
        row-gap: 3em;
        margin-bottom: 14em;
    }
`;

export  const StyledAboutSmallImages = styled.img`
    width: 30%;
    align-self: center;
    object-fit: cover;

    @media screen and (max-width: 700px) {
        width: 80%;
        
    }
`;