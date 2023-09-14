import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';



const StyledSlideContainer = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    min-height: 100vh;
    position: relative;

    @media screen and (max-width: 767px) {
      position: fixed;
      background-color: rgba(23, 23, 23); 
      margin-top: 10em;
      transform: translateY(-5%);
    }
`;

const StyledArrowsContainer = styled.div`
    width: 100vw;
    position: fixed;
    top: 45%;
    transform: translateY(-45%);
    display: flex;
    flex-direction: row;
    align-content: space-between;
    justify-content: space-between;
    z-index: 99;

    @media screen and (max-width: 767px) {
      top: 25%;
      transform: translateY(-25%);
    }
`;

const StyledArrowBackground = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 30px;
    /* background: rgba(255, 255, 255, 0.3); */
    width: 30px;
    margin: 20px;
    border: none;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
`;

const StyledLeftArrow = styled.a`
    font-size: 25px;
    margin-top: 7px;
    margin-right: 3px;
    color: whitesmoke;
`;

const StyledRightArrow = styled.a`
    font-size: 25px;
    margin-top: 7px;
    margin-left: 3px;
    color: whitesmoke;
`;

const StyledDesktopContainer = styled.div`
   

    @media screen and (max-width: 767px) {
      display: none;
    }
`;

const StyledMobContainer = styled.div`
    display: none;

    @media screen and (max-width: 767px) {
      max-width: 100vw;
      min-width: 100vw;
      /* height: 100vh; */
      height: 450px;
      /* position: fixed; */
      display: flex;
      /* align-content: center; */
      /* justify-content: center; */
      overflow-x: hidden;
    }
`;

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: '100vh',
    // transition: '0.6s ease-out',
    // WebkitTransition: ' 0.6s ease-in-out', // Safari and Chrome
    // MozTransition: ' 0.6s ease-in-out', // Firefox
    // OTransition: ' 0.6s ease-in-out', // Opera
    // msTransition: ' 0.6s ease-in-out', // Microsoft Edge
  };

  // Add specific styling for Safari
// const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
// if (isSafari) {
//     divStyle.WebkitTransition = ' 0.6s ease-in-out';
// }


  const slideImages = [
    {
      src: '/slideshow/img1.jpg',
    },
    {
      src: '/slideshow/img2.jpg',     
    },
    {
      src: '/slideshow/img3.jpg',
    },
    {
      src: '/slideshow/img4.jpg',
    },
    {
      src: '/slideshow/img5.jpg',
    },
    {
      src: '/slideshow/img6.jpg',
    },
    {
      src: '/slideshow/img7.jpg',
    },
    {
      src: '/slideshow/img8.jpg',
    },
    {
      src: '/slideshow/img9.jpg',
    },
    {
      src: '/slideshow/img10.jpg',
    },
    {
      src: '/slideshow/img11.jpg',
    },
    {
      src: '/slideshow/img12.jpg',
    },
    {
      src: '/slideshow/img13.jpg',
    },
    {
      src: '/slideshow/img14.jpg',
    },
    {
      src: '/slideshow/img15.jpg',
    },
    {
      src: '/slideshow/img16.jpg',
    },
    {
      src: '/slideshow/img17.jpg',
    }
  ];
  
  const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
  
      return () => clearInterval(timer);
    }, []);
  
    const isMobile = window.innerWidth <= 767;

    const dynamicStyle = {
      ...divStyle,
      backgroundImage: `url(${slideImages[currentIndex].src})`,
      ...(isMobile && { 
        height: 'auto',
        width: '100%',
        // top: '200%',
        // transform: 'translateY(-20%)',
        backgroundPosition: 'center',
        backgroundSize: 'contain', }
        ), 
    };


   


    
      return (
        <StyledSlideContainer>
          
            <StyledArrowsContainer>

                <StyledArrowBackground>

                        <StyledLeftArrow>
                                <FiChevronLeft  onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? slideImages.length - 1 : prevIndex - 1))} />
                        </StyledLeftArrow>

                </StyledArrowBackground> 

                <StyledArrowBackground>

                        <StyledRightArrow>
                              <FiChevronRight onClick={() => setCurrentIndex((prevIndex) => (prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1))} />
                        </StyledRightArrow>
                      
                </StyledArrowBackground>
            
            </StyledArrowsContainer>
            
            <StyledDesktopContainer>
            <div style={dynamicStyle}></div>
            </StyledDesktopContainer>

            <StyledMobContainer>
            <div style={dynamicStyle}></div>
            </StyledMobContainer>

        </StyledSlideContainer>
      )
  };

  export default Slideshow;