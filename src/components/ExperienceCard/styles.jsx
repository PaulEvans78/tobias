import styled from "styled-components";


export const StyledExperienceCard = styled.div`
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


   
export const StyledExperienceCardImg = styled.img`
    width: 100%;
    /* height: 290px; */
    align-self: center;
    object-fit: cover;
 `; 

export const StyledInfoContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    /* justify-items: flex-start; */
    /* justify-self: flex-start; */
    align-items: center;
    /* padding: 0px 10px 0px 10px; */
    width: 100vw;
    min-width: 100vw;
    background-color: rgba(0, 0, 0, 0.8);     
    /* border-radius: 0px 15px 15px 0px; */
    /* margin-top: 20em; */
    padding: 1em 0em 1em 0em;
    margin-bottom: 8em;

    animation-name: fadeIn;
    animation-duration: 2s;
    animation-delay: 0s;

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
}
`;

export const Styledh3 = styled.h3`
    text-align: center;
    margin-top: 0.5em;
    margin-bottom: 0.25em;
    /* margin-left: 50px; */
    white-space: pre-wrap;
    color: whitesmoke;
    font-family: 'MuseoModerno', cursive;
    letter-spacing: 0.5rem;
    /* background-color: rgba(248, 247, 247, 0.2); */
    font-size: 52px;
    /* font-size: 98px;
    padding: 100px;
    box-shadow: 2px 2px 8px black; */
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




