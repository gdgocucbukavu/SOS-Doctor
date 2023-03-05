import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Symptomes } from "./data/data.js";
import Button from "../../components/Button";
import styled from "styled-components";
import Illustration from "./Assets/417.svg";
import Illustration1 from "./Assets/Illustra.svg";
import { apilink } from "../../config/api.js";
import Http from "../../config/http.js";

export default function AjoutCureSuivant({ show, setShow }) {
  const fréquence = [
    { value: "1", label: "une sémaine" },
    { value: "2", label: "deux semaine" },
  ];
  const medicament = [
    { value: "1", label: "ibiprofene" },
    { value: "2", label: "docteur maison" },
  ];
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <StyledQuickTest>
      <div className="ContainerLeft">
        <div className="Header">
          <h2>Vous y etes presque</h2>

          <p>
            Vous vous sentez mal ou vous soupçonnez quelque chose ! Dites-moi
            tout. Je peux vous aider. J'ai besoin de tous les détails possibles
            pour pouvoir vous aider avec précision.
          </p>
          <div className="ImageIllustration">
            <img src={Illustration1} alt="" />
          </div>
        </div>
        <form action="">
          <div className="testInfos">
            <p>4. Sélectionner les heures de prise de médicaments:</p>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue="Masculin"
              isMulti
              isClearable={true}
              name="sexe"
              options={medicament}
              styles={{
                control: (state) => ({
                  width: "100%",
                  overflow: "hidden",
                  border: "1px solid #39C3F6",
                  borderRadius: "5px",
                  minHeight: "50px",
                  display: "flex",
                  borderColor: state.isFocused ? "grey" : "#39C3F6",
                }),
              }}
              required
            />
          </div>
          <div className="testInfos">
            <p>5.Commet :</p>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue="Masculin"
              isClearable={true}
              name="sexe"
              options={fréquence}
              styles={{
                control: (state) => ({
                  width: "100%",
                  border: "1px solid #39C3F6",
                  borderRadius: "5px",
                  minHeight: "50px",
                  display: "flex",
                  borderColor: state.isFocused ? "grey" : "#39C3F6",
                }),
              }}
            />
          </div>
          <div className="footer">
            <Button
              title={"Retourner"}
              type="button"
              bg={"#3331"}
              color="#333"
              event={() => setShow(!show)}
            />
            <Button title={"Ajouter"} bg={"#AE376D"} color={"white"} />
          </div>
        </form>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          fugiat ea
        </p>
      </div>
      <div className="ContainerRight">
        <img src={Illustration} alt="Illustration" />
      </div>
    </StyledQuickTest>
  );
}
const StyledQuickTest = styled.div`
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

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .ContainerLeft,
  .ContainerRight {
    display: flex;
    flex: 1;
  }

  .ContainerRight {
    display: flex;
    align-items: center;
    height: 100%;
    overflow: hidden;
    padding-top: 2rem;
    img {
      width: 100%;
      border-radius: 10px;
    }
    @media (max-width: 930px) {
      display: none;
    }
  }

  .ContainerLeft {
    display: flex;
    flex-direction: column;
    padding: 2rem;

    @media (max-width: 768px) {
      padding: 1.3rem;
    }
    .Header {
      h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 60px;
        color: #39c3f6;
        padding: 0;
        @media (max-width: 768px) {
          font-size: 28px;
        }
      }
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
      .ImageIllustration {
        width: 100%;
        display: none;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        margin-bottom: 1rem;
        img {
          width: 196px;
          height: 196px;
          border-radius: 50%;
          left: 99px;
          top: 215px;
        }
        @media (max-width: 930px) {
          display: flex;
        }
      }
    }
    .testInfos {
      margin-top: 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      p {
        font-style: normal;
        font-weight: 600;
        margin-bottom: 10px;
      }

      .basic-multi-select {
        background-color: red;
      }
    }
    .footer {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px 0px 40px 0px;
      text-align: center;

      p {
        font-style: normal;
        padding: 0;

        margin: 0;
      }
    }
  }
`;
