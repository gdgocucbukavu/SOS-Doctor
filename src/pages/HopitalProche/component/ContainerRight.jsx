import React from 'react'
import styled from "styled-components";
import { FaSearch, FaMapMarked } from "react-icons/fa";
import Button from "./Button";
import { useNavigate } from "react-router";
export default function Right() {
    const navigation = useNavigate();
    const [handleShow, sethandleShow] = React.useState(true);

    const handleRoute = (link) => {
        if (link === "proche") {
          sethandleShow(false);
        }
        navigation(link);
      };
  return (
    <ContainerRight>
          <h2>Hopital Proche</h2>
          <p>
            7 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Doloremque veniam, necessitatibus, assumenda dicta corrupti omnis ad
            beatae autem debitis maxime suscipit, dolore quis illum quidem.
            Illum dolor harum enim voluptate.
          </p>
          <div className="ServiceContainer">
            <Button
              title="Maps"
              detail="Idéal Pour un endroit inconnu"
              icon={<FaMapMarked />}
              color="#39c3f699"
              action={() => handleRoute("map")}
            />
            <Button
              title="Chercher"
              detail="Idéal Pour un endroit inconnu"
              icon={<FaSearch />}
              action={() => handleRoute("proche")}
            />
          </div>
    </ContainerRight>
  )
}
const ContainerRight = styled.div`
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
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      text-align: justify;
      line-height: 24px;
    }
    .ServiceContainer {
      display: flex;
      gap: 45px;
      padding-top: 10px;
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 1.4em;
      @media (max-width: 768px) {
        justify-content: center;
      }
    }
  }

`