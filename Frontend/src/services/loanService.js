// src/services/loanService.js
import axiosInstance from "./axiosInstance";

export const applyForLoan = async (formData) => {
  try {
    const res = await axiosInstance.post("/loan", formData);
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};

export const getLoanStatus = async (loanId) => {
  try {
    const res = await axiosInstance.get(`/status/${loanId}`);
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};
