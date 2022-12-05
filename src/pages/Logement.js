import React from "react";
import { useParams, Navigate } from "react-router-dom";
import LogementDetails from "../components/logement/LogementDetails";
import Logements from "../data/Logements.json";

const Logement = () => {
  let { id } = useParams();

  if (Logements.findIndex((logement) => logement.id === id) === -1) {
    return <Navigate to="/error" />;
  }

  return (
    <>
      {Logements.filter((logement) => logement.id === id).map((logement) => (
        <LogementDetails key={logement.id} logement={logement} />
      ))}
    </>
  );
};

export default Logement;
