import { baseApiClient } from "./baseApiClient";

export const connectWallet = () => {
    return baseApiClient.get("/users/connectWallet", {
      headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      },
    });
}

export const isConnected = (connuuid: string) => {
  return baseApiClient.get(`/users/isConnected/${connuuid}`, {
    headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    },
  });
}