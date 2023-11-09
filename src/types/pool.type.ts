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
};
