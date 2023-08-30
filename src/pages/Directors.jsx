import React from 'react';
import styled from "styled-components";
import DirectorsList from '../components/DirectorsComponent/DirectorsList/DirectorsList';
import ScrollButton from '../components/ScrollButton/ScrollButton';


// MAIN CONTAINER

const DirectorsMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    font-family: 'Lexend';
    font-size: 1.2rem;
    overflow: hidden;
`;





function Directors() {

    return (
     
        <DirectorsMainContainer>

                <DirectorsList/>
            
                    <ScrollButton />

        </DirectorsMainContainer>
    );
}

export default Directors;