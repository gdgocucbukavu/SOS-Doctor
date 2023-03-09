import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Medicaments } from "./data/Cure";
import AucuneCure from "./component/AucuneCure";
import CardMedicament from "./component/CardMedicament";
import { Articles } from "./data/Article";
import { FaPlus } from "react-icons/fa";
import CardArticle from "./component/CardArticle";
import { useNavigate } from "react-router-dom";
export default function CurMedicament() {
  const [DataCure, setDataCure] = useState(Medicaments);
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const Navigate = useNavigate();

  const AjouterCure = () => {
    Navigate("/AjouterCure");
  };
  useEffect(() => {
    if (DataCure.length >= 1) {
      setShow(true);
    }
  });
  return (
    <StyledHopitalProche>
      <div className="ContainerLeft">
        <div className="Container">
          <div className="Head">
            <h2>Articles Recents</h2>
            <p>Retrouvez les articles sur la santé icii :</p>
          </div>
          <div className="ArticlesContainer">
            {Articles.map((Article) => (
              <CardArticle Article={Article} key={Article.titre} />
            ))}
          </div>
        </div>
      </div>
      {show ? (
        <div className="ContainerRight">
          <div className="head">
            <h2>Cure médicament</h2>
            <button className="ButtonAjout " onClick={AjouterCure}>
              <FaPlus className="icone" />
              <p>Ajouter</p>
            </button>
          </div>

          <p>
            Veuillez me fournir les informations necéssaires pour mieux pour
            vous rappeler de vos cures
          </p>

          <div className="body">
            <div className="ContainerCure">
              {Medicaments.map((medicament) => (
                <CardMedicament data={medicament} />
              ))}
            </div>

            <div className="footer">
              <div className="Card">
                <p>paludisme</p>
                <div className="text">
                  <p>
                    Le paludisme est une maladie humaine potentiellement
                    mortelle causée par des parasites que transmettent les
                    piqûres de moustiques anophèles femelles infectées.
                  </p>
                </div>
                <div className="SavorPlus">
                  <button>Apprendre plus</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="ContainerRight">
          <AucuneCure />
        </div>
      )}
    </StyledHopitalProche>
  );
}
const StyledHopitalProche = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  gap: 10px;

  animation: showing 0.3s ease-in;
  @keyframes showing {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .ContainerLeft {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 1rem;

    z-index: 100;
    top: 70px;

    @media (max-width: 768px) {
      display: none;
    }
    .Container {
      background: rgba(215, 235, 255, 0.21);
      border-radius: 5px;
      overflow: auto;
      position: sticky;
      padding: 10px;

      ::-webkit-scrollbar {
        width: 0;
        display: none;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #d7ebff;
        border-radius: 5px;
        height: 10px;
      }
      ::-webkit-scrollbar-button {
        width: 100px; //for horizontal scrollbar
        height: 100px; //for vertical scrollbar
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #39c3f6;
      }

      &:hover {
        ::-webkit-scrollbar {
          transition: all 0.4s ease-in;
          width: 8px;
          height: 20px;
          display: block;
        }
      }

      .Head {
        padding: 15px;
        h2 {
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 30px;
        }
        p {
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #333333;
        }
      }
      .ArticlesContainer {
        width: 100%;
        padding: 15px;
      }
    }
  }
  .ContainerRight {
    display: flex;
    flex-direction: column;
    flex: 3;
    padding-right: 55px;
    padding-top: 0.1rem;

    @media (max-width: 768px) {
      padding-right: 0px;
      flex: 2;
      padding: 1rem;
      padding-right: 15px;
    }
    .head {
      display: flex;
      gap: 25px;
      align-items: center;
      h2 {
        width: 100%;
        font-size: 28px;
      }

      .ButtonAjout {
        color: #fff;
        background: #ae376d;
        border: none;
        cursor: pointer;
        font-size: 17px;
        text-align: center;
        padding: 7px 15px;
        align-items: center;
        justify-content: center;
        gap: 5px;
        border-radius: 5px;
        display: flex;
        @media (max-width: 768px) {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          border-radius: 5px;
        }
      }
    }
    .body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 18px;
      img {
        width: 60%;
      }

      .ContainerCure {
        display: flex;
        flex-wrap: wrap;
        padding-top: 30px;
        justify-content: center;
        align-items: center;
        gap: 25px;
      }

      p {
        font-size: 16px;
      }

      @media (max-width: 768px) {
        img {
          width: 95%;
        }
        align-items: center;
        justify-content: center;
      }
    }
  }
  .footer {
    padding: 12px;
    border-radius: 8px;
    background: #d7ebff36;
    margin-top: 14px;

    p {
      font-weight: 700;
      font-size: 24px;
      line-height: 36px;
    }
    .text {
      p {
        font-weight: normal;
        font-size: 18px;
        line-height: normal;
      }
    }
    .SavorPlus {
      display: flex;
      align-items: center;
      padding-top: 8px;
      justify-content: right;

      button {
        padding: 8px;
        border: 1px solid #da344d;
        cursor: pointer;
        border-radius: 8px;
        font-size: 17px;
        text-align: center;
      }
    }
  }
  @media (max-width: 1210px) {
    flex: 2;
  }
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 38px;
    line-height: 60px;
    color: #39c3f6;
    padding: 0;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
`;
