// import axiosInstance from "./axiosInstance";

export const register = async (userData) => {
  try {
    const res = await axiosInstance.post("/auth/signup", userData); 
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};

export const login = async (credentials) => {
  try {
    const res = await axiosInstance.post("/auth/login", credentials); 
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};
