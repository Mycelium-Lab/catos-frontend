import { Address } from "./address.type"

 enum Gender {
    "M", 
    "Ж"
  }

export type GenderString = keyof typeof Gender;

export type PassportData = {
        "name": string,
        "surname": string,
        "middlename": string,
        "nationality": string,
        "birthdate": string,
        "country": string,
        "gender": GenderString,
        "series": number,
        "number": number,
        "issue_date": string,
        "issuing_organization": String,
        "registration_address": Address,
        "living_address": Address,
        "first_photo": String,
        "second_photo": String,
        "selfie": String
}
