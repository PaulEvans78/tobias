import React, { useState } from "react";
import styled from "styled-components";
import logoWhite_large from '../assets/logoWhite_large.png';

import {
    Link
} from "react-router-dom";


//NAVBAR

const StyledNav = styled.nav`
    max-width: 100vw;
    min-width: 100vw;
    overflow-x: hidden;
    position: fixed;
    z-index: 100;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-items: center;
    margin-top: 0.5em;
    font-family: 'Lexend', sans-serif;
    font-size: 16px;
    line-height: 60px;
    color: whitesmoke;
    `;

const StyledImageandName = styled.div `
    width: 70%;
    height: 100%;
    
`;

const StyledImgContainer = styled.div `
    float: left;
`;

const StyledImg = styled.img`
    text-align: center;
    width: 100px; 
    margin-left: 3em;
    margin-right: 3em;
    margin-top: 0.5em;
`;

const StyledIdent = styled.div `
    float: left;
    width: 50%; 
    height: 100%; 
    text-align: left;
`;

const StyledName = styled.div `
   
    font-family: 'Delicious Handrawn', cursive;
    font-size: 64px;
    line-height: 40px;
    letter-spacing: 0em;
    color: whitesmoke;
    margin-top: 0.5em;
    text-shadow: 1px 1px 4px black;
    
    
    /* &:hover{
        background: -webkit-linear-gradient(left, #404040, red , yellow);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        text-shadow: none;
  
    } */
    `;

const StyledTitle = styled.div `

font-family: 'Delicious Handrawn', cursive;
font-size: 28px;
line-height: 40px;
letter-spacing: 0em;
color: whitesmoke;
margin-top: 0.5em;
margin-left: 0.5em;
text-shadow: 1px 1px 4px black;
`;

const StyledNavul = styled.ul`
    display: flex;
    width: 30%;
    justify-self: flex-end; 
    align-self: flex-start;
    margin-right: 3em;
    `;

const StyledLink = styled(Link)`
    display: flex; 
    color: white;
    text-decoration: none;
    text-align: right;
    margin: 1em 1em 0em 1em;
    text-shadow: 2px 2px 4px black;
    
    /* &:hover{
        background: -webkit-linear-gradient(left, #404040, red , yellow);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        text-shadow: none;
    } */
`;

const ExternalStyledLink = styled.a`
    display: flex; 
    color: whitesmoke;
    text-decoration: none;
    text-align: right;
    margin: 1em 1em 0em 1em;
    text-shadow: 2px 2px 4px black;

    /* &:hover{
        background: -webkit-linear-gradient(left, #404040, red , yellow);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        text-shadow: none;
    } */
    `;
    
    // HAMBURGER

const StyledHamburger = styled.div`
    grid-area: navbar;
    display: none;

@media screen and (max-width: 767px) {
    display: flex;
    justify-content: flex-end;
    margin-top: 2em;
    margin-right: 2em;
}
`;

const StyledBurgerBars = styled.div `
    width: 2rem;
    height: 0.25rem;
    margin-bottom: 0.25rem;
    border-radius: 10px;
    background-color: whitesmoke;
    transform-origin: 1px;
    transition: all 0.2s linear;
`;

//NAVBAR
// https://www.youtube.com/watch?v=ZlDASfsL7FI


const Navbar = () => {
    const [open, setOpen] = useState(false); // Hamburger menu

    // const [text] = useTypewriter({
    //     words: ['UX/UI', 'Frontend Developer', 'Cinematographer', 'photographer', 'Creative'],
    //     loop: {},
    //     typeSpeed: 120,
    //     deleteSpeed: 120,
    // });

    

const links = [
    
    {
        id: 1,
        to: "/",
        text: "Home",
        onClick: () => { setOpen(false); },
        isExternal: false
    },
    {
        id: 2,
        to: "/directors",
        text: "Directors",
        onClick: () => { setOpen(false); },
        isExternal: false
    },
    {
        id: 3,
        to: "/experience",
        text: "Experience",
        onClick: () => { setOpen(false); },
        isExternal: false
    },
    {
        id: 4,
        to: "/about",
        text: "About",
        onClick: () => { setOpen(false); },
        isExternal: false 
    },
    {
        id:5,
        text: "Vimeo",
        href: "https://vimeo.com/tobiasreiner",
        onClick: () => { setOpen(false); },
        isExternal: true
    },
];

    return (
        
        <StyledNav > 

            <StyledImageandName>
                <Link to="/">
                    
                    <StyledImgContainer>
                        <StyledImg src={logoWhite_large} alt="Tobias Reiner" onClick={() => {setOpen(false);}} />
                    </StyledImgContainer>

                    <StyledIdent>
                        <StyledName>Tobias Reiner</StyledName>
                        <StyledTitle>1st Assistant Director</StyledTitle>
                    </StyledIdent>
                    
                            

                        

                </Link>  
            </StyledImageandName>        



            <StyledNavul style={{transform: open ? "translateX(0px)" : ""}}>
                 {links.map(link => link.isExternal ? <ExternalStyledLink key={link.id} href={link.href}>{link.text}</ExternalStyledLink> : <StyledLink onClick={link.onClick} to={link.to} key={link.id}>{link.text}</StyledLink>)}

                

            </StyledNavul>

            
            <div onClick={() => setOpen(!open)}>
                <Hamburger />
                </div>
            
            
        </StyledNav>
        

    );
}





//HAMBURGER MENU
function Hamburger() {

    return (  
      <StyledHamburger>
           <div>
           <StyledBurgerBars className="burger burger1"></StyledBurgerBars>
           <StyledBurgerBars className="burger burger2"></StyledBurgerBars>
           <StyledBurgerBars className="burger burger3"></StyledBurgerBars>
          </div>
          
      </StyledHamburger>
    );
  }

export default Navbar;