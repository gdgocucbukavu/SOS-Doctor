import React from "react";
import { FaBookOpen } from "react-icons/fa";
import styled from "styled-components";

export default function CardArticle({ Article }) {
  return (
    <CardContainer im={Article.image}>
      <div className="img"></div>
      <div className="Decription">
        <h2>{Article.titre}</h2>
        <div className="ArticleFooter">
          <p>{Article.date}</p>
          <p>
            <FaBookOpen color={"#DE2478"} /> <span>{Article.HeureLecture}</span>{" "}
          </p>
        </div>
      </div>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 12px;
  padding: 8px;
  cursor: pointer;
  height: 245px;
  width: 300px;
  @media (max-width: 678px) {
    width: 100%;
  }

  .img {
    background: url(${(props) => props.im});
    width: 100%;
    height: 130px;
    border-radius: 10px;
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
`;
