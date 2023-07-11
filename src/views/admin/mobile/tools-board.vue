<template>
  <div class="frame-parent">
    <div class="frame-wrapper">
      <div class="frame-group">
        <div class="frame-container">
          <img
            class="frame-child"
            alt=""
            src="@/assets/images/iconsfilter.svg"
          />
          <div class="div" @click="filter">
            <span>Фильтр </span>
            <span class="span">(1)</span>
          </div>
        </div>
        <div class="frame-container">
          <img
            class="menu-2-icon"
            alt=""
            src="@/assets/images/iconssort.svg
"
          />
          <div class="div" @click="() => toSort">
            <span>Сортировка </span>
            <span class="span">(1)</span>
          </div>
        </div>
      </div>
    </div>
    <div class="search">
      <input-data
        left
        placeholder="Поиск"
        :style="{ width: '100%', margin: '0' }"
      >
        <template v-slot:left-icon>
          <img src="@/assets/images/iconssearch.svg" width="20" />
        </template>
      </input-data>
    </div>
  </div>
</template>
<script setup lang="ts">
import inputData from "@/components/fields/input-data.vue";
const { toFilter, toSort } = defineProps({
  toFilter: {
    type: Function,
    required: true,
  },
  toSort: {
    type: Function,
    required: true,
  },
});
const filter = () => {
  return toFilter();
};
</script>
<style scoped>
.frame-child {
  position: relative;
  width: 1.5em;
  height: 1.5em;
}
.span {
  color: #5d83f7;
}
.div {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
  font-weight: 300;
}
.frame-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.menu-2-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.frame-group {
  width: 18.75em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 3.75em;
}
.frame-wrapper {
  position: absolute;
  top: 1.5em;
  left: 1.31em;
  width: 18.75em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.search-icon {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
}
.search {
  position: absolute;
  top: 4.13em;
  left: 1.31em;
  border-radius: 14px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  width: 18.75em;
  overflow: hidden;
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
  color: rgba(0, 0, 0, 0.4);
}
.frame-parent {
  position: relative;
  border-radius: 16px;
  background-color: rgba(246, 244, 252, 0.5);
  width: 100%;
  height: 8.13em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
