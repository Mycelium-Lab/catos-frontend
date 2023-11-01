import { baseApiClient } from "./baseApiClient";

const AUTH_END_POINT = "/token";

export type AuthResponse = {
  email: string;
  refresh: string;
  access: string;
};
export type LoginCredentials = {
  password: string;
  email: string;
};
type RefreshCredentials = {
  refresh: string;
};

export const refresh = (payload: RefreshCredentials) => {
  return baseApiClient.post<AuthResponse>(AUTH_END_POINT + "/refresh", payload);
};
export const login = (payload: LoginCredentials) => {
  return baseApiClient.post<AuthResponse>(AUTH_END_POINT + "/pair", payload);
};
