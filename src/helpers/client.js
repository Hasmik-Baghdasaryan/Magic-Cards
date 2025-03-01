import {
  SIGN_UP_SUCCESS_MSG,
  SIGN_UP_FAIL_MSG,
  SIGN_IN_SUCCESS_MSG,
  SIGN_IN_FAIL_MSG,
  CREATE_CARD_SUCCESS_MSG,
  CREATE_CARD_FAIL_MSG,
} from "constants/constants";

export function signUp(userInfo) {
  const userFinalInfo = { ...userInfo, cardIds: [], favoriteIds: [] };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      if (existingUsers.length) {
        if (!existingUsers.some((user) => user.email === userInfo.email)) {
          const updatedUsers = [...existingUsers, userFinalInfo];
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
        localStorage.setItem("users", JSON.stringify([userFinalInfo]));
        resolve({
          status: "success",
          message: SIGN_UP_SUCCESS_MSG,
          users: [userFinalInfo],
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
        userInfo.isRemembered
          ? localStorage.setItem("currentUser", JSON.stringify(foundUser))
          : sessionStorage.setItem("currentUser", JSON.stringify(foundUser));
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

export function createUserCard(cardInfo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const existingCards = JSON.parse(localStorage.getItem("allCards")) || [];
      if (cardInfo) {
        updateUserCards(cardInfo);
        const updatedCards = existingCards.length
          ? [...existingCards, cardInfo]
          : [cardInfo];
        localStorage.setItem("allCards", JSON.stringify(updatedCards));
        resolve({
          status: "success",
          message: CREATE_CARD_SUCCESS_MSG,
          card: cardInfo,
          cards: updatedCards,
        });
      } else {
        reject({
          status: "fail",
          message: CREATE_CARD_FAIL_MSG,
          card: null,
        });
      }
    }, 3_000);
  });
}

function updateUserCards(cardInfo) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updatedUsers = users?.map((user) => {
    if (user.id === cardInfo?.userId) {
      return { ...user, cardIds: [...user.cardIds, cardInfo?.id] };
    }
    return user;
  });
  localStorage.setItem("users", JSON.stringify(updatedUsers));
}
