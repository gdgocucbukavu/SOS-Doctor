import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import { Articles } from "./data/Article";
import illustraction from "./Assets/Illustration.svg";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import CardArticle from "./component/CardArticle";
export default function CurMedicament() {
  const Navigate = useNavigate();

  const AjouterCure = () => {
    Navigate("/AjouterCure");
  };
  return (
    <StyledHopitalProche>
      <div className="ContainerLeft">
        <div className="Container">
          <div className="Head">
            <h2>Articles Recents</h2>
            <p>Retrouvez les articles sur la santé ici :</p>
          </div>
          <div className="ArticlesContainer">
            {Articles.map((Article) => (
              <CardArticle Article={Article} key={Article.titre} />
            ))}
          </div>
        </div>
      </div>
      <div className="ContainerRight">
        <div className="head">
          <h2>Cure médicament</h2>
          <div className="button" onClick={AjouterCure}>
            <FaPlus /> ajouter
          </div>
        </div>

        <div className="body">
          <img src={illustraction} alt="illustration" />
          <p>Vous n'avez pas une cure en cour</p>
          <div className="button">
            <Button
              title={"Ajouter maintenant"}
              bg={"#AE376D"}
              color={"white"}
              event={AjouterCure}
            />
          </div>
        </div>
      </div>
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

      .button {
        color: #fff;
        background: #ae376d;
        border: none;
        cursor: pointer;
        font-size: 17px;
        text-align: center;
        padding: 7px 15px;

        display: none;
        @media (max-width: 768px) {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          border-radius: 5px;
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

    .body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 18px;
      img {
        width: 60%;
      }

      p {
        font-weight: 600;
        font-size: 16px;
        line-height: 60px;
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
`;
