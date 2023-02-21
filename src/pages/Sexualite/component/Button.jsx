import React from "react";
import { FaMap } from "react-icons/fa";
import styled from "styled-components";

export default function Button({ title, detail, action, icon, color }) {
  return (
    <StyledButton onClick={action} color={color}>
      <div className="icone">{icon}</div>

      <div className="text">
        <h2>{title}</h2>
        <p>{detail}</p>
      </div>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background: #fff;
  min-height: 110px;
  height: 10px;
  border: 1px solid #39c3f685;
  box-shadow: rgba(142, 156, 171, 0.1) 0px 3px 10px;
  border-radius: 10px;
  display: flex;
  padding: 15px;
  align-items: center;

  gap: 20px;

  &:hover {
    transform: translateY(5px);
    border: 1px solid #39c3f6;
    background: rgba(199, 225, 252, 0.1);
    transition: all 0.2s ease-in-out;

    cursor: pointer;
  }
  @media (max-width: 1210px) {
    width: 100%;
  }

  .icone {
    font-size: 50px;
    /* color:  #de2478; */
    color: ${({ color }) => color || "#de247899"};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    text-align: left;

    h2 {
      font-weight: 700;
      font-size: 32px;
      line-height: 54px;
    }
    p {
      font-style: normal;
      text-align: left;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
