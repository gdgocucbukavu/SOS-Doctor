import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBookOpen, FaSave } from "react-icons/fa";
import parse from "html-react-parser";
export default function Article({ Article, CloseArtcticle }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Articles im={Article.image}>
      <div className="left">
        <nav>
          <h2>Navigation Rapide</h2>
          <ul>
            <li>
              <Link to="/">QuickTest</Link>
            </li>
            <li>
              <Link to="/">Hopital Proche</Link>
            </li>
            <li>
              <Link to="/">Secours</Link>
            </li>
            <li>
              <Link to="/">Matérnité</Link>
            </li>
            <li>
              <Link to="/">Séxualité</Link>
            </li>
            <li>
              <Link to="/">Divers</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="right">
        <div className="Decription">
          <h2>{Article.titre}</h2>
          <div className="footer">
            <p className="heure">
              <FaBookOpen color={"#DE2478"} />{" "}
              <span>{Article.HeureLecture}</span>{" "}
            </p>
            <p>{Article.date}</p>
            <button>
              <span>Enregistrer</span>
              <FaSave color={"#39C3F6"} />
            </button>
          </div>
          <div className="ContainerText">
            <div className="img"></div>
            {Article.description ? (
              parse(Article.description)
            ) : (
              <>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis ipsa, accusamus architecto repellendus quidem iure
                  voluptatum obcaecati ratione pariatur earum nobis optio eaque
                  nam quaerat iste laudantium sunt corrupti corporis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis ipsa, accusamus architecto repellendus quidem iure
                  voluptatum obcaecati ratione pariatur earum nobis optio eaque
                  nam quaerat iste laudantium sunt corrupti corporis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis ipsa, accusamus architecto repellendus quidem iure
                  voluptatum obcaecati ratione pariatur earum nobis optio eaque
                  nam quaerat iste laudantium sunt corrupti corporis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis ipsa, accusamus architecto repellendus quidem iure
                  voluptatum obcaecati ratione pariatur earum nobis optio eaque
                  nam quaerat iste laudantium sunt corrupti corporis.
                </p>
              </>
            )}
          </div>
          <button className="btn" onClick={CloseArtcticle}>
            Retour
          </button>
        </div>
      </div>
    </Articles>
  );
}
const Articles = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  justify-content: center;
  gap: 10px;
  background: #fff;

  animation: showing 0.3s ease-in;
  @keyframes showing {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .left {
    flex: 1;
    padding: 2rem;
    height: 100%;
    @media screen and (max-width: 768px) {
      display: none;
    }
    nav {
      border-radius: 10px;
      background: rgba(100, 166, 236, 0.1);
      padding: 14px;
      height: 100%;

      h2 {
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
      }
      ul {
        list-style: none;
        margin-top: 12px;

        a {
          text-decoration: none;
          color: #000;
        }
        li {
          background: rgba(217, 217, 217, 0.34);
          padding: 12px;
          border-radius: 10px;
          margin-top: 11px;
          cursor: pointer;
        }
      }
    }
  }

  .right {
    flex: 3;
    padding: 2rem;
    .btn {
      width: 70%;
      margin: auto;
      padding: 15px 15px;
      margin-bottom: 1rem;
      background: #39c3f6;
      border-radius: 10px;
      cursor: pointer;
      margin-top: 1rem;
      font-weight: 800;
      outline: none;
      border: none;
      color: #fff;
    }
    .Decription {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      width: 85%;
      margin: auto;
      padding-bottom: 2rem;

      h2 {
        font-weight: 600;
        font-size: 48px;
        line-height: 72px;
      }

      .footer {
        display: flex;
        gap: 20px;
        text-align: center;
        padding-top: 15px;
        justify-content: center;
        align-items: center;
        padding-bottom: 15px;
        font-style: italic;
        .heure {
          display: flex;
          gap: 5px;
          align-items: center;
        }

        button {
          gap: 12px;
          display: flex;
          border: none;
          width: 118px;
          height: 40px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background: rgba(205, 205, 205, 0.12);
          border-radius: 5px;
          font-style: italic;
        }
      }
    }
    .ContainerText {
      .img {
        background: url(${(props) => props.im});
        width: 100%;
        height: 260px;
        margin-bottom: 15px;
        border-radius: 10px;
        background-size: cover;
        background-position: center;

        @media screen and (max-width: 768px) {
          height: 200px;
        }
      }
      p {
        text-align: justify;
        padding: 10px 0px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .right {
      padding: 1rem;
      .Decription {
        width: 100%;

        h2 {
          font-size: 30px;
          line-height: 40px;
        }
        .footer {
          display: flex;
          gap: 10px;
          text-align: center;
          font-size: 12px;

          font-style: italic;
          .heure {
            display: flex;
            gap: 7px;
            align-items: center;
          }

          button {
            width: auto;
            height: auto;
            padding: 8px 15px;
            span {
              display: none;
            }
          }
        }
      }
    }
  }
`;
