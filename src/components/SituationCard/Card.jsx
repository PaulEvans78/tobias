import React from 'react';
import { StyledSituationCard, StyledSituationCardImg, StyledImgContainer, StyledHeaderContainer, StyledInfoContainer, StyledCardp, Styledh3, } from './styles';






function Card (props) {

    return (
        
    
        
            <StyledSituationCard>

<StyledImgContainer>

                <StyledSituationCardImg src={props.mainPic} alt="Helicopter"/>
            
                    

                        <StyledHeaderContainer>
                            <Styledh3>{props.headline}</Styledh3>
                                {/* <StyledCardp>{props.description}</StyledCardp> */}
                                    {/* <a href={props.buttonLink}><StyledButton>{props.buttonText}</StyledButton></a> */}
                        </StyledHeaderContainer>
                        
</StyledImgContainer>
                        <StyledInfoContainer>
                        <StyledCardp>{props.description}</StyledCardp>
            
                        </StyledInfoContainer>

            </StyledSituationCard>
   
    )
}

export default Card;



