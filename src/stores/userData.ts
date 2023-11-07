import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { type UserData } from "@/types/user.types";
import { type Passport } from "@/types/documents.types";

export const useUserDataStore = defineStore("userData", () => {
  const userDTO = ref<UserData>({
    email: "",
    phone: "",
    password: "",
    role: "",
  });

  const passport = ref<Passport>({
    name: "",
    surname: "",
    middlename: "",
    nationality: "",
    birthdate: "",
    country: "",
    gender: "",
    series: 0,
    number: 0,
    issue_date: "",
    issuing_organization: "",
    registration_address: {
      region: "",
      neighborhood: "",
      city: "",
      street: "",
      house: "",
      housing: "",
      building: "",
      apartment: "",
      index: 0,
    },
    living_address: {
      region: "",
      neighborhood: "",
      city: "",
      street: "",
      house: "",
      housing: "",
      building: "",
      apartment: "",
      index: 0,
    },
    first_photo: "",
    second_photo: "",
    selfie: "",
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
    passport,
    firstPhotoFile,
    secondPhotoFile,
    selfieFile,
    regProof,
    addrProof,
    extraDocs,
    extraDocsType,
  };
});
