import React from "react";
import styled from "styled-components";
export default function Button({
  title,
  bg,
  action,
  icon,
  color,
  txtColor,
  link,
}) {
  return (
    <StyledButton onClick={action} color={color} background={bg} href={link}>
      <p color={txtColor}>{title}</p>
      <div className="icone">{icon}</div>
    </StyledButton>
  );
}
const StyledButton = styled.a`
  border: none;
  box-shadow: rgba(142, 156, 171, 0.1) 0px 3px 10px;
  border-radius: 5px;
  display: flex;
  text-decoration: none;
  flex: 1;
  padding: 12px 10px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-color: #39c3f6;
  background: ${(props) => (props.background ? props.background : "#fff")};
  gap: 10px;
  border: ${(props) => (props.background ? "none" : "0.3px solid #39c3f6")};
  color: ${(props) => (props.color ? props.color : "#fff")};

  &:hover {
    background: rgba(199, 225, 252, 0.1);
    background: ${(props) => (props.background ? props.background : "#fff")};
    cursor: pointer;
    transform: scale(0.9);
    border: 0.3px solid #39c3f6;
    border-color: ${(props) => (props.background ? "#AE3769" : "#39c3f6")};
    transition: all 0.1s ease-in;
  }

  .icone {
    font-size: 20px;
    /* color:  #de2478; */
    color: ${(props) => (props.color ? props.color : "#fff")};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    text-align: left;
    p {
      font-style: normal;
      text-align: left;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
