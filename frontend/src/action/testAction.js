import fetch from "./fetch";
import { API } from "../config/config";
import cookie from "js-cookie";

export const create = (test) => {
  return fetch(`${API}/test`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(test),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return err;
    });
};

export const read = () => {
  return fetch(`${API}/test`, {
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
      return err;
    });
};

export const destroy = (id) => {
  return fetch(`${API}/test/${id}`, {
    method: "DELETE",
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
      return err;
    });
};



// get cookie
export const getCookie = (key) => {
  if (process.browser) {
    return cookie.get(key);
  }
};