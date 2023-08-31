import React from 'react';
import { StyledExperienceCard, StyledImgContainer, StyledExperienceCardImg, StyledHContainer, StyledMobContainer, Styledh2 } from './styles';






function Card (props) {

    return (
        
    
        
            <StyledExperienceCard>

                <StyledImgContainer>

                        <StyledExperienceCardImg src={props.mainPic} alt="Helicopter"/>
            
                        <StyledHContainer>
                            <Styledh2>Experience</Styledh2>
                        </StyledHContainer>

                </StyledImgContainer>

                        <StyledMobContainer>
                            <Styledh2>Experience</Styledh2>
                        </StyledMobContainer>

                        

            </StyledExperienceCard>

                
    )
}

export default Card;



