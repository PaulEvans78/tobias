import React from "react";
import styled from "styled-components";
// import { BsInstagram, BsGithub, BsLinkedin  } from 'react-icons/bs';
// import { IconContext } from "react-icons";


// const footerData = [
//   {
//       id: 1,
//       href: "https://www.linkedin.com/in/paul-evans-3a74605/",
//       icon: <BsLinkedin />,
//       des: "LinkedIn"
//   },
//   {
//       id: 2,
//       href: "https://www.instagram.com/paulevanscreative/",
//       icon: <BsInstagram />,
//       des: "Instagram"
//   },
//   {
//       id: 3,
//       href: "https://github.com/PaulEvans78",
//       icon: <BsGithub />,
//       des: "gitHub"
//   },
// ];

const StyledFooter = styled.footer`
  /* background-image: linear-gradient(rgba(255,0,0,0), #141414); */
  /* grid-area: footer; */
  position: fixed;
  max-width: 100vw;
  min-width: 100vw;
  z-index: 100;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  /* justify-items: center; */
  max-width: 100%;
  font-family: 'Poppins';
  font-size: 16px;
  line-height: 24px;
  color: whitesmoke;
  padding-bottom: 0.5em;

  /* @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  } */
`;
const StyledContact = styled.p`
  display: flex;
  flex-direction: row;
  /* justify-self: center; */
  /* justify-content: space-evenly; */
  /* row-gap: 2; */
  color: whitesmoke;
  /* border-radius: 8px; */
  margin-left: 3em;
  text-shadow: 2px 2px 4px black;
  /* &:hover{
    background: -webkit-linear-gradient(left, #404040, red , yellow);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
    
  } */

  /* @media screen and (max-width: 767px) {
    margin-left: 0em;
  } */
`;

const StyledMailLink = styled.p`
  display: flex;
  flex-direction: row;
  /* justify-self: center; */
  /* justify-content: space-evenly; */
  /* row-gap: 2; */
  color: whitesmoke;
  /* border-radius: 8px; */
  margin-right: 3em;
  text-shadow: 2px 2px 4px black;

  &:hover{
    background: -webkit-linear-gradient(left, #404040, red , yellow);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        text-shadow: none;
    /* color: #ccae3f; */
  }

  /* @media screen and (max-width: 767px) {
    margin-left: 0em;
  } */
`;

const StyledTelLink = styled.p`
  display: flex;
  flex-direction: row;
  /* justify-self: center; */
  /* justify-content: space-evenly; */
  /* row-gap: 2; */
  color: whitesmoke;
  /* border-radius: 8px; */
  margin-left: 2em;
  text-shadow: 2px 2px 4px black;

  &:hover{
    background: -webkit-linear-gradient(left, #404040, red , yellow);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        text-shadow: none;
    /* color: #ccae3f; */
  }

  /* @media screen and (max-width: 767px) {
    margin-left: 0em;
  } */
`;

// const IconContainer = styled.div`
//   grid-area: footer;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;

// @media screen and (max-width: 767px) {
//   flex-direction: column;
//   background-image: none;
// }
// `;


// const StyledIcon = styled.a`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 1em 2em 0em 2em;
//   &:hover{
//     color: #ccae3f;
//   }
// `;

// const IconDes = styled.p`
//   display: flex;
//   flex-direction: column;
//   align-content: center;
//   font-family: 'Poppins';
//   font-size: 16px;
//   line-height: 24px;
//   color: whitesmoke;
//   text-align: center;
//   margin-top: 0.5em;
// `;


const Footer = () => {
    return (
        <StyledFooter>
            <StyledContact>Contact Me: </StyledContact> 
            <StyledTelLink><a href="tel:+46739813969">Call: +46739813969</a></StyledTelLink>
            <StyledMailLink><a href="mailto:mail@FirstAD.se">Mail: mail@FirstAD.se</a></StyledMailLink>
              {/* <Icons /> */}
        </StyledFooter>
        
    );
}

// const Icons = () => {
  
//   return (
//     <IconContainer> 

//       <IconContext.Provider value={{ size: "1.5em"}}>
//         {footerData.map(Link => (
//           <StyledIcon href={Link.href} key={Link.id}>
//             {Link.icon}
          
//             <IconDes>{Link.des}</IconDes>
//         </StyledIcon>))}
        
//           </IconContext.Provider>

//      </IconContainer>
//   );
// }

 


export default Footer;








