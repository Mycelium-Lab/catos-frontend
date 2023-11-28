import { Transaction } from "@/types/transaction.types";
import { baseApiClient } from "./baseApiClient";

const AUTH_END_POINT = "/transaction";

export const transaction = (uid: string) => {
    return baseApiClient.get<Transaction>(`${AUTH_END_POINT}/${uid}`);
};
