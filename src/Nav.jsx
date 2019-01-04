import React, { PureComponent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  height: 80px;
  background: white;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgrey;
`;

const StyledLink = styled(Link)`
  padding-right: 20px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;

  &:visited {
    color: black;
  }
`;

export default class Nav extends PureComponent {
  render() {
    return (
      <StyledNav>
        <StyledLink to="/">Root</StyledLink>
        <StyledLink to="/quiz">Quiz</StyledLink>
      </StyledNav>
    );
  }
}
