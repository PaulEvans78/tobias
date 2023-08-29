import React from 'react';
import { StyledCountriesCard, StyledCountriesCardImg, StyledImgContainer, StyledHeaderContainer, StyledInfoContainer, StyledCardp, Styledh3, } from './styles';
import { Fade } from "react-awesome-reveal";





function Card (props) {

    return (
        
    
        
            <StyledCountriesCard>

                <StyledImgContainer>
                    
                    <StyledCountriesCardImg src={props.mainPic} alt="Lake Sweden"/>
            
                            <StyledHeaderContainer>
                                <Styledh3>{props.headline}</Styledh3>    
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



