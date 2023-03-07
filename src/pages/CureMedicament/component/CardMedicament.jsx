import React from 'react'
import styled from "styled-components";
import { FaEye } from "react-icons/fa";
export default function CardMedicament({data}) {
  return (
    <ContainerCard>
        <div className="icone">
            <img src={data.icone} alt="img" />
        </div>
        <div className="center">
            <p>{data.titre}</p>
            <span>{data.delai}</span>
            <div className='heure'>
              {
                data.heure.map((H)=>(
                  <p >{H.contenu}</p>
                ))
              }
              
            </div>  
        </div>
        <FaEye/>
        
    </ContainerCard>
  )
}
const ContainerCard = styled.div`
display:flex;
padding:8px;
border-radius:7px;
justify-content:center;
align-items:center;
gap:40px;
background: #D7EBFF;

.icone{
  background:#fff;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:50%;
  height:65px;
  width:65px;
}
.center{
 display:flex;
 flex-direction:column;
 justify-content:center;

  p {
    font-size: 16px;
    font-weight: 600;
  }
}

.heure{
  display:flex;
  gap:15px;
  justify-content:center;
  align-items:center;
  p{
    font-weight: 0;
    padding:5px;
    border-radius:5px;
    background:#fff;
  }



}
`