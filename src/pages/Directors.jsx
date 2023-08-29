import React from 'react';
import styled from "styled-components";
import DirectorsList from '../components/DirectorsComponent/DirectorsList/DirectorsList';
// import ScrollButton from '../components/ScrollButton/ScrollButton';
// import directorsImg from '../assets/directorsImg.jpg';


// GENERAL STYLING

// const Styledh5 = styled.h5`
//     margin: 1em 0em 2em 2em;
//     white-space: pre-wrap;
//     flex-wrap: wrap;
//     text-align: center;
//     font-family: 'lexend';
//     font-size: 28px;
//     color: black;
   
//     @media screen and (max-width: 960px) {
//         margin-left: 0em;
//         margin-bottom: 0em;

//     }
// `;




// MAIN CONTAINER

const DirectorsMainContainer = styled.div`
    /* position: relative;
    top: 0; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    /* background-color: black; */
    font-family: 'Lexend';
    font-size: 1.2rem;
    overflow: hidden;
`;

// const StyledImgContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 100vw;
// `;

// const StyledInfoContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     /* justify-items: flex-start; */
//     /* justify-self: flex-start; */
//     align-items: flex-start;
//     /* padding: 0px 10px 0px 10px; */
//     width: 100%;
//     background-color: rgba(0, 0, 0, 0.7);   
//     border-radius: 0% 5px 5px 0px;
//     padding: 2em;
// `;

// const StyledDirectorsImg = styled.img`
//     width: 100%;
//     align-self: center;
//     object-fit: cover;
// `;

// const StyledHContainer = styled.div`
//     position: absolute;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 60%;
//     background-color: rgba(0, 0, 0, 0.8);   
//     border-radius: 5px 5px 5px 5px;
//     padding: 2em;
// `;

// const Styledh3 = styled.h3`
//     text-align: left;
//     margin-top: 0.5em;
//     margin-bottom: 0.25em;
//     white-space: pre-wrap;
//     color: whitesmoke;
//     font-size: 48px;
//     font-weight: 900;
// `;

// const Styledp = styled.p`
//     color: whitesmoke;
//     font-size: 16px;
//     margin-right: 50px;
//     margin-left: 50px;
//     text-align: left;
// `;



function Directors() {

    return (
     
        <DirectorsMainContainer>


{/* <StyledHContainer>
                    <Styledh3>Directors</Styledh3>
                </StyledHContainer> */}
        
                <DirectorsList/>
            {/* <StyledImgContainer>
                <StyledDirectorsImg src={directorsImg} alt="Russian Dolls"/>

                <StyledHContainer>
                    <Styledh3>Directors</Styledh3>
                </StyledHContainer>

            </StyledImgContainer>

                <StyledInfoContainer>

             <Styledp>ACNE, ADAM BERG, ADAM REID, AGNES-LO ÅKERLIND, ALEXANDER KÜHN, AMIR CHAMDIN, ANDERS FORSMAN, ANDREAS ALMQVIST, ANDREA JADE COLOMB, ANNA ZACKRISSON, ANDERS FORSMAN, ANDERS HALLBERG, ANDREAS NILSSON, ANDREAS TIBBLIN, ANTON DU PREEZ, AXEL LAUBSCHER, AXEL LINDAHL, BART TIMMER, BENGT ANTON RUNSTEN, BERTIL VORRE,  BILL SCHUMACHER, BRIAN DE PALMA, BRYAN L HUGHES, CHERRY COBRA, CHRISTOPHER VONREIS, DANIEL BÖRJESSON, DANIEL KRAGH JAKOBSEN, DANIEL SKOGLUND, DANIEL DI VICIOLA,  DANIEL WÅRDH, DAVID FINCHER, DOM ROMNEY, ELSA LOCRANTZ, ERICK LUNDQVIST, EMIL MÖLLER,  ENSRETTET, ESTEBAN, ERIC SCHWAB, FEDE ALVAREZ, FELIX HERNGREN, FILIP NILSSON, FILIP TELLANDER, FREDRIK FALCK, GREGORY HARRIS, GUSTAF ÅKERBLOM, GUSTAV EGHAMMAR, GUSTAV JOHANSSON,  HANNAH ELIN, HENRIK HALLGREN, HENRIK HEDIN, HENRIK LAGERCRANTZ, HENRIK SUNDGREN, INDRA HERÖ WIDE, JAKOB STRÖM, JENS SJÖGREN, JENS JONSSON, JESPER ERICSTAM, JESPER GANSLANDT, JESPER OHLSON, JOACHIM THÖRNQVIST, JOAKIM ELIASSON, JOE CONNOR, JOHAN BRISINGER, JOHAN KLING, JOHAN LUNDIN, JOHAN PERJUS, JOHAN TAPPERT, JOHAN RENCK, JOHAN STORM, KALLE BREITHOLZ, JONAS BERG; KALLE HAGLUND, KLEMENS BECKER, LEIF LINDBLOM, LINDA CALLENHOLT, LINNEA BERGMAN, LI VON EULER, LUKAS HAMMAR, LÆRKE HERTONI, MAGNUS HÄRDNER, MAGNUS RENFORS, MALIN INGRID, MARCUS HANSEN, MARCUS SVANBERG, MARCUS SÖDERLUND, MARTIN WERNER, MATILDE SKÖLD, MAX VITALI, MIKAEL MARCIMAIN, MÅNS HERNGREN, NADJA MARQUART OTZEN, NICLAS BERGMAN, NICLAS LARSSON, NIM KYONG RAN, NATHANAEL ERICSSON, NÅDDE HANSSON, NINA AALDERING, PHEDON PAPAMICHAEL, PJADAD, OLIVIA KASTEBRING, OSCAR WRANGÖ, OLOF LINDH, OSKAR BÅRD, PAM THOMAS, PAROLL, PATRIK GYLLSTRÖM, PER_HAMPUS STÅHLHANSKE, POPCORE, TRAKTOR, PETER HARTON, PHILIPPE TEMPELMAN, RAUNO TUOKKANEN, RGB6, RICKARD JARNHED, RIKKE GREGERSEN, ROBERT JITZMARK, RUNE MILTON, SACARIAS KIUSALAAS, SARA HAAG, SEBASTIAN HEDIN, SEBASTIAN STRASSER, SEBASTIAN REED, SHEILA JOHANSSON, SKEWED, SNASK, STYLEWAR, SWIMCLUB, TIMONEN & SANDBERG, TOBIAS BERGMAN, TOBIAS GRANSTRÖM, THOMAS JONSGÅRDEN, TIBOR GLAGE, TIM EREM, TORBJÖRN MARTIN, TOM MALMROS, TOMAS MANKOVSKY, VEDRAN RUPIC, VESA MANNINEN, </Styledp>

               </StyledInfoContainer> */}
            {/* <ScrollButton /> */}

        </DirectorsMainContainer>
    );
}

export default Directors;