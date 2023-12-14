export const setUserInLocalStorage = (value) => {
  localStorage.setItem("dh-user", JSON.stringify(value));
};

export const getUserFromLocalStorage = () => {
  const user = JSON.parse(localStorage.getItem("dh-user"));

  return user;
};
