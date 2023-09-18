import React from 'react';
import { StyledSituationCard, StyledSituationCardImg, StyledImgContainer, StyledHeaderContainer, StyledInfoContainer, StyledCardp, Styledh2, } from './styles';
import { Fade } from "react-awesome-reveal";





function Card (props) {

    return (
        
            <StyledSituationCard>

                <StyledImgContainer>

                    <StyledSituationCardImg src={props.mainPic} alt="Helicopter"/>
            
                        <StyledHeaderContainer>
                            <Styledh2>{props.headline}</Styledh2>
                        </StyledHeaderContainer>
                        
                </StyledImgContainer>

                        <Fade>
                            <StyledInfoContainer>
                                <StyledCardp>
                                    <span className="strong">COMMERCIALS, </span>
                                    <span className="light">FEATURE FILM, </span>
                                    <span className="strong">MUSIC VIDEOS, </span>
                                    <span className="light">CELLULOID FILM, </span>
                                    <span className="strong">STILLS, </span>
                                    <span className="light">ACTORS, </span>
                                    <span className="strong">CELEBRITIES, </span>
                                    <span className="light">AMATEURS, </span>
                                    <span className="strong">KIDS, </span>
                                    <span className="light">MODELS, </span>
                                    <span className="strong">LARGE CROWDS, </span>
                                    <span className="light">ANIMALS, </span>
                                    <span className="strong">FOOD & BEVERAGE, </span>
                                    <span className="light">HOUSEHOLD PRODUCTS, </span>
                                    <span className="strong">EXTREME SPORTS, </span>
                                    <span className="light">FASHION, </span>
                                    <span className="strong">AUTOMOBILES, </span>
                                    <span className="light">REVEAL, </span>
                                    <span className="strong">PROTOTYPES, </span>
                                    <span className="light">PRESSKIT, </span>
                                    <span className="strong">STUNT, </span>
                                    <span className="light">PYROTECHNICS, </span>
                                    <span className="strong">FIREARMS & EXPLOSIVES, </span>
                                    <span className="light">360*VR, </span>
                                    <span className="strong">MOTION CONTROL, </span>
                                    <span className="light">MULTICAMERA, </span>
                                    <span className="strong">3D, </span>
                                    <span className="light">PROJECTION, </span>
                                    <span className="strong">LED WALL, </span>
                                    <span className="light">VFX, </span>
                                    <span className="strong">MOTION CAPTURE, </span>
                                    <span className="light">INFRARED, </span>
                                    <span className="strong">AERIAL, </span>
                                    <span className="light">DRONE & HELICOPTERS, </span>
                                    <span className="strong">UNDER WATER, </span>
                                    <span className="light">JUNGLE, </span>
                                    <span className="strong">ARCTIC, </span>
                                    <span className="light">OCEAN, </span>
                                    <span className="strong">MILITARY, </span>
                                    <span className="light">EQUESTRIAN, </span>
                                    <span className="strong">-30*C - +40*C, </span>
                                    <span className="light">HUNGRY CREW </span>
                                </StyledCardp>
                                
                            </StyledInfoContainer>
                        </Fade>

            </StyledSituationCard>
   
    )
}

export default Card;



