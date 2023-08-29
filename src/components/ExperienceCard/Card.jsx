import React from 'react';
import { StyledExperienceCard, StyledImgContainer, StyledExperienceCardImg, StyledHContainer, StyledMobContainer, Styledh3 } from './styles';






function Card (props) {

    return (
        
    
        
            <StyledExperienceCard>

                <StyledImgContainer>

                        <StyledExperienceCardImg src={props.mainPic} alt="Helicopter"/>
            
                        <StyledHContainer>
                            <Styledh3>Experience</Styledh3>
                        </StyledHContainer>

                </StyledImgContainer>

                        <StyledMobContainer>
                            <Styledh3>Experience</Styledh3>
                        </StyledMobContainer>

                        

            </StyledExperienceCard>

                
    )
}

export default Card;



