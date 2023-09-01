import React from 'react';
import styled from "styled-components";
import ImgSlider from "../components/ImgSlider/Slideshow";
import { Fade } from "react-awesome-reveal";

const StyledHomeContainer = styled.div`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-content: center;
`;


const Home = () => {

  return (
    
     <StyledHomeContainer>

            <Fade><ImgSlider /></Fade>

    </StyledHomeContainer>
  
  );
}


export default Home;
