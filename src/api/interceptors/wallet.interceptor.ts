import { type InternalAxiosRequestConfig } from "axios";
import router from "@/router";
import { walletStorage } from "@/utils/localStorage";

const urlsRequireWallet = ["/pool", "/loanRequests/"];

export const walletConnectedInterceptor = async (
  config: InternalAxiosRequestConfig
) => {
  const controller = new AbortController();
  if (
    config.url &&
    urlsRequireWallet.includes(config.url) &&
    config.method == "post"
  ) {
      if (walletStorage.get()?.address === '') {
        controller.abort();
        config.signal = controller.signal;
        router.push({ name: "connect-wallet-finish" });
      }
  }
  return config;
};
