import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo_clean.png";

import "hamburgers/dist/hamburgers.css";
import { AiOutlineBell } from "react-icons/ai";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const { pathname } = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  const handleClose = () => {
    setOpen(false);
  };
  const handledown = () => {
    setShow(!show);
  };
  useEffect(() => {
    setOpen(false); // Close the navigation panel
  }, [pathname]);
  return (
    <StyledNavbar onMouseLeave={handleClose} scro={user && true}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="responsive">
          {!user && (
            <button
              onClick={() => setOpen(!open)}
              className={
                open
                  ? "hamburger hamburger--collapse is-active"
                  : "hamburger hamburger--collapse"
              }
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          )}
          <div className="options">
            {user && (
              <div className="notification">
                <AiOutlineBell />
              </div>
            )}
            {user && (
              <div className="profile">
                <img src={user.photoURL} alt="user" onClick={handledown} />
                <p onClick={handledown}>
                  {user && user.displayName.split(" ")[0]}
                </p>
                <div
                  className={show ? "dropdown active" : "dropdown"}
                  onMouseLeave={() => setShow(!show)}
                >
                  <Link to="/Profile">Mon profil</Link>
                  <Link to="/CureMedicament">Ma cure</Link>
                  <Link to="/Deconnexion">Deconnexion</Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className={open ? "left_menu active" : "left_menu"}
          onMouseLeave={handleClose}
        >
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
            {user && (
              <div className="profile">
                <img src={user.photoURL} alt="user" onClick={handledown} />

                <p onClick={handledown}>
                  {user && user.displayName.split(" ")[0]}
                </p>
                <div
                  className={show ? "dropdown active" : "dropdown"}
                  onMouseLeave={() => setShow(!show)}
                >
                  <Link to="/Profile">Mon profil</Link>
                  <Link to="/CureMedicament">Ma cure</Link>
                  <Link to="/Deconnexion">Deconnexion</Link>
                </div>
              </div>
            )}

            {user && (
              <div className="notification">
                <AiOutlineBell />
              </div>
            )}
            {!user && <Link to="/Connexion">Connexion</Link>}
          </div>
        </div>
      </div>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  border: 1px solid rgba(159, 159, 159, 0.2);

  z-index: 2000;

  .container {
    display: flex;
    position: fixed;
    align-items: center;
    width: 100%;
    height: 60px;
    justify-content: space-between;
    background-color: ${(props) => (props.scro ? "#fff" : "#fff8")};
    box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 8px;
  }

  @media (max-width: 768px) {
    position: relative;
  }

  .logo {
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    padding-top: 10px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
  .responsive {
    display: none;
    margin-right: 10px;
    cursor: pointer;

    .options {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .notification {
      margin-right: 10px;
      cursor: pointer;
    }
    .profile {
      display: flex;
      align-items: center;
      margin-right: 10px;
      background-color: #d9d9d920;
      padding: 5px 15px;
      border-radius: 10px;
      gap: 10px;
      cursor: pointer;
      position: relative;
      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }

      .dropdown {
        position: absolute;
        display: none;

        flex-direction: column;
        gap: 5px;
        top: 50px;
        left: 0px;
        background-color: #333;
        padding: 10px;
        border-radius: 10px;
        padding-bottom: 1rem;
        z-index: 1000;
        animation: slide 0.3s ease-in-out;
        @keyframes slide {
          0% {
            transform: translateY(10px);
            opacity: 0;
          }
          100% {
            transform: translateY(0px);
            opacity: 1;
          }
        }

        a {
          color: #fff;
          background-color: transparent;
          padding: 8px 10px;
          text-decoration: none;
          border-radius: 5px;
          transition: all 0.3s ease-in;

          &:hover {
            background-color: #fff;
            color: #000;
          }
        }
      }
      .dropdown.active {
        display: flex;
      }
    }
    @media (max-width: 768px) {
      z-index: 999;
      display: block;
    }
  }

  .left_menu.active {
    position: absolute;
    width: 70%;
    top: 0px;
    right: 0px;
    background-color: #fff;
    border: 1px solid rgba(159, 159, 159, 0.2);
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

    @media (min-width: 890px) {
      display: none;
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
      justify-content: center;
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

      .profile {
        display: flex;
        align-items: center;
        margin-right: 20px;
        background-color: #d9d9d920;
        padding: 5px 15px;
        border-radius: 10px;
        gap: 10px;
        cursor: pointer;
        position: relative;
        img {
          width: 35px;
          height: 35px;
          border-radius: 50%;
        }

        .dropdown {
          position: absolute;
          display: none;

          flex-direction: column;
          gap: 5px;
          top: 50px;
          left: 0px;
          background-color: #39c3f920;
          padding: 10px;
          border-radius: 10px;
          padding-bottom: 1rem;

          a {
            color: #000;
            background-color: transparent;
            padding: 8px 10px;

            &:hover {
              background-color: #fff;
            }
          }
        }
        .dropdown.active {
          display: flex;
        }
      }

      .notification {
        margin-right: 10px;
        cursor: pointer;
      }
    }
  }
`;
