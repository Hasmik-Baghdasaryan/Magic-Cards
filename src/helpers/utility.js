export const getUsers = () => JSON.parse(localStorage.getItem("users"));

export const getCurrentUser = () => {
  return (
    JSON.parse(localStorage.getItem("currentUser")) ||
    JSON.parse(sessionStorage.getItem("currentUser"))
  );
};

export const getPlaceholder = (field) => {
  return field.charAt(0).toUpperCase() + field.slice(1);
};
