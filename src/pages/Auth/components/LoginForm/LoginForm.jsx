import React, { useEffect, useState } from "react";
import "../LoginForm/LoginForm.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import images from "../../../../constants/images";
import { useDispatch, useSelector } from "react-redux";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../../features/auth/loginUser";
import { setTokens, setUser } from "../../../../features/auth/authSlice";
import jwtDecode from "jwt-decode";

const loginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "k@g.com",
    password: "a",
  });
  const dispatch = useDispatch();
  // const selector = useSelector()
  // const tokens = selector((state) => state.authSlice.refreshToken)
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (a) => {
    a.preventDefault();
    try {
      const response = await loginUser(credentials, dispatch);

      toast.success(response);
    } catch (error) {
      toast.error(`${response}`);
      console.error(`error:${error}`);
    }
  };

  return (
    <div className="login">
      <Toaster containerStyle={{ backgroundColor: "transparent" }} />
      <div className="login__content">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Введите эл. почту"
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            value={credentials.email}
            required
          />
          <div className="login__password-inputs">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Пароль"
              required
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              value={credentials.password}
            />
            <span onClick={togglePasswordVisibility}>
              {!passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* <div className="login__divider">
            <p>Или</p>
          </div>
          <div className="login__img">
            <img src={images.google} alt="" />
          </div> */}
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default loginForm;
