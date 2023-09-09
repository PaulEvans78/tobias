import React from 'react';
import styled from "styled-components";
import SituationSkills from '../components/SituationCard/situationSkills/SituationSkills';
import Countries from '../components/CountriesCard/Countries/Countries';
import Languages from '../components/LanguagesCard/LanguageSkills/Languages';
import Brands from '../components/BrandsCard/BrandList/Brands';
import ExperienceNameHolder from '../components/ExperienceCard/ExperienceNameHolder/ExperienceNameHolder';
import { Fade } from "react-awesome-reveal";


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
`;




function Experience() {


    return (
       
        <ExperienceMainContainer>

            <Fade>
                
                <StyledSection>
                    <ExperienceNameHolder  />
                </StyledSection>
            
            </Fade>

            <Fade>
                
                <StyledSection >
                    <SituationSkills  />
                </StyledSection>
                
            </Fade>

            <Fade>
                
                <StyledSection >
                    <Countries  />
                </StyledSection>
                
            </Fade>

            <Fade>
                
                <StyledSection >
                    <Languages  />
                </StyledSection>
               
            </Fade>

            <Fade>
                
                <StyledSection >
                    <Brands  />
                </StyledSection>
                
            </Fade>

            
              

        </ExperienceMainContainer>

    );
}

export default Experience;