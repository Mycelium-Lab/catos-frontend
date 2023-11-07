import { ref } from "vue";
import { defineStore } from "pinia";
import { type PaperData } from "@/types/paper.types";

export const usePaperDataStore = defineStore("paperData", () => {
  const paperDTO = ref<PaperData>({
    "country": "",
    "registration_form": "",
    "name": "",
    "registration_number": 0,
    "address": {
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
    "website": "",
    "first_photo": "",
    "second_photo": "",
    "third_photo": "",
    "work_position": "",
    "ownership": true
  });

  return {
    paperDTO,
  };
});
