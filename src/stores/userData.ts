import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { UserData } from "@/types/user.types";

export const useUserDataStore = defineStore("userData", () => {
  const userDTO = ref<UserData>({
    email: "",
    phone: "",
    password: "",
    role: "",
  });

  const firstPhotoFile = ref<File | null>(null);
  const secondPhotoFile = ref<File | null>(null);
  const selfieFile = ref<File | null>(null);
  const regProof = ref<File | null>(null);
  const addrProof = ref<File | null>(null);
  const extraDocs = ref<File | null>(null);
  const extraDocsType = ref("");
  
  return {
    userDTO,
    firstPhotoFile,
    secondPhotoFile,
    selfieFile,
    regProof,
    addrProof,
    extraDocs,
    extraDocsType,
  };
});
