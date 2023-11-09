import { Ref, ref, computed } from "vue";
import { defineStore } from "pinia";
import { Pool } from "@/types/pool.type";
import { listPools } from "@/api/pools.api";
import { getUserId } from "@/utils/token";

export const usePoolListStore = defineStore("poolList", () => {
  const pools: Ref<Pool[]> = ref([]);
  listPools().then(res => {
    console.log(res);
    pools.value = res.data;
  });
  const creditorPools = computed(() => {
    const userId = getUserId();
    return pools.value.filter(val => val.owner_id == userId);
  });
  return {
    pools,
    creditorPools,
  };
});
