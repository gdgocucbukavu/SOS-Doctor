import React from 'react'
import styled from "styled-components";
import google from "./Assets/google.png"
import facebook from "./Assets/facebook.png"
import illustration from "./Assets/illustration.svg"
export default function Connexion() {
  

  return (
    <ContainerConnexion>
        <div className="Connexion">
            <h2>Connexion</h2>
            <p>
                Connectez-vous pour avoir accès à toutes
                les fonctionnalités de <span>sos</span> doctor.
                La connexion se fait en un clic :
            </p>

            <div className="Container">
                <div className="moyen">
                    <img src={google} alt="logo" />
                    <p>Connexion avec google</p>
                </div>
                <div className="moyen">
                    <img src={facebook} alt="logo" />
                    <p>Connexion avec facebook</p>
                </div>
            </div>
            <p>Vous n’avez pas de compte ? <span> <a href="#">inscrivez-vous</a> </span> </p>
            <div className="img">
                <img src={illustration} alt="illustraction" />
            </div>

        </div>

    </ContainerConnexion>
  )
}
const ContainerConnexion = styled.div`
display: flex;
width: 100%;
justify-content:center;
padding-top:88px;
background:#D7EBFF;
height: 90vh;


animation: showing 0.3s ease-in;
@keyframes showing {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media screen and (max-width: 578px) {
    background:white;
    padding-top:15px;
  }
.Connexion
{
    width:605px;
    height:419px;
    background:#fff;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    padding:15px;
    align-items:center;
    text-align:center;
    gap: 10px;

    p span
    {
        color:#AE376D;
        a{
            color:#AE376D; 
        }
    }
    .Container{
        display:flex;
        width:100%;
        flex-direction:column;
        padding-top:30px;
        justify-content:center;
        align-items:center;
        gap:25px;
        .moyen{
            display:flex;
            background:rgba(236, 236, 236, 0.5);
            border-radius:5px;
            gap:35px;
            padding:8px;
            width:100%;
            justify-content:center;
            align-items:center;
            cursor:pointer;


            img{
                width: 33px;
                height: 31px;
            }
            p{
                font-weight: 500;
                font-size: 16px;
            }
        }

     
    }
    .img{
        width:100%;
        display:none;

        @media screen and (max-width: 578px) {
            display:flex;
            justify-content:center;
            align-items:center;
          }
        
    }
    
}
`