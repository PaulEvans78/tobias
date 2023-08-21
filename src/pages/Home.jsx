import React from 'react';
import styled from "styled-components";
import SlideShow from "../components/SlideShowComponent/SlideShow/SlideShow";
// import data from '../components/BackgroundSlider/data/data';
// import { useTypewriter } from 'react-simple-typewriter';
// import logoWhite_large from '../assets/logoWhite_large.png';
// import placeholder from '../assets/img1.jpg';
// import Skills from '../components/CardLandingPage/skills';



const StyledHomeContainer = styled.div`
  grid-area: main;
  /* max-width: 100vw;  */
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  column-gap: 1em;

  /* animation-name: fadeOut;
    animation-duration:3s;
    animation-delay: 5s; 
    

    @keyframes fadeOut {
  0% { opacity: 1;}

  100% { opacity: 0; display: none;}
} */


  /* @media screen and (max-width: 960px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    column-gap: 0em;
    align-items: center;
    padding: 0em 2em 0em 2em;
  } */
`;

// const StyledMyImg = styled.img`
//   position: relative;
//   z-index: 1;
//   background-repeat: no-repeat;
//   background-size: cover;
//   align-self: center;
//   width: 100%;
  /* height: 100vh; */

  /* justify-self:flex-start; */
  /* width: 30%; */
  /* margin: 0em 0em 3em 0em; */
  /* border-radius: 10px; */
  /* border: 2px solid whitesmoke; */

  

/* @media screen and (max-width: 960px) {
    margin-left: 2em;
    width: 60%;
  } */
// `;


// const StyledHomep = styled.p`
//   position: relative;
//   width: 40%;
//   align-self: center;
//   font-family: 'Delicious Handrawn', cursive;
//   color: whitesmoke;
//   font-size: 32px;
//   margin-bottom: 2em;
  /* animation-name: slidein;
  animation-duration: 2s;
  animation-delay: 0s; */

    /* @keyframes slidein {
      0%   {left:-400px;}
      100% {left:0px;}
} */

/* @media screen and (max-width: 960px) {
  width: 100%;
  align-self: center;
  } */
// `;

// const StyledTypewriter = styled.span `
//     align-self: center; 
//     font-family: 'Delicious Handrawn', cursive;
//     font-size: 32px;
//     color: whitesmoke;
// `;

const Home = () => {

//   const [text] = useTypewriter({
//     words: ['1st AD Tobias - Saving the world one commercial at a time'],
//     loop: {},
//     typeSpeed: 75,
//     deleteSpeed: 120,
// });

  return (
    
     <StyledHomeContainer>

            {/* <StyledMyImg src={placeholder} alt="Tobias Reiner"/> */}

                
                {/* <StyledHomep>
                         1st AD Tobias
                </StyledHomep> */}

                {/* <StyledTypewriter>
                        {text}
                  </StyledTypewriter> */}
    
                    <SlideShow />

    </StyledHomeContainer>
  
  );
}


export default Home;