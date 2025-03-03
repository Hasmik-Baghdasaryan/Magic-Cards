export const getUsers = () => JSON.parse(localStorage.getItem("users"));

export const getCurrentUser = () => {
  return (
    JSON.parse(localStorage.getItem("currentUser")) ||
    JSON.parse(sessionStorage.getItem("currentUser"))
  );
};

export const getAllCards = () => JSON.parse(localStorage.getItem("allCards"));

export const getPlaceholder = (field) => {
  return field.charAt(0).toUpperCase() + field.slice(1);
};

export const getUserById = (id) => {
  const users = getUsers();
  const user = users.find((user) => user.id === id);
  return user;
};

export const dateFormatter = (date) => {
  const dateObj = new Date(date);

  const getFormattedValue = function (value) {
    return value < 10 ? `0${value}` : value;
  };
  const month = getFormattedValue(dateObj.getMonth() + 1);
  const year = dateObj.getFullYear();
  const day = getFormattedValue(dateObj.getDate());

  return `${day}.${month}.${year}`;
};
