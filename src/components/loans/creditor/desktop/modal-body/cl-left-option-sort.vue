<template>
  <div class="frame-parent">
    <div class="parent">
      <div class="div">Сортировка:</div>
      <div class="frame-group">
        <div class="ton-parent">
          <div class="ton">По количеству TON</div>
          <div class="radiobutton-wrapper">
            <catos-checkbox variant="radiobutton"></catos-checkbox>
          </div>
        </div>
        <div class="col-titles-bg" />
        <div class="ton-parent">
          <div class="div1">По одобренному периоду</div>
          <div class="radiobutton-wrapper">
            <catos-checkbox variant="radiobutton"></catos-checkbox>
          </div>
        </div>
        <div class="col-titles-bg" />
        <div class="ton-parent">
          <div class="ton">По номеру ID</div>
          <div class="radiobutton-wrapper">
            <catos-checkbox variant="radiobutton"></catos-checkbox>
          </div>
        </div>
        <div class="col-titles-bg" />
        <div class="ton-parent">
          <div class="ton">По изменению за день</div>
          <div class="radiobutton-wrapper">
            <catos-checkbox variant="radiobutton"></catos-checkbox>
          </div>
        </div>
        <div class="col-titles-bg" />
        <div class="ton-parent">
          <div class="div1">По имени заявителю от А до Я</div>
          <div class="radiobutton-wrapper">
            <catos-checkbox variant="radiobutton"></catos-checkbox>
          </div>
        </div>
        <div class="col-titles-bg" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import catosCheckbox from "@/components/ui-kit/catos-checkbox.vue";
</script>
<style scoped>
.div {
  align-self: stretch;
  position: relative;
  font-size: 1em;
  line-height: 150%;
  font-weight: 500;
}
.ton {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  display: flex;
  align-items: center;
  width: 12.57em;
  flex-shrink: 0;
}
.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.radiobutton-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.ton-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.col-titles-bg {
  align-self: stretch;
  position: relative;
  border-radius: 18px;
  background-color: #f6f4fc;
  height: 0.06em;
}
.div1 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.frame-group {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
}
.parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1em;
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
