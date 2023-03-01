import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Illustration from "./Assets/portrait-african-american-practitioner-nurse-smiling-camera-removebg-preview 1.svg";
import Bg from "./Assets/bg.png";
import { Buttons } from "./data/buttons.js";
import searchIcon from "./Assets/searh.png";
import circle from "./Assets/Ellipse.png";
import rainbow from "./Assets/Rainbow.png";

export default function Accueil() {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState("");

  const ActionButton = (path) => {
    navigate(path);
  };

  const SearchGlobal =()=>{
    setQuery(document.getElementById("Search").value)
    navigate("/"+query)
  }

  return (
    <>
      <StyledAccueil bg={Bg}>
        <div className="imgs">
          <img src={circle} alt="" />
          <img src={rainbow} alt="" />
        </div>
        <div className="ContainerLeft">
          <h2>
            <span>SOS Doctor</span>, votre <br /> docteur de poche
          </h2>
          <p>
            Besoin d'orientation et info sur votre santé et structure sanitaire
            proche? Pas de soucis, je peux vous aider à contacter les secours et
            Accédez à des conseils sanitaire en un clic.
          </p>
          <div className="img">
            <img src={Illustration} alt="Illustration" />
          </div>
        </div>
        <div className="ContainerRight">
          <div className="Search">
            <input 
            type="text" 
            placeholder="Chercher un article..."
            id="Search"
             />
            <img src={searchIcon} alt="search" onClick={SearchGlobal} />
          </div>
          <div className="Services">
            <h2>Services</h2>
            <p>
              Besoin d'appeler les urgences ? contacter un hopital ? apprendre
              plus sur l'édictaion sanitaire ? Je suis le Meilleur docteur pour
              cette tache.
            </p>
            <div className="ContainerService">
              {Buttons.map((Button, index) => (
                <button onClick={() => ActionButton(Button.path)} key={index}>
                  <div className="Logo">
                    <img src={Button.icone} alt="" />
                  </div>
                  <h3>{Button.nom}</h3>
                  <p>{Button.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </StyledAccueil>
    </>
  );
}
const StyledAccueil = styled.nav`
  display: flex;
  width: 100%;
  gap: 80px;
  padding: 75px 8px 8px 8px;
  flex-direction: row;
  background-image: ${(props) => `url(${props.bg})`};

  animation: showing 0.3s ease-in;
  @keyframes showing {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .imgs {
    display: none;
    position: relative;
    width: 100%;
  }

  @media (max-width: 930px) {
    flex-wrap: wrap;
    gap: 20px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding-top: 1.5rem;

    .imgs {
      display: block;
      height: 40px;
      img {
        position: absolute;
        :first-child {
          top: -20px;
        }
        :last-child {
          bottom: -100px;
          right: 5px;
        }
      }
    }
  }

  .ContainerLeft {
    flex: 1;
    display: flex;
    padding: 0px 25px 25px 25px;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (max-width: 768px) {
      padding: 10px;
      padding-top: 0;
    }

    h2 {
      font-size: 40px;
      font-weight: 600;
      span {
        color: #39c3f6;
      }
      @media (max-width: 768px) {
        font-weight: 600;
        font-size: 32px;
        line-height: 48px;
        text-align: center;
      }
    }

    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
    }

    .img {
      width: 430px;
      height: 430px;
      display: flex;
      left: 75px;
      border-radius: 50%;
      margin-top: 140px;
      top: 521px;
      background: #ae376d;

      img {
        position: absolute;
        width: 778.54px;
        height: 490.19px;
        left: -56px;
        top: 340px;
      }
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
  .ContainerRight {
    flex: 2;

    .Search {
      display: flex;
      background: #f4f4f4;
      border-radius: 10px;
      align-items: center;
      padding: 0px 20px 0px 0px;
      img {
        cursor: pointer;
      }

      input {
        flex: 1;
        font-size: 18px;
        background: #f4f4f4;
        border-radius: 10px;
        padding: 20px;
        outline: none;
        border: none;

        &:focus {
          border-color: #7497ae;
          transition: all 0.3s ease-in;
        }
      }
    }
    .Services {
      min-height: 651px;
      background: #d7ebff;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      margin-top: 35px;
      align-items: center;
      padding: 20px;

      h2 {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-size: 40px;
        line-height: 60px;
        text-align: center;
      }
      p {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
      }
      .ContainerService {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 24px;
        justify-content: center;
        align-items: center;
        padding: 25px 30px 30px 30px;

        @media (max-width: 768px) {
          padding: 10px;
          gap: 20px;
        }

        button {
          width: 200px;
          min-height: 200px;
          padding: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #ffffff;
          border-radius: 10px;
          cursor: pointer;
          border: none;
          @media (max-width: 768px) {
            width: 98%;
            padding: 30px;
          }
          .Logo {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: #f5f5f5;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 8px;
          }
          h3 {
            font-family: "Poppins";
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 30px;
            text-align: center;
          }

          p {
            font-family: "Poppins";
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            padding-top: 10px;
            line-height: 16px;
            text-align: center;
          }
          &:hover {
          }
        }
      }
    }
  }
`;
