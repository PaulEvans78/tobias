import styled from "styled-components";

export const StyledDirectorsMainContainer = styled.div`
    max-width: 100vw;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export  const StyledImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    max-width: 100vw; 
    /* max-height: 100vw; */
`;

export  const StyledDirectorsImg = styled.img`
    width: 100%;
    align-self: center;
    object-fit: cover;

    @media screen and (max-width: 767px) {
        margin-top: 4em;
    }
`;

export  const StyledHContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100vw;
    min-width: 100vw;
    background-color: rgba(0, 0, 0, 0.8);  
    padding: 20px 0px 20px 0px;
    margin-bottom: 14em;

    animation-name: fadeIn;
    animation-duration: 2s;
    animation-delay: 0s;

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @media screen and (max-width: 1460px) {
    margin-bottom: 8em;
}

    @media screen and (max-width: 960px) {
        margin-bottom: 0em;
        padding: 1em 0em 1em 0em;
    }

    @media screen and (max-width: 700px) {
        display: none;
    }
`;

export  const Styledh2 = styled.h2`
    margin-top: 0.25em;
    margin-bottom: 0.25em;
    white-space: pre-wrap;
    color: whitesmoke;
    font-family: 'MuseoModerno', cursive;
    font-size: 48px;
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
    min-width: 100%;
    font-family: 'Lexend';
    font-size: 16px;
    line-height: 2rem;
    overflow: hidden;
    margin-bottom: 8em;
    scroll-snap-align: center;
    

    @media screen and (max-width: 960px) {
        padding: 2em;
    }

    @media screen and (max-width: 700px) {
        padding: 1em;
        margin-bottom: 16em;
    }
`;

export  const Styledp = styled.p`
    color: whitesmoke;
    font-size: 16px;
    margin-right: 50px;
    margin-left: 50px;
    text-align: left;
`;

export const StyledSection = styled.div`
    max-width: 100vw;
    min-width: 100vw;
    max-height: 200px;
`;

export const StyledButtonBackground = styled.div`
    position: fixed;
    /* left: 47%; */
    bottom: 65px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-self: center;
    justify-content: center;
    height: 60px;
    background: rgba(255, 255, 255, 0.8);
    width: 60px;
    margin: 20px;
    border: none;
    text-align: center;
    border-radius: 50%;

    @media screen and (max-width: 767px) {
        display: none;
    }
`;

export const StyledButton = styled.a`
    text-align: center;
    height: 80px;
    /* border-radius: 50%; */
    /* left: 48%;
    bottom: 50px; */
    font-size: 2em;
    z-index: 1;
    cursor: pointer;
    color: black;
    margin-top: 1em;

    @media screen and (max-width: 767px) {
        display: none;
    }
`;