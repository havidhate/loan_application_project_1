// src/utils/dateUtils.js

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// export const isOverdue = (date) => {
//   return new Date(date) < new Date();
// };

// export const isToday = (date) => {
//   const today = new Date().toISOString().split("T")[0];
//   return date === today;
// };
