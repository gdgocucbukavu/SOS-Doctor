import React from 'react';
import styled from "styled-components";
import searchIcon from "./Assets/searh.png";
import {Hopitaux} from "./data/hopitaux"
import CardHopital from './componets/CardHopital';
const Chercher = () => {
  const [data,setData]=React.useState(Hopitaux);
  const [FiltreLste, setFiltre]=React.useState([])
  const[query,setQuery]=React.useState("")

  const SearchListe=(e)=>{
    setQuery(e.target.value.toUpperCase())
    if(query!=="")
    {
    setFiltre(Hopitaux.filter((hopital)=>{
        return hopital.nom.includes(query)     
    })) 
    setData(FiltreLste)
    console.log("data")
   }
   else{
    setData(Hopitaux)
    console.log("vide")
   }
}
    return (
        <ChercherStyled>
            <div className="head">  
                <h2>Choisissez ou chercher un hopital que vous connaissez </h2>
                <div className="Search">
                    <input type="text" placeholder="Chercher un article..."  onChange={SearchListe}/>
                    <img src={searchIcon} alt="search" />
                </div>
            </div>
            <div className="body">
                
                <div className="hopitaux">
                    {
                        data.map((hopital)=>(
                            <CardHopital hopital={hopital} key={hopital.nom}/>
                        ))
                    }
                </div>
            </div>     
        </ChercherStyled>
    );
}
const ChercherStyled = styled.div`
    
    padding-top: 0.1rem;
    flex: 3;
    @media (max-width: 768px) {
      padding-right: 0px;
      flex: 2;
      padding: 1rem;
      padding-right: 15px;
    }
    .head{
      display:flex;
      align-items:center;
      
      flex-direction:column;
      justify-content:center;
      gap:12px;
      padding:8px;
        h2 {
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            text-align:center;
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
            width:80%;
            border: 1px solid #39c3f6;
            align-items: center;
            padding: 0px 20px 0px 0px;
            img {
              cursor: pointer;
            }
            @media (max-width: 768px) {
              width:100%;
            }
      
            input {
              flex: 1;
              font-size: 18px;
              background: #f4f4f4;
              border-radius: 10px;
              padding: 20px;
              border:none;
              outline: none;
              
      
              &:focus {
                border-color: #7497ae;
                transition: all 0.3s ease-in;
              }
            }
          }
    }

    .body{
        display:flex;
        flex-direction:column;
        justify-content:center;
        width:100%;
        padding:8px;
         
          .hopitaux
          {
            display:flex;
            justify-content:center;
            flex-wrap:wrap;
            gap:24px;
            padding:12px;
            padding-top:45px;
            
          }
        

    }
    
   
`
export default Chercher;
