<template>
  <default-desktop-admin back>
    <template v-slot:title> Финансовая аналитика CATOS </template>
    <template v-slot:body>
      <div class="tables-light-mode-parent">
        <!--Доходноссть CATOS-->
        <div class="filter-2_graph filter-2">
          <div class="col-titles-bg"></div>

          <div class="filter-2-inner">
            <div class="frame-wrapper_income frame-wrapper">
              <div class="frame-group">
                <div class="group_token group">
                  <div class="div11">Выберите токен:</div>
                  <catos-select
                    placeholder="TON"
                    :options="optionsToken"
                    :value="token"
                    @selected="ev => (token = ev)"
                    :optionWidthDesk="329"
                    :style="{ width: '100%' }"
                    data-element="select-token"
                  ></catos-select>
                </div>
                <div class="group_type group">
                  <div class="div11">Выберите тип дохода:</div>
                  <catos-select
                    placeholder="Все комиссии"
                    :options="optionsIncome"
                    :value="income"
                    @selected="ev => (income = ev)"
                    :optionWidthDesk="329"
                    :style="{ width: '100%' }"
                    data-element="select-income"
                  ></catos-select>
                </div>
                <div class="group">
                  <div class="div11">Выберите дату:</div>
                  <input-data
                    type="date"
                    placeholder="01.02.2022"
                    :value="date2"
                    @selected="e => (date2 = e)"
                  ></input-data>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="graphsorders-mobile-01">
          <div class="master1">
            <div class="content-frame">
              <div class="elements-textbox-tablerow1">
                <div class="description1">
                  <div class="title">Доходность CATOS</div>
                </div>
              </div>
            </div>
          </div>
          <div class="divider">
            <div class="line"></div>
          </div>
          <div class="table">
            <!--  <div class="tabs1">
              <div
                :class="
                  chart1 === 0
                    ? 'tabstextactive tabstextresting'
                    : 'tabstextresting'
                "
                @click="() => (chart1 = 0)"
              >
                <div class="tab-title">День</div>
              </div>
              <div
                class="tabstextresting"
                :class="
                  chart1 === 1
                    ? 'tabstextactive tabstextresting'
                    : 'tabstextresting'
                "
                @click="() => (chart1 = 1)"
              >
                <div class="tab-title">Неделя</div>
              </div>
              <div
                class="tabstextresting"
                :class="
                  chart1 === 2
                    ? 'tabstextactive tabstextresting'
                    : 'tabstextresting'
                "
                @click="() => (chart1 = 2)"
              >
                <div class="tab-title">Месяц</div>
              </div>
            </div>-->
            <chart
              id="1"
              :chartPairs="chartValue1"
              :variant="{ value: 'value', type: 'single' }"
            ></chart>
          </div>
          <div class="divider">
            <div class="line"></div>
          </div>
        </div>
      </div>
      <!--Количество Пользователей-->
      <div class="tables-light-mode-parent">
        <div class="filter-2_graph filter-2">
          <div class="col-titles-bg"></div>

          <div class="filter-2-inner">
            <div class="frame-wrapper_income frame-wrapper">
              <div class="frame-group">
                <div class="group_type group">
                  <div class="div11">Выберите тип пользователей:</div>
                  <catos-select
                    placeholder="Все комиссии"
                    :options="optionsUsers"
                    :value="users"
                    @selected="ev => (users = ev)"
                    :optionWidthDesk="329"
                    :style="{ width: '100%' }"
                    data-element="select-users"
                  ></catos-select>
                </div>
                <div class="group">
                  <div class="div11">Выберите дату:</div>
                  <input-data
                    type="date"
                    placeholder="01.02.2022"
                    :value="date3"
                    @selected="e => (date3 = e)"
                  ></input-data>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="graphsorders-mobile-01">
          <div class="master1">
            <div class="content-frame">
              <div class="elements-textbox-tablerow1">
                <div class="description1">
                  <div class="title">Пользователи CATOS</div>
                </div>
              </div>
            </div>
          </div>
          <div class="divider">
            <div class="line"></div>
          </div>
          <div class="table">
            <!--<div class="tabs1">
              <div
                :class="
                  chart2 === 0
                    ? 'tabstextactive tabstextresting'
                    : 'tabstextresting'
                "
                @click="() => (chart2 = 0)"
              >
                <div class="tab-title">День</div>
              </div>
              <div
                class="tabstextresting"
                :class="
                  chart2 === 1
                    ? 'tabstextactive tabstextresting'
                    : 'tabstextresting'
                "
                @click="() => (chart2 = 1)"
              >
                <div class="tab-title">Неделя</div>
              </div>
              <div
                class="tabstextresting"
                :class="
                  chart2 === 2
                    ? 'tabstextactive tabstextresting'
                    : 'tabstextresting'
                "
                @click="() => (chart2 = 2)"
              >
                <div class="tab-title">Месяц</div>
              </div>
            </div>-->
            <chart
              id="2"
              :chartPairs="chartValue2"
              :variant="{ value: 'users', type: 'single' }"
            ></chart>
          </div>
          <div class="divider">
            <div class="line"></div>
          </div>
        </div>
      </div>
      <!--Займы CATOS-->
      <div class="tables-light-mode-parent">
        <div class="filter-2_graph filter-2">
          <div class="col-titles-bg"></div>

          <div class="filter-2-inner">
            <div class="frame-wrapper">
              <div class="frame-group">
                <div class="group">
                  <div class="div11">Выберите меру:</div>
                  <catos-select
                    placeholder="Все комиссии"
                    :options="optionsMeasure"
                    :value="measure"
                    @selected="ev => (measure = ev)"
                    :optionWidthDesk="329"
                    :style="{ width: '100%' }"
                    data-element="select-mesuare"
                  ></catos-select>
                </div>
                <div class="group">
                  <div class="div11">Выберите дату:</div>
                  <input-data
                    type="date"
                    placeholder="01.02.2022"
                    :value="date1"
                    @selected="e => (date1 = e)"
                  ></input-data>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="graphsorders-mobile-01">
          <div class="master1">
            <div class="content-frame">
              <div class="elements-textbox-tablerow1">
                <div class="description1">
                  <div class="title">Займы CATOS</div>
                </div>
              </div>
            </div>
          </div>
          <div class="divider">
            <div class="line"></div>
          </div>
          <div class="table">
            <!--<div class="tabs1">
              <div
                :class="
                  chart2 === 0
                    ? 'tabstextactive tabstextresting'
                    : 'tabstextresting'
                "
                @click="() => (chart2 = 0)"
              >
                <div class="tab-title">День</div>
              </div>
              <div
                class="tabstextresting"
                :class="
                  chart2 === 1
                    ? 'tabstextactive tabstextresting'
                    : 'tabstextresting'
                "
                @click="() => (chart2 = 1)"
              >
                <div class="tab-title">Неделя</div>
              </div>
              <div
                class="tabstextresting"
                :class="
                  chart2 === 2
                    ? 'tabstextactive tabstextresting'
                    : 'tabstextresting'
                "
                @click="() => (chart2 = 2)"
              >
                <div class="tab-title">Месяц</div>
              </div>
            </div>-->
            <chart
              id="3"
              :chartPairs="chartCollectorsPairs"
              :variant="{ value: 'loans', type: 'multi' }"
            ></chart>
          </div>
          <div class="divider">
            <div class="line"></div>
          </div>
        </div>
      </div>
    </template>
  </default-desktop-admin>
