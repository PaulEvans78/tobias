import React, {useState, useRef, useEffect} from 'react';
// import { Slide } from './slide';
// import '../ImgSlider/styles.css';
import styled from "styled-components";
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';


// SlArrowRight, SlArrowLeft, 

const StyledSlideContainer = styled.div`
    max-width: 100vw;

`;

const StyledArrowsContainer = styled.div`
    width: 100vw;
    position: absolute;
    top: 45%;
    display: flex;
    flex-direction: row;
    align-content: space-between;
    justify-content: space-between;
    /* align-self: center; */
`;

const StyledArrowBackground = styled.div`
    /* max-width: 100vw; */
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    background: rgba(255, 255, 255, 0.6);
    width: 50px;
    margin: 20px;
    border: none;
    text-align: center;
    /* color: #fff; */
    border-radius: 50%;
    /* display: -webkit-box;
    display: -ms-flexbox; */
    display: flex;
    /* -webkit-box-align: center;
    -ms-flex-align: center; */
    align-items: center;
    /* -webkit-box-pack: center;
    -ms-flex-pack: center; */
    justify-content: center;
`;

const StyledLeftArrow = styled.a`
    font-size: 25px;
    margin-top: 7px;
    margin-right: 3px;
`;

const StyledRightArrow = styled.a`
    font-size: 25px;
    margin-top: 7px;
    margin-left: 3px;
`;


// const spanStyle = {
//     padding: '20px',
//     background: '#efefef',
//     color: '#000000'
//   }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '100vh',
    transition: 'ease 2000ms'
    
    

  }
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
      src: '/slideshow/img4.jpeg',
    },
    {
      src: '/slideshow/img5.JPG',
    },
    {
      src: '/slideshow/img6.jpeg',
    },
    {
      src: '/slideshow/img7.jpeg',
    },
    {
      src: '/slideshow/img8.JPG',
    },
    {
      src: '/slideshow/img9.jpeg',
    },
    {
      src: '/slideshow/img10.jpeg',
    },
    {
      src: '/slideshow/img11.jpeg',
    },
    {
      src: '/slideshow/img12.jpeg',
    },
    {
      src: '/slideshow/img13.jpeg',
    },
    {
      src: '/slideshow/img14.jpeg',
    },
    {
      src: '/slideshow/img15.jpg',
    },
  ];
  
  const Slideshow = () => {

    const timerRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);
  

    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slideImages.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };

    const goToNext = () => {
      const isLastSlide = currentIndex === slideImages.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

    useEffect(() => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        goToNext();
      }, 4000);

      return () => clearTimeout(timerRef.current);
    }, [goToNext]);
    
      return (
        <StyledSlideContainer>
          
            <StyledArrowsContainer>

                <StyledArrowBackground>

                        <StyledLeftArrow>
                                <FiChevronLeft  onClick={goToPrevious}/>
                        </StyledLeftArrow>

                </StyledArrowBackground> 

                <StyledArrowBackground>

                        <StyledRightArrow>
                              <FiChevronRight onClick={goToNext}/>
                        </StyledRightArrow>
                      
                </StyledArrowBackground>
            
            </StyledArrowsContainer>
            
                  <div style={{ ...divStyle, 'backgroundImage': `url(${slideImages[currentIndex].src})` }}></div>

        </StyledSlideContainer>
      )
  }

  export default Slideshow;