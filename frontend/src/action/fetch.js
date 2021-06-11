import fetch from "isomorphic-fetch";
import cookie from "js-cookie";

export default function fetchInstance(...args) {
    return fetch(args[0],{
        ...args[1],
        headers: {
            ...args[1].headers,
            "set-cookie": getCookie("token")
        },
    })
}

// get cookie
const getCookie = (key) => {
    if (process.browser) {
        return cookie.get(key);
    }
};