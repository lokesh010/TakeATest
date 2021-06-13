import fetch from "./fetch";
import { API } from "../config/config";

export const create = (questions) => {
  return fetch(`${API}/question`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(questions),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return err;
    });
};
