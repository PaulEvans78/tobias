import React from 'react';
import { StyledSituationCard, StyledSituationCardImg, StyledImgContainer, StyledHeaderContainer, StyledInfoContainer, StyledCardp, Styledh3, } from './styles';
import { Fade } from "react-awesome-reveal";





function Card (props) {

    return (
        
            <StyledSituationCard>

                <StyledImgContainer>

                    <StyledSituationCardImg src={props.mainPic} alt="Helicopter"/>
            
                        <StyledHeaderContainer>
                            <Styledh3>{props.headline}</Styledh3>
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



