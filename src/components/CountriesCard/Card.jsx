import React from 'react';
import { StyledSituationCard, StyledSituationCardImg, StyledInfoContainer, StyledCardp, Styledh3, } from './styles';






function Card (props) {

    return (
        
    
        
            <StyledSituationCard>
                <StyledSituationCardImg src={props.mainPic} alt="Lake Sweden"/>
            
                    

                        <StyledInfoContainer>
                            <Styledh3>{props.headline}</Styledh3>
                            {/* <StyledCardp> 
                                EUROPE: 	SWEDEN, NORWAY, FINLAND, ESTONIA, DENMARK, GREENLAND, ICELAND; FARØER ISLANDS, GERMANY, FRANCE, SWITZERLAND, ROMANIA, HUNGARY, GREECE, SPAIN, BALEARIC ISLANDS, ITALY, PORTUGAL     

                                AFRICA: 	SOUTH AFRICA,     

                                AMERICA: USA, URUGUAY 

                                ASIA:      	THAILAND, 
</StyledCardp> */}
                                <StyledCardp>{props.description}</StyledCardp>
                                    {/* <a href={props.buttonLink}><StyledButton>{props.buttonText}</StyledButton></a> */}
                        </StyledInfoContainer>

            </StyledSituationCard>
   
    )
}

export default Card;



