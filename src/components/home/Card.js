import React from "react";
import { NavLink } from "react-router-dom";

function Card({ card }) {
  return (
    <NavLink to={"/logement/" + card.id} className="nav-active">
      <li className="card">
        <img src={card.cover} alt={card.title} />
        <div className="infos">
          <h2>{card.title}</h2>
        </div>
      </li>
    </NavLink>
  );
}

export default Card;
