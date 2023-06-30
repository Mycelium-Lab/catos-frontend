<template>
  <!--<div class="iphone-13-13-">
    <div class="pull"></div>
    <div class="header">
      <div class="div8">
        {{ `${curentWindow === "all" ? "Кредитные" : "Мои"} пуллы` }}
      </div>
    </div>
    <button-slider
      :style="{ position: 'relative', top: '5em' }"
      :variantIndex="2"
      :tabs="['Все пуллы', 'Мои пуллы']"
      @on-slide="toggleSlide"
    ></button-slider>
    <div class="frame-parent9">
      <div class="menu-2-parent" id="frameContainer33">
        <img class="frame-icon" alt="" src="@/assets/images/iconsfilter.svg" />

        <div class="div25" @click="toFilter">
          <span>Фильтр </span>
          <span class="span2">(1)</span>
        </div>
      </div>
      <div class="menu-2-parent" id="frameContainer34">
        <img class="menu-2-icon" alt="" src="@/assets/images/iconssort.svg" />

        <div class="div25" @click="toSort">
          <span>Сортировка </span>
          <span class="span2">(1)</span>
        </div>
      </div>
    </div>

    <div class="buttonnext1" id="buttonNextContainer1" @click="toCreatePull">
      <div class="group-container">
        <img class="group-icon" alt="" src="@/assets/images/iconsstars.svg" />

        <b class="b1">Создать пулл</b>
      </div>
    </div>

    <creditor-list
      :style="{ top: '10.5em' }"
      :variant="curentWindow"
      :key="curentWindow"
      @on-bottomsheet="(ev: any) => isBackSide = ev"
      @on-modal="() => (isBackSide = true)"
    ></creditor-list>-->
  <!--<bottomsheet v-if="isFilter || isSort" defaultState="open">
      <Filter v-if="isFilter"></Filter>
      <Sort v-if="isSort"></Sort>
    </bottomsheet>-->
  <!--<Filter v-if="isFilter"></Filter>
    <Sort v-if="isSort"></Sort>-->
  <!--<app-bar v-if="isAppBar"></app-bar>
  </div>-->
  <default-desktop>
    <template v-slot:title> Пуллы </template>
    <template v-slot:slider>
      <button-slider
        :style="{ width: '254px', margin: '0' }"
        :variantIndex="2"
        :tabs="['Все пуллы', 'Мои пуллы']"
        @on-slide="toggleSlide"
      ></button-slider>
    </template>
    <template v-slot:tools>
      <div class="buttonnext-parent">
        <button class="buttonnext" @click="() => (isСreatePull = true)">
          <div class="group-parent">
            <img
              class="frame-child"
              alt=""
              src="@/assets/images/iconsstars.svg"
            />
            <b class="b">Создать пулл</b>
          </div>
        </button>
        <!--<div class="frame-group">
          <div class="frame-container">
            <img class="frame-item" alt="" src="/frame-1817604.svg" />
            <div class="div4" @click="() => (isFilter = true)">
              <span>Фильтр </span>
              <span class="span">(1)</span>
            </div>
          </div>
          <div class="frame-container">
            <img class="menu-2-icon" alt="" src="/menu2.svg" />
            <div class="div5" @click="() => (isSort = true)">
              <span>Сортировка </span>
              <span class="span1">(1)</span>
            </div>
          </div>
        </div>-->
        <filter-board></filter-board>
      </div>
    </template>
    <template v-slot:body>
      <div class="frame-div">
        <ul>
          <li v-for="n in 5" :key="n">
            <pulls-table
              role="creditor"
              :variant="curentWindow"
              :key="curentWindow"
            ></pulls-table>
          </li>
        </ul>
      </div>

      <create-pull-desktop
        v-if="isСreatePull"
        @close="() => (isСreatePull = false)"
        @create="
          () => {
            isСreatePull = false;
            isСonfirmQr = true;
          }
        "
      ></create-pull-desktop>
      <confirm-qr-destop
        v-if="isСonfirmQr"
        @close="() => (isСonfirmQr = false)"
      >
        <template v-slot:header> Новый пулл </template>
        <template v-slot:title> Create pull </template>
        <template v-slot:subtitle>
          <p class="scan-the-qr">Scan the QR code and pay 13 512 TON with</p>
          <p class="scan-the-qr">Tonkeeper using</p>
          <a class="scan-the-qr-link">EQB5...dzE1h</a>
        </template>
        <template v-slot:action>
          <b class="ton-kepeer">Create</b>
        </template>
        <template v-slot:footer>
          <div class="we-do-not">
            By proceeding, you accept the <br />
            <a>CATOS Terms of Service</a> and <a>Privacy Policy</a>.
          </div>
        </template>
      </confirm-qr-destop>
    </template>
  </default-desktop>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import buttonSlider from "@/components/ui-kit/buttons/button-slider.vue";
