import styled from "styled-components";


// MAIN CONTAINER

// export const DirectorsMainContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     /* justify-items:flex-start; */
//     /* margin-top: 3em; 
//     margin-bottom: 2em;
//     margin-left: 0.5em; */
//     width: 100vw;
//     /* height: 450px; */
//     background-color: black;
//     /* border: 2px solid white; */
//     /* border-radius: 10px; */
//     font-family: 'Lexend';
//     font-size: 1.2rem;
//     overflow: hidden;
// `;

export const StyledDirectorsMainContainer = styled.div`
    max-width: 100vw;
    /* overflow-x: hidden; */
`;

export  const StyledImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    max-width: 100vw; 
`;

export  const StyledDirectorsImg = styled.img`
    width: 100%;
    /* height: 290px; */
    align-self: center;
    object-fit: cover;
    /* filter: blur(2px);
  -webkit-filter: blur(2px); */
`;

export  const StyledHContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    /* justify-items: flex-start; */
    /* justify-self: flex-start; */
    align-items: center;
    /* padding: 0px 10px 0px 10px; */
    width: 100vw;
    min-width: 100vw;
    /* height: 10%; */
    background-color: rgba(0, 0, 0, 0.8);  
    /* background-color: black;  */
    padding: 2em 0em 2em 0em;
    /* margin-top: 20em; */
    margin-bottom: 8em;
    /* margin-bottom: 2em; */

    animation-name: fadeIn;
    animation-duration: 2s;
    animation-delay: 0s;

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
}
`;

export  const Styledh3 = styled.h3`
    text-align: left;
    margin-top: 0.25em;
    margin-bottom: 0.25em;
    /* padding: ; */
    /* margin-right: 50px; */
    white-space: pre-wrap;
    color: whitesmoke;
    font-family: 'MuseoModerno', cursive;
    /* font-family: 'Roboto', sans-serif; */
    font-size: 52px;
    /* font-weight: 300; */
    letter-spacing: 0.5rem;
    
    /* font-size: 98px;
    padding: 100px;
    box-shadow: 2px 2px 8px black; */
   
`;

export  const StyledInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-items: flex-start; */
    /* justify-self: flex-start; */
    align-items: flex-start;
    /* padding: 0px 10px 0px 10px; */
    max-width: 100%;
    /* background-color: rgba(0, 0, 0, 0.6);    */
    /* border-radius: 0% 5px 5px 0px; */
    padding: 4em;
    font-family: 'Lexend';
    font-size: 16px;
    line-height: 2rem;
    overflow: hidden;
`;

export  const Styledp = styled.p`
    color: whitesmoke;
    font-size: 16px;
    margin-right: 50px;
    margin-left: 50px;
    /* padding: 0em 1.5em 1.5em; */
    text-align: left;
`;

