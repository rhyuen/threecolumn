import React, { PureComponent } from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Nav from "./Nav.jsx";
import App from "./App.jsx";
import Quiz from "./Quiz.jsx";

const RouteContainer = styled.section``;
const RootContainer = styled.section``;

const currentTheme = {};
export default class Root extends PureComponent {
  render() {
    return (
      <HashRouter>
        <ThemeProvider theme={currentTheme}>
          <RootContainer>
            <Nav />
            <RouteContainer>
              <Route exact path="/" component={App} />
              <Route exact path="/quiz" component={Quiz} />
            </RouteContainer>
          </RootContainer>
        </ThemeProvider>
      </HashRouter>
    );
  }
}
