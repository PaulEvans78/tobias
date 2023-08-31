import React from 'react';
import { StyledSituationCard, StyledSituationCardImg, StyledImgContainer, StyledHeaderContainer, StyledInfoContainer, StyledCardp, Styledh2, } from './styles';
import { Fade } from "react-awesome-reveal";





function Card (props) {

    return (
        
            <StyledSituationCard>

                <StyledImgContainer>

                    <StyledSituationCardImg src={props.mainPic} alt="Helicopter"/>
            
                        <StyledHeaderContainer>
                            <Styledh2>{props.headline}</Styledh2>
                        </StyledHeaderContainer>
                        
                </StyledImgContainer>

                        <Fade>
                            <StyledInfoContainer>
                                <StyledCardp>{props.description}</StyledCardp>
                            </StyledInfoContainer>
                        </Fade>

            </StyledSituationCard>
   
    )
}

export default Card;



