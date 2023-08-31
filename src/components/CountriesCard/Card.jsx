import React from 'react';
import { StyledCountriesCard, StyledCountriesCardImg, StyledImgContainer, StyledHeaderContainer, StyledInfoContainer, StyledCardp, Styledh2, } from './styles';
import { Fade } from "react-awesome-reveal";





function Card (props) {

    return (
        
    
        
            <StyledCountriesCard>

                <StyledImgContainer>
                    
                    <StyledCountriesCardImg src={props.mainPic} alt="Lake Sweden"/>
            
                            <StyledHeaderContainer>
                                <Styledh2>{props.headline}</Styledh2>    
                            </StyledHeaderContainer>

                </StyledImgContainer>

                        <Fade>
                            <StyledInfoContainer>
                                <StyledCardp>{props.description}</StyledCardp>
                            </StyledInfoContainer>
                        </Fade>

            </StyledCountriesCard>
   
    )
}

export default Card;



