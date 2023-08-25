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

export const StyledAboutMainContainer = styled.div`
    max-width: 100vw;
    /* overflow-x: hidden; */
`;

export  const StyledImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100vw;
`;

export  const StyledAboutImg = styled.img`
    max-width: 100%;
    /* height: 290px; */
    align-self: center;
    object-fit: cover;
    /* overflow-x: hidden; */
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
    /* overflow-x: hidden; */
    /* min-width: 100%; */
    /* height: 10%; */
    background-color: rgba(0, 0, 0, 0.8);  
    /* background-color: black;  */
    /* border-radius: 5px 5px 5px 5px; */
    padding: 2em 0em 2em 0em;
    /* margin-top: 20em; */
    margin-bottom: 8em;
    /* font-family: 'Lexend';
    font-size: 1.2rem; */
    overflow: hidden;

    animation-name: fadeIn;
    animation-duration: 2s;
    animation-delay: 0s;

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
}
    /* margin-bottom: 4em; */
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
    /* background-color: rgba(230, 230, 230, 0.1);  
    font-size: 98px;
    padding: 100px;
    box-shadow: 2px 2px 8px black; */
    /* font-weight: 900; */
`;

export  const StyledInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-items: flex-start; */
    /* justify-self: flex-start; */
    align-items: flex-start;
    /* padding: 0px 10px 0px 10px; */
    max-width: 100%;
    /* background-color: rgba(0, 0, 0, 0.9);    */
    /* border-radius: 0% 5px 5px 0px; */
    padding: 3em;
    font-family: 'Lexend';
    font-size: 16px;
    line-height: 1.5rem;
    overflow: hidden;
`;

export  const Styledp = styled.p`
    color: whitesmoke;
    font-size: 16px;
    margin-right: 50px;
    margin-left: 50px;
    /* padding: 0em 1.5em 1.5em; */
    text-align: left;

    /* animation-name: fadeIn;
    animation-duration: 2s;
    animation-delay: 0s;

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; } 
}*/
`;

export const StyledTypewriter = styled.span `
    align-self: center; 
    font-family: 'Delicious Handrawn', cursive;
    font-size: 32px;
    color: whitesmoke;
    margin-top: 1em;
    margin-bottom: 1.5em;

    
`;

export  const StyledAboutImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: space-evenly;
    align-items: center;
    width: 100%;
    margin-top: 2em;
    margin-bottom: 6em;
    /* background: red; */
    /* height: 100px; */
`;

export  const StyledAboutSmallImages = styled.img`
     width: 30%;
    /* height: 290px; */
    align-self: center;
    object-fit: cover;
`;