<template>
  <canvas
    :id="id"
    class="m-t-15 m-b-15 myChart"
    width="342"
    height="228"
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
  var gradient = ctx12.createLinearGradient(20, 20, 0, 260);

  gradient.addColorStop(0, "rgba(94, 129, 244, 1)");
  gradient.addColorStop(1, "rgba(255, 255, 255, 1)");

  var gradient1 = ctx12.createLinearGradient(0, 0, 0, 280);

  gradient1.addColorStop(0, "rgba(138, 241, 185, 1)");
  gradient1.addColorStop(1, "rgba(255, 255, 255, 1)");
  var myChart = document.getElementById(id);
  var config = {
    type: "bar",
    data: {
      labels: ["Янв", "Март", "Июнь", "Авг", "Ноя"],
      datasets: [
        {
          label: "Market Traffic",
          data: [20, 28, 37, 29, 38, 42, 45, 33, 34, 22, 53, 22],
          borderColor: "rgba(94, 129, 244, 1)",
          backgroundColor: "white",
          type: "line",
          order: 0,
          yAxisID: "left-y-axis",
          pointBorderWidth: 2,
          pointBorderColor: "rgba(204, 216, 248, 1)",
          pointBackgroundColor: "rgba(87, 126, 247, 0.96)",
          pointRadius: 3,
        },
        {
          label: "Market Value",
          data: [22, 22, 31, 21, 34, 47, 43, 31, 38, 24, 53, 32],
          borderColor: "rgba(138, 241, 185, 1)",
          backgroundColor: gradient,
          type: "line",
          order: 0,
          yAxisID: "right-y-axis",
          pointBorderWidth: 2,
          pointBorderColor: "#BDF3D8",
          pointBackgroundColor: "#8AF1B9",
          pointRadius: 3,
        },
      ],
    },
    options: {
      scaleShowVerticalLines: false,
      responsive: true,

      //maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            //barPercentage: 1,
          },
        ],
        yAxes: [
          {
            id: "left-y-axis",
            display: false,
            position: "left",
          },
          {
            id: "right-y-axis",
            type: "linear",
            position: "right",
            display: false,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: true,
            },
          },
        ],
      },

      legend: {
        display: false,
      },
      tooltips: {
        enabled: true,
      },
    },
  };
  // @ts-ignore
  const chart = new Chart(myChart, config);
});
</script>

<style scoped></style>
