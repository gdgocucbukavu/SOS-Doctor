import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";

const InstallPWA = ({ setCLose }) => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = (evt) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }
  return (
    <PromptContainer>
      <div className="container">
        <AiOutlineCloseCircle
          className="circle"
          onClick={() => setCLose(false)}
        />

        <p>
          Pour avoir une meilleur experience utilisateur, cliquez sur installer
        </p>
        <button
          className="link-button"
          id="setup_button"
          aria-label="Install app"
          title="Install app"
          onClick={onClick}
        >
          Installer
        </button>
      </div>
    </PromptContainer>
  );
};

const PromptContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 400px;
  height: 85px;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  display: flex;
  animation: te 0.3s ease-in-out;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @keyframes te {
    0% {
      top: 0%;
    }
    100% {
      top: 50%;
    }
  }

  @media screen and (max-width: 668px) {
    width: 90%;
  }
  .container {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    button {
      padding: 10px 15px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
    }
    .circle {
      position: absolute;
      right: -6px;
      top: -14px;
      color: red;
    }
  }
`;

export default InstallPWA;
