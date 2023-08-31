import React from 'react';
import { StyledLanguagesCard, StyledLanguagesCardImg, StyledImgContainer, StyledHeaderContainer, StyledInfoContainer, StyledCardp, Styledh2, } from './styles';
import { Fade } from "react-awesome-reveal";





function Card (props) {

    return (
        
            <StyledLanguagesCard>

                <StyledImgContainer>

                    <StyledLanguagesCardImg src={props.mainPic} alt="Walkie Talkies"/>
            
                        <StyledHeaderContainer>
                            <Styledh2>{props.headline}</Styledh2>
                        </StyledHeaderContainer>

                </StyledImgContainer>

                        <Fade>
                            <StyledInfoContainer>
                                <StyledCardp>{props.description}</StyledCardp>
                            </StyledInfoContainer>
                        </Fade>
                        
            </StyledLanguagesCard>
   
    )
}

export default Card;



