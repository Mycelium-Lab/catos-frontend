import { authStorage } from "@/utils/localStorage";
import { InternalAxiosRequestConfig } from "axios";
import { refresh } from "../auth.api";
const isExpired = (date: string) => {
  try {
    const now = Date.now();
    const toDate = Date.parse(date);
    return now > toDate;
  } catch (e) {
    console.error(e);
    return true;
  }
};
export const authRequestInterceptor = async (
  config: InternalAxiosRequestConfig
) => {
  let authData = authStorage.get();
  if (authData && isExpired(authData.access)) {
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
