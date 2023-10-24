import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserDataStore = defineStore("userData", () => {
  const role = ref("");
  const phoneNumber = ref("");
  const email = ref("");
  const password = ref("");
  const country = ref("");
  const regValue = ref("");
  const companyName = ref("");
  const companyOGRN = ref("");
  const companyAddress = ref("");
  const companyWebsite = ref("");
  const regProof = ref<File | null>(null);
  const regProof64 = ref("");
  const addrProof = ref<File | null>(null);
  const addrProof64 = ref("");
  const extraDocs = ref<File | null>(null);
  const extraDocs64 = ref("");
  const extraDocsType = ref("");
  const name = ref("");
  const surname = ref("");
  const middleName = ref("");
  const nationality = ref("");
  const position = ref("");
  const is25PercentHolder= ref(false);
  const passport = ref({
    country: "",
    number: "",
    issueDate: "",
    issuingOrganization: "",
  });
  const registrationAddress = ref({
    country: "",
    region: "",
    neighborhood: "",
    city: "",
    street: "",
    house: "",
    housing: "",
    building: "",
    apartment: "",
    index: "",
  });
  const livingAddress = ref({
    country: "",
    region: "",
    neighborhood: "",
    city: "",
    street: "",
    house: "",
    housing: "",
    building: "",
    apartment: "",
    index: "",
  });
  const firstPhoto = ref<File | null>(null);
  const firstPhoto64 = ref("");
  const secondPhoto = ref<File | null>(null);
  const secondPhoto64 = ref("");
  const selfie = ref<File | null>(null);
  const selfie64 = ref("");


  return {
    role,
    phoneNumber,
    email,
    password,
    country,
    regValue,
    companyName,
    companyOGRN,
    companyAddress,
    companyWebsite,
    regProof,
    regProof64,
    addrProof,
    addrProof64,
    extraDocs,
    extraDocs64,
    extraDocsType,
    name,
    surname,
    middleName,
    nationality,
    position,
    is25PercentHolder,
    passport,
    registrationAddress,
    livingAddress,
    firstPhoto,
    firstPhoto64,
    secondPhoto,
    secondPhoto64,
    selfie,
    selfie64,
  };
});
