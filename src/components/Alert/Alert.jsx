import React, { useState } from "react";
import "./Alert.scss";

const Alert = ({ showAlert }) => {
  return (
    <div className={`alert ${showAlert ? "show" : ""}`}>
      <div className="success-svg">
        <svg
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#666666"
              d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
            ></path>
          </g>
        </svg>
      </div>
      <div className="alert-info">
        <p className="alert-title">Успешно добавлено!</p>
        <p className="alert-descr">Проверьте в каталоге</p>
      </div>
    </div>
  );
};

export default Alert;
