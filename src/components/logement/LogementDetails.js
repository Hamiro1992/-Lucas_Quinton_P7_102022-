import React from "react";
import { useParams } from "react-router-dom";
import SlideShow from "./slideShow/SlideShow";
import Collapse from "../collapse/Collapse";
import StarRating from "./StarRating";
import Logements from "../../data/Logements.json";

function LogementDetails({ logement }) {
  let { id } = useParams();
  let tags = [];
  for (let tag of logement.tags) {
    tags.push(tag);
  }

  return (
    <div className="logementDetails">
      {Logements.filter((logement) => logement.id === id).map((logement) => (
        <SlideShow key={logement.id} logement={logement} />
      ))}
      <div className="pageCenter">
        <div className="titleTags">
          <div className="title">
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
          </div>
          <ul className="tags" tags={tags}>
            {tags.map((tag) => (
              <li key={tag.toString()} className="tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="hostRating">
          <div className="host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt="" />
          </div>
          <StarRating rating={logement.rating} />
        </div>
      </div>
      <div className="logementCollapse">
        <Collapse
          key={logement.id}
          title="Description"
          content={logement.description}
        />
        <Collapse
          key={logement.id + 1}
          title="Equipments"
          content={logement.equipments}
        />
      </div>
    </div>
  );
}

export default LogementDetails;
