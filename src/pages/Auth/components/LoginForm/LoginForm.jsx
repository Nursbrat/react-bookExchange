import React from "react";
import "../LoginForm/LoginForm.scss";
import images from "../../../../constants/images";

const LoginForm = () => {
  return (
    <div className="login">
      <div className="login__content">
        <form>
          <input type="email" placeholder="Введите эл. почту" required />
          <input type="password" placeholder="Пароль" required />
          <div className="login__divider">
            <p>Или</p>
          </div>

          <div className="login__img">
            <img src={images.google} alt="google" />
          </div>

          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
