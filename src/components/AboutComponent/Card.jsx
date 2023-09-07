import React, { useRef, useState, useEffect } from 'react';
import { StyledAboutMainContainer, StyledImgContainer, StyledAboutImg, StyledHContainer, StyledMobContainer, StyledInfoContainer, Styledp, Styledh2, StyledTypewriter, StyledAboutImgContainer, StyledAboutSmallImages, StyledButton, StyledButtonBackground, StyledCopyRightContainer, StyledCopyRight } from './styles';
import { useTypewriter } from 'react-simple-typewriter';
import { Fade } from "react-awesome-reveal";
import {SlArrowDown} from 'react-icons/sl';






function Card (props) {


    const [text] = useTypewriter({
        words: ['1st AD Tobias - Saving the world one commercial at a time'],
        // loop: {},
        typeSpeed: 75,
        // deleteSpeed: 120,
   });


   
   const section1 = useRef();
   const section2 = useRef();
   const section3 = useRef();
   const section4 = useRef();
   

   

   const [currentSection, setCurrentSection] = useState(1);

   const sections = [section1, section2, section3, section4];

useEffect(() => {
    const handleScroll = () => {
      for (let i = 0; i < sections.length - 1; i++) {
        if (
          sections[i].current &&
          sections[i + 1].current &&
          window.scrollY >= sections[i].current.offsetTop &&
          window.scrollY < sections[i + 1].current.offsetTop
        ) {
          setCurrentSection(i + 1);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [sections]);
  
    const scrollToSection = () => {
        console.log("Button clicked. scrollToSection called.");
        if (sections[currentSection] && sections[currentSection].current) {
          sections[currentSection].current.scrollIntoView({ behavior: "smooth" });
        } else {
            console.error(`Section ${currentSection + 1} or its ref is missing.`);
          }
      };

      const isLastSection = currentSection === sections.length - 1;

    return (
     
        <StyledAboutMainContainer>
            <div >       
            <StyledImgContainer ref={section1}>
            
                <StyledAboutImg src={props.mainPic} alt="Tobias Reiner"/>

                    <StyledHContainer>
                        <Styledh2>About</Styledh2>
                    </StyledHContainer>

            </StyledImgContainer>
            
            <StyledMobContainer>
                    <Styledh2>About</Styledh2>
            </StyledMobContainer>
            </div>
    
                    <Fade>
                        <div>
                        <StyledInfoContainer ref={section2}>
                        

                        <StyledTypewriter>
                                {text}
                        </StyledTypewriter>
                        

                               
                                <Styledp>Having done this job for over twenty years now I am still attracted by the vibrant pulse. 
                                    Every project is a new constellation of people, new visions to be fulfilled, new budgetary challenges to be met, new places to discover  
                                    - each one comes with their own particular set of challenges – this is what intrigues me….making ends meet!
                                </Styledp>

                                <Styledp>Over and over again trying to break that creative glass ceiling against the never ending ticking of the budgetary clock… 
                                    requires a calm head, flexibility, diplomacy, common sense, persistence, a pinch of german “Ordnung” and a good laugh. 
                                </Styledp>

                                <Styledp>Born German, I spent my youth between Southern Germany, Southern France and West-Africa 
                                    – it made learning new languages, experiencing cultural subtleties and adjusting to ever changing situations and circumstances my modus operandi. 
                                    Due to curiosity and coincidence I ended up in the cold northern third of Europe and got stuck… that (!) was an unintended change of plan.
                                </Styledp>
                            

                        </StyledInfoContainer>
                        </div>
                    </Fade> 

                    <Fade>
                    <div >
                        <StyledAboutImgContainer ref={section3}>

                            <StyledAboutSmallImages src={props.PicOne} alt="Tobias Reiner"/>
                            <StyledAboutSmallImages src={props.PicTwo} alt="Tobias Reiner"/>
                            <StyledAboutSmallImages src={props.PicThree} alt="Tobias Reiner"/>

                        </StyledAboutImgContainer>
                        </div>
                    </Fade>
                   
                  

<StyledCopyRightContainer ref={section4}>

              <StyledCopyRight>Copyright 2023</StyledCopyRight>
              <StyledCopyRight>Paul Evans</StyledCopyRight>
              <StyledCopyRight>Creative</StyledCopyRight>

          </StyledCopyRightContainer>

          {!isLastSection && (
                    <StyledButtonBackground>

                        <StyledButton >
                            <SlArrowDown onClick={scrollToSection} />
                        </StyledButton>

                    </StyledButtonBackground>               
                )}
                
        </StyledAboutMainContainer>
    );
}

export default Card;
