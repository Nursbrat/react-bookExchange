import React from "react";
import "./Profile.scss";
import { images } from "../../constants";
import { BiSolidUser, BiSolidBookReader } from "react-icons/bi";
import { GoGitPullRequest } from "react-icons/go";
import { IoMdNotifications } from "react-icons/io";
import { MdBook } from "react-icons/md";
import { AiFillFolderAdd } from "react-icons/ai";
import Profcontainer from "../../components/Profcontainer/Profcontainer";
import { NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile">
      <Profcontainer pageTitle="Личный кабинет">
        <div className="profile__left-user">
          <div className="user-img">
            <img src={images.profile} alt="icon of user medium size" />
          </div>
          <div className="user-name">
            <h4>Максим</h4>
            <p>+996 (555) 55-55-55git</p>
          </div>
        </div>
        <div className="profile-container">
          <div className="profile__left">
            <NavLink
              to="/account"
              className="profile__left-account profile-blog"
            >
              <BiSolidUser />
              <p>Аккаунт</p>
            </NavLink>
            <NavLink
              to="/requests"
              className="profile__left-request profile-blog"
            >
              <GoGitPullRequest />
              <p>Запросы на обмен</p>
            </NavLink>
            <NavLink className="profile__left-notification profile-blog">
              <IoMdNotifications />
              <p>Уведомления</p>
            </NavLink>
            <NavLink
              to="/add-book"
              className="profile__left-upload profile-blog"
            >
              <AiFillFolderAdd />
              <p>Добавить свою книгу</p>
            </NavLink>
            <NavLink
              to="/my-books"
              className="profile__left-book-collections profile-blog"
            >
              <MdBook />
              <p>Мои книги</p>
            </NavLink>
            <NavLink className="profile__left-library profile-blog">
              <BiSolidBookReader />
              <p>Библиотека</p>
            </NavLink>
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
