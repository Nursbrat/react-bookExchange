import React from "react";
import "./Profile.scss";
import { images } from "../../constants";
import { BiSolidUser, BiSolidBookReader } from "react-icons/bi";
import { GoGitPullRequest } from "react-icons/go";
import { IoMdNotifications } from "react-icons/io";
import { MdBook } from "react-icons/md";
import { AiFillFolderAdd } from "react-icons/ai";
import Profcontainer from "../../components/Profcontainer/Profcontainer";

const Profile = () => {
  return (
    <div className="profile">
      <Profcontainer pageTitle="Личный кабинет">
        <div className="profile__left-user">
          <div className="user-img">
            <img src={images.profile} alt="icon of user medium size" />
          </div>
          <div className="user-name">
            <h4>Ник</h4>
            <p>Почта или номер</p>
          </div>
        </div>
        <div className="profile-container">
          <div className="profile__left">
            <div className="profile__left-account profile-blog">
              <BiSolidUser />
              <p>Аккаунт</p>
            </div>
            <div className="profile__left-request profile-blog">
              <GoGitPullRequest />
              <p>Запросы на обмен</p>
            </div>
            <div className="profile__left-notification profile-blog">
              <IoMdNotifications />
              <p>Уведомления</p>
            </div>
            <div className="profile__left-upload profile-blog">
              <AiFillFolderAdd />
              <p>Дабваить свою книгу</p>
            </div>
            <div className="profile__left-book-collections profile-blog">
              <MdBook />
              <p>Мои книги</p>
            </div>
            <div className="profile__left-library profile-blog">
              <BiSolidBookReader />
              <p>Библиотека</p>
            </div>
          </div>

          <div className="profile__right">
            <img src={images.cabinet} alt="image of user account" />
          </div>
        </div>
      </Profcontainer>
    </div>
  );
};

export default Profile;
