import { React, useState } from "react";
import "./Requests.scss";
import Notfound from "../../components/Notfound/Notfound";
import RequestModel from "./components/RequestModel/RequestModel";
import Profcontainer from "../../components/Profcontainer/Profcontainer";
import { NavLink, Outlet, Routes, Route } from "react-router-dom";
import MyRequestModel from "./components/MyRequestModel/MyRequestModel";

const Requests = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  return (
    <div className="requests">
      <div className="container">

        <Profcontainer
          pageTitle="Запросы"
          addBookTitle="Запросы"
          addBookSubitle="Здесь хранятся отправленные вам запросы"
        >
          <div className="requsts__list">
            <nav className="requests__nav">
              <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="request-model">Запросы</NavLink>
              <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="myrequest-model">Мои запросы</NavLink>
            </nav>
            <Outlet />


            {isEmpty ? <Notfound /> :
              <Routes>
                <Route path="/" element={<RequestModel />} />
                <Route path="/myrequest" element={<MyRequestModel />} />
              </Routes>
            }
          </div>
        </Profcontainer>
      </div>

    </div>
  );
};

export default Requests;
