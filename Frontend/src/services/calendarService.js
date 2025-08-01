// src/services/calendarService.js
import axiosInstance from "./axiosInstance";

export const getRepaymentSchedule = async (userId) => {
  try {
    const res = await axiosInstance.get(`/calendar/schedule/${userId}`);
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};
