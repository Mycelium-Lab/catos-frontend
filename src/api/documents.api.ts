import { baseApiClient } from "./baseApiClient";
import { Passport, Paper } from "@/types/documents.types";
import { PassportData } from "@/types/passport.type";
import { PaperData } from "@/types/paper.types";

const DOC_END_POINT = "/documents";

export const passports = (payload: Passport | PassportData) => {
    return baseApiClient.post(DOC_END_POINT + "/passports/", payload);
}
export const papers = (payload: Paper | PaperData) => {
    return baseApiClient.post(DOC_END_POINT + "/papers/", payload);
}
