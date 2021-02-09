export const NCLOUD_TOKEN = 'NCLOUD_TOKEN';

export const addToLocalStorage = ({key, value}) => {
  localStorage.setItem(key, value);
  return;
};
