import getMobileOperatingSystem from "@/utils/defineDevice";
import { ref } from "vue";

export function useDevice() {
  const isMobile = ref(getMobileOperatingSystem());
  return { isMobile };
}
