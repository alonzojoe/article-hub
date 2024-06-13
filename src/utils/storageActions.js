export const getLocalStorage = (key) => {
  return JSON.stringify(localStorage.getItem(key));
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};
