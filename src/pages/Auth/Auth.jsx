import React, { useEffect } from "react";
import {
  NavLink,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import images from "../../constants/images";

const Auth = () => {
  const pathname = window.location.pathname;


  return (
    <div
      className="auth"
      style={{ backgroundImage: `url(${images.authBackground})` }}
    >
      <div className="auth__content">
        <div className="auth__logo">
          <img src={images.logo} alt="logo" />
        </div>

        <nav className="auth__nav">
          <NavLink to="login" onClick={() => window.location.reload()}>
            Войти
          </NavLink>
          <NavLink to="sign-up" onClick={() => window.location.reload()}>
            Регистрация
          </NavLink>
        </nav>

        <Outlet />

        {pathname === "/auth/login" || pathname === "/auth/sign-up" ? null : (
          <SignUpForm />
        )}
      </div>
    </div>
  );
};

export default Auth;
