export enum UserRoles {
    borrower = "Заемщик",
    collector = "Коллектор",
    depositor = "Инвестор",
    creditor = "Кредитор",
  }
export type Role = keyof typeof UserRoles