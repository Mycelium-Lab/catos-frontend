<template>
  <default-desktop>
    <template v-slot:title> Дашбоард </template>
    <template v-slot:body>
      <div class="frame-div">
        <ul>
          <li v-for="n in 4" :key="n">
            <dashboard-card :data="rows" :serial="n"></dashboard-card>
          </li>
        </ul>
      </div>
    </template>
  </default-desktop>
</template>

<script setup lang="ts">
// @ts-ignore
import defaultDesktop from "@/components/layouts/default-desktop.vue";
// @ts-ignore
import dashboardCard from "@/components/dashboard/desktop/dashboard-card.vue";
const rows = [
  {
    first: "пул",
    last: "Выдано займов",
    firstValue: [160, 190, 33, 11],
    lastValue: [30, 24, 7, 3],
  },
  {
    first: "Займов активно",
    last: "Займов погашено",
    firstValue: [105, 156, 25, 7],
    lastValue: [3, 10, 0, 0],
  },
  {
    first: "Займов просрочено",
    last: "Займов на продаже",
    firstValue: [7, 3, 1, 0],
    lastValue: [6, 2, 0, 1],
  },
  {
    first: "Займов продано",
    last: "Выдано займов (сумма)",
    firstValue: [2, 2, 0, 0],
    lastValue: ["670 000 TON", "890 000 TON", "120 00 TON", "67 00 TON"],
  },
  {
    first: "Займов активно (сумма)",
    last: "Займов погашено (сумма)",
    firstValue: ["100 000 TON", "100 000 TON", "100 00 TON", "100 00 TON"],
    lastValue: ["100 000 TON", "100 000 TON", "100 00 TON", "100 00 TON"],
  },
  {
    first: "Займов просрочено (сумма)",
    last: "Займов на продаже (сумма)",
    firstValue: ["100 000 TON", "100 000 TON", "100 00 TON", "100 00 TON"],
    lastValue: ["100 000 TON", "100 000 TON", "100 00 TON", "100 00 TON"],
  },
  {
    first: "Займов продано (сумма)",
    last: "Прибыль",
    firstValue: ["100 000 TON", "100 000 TON", "100 00 TON", "100 00 TON"],
    lastValue: ["100 000 TON", "100 000 TON", "100 00 TON", "100 00 TON"],
  },
  {
    first: "Прибыль",
    last: "ROI",
    firstValue: ["100 000 TON", "100 000 TON", "100 00 TON", "100 00 TON"],
    lastValue: ["60%", "60%", "60%", "60%"],
  },
];
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0em;
  display: flex;
  flex-wrap: wrap;
  gap: 58px 20px;
}

.frame-div,
.percent-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}

.frame-div {
  flex-direction: column;
  align-items: flex-start;
  gap: 0.63em;
}
</style>
