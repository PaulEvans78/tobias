import React from 'react';
import { StyledDirectorsMainContainer, StyledImgContainer, StyledDirectorsImg, StyledHContainer, StyledMobContainer, StyledInfoContainer, Styledp, Styledh2 } from './styles';
import { Fade } from "react-awesome-reveal";



function Card (props) {


    return (
     
        <StyledDirectorsMainContainer>

            
            <StyledImgContainer >
                
                <StyledDirectorsImg src={props.mainPic} alt="Russian Dolls"/>

                <StyledHContainer>
                    <Styledh2>Directors</Styledh2>
                </StyledHContainer>

            </StyledImgContainer>
           
            
            <StyledMobContainer>
                    <Styledh2>Directors</Styledh2>
            </StyledMobContainer>
            

            
            <Fade>
                
                    <StyledInfoContainer>
                    
                        <Styledp>
                            <span className="strong">ACNE, </span> 
                            <span className="light">ADAM BERG, </span>                                                          
                            <span className='strong'>ADAM REID, </span>
                            <span className='light'>AGNES-LO ÅKERLIND, </span>
                            <span className='strong'>ALEXANDER KÜHN, </span>
                            <span className='light'>AMIR CHAMDIN, </span>
                            <span className='strong'>ANDERS FORSMAN, </span>
                            <span className='light'>ANDERS HALLBERG, </span>
                            <span className='strong'>ANDREAS ALMQVIST, </span>
                            <span className='light'>ANDREA JADE COLOMB, </span>
                            <span className='strong'>ANDREAS NILSSON, </span>
                            <span className='light'>ANDREAS TIBBLIN, </span>
                            <span className='strong'>ANNA ZACKRISSON, </span>
                            <span className='light'>ANTON DU PREEZ, </span>
                            <span className='strong'> AXEL LAUBSCHER, </span>
                            <span className='light'>AXEL LINDAHL, </span>
                            <span className='strong'>BART TIMMER, </span>
                            <span className='light'>BENGT ANTON RUNSTEN, </span>
                            <span className='strong'>BERTIL VORRE, </span>
                            <span className='light'>BILL SCHUMACHER, </span>
                            <span className='strong'>BRIAN DE PALMA, </span>
                            <span className='light'>BRYAN L HUGHES, </span>
                            <span className='strong'>CHERRY COBRA, </span>
                            <span className='light'>CHRISTOPHER VON REIS, </span>
                            <span className='strong'>DANIEL BÖRJESSON, </span>
                            <span className='light'>DANIEL DI VICIOLA, </span>
                            <span className='strong'>DANIEL KRAGH JAKOBSEN, </span>
                            <span className='light'>DANIEL SKOGLUND, </span>
                            <span className='strong'>DANIEL WÅRDH, </span>
                            <span className='light'>DAVID FINCHER, </span>
                            <span className='strong'>DOM ROMNEY, </span>
                            <span className='light'>ELSA LOCRANTZ, </span>
                            <span className='strong'>EMIL MÖLLER, </span>
                            <span className='light'>ENSRETTET, </span>
                            <span className='strong'>ERICK LUNDQVIST, </span>
                            <span className='strong'>ERIC SCHWAB, </span>
                            <span className='light'>ESTEBAN, </span>
                            <span className='strong'>FEDE ALVAREZ, </span>
                            <span className='light'>FELIX HERNGREN, </span>
                            <span className='strong'>FILIP NILSSON, </span>
                            <span className='light'>FILIP TELLANDER, </span>
                            <span className='strong'>FREDRIK FALCK, </span>
                            <span className='light'>GREGORY HARRIS, </span>
                            <span className='strong'>GUSTAF ÅKERBLOM, </span>
                            <span className='light'>GUSTAV EGHAMMAR, </span>
                            <span className='strong'>GUSTAV JOHANSSON, </span>
                            <span className='light'>HANNAH ELIN, </span>
                            <span className='strong'>HENRIK HALLGREN, </span>
                            <span className='light'>HENRIK HEDIN, </span>
                            <span className='strong'>HENRIK LAGERCRANTZ, </span>
                            <span className='light'>HENRIK SUNDGREN, </span>
                            <span className='strong'>HENRY MOORE SELDER, </span>
                            <span className='light'>INDRA HERÖ WIDE, </span>
                            <span className='strong'>JAKOB STRÖM, </span>
                            <span className='light'>JENS JONSSON, </span>
                            <span className='strong'>JENS SJÖGREN, </span>
                            <span className='light'>JESPER ERICSTAM, </span>
                            <span className='strong'>JESPER GANSLANDT, </span>
                            <span className='light'>JESPER OHLSON, </span>
                            <span className='strong'>JOACHIM THÖRNQVIST, </span>
                            <span className='light'>JOAKIM ELIASSON, </span>
                            <span className='strong'>JOE CONNOR, </span> 
                            <span className='light'>JOHAN BRISINGER, </span>
                            <span className='strong'>JOHAN KLING, </span>
                            <span className='light'>JOHAN LUNDIN, </span>
                            <span className='strong'>JOHAN PERJUS, </span>
                            <span className='light'>JOHAN TAPPERT, </span>
                            <span className='strong'>JOHAN RENCK, </span>
                            <span className='light'>JOHAN STORM, </span>
                            <span className='strong'>JONAS BERG, </span>
                            <span className='light'>KALLE BREITHOLZ, </span>
                            <span className='strong'>KALLE HAGLUND, </span>
                            <span className='light'>KLEMENS BECKER, </span>
                            <span className='strong'>LEIF LINDBLOM, </span>
                            <span className='light'>LINDA CALLENHOLT, </span>
                            <span className='strong'>LINNEA BERGMAN, </span>
                            <span className='light'>LI VON EULER, </span>
                            <span className='strong'>LUKAS HAMMAR, </span>
                            <span className='light'>LÆRKE HERTONI, </span>
                            <span className='strong'>MAGNUS HÄRDNER, </span>
                            <span className='light'>MAGNUS RENFORS, </span>
                            <span className='strong'>MALIN INGRID, </span>
                            <span className='light'>MARCUS HANSEN, </span>
                            <span className='strong'>MARCUS SVANBERG, </span>
                            <span className='light'>MARCUS SÖDERLUND, </span>
                            <span className='strong'>MARTIN SJÖSTRÖM, </span>
                            <span className='light'>MARTIN WERNER, </span>
                            <span className='strong'>MATILDE SKÖLD, </span>
                            <span className='light'>MAX VITALI, </span>
                            <span className='strong'>MIKAEL MARCIMAIN, </span>
                            <span className='light'>MÅNS HERNGREN, </span>
                            <span className='strong'>NADJA MARQUART OTZEN, </span>
                            <span className='light'>NATHANAEL ERICSSON, </span>
                            <span className='strong'>NICLAS BERGMAN, </span>
                            <span className='light'>NICLAS BRUNZELL, </span>
                            <span className='strong'>NICLAS LARSSON, </span>
                            <span className='light'>NIM KYONG RAN, </span>
                            <span className='strong'>NINA AALDERING, </span>
                            <span className='light'>NÅDDE HANSSON, </span>
                            <span className='strong'>OLIVIA KASTEBRING, </span>
                            <span className='light'>OSKAR HIOLMEDAL, </span>
                            <span className='strong'>OSCAR WRANGÖ, </span>
                            <span className='light'>OLOF LINDH, </span>
                            <span className='strong'>OSKAR BÅRD, </span>
                            <span className='light'>PAM THOMAS, </span>
                            <span className='strong'>PAROLL, </span>
                            <span className='light'>PATRIK GYLLSTRÖM, </span>
                            <span className='strong'>PER_HAMPUS STÅHLHANSKE, </span>
                            <span className='light'>PETER HARTON, </span>
                            <span className='strong'>PHEDON PAPAMICHAEL, </span>
                            <span className='light'>PHILIPPE TEMPELMAN, </span>
                            <span className='strong'>PJADAD, </span>
                            <span className='light'>POPCORE, </span>
                            <span className='strong'>RAUNO TUOKKANEN, </span>
                            <span className='light'>RGB 6, </span>
                            <span className='strong'>RICKARD JARNHED, </span>
                            <span className='light'>RIKKE GREGERSEN, </span>
                            <span className='strong'>ROBERT JITZMARK, </span>
                            <span className='light'>RUNE MILTON, </span>
                            <span className='strong'>SACARIAS KIUSALAAS, </span>
                            <span className='light'>SARA HAAG, </span>
                            <span className='strong'>SEBASTIAN HEDIN, </span>
                            <span className='light'>SEBASTIAN STRASSER, </span>
                            <span className='strong'>SEBASTIAN REED, </span>
                            <span className='light'>SHEILA JOHANSSON, </span>
                            <span className='strong'>SKEWED, </span>
                            <span className='light'>SNASK, </span>
                            <span className='strong'>STYLEWAR, </span>
                            <span className='light'>SWIMCLUB, </span>
                            <span className='strong'>THOMAS JONSGÅRDEN, </span>
                            <span className='light'>TIBOR GLAGE, </span>
                            <span className='strong'>TIM EREM, </span>
                            <span className='light'>TIMONEN & SANDBERG, </span>
                            <span className='strong'>TORBJÖRN MARTIN, </span>
                            <span className='light'>TOBIAS BERGMAN, </span>
                            <span className='strong'> TOBIAS GRANSTRÖM, </span>
                            <span className='light'>TOM MALMROS, </span>
                            <span className='strong'>TOMAS MANKOVSKY, </span>
                            <span className='light'>TRAKTOR, </span>
                            <span className='strong'>VEDRAN RUPIC, </span>
                            <span className='light'>VESA MANNINEN </span>
                        </Styledp>

                    </StyledInfoContainer>
                  
            </Fade>
               
                
        </StyledDirectorsMainContainer>
    );
}

export default Card;



