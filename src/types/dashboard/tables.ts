export interface IStatisticTable {
  id: number;
  pull: number;
  issued_loans: number;
  active_loans: number;
  repaid_loans: number;
  overduce_loans: number;
  trade_loans: number;
  sold_loans: number;
  issued_loans_summ: number;
  active_loans_summ: number;
  repaid_loans_summ: number;
  overduce_loans_summ: number;
  trade_loans_summ: number;
  sold_loans_summ: number;
  profit: number;
  roi: number;
}

export type StatisticTableRows =
  | "id"
  | "pull"
  | "issued_loans"
  | "active_loans"
  | "repaid_loans"
  | "overduce_loans"
  | "trade_loans"
  | "sold_loans"
  | "issued_loans_summ"
  | "active_loans_summ"
  | "repaid_loans_summ"
  | "overduce_loans_summ"
  | "trade_loans_summ"
  | "sold_loans_summ"
  | "profit"
  | "roi";

export type SortMethod = "increase" | "descending";
