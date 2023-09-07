import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import SituationSkills from '../components/SituationCard/situationSkills/SituationSkills';
import Countries from '../components/CountriesCard/Countries/Countries';
import Languages from '../components/LanguagesCard/LanguageSkills/Languages';
import Brands from '../components/BrandsCard/BrandList/Brands';
import ExperienceNameHolder from '../components/ExperienceCard/ExperienceNameHolder/ExperienceNameHolder';
import { Fade } from "react-awesome-reveal";
import {SlArrowDown} from 'react-icons/sl';


// MAIN CONTAINER

const ExperienceMainContainer = styled.div`
     max-width: 100vw;
     min-width: 100vw;
     display: flex;
     flex-direction: column;
     align-items: center;
`;

const StyledSection = styled.div`
     max-width: 100vw;
     min-width: 100vw;
     /* min-height: 100vh;
     background-color: black; */
`;

const StyledButtonBackground = styled.div`
    position: fixed;
    /* left: 46%; */
    bottom: 75px;
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

    @media screen and (max-width: 1460px) {
        /* left: 46%; */
}
`;

const StyledButton = styled.a`
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
`;




function Experience() {

    const section1 = useRef();
    const section2 = useRef();
    const section3 = useRef();
    const section4 = useRef();
    const section5 = useRef();
    const section6 = useRef();

    const [currentSection, setCurrentSection] = useState(1);

    const sections = [section1, section2, section3, section4, section5, section6];
 
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
       
        <ExperienceMainContainer>

            <Fade>
                <div>
                <StyledSection ref={section1}>
                    <ExperienceNameHolder  />
                </StyledSection>
                </div>
            </Fade>

            <Fade>
                <div>
                <StyledSection ref={section2}>
                    <SituationSkills  />
                </StyledSection>
                </div>
            </Fade>

            <Fade>
                <div>
                <StyledSection ref={section3}>
                    <Countries  />
                </StyledSection>
                </div>
            </Fade>

            <Fade>
                <div>
                <StyledSection ref={section4}>
                    <Languages  />
                </StyledSection>
                </div>
            </Fade>

            <Fade>
                <div>
                <StyledSection ref={section5}>
                    <Brands  />
                </StyledSection>
                </div>
            </Fade>

            <div>
                <StyledSection ref={section6}>
            
                </StyledSection>
            </div>

            {!isLastSection && (
                    <StyledButtonBackground>

                        <StyledButton >
                            <SlArrowDown onClick={scrollToSection} />
                        </StyledButton>

                    </StyledButtonBackground>               
                )}

        </ExperienceMainContainer>

    );
}

export default Experience;