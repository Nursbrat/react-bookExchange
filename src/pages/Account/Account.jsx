import React from "react";
import "./Account.scss";
import account from "../../../public/assets/account.png";
import profile from "../../../public/assets/profile.png";
import { GrFormPrevious } from "react-icons/gr";
import { BiSolidUser, BiSolidBookReader } from "react-icons/bi";
import { GoGitPullRequest } from "react-icons/go";
import { IoMdNotifications } from "react-icons/io";
import { MdBook } from "react-icons/md";
import { AiFillFolderAdd } from "react-icons/ai";

const Account = () => {
  return (
    <div className="account">
      <div className="back-link">
        <a>
          <GrFormPrevious className="back-icon" />
        </a>
        <p>Аккаунт</p>
      </div>

      <div className="account-container">
        <div className="account__left">
          <div className="account__left-user">
            <div className="user-img">
              <img src={profile} alt="icon of user medium size" />
            </div>
            <form>
              <label for="profile-picture">
                Изменить фото
                <input
                  id="profile-picture"
                  type="file"
                  name="file"
                  placeholder="tt"
                  className="file"
                />
              </label>
            </form>
            <div className="account-info">
              <div className="blog">
                <p>Имя пользователя</p>
                <p className="blog-field">Максим</p>
              </div>

              <div className="blog">
                <p>Пароль</p>
                <p className="blog-field">*******911</p>
              </div>
              <div className="blog">
                <p>Номер телефона</p>
                <p className="blog-field">+996(555) 55-55-55</p>
              </div>
              <div className="blog">
                <p>Электронная почта</p>
                <p className="blog-field">@Maxim.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="account__right">
          <img src={account} alt="image of user account" />
        </div>
      </div>
    </div>
  );
};

export default Account;
