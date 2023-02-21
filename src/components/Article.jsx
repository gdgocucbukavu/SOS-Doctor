import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBookOpen,FaSave } from "react-icons/fa";
export default function Article({ Article}) {
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
            <p>{Article.date}</p>
            <p>
              <FaBookOpen color={"#DE2478"} /> <span>{Article.HeureLecture}</span>{" "}
            </p>
            <button>
              <span>Enregistrer</span>
              <FaSave color={"#39C3F6"} />
            </button>
        </div>
        <div className="ContainerText">
          <div className="img"></div>
          <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. Reiciendis ipsa, 
            accusamus architecto repellendus quidem iure voluptatum 
            obcaecati ratione pariatur earum nobis optio eaque nam 
            quaerat iste laudantium sunt corrupti corporis.<br/>

            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. Reiciendis ipsa, 
            accusamus architecto repellendus quidem iure voluptatum 
            obcaecati ratione pariatur earum nobis optio eaque nam 
            quaerat iste laudantium sunt corrupti corporis. <br />
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. Reiciendis ipsa, 
            accusamus architecto repellendus quidem iure voluptatum 
            obcaecati ratione pariatur earum nobis optio eaque nam 
            quaerat iste laudantium sunt corrupti corporis.<br />
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. Reiciendis ipsa, 
            accusamus architecto repellendus quidem iure voluptatum 
            obcaecati ratione pariatur earum nobis optio eaque nam 
            quaerat iste laudantium sunt corrupti corporis.
            </p>
        </div>
      </div>

       </div>
    </Articles>
  )
}
const Articles = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  justify-content:center;
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

  .left{
    flex:1;
    padding:2rem;
    height:100%;
    nav{
      background: rgba(100, 166, 236, 0.1);
      padding:14px;
      height:100%;

      h2{
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
      }
      ul{
        list-style: none;
        margin-top:12px;
        
        a {
          text-decoration: none;
          color: #000;
        }
        li{
          background: rgba(217, 217, 217, 0.34);
          padding:12px;
          border-radius:10px;
          margin-top:11px;
          cursor:pointer;

        }

      }

    }
  }

  .right{
    flex:3;
    padding:2rem;

    .Decription{
      displaye:flex;
      flex-direction:column;
      justify-content:center;
      text-align:center;

      h2{
        font-weight: 600;
        font-size: 38px;
        line-height: 72px;
      }

      .footer{
        display:flex;
        gap:20px;
        text-align:center;
        padding-top:25px;
        justify-content:center;

        button{
          gap:12px;
          display:flex;
          border:none;
          width: 118px;
          height: 40px;
          align-items:center;
          justify-content:center;
          cursor:pointer;
          background: rgba(205, 205, 205, 0.12);
          border-radius: 5px;
        }
      }
     
    }
  .ContainerText{
    .img {
      background: url(${(props) => props.im});
      width: 100%;
      height: 260px;
      margin-bottom:15px;
      border-radius: 10px;
      background-size: cover;
      background-position: center;
    }
    p{
      text-align:justify;
    }
      
  }
  }
`