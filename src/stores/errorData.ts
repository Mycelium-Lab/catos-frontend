import { ref } from "vue";
import { defineStore } from "pinia";

export const useErrorDataStore = defineStore("errorData", () => {
  const errorText = ref('')

  const setErrorText = (message: string) => {
    errorText.value = message
  }
  
  return {errorText, setErrorText};
});
