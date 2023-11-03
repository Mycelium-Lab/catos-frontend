import { baseApiClient } from "./baseApiClient";
import { Passport, Paper } from "@/types/documents.types";

const DOC_END_POINT = "/documents";

export const passports = (payload: Passport) => {
    return baseApiClient.post(DOC_END_POINT + "/passports/", payload);
}
export const papers = (payload: Paper) => {
    return baseApiClient.post(DOC_END_POINT + "/papers/", payload);
}
