<template>
  <div v-if="isMobile" class="iphone-13-13-">
    <div class="col-titles-bg"></div>
    <div class="rectangle-group">
      <div class="group-item"></div>
      <div class="div8">Все</div>
      <div class="div9">
        {{ currentWindow === "loans" ? "На продаже" : "Выданные" }}
      </div>
      <div class="div10">
        {{ currentWindow === "loans" ? "Проданные" : "Одобренные" }}
      </div>
      <div v-if="currentWindow !== 'loans'" class="div11">Отклоненные</div>
    </div>
    <div class="header">
      <div class="div12">{{ title }}</div>
    </div>
    <div class="col-titles-bg1"></div>
    <multi-button-slider
      :style="{ top: '-7.5em' }"
      @on-slide="handleSlide"
    ></multi-button-slider>
    <div class="search-parent">
      <input-data
        :style="{ width: '144px', position: 'relative' }"
        placeholder="Поиск"
        :left="true"
      >
        <template v-slot:left-icon>
          <img
            :style="{ width: '20px', height: '20px' }"
            src="@/assets/images/iconssearch.svg"
          />
        </template>
      </input-data>

      <div class="file-text-parent" id="frameContainer">
        <img class="search-icon" alt="" src="@/assets/images/iconsblank.svg" />

        <div class="div20" @click="() => (isTable = true)">Скачать</div>
      </div>
      <div class="file-text-parent" id="frameContainer1">
        <img
          class="menu-2-icon"
          alt=""
          src="@/assets/images/iconssort.svg"
          @click="toSort"
        />

        <div class="div20">(1)</div>
      </div>
    </div>
    <loans-list
      :variant="currentWindow"
      :key="currentWindow"
      @on-button-sheet="(ev: any) => (isAppBar = !ev)"
    ></loans-list>
    <action value="loans">
      <template v-slot:status-inner>
        <status-tag
          variant="reject"
          text="Просрочен повторно"
          parent="loans"
        ></status-tag>
      </template>
    </action>
  </div>
  <load-modal
    v-if="isTable && isMobile"
    variant="table"
    @on-close="() => (isTable = false)"
  ></load-modal>
  <app-bar v-if="isAppBar && isMobile"></app-bar>

  <default-desktop v-else>
    <template v-slot:title> Займы </template>
    <template v-slot:slider>
      <multi-button-slider
        :style="{ width: '385px', margin: '0em' }"
        @on-slide="handleSlide"
      ></multi-button-slider>
    </template>
    <template v-slot:tools>
      <input-data :style="{ width: '380px' }" placeholder="Поиск" :left="true">
        <template v-slot:left-icon>
          <img
            :style="{ width: '20px', height: '20px' }"
            src="@/assets/images/iconssearch.svg"
          />
        </template>
      </input-data>
      <tool-bar role="creditor" variant="loans"></tool-bar>
    </template>
    <template v-slot:body>
      <div class="rectangle-group_desktop rectangle-group">
        <div class="group-item"></div>
        <div class="div8">Все</div>
        <div class="div9">
          {{ currentWindow === "loans" ? "На продаже" : "Выданные" }}
        </div>
        <div class="div10">
          {{ currentWindow === "loans" ? "Проданные" : "Одобренные" }}
        </div>
        <div v-if="currentWindow !== 'loans'" class="div11">Отклоненные</div>
      </div>
    </template>
    <template v-slot:list>
      <ul>
        <li v-for="n in 5" :key="n">
          <loans-table
            v-if="currentWindow === 'bids'"
            :variant="currentWindow"
            :key="currentWindow"
            role="creditor"
            :status="
              n === 1
                ? 'approved'
                : n === 2
                ? 'rejected'
                : n === 3
                ? 'panding'
                : 'approved'
            "
          ></loans-table>
          <loans-table
            v-else-if="currentWindow === 'loans'"
            :variant="currentWindow"
            :key="currentWindow + n"
            role="creditor"
            :status="n === 1 ? 'repaid' : n === 2 ? 'overdue' : 'sold'"
          ></loans-table>
          <loans-table
            v-else-if="currentWindow === 'marketplace'"
            :variant="currentWindow"
            :key="currentWindow + n * 2"
            role="creditor"
            :status="n === 1 ? 'sales' : n === 2 ? 'sold' : 'sales'"
          ></loans-table>
        </li>
      </ul>
    </template>
  </default-desktop>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import inputData from "../fields/input-data.vue";
