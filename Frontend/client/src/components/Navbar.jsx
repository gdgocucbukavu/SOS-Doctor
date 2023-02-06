import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo_test.png";
import res from "../assets/responsive.png";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <StyledNavbar>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="responsive" onClick={() => setOpen(!open)}>
          <img src={res} alt="responsive" />
        </div>
        <div className={open ? "left_menu active" : "left_menu"}>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/">A propos</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
          <div className="second">
            <Link to="/">Connexion</Link>
          </div>
        </div>
      </div>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  width: 100%;

  height: 55px;
  border: 1px solid rgba(159, 159, 159, 0.45);
  overflowy: hidden;

  .container {
    overflow: hidden;
    display: flex;
    align-items: center;
    width: 100%;
    height: 55px;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    position: relative;
  }
  .logo {
    margin-left: 20px;
    img {
      width: 40px;
      height: 40px;
    }
  }
  .responsive {
    display: none;
    margin-right: 20px;
    cursor: pointer;

    @media (max-width: 768px) {
      z-index: 999;
      display: block;
    }
  }

  .left_menu.active {
    position: absolute;
    width: 80%;
    top: 0px;
    right: 0px;
    background-color: #d7ebf2;
    height: 100vh;
    display: flex;
    animation: slide 0.5s ease-in-out;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-left: 0px;

      li {
        margin-bottom: 20px;
        margin-right: 0px;
        a {
        }
      }
    }
    .second {
      margin-right: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @keyframes slide {
      from {
        transform: translateX(90%);
      }
      to {
        transform: translateX(0%);
      }
    }
  }
  .left_menu {
    margin-left: 20px;
    display: flex;
    flex: 1;
    justify-content: space-between;
    @media (max-width: 768px) {
      display: none;
    }
    ul {
      display: flex;
      list-style: none;
      margin-left: 25px;
      align-items: center;

      li {
        margin-right: 25px;
        padding: 5px;

        a {
          text-decoration: none;
          color: #000;

          &:hover {
            color: #39c3f6;
            transition: all 0.3s ease-in-out;
          }
        }
      }
    }

    .second {
      margin-right: 3rem;
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
        color: #fff;
        background-color: #39c3f6;
        padding: 8px 20px;
        border-radius: 5px;

        &:hover {
          background-color: #39c3f999;
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }
`;
