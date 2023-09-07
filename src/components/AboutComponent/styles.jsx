import styled from "styled-components";



export const StyledAboutMainContainer = styled.div`
    max-width: 100vw;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
`;

export  const StyledImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    max-width: 100vw;
    /* min-width: 100vw; */
    /* overflow: hidden; */
`;

export  const StyledAboutImg = styled.img`
    max-width: 100vw;
    min-width: 100vw;
    max-height: 100vh;
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
    margin-bottom: 7em;
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
    text-align: left;
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
    max-width: 100vw;
    /* height: 90vh; */
    padding: 3em;
    font-family: 'Lexend';
    font-size: 16px;
    line-height: 1.5rem;
    overflow: hidden;
    scroll-snap-align: center;
   

    @media screen and (max-width: 960px) {
        padding: 2em;
    }

    @media screen and (max-width: 700px) {
        padding: 1em;
    }
`;

export  const Styledp = styled.p`
    max-width: 100vw;
    color: whitesmoke;
    font-size: 16px;
    margin-right: 50px;
    margin-left: 50px;
    text-align: left;


`;

export const StyledTypewriter = styled.span `
    align-self: center; 
    font-family: 'Delicious Handrawn', cursive;
    font-size: 32px;
    color: whitesmoke;
    margin-top: 0em;
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
    margin-bottom: 2em;
    

    @media screen and (max-width: 700px) {
        flex-direction: column;
        row-gap: 3em;
        margin-bottom: 1em;
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

export const StyledButtonBackground = styled.div`
    position: fixed;
    /* left: 46%; */
    bottom: 70px;
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

    @media screen and (max-width: 700px) {
        display: none;
    }
`;

export const StyledButton = styled.a`
    /* background-color: #ffffff8d; */
    /* border-radius: 50px; */

    text-align: center;
    height: 80px;
    /* border-radius: 50%; */
    /* left: 48%;
    bottom: 50px; */
    font-size: 2.5em;
    z-index: 1;
    cursor: pointer;
    color: black;
    margin-top: 1em;

    @media screen and (max-width: 700px) {
        display: none;
    }

/* @keyframes movebtn {
  0%{
    transform: translateY(0px);
  }
  25%{
    transform: translateY(20px);
  }
  50%{
    transform: translateY(0px);
  }
  75%{
    transform: translateY(-20px);
  }
  100%{
    transform: translateY(0px);
  }
} */

`;

export const StyledCopyRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  column-gap: 1em;
  margin-top: 2em;
  /* margin-right: 2em; */
  margin-bottom: 11em;

 
  @media screen and (max-width: 767px) {
     margin-bottom: 16em;
    }
`;


export const StyledCopyRight = styled.div`
  font-size: 12px;
  line-height: 26px;
  font-family: 'Lexend';
  color: whitesmoke;
  text-shadow: 2px 2px 4px black;

  @media screen and (max-width: 767px) {
    font-size: 8px;
    margin-left: 1em;
    margin-right: 1em;
    margin-top: 2em;
    }
`;