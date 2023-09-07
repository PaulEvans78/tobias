import React from 'react';
import styled from "styled-components";
import DirectorsList from '../components/DirectorsComponent/DirectorsList/DirectorsList';



// MAIN CONTAINER

const DirectorsMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    min-width: 100vw;
    font-family: 'Lexend';
    font-size: 1.2rem;
    overflow: hidden;
`;





function Directors() {

    return (
     
        <DirectorsMainContainer>

                <DirectorsList/>

        </DirectorsMainContainer>
    );
}

export default Directors;