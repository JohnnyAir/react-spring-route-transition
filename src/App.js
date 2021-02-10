import { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RouteTransition from "./RouteTransition";
import { PageOne, PageTwo, PageThree } from "./Pages";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

function App() {
  const [animationType, setAnimationType] = useState("RIGHT_TO_LEFT");

  return (
    <>
      <select
        value={animationType}
        onChange={(e) => setAnimationType(e.target.value)}
      >
        <option value="RIGHT_TO_LEFT">RIGHT_TO_LEFT</option>
        <option value="FADE_RIGHT_TO_LEFT">FADE_RIGHT_TO_LEFT</option>
        <option value="FADE">FADE</option>
      </select>
      <AppContainer>
        <BrowserRouter>
          <RouteTransition animationType={animationType}>
            {(location) => (
              <Switch location={location}>
                <Route exact path="/" component={PageOne} />
                <Route exact path="/page2" component={PageTwo} />
                <Route exact path="/Page3" component={PageThree} />
              </Switch>
            )}
          </RouteTransition>
        </BrowserRouter>
      </AppContainer>
    </>
  );
}

export default App;
