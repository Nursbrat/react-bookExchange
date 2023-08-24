import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import "./Profcontainer.scss";
import { useNavigate } from "react-router-dom";

const Profcontainer = ({
  pageTitle,
  children,
  addBookSubitle,
  addBookTitle,
}) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="Profcontainer">
      <div className="back-link">
        <a onClick={() => handleGoBack()} title="Вернуться назад">
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
