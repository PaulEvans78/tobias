import React from 'react';
import { StyledExperienceCard, StyledExperienceCardImg, StyledInfoContainer, StyledCardp, Styledh3, } from './styles';






function Card (props) {

    return (
        
    
        
            <StyledExperienceCard>
                <StyledExperienceCardImg src={props.mainPic} alt="Helicopter"/>
            
                    

                        <StyledInfoContainer>
                            <Styledh3>{props.headline}</Styledh3>
                                <StyledCardp>{props.description}</StyledCardp>
                                    {/* <a href={props.buttonLink}><StyledButton>{props.buttonText}</StyledButton></a> */}
                        </StyledInfoContainer>

            </StyledExperienceCard>

                
    )
}

export default Card;



