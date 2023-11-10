import { baseApiClient } from "./baseApiClient";
import { Pool } from "@/types/pool.type";
import { CreatePoolData } from "@/types/pool.type";
const POOL_END_POINT = "/pool";

export const listPools = () => {
  return baseApiClient.get<Pool[]>(POOL_END_POINT);
};

export const createPool = (payload: CreatePoolData) => {
  return baseApiClient.post(POOL_END_POINT, payload);
};
export const investToPool = () => {
  return baseApiClient.post(POOL_END_POINT + '/invest');
};
export const depositToPool = (payload: CreatePoolData) => {
  return baseApiClient.post(POOL_END_POINT + '/deposit', payload);
};
export const withdrawFromPool = (payload: CreatePoolData) => {
  return baseApiClient.post(POOL_END_POINT + '/withdraw', payload);
};