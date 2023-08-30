import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Experience from "./pages/Experience";
import About from "./pages/About";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

const GridContainer = styled.div`
min-height: 100%;
max-width: 100vw;
`;

const MainContainer = styled.div`
position: relative;
max-width: 100vw;
background-color: rgba(0, 0, 0, 0.9); 
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-items: center;
justify-content: space-evenly;
`;

function App() {
  
  return (

    <Router>

      <GridContainer >

          <Navbar />
      
            <MainContainer>

          
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

                  <Footer />
                
      </GridContainer>
      
    </Router>
   
  );
}

export default App;
