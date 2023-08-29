import React from "react";
import styled from "styled-components";



const StyledFooter = styled.footer`
  /* background-color: rgba(0, 0, 0, 0.6); */
  background-image: linear-gradient(rgba(255,0,0,0), #141414);
  position: fixed;
  max-width: 100vw;
  min-width: 100vw;
  z-index: 100;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  font-family: 'Poppins';
  font-size: 14px;
  line-height: 24px;
  color: whitesmoke;
  padding-top: 0.5em;
  padding-bottom: 0.5em;

  @media screen and (max-width: 767px) {
    background-color: #191919;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
  }
`;



const StyledContact = styled.p`
  display: flex;
  flex-direction: row;
  color: whitesmoke;
  margin-left: 3em;
  text-shadow: 2px 2px 4px black;

  @media screen and (max-width: 767px) {
    font-size: 16px;
    margin-left: 0em;
  }
`;



const StyledTelLink = styled.p`
  display: flex;
  flex-direction: row;
  color: whitesmoke;
  margin-left: 2em;
  text-shadow: 2px 2px 4px black;

  &:hover{
    background: -webkit-linear-gradient(left, #404040, red , yellow);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        text-shadow: none;
  }

  @media screen and (max-width: 767px) {
    margin-left: 0em;
  }
`;



const StyledMailLink = styled.p`
  display: flex;
  flex-direction: row;
  color: whitesmoke;
  margin-right: 3em;
  text-shadow: 2px 2px 4px black;

  &:hover{
    background: -webkit-linear-gradient(left, #404040, red , yellow);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        text-shadow: none;
  }

  @media screen and (max-width: 767px) {
    margin-right: 0em;
  }
`;





const Footer = () => {
    return (
        <StyledFooter>
            <StyledContact>Contact Me: </StyledContact> 
            <StyledTelLink><a href="tel:+46739813969">Call: +46739813969</a></StyledTelLink>
            <StyledMailLink><a href="mailto:mail@FirstAD.se">Mail: mail@FirstAD.se</a></StyledMailLink>
        </StyledFooter>
        
    );
}


export default Footer;








