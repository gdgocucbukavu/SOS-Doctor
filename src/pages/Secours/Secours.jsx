import React from 'react'
import styled from "styled-components";
import { Articles } from "./data/Article";
import CardArticle from "./component/CardArticle";
import Article from '../../components/Article';
export default function Secours() {
  const[OpenArtcticle,SetOpen]=React.useState(false)
  const[ArticleDetail,setArtcileDetaille]=React.useState([])
 const OuvrirArtcle=(cle)=>{
  console.log(Articles[1]);
  SetOpen(true);
  setArtcileDetaille(Articles[cle])
  document.querySelector(".Container").style.display="none"
  }
  return (
  
    <Secour>
        <div className="Container">
            <div className="header">
                <h2>Secours</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Soluta tenetur voluptatum 
                    facere reiciendis ex perspiciatis accusantium 
                    beatae, veritatis, illum sunt explicabo! Recusandae 
                    quisquam accusantium suscipit soluta laudantium, 
                    doloremque nisi officiis?
                </p>
            </div>
            <div className="ArticlesContainer">
                {Articles.map((Article,index) => (
                <CardArticle Article={Article} key={index} handleClick={()=>OuvrirArtcle(index)} />
                ))}
            </div>
        </div>
        {
          OpenArtcticle?
          <Article Article={ArticleDetail}/>
          :null
        }
        
    </Secour>
  )
}
const Secour = styled.div`
display: flex;
width: 100%;
height: 90vh;
justify-content:center;
gap: 10px;
background: rgba(100, 166, 236, 0.1);

animation: showing 0.3s ease-in;
@keyframes showing {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.Container{
    width:80%;
    display:flex;
    padding:2rem;
    flex-direction:column;

    .header{
        display:flex;
        flex-direction:column;
        text-align:center;

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
    }

    .ArticlesContainer{
        display:flex;
        padding-top:30px;
        gap:25px;
    }

}
`
