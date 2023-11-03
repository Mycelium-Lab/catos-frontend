import { Address } from "./address.type"

export type PaperData = {
    "country": string,
    "registration_form": string,
    "name": string,
    "registration_number": number,
    "address": Address,
    "website": string,
    "first_photo": string,
    "second_photo": string,
    "third_photo": string,
    "work_position": string,
    "ownership": boolean
  }