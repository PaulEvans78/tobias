import React, { useState, useRef, useEffect } from 'react';
import { StyledAboutMainContainer, StyledImgContainer, StyledAboutImg, StyledHContainer, StyledMobContainer, StyledInfoContainer, Styledp, Styledh2, StyledTypewriter, StyledAboutImgContainer, StyledAboutSmallImages, StyledButton, StyledButtonBackground } from './styles';
import { useTypewriter } from 'react-simple-typewriter';
import { Fade } from "react-awesome-reveal";
import {SlArrowDown} from 'react-icons/sl';






function Card (props) {

    
    // const [startTyping, setStartTyping] = useState(false);

    // useTypewriter({
    //     words: ['1st AD Tobias - Saving the world one commercial at a time'],
    //     typeSpeed: 75,
    //     onTypeEnd: () => {
    //         setTypingComplete(true);
    //     },
    // });

    const [text] = useTypewriter({
        words: ['1st AD Tobias - Saving the world one commercial at a time'],
        // loop: {},
        typeSpeed: 75,
        // deleteSpeed: 120,
   });


   const section1 = useRef();
   const section2 = useRef();
   const section3 = useRef();

   const scrollTo = (section) => {
    
    section.current.scrollIntoView({ behavior:"smooth" });
   };


//    useEffect(() => {
//     const options = {
//         root: null,
//         rootMargin: '0px',
//         threshold: 0.5, 
//     };

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting && !startTyping) {
//                 setStartTyping(true);
//             }
//         });
//     }, options);

//     if (section2.current) {
//         observer.observe(section2.current);
//     }

//     return () => {
//         if (section2.current) {
//             observer.unobserve(section2.current);
//         }
//     };
// }, [startTyping]);

    
    return (
     
        <StyledAboutMainContainer>
            <div ref={section1}>       
            <StyledImgContainer scrollTo={scrollTo} goToSectionRef={section2}>
                <StyledAboutImg src={props.mainPic} alt="Tobias Reiner"/>

                    <StyledHContainer>
                        <Styledh2>About</Styledh2>
                    </StyledHContainer>

            </StyledImgContainer>
            </div>
            <StyledMobContainer>
                    <Styledh2>About</Styledh2>
            </StyledMobContainer>

    
                    <Fade>
                        <div ref={section2}>
                        <StyledInfoContainer  scrollTo={scrollTo} goToSectionRef={section3}>

                        <StyledTypewriter>
                                {text}
                                {/* {startTyping && (
                            <useTypewriter
                                words={['1st AD Tobias - Saving the world one commercial at a time']}
                                cursor
                                cursorStyle="_"
                                typeSpeed={75}
                            />
                        )}
                                 */}
                        </StyledTypewriter>
                        

                               
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
                            

                        </StyledInfoContainer>
                        </div>
                    </Fade> 

                    <Fade>
                    <div ref={section3}>
                        <StyledAboutImgContainer>

                            <StyledAboutSmallImages src={props.PicOne} alt="Tobias Reiner"/>
                            <StyledAboutSmallImages src={props.PicTwo} alt="Tobias Reiner"/>
                            <StyledAboutSmallImages src={props.PicThree} alt="Tobias Reiner"/>

                        </StyledAboutImgContainer>
                        </div>
                    </Fade>
                   
                    <StyledButtonBackground>
               <StyledButton onClick={() => scrollTo(goToSectionRef)}>
                    <SlArrowDown />
                    </StyledButton>
                    </StyledButtonBackground>
                

        </StyledAboutMainContainer>
    );
}

export default Card;