import creditorList from "@/components/pulls/creditor/creditor-list.vue";
import pullsTable from "@/components/base/pulls-table.vue";
import appBar from "@/components/ui-kit/desktop/app-bar.vue";
import filterBoard from "@/components/base/desktop/filter-board.vue";

import createPullDesktop from "@/components/pulls/creditor/create-pull-desktop.vue";
import confirmQrDestop from "@/components/base/confirm-qr-destop.vue";
import DefaultDesktop from "@/components/layouts/default-desktop.vue";

const curentWindow = ref("all");

const isСreatePull = ref(false);
const isСonfirmQr = ref(false);

const router = useRouter();
const toSort = () => {
  router.push({ name: "pulls-sort" });
};
const toFilter = () => {
  router.push({ name: "pulls-filter" });
};
const toCreatePull = () => {
  router.push({ name: "pulls-create" });
};

const toggleSlide = (slideIndex: any) => {
  if (slideIndex === 0) {
    curentWindow.value = "all";
  } else if (slideIndex === 1) {
    curentWindow.value = "my";
  }
  console.log(curentWindow.value);
};
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  padding: 0em;
  display: flex;
  flex-wrap: wrap;
  gap: 38px 20px;
}
.page-title {
  position: relative;
  font-size: 1.75em;
  letter-spacing: 0.01em;
  line-height: 130%;
  font-weight: 600;
  text-align: left;
}
.div1 {
  position: relative;
  font-size: 1em;
  line-height: 130%;
  display: inline-block;
  width: 6.69em;
  flex-shrink: 0;
}
.tab1 {
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
}
.tab2 {
  display: none;
  flex-direction: row;
  padding: 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
}
.tab3 {
  border-radius: 45px;
  background-color: #fdd674;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  color: #1f1f1f;
}
.tab-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.tab {
  border-radius: 45px;
  background-color: #f6f4fc;
  border: 1px solid #eceaf2;
  display: flex;
  flex-direction: column;
  padding: 0.13em;
  align-items: flex-start;
  justify-content: flex-start;
  color: rgba(59, 59, 59, 0.75);
}
.frame-child {
  position: relative;
  width: 1.5em;
  height: 1.39em;
}
.b {
  position: relative;
  font-size: 1em;
  letter-spacing: 1px;
  line-height: 1.75em;
}
.group-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.19em;
}
.buttonnext {
  border-radius: 20px;
  background: linear-gradient(89.81deg, #9747ff, #ad6fff);
  border: 0.5px solid #fdd674;
  box-sizing: border-box;
  width: 21.38em;
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0.38em 0.5em 0em;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  &:hover {
    background: linear-gradient(73deg, #7811fe 0%, #ad6fff 100%), #445331;
  }
}
.frame-item {
  position: relative;
  width: 1.5em;
  height: 1.5em;
}
.span {
  color: #5d83f7;
}
.div4 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 0.71em;
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
.span1 {
  text-decoration: underline;
  color: #5d83f7;
}
.div5 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
}
.frame-group {
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
}
.buttonnext-parent {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
  color: #fff;
}
.page-title-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.frame-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.ton {
  position: relative;
  font-size: 1em;
  background: linear-gradient(
    38.6deg,
    #2e2c2c,
    #4b4949 67.46%,
    #131313,
    rgba(0, 0, 0, 0.94),
    #434343
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.div7 {
  position: relative;
  font-size: 0.75em;
  background: linear-gradient(#3b3b3b, #3b3b3b), #3b3b3b;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.ton-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.31em;
}
.div6 {
  border-radius: 15px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.94em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.frame-inner {
  align-self: stretch;
  flex: 1;
  position: relative;
  background-color: rgba(217, 217, 217, 0);
}
.percent-icon {
  position: relative;
  width: 0.75em;
  height: 0.75em;
  overflow: hidden;
  flex-shrink: 0;
}
.frame-parent2 {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0.75em;
}
.parent {
  align-self: stretch;
  border-radius: 20px;
  background-color: #f6f4fc;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75em;
}
.div10 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
}
.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.div11 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
  font-weight: 300;
}
.radiobutton-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.group {
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid #f6f4fc;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0.81em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.div13 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.field {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.63em;
}
.col-titles-bg {
  align-self: stretch;
  position: relative;
  border-radius: 18px;
  background-color: rgba(165, 146, 221, 0.1);
  height: 0.06em;
}
.field-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.roi {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.frame-parent4 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: 0em 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.percent-icon1 {
  position: relative;
  width: 1em;
  height: 1em;
  overflow: hidden;
  flex-shrink: 0;
}
.div21 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.notification {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f6f4fc;
  display: flex;
  flex-direction: row;
  padding: 0.94em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.frame-parent3 {
  align-self: stretch;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.88em;
}
.text {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 500;
}
.buttons-tabs {
  align-self: stretch;
  border-radius: 25px;
  background-color: rgba(87, 126, 247, 0.96);
  display: flex;
  flex-direction: row;
  padding: 0.69em 1.5em;
  align-items: center;
  justify-content: center;
}
.text-and-button {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.des-and-bbn {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f9fbff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  padding: 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
  color: #fefefe;
}
.pull-stats {
  align-self: stretch;
  border-radius: 24px;
  background-color: #fff;
  border: 1px solid #abb0bd;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1.63em 0.63em 0.63em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.88em;
}
.pull-stats-wrapper {
  position: absolute;
  height: 97.99%;
  top: 2.37%;
  bottom: -0.36%;
  left: calc(50% - 190px);
  width: 23.75em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.div22 {
  position: relative;
  font-size: 0.75em;
  display: flex;
  align-items: center;
  width: 6.17em;
  flex-shrink: 0;
}
.filtr {
  border-radius: 8.79px;
  background-color: #fff;
  border: 0.3px solid #656060;
  display: flex;
  flex-direction: row;
  padding: 0.5em;
  align-items: center;
  justify-content: center;
}
.filtr-wrapper {
  position: absolute;
  height: 5.66%;
  width: 28.95%;
  top: 0%;
  right: 68.96%;
  bottom: 94.34%;
  left: 2.09%;
  display: flex;
  flex-direction: column;
  padding: 0em 0em 0em 1.25em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.pull {
  position: relative;
  width: 23.75em;
  height: 34.25em;
}
.pull-parent {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.div108 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 600;
}
.paginationnumber {
  border-radius: 6px;
  background-color: #fff;
  border: 1px solid rgba(46, 58, 89, 0.04);
  box-sizing: border-box;
  width: 2.56em;
  height: 2.56em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.paginationnumber1 {
  border-radius: 6px;
  background: linear-gradient(#f5f9ff, #f5f9ff),
    linear-gradient(rgba(94, 129, 244, 0.1), rgba(94, 129, 244, 0.1)), #fff;
  border: 1px solid rgba(46, 58, 89, 0.04);
  box-sizing: border-box;
  width: 2.56em;
  height: 2.56em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(87, 126, 247, 0.96);
}
.numbers {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.06em 0em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
  z-index: 0;
}
.active-bg {
  position: absolute;
  margin: 0 !important;
  top: 3em;
  right: 12.62em;
  border-radius: 1px;
  background-color: #5e81f4;
  width: 2.31em;
  height: 0.13em;
  z-index: 1;
}
.buttonback-icon {
  position: relative;
  border-radius: 9px;
  width: 2.5em;
  height: 2.5em;
  z-index: 2;
}
.paginationfield {
  height: 3.5em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 1em;
  text-align: center;
}
.frame-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.88em;
  text-align: left;
}

.scan-the-qr {
  margin: 0;
  &-link {
    display: inline-block;
    color: rgba(87, 126, 247, 0.96);
    text-align: center;
    font-size: 14px;
    font-family: Inter;
    font-weight: 300;
    line-height: 10px;
    text-decoration-line: underline;
    cursor: pointer;
    padding-top: 8px;
  }
}
.ton-kepeer {
  position: relative;
  line-height: 130%;
}
.we-do-not {
  align-self: stretch;
  position: relative;
  line-height: 130%;
  font-weight: 300;
  color: rgba(59, 59, 59, 0.7);
  a {
    text-decoration: underline;
    cursor: pointer;
    color: rgba(87, 126, 247, 0.96);
  }
}
/*.pull {
  position: absolute;
  top: 0;
  left: 0;
  width: 35.19em;
  height: 20.88em;
}
.pull {
  background-color: #fff;
  width: 24.38em;
  height: 57.94em;
  overflow: hidden;
}
.div8 {
  align-self: stretch;
  position: relative;
  font-size: 1.13em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
}
.header,
.pull-stats-child {
  position: absolute;
  box-sizing: border-box;
}
.header {
  top: 3.5em;

  border-radius: 7px;
  width: 18.75em;
  display: flex;
  flex-direction: column;
  padding: 0.44em 0;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 auto;
}
.pull-stats-child {
  width: 100%;
  top: calc(50% - 258.5px);
  right: 0;
  left: 0;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 0.5px solid rgba(46, 58, 89, 0.4);
  height: 32.94em;
}
.div9 {
  position: relative;
  font-size: 0.63em;
  line-height: 0.68em;
}
.frame {
  border-radius: 8.79px;
  border: 0.3px solid #656060;
  box-sizing: border-box;
  height: 1.25em;
  display: flex;
  flex-direction: row;
  padding: 0.42em;
  align-items: center;
  justify-content: center;
}
.filtr,
.frame-inner {
  position: absolute;
  top: 0;
}
.filtr {
  left: 1em;
  background-color: #fff;
  width: 5.63em;
  display: flex;
  flex-direction: row;
  padding: 0 0.34em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-inner {
  left: 0;
  border-radius: 16px;
  background-color: #f6f4fc;
  width: 100%;

  height: 5.94em;
  overflow: hidden;
}
.div10,
.ton {
  position: relative;
}
.ton {

  background-color: red;


  background: linear-gradient(
    38.6deg,
    #2e2c2c,
    #4b4949 67.46%,
    #131313,
    rgba(0, 0, 0, 0.94),
    #434343
  );

  background-size: 100%;
  background-repeat: repeat;

  
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  font-size: 1.13em;
  line-height: 0.89em;
}
.div10 {
  font-size: 0.63em;
  line-height: 0.68em;
  font-weight: 300;
  color: rgba(59, 59, 59, 1);
}
.ton-parent {
  position: absolute;
  top: 1.13em;
  left: 2.63em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.38em;
}
.pie-chart-icon {
  position: absolute;
  top: 1.25em;
  left: 0.69em;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
}
.buttons-tabs,
.percent-icon {
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}
.buttons-tabs {
  border-radius: 15px;
  background-color: #fff;
  width: 10.5em;
  height: 4.06em;
}
.percent-icon {
  width: 0.75em;
  height: 0.75em;
}
.div11 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
}
.buttons-tabs-parent,
.frame-div,
.percent-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.buttons-tabs-parent,
.frame-div {
  flex-direction: column;
  align-items: flex-start;
  gap: 0.63em;
}
.buttons-tabs-parent {
  position: absolute;
  top: 0.94em;
  left: 0.81em;
  flex-direction: row;
  align-items: center;
  gap: 0.75em;
}
.frame-container {
  position: relative;
  width: 83.6vw;
  height: 5.94em;
}
.div14 {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  font-size: 0.75em;
  line-height: 0.83em;
  display: flex;
  align-items: center;
}
.statuspull {
  position: relative;
  width: 3.44em;
  height: 0.63em;
}
.frame-parent1,
.statuspull-wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.statuspull-wrapper {
  flex: 1;
  padding: 0.13em 0;
  color: #1cbd62;
}
.frame-parent1 {
  align-self: stretch;
  gap: 4.06em;
  width: 77vw;
  margin: 0 auto;
}
.div16 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
  font-weight: 300;
}
.frame-parent3 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4.06em;
}
.line-div {
  align-self: stretch;
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  height: 0.06em;
}
.ton-wrapper {
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0;
  align-items: flex-start;
  justify-content: flex-start;
}
.roi {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
  font-weight: 300;
}
.frame-parent2,
.roi-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.roi-wrapper {
  width: 7.19em;
  flex-direction: row;
  padding: 0.13em 0;
  box-sizing: border-box;
}
.frame-parent2 {
  width: 77vw;
  flex-direction: column;
  gap: 0.5em;
}
.percent-icon1 {
  position: relative;
  width: 1em;
  height: 1em;
  overflow: hidden;
  flex-shrink: 0;
}
.div24 {
  position: relative;
  font-size: 0.63em;
  line-height: 1em;
  font-weight: 300;
}
.frame-group,
.percent-group {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.percent-group {
  border-radius: 16px;
  background-color: #f6f4fc;
  width: 77vw;
  overflow: hidden;
  flex-direction: row;
  padding: 0.81em 0.75em;
  box-sizing: border-box;
  gap: 0.63em;
}
.frame-group {
  border-radius: 20px;
  flex-direction: column;
  padding: 0 0 0.75em;
  gap: 0.88em;
}
.text {
  position: absolute;
  top: calc(50% - 9px);
  left: calc(50% - 24.5px);
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.buttons-tabs1 {
  align-self: stretch;
  position: relative;
  border-radius: 25px;
  background-color: rgba(87, 126, 247, 0.96);
  border: 0.5px solid rgba(87, 126, 247, 0.96);
  box-sizing: border-box;
  height: 2em;
}
.text1 {
  position: absolute;
  top: 0.5em;
  left: calc(50% - 39px);
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.buttons-tabs2 {
  align-self: stretch;
  position: relative;
  border-radius: 25px;
  background-color: rgba(87, 126, 247, 0.96);
  border: 0.5px solid rgba(87, 126, 247, 0.96);
  box-sizing: border-box;
  height: 2em;
  cursor: pointer;
}
.text-and-button {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.81em;
}
.span {
  letter-spacing: 0.02em;
}
.span1 {
  letter-spacing: 0.03em;
}
.text2,
.text3 {
  position: relative;
  top: 0.5em;
  font-size: 0.88em;
  line-height: 120%;
  font-weight: 500;
}
.text2 {
  left: 1.79em;
}
.text3 {
  left: calc(50% - 41px);
  letter-spacing: 0.02em;
}
.text-and-button-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.des-and-bbn,
.pull-stats1 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.des-and-bbn {
  border-radius: 16px;
  background-color: #f9fbff;
  width: 18.75em;
  padding: 0.75em;
  box-sizing: border-box;
  align-items: flex-start;
  text-align: right;
  color: #f8f8ff;
}
.pull-stats1 {
  position: relative;
  top: 1.81em;
  align-items: center;
  gap: 0.88em;
  margin: 0px auto;
}
.pull-stats {
  position: relative;
  top: 14em;
  height: 33.56em;
  text-align: left;
  margin: 0px 24px;
}
.frame-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
}
.span2 {
  text-decoration: underline;
  color: #5d83f7;
}
.div25 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
  font-weight: 300;
}
.menu-2-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.frame-parent9,
.menu-2-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.menu-2-parent {
  gap: 0.5em;
  cursor: pointer;
}
.frame-parent9 {
  position: relative;
  top: 6em;
  width: 18.75em;
  gap: 3.75em;
  text-align: left;
  margin: 0 auto;
}
.div28 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 120%;
}
.description {
  position: absolute;
  top: 2.19em;
  left: calc(50% - 163px);
  width: 20.31em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}
.div29 {
  position: absolute;
  top: 3.8em;
  left: 32em;
  font-size: 0.63em;
  line-height: 100%;
  font-weight: 500;
  color: rgba(38, 38, 38, 0.62);
  cursor: pointer;
}
.swipe-down {
  position: absolute;
  top: 0.75em;
  left: 10.88em;
  border-radius: 25px;
  background-color: #cad0e4;
  width: 2.63em;
  height: 0.31em;
}
.div30,
.div31 {
  position: relative;
  font-size: 0.88em;
}
.div30 {
  letter-spacing: -0.01em;
  line-height: 150%;
  font-weight: 300;
}
.div31 {
  line-height: 100%;
}
.iconsedit-outline {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
}
.tag,
.tag1 {
  border-radius: 24.18px;
  box-sizing: border-box;
  height: 1.75em;
  display: flex;
  flex-direction: row;
  padding: 0.38em 0.75em;
  align-items: center;
  justify-content: center;
  gap: 0.75em;
}
.tag {
  background-color: rgba(224, 219, 238, 0.82);
}
.tag1 {
  border: 1px solid #e4e0f1;
}
.group,
.tags-brand {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
}
.tags-brand {
  width: 20.81em;
  overflow-x: auto;
  flex-direction: row;
}
.group {
  position: absolute;
  top: 5em;
  left: 1.56em;
  width: 22.31em;
  overflow: hidden;
  flex-direction: column;
  color: #2e3a59;
}
.div34 {
  position: relative;
  font-size: 0.88em;
  line-height: 100%;
  font-weight: 300;
}
.ton-kepeer {
  position: relative;
  font-size: 1em;
  letter-spacing: -1px;
  line-height: 1.75em;
}
.buttonnext,
.parent1 {
  display: flex;
  align-items: center;
}
.buttonnext {
  border-radius: 20px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  width: 20.63em;
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  flex-direction: row;
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  justify-content: center;
  text-align: center;
  color: #f3f3f3;
}
.parent1 {
  position: absolute;
  top: 48.69em;
  left: 2em;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5em;
  color: rgba(38, 38, 38, 0.62);
}
.div35 {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  letter-spacing: -0.01em;
  line-height: 150%;
}
.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.div36 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: -1px;
  line-height: 0.71em;
  font-weight: 300;
}
.radiobutton-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.81em;
}
.frame-parent11,
.frame-parent12,
.parent2 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent12 {
  align-self: stretch;
  flex-direction: row;
  gap: 1.5em;
}
.frame-parent11,
.parent2 {
  flex-direction: column;
}
.parent2 {
  width: 21.38em;
  gap: 0.75em;
}
.frame-parent11 {
  position: absolute;
  top: 10.81em;
  left: 1.5em;
  gap: 1.44em;
}
.div27,
.fill {
  position: absolute;
  box-sizing: border-box;
}
.div27 {
  top: 62.38em;
  left: 0;
  border-radius: 24px 24px 0 0;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  width: 24.38em;
  height: 0.75em;
  overflow: hidden;
  text-align: left;
}
.fill {
  top: 0.06em;
  left: 0.06em;
  border-radius: 20px;
  background-color: #fdd674;
  border: 0.5px solid rgba(0, 0, 0, 0.04);
  width: 7.38em;
  height: 2.06em;
}
.div53,
.div54 {
  position: absolute;
  top: 0.71em;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 110%;
}
.div53 {
  left: 1.68em;
  background: linear-gradient(rgba(59, 59, 59, 0.96), rgba(59, 59, 59, 0.96)),
    #000;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.div54 {
  left: 10.14em;
  display: inline-block;
  width: 5.5em;
  cursor: pointer;
}
.button-slider {
  border-radius: 20px;
  background-color: #f6f4fc;
  width: 15.38em;
  height: 2.19em;
  overflow: hidden;
  color: rgba(59, 59, 59, 0.75);

  position: relative;
  top: -27em;
  border-radius: 20px;
  background-color: #f6f4fc;
  width: 15.38em em;
  height: 2.19em;
  overflow: hidden;
  color: rgba(59, 59, 59, 0.75);
  margin: 0 auto;
}
.b1,
.group-icon {
  position: relative;
}
.group-icon {
  width: 1.5em;
  height: 1.39em;
}
.b1 {
  font-size: 1em;
  letter-spacing: 1px;
  line-height: 1.75em;
}
.buttonnext1,
.group-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.group-container {
  gap: 0.19em;
}
.buttonnext1 {
  position: relative;
  top: 8em;
  border-radius: 20px;
  background: linear-gradient(89.81deg, #9747ff, #ad6fff);
  box-sizing: border-box;
  width: 87.7vw;
  height: 3em;
  overflow: hidden;
  padding: 0.5em 0.38em 0.5em 0;
  cursor: pointer;
  color: #fff;
  margin: 0 auto;
  border: 1px solid #fdd674;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.div56 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 120%;
}
.description1 {
  position: absolute;
  top: 2.19em;
  left: calc(50% - 162.5px);
  width: 20.31em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  color: #262626;
}
.div57 {
  position: absolute;
  top: 3.8em;
  left: 32em;
  font-size: 0.63em;
  text-decoration: underline;
  letter-spacing: 0.01em;
  line-height: 100%;
  font-weight: 500;
}
.div58,
.div59 {
  position: relative;
  font-size: 0.88em;
}
.div58 {
  line-height: 150%;
  font-weight: 300;
}
.div59 {
  letter-spacing: 0.01em;
  line-height: 100%;
}
.parent8,
.tags-brand1 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
}
.parent8 {
  position: absolute;
  top: 5em;
  left: 2em;
  width: 21.88em;
  flex-direction: column;
  gap: 0.63em;
  color: #2e3a59;
}
.text4 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.03em;
  line-height: 120%;
  font-weight: 300;
}
.text-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.fields-password-and-mail2,
.fieldsinputchoise {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.fields-password-and-mail2 {
  border-radius: 16px;
  border: 0.5px solid #2e3a59;
  box-sizing: border-box;
  height: 2.5em;
  padding: 0.5em 0.75em;
  justify-content: center;
  color: rgba(46, 58, 89, 0.36);
}
.fieldsinputchoise {
  justify-content: flex-start;
  gap: 0.63em;
}
.span5,
.span8 {
  font-weight: 300;
}
.span8 {
  font-family: Inter;
  color: rgba(46, 58, 89, 0.4);
}
.div64 {
  position: relative;
  font-size: 0.95em;
  line-height: 100%;
}
.tag6 {
  border-radius: 16px;
  background-color: #f6f4fc;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  width: 9.63em;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.38em 1.5em;
  align-items: center;
  justify-content: center;
}
.span10 {
  color: #2e3a59;
}
.pro-beats {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.01em;
  line-height: 100%;
}
.tag-parent,
.tag7 {
  display: flex;
  flex-direction: row;
}
.tag7 {
  border-radius: 16px;
  background-color: #f6f4fc;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  width: 9.56em;
  height: 2.5em;
  padding: 0.38em 1.5em;
  align-items: center;
  justify-content: center;
}
.tag-parent {
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.13em;
}
.scroll-thumb-icon {
  position: relative;
  width: 20.31em;
  height: 1.63em;
}
.frame-parent18,
.parent9 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent18 {
  gap: 0.63em;
  color: rgba(46, 58, 89, 0.4);
}
.parent9 {
  gap: 0.88em;
}
.pro-beats1 {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.02em;
  line-height: 100%;
}
.tag8,
.tag9 {
  border-radius: 9px;
  background-color: #f6f4fc;
  width: 9.63em;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.38em 1.5em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.tag9 {
  width: 9.56em;
}
.fieldsinputchoise-parent {
  position: absolute;
  top: 10.69em;
  left: 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.75em;
  color: #3b3b3b;
}
.div70 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 100%;
  font-weight: 300;
}
.ton-kepeer1 {
  position: relative;
  font-size: 1em;
  line-height: 1.75em;
}
.parent13 {
  position: absolute;
  top: 48.69em;
  left: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5em;
}
.battery-icon,
.div55 {
  position: absolute;
  overflow: hidden;
}
.div55 {
  top: 63.25em;
  left: 0.06em;
  border-radius: 24px 24px 0 0;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  width: 24.31em;
  height: 56.94em;
  text-align: left;
  color: rgba(38, 38, 38, 0.62);
}
.battery-icon {
  height: 25.76%;
  width: 6.24%;
  top: 39.39%;
  right: 7.61%;
  bottom: 34.85%;
  left: 86.15%;
  max-width: 100%;
  max-height: 100%;
}
.wifi-icon {
  position: relative;
  width: 0.95em;
  height: 0.69em;
}
.mobile-signal-icon {
  position: relative;
  width: 1.06em;
  height: 0.67em;
}
.div71 {
  position: absolute;
  height: 85.71%;
  width: 100%;
  top: 9.52%;
  left: 0;
  font-size: 0.94em;
  letter-spacing: -0.02em;
  font-weight: 100;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.time-style,
.time-style1 {
  position: absolute;
  height: 47.73%;
  width: 13.85%;
  top: 27.27%;
  right: 80.77%;
  bottom: 25%;
  left: 5.38%;
}
.time-style1 {
  display: none;
  color: #fff;
}
.ui-bars-status-bars-white {
  position: absolute;
  top: 0;
  left: 0;
  width: 24.38em;
  height: 2.75em;
  color: #1c1c1c;
}
.home-icon {
  position: absolute;
  top: 0.38em;
  left: 0.75em;
  width: 1.88em;
  height: 1.88em;
  overflow: hidden;
}
.div73 {
  position: absolute;
  top: 3.6em;
  left: 1.1em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
}
.container1,
.iconsmenu {
  width: 3.38em;
  height: 3.38em;
}
.container1 {
  position: relative;
}
.iconsmenu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 0;
  color: rgba(48, 51, 55, 0.9);
}
.basket-icon {
  position: absolute;
  top: 0.38em;
  left: 0.73em;
  width: 1.88em;
  height: 1.88em;
  overflow: hidden;
}
.div74 {
  position: absolute;
  top: 3.6em;
  left: 1.02em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
}
.iconsmenu1 {
  width: 3.38em;
  height: 3.38em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
}
.news-icon {
  position: absolute;
  top: 0.38em;
  left: 0.77em;
  width: 1.88em;
  height: 1.88em;
  overflow: hidden;
}
.div75 {
  position: absolute;
  top: 3.6em;
  left: 0.2em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
}
.iconsmenu2 {
  width: 3.38em;
  height: 3.38em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
}
.div76 {
  position: absolute;
  top: 3.6em;
  left: 0.05em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
}
.iconsmenu3 {
  width: 3.38em;
  height: 3.38em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
}
.div77 {
  position: absolute;
  top: 3.6em;
  left: 0.6em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
}
.wallet-money-cash-svgrepo-com-icon {
  position: absolute;
  top: 0.41em;
  left: 0.81em;
  width: 1.81em;
  height: 1.81em;
  overflow: hidden;
}
.iconsmenu4 {
  width: 3.38em;
  height: 3.38em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 4;
}
.b2,
.mask-icon {
  position: absolute;
}
.mask-icon {
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.b2 {
  height: 61.54%;
  width: 69.23%;
  top: 21.43%;
  left: 7.14%;
  font-size: 0.41em;
  line-height: 120%;
  display: inline-block;
}
.status {
  top: 0.63em;
  left: 8em;
  z-index: 5;
  color: rgba(255, 255, 255, 0.96);
}
.status,
.status-icon,
.status-icon1,
.status1 {
  position: absolute;
  margin: 0 !important;
  width: 0.88em;
  height: 0.88em;
}
.status1 {
  top: 0.63em;
  left: 8em;
  z-index: 6;
  color: rgba(255, 255, 255, 0.96);
}
.status-icon,
.status-icon1 {
  top: 0.69em;
  left: 16.75em;
  opacity: 0;
  z-index: 7;
}
.status-icon1 {
  left: 12.5em;
  z-index: 8;
}
.nav-menu {
  position: absolute;
  top: 56em;
  left: 0;
  border-radius: 20px 20px 0 0;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  width: 24.38em;
  display: flex;
  flex-direction: row;
  padding: 0.5em 2em 1.25em;
  align-items: center;
  justify-content: space-between;
  text-align: right;
  color: rgba(93, 104, 123, 0.9);
}
.iphone-13-13- {
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 61.13em;
  overflow: hidden;
  text-align: center;
  color: #3b3b3b;
  font-family: Inter;
}
.back-side {
  position: fixed;
}

/*@media (max-width: 390px) {
    .pull-stats1 {
      margin: 0 8px;
    }
  }*/
</style>
