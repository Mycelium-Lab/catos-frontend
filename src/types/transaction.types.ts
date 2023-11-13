export enum TransactionStatuses {
    success = 'success',
    fail = 'fail',
}
export type TransactionStatus = keyof typeof TransactionStatuses;