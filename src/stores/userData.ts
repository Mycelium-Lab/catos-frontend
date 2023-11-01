import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { UserData } from "@/types/user.types";

export const useUserDataStore = defineStore("userData", () => {
  const userDTO = ref<UserData>({
    email: "",
    password: "",
    role: "",
    phone: "",
    tonwallet: "",
    passport: {
      name: "",
      surname: "",
      middleName: "",
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
    },
    paper: {
      country: "",
      registration_form: "",
      name: "",
      registration_number: 0,
      address: {
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
      website: "",
      first_photo: "",
      second_photo: "",
      third_photo: "",
    },
    nationality: "",
    ownership: true
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
