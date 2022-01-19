const url = "https://api.iev.aero/api/flights";

export const curentDate = () =>
  `${new Date().getDate()}-${
    new Date().getMonth() < 10
      ? `0${new Date().getMonth() + 1}`
      : `${new Date().getMonth()}`
  }-${new Date().getFullYear()}`;

export const fetchAllData = (curentDate) =>
  fetch(`${url}/${curentDate()}`).then((responce) => {
    if (!responce.ok) {
      throw new Error("Failed to get data");
    }
    return responce.json();
  });

export const clock = (date) => {
  return `${
    new Date(date).getHours() < 10
      ? `0${new Date(date).getHours()}`
      : `${new Date(date).getHours()}`
  }:${
    new Date(date).getMinutes() < 10
      ? `0${new Date(date).getMinutes()}`
      : new Date(date).getMinutes()
  }`;
};
