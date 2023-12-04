import { Ref, ref, computed, watch } from "vue";
import { defineStore } from "pinia";
import { Pool } from "@/types/pool.type";
import { listPools, listPoolsHundred } from "@/api/pools.api";

export const usePoolListStore = defineStore("poolList", () => {
  const offset = ref(0)
  const pools: Ref<Pool[]> = ref([]);
  listPools(offset.value).then(res => {
    pools.value = res.data;
  });
  const poolsHundred: Ref<Pool[]> = ref([]);
  listPoolsHundred().then(res => {
    poolsHundred.value = res.data;
  });

  const verifiedPools = computed(() => {
    return pools.value.filter(val => val.is_verified == true);
  });

  const creditorPools = (creditorId: number) => {
    return poolsHundred.value.filter(val => val.owner_id == creditorId);
  };

  const ownCreditorPools = (creditorId: number) => {
    return pools.value.filter(val => val.owner_id == creditorId);
  };

  const poolItem = async (poolId: number) => {
    pools.value = await (await listPoolsHundred()).data
    return pools.value.filter(val => val.id === poolId)[0];
  };
  const setOffset = (count: number) => {
    offset.value = count
  }

  watch(offset, (newValue) => {
    listPools(newValue).then(res => {
      pools.value = res.data;
    });
  })

  return {
    pools,
    creditorPools,
    verifiedPools,
    poolItem, 
    offset,
    setOffset,
    poolsHundred,
    ownCreditorPools
  };
});
