import { Ref, ref, computed, watch } from "vue";
import { defineStore } from "pinia";
import { Pool } from "@/types/pool.type";
import { listPools, listPoolsHundred } from "@/api/pools.api";
import { POOLS_PER_PAGE } from "@/utils/constants";

export const usePoolListStore = defineStore("poolList", () => {
  const offset = ref(0);
  const allPools: Ref<Pool[]> = ref([]);
  const pools = computed(() => {
    return allPools.value.slice(offset.value, offset.value + POOLS_PER_PAGE);
  });
  // listPools(offset.value).then(res => {
  //   pools.value = res.data;
  // });
  // const poolsHundred: Ref<Pool[]> = ref([]);
  // listPoolsHundred().then(res => {
  //   poolsHundred.value = res.data;
  // });
  const getAllPools = () => {
    listPoolsHundred(allPools.value.length).then(res => {
      allPools.value.push(...res.data);
      if (res.data.length === 100) {
        getAllPools();
      }
    });
  };
  const refreshAllPools = () => {
    allPools.value = [];
    getAllPools();
  };
  refreshAllPools();
  const verifiedPools = computed(() => {
    return allPools.value
      .filter(val => val.is_verified == true)
      .slice(offset.value, offset.value + POOLS_PER_PAGE);
  });

  const creditorPools = (creditorId: number) => {
    return allPools.value.filter(val => val.owner_id == creditorId);
  };

  const ownCreditorPools = (creditorId: number) => {
    return pools.value.filter(val => val.owner_id == creditorId);
  };

  const poolItem = async (poolId: number) => {
    // pools.value = (await listPoolsHundred()).data
    refreshAllPools();
    return allPools.value.filter(val => val.id === poolId)[0];
  };
  const setOffset = (count: number) => {
    offset.value = count;
  };

  // watch(offset, newValue => {
  //   listPools(newValue).then(res => {
  //     pools.value = res.data;
  //   });
  // });

  return {
    pools,
    creditorPools,
    verifiedPools,
    poolItem,
    offset,
    setOffset,
    // poolsHundred,
    ownCreditorPools,
    allPools,
    refreshAllPools,
  };
});
