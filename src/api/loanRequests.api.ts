import { baseApiClient } from "./baseApiClient";
import { LoansRequestApprovePayload, LoansRequestPayload, LoansRequestResponse } from "../types/loan.types"

const LOAN_REQUESTS_END_POINT = "/loanRequests/";

export const listLoanRequest = () => {
    return baseApiClient.get<LoansRequestResponse[]>(LOAN_REQUESTS_END_POINT)
}

export const createLoanRequest = (payload: LoansRequestPayload) => {
    return baseApiClient.post(LOAN_REQUESTS_END_POINT, payload);
};

export const retrieveLoanRequest = (id: number) => {
    return baseApiClient.get(`${LOAN_REQUESTS_END_POINT}/${id}`)
}

export const approveLoanRequest = (id: number, payload: LoansRequestApprovePayload) => {
    return baseApiClient.patch(`${LOAN_REQUESTS_END_POINT}/${id}`, payload)
}
