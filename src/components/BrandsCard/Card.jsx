import React from 'react';
import { StyledBrandsCard, StyledImgContainer, StyledBrandsCardImg, StyledHeaderContainer, StyledInfoContainer, StyledCardp, Styledh2, } from './styles';
import { Fade } from "react-awesome-reveal";





function Card (props) {

    return (
        
            <StyledBrandsCard>

                <StyledImgContainer>
                    
                    <StyledBrandsCardImg src={props.mainPic} alt="Landrover"/>
             
                        <StyledHeaderContainer>
                            <Styledh2>{props.headline}</Styledh2>
                        </StyledHeaderContainer>

                </StyledImgContainer>

                        <Fade>
                            <StyledInfoContainer>
                                <StyledCardp>{props.description}</StyledCardp>
                            </StyledInfoContainer>
                        </Fade>

            </StyledBrandsCard>
   
    )
}

export default Card;



