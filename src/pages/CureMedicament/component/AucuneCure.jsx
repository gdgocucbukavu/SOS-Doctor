import React from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import illustraction from "../Assets/Illustration.svg";
import Button from "../../../components/Button";
export default function AucuneCure() {
    const Navigate = useNavigate();

    const AjouterCure = () => {
      Navigate("/AjouterCure");
    };
  return (
    <Container>
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

    </Container>
  )
}
const Container = styled.div`
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
`