import axios from "axios";
import { baseApiURL } from "@/config";
import { authRequestInterceptor } from "./interceptors/auth.interceptor";
import { walletConnectedInterceptor } from "./interceptors/wallet.interceptor";

export const baseApiClient = axios.create({
  baseURL: baseApiURL,
});

baseApiClient.interceptors.request.use(authRequestInterceptor, e =>
  Promise.reject(e)
);
baseApiClient.interceptors.request.use(walletConnectedInterceptor, e =>
  Promise.reject(e)
);
