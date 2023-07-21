<template>
  <h4 class="stats-title">Cтатистика по пуллам</h4>

  <table class="table">
    <thead class="table-head">
      <tr>
        <th class="table-header_first table-header">
          ID
          <img
            class="arrow-sort-icon"
            alt=""
            src="@/assets/images/arrowdownarrowup.svg"
            @click="() => setSortOption('id')"
          />
        </th>
        <th class="table-header">
          {{ i18n.global.t(`pulls-statistic-table.${rowNamePairs[0]}`) }}
          <img
            class="arrow-sort-icon"
            alt=""
            src="@/assets/images/arrowdownarrowup.svg"
            @click="() => setSortOption(rowNamePairs[0])"
          />
        </th>
        <th class="table-header">
          {{ i18n.global.t(`pulls-statistic-table.${rowNamePairs[1]}`) }}
          <img
            class="arrow-sort-icon"
            alt=""
            src="@/assets/images/arrowdownarrowup.svg"
            @click="() => setSortOption(rowNamePairs[1])"
          />
        </th>
        <th class="table-header_action table-header">
          <div class="arrows">
            <button
              :class="
                currentPage === 0
                  ? 'arrows-table1_disable arrows-table1'
                  : 'arrows-table1'
              "
              :disabled="currentPage === 0 ? true : false"
              @click="
                () => {
                  isActive = 'prev';
                  currentPage -= 1;
                }
              "
            >
              <svg
                class="arrow-down-arrow-up-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="#807A7A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              :class="
                currentPage >= 7
                  ? 'arrows-table1_disable arrows-table1'
                  : 'arrows-table1'
              "
              :disabled="currentPage >= 7 ? true : false"
              @click="
                () => {
                  isActive = 'next';
                  currentPage += 1;
                }
              "
            >
              <svg
                class="arrow-down-arrow-up-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="#807A7A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="table-body">
      <tr
        :class="i % 2 ? 'table-body_even' : ''"
        v-for="(row, i) in visibaleRows"
        :key="row.id"
      >
        <td
          :class="
            i === 0
              ? 'table-body_value-first-row table-body_value'
              : 'table-body_value'
          "
        >
          <span class="table-body_value-id">
            {{ row.id }}
          </span>
        </td>
        <td
          :class="
            i === 0
              ? 'table-body_value-first-row table-body_value'
              : 'table-body_value'
          "
        >
          {{ row[rowNamePairs[0]] }}
        </td>
        <td
          :class="
            i === 0
              ? 'table-body_value-first-row table-body_value'
              : 'table-body_value'
          "
        >
          {{ row[rowNamePairs[1]] }}
        </td>
        <td
          :class="
            i === 0
              ? 'table-body_value-first-row table-body_value-last table-body_value'
              : 'table-body_value-last table-body_value'
          "
        >
          <img class="eye-icon" alt="" src="@/assets/images/eye.svg" />
        </td>
      </tr>
      <tr>
        <td class="table-body_devider"></td>
        <td class="table-body_devider"></td>
        <td class="table-body_devider"></td>
        <td class="table-body_devider"></td>
      </tr>
    </tbody>
    <tfoot class="table-footer" @click="() => (isAll = !isAll)">
      <div class="open-table">
        {{ isAll ? "Свернуть таблицу" : "Раскрыть таблицу полностью" }}
      </div>
    </tfoot>
  </table>
</template>

<script setup lang="ts">
import { ref, computed, Ref } from "vue";
import { i18n } from "@/i18n";
import useTableSort from "@/compossables/useTableSort";
import {
  IStatisticTable,
  StatisticTableRows,
  SortMethod,
} from "@/types/dashboard/tables";

const currentPage = ref(0);
const isActive = ref("");
const isAll = ref(false);
const sortOption: Ref<[SortMethod, StatisticTableRows]> = ref([
  "increase",
  "id",
]);

const setSortOption = (row: StatisticTableRows) => {
  sortOption.value = [
    sortOption.value[0] === "increase" ? "descending" : "increase",
    row,
  ];
};

const rowNamePairs = computed((): StatisticTableRows[] => {
  const pairs = table[0];
  const keys = Object.keys(pairs) as StatisticTableRows[];

  let start = 0;
  let end = 0;
  if (currentPage.value === 7) {
    start = currentPage.value + currentPage.value;
    end = currentPage.value + currentPage.value + 2;
  } else {
    start = currentPage.value + (currentPage.value + 1);
    end = currentPage.value + (currentPage.value + 1) + 2;
  }

  return keys.slice(start, end);
});

const visibaleRows = computed(() => {
  if (isAll.value) {
    return sortedTable.value;
  } else {
    return sortedTable.value.slice(0, 4);
  }
});

