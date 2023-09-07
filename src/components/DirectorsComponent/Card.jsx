import React, { useRef, useState, useEffect } from 'react';
import { StyledDirectorsMainContainer, StyledImgContainer, StyledDirectorsImg, StyledHContainer, StyledMobContainer, StyledInfoContainer, Styledp, Styledh2, StyledButtonBackground, StyledButton, StyledSection} from './styles';
import { Fade } from "react-awesome-reveal";
import {SlArrowDown} from 'react-icons/sl';



function Card (props) {


    const section1 = useRef();
    const section2 = useRef();
    const section3 = useRef();

    const [currentSection, setCurrentSection] = useState(1);

   const sections = [section1, section2, section3];

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

      const isLastSection = currentSection === sections.length - 0;
    

    return (
     
        <StyledDirectorsMainContainer>

            <div>
            <StyledImgContainer ref={section1}>
                
                <StyledDirectorsImg src={props.mainPic} alt="Russian Dolls"/>

                <StyledHContainer>
                    <Styledh2>Directors</Styledh2>
                </StyledHContainer>

            </StyledImgContainer>
           
            
            <StyledMobContainer>
                    <Styledh2>Directors</Styledh2>
            </StyledMobContainer>
            </div>

            
            <Fade>
                <div>
                    <StyledInfoContainer ref={section2}>
                    
                        <Styledp>ACNE, ADAM BERG, ADAM REID, AGNES-LO ÅKERLIND, ALEXANDER KÜHN, AMIR CHAMDIN, ANDERS FORSMAN, ANDREAS ALMQVIST, ANDREA JADE COLOMB, ANNA ZACKRISSON, ANDERS FORSMAN, ANDERS HALLBERG, ANDREAS NILSSON, ANDREAS TIBBLIN, ANTON DU PREEZ, AXEL LAUBSCHER, AXEL LINDAHL, BART TIMMER, BENGT ANTON RUNSTEN, BERTIL VORRE,  BILL SCHUMACHER, BRIAN DE PALMA, BRYAN L HUGHES, CHERRY COBRA, CHRISTOPHER VONREIS, DANIEL BÖRJESSON, DANIEL KRAGH JAKOBSEN, DANIEL SKOGLUND, DANIEL DI VICIOLA,  DANIEL WÅRDH, DAVID FINCHER, DOM ROMNEY, ELSA LOCRANTZ, ERICK LUNDQVIST, EMIL MÖLLER,  ENSRETTET, ESTEBAN, ERIC SCHWAB, FEDE ALVAREZ, FELIX HERNGREN, FILIP NILSSON, FILIP TELLANDER, FREDRIK FALCK, GREGORY HARRIS, GUSTAF ÅKERBLOM, GUSTAV EGHAMMAR, GUSTAV JOHANSSON,  HANNAH ELIN, HENRIK HALLGREN, HENRIK HEDIN, HENRIK LAGERCRANTZ, HENRIK SUNDGREN, INDRA HERÖ WIDE, JAKOB STRÖM, JENS SJÖGREN, JENS JONSSON, JESPER ERICSTAM, JESPER GANSLANDT, JESPER OHLSON, JOACHIM THÖRNQVIST, JOAKIM ELIASSON, JOE CONNOR, JOHAN BRISINGER, JOHAN KLING, JOHAN LUNDIN, JOHAN PERJUS, JOHAN TAPPERT, JOHAN RENCK, JOHAN STORM, KALLE BREITHOLZ, JONAS BERG; KALLE HAGLUND, KLEMENS BECKER, LEIF LINDBLOM, LINDA CALLENHOLT, LINNEA BERGMAN, LI VON EULER, LUKAS HAMMAR, LÆRKE HERTONI, MAGNUS HÄRDNER, MAGNUS RENFORS, MALIN INGRID, MARCUS HANSEN, MARCUS SVANBERG, MARCUS SÖDERLUND, MARTIN WERNER, MATILDE SKÖLD, MAX VITALI, MIKAEL MARCIMAIN, MÅNS HERNGREN, NADJA MARQUART OTZEN, NICLAS BERGMAN, NICLAS LARSSON, NIM KYONG RAN, NATHANAEL ERICSSON, NÅDDE HANSSON, NINA AALDERING, PHEDON PAPAMICHAEL, PJADAD, OLIVIA KASTEBRING, OSCAR WRANGÖ, OLOF LINDH, OSKAR BÅRD, PAM THOMAS, PAROLL, PATRIK GYLLSTRÖM, PER_HAMPUS STÅHLHANSKE, POPCORE, TRAKTOR, PETER HARTON, PHILIPPE TEMPELMAN, RAUNO TUOKKANEN, RGB6, RICKARD JARNHED, RIKKE GREGERSEN, ROBERT JITZMARK, RUNE MILTON, SACARIAS KIUSALAAS, SARA HAAG, SEBASTIAN HEDIN, SEBASTIAN STRASSER, SEBASTIAN REED, SHEILA JOHANSSON, SKEWED, SNASK, STYLEWAR, SWIMCLUB, TIMONEN & SANDBERG, TOBIAS BERGMAN, TOBIAS GRANSTRÖM, THOMAS JONSGÅRDEN, TIBOR GLAGE, TIM EREM, TORBJÖRN MARTIN, TOM MALMROS, TOMAS MANKOVSKY, VEDRAN RUPIC, VESA MANNINEN, </Styledp>
                    
                    </StyledInfoContainer>
                  </div>
            </Fade>
               
            <div>
                <StyledSection ref={section3}>
                    
                </StyledSection>
            </div>

               {!isLastSection && (
                    <StyledButtonBackground>

                        <StyledButton >
                            <SlArrowDown onClick={scrollToSection} />
                        </StyledButton>

                    </StyledButtonBackground>               
                )}
                
        </StyledDirectorsMainContainer>
    );
}

export default Card;



