import React from "react";
import styled from "styled-components";
import i from "../assets/logo.png";

export default function Footer() {
  return (
    <FooterContainer>
      <div className="first">
        <img src={i} alt="hey" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          nulla reprehenderit assumenda, quod quas ipsum quia voluptates maxime
          repellendus commodi?
        </p>
      </div>
      <div className="links">
        <h2>Liens rapides</h2>
        <div className="li"></div>
      </div>
      <div className="sociaux">
        <CardSociaux />
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  background: #ae376d;
  display: flex;
  padding: 10;
  margin-top: 10px;
  padding-bottom: 20px;
  @media (max-width: 678px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .first,
  .links,
  .sociaux {
    flex: 1;
    padding: 10px;
  }

  .first {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #fff;
    img {
      width: 60px;
      border-radius: 30px;
    }
  }
`;

const CardSociaux = ({ nom, Icon }) => {
  return <IconContainer></IconContainer>;
};

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #707070;
`;
