import React, { useState } from "react";
import Open from "../../assets/img/Open.svg";
import Close from "../../assets/img/Close.svg";

const Collapse = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="collapse-item">
      <div className="collapse-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>
          {isActive ? (
            <img src={Open} alt="Ouvert" />
          ) : (
            <img src={Close} alt="Fermé" />
          )}
        </div>
      </div>
      {isActive && (
        <div className="collapse-content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((element) => (
                <li key={element.toString()}>{element}</li>
              ))}
            </ul>
          ) : (
            content
          )}
        </div>
      )}
    </div>
  );
};

export default Collapse;
