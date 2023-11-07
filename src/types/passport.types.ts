import { type Address } from "./address.type"

 export enum Gender {
    'М' = 'М', 
    'Ж' = 'Ж'
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
        "issuing_organization": string,
        "registration_address": Address,
        "living_address": Address,
        "first_photo": string,
        "second_photo": string,
        "selfie": string
}
