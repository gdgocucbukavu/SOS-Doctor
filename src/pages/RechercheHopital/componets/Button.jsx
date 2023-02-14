import React from 'react'
import styled from "styled-components";
export default function Button({ title, bg, action, icon, color,txtColor }) {
  return (
    <StyledButton  onClick={action} color={color} background={bg}>
      <p color={txtColor}>{title}</p>
      <div className="icone">{icon}</div>
    </StyledButton>
  )
}
const StyledButton = styled.button`
  min-height: 40px;
  height: 10px;
  border: none;
  box-shadow: rgba(142, 156, 171, 0.1) 0px 3px 10px;
  border-radius: 5px;
  display: flex;
  padding: 5px;
  align-items: center;

  gap: 20px;

  &:hover {
    border: 1px solid #39c3f6;
    background: rgba(199, 225, 252, 0.1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
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
`
;
