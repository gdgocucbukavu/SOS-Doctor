import React, { useEffect, useState } from "react";
import Select from "react-select";
import Button from "../../components/Button";
import styled from "styled-components";
import Illustration from "./Assets/415 1.svg";
import Illustration1 from "./Assets/Illustra.svg";
import { useNavigate } from "react-router-dom";
import { delais, frequence, medicaments } from "./data";
import AjoutCureSuivant from "../SuivantAjoutCure/SuivantAjoutCure";
import { toast } from "react-toastify";

export default function AjoutCure() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});

  const handleChange = (selectedOption, name) => {
    console.log(selectedOption);
    if (name === "heures") {
      setData({ ...data, [name]: selectedOption });
    } else setData({ ...data, [name]: selectedOption.label });
    console.log(`Option selected:`, data);
  };

  const handleChangeTime = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    if (
      data.medicament &&
      data.delais &&
      data.frequencejournaliere &&
      data.heures &&
      data.time
    ) {
      toast.success("Cure ajoutée avec succès");
    } else {
      toast.error("Veuillez remplir tous les champs");
    }
  };

  const Suivant = () => {
    if (data.medicament && data.delais && data.frequencejournaliere) {
      setShow(true);
    } else {
      toast.error("Veuillez remplir tous les champs");
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {!show && (
        <StyledQuickTest>
          <div className="ContainerLeft">
            <div className="Header">
              <h2>Ajouter une cure</h2>

              <p>
                Planifiez votre cure et laisse moi m'occuper de tout. Remplissez
                les champs necéssaires{" "}
              </p>
              <div className="ImageIllustration">
                <img src={Illustration1} alt="" />
              </div>
            </div>

            <div className="testInfos">
              <p>1. Veuillez Choisir un médicament :</p>
              <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue="2"
                isClearable={true}
                name="medicament"
                options={medicaments}
                onChange={(e) => handleChange(e, "medicament")}
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
              <p>2.Delai de cette cure :</p>
              <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue="1"
                isClearable={true}
                name="delais"
                required
                options={delais}
                onChange={(e) => handleChange(e, "delais")}
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
              <p>3. Fréquence par jour :</p>
              <Select
                className="basic-single"
                classNamePrefix="select"
                isClearable={true}
                name="frequencejournaliere"
                options={frequence}
                required
                onChange={(e) => handleChange(e, "frequencejournaliere")}
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
                title={"Suivant"}
                bg={"#AE376D"}
                color={"white"}
                event={Suivant}
              />
            </div>
          </div>
          <div className="ContainerRight">
            <img src={Illustration} alt="Illustration" />
          </div>
        </StyledQuickTest>
      )}
      {show && (
        <AjoutCureSuivant
          setShow={setShow}
          show={show}
          handleChange={handleChange}
          handleChangeTime={handleChangeTime}
          data={data}
        />
      )}
    </form>
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
