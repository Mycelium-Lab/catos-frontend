import { ref } from "vue";
import { defineStore } from "pinia";

export const usePlatformSettingsStore = defineStore("platformSettings", () => {
  const platformSettings = ref({
    loanSaleFeeMillipercent: 1000,
    loanRepayFeeMillipercent: 500,
    liquidWithdrawFeeMillipercent: 700,
  });
  const updateSettings = () => {
    // TODO add API call to get fee settings from backend
  };
  return {
    platformSettings,
    updateSettings,
  };
});
