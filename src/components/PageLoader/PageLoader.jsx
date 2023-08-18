import React from "react";
import loaderPage from "../../../public/assets/loader-book/gif-book__loader.gif";
import "./PageLoader.scss";

const PageLoader = () => {
  return (
    <div className="page-loader__container">
      <img src={loaderPage} alt="" className="page-loader__img" />
    </div>
  );
};

export default PageLoader;
