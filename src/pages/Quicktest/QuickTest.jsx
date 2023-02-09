import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Symptomes } from "./data/data.js";
import Button from "../../components/Button";
import styled from "styled-components";
import Illustration from "./Assets/415 1.svg";
import Illustration1 from "./Assets/Illustra.svg";
import axios from "axios";
import { apilink } from "../../config/api.js";
import Http from "../../config/http.js";
import Input from "./Component/Input.jsx";

export default function QuickTest() {
  const [selectData, setSelectData] = useState([]);
  // [

  useEffect(() => {
    document.title = "Quick Test";
    Http()
      .get(`/symptoms?token=${apilink}&language=en-gb`)
      .then((res) => {
        console.log(res.data);
        setSelectData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ndata = [];
  selectData.map((item) => {
    ndata.push({ value: item.ID, label: item.Name });
  });
  console.log(ndata);
  const optionsSexe = [
    { value: "chocolate", label: "Masculin" },
    { value: "strawberry", label: "Feminin" },
  ];
  return (
    <StyledQuickTest>
      <div className="ContainerLeft">
        <div className="Header">
          <h2>Quick test</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            temporibus autem tenetur ex nostrum quo optio atque numquam cum
            quaerat aliquid deleniti.
          </p>
          <div className="ImageIllustration">
            <img src={Illustration1} alt="" />
          </div>
        </div>
        <form action="">
          <div className="testInfos">
            <p>1. Veuillez Choisir les Symptomes :</p>
            <Select
              defaultValue={Symptomes[2]}
              isMulti
              name="colors"
              options={ndata ?? Symptomes}
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
            <p>2.Votre Sexe :</p>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue="Masculin"
              isClearable={true}
              name="sexe"
              options={optionsSexe}
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
          <div className="testInfos">
            <p>3. Votre Age :</p>
            <Input type="number" placeholder="2001" />
          </div>
          <div className="footer">
            <Button
              title={"Tester maintenant"}
              bg={"#AE376D"}
              color={"white"}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              porro possimus reprehenderit fuga. Porro similique velit.
            </p>
          </div>
        </form>
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
  height: 88vh;
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

    overflow: hidden;
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
    .Header {
      h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 60px;
        color: #39c3f6;
        padding: 0;
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
    }
  }
`;