import multiButtonSlider from "../ui-kit/buttons/multi-button-slider.vue";
import defaultDesktop from "../layouts/default-desktop.vue";
import loansTable from "./creditor/loans-table.vue";
import toolBar from "../base/desktop/tool-bar.vue";

import loansList from "./loans-list.vue";
import appBar from "../ui-kit/app-bar.vue";

import loadModal from "../base/load-modal.vue";

import { useDevice } from "@/compossables/useDevice";

const { isMobile } = useDevice();

const isAppBar = ref(true);

const router = useRouter();
const currentWindow = ref("bids");

const toSort = () => {
  router.push({ name: "loans-sort" });
};

const isTable = ref(false);

const title = computed(() => {
  if (currentWindow.value === "bids") {
    return "Заявки";
  } else if (currentWindow.value === "loans") {
    return "Займы";
  } else if (currentWindow.value === "marketplace") {
    return "Маркетплейс займов";
  }
});

const handleSlide = (index: any) => {
  if (index === 0) {
    currentWindow.value = "bids";
  } else if (index === 1) {
    currentWindow.value = "loans";
  } else if (index === 2) {
    currentWindow.value = "marketplace";
  }
};
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  padding: 0em;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  position: relative;
  top: -2.5em;
}
.frame-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.88em;
  text-align: left;
}
.col-titles-bg {
  position: absolute;
  width: calc(100% - 358px);
  top: 27.63em;
  right: -0.75em;
  left: 23.13em;
  border-radius: 18px;
  background-color: #f6f4fc;
  height: 0.06em;
  transform: rotate(90deg);
  transform-origin: 0 0;
}
.group-item {
  position: absolute;
  top: 1.19em;
  left: 0;
  border-radius: 14px;
  background-color: #a592dd;
  width: 1.94em;
  height: 0.25em;
}
.div10,
.div11,
.div8,
.div9 {
  position: absolute;
  top: 0;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
}
.div8 {
  left: 0.14em;
  font-weight: 500;
  color: #3b3b3b;
}
.div10,
.div11,
.div9 {
  left: 3.14em;
}
.div10,
.div11 {
  left: 9.64em;
}
.div11 {
  left: 17.36em;
}
.rectangle-group {
  position: relative;
  top: 17em;
  /* left: 1.5em; */
  width: 87.4vw;
  height: 3em;
  text-align: right;
  overflow-x: auto;
  color: rgba(59, 59, 59, 0.7);
  margin: 0 auto;
  padding: 0px;
  &_desktop {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
  }
}
.rectangle-group::-webkit-scrollbar {
  width: 0;
}
.div12 {
  align-self: stretch;
  position: relative;
  font-size: 1.13em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
}
.header {
  position: relative;

  border-radius: 7px;
  width: 87vw;
  display: flex;
  flex-direction: column;
  padding: 0.44em 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.col-titles-bg1 {
  position: relative;
  width: 88vw;
  top: 1.8em;

  border-radius: 18px;
  background-color: rgba(246, 244, 252, 0.5);
  height: 7.69em;
  margin: 0 auto;
}
.fill {
  position: absolute;
  top: 0.13em;
  left: 0.13em;
  border-radius: 16px;
  background-color: #fdd674;
  width: 6.31em;
  height: 1.94em;
}
.div13,
.div14,
.div15 {
  position: absolute;
  top: 0.71em;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 110%;
}
.div13 {
  left: 2.14em;
  color: #3b3b3b;
}
.div14,
.div15 {
  left: 8.86em;
  display: inline-block;
  width: 5.5em;
  cursor: pointer;
}
.div15 {
  left: 15.5em;
  width: 7.71em;
}
.button-slider {
  position: absolute;
  top: 8.56em;
  left: 1.5em;
  border-radius: 20px;
  background-color: #f6f4fc;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  width: 21.38em;
  height: 2.19em;
  overflow: hidden;
  color: rgba(59, 59, 59, 0.75);
}
.search-icon {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
}
.div19 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
  font-weight: 300;
}
.search {
  border-radius: 14px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  width: 40%;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.63em 0.75em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
  color: rgba(0, 0, 0, 0.4);
}
.div20 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 0.71em;
  font-weight: 300;
}
.file-text-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
  cursor: pointer;
}
.menu-2-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.search-parent {
  position: relative;
  top: -4.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.13em;
  text-align: left;
  width: 80vw;
  color: #5d83f7;
  margin: 0 auto;
}
.checkboxdone {
  position: relative;
  border-radius: 4.14px;
  border: 0.8px solid #a592dd;
  box-sizing: border-box;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.div22,
.id-100 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 130%;
}
.div22 {
  font-weight: 600;
  display: inline-block;
  width: 8.43em;
}
.id-100 {
  color: #b5b5c3;
}
.checkboxdone-parent,
.group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.checkboxdone-parent {
  position: relative;
  top: 0.03em;
  left: 0;
  flex-direction: row;
  align-items: center;
  gap: 1em;
}
.div23 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 130%;
  font-weight: 500;
}
.statusapplication {
  position: relative;
  top: 0;
  border-radius: 24px;
  background-color: #ffeae4;
  border: 0.5px solid rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  width: 31vw;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  align-items: center;
  justify-content: center;
  color: #fe3b30;
}
.frame-group {
  position: relative;
  top: 1.25em;
  left: 1.31em;
  width: 77vw;
  height: 2.5em;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}
