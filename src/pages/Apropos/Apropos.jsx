import React from "react";
import i from "./assets/e.jpg";
import styled from "styled-components";
import Slider from "./slider";
import Footer from "../../components/Footer";

export default function Apropos() {
  return (
    <AproposStyled bg={i}>
      <div className="intro">
        <h1>A propos</h1>
      </div>
      <div className="content">
        <h3>Communauté</h3>
        <p>
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de l'imprimerie depuis les années 1500, quand un
          imprimeur anonyme assembla ensemble des morceaux de texte pour
          réaliser un livre spécimen de polices de texte. Il n'a pas fait que
          survivre cinq siècles, mais s'est aussi adapté à la bureautique
          informatique, sans que son contenu n'en soit modifié. Il a été
          popularisé dans les années 1960 grâce à la vente de feuilles Letraset
          contenant des passages du Lorem Ipsum, et, plus récemment, par son
          inclusion dans des applications de mise en page de.
        </p>
        <p>
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de l'imprimerie depuis les années 1500, quand un
          imprimeur anonyme assembla ensemble des morceaux de texte pour
          réaliser un livre spécimen de polices de texte. Il n'a pas fait que
          survivre cinq siècles, mais s'est aussi adapté à la bureautique
          informatique, sans que son contenu n'en soit modifié. Il a été
          popularisé dans les années 1960 grâce à la vente de feuilles Letraset
          contenant des passages du Lorem Ipsum, et, plus récemment, par son
          inclusion dans des applications de mise en page de.
        </p>
        <p>
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de l'imprimerie depuis les années 1500, quand un
          imprimeur anonyme assembla ensemble des morceaux de texte pour
          réaliser un livre spécimen de polices de texte. Il n'a pas fait que
          survivre cinq siècles, mais s'est aussi adapté à la bureautique
          informatique, sans que son contenu n'en soit modifié. Il a été
          popularisé dans les années 1960 grâce à la vente de feuilles Letraset
          contenant des passages du Lorem Ipsum, et, plus récemment, par son
          inclusion dans des applications de mise en page de.
        </p>
      </div>
      <div className="slide_container">
        <Slider />
      </div>
      <Footer />
    </AproposStyled>
  );
}

const AproposStyled = styled.div`
  width: 100%;
  height: 100vh;

  .intro {
    height: 70vh;
    background: linear-gradient(90deg, #03346750, #03346750),
      ${(props) => `url(${props.bg})`};
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 70px;
    color: #fff;

    @media (max-width: 678px) {
      height: 50vh;
      font-size: 30px;
    }
  }
  .content {
    width: 80%;
    margin: auto;
    padding: 30px 0;

    h3 {
      text-align: center;
      font-size: clamp(2rem, 1.5rem, 1rem);
    }
    p {
      padding: 20px 0;
      text-align: justify;
    }

    @media (max-width: 678px) {
      width: 90%;
      padding: 10px;
    }
  }

  .slide_container {
    width: 80%;
    margin: auto;
    padding: 10px 0;
  }
`;
