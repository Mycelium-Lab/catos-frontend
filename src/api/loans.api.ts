import { baseApiClient } from "./baseApiClient";

const LOAN_END_POINT = "/loans/";

export type RetrieveLoanData = {
    remain: number,
    accrued: number,
}

export const listLoans = () => {
    return baseApiClient.get(LOAN_END_POINT)
}

export const takeLoan = (id: number) => {
    return baseApiClient.get(`${LOAN_END_POINT}take/${id}`)
};

export const retrieveLoan = (id: number) => {
    return baseApiClient.get<RetrieveLoanData>(`${LOAN_END_POINT}/${id}`)
};

export const repayLoan = (id: number, value: number) => {
    return baseApiClient.get(`${LOAN_END_POINT}pay/${id}?amount=${value}`)
} 

export const sellLoan = (id: number, value: number) => {
    return baseApiClient.get(`${LOAN_END_POINT}sell/${id}?price=${value}`)
} 

export const buyLoan = (id: number, value: number) => {
    return baseApiClient.get(`${LOAN_END_POINT}buy/${id}?amount=${value}`)
} 

export const prolongateLoan = (id: number) => {
    return baseApiClient.get(`${LOAN_END_POINT}prolongate/${id}`)
}
 
export const listBoughtLoans = () => {
    return baseApiClient.get(`${LOAN_END_POINT}bought`)
}
