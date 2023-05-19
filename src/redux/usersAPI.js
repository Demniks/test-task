import axios from "axios";

const BASE_URL = "https://6457e1be1a4c152cf98c9a54.mockapi.io/";

export const requestUsers = async () => {
  const { data } = await axios.get(`${BASE_URL}users`);
  return data;
};

export const updateUser = async (updUserData) => {
  const { data } = await axios.put(
    `${BASE_URL}users/${updUserData.id}`,
    updUserData
  );
  return data;
};