const table: IStatisticTable[] = [
  {
    id: 1,
    pull: 160,
    issued_loans: 30,
    active_loans: 105,
    repaid_loans: 3,
    overduce_loans: 7,
    trade_loans: 6,
    sold_loans: 2,
    issued_loans_summ: 670000,
    active_loans_summ: 100000,
    repaid_loans_summ: 100000,
    overduce_loans_summ: 100000,
    trade_loans_summ: 100000,
    sold_loans_summ: 100000,
    profit: 100000,
    roi: 60,
  },
  {
    id: 2,
    pull: 190,
    issued_loans: 24,
    active_loans: 156,
    repaid_loans: 3,
    overduce_loans: 7,
    trade_loans: 6,
    sold_loans: 2,
    issued_loans_summ: 670000,
    active_loans_summ: 100000,
    repaid_loans_summ: 100000,
    overduce_loans_summ: 100000,
    trade_loans_summ: 100000,
    sold_loans_summ: 100000,
    profit: 100000,
    roi: 60,
  },
  {
    id: 3,
    pull: 33,
    issued_loans: 7,
    active_loans: 25,
    repaid_loans: 3,
    overduce_loans: 7,
    trade_loans: 6,
    sold_loans: 2,
    issued_loans_summ: 670000,
    active_loans_summ: 100000,
    repaid_loans_summ: 100000,
    overduce_loans_summ: 100000,
    trade_loans_summ: 100000,
    sold_loans_summ: 100000,
    profit: 100000,
    roi: 60,
  },
  {
    id: 4,
    pull: 11,
    issued_loans: 3,
    active_loans: 7,
    repaid_loans: 3,
    overduce_loans: 7,
    trade_loans: 6,
    sold_loans: 2,
    issued_loans_summ: 670000,
    active_loans_summ: 100000,
    repaid_loans_summ: 100000,
    overduce_loans_summ: 100000,
    trade_loans_summ: 100000,
    sold_loans_summ: 100000,
    profit: 100000,
    roi: 60,
  },
  {
    id: 5,
    pull: 43,
    issued_loans: 11,
    active_loans: 10,
    repaid_loans: 3,
    overduce_loans: 7,
    trade_loans: 6,
    sold_loans: 2,
    issued_loans_summ: 670000,
    active_loans_summ: 100000,
    repaid_loans_summ: 100000,
    overduce_loans_summ: 100000,
    trade_loans_summ: 100000,
    sold_loans_summ: 100000,
    profit: 100000,
    roi: 60,
  },
  {
    id: 6,
    pull: 22,
    issued_loans: 2,
    active_loans: 105,
    repaid_loans: 3,
    overduce_loans: 7,
    trade_loans: 6,
    sold_loans: 2,
    issued_loans_summ: 670000,
    active_loans_summ: 100000,
    repaid_loans_summ: 100000,
    overduce_loans_summ: 100000,
    trade_loans_summ: 100000,
    sold_loans_summ: 100000,
    profit: 100000,
    roi: 60,
  },
  {
    id: 7,
    pull: 23,
    issued_loans: 13,
    active_loans: 105,
    repaid_loans: 3,
    overduce_loans: 7,
    trade_loans: 6,
    sold_loans: 2,
    issued_loans_summ: 670000,
    active_loans_summ: 100000,
    repaid_loans_summ: 100000,
    overduce_loans_summ: 100000,
    trade_loans_summ: 100000,
    sold_loans_summ: 100000,
    profit: 100000,
    roi: 60,
  },
  {
    id: 8,
    pull: 44,
    issued_loans: 13,
    active_loans: 105,
    repaid_loans: 3,
    overduce_loans: 7,
    trade_loans: 6,
    sold_loans: 2,
    issued_loans_summ: 670000,
    active_loans_summ: 100000,
    repaid_loans_summ: 100000,
    overduce_loans_summ: 100000,
    trade_loans_summ: 100000,
    sold_loans_summ: 100000,
    profit: 100000,
    roi: 60,
  },
];

const sortedTable = computed(() =>
  useTableSort(table, sortOption.value[0], sortOption.value[1])
);
</script>

<style lang="scss" scoped>
.table {
  border: 1px solid #f2f2f2;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: none;
  table-layout: fixed;
  width: 100%;
  margin-bottom: 20px;
  border-spacing: 0;
}
.table-header {
  font-size: 14px;
  font-weight: 500;
  padding: 12px 16px;
  text-align: start;

  border-bottom: 1px solid #f2f2f2;
}

.table-footer {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  width: 780px;
  display: block;
  background: linear-gradient(
    360deg,
    rgba(165, 146, 221, 0.08) 0%,
    rgba(165, 146, 221, 0) 100%
  );
}
.open-table {
  padding: 10px 0px 8px 0px;
  cursor: pointer;
  color: #8181a5;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 15.6px */
}
.arrow-down-arrow-up-icon {
  position: relative;
  width: 2.5em;
  height: 2.5em;
  vertical-align: middle;
}
.arrow-sort-icon {
  position: relative;
  width: 1em;
  height: 1em;
  cursor: pointer;
}

.arrows-table {
  position: relative;
}
.arrows-table1 {
  border-radius: 24px;
  padding: 4px;
  border: none;
  width: 30px;
  height: 30px;
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  &:hover {
    border-radius: 24px;
    background: #f5f7f9;
    display: flex;

    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  &:hover path {
    stroke: #131a29;
  }
  &_disable {
    & path {
      stroke: #d1d1d6 !important;
    }
    background: transparent !important;
    cursor: not-allowed !important;
  }
}
.arrows {
  gap: 0.25em;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  justify-content: end;
}
.table-body {
  &_value {
    font-size: 12px;
    padding: 12px 16px;
    //border: 1px solid #eee;
    text-align: left;
  }
  &_value-id {
    text-decoration: underline;
    line-height: 1.33em;
    color: rgba(87, 126, 247, 1);
    cursor: pointer;
    &:hover {
      text-decoration: none;
    }
  }
  &_value-first-row {
    padding-top: 27px;
  }

  &_value-last {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
  }
  &_even {
    background: linear-gradient(
        rgba(165, 146, 221, 0.04),
        rgba(165, 146, 221, 0.04)
      ),
      #fff;
  }
  .table-body_devider {
    height: 15px;
  }
  .eye-icon {
    cursor: pointer;
    width: 22px;
    margin-right: 5px;
  }
}
</style>
