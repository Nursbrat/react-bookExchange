import React, { useEffect } from "react";
import {
  NavLink,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import images from "../../constants/images";

const Auth = () => {
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
          <NavLink to="login" className={({ isActive }) => isActive ? 'active' : ''}>Войти</NavLink>
          <NavLink to="sign-up" className={({ isActive }) => isActive ? 'active' : ''}>Регистрация</NavLink>
        </nav>

        <Outlet />

        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default Auth;
