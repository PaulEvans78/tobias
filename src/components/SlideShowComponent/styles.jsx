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

export const StyledSlideShowMainContainer = styled.div`
    max-width: 100vw;
    /* overflow-x: hidden; */
`;

export  const StyledImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100vw; 
`;

export  const StyledSlideShowImg = styled.img`
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
    align-items: center;
    width: 100vw;
    min-width: 100vw;
    /* background-color: rgba(0, 0, 0, 0.8);   */
    padding: 2em 0em 2em 0em;
    margin: 0em 0em 0em 0em;

    
    /* animation-name: fadeOut;
    animation-duration: 2s;
    animation-delay: 0s;

    @keyframes fadeOut {
        0% { opacity: 1; }
        50% { opacity: 0.5; }
        100% { opacity: 0; }
} */
`;

export const StyledLogoImg = styled.img`
    width: 20%;
`;

export const StyledTypewriter = styled.span `
    align-self: center; 
    font-family: 'Delicious Handrawn', cursive;
    font-size: 48px;
    color: whitesmoke;
    margin-top: 1em;
    margin-bottom: 1.5em;
`;


// export  const Styledh3 = styled.h3`
//     text-align: left;
//     margin-top: 0.25em;
//     margin-bottom: 0.25em;
//     white-space: pre-wrap;
//     color: whitesmoke;
//     font-family: 'MuseoModerno', cursive;
//     font-size: 52px;
//     letter-spacing: 0.5rem;
// `;

// export  const StyledInfoContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     max-width: 100%;
//     padding: 4em;
//     font-family: 'Lexend';
//     font-size: 16px;
//     line-height: 2rem;
//     overflow: hidden;
// `;

// export  const Styledp = styled.p`
//     color: whitesmoke;
//     font-size: 16px;
//     margin-right: 50px;
//     margin-left: 50px;
//     text-align: left;
// `;

