import { baseApiClient } from "./baseApiClient";
import { Pool } from "@/types/pool.type";
import { CreatePoolData } from "@/types/pool.type";
const POOL_END_POINT = "/pool";

export type LiquidityPayload = {
  pool_id: number;
  amount: number;
}; 

export const listPools = (offset: number) => {
  return baseApiClient.get<Pool[]>(`${POOL_END_POINT}?limit=10&offset=${offset}`);
};
export const listPoolsHundred = () => {
  return baseApiClient.get<Pool[]>(`${POOL_END_POINT}?limit=100&offset=0`);
};
export const createPool = (payload: CreatePoolData) => {
  return baseApiClient.post(POOL_END_POINT, payload);
};
export const investToPool = (payload: LiquidityPayload) => {
  return baseApiClient.post(POOL_END_POINT + '/invest', payload);
};
export const depositToPool = (payload: LiquidityPayload) => {
  return baseApiClient.post(POOL_END_POINT + '/deposit', payload);
};
export const withdrawFromPool = (payload: LiquidityPayload) => {
  return baseApiClient.post(POOL_END_POINT + '/withdraw', payload);
};