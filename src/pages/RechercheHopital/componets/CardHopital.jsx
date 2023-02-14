import React from 'react';
import styled from "styled-components";
import Button from './Button';
import { FaMapMarkerAlt,FaPhone} from 'react-icons/fa';
const CardHopital = ({ hopital }) => {
    return (
        <CardContainer im={hopital.image}>
        <div className="img"></div>
        <div className="Decription">
          <h2>{hopital.nom}</h2>
          <p>{hopital.details}</p>
        </div>
        <div className="footer">
          <Button
          title="Voir sur la carte"  
          icon={<FaMapMarkerAlt/>}
          color="#39C3F6"
          />
          <Button
          title="Urgence" 
          bg="#AE376D"  
          icon={<FaPhone/>}
          txtColor="#AE376D"
          color="#39C3F6"
          />
        </div>
      </CardContainer>
    );

}
const CardContainer = styled.div`
    background: #FFFFFF;
    border: 1px solid #D7EBFF;
    border-radius: 10px;
    margin-bottom: 12px;
    cursor: pointer;
    width:357px;
    height: 382px;
    @media (max-width: 768px) {
        width:100%;
      }

  .img {
    background: url(${(props) => props.im});
    width: 100%;
    height: 130px;
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
    margin-top: 10px;
  }
  .Decription {
    padding:12px;
    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      
      line-height: 30px;
      color: #333333;
    }
    .ArticleFooter {
      display: flex;
      gap: 13px;
      font-style: italic;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      align-items: center;
      color: #333333;
      p {
        display: flex;
        gap: 7px;
        align-items: center;
        padding-top: 10px;
      }
    }
  }
  .footer{
    padding:12px;
    display:flex;
    gap:50px;
  }
`;


export default CardHopital;
