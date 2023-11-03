import { ref } from "vue";
import { defineStore } from "pinia";
import { PassportData } from "@/types/passport.type";

export const usePassportDataStore = defineStore("passportData", () => {
  const passportDTO = ref<PassportData>({
    "name": "",
    "surname": "",
    "middlename": "",
    "nationality": "",
    "birthdate": "",
    "country": "",
    "gender": "M",
    "series": 0,
    "number": 0,
    "issue_date": "",
    "issuing_organization": "",
    "registration_address": {
      "region": "",
      "neighborhood": "",
      "city": "",
      "street": "",
      "house": "",
      "housing": "",
      "building": "",
      "apartment": "",
      "index": 0
    },
    "living_address": {
      "region": "",
      "neighborhood": "",
      "city": "",
      "street": "",
      "house": "",
      "housing": "",
      "building": "",
      "apartment": "",
      "index": 0
    },
    "first_photo": "",
    "second_photo": "",
    "selfie": ""
  });

  return {
    passportDTO,
  };
});
