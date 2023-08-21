import React from 'react';
import { StyledSituationCard, StyledSituationCardImg, StyledInfoContainer, StyledCardp, Styledh3, } from './styles';






function Card (props) {

    return (
        
    
        
            <StyledSituationCard>
                <StyledSituationCardImg src={props.mainPic} alt="Helicopter"/>
            
                    

                        <StyledInfoContainer>
                            <Styledh3>{props.headline}</Styledh3>
                                <StyledCardp>{props.description}</StyledCardp>
                                    {/* <a href={props.buttonLink}><StyledButton>{props.buttonText}</StyledButton></a> */}
                        </StyledInfoContainer>

            </StyledSituationCard>
   
    )
}

export default Card;



