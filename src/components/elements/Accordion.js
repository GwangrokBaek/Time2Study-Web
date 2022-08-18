import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./TableList.css";

const Accordion = ({ name, explanation, contents }) => {
  const [isCollapse, setIsCollapse] = React.useState(true);

  return (
    <div className="result-item">
      <div className="flex-row-space-between">
        <div>
          <span className="result-item-title">{name}</span> - {explanation}
        </div>
        <div className="result-item-button">
          <FontAwesomeIcon
            icon={isCollapse ? faAngleDown : faAngleUp}
            onClick={() => setIsCollapse(!isCollapse)}
            beat
          />
        </div>
      </div>
      {!isCollapse && <div className="result-item-content">{contents}</div>}
    </div>
  );
};

export default React.memo(Accordion);
