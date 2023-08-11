import { React, useState } from "react";
import "./Requests.scss";
import Notfound from "../../components/Notfound/Notfound";
import RequestModel from "../../components/RequestModel/RequestModel";
import Profcontainer from "../../components/Profcontainer/Profcontainer";

const Requests = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  return (
    <div className="requests">
      <Profcontainer
        pageTitle="Запросы"
        addBookTitle="Запросы"
        addBookSubitle="Здесь хранятся отправленные вам запросы"
      >
        <div className="requsts__list">
          {isEmpty ? <Notfound /> : <RequestModel />}
        </div>
      </Profcontainer>
    </div>
  );
};

export default Requests;
