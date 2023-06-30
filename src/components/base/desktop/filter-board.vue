<template>
  <div class="filter-group">
    <div class="filter-container">
      <img class="filter-item" alt="" src="/frame-1817604.svg" />
      <div class="div4" @click="() => (isFilter = true)">
        <span>Фильтр </span>
        <span class="span">(1)</span>
      </div>
    </div>
    <div class="filter-container">
      <img class="menu-2-icon" alt="" src="/menu2.svg" />
      <div class="div5" @click="() => (isSort = true)">
        <span>Сортировка </span>
        <span class="span1">(1)</span>
      </div>
    </div>
  </div>
  <filter-desktop
    v-if="isFilter"
    @close="() => (isFilter = false)"
  ></filter-desktop>
  <sort-desktop v-if="isSort" @close="() => (isSort = false)"></sort-desktop>
</template>

<script setup lang="ts">
import { ref } from "vue";
import filterDesktop from "@/components/pulls/filter-desktop.vue";
import sortDesktop from "@/components/pulls/sort-desktop.vue";
const isFilter = ref(false);
const isSort = ref(false);
</script>

<style scoped>
.filter-group {
  align-self: stretch;
  border-radius: 16px;
  background-color: rgba(246, 244, 252, 0.5);
  display: flex;
  flex-direction: row;
  padding: 0em 2.5em;
  align-items: center;
  justify-content: center;
  gap: 2.5em;
  text-align: left;
  color: #3b3b3b;
  height: 40px;
}
.filter-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.filter-item {
  position: relative;
  width: 1.5em;
  height: 1.5em;
}
.div4 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 0.71em;
}
.span {
  color: #5d83f7;
}
.menu-2-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.div5 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
}
.span1 {
  text-decoration: underline;
  color: #5d83f7;
}
</style>
