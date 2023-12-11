export type Transaction = {
    "id": string,
    "hash": any,
    "exit_code": number,
    "sender_id": number,
    "status": TransactionStatuses,
    "data"?: TransactionData,
}
export type TransactionData = {
    "boc": string,
    "args": TransactionOperation[],
    "other"?: unknown,

}
export type TransactionOperation = [
    string,
    number,
]
export enum TransactionStatusesEnum {
    pending = "Ожидание",
    rejected = "Отклонена пользователем",
    approved = "Одобрена пользователем",
    failed = "Ошибка",
    successfull = "Успешно"
}

export type TransactionStatuses = keyof typeof TransactionStatusesEnum;

export enum TransactionOpcodes {

}