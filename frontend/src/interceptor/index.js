// import axios from 'axios'

// // get cookie
// function getCookie(name) {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop().split(';').shift();
// }

// // url
// const baseURL = "http://localhost:5000/api";

//   const axiosInstance = axios.create({baseURL});
  
//   axiosInstance.interceptors.request.use((req) => {
//     if (!req.headers[getCookie(token)]) {
//       if (getBearerToken()) {
//         req.headers['Authorization'] = getBearerToken();
//       }
//     }
//     return req;
//   });
  
//   axiosInstance.interceptors.response.use(
//     undefined,
//     function axiosRetryInterceptor(err) {
//       if (err.response.status === 401) {
//         clearToken();
//         window.location.assign('/login');
//       }
//       return Promise.reject(err);
//     },
//   );

// export default axiosInstance;