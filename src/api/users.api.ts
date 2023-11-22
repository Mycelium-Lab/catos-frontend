import { baseApiClient } from "./baseApiClient";
import { type UserData } from "@/types/user.types";

const USER_END_POINT = "/users";

export enum WalletConnectionStatusResponseEnum {
  pending = "pending",
  rejected = "rejected",
  error = "error",
  successful = "successful",
}
export type ConnectWalletResponse = {
  url: string;
};
export type WalletConnectionStatusResponse =
  keyof typeof WalletConnectionStatusResponseEnum;
export type RegisterCreatedResponse = {
  email: string;
};
export type RegisterBadRequestResponse = {
  type: string;
  object: string;
  details: string;
};

export const register = (payload: UserData) => {
  return baseApiClient.post<
    RegisterCreatedResponse | RegisterBadRequestResponse
  >(USER_END_POINT + "/register", payload);
};
export const connectWallet = () => {
  return baseApiClient.get<ConnectWalletResponse>(
    USER_END_POINT + "/connectWallet/"
  );
};
export const verifyEmail = () => {
  return baseApiClient.get(USER_END_POINT + "/verifyEmail");
};
export const verifyPhone = () => {
  return baseApiClient.get(USER_END_POINT + "/verifyPhone");
};
export const confirmPhone = (code: string) => {
  return baseApiClient.get(USER_END_POINT + `/confirmPhone?code=${code}`);
};
export const confirmEmail = (code: string) => {
  return baseApiClient.get(USER_END_POINT + `/confirmEmail?code=${code}`);
};
export const isWalletConnected = () => {
  return baseApiClient.get<WalletConnectionStatusResponse>(USER_END_POINT + `/walletConnectionStatus`);
};
