import axios from "axios";

/**
 * This is where protected endpoints are being managed.
 * This function helps sending request to server eith user's token so we can check if user is really logged in not , he'll be pushed to login screen
 * @returns
 */

export default function Http() {
  const http = axios.create({
    baseURL: `https://healthservice.priaid.ch/`,
    withCredentials: false,
  });

  // http.interceptors.request.use(function (config) {
  //   const token = "Am86Ztj4DHy57YwXk";
  //   config.headers.common["X-auth-token"] = token ? `${token}` : "";
  //   return config;
  // });

  http.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        console.log(error.response.data);
      }
      console.log(error);

      return Promise.reject(error);
    }
  );
  return http;
}
