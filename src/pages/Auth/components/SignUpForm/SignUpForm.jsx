import React, { useCallback, useEffect, useState } from "react";
import "../SignUpForm/SignUpForm.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import images from "../../../../constants/images";
import { useDispatch } from "react-redux";
import { signupUser } from "../../../../features/auth/singupUser";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const SignUpForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+996")
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate()



  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
      password_confirm: confirmPassword,
      phone_number: phoneNumber,
      first_name: name, 
      last_name: "",
      city: 1,
    };

    try {
      await signupUser(userData);
      toast.success("На Почту было отправлено сообщение");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Аккаунт существует");
    }
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };



  const handlePhoneNumberChange = (event) => {
    const value = event.target.value.replace(/[^0-9+]/g, "");
    setPhoneNumber(value);
  };




  const handlePasswordMatch = () => {
    if (password !== confirmPassword) {
      setPasswordMatchError("Пароли не совпадают");
    } else {
      setPasswordMatchError("");
    }
  }

  const handleInputChange = (event, setValue) => {
    const { value } = event.target;
    setValue(value);
  };

  useEffect(() => {
    handlePasswordMatch()
  }, [password, confirmPassword])

  const formattedPhoneNumber = phoneNumber
    .replace(/(\d{4})(\d{3})(\d{3})(\d{3})/, "$1 $2 $3 $4")
    .trim();

  return (
    <div className="signup">
      <Toaster containerStyle={{ backgroundColor: 'transparent' }} />
      <div className="signup__content">
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={name}
            onChange={(e) => handleInputChange(e, setName)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Введите эл. почту"
            value={email}
            onChange={(e) => handleInputChange(e, setEmail)}
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="+996"
            value={formattedPhoneNumber}
            maxLength={13}
            onChange={handlePhoneNumberChange}
            required
          />

          <div className="signup__password-inputs">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => handleInputChange(e, setPassword)}
              required
            />
            <span onClick={togglePasswordVisibility}>
              {!passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Повторите пароль"
            value={confirmPassword}
            name="confirmPassword"
            onChange={(e) => handleInputChange(e, setConfirmPassword)}
            required
          />
          {passwordMatchError && <p className="signup_error--password">{passwordMatchError}</p>}
          {/* <div className="signup__divider">
            <p>Или</p>
          </div>
          {/* <div className="signup__img">
            <img src={images.google} alt="" />
          </div> */}
          <button type="submit" disabled={password !== confirmPassword}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
