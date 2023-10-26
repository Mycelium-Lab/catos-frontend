import { baseApiClient } from "./baseApiClient";

export const connectWallet = () => {
    return baseApiClient.get("/users/connectWallet");
}

export const isConnected = (connuuid: string) => {
  return baseApiClient.get(`/users/isConnected/${connuuid}`);
}