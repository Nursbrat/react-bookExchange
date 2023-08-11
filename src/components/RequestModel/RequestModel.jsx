import React from "react";
import "./RequestModel.scss";
import { images } from "../../constants";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

const requests = [
  {
    img: images.book,
    title: "Название книги",
    description:
      "Lorem ipsum dolor sit amet consectetur. Urna scelerisque egestas purus interdum. Faucibus netus magna nunc nec. Sapien mauris sed sit vel ultricies tempus amet morbi. Faucibus netus magna nunc nec. Sapien mauris sed sit vel ultricies tempus amet morbi. ",
  },

  {
    img: images.book,
    title: "Название книги",
    description:
      "Lorem ipsum dolor sit amet consectetur. Urna scelerisque egestas purus interdum. Faucibus netus magna nunc nec. Sapien mauris sed sit vel ultricies tempus amet morbi. Faucibus netus magna nunc nec. Sapien mauris sed sit vel ultricies tempus amet morbi. ",
  },

  {
    img: images.book,
    title: "Название книги",
    description:
      "Lorem ipsum dolor sit amet consectetur. Urna scelerisque egestas purus interdum. Faucibus netus magna nunc nec. Sapien mauris sed sit vel ultricies tempus amet morbi. Faucibus netus magna nunc nec. Sapien mauris sed sit vel ultricies tempus amet morbi. ",
  },

  {
    img: images.book,
    title: "Название книги",
    description:
      "Lorem ipsum dolor sit amet consectetur. Urna scelerisque egestas purus interdum. Faucibus netus magna nunc nec. Sapien mauris sed sit vel ultricies tempus amet morbi. Faucibus netus magna nunc nec. Sapien mauris sed sit vel ultricies tempus amet morbi. ",
  },
];

const RequestModel = () => {
  return (
    <div className="request-model">
      {requests.map((request, index) => (
        <div key={index} className="request-model-card">
          <div className="request-model__img">
            <img src={request.img} alt="Book Cover" />
          </div>
          <div className="request-model__content">
            <div className="request-model__content-text">
              <h3>{request.title}</h3>
              <p>{request.description}</p>
            </div>
            <div className="request-model__content-buttons">
              <button className="accept request-btn">
                <AiOutlineCheck />
              </button>
              <button className="reject request-btn">
                <AiOutlineClose />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RequestModel;
