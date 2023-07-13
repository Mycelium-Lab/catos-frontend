<template>
  <div class="graphsorders-mobile-01">
    <div class="master">
      <div class="content-frame">
        <div class="elements-textbox-tablerow">
          <div class="description">
            <div class="title">Финансы</div>
            <div class="subtitle">Catos</div>
          </div>
        </div>
        <div class="text-frame">
          <div class="info-right-side">
            <div class="content">
              <div class="title">1 420 000 TON</div>
              <div class="info">+1.215 %</div>
            </div>
            <img
              class="arrows-down-arrow-right"
              alt=""
              src="@/assets/images/down-arrow-right.svg"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="divider">
      <div class="line" />
    </div>
    <div class="table">
      <div class="tabs">
        <div class="tabstextactive">
          <div class="tab-title">День</div>
        </div>
        <div class="tabstextresting">
          <div class="tab-title">Неделя</div>
        </div>
        <div class="tabstextresting">
          <div class="tab-title">Месяц</div>
        </div>
      </div>
      <!--<div class="graph">
          <div class="lines">
            <img class="line-icon" alt="" src="/line.svg" />
            <img class="lines-icon" alt="" />
            <img class="lines-icon" alt="" />
            <img class="lines-icon" alt="" />
            <img class="lines-icon" alt="" />
            <img class="lines-icon" alt="" />
            <img class="lines-icon" alt="" />
          </div>
          <img class="path-3-copy-2" alt="" />
          <img class="path-3-copy" alt="" src="/path-3-copy.svg" />
          <img class="path-3-icon" alt="" src="/path-3.svg" />
          <img class="path-3-copy1" alt="" src="/path-3-copy1.svg" />
          <img class="path-3-icon" alt="" src="/path-4.svg" />
        </div>-->
      <chart id="1"></chart>

      <!--<div class="days">
          <div class="div">00:00</div>
          <div class="div">3:00</div>
          <div class="div">6:00</div>
          <div class="div">9:00</div>
          <div class="div">12:00</div>
          <div class="div">15:00</div>
          <div class="div">18:00</div>
          <div class="div">21:00</div>
        </div>-->
    </div>
    <div class="divider1">
      <div class="line" />
    </div>
    <!--<div class="slider-buttons">
        <div class="buttons-graphsordersdown">
          <img
            class="colors-graphsorders-icon"
            alt=""
            src="@/assets/images/colors-graphsorders1.svg"
          />
          <div class="div8">Прибыль</div>
        </div>
        <div class="buttons-graphsordersdown">
          <img
            class="colors-graphsorders-icon"
            alt=""
            src="@/assets/images/colors-graphsorders1.svg"
          />
          <div class="div8">Доход</div>
        </div>
        <div class="buttons-graphsordersdown2">
          <img
            class="colors-graphsorders-icon"
            alt=""
            src="@/assets/images/colors-graphsorders1.svg"
          />
          <div class="june-16">Расход</div>
        </div>
        <div class="buttons-graphsordersdown2">
          <img
            class="colors-graphsorders-icon"
            alt=""
            src="@/assets/images/colors-graphsorders1.svg"
          />
          <div class="june-16">ROI</div>
        </div>
      </div>-->
  </div>
