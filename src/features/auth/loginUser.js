export const loginUser = createAsyncThunk(
    "users/login",
    async ({ email, password }, thunkAPI) => {
      try {
        const response = await fetch(
          "https://mock-user-auth-server.herokuapp.com/api/v1/auth",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          }
        );
        let data = await response.json();
        console.log("response", data);
        if (response.status === 200) {
          localStorage.setItem("token", data.token);
          return data;
        } else {
          return thunkAPI.rejectWithValue(data);
        }
      } catch (e) {
        console.log("Error", e.response.data);
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  )