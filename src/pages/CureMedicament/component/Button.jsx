import React from "react";
import { FaMap } from "react-icons/fa";
import styled from "styled-components";

export default function Button({ title, detail, action, icon}) {
  return (
    <StyledButton onClick={action}>
      <div className="icone">{icon}</div>
        <h2>{title}</h2>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border: none;
  height:100%;
  box-shadow: rgba(142, 156, 171, 0.1) 0px 3px 10px;
  border-radius: 10px;
  display: flex;
  padding: 5px;
  align-items: center;
  color: white;
  cursor:pointer;
  background-color: ${(props) => (props.bg ? props.bg : "#DA344D")};

  gap: 20px;

  @media (max-width: 1210px) {
    width: 100%;
  }

  .icone {
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
    h2 {
      font-weight: 700;
      color:white;
      font-size: 32px;
      line-height: 54px;
    }

`;
