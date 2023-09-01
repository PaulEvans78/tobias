import React from "react";
import styled from "styled-components";
import { FaImdb, FaInstagram, FaLinkedin  } from 'react-icons/fa';
import { IconContext } from "react-icons";


const footerData = [
  {
      id: 1,
      href: "https://www.linkedin.com/in/tobias-reiner-64885645/",
      icon: <FaLinkedin />,
      des: "LinkedIn"
  },
  {
      id: 2,
      href: "https://www.instagram.com/1st_ad_tobias/",
      icon: <FaInstagram />,
      des: "Instagram"
  },
  {
      id: 3,
      href: "https://www.imdb.com/name/nm1639113/?ref_=fn_al_nm_1",
      icon: <FaImdb />,
      des: "Imdb"
  },
  
];

const StyledFooter = styled.footer`
  background-image: linear-gradient(rgba(255,0,0,0), #171717);
  max-width: 100vw;
  min-width: 100vw;
  z-index: 100;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: center;
  align-items: flex-end;
  font-family: 'Lexend';
  font-size: 12px;
  line-height: 24px;
  color: whitesmoke;

  @media screen and (max-width: 767px) {
    background-image: none;
    background-color: #171717;
    flex-direction: column;
    align-items: center;
  }
`;



const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
        text-align: center;
    }
`;

const Styledp = styled.p`
  margin-left: 2em;
  margin-bottom: -0.5em;
  text-shadow: 2px 2px 4px black;

  @media screen and (max-width: 767px) {
    margin-left: 0em;
  }

`;

const StyledMailLink = styled.p`
  display: flex;
  flex-direction: column;
  color: whitesmoke;
  margin-left: 2em;
  margin-bottom: -0.5em;
  text-shadow: 2px 2px 4px black;

  &:hover{
        text-decoration: underline;
    }

  @media screen and (max-width: 767px) {
    margin-left: 0em;

    &:hover{
        text-decoration: none;
    }

  }
`;

const StyledTelLink = styled.p`
  display: flex;
  flex-direction: column;
  color: whitesmoke;
  margin-left: 2em;
  text-shadow: 2px 2px 4px black;

  &:hover{
        text-decoration: underline;
    }

  @media screen and (max-width: 767px) {
    margin-left: 0em;

    &:hover{
        text-decoration: none;
    }

  }
`;


const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-right: 4em;

  @media screen and (max-width: 960px) {
        margin-right: 0em;

    }

    

@media screen and (max-width: 767px) {
  margin-right: 0em;
}
`;


const StyledIcon = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em 2em 0em 2em;
  
  &:hover{
        text-decoration: underline;
    }

    @media screen and (max-width: 767px) {
    margin-left: 0em;

    &:hover{
        text-decoration: none;
    }
    
  }
`;

const IconDes = styled.p`
  display: flex;
  flex-direction: column;
  align-content: center;
  font-family: 'Lexend';
  line-height: 24px;
  color: whitesmoke;
  text-align: center;
  margin-top: 0.5em;
`;

const StyledCopyRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-right: 2em;
  margin-bottom: 1em;

  @media screen and (max-width: 767px) {
    flex-direction: row;
    }
`;

const StyledCopyRight = styled.div`
  line-height: 26px;
  font-family: 'Lexend';
  color: whitesmoke;
  text-shadow: 2px 2px 4px black;

  @media screen and (max-width: 767px) {
    font-size: 8px;
    margin-left: 1em;
    margin-right: 1em;
    }
`;

const Footer = () => {
    return (
      
        <StyledFooter>

          <StyledContactContainer>

            <Styledp>Tobias Reiner</Styledp>
            <StyledMailLink><a href="mailto:mail@FirstAD.se">mail@FirstAD.se</a></StyledMailLink> 
            <StyledTelLink><a href="tel:+46739813969">+46739813969</a></StyledTelLink>

          </StyledContactContainer>

        
              <Icons />

          <StyledCopyRightContainer>

              <StyledCopyRight>Copyright 2023</StyledCopyRight>
              <StyledCopyRight>Paul Evans</StyledCopyRight>
              <StyledCopyRight>Creative</StyledCopyRight>

          </StyledCopyRightContainer>

        </StyledFooter>

         
    );
}

const Icons = () => {
  
  return (
    <IconContainer> 

      <IconContext.Provider value={{ size: "2em"}}>
        {footerData.map(Link => (
          <StyledIcon href={Link.href} key={Link.id}>
            {Link.icon}
          
            <IconDes>{Link.des}</IconDes>
        </StyledIcon>))}
        
          </IconContext.Provider>

    </IconContainer>
  );
}

 


export default Footer;











