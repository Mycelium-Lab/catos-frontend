import { authStorage } from "@/utils/localStorage";
import { type InternalAxiosRequestConfig } from "axios";
import { refresh } from "../token.api";
import { jwtDecode } from "jwt-decode";

const isExpired = (token: string) => {
  try {
    const { exp: toDate } = jwtDecode(token);
    const now = Date.now();
    if (!toDate) return true;
    return now > toDate * 1000;
  } catch (e) {
    console.error(e);
    return true;
  }
};
export const authRequestInterceptor = async (
  config: InternalAxiosRequestConfig
) => {
  let authData = authStorage.get();
  if (authData && isExpired(authData.access) && config.url !== '/token/refresh') {
    if (isExpired(authData.refresh)) {
      authStorage.clear();
      authData = undefined;
    } else {
      await refresh({
        refresh: authData.refresh,
      })
        .then(response => {
          authData = response.data;
          authStorage.set(authData);
        })
        .catch(e => {
          console.error(e);
          authStorage.clear();
          authData = undefined;
        });
    }
  }
  if (authData?.access) {
    config.headers["Authorization"] = `Bearer ${authData.access}`;
  }
  config.headers["Content-Type"] = "application/json";
  config.headers["Access-Control-Allow-Origin"] = "*";
  return config;
};