</template>

<script setup lang="ts">
import { ref } from "vue";
import defaultDesktopAdmin from "@/components/layouts/default-desktop-admin.vue";
import chart from "@/components/dashboard/chart.vue";
import inputData from "@/components/fields/input-data.vue";
import catosSelect from "@/components/fields/catos-select.vue";
const token = ref("TON");
const income = ref("Все комиссии");
const users = ref("Все");
const measure = ref("шт");
const optionsToken = ["TON", "CATOS"];
const optionsIncome = [
  "Все комиссии",
  "Комиссии с заемщиков",
  "Комиссии с инвесторов",
  "Комиссии с финансовых организацией",
];
const optionsUsers = [
  "Все",
  "Заемщик",
  "Финансовая организация",
  "Инвестор",
  "Коллектор",
];
const optionsMeasure = ["шт", "TON", "CATOS"];
const chartValue1 = ref(["income"]);
const chartValue2 = ref(["users"]);
const chartCollectorsPairs = ["get", "repaid", "sale", "forSales"];

const date1 = ref("");
const date2 = ref("");
const date3 = ref("");

const curentWindow = ref("Catos");
const chart1 = ref(0);
const chart2 = ref(0);
</script>

<style scoped lang="scss">
.filter-2-inner,
.frame-group,
.frame-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  &_income {
    width: 800px;
  }
}
.filter-2-inner {
  position: absolute;
  height: 41.29%;
  width: 70vw;
  top: 46.45%;
  right: 6.14%;
  bottom: 12.26%;
  left: 6.14%;
  text-align: left;
}
.frame-group {
  align-self: stretch;
  width: 100%;
  align-items: flex-start;
  gap: 0.75em;
}
.filter-2 {
  position: relative;
  width: 100%;
  height: 9.69em;
}
.filter-2_graph {
  height: 6.5em;
  top: 0.7em;
  & .filter-2-inner {
    top: 1em;
  }
}
.group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  justify-content: flex-start;
  gap: 0.5em;
  &_type {
    flex: 2;
  }
}
.div11 {
  position: relative;
  color: #3b3b3b;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.col-titles-bg {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 18px 18px 16px 16px;
  background-color: rgba(246, 244, 252, 0.5);
}
.description1,
.graphsorders-mobile-01 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.graphsorders-mobile-01 {
  border-radius: 12px;
  background-color: #fff;
  border: 1px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  width: 100%;

  overflow: hidden;
  flex-shrink: 0;
  padding: 1.38em 0;
  align-items: center;
}
.description1 {
  align-self: stretch;
  align-items: flex-start;
  gap: 0.13em;
}
.elements-textbox-tablerow1 {
  border-radius: 14px;
  background: linear-gradient(#f4f6f9, #f4f6f9), #fff;

  height: 3.69em;
  overflow: hidden;
  flex-shrink: 0;
  flex-direction: column;
  padding: 0.25em 1em 0.25em 1em;
  box-sizing: border-box;
  justify-content: center;
}
.elements-textbox-tablerow1,
.master1,
.tabs1 {
  display: flex;
  align-items: flex-start;
}
.master1 {
  align-self: stretch;
  flex-direction: column;
  padding: 0 1.31em;
  justify-content: flex-start;
}
.tabs1 {
  width: 18.75em;
  flex-direction: row;
  justify-content: space-between;
  z-index: 0;
  text-align: center;
  color: #8181a5;
}
.content-frame {
  align-self: stretch;
  height: 3.69em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.title {
  position: relative;
  font-size: 1em;
  line-height: 130%;
  font-weight: 600;
}
.divider,
.line,
.master {
  align-self: stretch;
}
.line {
  position: relative;
  background-color: #ebeef2;
  height: 0.06em;
}
.divider {
  display: flex;
  flex-direction: column;
  padding: 1.25em 0;
  align-items: flex-start;
  justify-content: flex-start;
}

.table {
  border-radius: 16px;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 1.13em;
  color: #c1c4c9;
  align-self: stretch;
  display: flex;
  justify-content: flex-start;
}
.tabs,
.tabstextactive,
.tabstextresting {
  border: 1px solid #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  cursor: pointer;
}
.tabstextresting {
  padding: 0.69em 1.25em;
  justify-content: flex-start;
}
.tabstextactive {
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #ececf2;
  overflow: hidden;
  padding: 0.69em 1.25em;
  justify-content: flex-start;
  color: #3b3b3b;
}
.tabs {
  width: 19.38em;
  justify-content: space-between;
  z-index: 0;
  text-align: center;
  color: #8181a5;
}
.tab-title {
  position: relative;
  font-size: 0.88em;
  font-weight: 600;
}
.tables-light-mode-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  top: 8em;

  justify-content: flex-start;
  gap: 1.5em;
  text-align: left;
  width: 87.7vw;
  margin: 0 auto;
}
@media (min-width: 500px) {
  .filter-2 {
    width: 48.75em;
  }
  .filter-2-inner,
  .tables-light-mode {
    width: auto;
  }
  .filter-2-inner {
    left: 1em;
  }
  .tables-light-mode-parent {
    width: 780px;
    top: 0;
  }
}
</style>
