import { Role } from "./user.types"
import { GenderString } from "./passport.types"

export type ProfileData = {
"id": number,
"email": string,
"email_verified": boolean,
"phone": string,
"phone_verified": boolean,
"role": Role,
"address": string,
"wl_status": string,
"kyc": boolean,
"passport": {
  "name": string,
  "surname": string,
  "middlename": string,
  "nationality": string,
  "birthdate": string,
  "country": string,
  "gender": GenderString,
  "series": 0,
  "number": 0,
  "issue_date": string,
  "issuing_organization": string,
  "registration_address": {
    "region": string,
    "neighborhood": string,
    "city": string,
    "street": string,
    "house": string,
    "housing": string,
    "building": string,
    "apartment": string,
    "index": number,
    "id": number
  },
  "living_address": {
    "region": string,
    "neighborhood": string,
    "city": string,
    "street": string,
    "house": string,
    "housing": string,
    "building": string,
    "apartment": string,
    "index": number,
    "id": number
  },
  "first_photo": string,
  "second_photo": string,
  "selfie": string,
  "id": number
},
"passport_id": number,
"userinfo_id": number
}

export type Profile = {
    "email": string,
    "phone": string,
    "name": string,
    "surname": string,
    "middlename": string
    "hasVerified": boolean
}