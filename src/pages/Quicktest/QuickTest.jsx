import React from "react";
import Select from 'react-select';
import { Symptomes } from './data/data.js';
import Button from '../../components/Button'
import styled from "styled-components";
import Illustration from "./Assets/415 1.svg"
import Illustration1 from "./Assets/Illustra.svg"

export default function QuickTest() {
  return(
      <StyledQuickTest>
        <div className="ContainerLeft">
          <div className="Header">
              <h2>Quick test</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet temporibus autem tenetur ex nostrum quo optio atque
                numquam cum quaerat aliquid deleniti, exercitationem consequuntur
                rem odio dicta praesentium? Reiciendis, ipsum.
              </p>
              <div className="ImageIllustration">
                <img src={Illustration1} alt="" />
              </div>
          </div>
          <div className="testInfos">
            <p>1. Veuillez Choisir les Symptomes :</p>
            <Select
              defaultValue={[Symptomes[2], Symptomes[3]]}
              isMulti
              name="colors"
              options={Symptomes}
              className="basic-multi-select"
              classNamePrefix="select"
          />
          </div>
          <div className="testInfos">
            <p>2.Votre Sexe :</p>

          </div>
          <div className="testInfos">
            <p>3. Votre Age :</p>

          </div>
          <div className="footer">
            <Button title={"Tester maintenant"} bg={"#AE376D"} color={"white"}/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Corporis porro possimus reprehenderit fuga. Porro similique 
              velit, aut molestiae laudantium cupiditate veniam sit perfe
              rendis a temporibus aspernatur, necessitatibus ratione expe
              dita ab.
            </p>

          </div>
        </div>
        <div className="ContainerRight">
          <img src={Illustration} alt="Illustration" />
        </div>
      </StyledQuickTest>
  ) 
}
const StyledQuickTest = styled.div`
  display: flex;
  width: 100%;
  gap: 80px;
  flex-direction: row;
  animation: showing 0.3s ease-in;
  @keyframes showing {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .ContainerRight{
    display:flex;
    height: 949px;
    @media (max-width: 930px) {
      display:none
    }
  }

  .ContainerLeft{
    flex:1;
    display:flex;
    flex-direction:column;
    padding: 75px 25px 25px 25px;

    .Header{
      h2{
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 60px;
        color: #39C3F6;
      }
      p{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
      .ImageIllustration{
        width:100%;
        display:none;
        align-items:center;
        justify-content:center;
        img{
          width: 196px;
          height: 196px;
          border-radius:50%;
          left: 99px;
          top: 215px;
        }
        @media (max-width: 930px) {
         display:flex;
        }
      }
     
    }
    .testInfos{
      margin-top:12px;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
    }
    .footer{
      display:flex;
      flex-direction:column;
      gap:20px;
      padding:20px 0px 0px 0px;
      text-align:center;
    }
  }
`