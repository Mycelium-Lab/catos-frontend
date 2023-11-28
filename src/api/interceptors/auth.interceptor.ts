import { authStorage } from "@/utils/localStorage";
import { type InternalAxiosRequestConfig } from "axios";
import { refresh } from "../token.api";
import { isExpired } from "@/utils/token";

export const authRequestInterceptor = async (
  config: InternalAxiosRequestConfig
) => {
  let authData = authStorage.get();
  if (
    authData &&
    isExpired(authData.access) &&
    config.url !== "/token/refresh"
  ) {
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
  if (config.url != '/files/upload') {
    config.headers["Content-Type"] = "application/json";
  }
  else {
    config.headers["Content-Type"] = "multipart/form-data";
  }
  config.headers["Access-Control-Allow-Origin"] = "*";
  return config;
};
