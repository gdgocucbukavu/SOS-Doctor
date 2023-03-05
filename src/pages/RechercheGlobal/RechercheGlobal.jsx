import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardArticle from "../HopitalProche/component/CardArticle";
import CardHopital from "../RechercheHopital/componets/CardHopital";
import { useParams } from "react-router-dom";
import { Articles } from "../Secours/data/Article";
import { Hopitaux } from "../RechercheHopital/data/hopitaux";

export default function RechercheGlobal() {
  const [dataHopitaux, setDataHopitaux] = useState([]);
  const [dataArticles, setDataArticles] = useState([]);
  const [ShowSearch, setShowSearch] = useState(true);

  let { parametre } = useParams();
  let query = parametre.toLowerCase();
  const n = Hopitaux.filter((h) => h.nom.toLowerCase().includes(query));
  const g = Articles.filter((A) => A.titre.toLowerCase().includes(query));

  useEffect(() => {
    console.log(n);
    if (n.length === 0 && g.length === 0) {
      setShowSearch(!ShowSearch);
    } else {
      setDataHopitaux(n);
      setDataArticles(g);
    }
  }, []);
  return (
    <Global>
      {ShowSearch ? (
        <div>
          <div className="body">
            <h2 className="main">Résultat de la recherche</h2>

            <div className="hopContainer">
              <h3>Hopitaux</h3>
              <div className="hopitaux">
                {dataHopitaux.map((hopital) => (
                  <CardHopital hopital={hopital} key={hopital.nom} />
                ))}
              </div>
            </div>
          </div>
          <div className="Articlemain">
            <h3>Articles</h3>
            <div className="ArticlesContainer">
              {dataArticles.map((Article, index) => (
                <CardArticle Article={Article} key={index} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2>Aucun élèment trouvé</h2>
        </div>
      )}
    </Global>
  );
}
const Global = styled.div`
  display: flex;
  width: 100%;
  min-height: 90vh;
  flex-direction: column;
  padding-top: 1rem;
  gap: 10px;
  background: rgba(100, 166, 236, 0.1);
  .ArticlesContainer {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    padding-top: 1rem;
    width: 100%;
    justify-content: center;
    @media (max-width: 768px) {
      align-items: center;
      justify-content: center;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    .hopContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding-top: 45px;

      @media screen and (max-width: 768px) {
        padding-top: 17px;
      }
      h3 {
        padding-left: 25px;
        @media (max-width: 768px) {
          padding-left: 15px;
        }
      }
    }

    .main {
      text-align: center;
      font-size: 2rem;

      @media (max-width: 768px) {
        font-size: 1.1;
      }
    }
    .hopitaux {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      padding-left: 25px;
      padding-top: 10px;
      justify-content: center;
      @media (max-width: 768px) {
        padding: 5px;
        padding-top: 16px;
        width: 95%;
        margin: auto;
      }
    }
  }

  .Articlemain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px;

    @media screen {
      align-items: center;
    }
  }
`;
