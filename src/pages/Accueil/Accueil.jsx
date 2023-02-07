import React from "react";
import styled from "styled-components";
import Illustration from "./Assets/portrait-african-american-practitioner-nurse-smiling-camera-removebg-preview 1.svg"
import Vector1 from "./Assets/Vector.svg"
export default function Accueil() {

  const Buttons=[
    {
      icone:Vector1,
      nom:"Quick Test",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate necessitatibus repellendus illo adipisci fugit natus, "
    },
    {
      icone:Vector1,
      nom:"Hopital Proche",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate necessitatibus repellendus illo adipisci fugit natus, "
    },
    {
      icone:Vector1,
      nom:"Secours",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate necessitatibus repellendus illo adipisci fugit natus, "
    },
    {
      icone:Vector1,
      nom:"Matérnité",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate necessitatibus repellendus illo adipisci fugit natus, "
    },
    {
      icone:Vector1,
      nom:"Sexualité",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate necessitatibus repellendus illo adipisci fugit natus, "
    },
    {
      icone:Vector1,
      nom:"Divers",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate necessitatibus repellendus illo adipisci fugit natus, "
    }
]
  return (
    <StyledAccueil>
      <div className="ContainerLeft">
        <h2><span>SOS Doctor</span>, votre <br /> docteur de proche</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Quas ab cum omnis officia molestiae, esse repellat expedita 
          cupiditate nesciunt? Quaerat, earum aperiam nesciunt molestias 
          dolorum voluptatem voluptates nihil minima nobis?
        </p>
        <div className="img">
          <img src={Illustration} alt="Illustration" />
        </div>
      </div>
      <div className="ContainerRight">
        <div className="Search">
          <input type="text" placeholder="Chercher un article..."/>
        </div>
        <div className="Services">
          <h2>Services</h2>
          <p>
             Besoin d'appeler les urgences ? contacter un hopital ?
             apprendre plus sur l'édictaion sanitaire ? Je suis le 
             Meilleur docteur pour cette tache. 
          </p>
          <div className="ContainerService">
            {
              Buttons.map((Button)=>(
                <button>
                  <div className="Logo">
                    <img src={Button.icone} alt="" />
                  </div> 
                  <h3>{Button.nom}</h3>
                  <p>{Button.description}</p>
              </button>
              ))
            }
            
          </div>
        </div>
      </div>
    
    </StyledAccueil>
  )
}
const StyledAccueil= styled.nav`
  display:flex;
  width:100%;
  gap:80px;
  padding:75px 8px 8px 8px;
  flex-direction:row;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap:20px;
  }
  .ContainerLeft{
    width:560px;
    display:flex;
    padding:0px 25px 25px 25px;
    flex-direction:column;
    align-items:center;
    text-align:center;

    h2{
      font-size:40px;
      font-weight:600;
        span{
          color:#39c3f6;    
        }
    }

    p{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
    }

    .img{
      width: 430px;
      height: 430px;
      display:flex;
      left: 75px;
      border-radius:50%;
      margin-top:120px;
      top: 521px;
      background: #AE376D;

      img{
        position: absolute;
        width: 778.54px;
        height: 490.19px;
        left: -56px;
        top: 320px;
      }
      @media (max-width: 768px) {
       display:none;
      }
    }
  }
  .ContainerRight{
    width: 820px;
    .Search{
      

      input{
        width: 100%;
        background: #F4F4F4;
        border-radius: 10px;
        border: 1px solid #51383c44;  
        padding: 20px;
        outline: none;

        &:focus {
          border-color: #7497ae;
          transition: all 0.3s ease-in;
        }
      }
    }
    .Services{
      min-height: 651px;
      background: #D7EBFF;
      border-radius: 10px;
      display:flex;
      flex-direction:column;
      margin-top:35px;
      align-items:center;
      padding:20px;

      h2{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 40px;
        line-height: 60px;
        text-align: center;
      }
      p{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
      }
      .ContainerService{
        width:100%;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        gap:24px;
        justify-content:center;
        align-items:center;
        padding:25px 30px 30px 30px;

        button{
          width: 190px;
          height: 190px;
          padding:8px;
          display:flex;
          flex-direction:column;
          align-items:center;
          background: #FFFFFF;
          border-radius: 10px;
          cursor:pointer;
          border:none;

          .Logo{
            width: 70px;
            height: 70px;
            border-radius:50%;
            background: #F5F5F5;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            padding:8px;
          }
          h3{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 30px;
            text-align: center;
          }

          p{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 16px;
            text-align: center;
          }
          &:hover{

          }
        }
      }
    }
  }

`