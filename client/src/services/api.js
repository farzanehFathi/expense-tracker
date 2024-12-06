import axios from "axios";

const BASE_URL = "http://localhost:4000/api";

const trackerAPI = axios.create({ baseURL: BASE_URL });

export const getExpenses = async () => {
  try {
    const res = await trackerAPI.get("/expenses");
    console.log("response is:", res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getExpense = async (id) => {
  try {
    const res = await trackerAPI.get(`/expenses/${id}`);
    console.log("response is:", res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
