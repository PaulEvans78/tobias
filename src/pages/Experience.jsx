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
     grid-area: main;
     /* background-color: blue; */
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

const Styledh5 = styled.h5`
    margin: 1em 0em 2em 2em;
    white-space: pre-wrap;
    flex-wrap: wrap;
    text-align: center;
    font-family: 'lexend';
    font-size: 28px;
    color: black;
   
    /* @media screen and (max-width: 960px) {
        margin-left: 0em;
        margin-bottom: 0em;

    } */
`;




function Experience() {

    return (
       
        <ExperienceMainContainer>
            {/* <Styledh5>Experience</Styledh5> */}

            <Fade><ExperienceNameHolder /></Fade>
            <Fade><SituationSkills /></Fade>
            <Fade><Countries /></Fade>
            <Fade><Languages /></Fade>
            <Fade><Brands /></Fade>

        </ExperienceMainContainer>

    );
}

export default Experience;