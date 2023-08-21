import React from 'react';
import { StyledSlideShowMainContainer, StyledImgContainer, StyledSlideShowImg, StyledHContainer, StyledLogoImg, StyledTypewriter} from './styles';
import { useTypewriter } from 'react-simple-typewriter';






function Card (props) {

    const [text] = useTypewriter({
        words: ['1st AD Tobias - Saving the world one commercial at a time'],
        loop: {},
        typeSpeed: 75,
        deleteSpeed: 120,
   });


    return (
     
        <StyledSlideShowMainContainer>

            <StyledImgContainer>
                <StyledSlideShowImg src={props.mainPic} alt="reflections"/>

                <StyledHContainer>
                    {/* <Styledh3>Home</Styledh3> */}
                    {/* <StyledLogoImg src={props.logoImg} alt="Tobias Reiner"/> */}

                    {/* <StyledTypewriter>
                                {text}
                        </StyledTypewriter> */}

                </StyledHContainer>

            </StyledImgContainer>

                {/* <StyledInfoContainer> */}

             {/* <Styledp></Styledp> */}

               {/* </StyledInfoContainer> */}

        </StyledSlideShowMainContainer>
    );
}

export default Card;



