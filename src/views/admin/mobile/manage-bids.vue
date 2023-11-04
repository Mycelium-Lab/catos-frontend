<template>
  <div class="div">
    <div class="pull">
      <div class="buttonback" @click="toPannel">
        <div class="div32">Назад</div>
        <img class="search-icon" alt="" src="@/assets/images/search-icon.svg" />
      </div>
      <!--<div class="paginationfield">
        <div class="numbers">
          <div class="paginationnumber">
            <div class="div1">1</div>
          </div>
          <div class="paginationnumber1">
            <div class="div1">2</div>
          </div>
          <div class="paginationnumber">
            <div class="div1">3</div>
          </div>
          <div class="paginationnumber">
            <div class="div1">4</div>
          </div>
          <div class="paginationnumber">
            <div class="div1">5</div>
          </div>
        </div>
        <div class="active-bg" />
        <img class="buttonback-icon" alt="" src="/buttonback.svg" />
      </div>-->
    </div>
    <div class="header">
      <div class="div6">Заявки</div>
    </div>
    <div class="tbs-2">
      <div class="tbs-2-child" />
      <div class="div7">Новые</div>
      <div class="div8">Одобренные</div>
      <div class="div9">Отклоненные</div>
    </div>
    <div class="pull-stats">
      <div class="pull-stats-child" />
      <div class="filtr">
        <div class="wrapper">
          <div class="div10">Заявка #1223</div>
        </div>
      </div>
      <div class="info">
        <div class="statusbar-cards1">
          <div class="buttons-tabs1">
            <div class="checkboxdone-parent">
              <catos-checkbox></catos-checkbox>
              <div class="parent">
                <div class="div15">Иван Иванов Иванович</div>
                <div class="id-12345">ID 12345</div>
              </div>
            </div>
            <div class="frame-group">
              <div class="frame-container">
                <div class="ellipse-parent">
                  <div class="frame-child" />
                  <div class="div16">В ожидании одобрения</div>
                </div>
                <img
                  class="iconchange1"
                  alt=""
                  src="/src/views/public/iconchange.svg"
                />
              </div>
              <div class="container">
                <div class="div16">11 ч</div>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-parent2">
          <div class="frame-parent3">
            <div class="frame">
              <div class="txt1">Роль:</div>
            </div>
            <div class="wrapper1">
              <div class="div21">Заемщик</div>
            </div>
          </div>
          <div class="frame-item" />
          <div class="frame-parent3">
            <div class="frame">
              <div class="txt1">Статус:</div>
            </div>
            <div class="wrapper1">
              <div class="div21">Новая зявка</div>
            </div>
          </div>
          <div class="frame-item" />
          <div class="frame-parent3">
            <div class="frame">
              <div class="txt1">Страна:</div>
            </div>
            <div class="wrapper1">
              <div class="div21">Россия</div>
            </div>
          </div>
          <div class="frame-item" />
          <div class="field">
            <div class="field1">
              <div class="div26">Анкета заявителя:</div>
              <div class="col-titles-bg" />
              <div class="div27" @click="toBlank">Открыть</div>
            </div>
          </div>
          <div class="frame-item" />
          <div class="field">
            <div class="field1">
              <div class="div26">Кошелек:</div>
              <div class="col-titles-bg" />
              <div class="div27">9jjjxxx...812300</div>
            </div>
          </div>
          <div class="frame-child2" />
        </div>
      </div>
    </div>
    <div class="pull-stats1">
      <div class="pull-stats-child" />
      <div class="filtr">
        <div class="wrapper">
          <div class="div10">Заявка #1223</div>
        </div>
      </div>
      <div class="info">
        <div class="statusbar-cards1">
          <div class="buttons-tabs1">
            <div class="checkboxdone-parent">
              <catos-checkbox></catos-checkbox>
              <div class="parent">
                <div class="div15">Иван Иванов Иванович</div>
                <div class="id-12345">ID 12345</div>
              </div>
            </div>
            <div class="frame-group">
              <div class="frame-container">
                <div class="ellipse-parent">
                  <div class="frame-child" />
                  <div class="div16">В ожидании одобрения</div>
                </div>
                <img
                  class="iconchange1"
                  alt=""
                  src="/src/views/public/iconchange.svg"
                />
              </div>
              <div class="container">
                <div class="div16">11 ч</div>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-parent2">
          <div class="frame-parent3">
            <div class="frame">
              <div class="txt1">Роль:</div>
            </div>
            <div class="wrapper1">
              <div class="div21">Заемщик</div>
            </div>
          </div>
          <div class="frame-item" />
          <div class="frame-parent3">
            <div class="frame">
              <div class="txt1">Статус:</div>
            </div>
            <div class="wrapper1">
              <div class="div21">Новая зявка</div>
            </div>
          </div>
          <div class="frame-item" />
          <div class="frame-parent3">
            <div class="frame">
              <div class="txt1">Страна:</div>
            </div>
            <div class="wrapper1">
              <div class="div21">Россия</div>
            </div>
          </div>
          <div class="frame-item" />
          <div class="field">
            <div class="field1">
              <div class="div26">Анкета заявителя:</div>
              <div class="col-titles-bg" />
              <div class="div27" @click="toBlank">Открыть</div>
            </div>
          </div>
          <div class="frame-item" />
          <div class="field">
            <div class="field1">
              <div class="div26">Кошелек:</div>
              <div class="col-titles-bg" />
              <div class="div27">9jjjxxx...812300</div>
            </div>
          </div>
          <div class="frame-child2" />
        </div>
      </div>
    </div>
    <div class="col-titles-bg-parent">
      <div class="col-titles-bg4" />
      <div class="tabs">
        <div
          :class="
            activeTab === 'borrower'
              ? 'button-slider_active button-slider'
              : 'button-slider'
          "
          @click="() => (activeTab = 'borrower')"
        >
          <div class="fill" />
          <div class="div48">Заемщики</div>
        </div>
        <div
          :class="
            activeTab === 'creditor'
              ? 'button-slider1_active button-slider1'
              : 'button-slider1'
          "
          @click="() => (activeTab = 'creditor')"
        >
          <div class="fill1" />
          <div class="div50">Кредиторы</div>
        </div>
        <div
          :class="
            activeTab === 'collector'
              ? 'button-slider2_active button-slider2'
              : 'button-slider2'
          "
          @click="() => (activeTab = 'collector')"
        >
          <div class="fill1" />
          <div class="div52">Коллекторы</div>
        </div>
        <div
          :class="
            activeTab === 'depositor'
              ? 'button-slider3_active button-slider3'
              : 'button-slider3'
          "
          @click="() => (activeTab = 'depositor')"
        >
          <div class="fill1" />
          <div class="div54">Инвесторы</div>
        </div>
      </div>
      <div class="search-parent">
        <input-data
          left
          placeholder="Поиск"
          :style="{ width: '100%', margin: '0' }"
        >
          <template v-slot:left-icon>
            <img src="@/assets/images/iconssearch.svg" width="20" />
          </template>
        </input-data>
        <div class="menu-2-parent" @click="toFilter">
          <img
            class="iconsbar-cards"
            alt=""
            src="@/assets/images/iconssort.svg"
          />
          <div class="div57">(1)</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import catosCheckbox from "@/components/ui-kit/catos-checkbox.vue";
