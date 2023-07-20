<template>
  <canvas
    :id="id"
    class="m-t-15 m-b-15 myChart"
    width="542"
    height="200"
  ></canvas>
</template>

<script setup lang="ts">
// @ts-ignore
import Chart from "chart.js";
import { onMounted } from "vue";
const { id, chartPairs, variant } = defineProps({
  id: { type: String, required: true },
  chartPairs: { type: Array, required: true },
  variant: {
    type: Object,
    default: {
      value: "token",
      type: "pair",
    },
  },
});
onMounted(() => {
  // @ts-ignore
  var ctx12 = document.getElementById(id).getContext("2d");
  var gradientProfitBg = ctx12.createLinearGradient(0, 0, 0, 280);
  gradientProfitBg.addColorStop(0, "rgba(121,154,243,0.20000000298023224)");
  gradientProfitBg.addColorStop(1, "rgba(255,255,255,0)");

  var gradientIncomeBg = ctx12.createLinearGradient(0, 0, 0, 280);
  gradientIncomeBg.addColorStop(0, "rgba(138,241,185,0.20000000298023224)");
  gradientIncomeBg.addColorStop(1, "rgba(255,255,255,0)");

  var gradientConsumption = ctx12.createLinearGradient(0, 0, 0, 280);
  gradientConsumption.addColorStop(0, "rgba(248,196,93,255)");
  gradientConsumption.addColorStop(1, "rgba(250,208,108,255)");

  var gradientConsumptionBG = ctx12.createLinearGradient(0, 0, 0, 280);
  gradientConsumptionBG.addColorStop(0, "rgba(248,196,93,0.20000000298023224)");
  gradientConsumptionBG.addColorStop(1, "rgba(255,255,255,0)");

  var gradientRoiBorder = ctx12.createLinearGradient(0, 0, 0, 280);
  gradientRoiBorder.addColorStop(0, "rgba(168,101,255,0.25)");
  gradientRoiBorder.addColorStop(1, "rgba(228,194,255,0.25)");

  var gradientRoiBgPoint = ctx12.createLinearGradient(0, 0, 0, 280);
  gradientRoiBgPoint.addColorStop(0, "rgba(168,101,255, 1)");
  gradientRoiBgPoint.addColorStop(1, "rgba(228,194,255, 1)");

  var gradientRoiBg = ctx12.createLinearGradient(0, 0, 0, 280);
  gradientRoiBg.addColorStop(0, "rgba(164,147,220, 0.20000000298023224)");
  gradientRoiBg.addColorStop(1, "rgba(255,255,255,0)");

  var gradientOverdueBg = ctx12.createLinearGradient(0, 0, 0, 280);
  gradientOverdueBg.addColorStop(0, "rgba(255,0,0, 0.2)");
  gradientOverdueBg.addColorStop(1, "rgba(255,255,255,0");

  var myChart = document.getElementById(id);
  var config = {
    type: "bar",
    data: {
      labels: [
        "00:00",
        "03:00",
        "06:00",
        "09:00",
        "12:00",
        "15:00",
        "18:00",
        "21:00",
      ],
      datasets:
        chartPairs.length === 1 || chartPairs[0] === chartPairs[1]
          ? [
              {
                label:
                  chartPairs[0] === "profit"
                    ? "Прибыль"
                    : chartPairs[0] === "income"
                    ? "Доход"
                    : chartPairs[0] === "consumption"
                    ? "Расход"
                    : chartPairs[0] === "issued"
                    ? "Выдано"
                    : chartPairs[0] === "get"
                    ? "Выдано"
                    : chartPairs[0] === "users"
                    ? "Пользователей"
                    : "ROI",
                data: [20, 28, 37, 29, 38, 42, 45, 33, 20],
                pointBackgroundColor:
                  chartPairs[0] === "profit" ||
                  chartPairs[0] === "closed" ||
                  chartPairs[0] === "free" ||
                  chartPairs[0] === "get"
                    ? "rgba(87,126,247,96)"
                    : chartPairs[0] === "income" || chartPairs[0] === "all"
                    ? "rgba(138, 241,185,100)"
                    : chartPairs[0] === "consumption"
                    ? gradientConsumption
                    : chartPairs[0] === "overdue" ||
                      chartPairs[0] === "noReturn"
                    ? "rgba(254, 1, 1, 1)"
                    : gradientRoiBgPoint,
                pointBorderColor:
                  chartPairs[0] === "profit" ||
                  chartPairs[0] === "closed" ||
                  chartPairs[0] === "free" ||
                  chartPairs[0] === "get"
                    ? "rgba(167,187,250,255)"
                    : chartPairs[0] === "income" || chartPairs[0] === "all"
                    ? "rgba(190,244,216,100)"
                    : chartPairs[0] === "consumption"
                    ? "rgba(254,244,219,255)"
                    : chartPairs[0] === "overdue" ||
                      chartPairs[0] === "noReturn"
                    ? "rgba(236, 118, 120, 225)"
                    : "rgba(201,194,230, 255)",

                borderColor:
                  chartPairs[0] === "profit" ||
                  chartPairs[0] === "closed" ||
                  chartPairs[0] === "free" ||
                  chartPairs[0] === "get"
                    ? "rgba(94,129,244,100)"
                    : chartPairs[0] === "income" || chartPairs[0] === "all"
                    ? "rgba(138, 241,185,100)"
                    : chartPairs[0] === "consumption"
                    ? "rgba(249,203,102,255)"
                    : chartPairs[0] === "overdue" ||
                      chartPairs[0] === "noReturn"
                    ? "rgba(255, 0, 0, 1)"
                    : "rgba(168,101,253, 255)",
                backgroundColor:
                  chartPairs[0] === "profit" ||
                  chartPairs[0] === "closed" ||
                  chartPairs[0] === "free"
                    ? gradientProfitBg
                    : chartPairs[0] === "income" || chartPairs[0] === "all"
                    ? gradientIncomeBg
                    : chartPairs[0] === "consumption"
                    ? gradientConsumptionBG
                    : chartPairs[0] === "overdue" ||
                      chartPairs[0] === "noReturn"
                    ? gradientOverdueBg
                    : gradientRoiBg,
                type: "line",
                order: 0,
                yAxisID: "left-y-axis",
              },
            ]
          : [
              {
                label:
                  chartPairs[0] === "profit"
                    ? "Прибыль"
                    : chartPairs[0] === "income"
                    ? "Доход"
                    : chartPairs[0] === "consumption"
                    ? "Расход"
                    : chartPairs[0] === "issued"
                    ? "Выдано"
                    : chartPairs[0] === "get"
                    ? "Выдано"
                    : chartPairs[0] === "users"
                    ? "Пользователей"
                    : "ROI",
                data: [20, 28, 37, 29, 38, 42, 45, 33, 20],
                pointBackgroundColor:
                  chartPairs[0] === "profit" ||
                  chartPairs[0] === "closed" ||
                  chartPairs[0] === "free" ||
                  chartPairs[0] === "get"
                    ? "rgba(87,126,247,96)"
                    : chartPairs[0] === "income" || chartPairs[0] === "all"
                    ? "rgba(138, 241,185,100)"
                    : chartPairs[0] === "consumption"
                    ? gradientConsumption
                    : chartPairs[0] === "overdue" ||
                      chartPairs[0] === "noReturn"
                    ? "rgba(254, 1, 1, 1)"
                    : gradientRoiBgPoint,
                pointBorderColor:
                  chartPairs[0] === "profit" ||
                  chartPairs[0] === "closed" ||
                  chartPairs[0] === "free" ||
                  chartPairs[0] === "get"
                    ? "rgba(167,187,250,255)"
                    : chartPairs[0] === "income" || chartPairs[0] === "all"
                    ? "rgba(190,244,216,100)"
                    : chartPairs[0] === "consumption"
                    ? "rgba(254,244,219,255)"
                    : chartPairs[0] === "overdue" ||
                      chartPairs[0] === "noReturn"
                    ? "rgba(254, 1, 1, 1)"
                    : "rgba(201,194,230, 255)",

                borderColor:
                  chartPairs[0] === "profit" ||
                  chartPairs[0] === "closed" ||
                  chartPairs[0] === "free" ||
                  chartPairs[0] === "get"
                    ? "rgba(94,129,244,100)"
                    : chartPairs[0] === "income" || chartPairs[0] === "all"
                    ? "rgba(138, 241,185,100)"
                    : chartPairs[0] === "consumption"
                    ? "rgba(249,203,102,255)"
                    : chartPairs[0] === "overdue" ||
                      chartPairs[0] === "noReturn"
                    ? "rgba(254, 1, 1, 1)"
                    : "rgba(168,101,253, 255)",
                backgroundColor:
                  chartPairs[0] === "profit" ||
                  chartPairs[0] === "closed" ||
                  chartPairs[0] === "free"
                    ? gradientProfitBg
                    : chartPairs[0] === "income" || chartPairs[0] === "all"
                    ? gradientIncomeBg
                    : chartPairs[0] === "consumption"
                    ? gradientConsumptionBG
                    : chartPairs[0] === "overdue" ||
                      chartPairs[0] === "noReturn"
                    ? gradientOverdueBg
                    : gradientRoiBg,
                type: "line",
                order: 0,
                yAxisID: "left-y-axis",
              },
              variant.type === "pair"
                ? {
                    label:
                      chartPairs[1] === "profit" ||
                      chartPairs[1] === "closed" ||
                      chartPairs[1] === "free"
                        ? "Прибыль"
                        : chartPairs[1] === "income" || chartPairs[1] === "all"
                        ? "Доход"
                        : chartPairs[1] === "consumption"
                        ? "Расход"
                        : "ROI",
                    data: [1, 3, 2, 5, 1, 9, 10, 14, 5],
                    pointBackgroundColor:
                      chartPairs[1] === "profit" ||
                      chartPairs[1] === "closed" ||
                      chartPairs[1] === "free"
                        ? "rgba(87,126,247,96)"
                        : chartPairs[1] === "income" || chartPairs[1] === "all"
                        ? "rgba(138, 241,185,100)"
                        : chartPairs[1] === "consumption"
                        ? gradientConsumption
                        : chartPairs[1] === "overdue" ||
                          chartPairs[1] === "noReturn"
                        ? "rgba(254, 1, 1, 1)"
                        : gradientRoiBgPoint,
                    pointBorderColor:
                      chartPairs[1] === "profit" ||
                      chartPairs[1] === "closed" ||
                      chartPairs[1] === "free"
                        ? "rgba(167,187,250,255)"
                        : chartPairs[1] === "income" || chartPairs[1] === "all"
                        ? "rgba(190,244,216,100)"
                        : chartPairs[1] === "consumption"
                        ? "rgba(254,244,219,255)"
                        : chartPairs[1] === "overdue" ||
                          chartPairs[1] === "noReturn"
                        ? "rgba(254, 1, 1, 1)"
                        : "rgba(201,194,230, 255)",

                    borderColor:
                      chartPairs[1] === "profit" ||
                      chartPairs[1] === "closed" ||
                      chartPairs[1] === "free"
                        ? "rgba(94,129,244,100)"
                        : chartPairs[1] === "income" || chartPairs[1] === "all"
                        ? "rgba(138, 241,185,100)"
                        : chartPairs[1] === "consumption"
                        ? "rgba(249,203,102,255)"
                        : chartPairs[1] === "overdue" ||
                          chartPairs[1] === "noReturn"
                        ? "rgba(254, 1, 1, 1)"
                        : "rgba(168,101,253, 255)",
                    backgroundColor:
                      chartPairs[1] === "profit" ||
                      chartPairs[1] === "closed" ||
                      chartPairs[1] === "free"
                        ? gradientProfitBg
                        : chartPairs[1] === "income" || chartPairs[1] === "all"
                        ? gradientIncomeBg
                        : chartPairs[1] === "consumption"
                        ? gradientConsumptionBG
                        : chartPairs[1] === "overdue" ||
                          chartPairs[1] === "noReturn"
                        ? gradientOverdueBg
                        : gradientRoiBg,
                    type: "line",
                    order: 0,
                    yAxisID: "right-y-axis",
                  }
                : {},
            ],
    },
    options: {
      scaleShowVerticalLines: false,
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        xAxes: [
          {
            //barPercentage: 1,
            categoryPercentage: 0.2,
            barThickness: 20,
            maxBarThickness: 20,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            scaleLabel: {
              display: true,
              labelString: "Период",
              fontStyle: "bold",
              fontSize: 14,
            },
          },
        ],
        yAxes: [
          {
            id: "left-y-axis",
            type: "linear",
            position: "left",
            gridLines: {
              display: true,
              drawBorder: false,
            },
            ticks: {
              display: true,
            },
            scaleLabel: {
              display: true,
              labelString:
                variant.value === "users"
                  ? "Кол-во пользователей"
                  : variant.value === "loans"
                  ? "Кол-во займов, шт"
                  : "TON",
              fontStyle: "bold",
              fontSize: 14,
            },
          },
        ],
      },
      elements: {
        line: {
          borderWidth: 2,
        },
        point: {
          radius: 5,
          borderWidth: 4,
        },
      },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: true,
      },
    },
  };
  if (variant.type === "pair" && variant.value !== "loans") {
    config.options.scales.yAxes[1] = {
      id: "right-y-axis",
      type: "linear",
      position: "right",
      gridLines: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: true,
      },
      scaleLabel: {
        display: true,
        labelString: "TON",
        fontStyle: "bold",
        fontSize: 15,
      },
    };
  }

  if (variant.type === "multi") {
    config.data.datasets[1] = {
      label:
        chartPairs[1] === "profit" ||
        chartPairs[1] === "closed" ||
        chartPairs[1] === "free"
          ? "Прибыль"
          : chartPairs[1] === "income" || chartPairs[1] === "all"
          ? "Доход"
          : chartPairs[1] === "consumption"
          ? "Расход"
          : chartPairs[1] === "issued"
          ? "Выданных"
          : chartPairs[1] === "repaid"
          ? "Погашено"
          : "ROI",
      data: [11, 13, 12, 15, 11, 19, 10, 14, 15],
      pointBackgroundColor:
        chartPairs[1] === "profit" ||
        chartPairs[1] === "closed" ||
        chartPairs[1] === "free"
          ? "rgba(87,126,247,96)"
          : chartPairs[1] === "income" || chartPairs[1] === "all"
          ? "rgba(138, 241,185,100)"
          : chartPairs[1] === "consumption"
          ? gradientConsumption
          : chartPairs[1] === "overdue" || chartPairs[1] === "noReturn"
          ? "rgba(254, 1, 1, 1)"
          : gradientRoiBgPoint,
      pointBorderColor:
        chartPairs[1] === "profit" ||
        chartPairs[1] === "closed" ||
        chartPairs[1] === "free"
          ? "rgba(167,187,250,255)"
          : chartPairs[1] === "income" || chartPairs[1] === "all"
          ? "rgba(190,244,216,100)"
          : chartPairs[1] === "consumption"
          ? "rgba(254,244,219,255)"
          : chartPairs[1] === "overdue" || chartPairs[1] === "noReturn"
          ? "rgba(254, 1, 1, 1)"
          : "rgba(201,194,230, 255)",

      borderColor:
        chartPairs[1] === "profit" ||
        chartPairs[1] === "closed" ||
        chartPairs[1] === "free"
          ? "rgba(94,129,244,100)"
          : chartPairs[1] === "income" || chartPairs[1] === "all"
          ? "rgba(138, 241,185,100)"
          : chartPairs[1] === "consumption"
          ? "rgba(249,203,102,255)"
          : chartPairs[1] === "overdue" || chartPairs[1] === "noReturn"
          ? "rgba(254, 1, 1, 1)"
          : "rgba(168,101,253, 255)",
      backgroundColor:
        chartPairs[1] === "profit" ||
        chartPairs[1] === "closed" ||
        chartPairs[1] === "free"
          ? gradientProfitBg
          : chartPairs[1] === "income" || chartPairs[1] === "all"
          ? gradientIncomeBg
          : chartPairs[1] === "consumption"
          ? gradientConsumptionBG
          : chartPairs[1] === "overdue" || chartPairs[1] === "noReturn"
          ? gradientOverdueBg
          : gradientRoiBg,
      type: "line",
      order: 0,
      yAxisID: "left-y-axis",
    };
    config.data.datasets[2] = {
      label:
        chartPairs[2] === "profit" ||
        chartPairs[2] === "closed" ||
        chartPairs[2] === "free"
          ? "Прибыль"
          : chartPairs[2] === "income" || chartPairs[2] === "all"
          ? "Доход"
          : chartPairs[2] === "consumption"
          ? "Расход"
          : chartPairs[2] === "issued"
          ? "Выданных"
          : chartPairs[2] === "sale"
          ? "Продано"
          : "ROI",
      data: [1, 3, 2, 5, 1, 9, 10, 14, 5],
      pointBackgroundColor:
        chartPairs[2] === "profit" ||
        chartPairs[2] === "closed" ||
        chartPairs[2] === "free"
          ? "rgba(87,126,247,96)"
          : chartPairs[2] === "income" ||
            chartPairs[2] === "all" ||
            chartPairs[2] === "sale"
          ? "rgba(138, 241,185,100)"
          : chartPairs[2] === "consumption"
          ? gradientConsumption
          : chartPairs[2] === "overdue" || chartPairs[2] === "noReturn"
          ? "rgba(254, 1, 1, 1)"
          : gradientRoiBgPoint,
      pointBorderColor:
        chartPairs[2] === "profit" ||
        chartPairs[2] === "closed" ||
        chartPairs[2] === "free"
          ? "rgba(167,187,250,255)"
          : chartPairs[2] === "income" ||
            chartPairs[2] === "all" ||
            chartPairs[2] === "sale"
          ? "rgba(190,244,216,100)"
          : chartPairs[2] === "consumption"
          ? "rgba(254,244,219,255)"
          : chartPairs[2] === "overdue" || chartPairs[2] === "noReturn"
          ? "rgba(254, 1, 1, 1)"
          : "rgba(201,194,230, 255)",

      borderColor:
        chartPairs[2] === "profit" ||
        chartPairs[2] === "closed" ||
        chartPairs[2] === "free"
          ? "rgba(94,129,244,100)"
          : chartPairs[2] === "income" ||
            chartPairs[2] === "all" ||
            chartPairs[2] === "sale"
          ? "rgba(138, 241,185,100)"
          : chartPairs[2] === "consumption"
          ? "rgba(249,203,102,255)"
          : chartPairs[2] === "overdue" || chartPairs[2] === "noReturn"
          ? "rgba(254, 1, 1, 1)"
          : "rgba(168,101,253, 255)",
      backgroundColor:
        chartPairs[2] === "profit" ||
        chartPairs[2] === "closed" ||
        chartPairs[2] === "free"
          ? gradientProfitBg
          : chartPairs[2] === "income" ||
            chartPairs[2] === "all" ||
            chartPairs[2] === "sale"
          ? gradientIncomeBg
          : chartPairs[2] === "consumption"
          ? gradientConsumptionBG
          : chartPairs[2] === "overdue" || chartPairs[2] === "noReturn"
          ? gradientOverdueBg
          : gradientRoiBg,
      type: "line",
      order: 0,
      yAxisID: "left-y-axis",
    };
    config.data.datasets[3] = {
      label:
        chartPairs[3] === "profit" ||
        chartPairs[3] === "closed" ||
        chartPairs[3] === "free"
          ? "Прибыль"
          : chartPairs[3] === "income" || chartPairs[3] === "all"
          ? "Доход"
          : chartPairs[3] === "consumption"
          ? "Расход"
          : chartPairs[3] === "issued"
          ? "Выданных"
          : chartPairs[3] === "forSales"
          ? "На продаже"
          : "ROI",
      data: [21, 13, 12, 25, 11, 29, 17, 24, 25],
      pointBackgroundColor:
        chartPairs[3] === "profit" ||
        chartPairs[3] === "closed" ||
        chartPairs[3] === "free"
          ? "rgba(87,126,247,96)"
          : chartPairs[3] === "income" || chartPairs[3] === "all"
          ? "rgba(138, 241,185,100)"
          : chartPairs[3] === "consumption" || chartPairs[3] === "forSales"
          ? gradientConsumption
          : chartPairs[3] === "overdue" || chartPairs[3] === "noReturn"
          ? "rgba(254, 1, 1, 1)"
          : gradientRoiBgPoint,
      pointBorderColor:
        chartPairs[3] === "profit" ||
        chartPairs[3] === "closed" ||
        chartPairs[3] === "free"
          ? "rgba(167,187,250,255)"
          : chartPairs[3] === "income" || chartPairs[3] === "all"
          ? "rgba(190,24,216,100)"
          : chartPairs[3] === "consumption" || chartPairs[3] === "forSales"
          ? "rgba(254,244,219,255)"
          : chartPairs[3] === "overdue" || chartPairs[3] === "noReturn"
          ? "rgba(254, 1, 1, 1)"
          : "rgba(201,194,230, 255)",

      borderColor:
        chartPairs[3] === "profit" ||
        chartPairs[3] === "closed" ||
        chartPairs[3] === "free"
          ? "rgba(94,129,244,100)"
          : chartPairs[3] === "income" || chartPairs[3] === "all"
          ? "rgba(138, 241,185,100)"
          : chartPairs[3] === "consumption" || chartPairs[3] === "forSales"
          ? "rgba(249,203,102,255)"
          : chartPairs[3] === "overdue" || chartPairs[3] === "noReturn"
          ? "rgba(254, 1, 1, 1)"
          : "rgba(168,101,253, 255)",
      backgroundColor:
        chartPairs[3] === "profit" ||
        chartPairs[3] === "closed" ||
        chartPairs[3] === "free"
          ? gradientProfitBg
          : chartPairs[3] === "income" || chartPairs[3] === "all"
          ? gradientIncomeBg
          : chartPairs[3] === "consumption" || chartPairs[3] === "forSales"
          ? gradientConsumptionBG
          : chartPairs[3] === "overdue" || chartPairs[3] === "noReturn"
          ? gradientOverdueBg
          : gradientRoiBg,
      type: "line",
      order: 0,
      yAxisID: "left-y-axis",
    };
  }

  // @ts-ignore
  window.pieChart1 = new Chart(myChart, config);
});
</script>

<style scoped></style>
