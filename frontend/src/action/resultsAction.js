import fetch from "./fetch";
import { API } from "../config/config";

export const create = (testsTaken) => {
  return fetch(`${API}/results`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(testsTaken),
  })
    .then((res) => {
      return {status: 200, msg: "Test submitted, Goodluck!"};
    })
    .catch((err) => {
      return {status: 400, msg: err};
    });
};

export const getMyResult = () => {
  return fetch(`${API}/results/my-results`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return {status: 400, msg: err};
    });
};
