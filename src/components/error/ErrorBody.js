import React from "react";
import { NavLink } from "react-router-dom";

const ErrorBody = () => {
  return (
    <div className="ErrorBody">
      <h1>404</h1>
      <h2>Oups ! La page que vous demandez n'existe pas.</h2>
      <NavLink to="/" className="NavLink">
        <p>Retourner sur la page d'acceuil</p>
      </NavLink>
    </div>
  );
};

export default ErrorBody;