import { useRouter } from "vue-router";
const activeTab = ref("borrower");
import inputData from "@/components/fields/input-data.vue";
const router = useRouter();
const toBlank = () => {
  router.push({ name: "manage-bids-blank" });
};
const toPannel = () => {
  router.push({ name: "admin-pannel-mobile" });
};
const toFilter = () => {
  router.push({ name: "manage-bids-filter" });
};
</script>
<style scoped lang="scss">
.div1 {
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
  background: linear-gradient(#f5f9ff, #f5f9ff), #fff;
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
  position: absolute;
  top: 78.44em;
  left: calc(50% - 144px);
  height: 3.5em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1em;
}
.pull {
  position: absolute;
  top: 0em;
  left: 0em;
  background-color: #fff;
  width: 100vw;
  height: 80em;
  overflow: hidden;
}
.div6 {
  align-self: stretch;
  position: relative;
  font-size: 1.13em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
}
.header {
  position: relative;
  top: 3.81em;

  border-radius: 7px;
  width: 18.75em;
  display: flex;
  flex-direction: column;
  padding: 0.44em 0em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.tbs-2-child {
  position: absolute;
  top: 1.19em;
  left: 0em;
  border-radius: 14px;
  background-color: #a592dd;
  width: 2.88em;
  height: 0.25em;
}
.div7 {
  position: absolute;
  top: 0em;
  left: 0em;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
  color: #3b3b3b;
}
.div8 {
  position: absolute;
  top: 0em;
  left: 5.57em;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  display: inline-block;
  width: 7.29em;
}
.div9 {
  position: absolute;
  top: 0em;
  left: 14.5em;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  display: inline-block;
  width: 6.93em;
}
.tbs-2 {
  position: relative;
  top: 17.5em;

  width: 18.75em;
  height: 1.44em;
  text-align: left;
  color: rgba(59, 59, 59, 0.7);
  margin: 0 auto;
}
.pull-stats-child {
  position: absolute;
  width: 100%;
  top: calc(50% - 166.5px);
  right: 0em;
  left: 0em;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  height: 21.44em;
}
.div10 {
  position: relative;
  font-size: 0.63em;
  line-height: 0.68em;
}
.wrapper {
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
.filtr {
  position: absolute;
  top: 0em;
  left: 0.94em;
  background-color: #fff;
  width: 6.63em;
  display: flex;
  flex-direction: row;
  padding: 0em 0.34em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.iconsbar-cards {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.txt1 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.ton {
  position: relative;
  font-size: 1.13em;
  line-height: 100%;
  font-weight: 500;
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
.txt2 {
  position: relative;
  font-size: 0.63em;
  line-height: 130%;
  font-weight: 300;
  display: none;
}
.txt1-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.13em;
}
.iconsbar-cards-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.colors-graphsorders-icon {
  position: relative;
  width: 1em;
  height: 1em;
}
.div11 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.colors-graphsorders-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.31em;
}
.iconchange {
  position: relative;
  width: 2.5em;
  height: 2.5em;
}
.status-all {
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0em 0em 0em 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  color: #3b3b3b;
}
.buttons-tabs {
  flex: 1;
  border-radius: 15px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.75em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.icons2bar-cards {
  position: relative;
  width: 0.75em;
  height: 0.75em;
  overflow: hidden;
  flex-shrink: 0;
}
.div12 {
  position: relative;
  font-size: 0.75em;
  line-height: 120%;
  font-weight: 300;
}
.icons2bar-cards1 {
  position: relative;
  width: 0.75em;
  height: 0.75em;
}
.icons2bar-cards-container {
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.div14 {
  position: relative;
  font-size: 0.75em;
  line-height: 120%;
  font-weight: 300;
  display: flex;
  align-items: center;
  width: 7.25em;
  flex-shrink: 0;
}
.frame-parent {
  width: 6.56em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.38em;
  color: #3b3b3b;
}
.statusbar-cards {
  border-radius: 16px;
  background-color: #f6f4fc;
  width: 20.38em;
  display: none;
  flex-direction: row;
  padding: 0.63em 0.81em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75em;
}
.div15 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 130%;
  font-weight: 500;
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
.id-12345 {
  position: relative;
  font-size: 0.63em;
  line-height: 0.68em;
  font-weight: 300;
}
.parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.38em;
}
.checkboxdone-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}
.frame-child {
  position: relative;
  border-radius: 50%;
  background-color: #a592dd;
  border: 0.5px solid rgba(165, 146, 221, 0.1);
  box-sizing: border-box;
  width: 0.63em;
  height: 0.63em;
}
.div16 {
  position: relative;
  font-size: 0.75em;
  line-height: 140%;
}
.ellipse-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.31em;
  z-index: 0;
}
.iconchange1 {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  top: 0em;
  right: 0em;
  bottom: 0em;
  max-height: 100%;
  width: 2.5em;
  z-index: 1;
}
.frame-container {
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  width: 13.63em;
  height: 2.25em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0em 0.5em 0.75em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  position: relative;
}
.container {
  flex: 1;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  height: 2.25em;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.frame-group {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
  color: #3b3b3b;
}
.buttons-tabs1 {
  flex: 1;
  border-radius: 15px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.69em 0.75em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
}
.div18 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
}
.div19 {
  position: relative;
  font-size: 0.75em;
  line-height: 120%;
  display: flex;
  align-items: center;
  width: 8.33em;
  flex-shrink: 0;
}
.frame-parent1 {
  width: 7.5em;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
  color: #3b3b3b;
}
.statusbar-cards1 {
  border-radius: 16px;
  background-color: #f6f4fc;
  width: 20.38em;
  display: flex;
  flex-direction: row;
  padding: 0.63em 0.81em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75em;
}
.frame {
  width: 7.19em;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.div21 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.wrapper1 {
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent3 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4.06em;
}
.frame-item {
  align-self: stretch;
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  height: 0.06em;
}
.div26 {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.01em;
  line-height: 130%;
  font-weight: 300;
  z-index: 0;
}
.col-titles-bg {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 6.76px);
  left: calc(50% + 0.5px);
  border-radius: 18px;
  background-color: rgba(165, 146, 221, 0.1);
  width: 0.85em;
  height: 0.06em;
  transform: rotate(90deg);
  transform-origin: 0 0;
  z-index: 1;
}
.div27 {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 9px);
  right: 0em;
  font-size: 0.75em;
  text-decoration: underline;
  letter-spacing: 0.01em;
  line-height: 130%;
  color: rgba(87, 126, 247, 0.96);
  display: inline-block;
  width: 10em;
  flex-shrink: 0;
  z-index: 2;
}
.field1 {
  width: 18.75em;
  height: 1.25em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  gap: 1.63em;
}
.field {
  height: 1.25em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
}
.frame-child2 {
  align-self: stretch;
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  height: 0.06em;
  display: none;
}
.frame-parent2 {
  width: 18.75em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
  color: #3b3b3b;
}
.info {
  position: absolute;
  top: 1.88em;
  left: calc(50% - 163px);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 0em 0em 0.25em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.88em;
  color: #8181a5;
}
.pull-stats {
  position: relative;
  top: 19.69em;

  width: 21.38em;
  height: 22.06em;
  text-align: left;
  margin: 0 auto;
}
.pull-stats1 {
  position: relative;
  top: 21em;

  width: 21.38em;
  height: 22.06em;
  text-align: left;
  margin: 0 auto;
}
.col-titles-bg4 {
  position: absolute;
  width: 100%;
  top: 0em;
  right: 0em;
  left: 0em;
  border-radius: 18px;
  height: 10.31em;
}
.fill {
  position: absolute;
  width: calc(100% - 2px);
  top: 0.06em;
  right: 0.06em;
  left: 0.06em;
  border-radius: 20px;

  border: 0.5px solid rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  height: 2.06em;
  &_active {
    background-color: #fdd674;
  }
}
.div48 {
  position: absolute;
  top: calc(50% - 8.5px);
  left: calc(50% - 36.5px);
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 130%;
}
.div49 {
  position: absolute;
  top: 0.71em;
  left: 14.29em;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 300;
  color: rgba(59, 59, 59, 0.75);
}
.button-slider {
  position: absolute;
  top: 0em;
  left: 0em;
  border-radius: 20px;
  background-color: #f6f4fc;
  width: 9.19em;
  height: 2.19em;
  overflow: hidden;
  color: #8181a5;

  &_active {
    color: #3b3b3b;
    background-color: #fdd674;
  }
}
.fill1 {
  position: absolute;
  top: 0.06em;
  left: 0.06em;
  border-radius: 20px;

  box-sizing: border-box;
  width: 8.75em;
  height: 2.06em;
}
.div50 {
  position: absolute;
  top: calc(50% - 8.5px);
  left: calc(50% - 38.5px);
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 130%;
}
.div51 {
  position: absolute;
  top: 0.71em;
  left: 14.21em;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 110%;
  font-weight: 300;
  color: rgba(59, 59, 59, 0.75);
}
.button-slider1 {
  position: absolute;
  top: 0em;
  left: 9.56em;
  border-radius: 20px;
  background-color: #f6f4fc;
  border: 0.5px solid rgba(129, 129, 165, 0.1);
  box-sizing: border-box;
  width: 9.19em;
  height: 2.19em;
  overflow: hidden;
  &_active {
    color: #3b3b3b;
    background-color: #fdd674;
  }
}
.div52 {
  position: absolute;
  top: calc(50% - 8.5px);
  left: calc(50% - 42.5px);
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 130%;
}
.button-slider2 {
  position: absolute;
  top: 2.69em;
  left: 9.56em;
  border-radius: 20px;
  background-color: #f6f4fc;
  border: 0.5px solid rgba(129, 129, 165, 0.1);
  box-sizing: border-box;
  width: 9.19em;
  height: 2.19em;
  overflow: hidden;
  &_active {
    color: #3b3b3b;
    background-color: #fdd674;
  }
}
.div54 {
  position: absolute;
  top: calc(50% - 8.5px);
  left: calc(50% - 39.5px);
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 130%;
}
.button-slider3 {
  position: absolute;
  top: 2.69em;
  left: 0em;
  border-radius: 20px;
  background-color: #f6f4fc;
  border: 0.5px solid rgba(129, 129, 165, 0.1);
  box-sizing: border-box;
  width: 9.19em;
  height: 2.19em;
  &_active {
    color: #3b3b3b;
    background-color: #fdd674;
  }
}
.tabs {
  position: absolute;
  top: 1.13em;
  left: 1.31em;
  width: 18.75em;
  height: 4.88em;
}
.search-icon {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
}
.div56 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
  font-weight: 300;
}
.search {
  flex: 1;
  border-radius: 14px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.63em 0.75em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.div57 {
  position: relative;
  font-size: 0.88em;

  line-height: 0.71em;
  font-weight: 300;
}
.menu-2-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
  color: #5d83f7;
}
.search-parent {
  position: absolute;
  top: 6.88em;
  left: 1.31em;
  width: 18.75em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.13em;
  text-align: left;
  color: rgba(0, 0, 0, 0.4);
}
.col-titles-bg-parent {
  position: relative;
  top: -40.56em;

  border-radius: 16px;
  background-color: rgba(246, 244, 252, 0.5);
  width: 21.38em;
  height: 10.44em;
  color: #8181a5;
  margin: 0 auto;
}
.battery-icon {
  position: absolute;
  height: 25.76%;
  width: 6.24%;
  top: 39.39%;
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
  left: 0%;
  font-size: 0.94em;
  letter-spacing: -0.02em;
  font-weight: 100;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.time-style {
  position: absolute;
  height: 47.73%;
  width: 13.85%;
  top: 27.27%;
  right: 80.77%;
  bottom: 25%;
  left: 5.38%;
}
.time-style1 {
  position: absolute;
  height: 47.73%;
  width: 13.85%;
  top: 27.27%;
  right: 80.77%;
  bottom: 25%;
  left: 5.38%;
  display: none;
  color: #fff;
}
.div {
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 80em;
  overflow-y: auto;
  text-align: center;
  color: #3b3b3b;
  font-family: Inter;
}
.div32 {
  position: relative;
  top: 0.7em;
  left: 1.3em;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.search-icon {
  position: absolute;
  top: calc(50% - 20px);
  right: 3.88em;
  border-radius: 10px;
  width: 2.5em;
  height: 2.5em;
  overflow: hidden;
}
.buttonback {
  position: absolute;
  height: 2.5em;
  width: 6em;
  top: 2.66%;
  right: 67.69%;
  bottom: 95.3%;
  left: 6.15%;
  border-radius: 9px;
  background-color: rgba(251, 251, 251, 0.42);
}
</style>
