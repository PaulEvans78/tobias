import React from 'react';
import { StyledBrandsCard, StyledImgContainer, StyledBrandsCardImg, StyledHeaderContainer, StyledInfoContainer, StyledCardp, Styledh2, } from './styles';
import { Fade } from "react-awesome-reveal";





function Card (props) {

    return (
        
            <StyledBrandsCard>

                <StyledImgContainer>
                    
                    <StyledBrandsCardImg src={props.mainPic} alt="Maclaren"/>
             
                        <StyledHeaderContainer>
                            <Styledh2>{props.headline}</Styledh2>
                        </StyledHeaderContainer>

                </StyledImgContainer>

                        <Fade>
                            <StyledInfoContainer>
                                {/* <StyledCardp>{props.description}</StyledCardp> */}
                                <StyledCardp>                 
                                    <span className="Strong">AUDI, </span>
                                    <span className="light">BMW, </span>
                                    <span className="Strong">CITRÖEN, </span>
                                    <span className="light">FIAT, </span>
                                    <span className="Strong">FORD, </span>
                                    <span className="light">GENESIS, </span>
                                    <span className="Strong">HYUNDAI, </span>
                                    <span className="light">JAGUAR, </span>
                                    <span className="Strong">LAND ROVER, </span>
                                    <span className="light">LEXUS, </span>
                                    <span className="Strong">MERCEDES AMG, </span>
                                    <span className="light"> MINI, </span>
                                    <span className="Strong">POLESTAR, </span>
                                    <span className="light">PORSCHE, </span>
                                    <span className="Strong">RENAULT, </span>
                                    <span className="light">SAAB, </span>
                                    <span className="Strong">SCANIA, </span>
                                    <span className="light">TOYOTA, </span>
                                    <span className="Strong">VOLKSWAGEN, </span>
                                    <span className="light">VOLVO</span>
                                    <span className="Strong"></span>
                                </StyledCardp>
                            </StyledInfoContainer>
                        </Fade>

            </StyledBrandsCard>
   
    )
}

export default Card;



