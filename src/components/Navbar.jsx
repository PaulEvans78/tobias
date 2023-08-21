import React, { useState } from "react";
import styled from "styled-components";
import logoWhite_large from '../assets/logoWhite_large.png';

import {
    Link
} from "react-router-dom";


//NAVBAR

const StyledNav = styled.nav`
    /* background-image: linear-gradient(#161616, rgba(255,0,0,0)); */
    
    max-width: 100vw;
    min-width: 100vw;
    overflow-x: hidden;
    position: fixed;
    z-index: 100;
    top: 0;
    
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat (5, 1fr);
    grid-template-areas:
   "logo logo navbar navbar navbar";

    font-family: 'Lexend', sans-serif;
    font-size: 16px;
    line-height: 60px;
    color: whitesmoke;
    
    /* @media screen and (max-width: 960px) {
    font-size: 12px;
  }
    
    @media screen and (max-width: 767px) {
    grid-template-rows: auto;
    grid-template-columns: 80vw 20vw;
    grid-template-areas:
    "logo navbar "; 

    font-size: 20px;
  }
    
  @media screen and (max-width: 400px) {
  } */
`;


// NAV UL & LINKS

const StyledNavul = styled.ul`
    grid-area: navbar;
    display: flex;
    justify-self: flex-end; 
    align-self: flex-end;
    list-style-type: none;
    margin-right: 3em;
    
   
    
    /* @media screen and (max-width: 960px) {
        margin-bottom: 1.5em;
    }

    @media screen and (max-width: 767px) {
        position: fixed;
        display: flex;
        flex-direction: column;
        top: 70px;
        right: 0;
        height: 100vh;
        width: 60vw;
        background-image: linear-gradient(180deg, rgb(13, 13, 13) 15.1%, rgba(158, 159, 159) 100%);
        padding: 20px;
        transform: translateX(500px);
        transition: 0.5s ease-in-out; 
        margin-top: 1em;
        margin-right: 0;
        margin-bottom: 0em;
        z-index: 100;
    } */

    
`;

const StyledLink = styled(Link)`
    display: flex; 
    color: white;
    text-decoration: none;
    text-align: right;
    margin: 1em 1em 0em 1em;
    text-shadow: 2px 2px 4px black;
    
    &:hover{
        background: -webkit-linear-gradient(left, #404040, red , yellow);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        text-shadow: none;
    /* color: #ccae3f; */
    }

    /* @media screen and (max-width: 960px) {
    
  }

    @media screen and (max-width: 767px) {
        justify-content: flex-end;
    } */
`;

const ExternalStyledLink = styled.a`
    display: flex; 
    color: whitesmoke;
    text-decoration: none;
    text-align: right;
    margin: 1em 1em 0em 1em;
    text-shadow: 2px 2px 4px black;

    &:hover{
        background: -webkit-linear-gradient(left, #404040, red , yellow);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        text-shadow: none;
    /* color: #ccae3f; */
    }
    /* &:hover{
    color: #ccae3f;
    } */

    /* @media screen and (max-width: 960px) {
    
  }

    @media screen and (max-width: 767px) {
        justify-content: flex-end;
    } */
`;


// IMAGE AND NAME ID

const StyledImageandName = styled.div `
    grid-area: logo;
    display: flex;
    flex-direction: row;
    justify-self: flex-start;
    justify-content: flex-start;
    margin-top: 0.5em;
    

    /* animation-name: fadeIn;
    animation-duration: 8s;
    animation-delay: 0s; 

    @keyframes fadeIn {
  0% { opacity: 0; }
  50% { opacity: 0; }
  75% { opacity: 0; }
  100% { opacity: 1; }
} */
`;

const StyledImg = styled.img`
/* background: url("../assets/logoWhite_large.png") no-repeat; */
    height: 4em;
    margin-left: 3em;
    margin-right: 1em;
    margin-top: 0.5em;
    

     &:hover{
        /* background: url("../assets/logoFlag_large.png") no-repeat; */
    /* color: #ccae3f; */
    }

    @media screen and (max-width: 960px) {
        height: 4em;
  }

    @media screen and (max-width: 767px) {
    margin-left: 1em;
    margin-top: 0em;
    }
`;

const StyledName = styled.div `
    float: right;
    font-family: 'Delicious Handrawn', cursive;
    font-size: 36px;
    /* font-weight: 200; */
    line-height: 40px;
    letter-spacing: 0em;
    color: whitesmoke;
    margin-top: 0.75em;
    text-shadow: 1px 1px 4px black;
    
    &:hover{
        background: -webkit-linear-gradient(left, #404040, red , yellow);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        text-shadow: none;
       
    /* color: #ccae3f; */
    }

    @media screen and (max-width: 960px) {
        font-size: 32px;
        line-height: 22px;
        margin-top: 1em;
  }

    @media screen and (max-width: 767px) {
        display: flex;
        flex-direction: column;
        font-size: 24px;
        line-height: 24px;
        margin-top: 1.6em;
    }
`;

// const StyledTypewriter = styled.span `
//     font-family: 'Poppins';
//     font-size: 16px;
//     color: #ccae3f;

//     @media screen and (max-width: 960px) {
//         font-size: 14px;
//   }

//     @media screen and (max-width: 767px) {
//     display:block;
    
//     }
// `;



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
                    
                    <StyledImg src={logoWhite_large} alt="Tobias Reiner" onClick={() => {setOpen(false);}} />
                        <StyledName>Tobias Reiner 1st Assistant Director
                    
                            {/* <StyledTypewriter>
                                {text}
                            </StyledTypewriter> */}

                        </StyledName>

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