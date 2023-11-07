import { baseApiClient } from "./baseApiClient";
import { type PassportData } from "@/types/passport.types";
import { type PaperData } from "@/types/paper.types";
import { type BorrowerData } from "@/types/borrowerData.types";

const DOC_END_POINT = "/documents";

export const passports = (payload: PassportData) => {
    return baseApiClient.post(DOC_END_POINT + "/passports/", payload);
}
export const papers = (payload: PaperData) => {
    return baseApiClient.post(DOC_END_POINT + "/papers/", payload);
}
export const userinfo = (payload: BorrowerData) => {
    return baseApiClient.post(DOC_END_POINT + "/userinfo/", payload);
}