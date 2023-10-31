<template>
  <div class="frame-parent">
    <div class="parent">
      <div class="div">Фильтр</div>
      <div class="frame-group">
        <div class="group">
          <div class="ton">Сначала показывать по сроку</div>
          <catos-switch></catos-switch>
        </div>
        <div class="group">
          <div class="ton">Сначала показывать по кол-ву TON</div>
          <catos-switch></catos-switch>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import catosSwitch from "@/components/ui-kit/catos-switch.vue";
</script>
<style scoped>
.div {
  align-self: stretch;
  position: relative;
  font-size: 1em;
  line-height: 150%;
  font-weight: 500;
}
.handle {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 10px);
  left: calc(50% - 10px);
  border-radius: 50%;
  background-color: #fff;
  width: 1.25em;
  height: 1.25em;
  z-index: 1;
}
.overlay {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 12px);
  left: calc(50% - 12px);
  border-radius: 100px;
  background-color: #6750a4;
  width: 1.5em;
  height: 1.5em;
  display: none;
  opacity: 0.08;
  z-index: 0;
}
.handle-container {
  width: 2em;
  height: 2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
}
.switch {
  border-radius: 100px;
  background-color: #a592dd;
  width: 3.25em;
  height: 1.75em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
.group {
  width: 21.31em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75em;
}
.ton {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 150%;
}
.handle1 {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  border-radius: 50%;
  background-color: #79747e;
  width: 1em;
  height: 1em;
  z-index: 1;
}
.overlay1 {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  border-radius: 100px;
  background-color: #1c1b1f;
  width: 1em;
  height: 1em;
  display: none;
  opacity: 0.08;
  z-index: 0;
}
.switch1 {
  border-radius: 100px;
  background-color: #e7e0ec;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  width: 3.25em;
  height: 1.75em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.frame-group {
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
}
.parent {
  width: 21.38em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
}
.frame-parent {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
