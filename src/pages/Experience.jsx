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





function Experience() {

    // const situation = useRef(null);
    // const countries = useRef(null);
    // const languages = useRef(null);
    // const brands = useRef(null);

    // const scrollToSection = (elementRef) => {
    //     window.scrollTo({
    //         top: elementRef.current.offsetTop,
    //         behaviour: 'smooth'
    //     })
    // }

    return (
       
        <ExperienceMainContainer>

            <Fade><ExperienceNameHolder/></Fade>
            <Fade><SituationSkills /></Fade>
            <Fade><Countries /></Fade>
            <Fade><Languages /></Fade>
            <Fade><Brands /></Fade>

        </ExperienceMainContainer>

    );
}

export default Experience;