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
                                <StyledCardp>                  
                                    <span className="strong">EUROPE: </span>
                                    <span className="light">SWEDEN, </span>
                                    <span className="strong">NORWAY, </span>
                                    <span className="light">FINLAND, </span>
                                    <span className="strong">ESTONIA, </span>
                                    <span className="light">DENMARK, </span>
                                    <span className="strong">GREENLAND, </span>
                                    <span className="light">ICELAND, </span>
                                    <span className="strong">FARØER ISLANDS, </span>
                                    <span className="light">GERMANY, </span>
                                    <span className="light">FRANCE, </span>
                                    <span className="strong">SWITZERLAND, </span>
                                    <span className="light">ROMANIA, </span>
                                    <span className="strong">HUNGARY, </span>
                                    <span className="light">GREECE, </span>
                                    <span className="light">SPAIN, </span>
                                    <span className="strong">BALEARIC ISLANDS, </span>
                                    <span className="light">ITALY,</span>
                                    <span className="strong">PORTUGAL </span>
                                </StyledCardp>

                                <StyledCardp>
                                    <span className="strong">AFRICA: </span>
                                    <span className="light">SOUTH AFRICA </span> 
                                </StyledCardp>

                                <StyledCardp>
                                    <span className="strong">AMERICA: </span>
                                    <span className="light">USA, </span>
                                    <span className="strong">URUGUAY </span>   
                                </StyledCardp>

                                <StyledCardp>
                                    <span className="strong">ASIA:  </span>
                                    <span className="light">THAILAND </span> 
                                </StyledCardp>
                                
                            </StyledInfoContainer>
                        </Fade>

            </StyledCountriesCard>
   
    )
}

export default Card;



