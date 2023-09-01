import React from 'react';
import styled from "styled-components";
import AboutComponent from '../components/AboutComponent/About/AboutComponent';


// MAIN CONTAINER

const AboutMainContainer = styled.div`
     max-width: 100vw;
     min-width: 100vw;
     display: flex;
     flex-direction: column;
     align-items: center;
`;


function About() {

    return (
       
      <AboutMainContainer>
        <AboutComponent />
      </AboutMainContainer>
    );
}

export default About;