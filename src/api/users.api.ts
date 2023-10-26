import { baseApiClient } from "./baseApiClient";
import { UserData } from "@/types/user.types";

export const connectWallet = () => {
    return baseApiClient.get("/users/connectWallet");
}

export const isConnected = (connuuid: string) => {
  return baseApiClient.get(`/users/isConnected/${connuuid}`);
}

export const register = (userData: UserData) => {
  return baseApiClient.post("/users/register", userData);
}