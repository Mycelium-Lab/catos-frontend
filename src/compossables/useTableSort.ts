import type {
  IStatisticTable,
  StatisticTableRows,
  SortMethod,
} from "@/types/dashboard/tables";

export default function useTableSort(
  source: IStatisticTable[],
  type: SortMethod,
  param: StatisticTableRows
) {
  const sorted = source.sort(function (a, b) {
    if (type === "increase" ? a[param] > b[param] : a[param] < b[param]) {
      return 1;
    }
    if (type === "increase" ? a[param] < b[param] : a[param] > b[param]) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  });
  return sorted;
}
