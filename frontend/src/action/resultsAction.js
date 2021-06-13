import fetch from "./fetch";
import { API } from "../config/config";

// admin specific
export const getAll = () => {
  return fetch(`${API}/results`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  })
    .then((res) => {
      return res.json();;
    })
    .catch((err) => {
      return {status: 400, msg: err};
    });
};

export const getUserTestAnswers = (UserId, TestId, take_count) => {
  return fetch(`${API}/results/user/${UserId}/test/${TestId}/take/${take_count}`, {
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


// student specific
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

export const getMyTestAnswers = (TestId, take_count) => {
  return fetch(`${API}/results/test/${TestId}/take/${take_count}`, {
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
