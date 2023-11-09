import { baseApiClient } from "./baseApiClient";

const POOL_END_POINT = "/pool";

export const listPools = () => {
  return baseApiClient.get(POOL_END_POINT);
};
