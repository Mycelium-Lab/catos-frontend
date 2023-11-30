import { ref } from "vue";
import { defineStore } from "pinia";
import { PoolsFilter } from "@/types/poolsFilter.type";

export const useFilterDataStore = defineStore("filterData", () => {

  const init = {
    minMillipercent: 0,
    maxMillipercent: 0,
    minOverdueMillipercent: 0,
    maxOverdueMillipercent: 0,
    minDuration: 0,
    maxDuration: 0,
    minFreePeriod: 0,
    maxFreePeriod: 0,
    minDuty: 0,
    maxDuty: 0,
    minExpired: 0,
    maxExpired: 0,
    minPrice: 0,
    maxPrice: 0,
  }

  const isActiveFilter = ref(false)
  const poolsFilter = ref<PoolsFilter>(init);

  const reset = () => {
    poolsFilter.value = {
      minMillipercent: 0,
      maxMillipercent: 0,
      minOverdueMillipercent: 0,
      maxOverdueMillipercent: 0,
      minDuration: 0,
      maxDuration: 0,
      minFreePeriod: 0,
      maxFreePeriod: 0,
      minDuty: 0,
      maxDuty: 0,
      minExpired: 0,
      maxExpired: 0,
      minPrice: 0,
      maxPrice: 0,
    }
  }

  return {
    isActiveFilter,
    poolsFilter,
    reset
  };
});