</template>
<script setup lang="ts">
import chart from "@/components/dashboard/chart.vue";
const { serial } = defineProps({
  serial: { type: String, required: true },
});
</script>
<style scoped>
.title {
  position: relative;
  font-size: 1em;
  line-height: 130%;
  font-weight: 600;
}
.subtitle {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.13em;
}
.elements-textbox-tablerow {
  border-radius: 14px;
  background: linear-gradient(#f4f6f9, #f4f6f9), #fff;
  width: 7em;
  height: 3.69em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 0.25em 0em 0.25em 1em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: center;
}
.info {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 1px;
  line-height: 130%;
  font-weight: 600;
  color: #70ca98;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}
.arrows-down-arrow-right {
  position: relative;
  border-radius: 10px;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.info-right-side {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75em;
}
.text-frame {
  display: flex;
  flex-direction: column;
  padding: 0.63em 0em;
  align-items: flex-end;
  justify-content: center;
  text-align: right;
}
.content-frame {
  align-self: stretch;
  height: 3.69em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.master {
  width: 780px;
  display: flex;
  flex-direction: column;
  padding: 0em 1em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.line {
  align-self: stretch;
  position: relative;
  background-color: #ebeef2;
  height: 0.06em;
}
.divider {
  top: 5.06em;
  left: 0em;
  width: 780px;
  display: flex;
  flex-direction: column;
  padding: 1.25em 0em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.tab-title {
  position: relative;
  font-size: 0.88em;
  font-weight: 600;
}
.tabstextactive {
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #ececf2;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.69em 1.25em;
  align-items: flex-start;
  justify-content: flex-start;
  color: #3b3b3b;
}
.tabstextresting {
  display: flex;
  flex-direction: row;
  padding: 0.69em 1.25em;
  align-items: flex-start;
  justify-content: flex-start;
}
.tabs {
  width: 19.38em;
  display: flex;
  flex-direction: row;
  padding: 0em 0.63em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 0;
  text-align: center;
  margin: 0 auto;
}
.line-icon {
  position: relative;
  width: 48.08em;
  height: 0.06em;
}
.lines-icon {
  position: relative;
  width: 14em;
  height: 0.14em;
}
.lines {
  position: absolute;
  top: 0.41em;
  left: 0.35em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.path-3-copy-2 {
  position: absolute;
  height: 63.16%;
  width: 96.15%;
  top: 52.97%;
  right: -197.46%;
  bottom: -16.13%;
  left: 201.31%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.path-3-copy {
  position: absolute;
  height: 90.79%;
  top: 13.94%;
  bottom: -4.73%;
  left: calc(50% - 380px);
  max-height: 100%;
  width: 46.88em;
  opacity: 0.2;
  mix-blend-mode: normal;
}
.path-3-icon {
  position: absolute;
  height: 81.58%;
  width: 96.16%;
  top: 13.16%;
  right: 2.56%;
  bottom: 5.26%;
  left: 1.28%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.path-3-copy1 {
  position: absolute;
  height: 86.06%;
  top: 13.94%;
  bottom: 0%;
  left: calc(50% - 379.99px);
  max-height: 100%;
  width: 46.87em;
  opacity: 0.2;
  mix-blend-mode: normal;
}
.graph {
  position: relative;
  width: 48.75em;
  height: 14.25em;
  z-index: 1;
}
.pin-icon {
  position: absolute;
  height: 61.22%;
  width: 20.48%;
  top: 12.24%;
  right: 79.52%;
  bottom: 26.53%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.bg-icon {
  position: relative;
  width: 8.69em;
  height: 3.06em;
}
.june-16 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.b {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-family: Inter;
  color: #3b3b3b;
}
.june-16-parent {
  position: absolute;
  top: 0.44em;
  left: 3.04em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.13em;
}
.pin {
  position: absolute;
  margin: 0 !important;
  top: 10.38em;
  left: 12.5em;
  border-radius: 2px;
  width: 8.69em;
  height: 3.06em;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 2;
  color: #c1c4c9;
  font-family: Lato;
}
.pin1 {
  position: absolute;
  margin: 0 !important;
  top: 5.38em;
  left: 20.94em;
  border-radius: 2px;
  width: 8.69em;
  height: 3.06em;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 3;
  color: #c1c4c9;
  font-family: Lato;
}
.div {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 1.5em;
}
.days {
  align-self: stretch;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  padding: 0em 0em 0em 1em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2.5em;
  z-index: 4;
}
.table {
  border-radius: 16px;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 1.13em;
  color: #c1c4c9;
}
.divider1 {
  top: 27.88em;
  left: 0em;
  width: 780px;
  display: flex;
  flex-direction: column;
  padding: 1.25em 0em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.colors-graphsorders-icon {
  position: relative;
  width: 1em;
  height: 1em;
}
.div8 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 500;
}
.buttons-graphsordersdown {
  border-radius: 6px;
  background-color: rgba(165, 146, 221, 0.1);
  height: 2em;
  display: flex;
  flex-direction: row;
  padding: 0.38em 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 0.25em;
}
.buttons-graphsordersdown2 {
  border-radius: 6px;
  height: 1.5em;
  display: flex;
  flex-direction: row;
  padding: 0.38em 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 0.25em;
}
.slider-buttons {
  position: absolute;
  top: 30.44em;
  left: 0em;
  width: 48.75em;
  height: 1.5em;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  padding: 0.06em 0.63em 0.06em 1em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
  text-align: center;
}
.graphsorders-mobile-01 {
  border-radius: 12px;
  background-color: #fff;
  border: 1px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  width: 780px;
  overflow: hidden;
  flex-shrink: 0;
  padding: 1.38em 0;
  align-items: center;
}
.graphsorders-mobile-01-parent {
  position: relative;
  width: 100%;
  height: 40em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
