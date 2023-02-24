import React, { useEffect, useState } from "react";
import styled from "styled-components";
import searchIcon from "./Assets/searh.png";
import axios from "axios";
import { Hopitaux } from "./data/hopitaux";
import CardHopital from "./componets/CardHopital";
const Chercher = () => {
  const [query, setQuery] = React.useState("");
  const [data, setData] = useState(Hopitaux);
  const[ApiData,setApiData]=useState([])

  const SearchListe = (e) => {
    setQuery(e.target.value.toLowerCase());
    if (query !== "") {
      const n = Hopitaux.filter((h) => h.nom.toLowerCase().includes(query));
      setData(n);
    } else {
      setData(Hopitaux);
    }
    console.log(query);
    if (query === "") {
      setData(Hopitaux);
    }
  };

  useEffect(() => {
    if (query === "") {
      setData(Hopitaux);
    }

  });

  useEffect(() => {
 
      axios.get(`https://apigsdc.herokuapp.com/tousleshopitaux/`).then((res) => {
       
        setApiData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ChercherStyled>
      <div className="head">
        <h2>Choisissez ou chercher un hopital que vous connaissez </h2>
        <div className="Search">
          <input
            type="text"
            placeholder="Chercher un hopital..."
            onChange={SearchListe}
          />
          <img src={searchIcon} alt="search" />
        </div>
      </div>
      <div className="body">
        <div className="hopitaux">
          {data.map((hopital) => (
            <CardHopital hopital={hopital} key={hopital.nom} />
          ))}
        </div>
      </div>
    </ChercherStyled>
  );
};
const ChercherStyled = styled.div`
  padding-top: 0.1rem;
  flex: 3;
  @media (max-width: 768px) {
    padding-right: 0px;
    flex: 2;
    padding: 1rem;
    padding-right: 15px;
  }
  .head {
    display: flex;
    align-items: center;

    flex-direction: column;
    justify-content: center;
    gap: 12px;
    padding: 8px;
    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      text-align: center;
      line-height: 60px;
      color: #39c3f6;
      padding: 0;

      @media (max-width: 768px) {
        font-size: 28px;
        line-height: 40px;
      }
    }
    .Search {
      display: flex;
      background: #f4f4f4;
      border-radius: 10px;
      width: 80%;

      align-items: center;
      padding: 0px 15px 0px 0px;
      img {
        cursor: pointer;
      }
      @media (max-width: 768px) {
        width: 100%;
        margin-top: 10px;
      }

      input {
        flex: 1;
        font-size: 18px;
        background: #f4f4f4;
        border-radius: 10px;
        padding: 15px;
        border: none;
        outline: none;

        &:focus {
          border-color: #7497ae;
          transition: all 0.3s ease-in;
        }

        @media (max-width: 768px) {
          padding: 20px;
        }
      }
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 8px;

    .hopitaux {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 24px;
      padding: 12px;
      padding-top: 45px;

      @media (max-width: 768px) {
        padding: 5px;
        padding-top: 16px;
      }
    }
  }
`;
export default Chercher;
