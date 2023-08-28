
import React from "react";
import "../SignUpForm/SignUpForm.scss";
import images from "../../../../constants/images";
import { Form } from "react-router-dom";

const SignUpForm = () => {
  return (
    <div className="signup">
      <div className="signup__content">
        <Form>
          <input type="text" name="name" placeholder="Имя" required />
          <input type="email"  placeholder="Введите эл. почту" required />
          <input type="password" placeholder="Пароль" required />
          <div className="signup__divider">
            <p>Или</p>
          </div>

          <div className="signup__img">
            <img src={images.google} alt="" />
          </div>

          <button type="submit">Войти</button>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;
