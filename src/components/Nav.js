import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: black;
  padding: 10px 0;
  a {
    color: white;
  }
`;

export default () => (
  <Wrapper>
    <Link to="/">Live</Link>
    <Link to="/recordings">Recordings</Link>
  </Wrapper>
);
