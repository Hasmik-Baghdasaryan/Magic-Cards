export const getUsers = () => JSON.parse(localStorage.getItem("users"));

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};
