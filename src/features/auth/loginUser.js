// features/auth/loginUser.js
import { AUTH } from "../../api/api";
import { setTokens, setUser } from "./authSlice";
import jwtDecode from "jwt-decode";

export const loginUser = async (credentials, dispatch) => {
  try {
    const response = await fetch(`${AUTH}/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (!response.ok) {
      console.error("login is failed");
      const loginError = "Неправильная почта или пароль";
      return loginError;
    }
    const loginSuccess = "Успешно";
    const { access, refresh } = data;
    dispatch(setUser(jwtDecode(access).user_id));
    dispatch(setTokens({ access, refresh }));
    return loginSuccess;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
