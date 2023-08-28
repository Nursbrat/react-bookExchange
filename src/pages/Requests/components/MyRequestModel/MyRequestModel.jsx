import React from "react";
import "./MyRequestModel.scss";
import { images } from "../../../../constants";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import useShortenText from "../../../../hooks/useShortenText";

const myrequests = [
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
      "Lorem ipsum dolor sit amet consectetur. Urna fdsafsdafasdfsafff fafasf  fdsafasdf  fdsaffasf  fdasfsadf  fdsaffsa d fdas fd fdas fsd fdsascelerisque egestas purus interdum. Faucibus netus magna nunc nec. Sapien mauris sed sit vel ultricies tempus amet morbi. Faucibus netus magna nunc nec. Sapien mauris sed sit vel ultricies tempus amet morbi. ",
  },

  {
    img: images.book,
    title: "Название книги",
    description:
      "Lorem ipsum dolor sit amet consectetur. Urna scelerisque egestas purus interdum. Faucibus netus magna nunc nec. Sapien mauris sed sit vel ultricies tempus amet morbi. Faucibus netus magna nunc nec. Sapien mauris sed sit vel ultricies tempus amet morbi. ",
  },
];

const MyRequestModel = () => {

  return (
    
    <div className="myrequest-model">
      {myrequests.map((myrequest, index) => (
        <div key={index} className="myrequest-model-card">
          <div className="myrequest-model__img">
            <img src={myrequest.img} alt="Book Cover" />
          </div>
          <div className="myrequest-model__content">
            <div className="myrequest-model__content-text">
              <h3>{myrequest.title}</h3>
              <p>{useShortenText(myrequest.description)}</p>
            </div>
            <div className="myrequest-model__content-buttons">
              <button className="accept myrequest-btn">
                <AiOutlineCheck />
              </button>
              <button className="reject myrequest-btn">
                <AiOutlineClose />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyRequestModel;