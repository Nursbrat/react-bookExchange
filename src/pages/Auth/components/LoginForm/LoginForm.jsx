import React, { useState } from "react";
import '../LoginForm/LoginForm.scss'
import { FaEye, FaEyeSlash } from "react-icons/fa";

import images from "../../../../constants/images";

const loginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="login">
      <div className="login__content">
        <form>
          <input type="email" placeholder="Введите эл. почту" required />
          <div className="login__password-inputs">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Пароль"
              required
            />
            <span
              onClick={togglePasswordVisibility}
            >
              {!passwordVisible ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
              
            </span>
          </div>

          <div className="login__divider">
            <p>Или</p>
          </div>
          <div className="login__img">
            <img src={images.google} alt="" />
          </div>
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default loginForm;
