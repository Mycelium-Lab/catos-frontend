import { Transaction } from "@/types/transaction.types";
import { baseApiClient } from "./baseApiClient";

const TRANSACTION_END_POINT = "/transaction";

export const transaction = (uid: string) => {
    return baseApiClient.get<Transaction>(`${TRANSACTION_END_POINT}/${uid}`);
};
export const getTransactions = () => {
    return baseApiClient.get<Transaction[]>(TRANSACTION_END_POINT + '/');
}
