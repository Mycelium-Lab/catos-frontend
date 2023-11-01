import { authStorage } from "@/utils/localStorage";
import { InternalAxiosRequestConfig } from "axios";
import { jwtDecode } from "jwt-decode";
import { refresh } from "../token.api";

const isExpired = (date: number) => {
  try {
    const now = Date.now();
    return now > date * 1000;
  } catch (e) {
    console.error(e);
    return true;
  }
};
export const authRequestInterceptor = async (
  config: InternalAxiosRequestConfig
) => {
  let authData = authStorage.get();
  if (authData){
    const exp = jwtDecode(authData.access).exp;
    if (exp && isExpired(exp)) {
      const refreshExp = jwtDecode(authData.refresh).exp;
      if (refreshExp && isExpired(refreshExp)) {
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
  }
  if (authData?.access) {
    config.headers["Authorization"] = `Bearer ${authData.access}`;
  }
  config.headers["Content-Type"] = "application/json";
  config.headers["Access-Control-Allow-Origin"] = "*";
  return config;
};
