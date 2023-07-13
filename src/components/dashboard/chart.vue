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
const { id } = defineProps({
  id: { type: String, required: true },
});
onMounted(() => {
  // @ts-ignore
  var ctx12 = document.getElementById(id).getContext("2d");
  var gradient1 = ctx12.createLinearGradient(0, 0, 0, 280);
  gradient1.addColorStop(0, "rgba(121,154,243,0.20000000298023224)");
  gradient1.addColorStop(1, "rgba(255,255,255,0)");
  var gradient2 = ctx12.createLinearGradient(0, 0, 0, 280);
  gradient2.addColorStop(0, "rgba(138,241,185,0.20000000298023224)");
  gradient2.addColorStop(1, "rgba(255,255,255,0)");
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
      datasets: [
        {
          label: "Прибыль",
          data: [20, 28, 37, 29, 38, 42, 45, 33, 20],
          pointBackgroundColor: "rgba(87,126,247,96)",
          pointBorderColor: "rgba(167,187,250,255)",
          borderColor: "rgba(94,129,244,100)",
          backgroundColor: gradient1,
          type: "line",
          order: 0,
          yAxisID: "left-y-axis",
        },
        {
          label: "Доход",
          data: [1, 3, 2, 5, 1, 9, 10, 14, 5],
          pointBackgroundColor: "rgba(138, 241,185,100)",
          pointBorderColor: "rgba(190,244,216,100)",
          borderColor: "rgba(138, 241,185,100)",
          backgroundColor: gradient2,
          type: "line",
          order: 0,
          yAxisID: "right-y-axis",
        },
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
              labelString: "TON",
              fontStyle: "bold",
              fontSize: 15,
            },
          },
          {
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
        display: true,
        position: "bottom",
      },
      tooltips: {
        enabled: true,
      },
    },
  };
  // @ts-ignore
  window.pieChart1 = new Chart(myChart, config);
});
</script>

<style scoped></style>
