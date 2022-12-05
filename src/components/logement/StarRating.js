import React from "react";
import EmptyStar from "../../assets/img/EmptyStar.svg";
import FilledStar from "../../assets/img/FilledStar.svg";

function StarRating(rating) {
  return (
    <div className="rating">
      {[...Array(parseInt(rating.rating))].map(() => {
        return <img src={FilledStar} alt="Etoile pleine" />;
      })}
      {[...Array(5 - parseInt(rating.rating))].map(() => {
        return <img src={EmptyStar} alt="Etoile vide" />;
      })}
    </div>
  );
}

export default StarRating;
