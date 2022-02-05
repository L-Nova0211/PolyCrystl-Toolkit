import React from "react";
import styled from "styled-components";
import { SpinnerProps } from "./types";

const Container = styled.div`
  position: relative;
`;

const Spinner: React.FC<SpinnerProps> = ({ src }) => {
  return (
    <Container>
      <img src={src} alt="logo" width="200px" style={{ paddingRight: "5px" }} />
    </Container>
  );
};

export default Spinner;
