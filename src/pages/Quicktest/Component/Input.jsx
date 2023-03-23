import React from "react";
import styled from "styled-components";

export default function Input({ ...rest }) {
  return <StyledInput {...rest} />;
}

const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #39c3f6;
  border-radius: 5px;
  padding-left: 5px;
  outline: none;
`;
