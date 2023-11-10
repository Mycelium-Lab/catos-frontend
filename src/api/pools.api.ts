import { baseApiClient } from "./baseApiClient";
import { Pool } from "@/types/pool.type";
import { CreatePoolData } from "@/types/pool.type";
const POOL_END_POINT = "/pool";

export const listPools = () => {
  return baseApiClient.get<Pool[]>(POOL_END_POINT + '/');
};

export const createPool = (payload: CreatePoolData) => {
  return baseApiClient.post(POOL_END_POINT + '/', payload);
};
