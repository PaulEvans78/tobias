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
                                <StyledCardp>
                                    <span className="strong">SWEDISH, </span>
                                    <span className="light">ENGLISH, </span>
                                    <span className="strong">GERMAN, </span>
                                    <span className="light">FRENCH, </span>
                                    <span className="strong">NORWEGIAN, </span>
                                    <span className="light">DANISH</span>
                                </StyledCardp>
                            </StyledInfoContainer>
                        </Fade>
                        
            </StyledLanguagesCard>
   
    )
}

export default Card;



