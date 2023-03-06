import React, { useEffect } from "react";
import styled from "styled-components";
import google from "./Assets/google.png";
import facebook from "./Assets/facebook.png";
import illustration from "./Assets/illustration.svg";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

import { auth } from "../../firebase";
import { toast } from "react-toastify";
export default function Connexion() {
  useEffect(() => {
    if (localStorage.getItem("user")) {
      window.location.href = "/";
    }
  });
  const provider = new GoogleAuthProvider();
  const FBprovider = new FacebookAuthProvider();
  auth.languageCode = "fr";
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/";
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorMessage === "auth/popup-closed-by-user") {
          toast.error("Vous devez autoriser la connexion");
        }
        if (errorMessage === "auth/network-request-failed") {
          toast.error("Vous devez être connecté à internet");
        }
        // The email of the user's account used.
        if (errorCode === "auth/account-exists-with-different-credential") {
          toast.error("Vous etes déjà connecté avec un autre compte.");
          // If you are using multiple auth providers on your app you should handle linking
          // the user's accounts here.
        } else {
          console.error(error);
        }

        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleLoginWithFacebook = () => {
    signInWithPopup(auth, FBprovider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/";
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        console.log(errorCode, errorMessage, email);
        if (errorMessage === "auth/popup-closed-by-user") {
          toast.error("Vous devez autoriser la connexion");
        }
        if (errorMessage === "auth/network-request-failed") {
          toast.error("Vous devez être connecté à internet");
        }

        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };
  return (
    <ContainerConnexion>
      <div className="Connexion">
        <h2>Connexion</h2>
        <p className="text">
          Connectez-vous pour avoir accès à toutes les fonctionnalités de{" "}
          <span>sos</span> doctor. La connexion se fait en un clic :
        </p>

        <div className="Container">
          <div className="moyen" onClick={handleGoogleLogin}>
            <img src={google} alt="logo" />
            <p>Connexion avec google</p>
          </div>
          <div className="moyen" onClick={handleLoginWithFacebook}>
            <img src={facebook} alt="logo" />
            <p>Connexion avec facebook</p>
          </div>
        </div>
        <p className="foot">
          Vous n’avez pas de compte ?{" "}
          <span>
            {" "}
            <a href="#">inscrivez-vous</a>{" "}
          </span>{" "}
        </p>
        <div className="img">
          <img src={illustration} alt="illustraction" />
        </div>
      </div>
    </ContainerConnexion>
  );
}
const ContainerConnexion = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 88px;
  background: #d7ebff;
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
    background: white;
    padding-top: 15px;
  }
  .Connexion {
    width: 435px;
    height: 390px;
    background: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    align-items: center;
    text-align: center;
    gap: 10px;

    .text {
      text-align: start;
    }
    p span {
      color: #ae376d;
      a {
        color: #ae376d;
      }
    }
    .Container {
      display: flex;
      width: 100%;
      flex-direction: column;
      padding-top: 30px;
      justify-content: center;
      align-items: center;
      gap: 25px;
      .moyen {
        display: flex;
        background: rgba(236, 236, 236, 0.5);
        border-radius: 5px;
        gap: 35px;
        padding: 8px;
        width: 100%;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        img {
          width: 33px;
          height: 31px;
        }
        p {
          font-weight: 500;
          font-size: 16px;
        }
      }
    }
    .foot {
      padding-top: 10px;
    }
    .img {
      width: 100%;
      display: none;

      @media screen and (max-width: 578px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
