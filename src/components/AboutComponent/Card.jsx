import React from 'react';
import { StyledAboutMainContainer, StyledImgContainer, StyledAboutImg, StyledHContainer, StyledInfoContainer, Styledp, Styledh3, StyledTypewriter, StyledAboutImgContainer, StyledAboutSmallImages } from './styles';
import { useTypewriter } from 'react-simple-typewriter';
// import { useInView } from 'react-intersection-observer';
// import Fade from "react-reveal/fade";






function Card (props) {

    const [text] = useTypewriter({
        words: ['1st AD Tobias - Saving the world one commercial at a time'],
        // loop: {},
        typeSpeed: 75,
        // deleteSpeed: 120,
   });

    // const { ref: myRef, inView: myElementIsVisible } = useInView();

    
    return (
     
        <StyledAboutMainContainer>

            <StyledImgContainer>
                <StyledAboutImg src={props.mainPic} alt="Tobias Reiner"/>

                    <StyledHContainer>
                        <Styledh3>About</Styledh3>
                    </StyledHContainer>

            </StyledImgContainer>

                    <StyledInfoContainer>

                        <StyledTypewriter>
                                {text}
                        </StyledTypewriter>

                            {/* <Fade> */}
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
                            {/* </Fade> */}

            </StyledInfoContainer>

              
        <StyledAboutImgContainer>

                        <StyledAboutSmallImages src={props.PicOne} alt="Tobias Reiner"/>
                        <StyledAboutSmallImages src={props.PicTwo} alt="Tobias Reiner"/>
                        <StyledAboutSmallImages src={props.PicThree} alt="Tobias Reiner"/>

                    </StyledAboutImgContainer>

               

        </StyledAboutMainContainer>
    );
}

export default Card;
