import { baseApiClient } from "./baseApiClient";
import { UserData } from "@/types/user.types";

const USER_END_POINT = "/users";

export type ConnectWalletResponse = {
  id: string;
  url: string;
};
export type RegisterCreatedResponse = {
  id: number;
  email: string;
};
export type RegisterBadRequestResponse = {
  type: string;
  object: string;
  details: string;
};
export const connectWallet = () => {
  return baseApiClient.get<ConnectWalletResponse>(
    USER_END_POINT + "/connectWallet"
  );
};

export const isConnected = (connuuid: string) => {
  return baseApiClient.get<Number>(USER_END_POINT + `/isConnected/${connuuid}`);
};
export const register = (payload: UserData) => {
  return baseApiClient.post<RegisterCreatedResponse | RegisterBadRequestResponse>
  (USER_END_POINT + "/register", payload);
};