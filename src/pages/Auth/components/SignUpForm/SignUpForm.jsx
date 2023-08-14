import React from "react";
import "../SignUpForm/SignUpForm.scss";
import images from "../../../../constants/images";

const SignUpForm = () => {
  return (
    <div className="signup">
      <div className="signup__content">
        <form>
          <input type="text" placeholder="Имя" required />
          <input type="email" placeholder="Введите эл. почту" required />
          <input type="password" placeholder="Пароль" required />
          <div className="signup__divider">
            <p>Или</p>
          </div>

          <div className="signup__img">
            <img src={images.google} alt="" />
          </div>

          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
