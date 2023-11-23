export enum UserRoles {
  borrower = "Заемщик",
  collector = "Коллектор",
  investor = "Инвестор",
  creditor = "Кредитор",
  admin = "Администратор",
}
export type Role = keyof typeof UserRoles;

export type UserData = {
  email: string;
  phone: string;
  password: string;
  role: string;
};

export type Wallet = {
  address: string;
}
