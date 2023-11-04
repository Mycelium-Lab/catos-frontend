<template>
  <div class="root">
    <div class="div2">Сортировка таблицы:</div>
    <div class="frame-wrapper">
      <div class="frame-container">
        <div class="ton-group">
          <div class="ton1">По количеству TON</div>
          <catos-checkbox variant="radiobutton"></catos-checkbox>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="ton1">По одобренному периоду</div>
      <catos-checkbox variant="radiobutton"></catos-checkbox>
    </div>
    <div class="container">
      <div class="ton1">По сроку</div>
      <catos-checkbox variant="radiobutton"></catos-checkbox>
    </div>
  </div>
</template>
<script setup lang="ts">
import catosCheckbox from "@/components/ui-kit/catos-checkbox.vue";
</script>
<style scoped>
.div2 {
  align-self: stretch;
  position: relative;
  font-size: 1em;
  line-height: 150%;
  font-weight: 500;
}
.ton1 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.ton-group {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.81em;
}
.frame-container {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-wrapper {
  width: 21.38em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.container {
  width: 21.38em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.81em;
}
.root {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