.cardsuser-child {
  position: absolute;
  top: 4.94em;
  left: 1.31em;
}
.col-titles-bg2 {
  align-self: stretch;
  position: relative;
  border-radius: 18px;
  background-color: rgba(165, 146, 221, 0.1);
  height: 0.06em;
}
.div24 {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.01em;
  line-height: 130%;
  font-weight: 300;
  z-index: 0;
  left: 4vw;
}
.col-titles-bg3,
.div25 {
  position: absolute;
  margin: 0 !important;
}
.col-titles-bg3 {
  top: calc(50% - 10px);
  left: 9.44em;
  border-radius: 18px;
  background-color: rgba(165, 146, 221, 0.1);
  width: 1.25em;
  height: 0.06em;
  transform: rotate(90deg);
  transform-origin: 0 0;
  z-index: 1;
}
.div25 {
  top: calc(50% - 9px);
  right: 4.14em;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 130%;
  color: #3b3b3b;
}
.field,
.field1 {
  display: flex;
  justify-content: flex-start;
}
.field1 {
  width: 100%;
  height: 1.25em;
  flex-direction: row;
  align-items: center;
  position: relative;
  gap: 1.63em;
}
.field {
  height: 2.5em;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.56em;
  width: 77vw;
}
.ton {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 9px);
  right: 3em;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 130%;
  color: #3b3b3b;
}
.field2 {
  height: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 0.56em;
  width: 77vw;
}
.span {
  letter-spacing: 0.01em;
}
.span1 {
  letter-spacing: 0.02em;
}
.span2 {
  letter-spacing: 0.03em;
}
.div28,
.div30 {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 9px);
  font-size: 0.88em;
  line-height: 130%;
}
.div28 {
  right: 4.64em;
  color: #3b3b3b;
}
.div30 {
  right: 4.43em;
  text-decoration: underline;
  letter-spacing: 0.01em;
  color: rgba(87, 126, 247, 0.96);
}
.field-parent {
  position: absolute;
  top: 5em;
  left: 1.38em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  color: #737373;
  width: 87.7vw;
}
.text {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.buttons-tabs,
.buttons-tabs1 {
  align-self: stretch;
  border-radius: 25px;
  box-sizing: border-box;
  height: 2em;
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
}
.buttons-tabs {
  background-color: rgba(87, 126, 247, 0.96);
}
.buttons-tabs1 {
  border: 0.5px solid rgba(87, 126, 247, 0.96);
  color: #555562;
}
.des-and-bbn,
.text-and-button {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.text-and-button {
  flex: 1;
  width: 70.77vw;
  gap: 0.81em;
}
.des-and-bbn {
  position: absolute;
  top: 16.25em;
  left: 1.31em;
  border-radius: 16px;
  background-color: #f9fbff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  width: 77vw;
  padding: 0.75em;
  text-align: right;
  color: #fefefe;
}
.cardsuser,
.statusapplication1 {
  border-radius: 24px;
  box-sizing: border-box;
}
.cardsuser {
  position: relative;
  background-color: rgba(251, 249, 253, 0.5);
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  width: 100%;
  height: 23.81em;
  overflow: hidden;
  flex-shrink: 0;
}
.statusapplication1 {
  position: absolute;
  top: 0;
  left: 10.88em;
  background-color: #f2ebf7;
  border: 0.5px solid rgba(0, 0, 0, 0.03);
  width: 7.5em;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  align-items: center;
  justify-content: center;
  color: #a865ff;
}
.frame-container {
  position: absolute;
  top: 1.25em;
  left: 1.31em;
  width: 18.38em;
  height: 2.5em;
}
.buttons-tabs2,
.statusapplication2 {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.buttons-tabs2 {
  align-self: stretch;
  border-radius: 25px;
  background-color: rgba(87, 126, 247, 0.96);
  height: 2em;
}
.statusapplication2 {
  position: absolute;
  top: 0;
  left: 10.88em;
  border-radius: 24px;
  background-color: #e5fee5;
  border: 0.5px solid rgba(0, 0, 0, 0.03);
  width: 7.5em;
  height: 2.5em;
  padding: 0.63em;
  color: #1cbd62;
}
.div43,
.div52,
.ton2,
.ton3 {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 9px);
  right: 6.29em;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 130%;
  color: #3b3b3b;
  z-index: 2;
}
.div52,
.ton2,
.ton3 {
  right: 3.5em;
}
.div52,
.ton3 {
  right: 4.93em;
}
.ton3 {
  right: 3.43em;
}
.cardsuser-parent {
  position: relative;
  top: 2.5em;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
  text-align: left;
  width: 87.7vw;
  margin: 0 auto;
}
.battery-icon {
  position: absolute;
  height: 25.76%;
  width: 6.24%;
  top: 39.4%;
  right: 7.61%;
  bottom: 34.85%;
  left: 86.15%;
  max-width: 100%;
  overflow: hidden;
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
.div58 {
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
.div60 {
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
}
.basket-icon {
  position: absolute;
  top: 0.38em;
  left: 0.73em;
  width: 1.88em;
  height: 1.88em;
  overflow: hidden;
}
.div61 {
  position: absolute;
  top: 3.6em;
  left: 1.02em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
  background: linear-gradient(rgba(48, 51, 55, 0.9), rgba(48, 51, 55, 0.9)),
    rgba(255, 255, 255, 0.9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
.div62 {
  position: absolute;
  top: 3.6em;
  left: 0.2em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
}
.container3,
.iconsmenu2 {
  width: 3.38em;
  height: 3.38em;
}
.container3 {
  position: relative;
  cursor: pointer;
}
.iconsmenu2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.div63 {
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
.div64 {
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
.b1,
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
.b1 {
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
  bottom: 0;
  left: calc(50% - 195px);
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
  height: 125.81em;
  overflow: hidden;
  text-align: center;
  color: #3b3b3b;
  font-family: Inter;
}
.bar-wrapper {
  border-radius: 16px;
  background: rgba(246, 244, 252, 0.5);
  display: flex;
  height: 48px;
  padding: 0px 40px;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
</style>
