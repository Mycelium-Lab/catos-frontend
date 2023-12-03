import { Ref, ref, computed } from "vue";
import { defineStore } from "pinia";
import { Pool } from "@/types/pool.type";
import { listPools } from "@/api/pools.api";

export const usePoolListStore = defineStore("poolList", () => {
  const pools: Ref<Pool[]> = ref([]);
  listPools().then(res => {
    // console.log(res);
    pools.value = res.data;
  });
  const creditorPools = (creditorId: number) => {
    return pools.value.filter(val => val.owner_id == creditorId);
  };
  const verifiedPools = computed(() => {
    return pools.value.filter(val => val.is_verified == true);
  });
  const poolItem = async (poolId: number) => {
    pools.value = await (await listPools()).data
    return pools.value.filter(val => val.id === poolId)[0];
  };
  return {
    pools,
    creditorPools,
    verifiedPools,
    poolItem
  };
});
