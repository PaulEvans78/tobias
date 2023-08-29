import React from 'react';
import { StyledLanguagesCard, StyledLanguagesCardImg, StyledImgContainer, StyledHeaderContainer, StyledInfoContainer, StyledCardp, Styledh3, } from './styles';
import { Fade } from "react-awesome-reveal";





function Card (props) {

    return (
        
            <StyledLanguagesCard>

                <StyledImgContainer>

                    <StyledLanguagesCardImg src={props.mainPic} alt="Walkie Talkies"/>
            
                        <StyledHeaderContainer>
                            <Styledh3>{props.headline}</Styledh3>
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



