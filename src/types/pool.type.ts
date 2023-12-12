export enum PoolStatus {
  active = "Активен",
  inactive = "Не активен",
  banned = "Забанен",
}

export type Pool = {
  id: number;
  owner_id: number;
  status: PoolStatus;
  millipercent: number;
  overdue_millipercent: number;
  max_loan_amount: number;
  min_invest_amount: number;
  max_duration: string;
  free_period: string;
  all_liquidity: number;
  available_liquidity: number;
  is_verified: boolean;
  roi: number;
  organization: string;
  loan_count: number;
  revenue: number;
  investors_count: number,
  overdue_loans: number,
  sold_loans: number,
  overdue_amount: number;
};

export type CreatePoolData = {
  millipercent: number;
  overdue_millipercent: number;
  max_loan_amount: number;
  min_invest_amount: number;
  max_duration: number;
  free_period: number;
};
