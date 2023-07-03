<template>
  <default-desktop>
    <template v-slot:title> Дашбоард </template>
    <template v-slot:body>
      <div class="frame-div">
        <ul>
          <li v-for="n in 5" :key="n">
            <dashboard-card></dashboard-card>
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
