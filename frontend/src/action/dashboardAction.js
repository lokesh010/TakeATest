import fetch from "./fetch";
import { API } from "../config/config";

export const getAdminDashboard = () => {
  return fetch(`${API}/dashboard/admin`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return err;
    });
};

export const getStudentDashboard = () => {
  return fetch(`${API}/dashboard/student`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return err;
    });
};
