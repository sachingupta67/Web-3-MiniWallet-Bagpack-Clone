const getDataFromLocalStorage = (key = "") => {
  let data;
  if (key) {
    data = JSON.parse(localStorage.getItem(key) || JSON.stringify({}));
  }

  return data;
};

const saveDataToLocalStorage = (key: string, data: string | object) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const removeDataFromLocalStorage = (key: string) =>
  localStorage.removeItem(key);

const clearLocalStorage = () => localStorage.clear();

export {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
  removeDataFromLocalStorage,
  clearLocalStorage,
};
