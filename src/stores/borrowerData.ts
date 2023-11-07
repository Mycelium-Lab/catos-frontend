import { ref } from "vue";
import { defineStore } from "pinia";
import { BorrowerData } from "@/types/borrowerData.types";

export const useBorrowerDataStore = defineStore("borrowerData", () => {
  const borrowerDTO = ref<BorrowerData>({
    employment_type: "",
    revenue: 0,
    education: "",
    relationship: "",
    children: 0,
    criminal: "",
    survey: "",
  });
  
  return {borrowerDTO};
});
