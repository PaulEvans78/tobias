import React from 'react';
import { StyledBrandsCard, StyledBrandsCardImg, StyledInfoContainer, StyledCardp, Styledh3, } from './styles';






function Card (props) {

    return (
        
    
        
            <StyledBrandsCard>
                <StyledBrandsCardImg src={props.mainPic} alt="Landrover"/>
            
                    

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

            </StyledBrandsCard>
   
    )
}

export default Card;



