import React from "react";
import EmptyStar from "../../assets/img/EmptyStar.svg";
import FilledStar from "../../assets/img/FilledStar.svg";

function StarRating(rating) {
  return (
    <div className="rating">
      {[...Array(parseInt(rating.rating))].map((element, index) => {
        return (
          <img
            key={"FilledStar" + index}
            src={FilledStar}
            alt="Etoile pleine"
          />
        );
      })}
      {[...Array(5 - parseInt(rating.rating))].map((element, index) => {
        return (
          <img key={"EmptyStar" + index} src={EmptyStar} alt="Etoile vide" />
        );
      })}
    </div>
  );
}

export default StarRating;
