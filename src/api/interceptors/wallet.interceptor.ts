import { type InternalAxiosRequestConfig } from "axios";
import router from "@/router";
import { walletStorage } from "@/utils/localStorage";

const urlsRequireWallet = [
  "/pool",
  "/loanRequests/",
  "/pool/invest",
  "/pool/deposit",
  "/pool/withdraw",
];
const getUrlsThatRequireWallet = ["/loans/buy/"];

export const walletConnectedInterceptor = async (
  config: InternalAxiosRequestConfig
) => {
  const controller = new AbortController();
  if (
    config.url &&
    ((urlsRequireWallet.some(url => config.url?.startsWith(url)) &&
      config.method == "post") ||
      (getUrlsThatRequireWallet.some(url => config.url?.startsWith(url)) &&
        config.method == "get"))
  ) {
    if (!walletStorage.get()?.address) {
      controller.abort();
      config.signal = controller.signal;
      router.push({ name: "connect-wallet-finish" });
    }
  }
  return config;
};
