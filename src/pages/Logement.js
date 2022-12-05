import React from "react";
import { useParams } from "react-router-dom";
import LogementDetails from "../components/logement/LogementDetails";
import Logements from "../data/Logements.json";

const Logement = () => {
  let { id } = useParams();

  return (
    <>
      {Logements.filter((logement) => logement.id === id).map((logement) => (
        <LogementDetails key={logement.id} logement={logement} />
      ))}
    </>
  );
};

export default Logement;
