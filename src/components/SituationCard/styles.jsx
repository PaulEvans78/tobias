import styled from "styled-components";


export const StyledSituationCard = styled.div`
    position: relative; 
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    /* margin-top: 3em; 
    margin-bottom: 2em;
    margin-left: 0.5em; */
    width: 100vw;
    /* height: 450px; */
    background-color: black;
    /* border: 2px solid white; */
    /* border-radius: 10px; */
    font-family: 'Lexend';
    font-size: 1.2rem;
    overflow: hidden;
    /* animation-name: slidedown;
    animation-duration: 3s;
    animation-delay: 0s; */

    /* @keyframes slidedown {
  0%   {top:-1000px;}
  100% {top:0px;}
} */

/* @media screen and (max-width: 960px) {
    @keyframes slidedown {
  0%   {bottom:-1000px;}
  100% {bottom:0px;}
  }
} */
`;

export  const StyledImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    /* align-items: center; */
    width: 100vw;
`;

export const StyledSituationCardImg = styled.img`
    width: 100%;
    /* height: 290px; */
    align-self: center;
    object-fit: cover;
 `; 

export const StyledHeaderContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    /* justify-items: flex-start; */
    /* justify-self: flex-start; */
    align-items: flex-start;
    /* padding: 0px 10px 0px 10px; */
    max-width: 100%;
    /* background-color: rgba(0, 0, 0, 0.9);      */
    /* border-radius: 0px 15px 15px 0px; */
    margin-bottom: 2.5em;
    padding: 2em 2em 1em 2em;
`;

export const Styledh3 = styled.h3`
    /* text-align: ; */
    /* margin-top: 0.5em; */
    margin-bottom: 1.5em;
    /* margin-left: 50px; */
    white-space: pre-wrap;
    color: whitesmoke;
    font-family: 'MuseoModerno', cursive;
    font-size: 64px;
`;

export const StyledInfoContainer = styled.div`
    /* position: absolute; */
    display: flex;
    flex-direction: column;
    /* justify-items: flex-start; */
    /* justify-self: flex-start; */
    align-items: flex-start;
    /* padding: 0px 10px 0px 10px; */
    max-width: 100%;
    background-color: rgba(0, 0, 0, 0.9);     
    /* border-radius: 0px 15px 15px 0px; */
    margin-bottom: 2.5em;
    padding: 2em 2em 1em 2em;
`;

export const StyledCardp = styled.p`
    color: whitesmoke;
    font-size: 16px;
    line-height: 2rem;
    /* margin-left: 50px; */
    /* padding: 0em 1.5em 1.5em; */
    text-align: left;
`;

// export const StyledButton = styled.button`
//     height: 50px;
//     width: 160px;
//     background-color: whitesmoke;
//     color: #272424;
//     margin: 0em 0em 4em 4em;
//     border-radius: 10px;
//     font-size: 14px;
//     font-weight: bold;
//     &:hover{
//     background: #ccae3f;
//     }
// `;




