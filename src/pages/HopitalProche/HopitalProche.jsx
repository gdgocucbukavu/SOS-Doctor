import React from "react";
import styled from "styled-components";
import {Articles} from "./data/Article"
import { FaBookOpen,FaMap,FaHome } from "react-icons/fa";
export default function HopitalProche() {
  return (
    <StyledHopitalProche>
      <div className="ContainerLeft">
        <div className="Container">
        <div className="Head">
          <h2>Articles Recents</h2>
          <p>Retrouvez les articles sur la santé ici :</p>
        </div>
        <div className="ArticlesContainer">
          {
            Articles.map((Article)=>(
              <div className="Article">
                <img src={Article.image} alt="" />
              <div className="Decription">
                <h2>{Article.titre}</h2>
                <div className="ArticleFooter">
                  <p>{Article.date}</p>
                  <p><FaBookOpen color={"#DE2478"}/> <span>{Article.HeureLecture}</span> </p>   
                </div>
              </div>
              
            </div>
            ))
          }  
        </div> 
        </div>
        
      </div>
      <div className="ContainerRight">
          <h2>Hopital Proche</h2>
          <p>7
            Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Doloremque veniam, 
            necessitatibus, assumenda dicta corrupti 
            omnis ad beatae autem debitis maxime suscipit, 
            dolore quis illum quidem. Illum dolor harum 
            enim voluptate.
          </p>
          <div className="ServiceContainer">
              <button>
                <FaMap className="icone"/>
                <div className="text">
                  <h2>Maps</h2>
                  <p>Idéal Pour un endroit inconnu</p>
                </div>
              </button>
              <button>
                <FaHome className="icone"/>
                <div className="text">
                  <h2>Chercher</h2>
                  <p>Idéal Pour un endroit inconnu</p>
                </div>
              </button>
          </div>
      </div>  

    </StyledHopitalProche>

  ) 

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
    flex:1;
    flex-direction: column;
    padding: 2rem;

    @media (max-width: 768px) {
      display:none;
    }
    .Container
    {
      background: rgba(215, 235, 255, 0.21);
      border-radius: 5px;
      overflow: auto;
      
      
    .Head{
      padding:15px;
      h2{
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
      }
      p{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #333333;
      }
    }
    .ArticlesContainer
    {
      
      width:100%;
      padding:15px;

    .Article{
      background: #FFFFFF;
      border-radius: 10px;
      margin-bottom:12px;
      padding:8px;
      cursor:pointer;
      
      img{
        width:100%;
        border-radius: 10px;
      }
      h2{
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
      }
      .Decription{
        h2{
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 30px;
          color: #333333;
        }
        .ArticleFooter{
          display:flex;
          gap:13px;
          font-style: italic;
          font-weight: 400;
          font-size: 12px;
          line-height: 18px;
          color: #333333
          align-items:center;
          p{
            display:flex;
            gap:7px;
            align-items:center;
          }
        }
      }
    }
    }
  }
  }
  .ContainerRight {
    display: flex;
    flex:3;
    padding-right:55px;
    flex-direction: column;
    padding-top: 2rem;

    @media (max-width: 768px) {
      padding-right:0px;
      flex:2;
      padding: 1.3rem;
      padding-right:15px;
    }
    @media (max-width: 1210px) {
      flex:2;    
    }
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
      text-align:justify;
      line-height: 24px;
    }
    .ServiceContainer{
      display:flex;
      gap:25px;
      padding-top:10px;
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      @media (max-width: 768px) {
        justify-content:center;
      }
      button{
        width: 360px;
        height: 167px;
        background: rgba(100, 166, 236, 0.1);
        border: 1px solid #39C3F6;
        border-radius: 10px;
        display:flex;
        padding:15px;
        align-items:center;
        gap:40px;
        @media (max-width: 1210px) {
          width:100%;
        }

        .icone{
          font-size:85px;
          color:#DE2478;
        }
        .text{
          display:flex;
          flex-direction:column;
          cursor:pointer;
          text-align:left;

          h2{
            font-weight: 700;
            font-size: 36px;
            line-height: 54px;
          }
          p{
            font-style: normal;
            text-align:left;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
          }

        }
       
      }
    }
  }

  `
