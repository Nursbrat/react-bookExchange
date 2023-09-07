import { AUTH } from "../../api/api";

export const signupUser = async (userData) => {
  try {
    const response = await fetch(`${AUTH}/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    let data = await response.json();

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    return await response.json();
  } catch (e) {
    console.error("Error", e);
    throw e;
  }
};
