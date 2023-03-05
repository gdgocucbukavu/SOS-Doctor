import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Deconnexion() {
  const navigation = useNavigate();
  useEffect(() => {
    localStorage.removeItem("user");
    navigation("/connexion");
    window.location.reload();
  });
  return <div></div>;
}
