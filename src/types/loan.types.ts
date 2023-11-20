import { Gender } from "./passport.types";

enum LoansStatus {
    "active" = "active",
    "paid" = "paid",
    "for_sale" = "for_sale",
    "sold" = "sold"
}

enum LoansRequestStatus {
    "pending" = "pending",
    "approved" = "approved",
    "declined" = "declined",
}

export type LoansRequestStatusSting = keyof typeof LoansRequestStatus;
export type LoansStatusString = keyof typeof LoansStatus;

export type LoansResponse = {
        id: number,
        pool_id: number,
        borrower_id: number,
        amount: number,
        paid_amount: number,
        millipercent: number,
        overdue_millipercent: number,
        start: string,
        end: string,
        status: LoansStatusString,
        buyer_id: number,
        price: number
}

export type LoansRequestResponse = {
        id: number,
        pool_id: number,
        borrower_id: number,
        creditor_id: number,
        amount: number,
        approved_amount: number,
        duration: number,
        millipercent: number,
        overdue_millipercent: number,
        status: LoansRequestStatusSting
}

export type LoansBoughtResponse = {
    "id": number,
    "pool_id": number,
    "borrower": {
      "email": string,
      "phone": string,
      "address": string,
      "passport": {
        "name": string,
        "surname": string,
        "middlename": string,
        "nationality": string,
        "birthdate": string,
        "country": string,
        "gender": Gender,
        "series": number,
        "number": number,
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
          "neighborhood":string,
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
      "userinfo": {
        "id": number,
        "employment_type": string,
        "revenue": number,
        "education": string,
        "relationship": string,
        "children": number,
        "criminal": string,
        "survey": string
      }
    },
    "amount": number,
    "paid_amount": number,
    "millipercent": number,
    "overdue_millipercent": number,
    "start": string,
    "end": string,
    "price": number
}

export type LoansRequestPayload = {
    pool_id: number,
    amount: number,
    duration: number
}