import React from "react";
import styled from "styled-components";

export default function Button({ title, event, bg, color, icon }) {
  return (
    <StyledButton bg={bg} color={color} onClick={event}>
      {title}
      {icon && <span className={icon}></span>}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: 100%;
  padding: 6px 13px;
  border-radius: 5px;
  font-family: "poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 36px;
  color: ${(props) => (props.color ? props.color : "#fff")};
  background-color: ${(props) => (props.bg ? props.bg : "#DA344D")};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  span {
    font-size: 25px;
  }

  @media (max-width: 768px) {
    height: 50px;
    font-size: 16px;
  }
`;
