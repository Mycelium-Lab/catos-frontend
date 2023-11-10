enum LoansStatus {
    "active" = "active",
    "paid" = "paid",
    "for_sale" = "for_sale",
    "sold" = "sold"
}

enum LoansRequestStatus {
    "pending" = "pending",
    "approved" = "approved",
    "declined" = "declined",
}

export type LoansRequestStatusSting = keyof typeof LoansRequestStatus;
export type LoansStatusString = keyof typeof LoansStatus;

export type LoansResponse = {
        id: number,
        pool_id: number,
        borrower_id: number,
        amount: number,
        paid_amount: number,
        millipercent: number,
        overdue_millipercent: number,
        start: string,
        end: string,
        status: LoansStatusString,
        buyer_id: number,
        price: number
}

export type LoansRequestResponse = {
        id: number,
        pool_id: number,
        borrower_id: number,
        creditor_id: number,
        amount: number,
        approved_amount: number,
        duration: number,
        millipercent: number,
        overdue_millipercent: number,
        status: LoansRequestStatusSting
}

export type LoansRequestPayload = {
    pool_id: number,
    amount: number,
    duration: number
}