import React from "react";
import "./RequestModel.scss";
import { images } from "../../../../constants";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import useShortenText from "../../../../hooks/useShortenText";

const requests = [
  {
    img: images.book,
    img2: images.book2,
    title: "Название книги",
    description:
      "Lorem ipsum dolor sit amet consectetur. Urna scelerisque egestas purus iSapiennterdum. Faucibus netus magna nunc nec. Sapien mauris sed sit vel ultricies tempus amet morbi. Faucibus netus magna nunc nec.",
  },

  {
    img: images.book,
    img2: images.book2,
    title: "Название книги",
    description:
      "Lorem ipsum dolor sit amet consectetur. Urna scelerisque egestas purus interdum. Faucibus netus magna nunc nec. Sapien mauris sed sit vel ultricies tempus amet morbi. Faucibus netus magna nunc nec.",
  },

  {
    img: images.book,
    img2: images.book2,
    title: "Название книги",
    description:
      "Lorem ipsum dolor sit amet consectetur. Urna fdsafsdafasdfsafff fafasf  fdsafasdf  fdsaffasf  fdasfsadf  fdsaffsa d fdas fd fdas fsd fdsascelerisque egestas purus interdum. Faucibus netus magna nunc nec.",
  },

  {
    img: images.book,
    img2: images.book2,
    title: "Название книги",
    description:
      "Lorem ipsum dolor sit amet consectetur. Urna scelerisque egestas purus interdum. Faucibus netus magna nunc nec. Sapien mauris sed sit vel ultricies tempus amet morbi. Faucibus netus magna nunc nec.",
  },
];

const RequestModel = () => {
  return (
    <div className="request-model">
      {requests.map((request, index) => (
        <div key={index} className="request-model-card">
          <div className="request-moodel-img__container">
            <div className="request-model__img">
              <img
                src={request.img}
                alt="Book Cover"
                className="request-book-cover"
              />
              <div className="request-arrow ">
                <img src={images.arrow1} alt="Arrows with diirections" />
              </div>
            </div>
            <div className="request-model__img">
              <div className="request-arrow up">
                <img src={images.arrow2} alt="Arrows with diirections" />
              </div>
              <img
                src={request.img2}
                alt="Book Cover"
                className="request-book-cover"
              />
            </div>
          </div>
          <div className="request-model__content">
            <div className="request-model__content-text">
              <div className="request-title">
                <h3>{request.title} </h3>
                <span>*Моя книга</span>
              </div>
              <p>{useShortenText(request.description)}</p>
            </div>
            <div className="request-model__content-text">
              <div className="request-title">
                <h3>{request.title} </h3>
                <span>*Для обмена</span>
              </div>
              <p>{useShortenText(request.description)}</p>
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
