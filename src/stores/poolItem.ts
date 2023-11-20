import { Ref, ref, computed } from "vue";
import { defineStore } from "pinia";
import { Pool } from "@/types/pool.type";
import { listPools } from "@/api/pools.api";

export const usePoolItemStore = defineStore("poolItem", () => {
  const pools: Ref<Pool[]> = ref([]);
  listPools().then(res => {
    console.log(res);
    pools.value = res.data;
  });
  const poolItem = (poolId: number) => {
    console.log('poolId', poolId)
    return pools.value.filter(val => val.id === poolId)[0];
  };
 
  return {
    poolItem
  };
});
