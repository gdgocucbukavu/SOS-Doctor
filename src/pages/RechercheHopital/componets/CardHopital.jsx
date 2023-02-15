import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import phone from "../Assets/phone.svg";
import ReactStars from "react-stars";
const CardHopital = ({ hopital }) => {
  return (
    <CardContainer im={hopital.image}>
      <div className="img"></div>
      <div className="Decription">
        <h2>{hopital.nom}</h2>
        <p>{hopital.details}</p>
      </div>
      <div className="start">
        <ReactStars
          count={5}
          value={hopital.niveau}
          size={24}
          color2={"#ffd70088"}
          color1={"#DCDCDC"}
        />
      </div>
      <div className="footer">
        <Button
          title="Map"
          icon={<FaMapMarkerAlt />}
          link={hopital.map}
          color="#39C3F6"
        />
        <Button
          title="Urgence"
          bg="#AE376D"
          icon={<img src={phone} alt="" />}
          txtColor="#AE376D"
          color="#ffff"
          link={`tel:${hopital.numero}`}
        />
      </div>
    </CardContainer>
  );
};
const CardContainer = styled.div`
  background: #ffffff;
  border: 1px solid #d7ebff;
  border-radius: 10px;
  margin-bottom: 12px;
  cursor: pointer;
  width: 357px;
  cursor: pointer;
  min-height: auto;
  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    transform: scale(1.01);
    box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
    transition: all 0.1s ease-in;
  }

  .img {
    background: url(${(props) => props.im});
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 0px 0px;
    background-size: cover;
    background-position: center;
    /* box-shadow: rgba(100, 100, 111, 0.1) 0px 5px 29px 0px; */
  }
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
  }
  .start {
    padding: 5px 0 5px 12px;
  }
  .Decription {
    padding: 12px 0 5px 12px;
    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;

      line-height: 30px;
      color: #333333;
    }

    p {
      font-size: 14px;
    }
  }
  .footer {
    display: flex;
    padding: 12px;
    padding-bottom: 1rem;
    padding-top: 5px;
    gap: 15px;
    align-items: center;
    justify-content: space-between;
  }
`;

export default CardHopital;
