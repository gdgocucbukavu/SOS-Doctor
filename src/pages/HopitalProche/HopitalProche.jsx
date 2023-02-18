import React from "react";
import styled from "styled-components";
import { Articles } from "./data/Article";
import { FaSearch, FaMapMarked } from "react-icons/fa";
import CardArticle from "./component/CardArticle";
import Button from "./component/Button";
import { useNavigate, Outlet } from "react-router";
export default function HopitalProche() {
  const navigation = useNavigate();
  const [handleShow, sethandleShow] = React.useState(true);
  const handleRoute = (link) => {
    if (link === "/hopitalProche/proche") {
      sethandleShow(false);
    }
    navigation(link);
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
      {handleShow ? (
        <div className="ContainerRight">
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
              action={() => handleRoute("/hopitalProche/map")}
            />
            <Button
              title="Chercher"
              detail="Idéal Pour un endroit inconnu"
              icon={<FaSearch />}
              action={() => handleRoute("/hopitalProche/proche")}
            />
          </div>
        </div>
      ) : (
        <Outlet />
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
    
    z-index:100;
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
`;
