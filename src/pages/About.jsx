import React from 'react';
import styled from "styled-components";
import AboutComponent from '../components/AboutComponent/About/AboutComponent';


// MAIN CONTAINER

const AboutMainContainer = styled.div`
     /* background-color: black; */
     /* grid-area: main; */
     max-width: 100vw;
     /* margin-top: 3em; */
     display: flex;
     flex-direction: column;
     align-items: center;
     /* row-gap: 3em; */
 
     /* @media screen and (max-width: 960px) {
         row-gap: 1em;
         margin-top: 0em;
     } */
`;


// GENERAL STYLING

// const Styledh5 = styled.h5`
//     margin: 1em 0em 2em 2em;
//     white-space: pre-wrap;
//     flex-wrap: wrap;
//     text-align: center;
//     font-family: 'lexend';
//     font-size: 28px;
//     color: black;
   
//     @media screen and (max-width: 960px) {
//         margin-left: 0em;
//         margin-bottom: 0em;

//     }
// `;




function About() {

    return (
       
      <AboutMainContainer>
        <AboutComponent />
      </AboutMainContainer>
    );
}

export default About;