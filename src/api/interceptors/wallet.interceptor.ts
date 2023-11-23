import { type InternalAxiosRequestConfig } from "axios";
import { isWalletConnected } from "../users.api";

const urlsRequireWallet = ["/pool"];

export const walletConnectedInterceptor = async (
  config: InternalAxiosRequestConfig
) => {
  if (
    config.url &&
    urlsRequireWallet.includes(config.url) &&
    config.method == "post"
  ) {
    console.log("Bingo");
  }
  return config;
};
