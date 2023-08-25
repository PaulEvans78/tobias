// import ImageSlideApp from "./components/BackgroundSlider/ImageSlideApp";
// import { Carousel } from "./components/FrontpageCarousel/Carousel";
// import { slides } from "./data/data.json"


// import SliderApp from './components/FrontPageSlider/SliderApp.jsx';
// import SliderStyle from './components/FrontPageSlider/SliderStyle.css';

import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
// import ScrollButton from "./components/ScrollButton";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
// import SlideShow from "./components/SlideShowComponent/SlideShow/SlideShow";
import Directors from "./pages/Directors";
import Experience from "./pages/Experience";
import About from "./pages/About";


// import { Routes, Route } from "react-router-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

const GridContainer = styled.div`
/* position: relative; */
min-height: 100%;
/* min-width: 400px; */
max-width: 100vw;
/* display: grid;
grid-template-rows: 7rem repeat(3, 1fr) 7rem;
grid-template-columns: repeat(5, 1fr);
grid-template-areas:
"top top top top top"
"main main main main main"
"main main main main main"
"main main main main main"
"footer footer footer footer footer"; */

/* @media screen and (max-width: 767px) {
max-width: 100vw;
grid-template-rows: 7rem repeat(2, 1fr) 7rem;
grid-template-columns: repeat(2, 1fr);
grid-template-areas:
"top top "
"main main "
"main main "
"main main "
"footer footer"; 
  } */
`;


// MAIN CONTAINER
const MainContainer = styled.div`
position: relative;
/* grid-area: main; */
/* top: 0; */
max-width: 100vw;
background-color: rgba(0, 0, 0, 0.9); 
/* background-color: black; */
display: flex;
flex-direction: column;
flex-wrap: wrap;
/* align-items: flex-end; */
justify-items: center;
justify-content: space-evenly;
/* margin-bottom: 1.5em; */
/* padding: 0em 2em 0em 2em; */

/* @media screen and (max-width: 767px) {
flex-direction: column;
align-items: center;
padding: 0em 0em 0em 0em;

} */
`;

function App() {
  
  return (

    <Router>


      <GridContainer >

      

      {/* <ImageSlideApp/> */}

      <Navbar />
  
        <MainContainer>

        {/* <Carousel data={slides} /> */}
       
     


        {/* <Routes>

                <Route exact path="/" element={<Home />}/>
                

                <Route path="/directors" element={<Directors />}/>
                  
                
                <Route path="/experience" element={<Experience />}/>
                  
                

                <Route path="/about" element={<About />}/>
                  
                


        </Routes> */}






          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/directors">
              <Directors />
            </Route>

            <Route path="/experience">
              <Experience />
            </Route>

            <Route path="/about">
              <About />
            </Route>


            

          </Switch>

          
          

            </MainContainer>

                {/* <ScrollButton /> */}

                <Footer />
                
      </GridContainer>
      
    </Router>
   
  );
}

export default App;
