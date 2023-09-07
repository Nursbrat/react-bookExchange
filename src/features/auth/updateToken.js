import { useDispatch } from "react-redux";
import { setTokens, setUser } from "./authSlice";

const dispatch = useDispatch();

export const updateToken = async () => {
  const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh: authTokens?.refresh }),
  });

  const data = await response.json();

  if (response.status === 200) {
    dispatch(setTokens(data));
    dispatch(setUser(jwt_decode(data.access)));
    localStorage.setItem("refreshToken", JSON.stringify(data));
  } else {
    logoutUser();
  }

  if (loading) {
    setLoading(false);
  }
};



