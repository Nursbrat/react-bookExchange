import { createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH } from "../../api/api";

export const signupUser = createAsyncThunk(
  async ({ name, email, password, confirmPassword, phoneNumber }, thunkAPI) => {
    try {
      const response = await fetch(`${AUTH}/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPassword,
          phoneNumber
        }),
      });
      let data = await response.json();


      if (response.status === 200) {
        localStorage.setItem("token", data.access);
        // return { ...data, username: name, email: email };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
