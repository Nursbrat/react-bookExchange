import React, { useState } from "react";
import "../SignUpForm/SignUpForm.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import images from "../../../../constants/images";
import { useDispatch } from "react-redux";
import { signupUser } from "../../../../features/auth/singupUser";
import { toast } from "react-hot-toast";

const SignUpForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+996");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      name,
      email,
      phoneNumber,
      password,
      confirmPassword,
    };
    dispatch(signupUser(userData))
      .unwrap()
      .then((result) => {
        history("/");
        toast.success(`Успешно`);
      })
      .catch((error) => {
        toast.error(`${error}`);
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleInputChange = (event, setValue) => {
    const { value } = event.target;
    setValue(value);
  };

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value.replace(/[^0-9+]/g, "");
    setPhoneNumber(value);
  };

  const formattedPhoneNumber = phoneNumber
    .replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, "$1 $2 $3 $4")
    .trim();

  return (
    <div className="signup">
      <div className="signup__content">
        <form>
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
            name="confirmPassword"
            onChange={(e) => handleInputChange(e, setConfirmPassword)}
            required
          />
          <div className="signup__divider">
            <p>Или</p>
          </div>
          <div className="signup__img">
            <img src={images.google} alt="" />
          </div>
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
