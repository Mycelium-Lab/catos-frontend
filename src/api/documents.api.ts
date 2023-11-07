import { baseApiClient } from "./baseApiClient";
import { type Passport, type Paper } from "@/types/documents.types";
import { type PassportData } from "@/types/passport.types";
import { type PaperData } from "@/types/paper.types";

const DOC_END_POINT = "/documents";

export const passports = (payload: Passport | PassportData) => {
    return baseApiClient.post(DOC_END_POINT + "/passports/", payload);
}
export const papers = (payload: Paper | PaperData) => {
    return baseApiClient.post(DOC_END_POINT + "/papers/", payload);
}
