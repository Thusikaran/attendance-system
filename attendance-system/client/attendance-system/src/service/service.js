// services/authService.js
const API_URL = "http://localhost:8080/api/auth"; 

export const checkLogin = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token); 
      return { success: true };
    } else {
      const error = await response.json();
      return { success: false, message: error.message };
    }
  } catch (error) {
    return { success: false, message: "Invalid Username or Password" };
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const isLoggedIn = () => {
  return !!localStorage.getItem("token");
};
