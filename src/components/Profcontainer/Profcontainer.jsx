import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import "./Profcontainer.scss";
const Profcontainer = ({
  pageTitle,
  children,
  addBookSubitle,
  addBookTitle,
}) => {
  return (
    <div className="Profcontainer">
      <div className="back-link">
        <a>
          <GrFormPrevious className="back-icon" />
        </a>
        <p>{pageTitle}</p>
      </div>

      <div>
        {addBookTitle && <h3 className="addBook-title">{addBookTitle}</h3>}

        {addBookSubitle && <p className="addBook-subtitle">{addBookSubitle}</p>}
      </div>

      {children}
    </div>
  );
};

export default Profcontainer;
