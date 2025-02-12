import {
  SIGN_UP_SUCCESS_MSG,
  SIGN_UP_FAIL_MSG,
  SIGN_IN_SUCCESS_MSG,
  SIGN_IN_FAIL_MSG,
} from "constants/constants";

export function signUp(userInfo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      if (existingUsers.length) {
        if (!existingUsers.some((user) => user.id === userInfo.id)) {
          const updatedUsers = [...existingUsers, userInfo];
          localStorage.setItem("users", JSON.stringify(updatedUsers));
          resolve({
            status: "success",
            message: SIGN_UP_SUCCESS_MSG,
            users: updatedUsers,
          });
        } else {
          reject({ status: "fail", message: SIGN_UP_FAIL_MSG, user: null });
        }
      } else {
        localStorage.setItem("users", JSON.stringify([userInfo]));
        resolve({
          status: "success",
          message: SIGN_UP_SUCCESS_MSG,
          users: [userInfo],
        });
      }
    }, 3_000);
  });
}

export function signIn(userInfo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      const foundUser = existingUsers.find(
        (user) =>
          user.email === userInfo.email && user.password === userInfo.password
      );
      if (foundUser) {
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        resolve({
          status: "success",
          message: SIGN_IN_SUCCESS_MSG,
          user: foundUser,
        });
      } else {
        reject({ status: "fail", message: SIGN_IN_FAIL_MSG, user: null });
      }
    }, 3_000);
  });
}
