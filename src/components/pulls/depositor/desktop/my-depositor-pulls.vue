<template>
  <desktop-modal @close="close">
    <template v-slot:title> Информация о пулле #{{ pool?.id }} </template>
    <template v-slot:body>
      <div class="frame-parent">
        <div class="frame-group">
          <div class="parent">
            <div class="div">
              <img
                class="pie-chart-icon"
                alt=""
                src="@/assets/images/pie-chart.svg"
              />
              <div class="ton-parent">
                <div class="ton">TON</div>
                <div class="div1">Доход</div>
              </div>
            </div>
            <div class="frame-child" />
            <div class="frame-container">
              <div class="percent-parent">
                <img
                  class="percent-icon"
                  alt=""
                  src="@/assets/images/percent.svg"
                />
                <div class="div2">{{interestRateString}}</div>
              </div>
              <div class="percent-parent">
                <img
                  class="percent-icon"
                  alt=""
                  src="@/assets/images/clock.svg"
                />
                <div class="div2">{{freePeriodString}}</div>
              </div>
              <div class="percent-parent">
                <img
                  class="percent-icon"
                  alt=""
                  src="@/assets/images/activity.svg"
                />
                <div class="div2">{{`ROI = ${pool?.roi}%`}}</div>
              </div>
            </div>
          </div>
          <div class="frame-div">
            <div class="c-wrapper">
              <div class="c">Cостояние:</div>
            </div>
            <div class="status-all">
              <div class="colors-graphsorders-parent">
                <img 
                      v-if="pool?.status === 'active'"
                      class="colors-graphsorders-icon"
                      alt=""
                      src="@/assets/images/colors-graphsorders1.svg"
                    />
                    <img 
                      v-else-if="pool?.status === 'inactive'"
                      class="colors-graphsorders-icon_inactive colors-graphsorders-icon"
                      alt=""
                      src="@/assets/images/colors-graphsorders3.svg"
                    />
                <div class="c">
                  <span>{{  i18n.global.t(`pools-status.${pool?.status}`)}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-parent1">
          <div class="field-parent">
            <div class="field">
              <div class="div5">Ставка:</div>
              <div  v-if="pool?.millipercent" class="div6">{{ pool?.millipercent / 100 }}% в день</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div5">На срок:</div>
              <div class="div6"> до {{maxDuration}}</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div5">Беспроцентный период:</div>
              <div class="div6">{{ freePeriod }} дней</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div5">Всего ликвидности:</div>
              <div class="div6">{{ pool?.all_liquidity }} TON</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div5">Доступно ликвидности:</div>
              <div class="div6">{{ pool?.available_liquidity }} TON</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div5">Доход за 30 дней:</div>
              <div class="div6">% годовых</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div5">% Просроченных займов:</div>
              <div class="div6">%</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div5">% Проданных займов:</div>
              <div class="div6">%</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div5">Пуллов сгенерировано для инвесторов:</div>
              <div class="div6">раз</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div5">Количество инвесторов:</div>
              <div class="div6">человек</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-wrapper">
            <div class="field">
              <div class="div5">Дата создания:</div>
              <div class="div6">{{ createdTerm }}</div>
            </div>
          </div>
        </div>
        <div class="frame-parent2">
          <div class="wrapper">
            <div class="c">Моя ликвидность</div>
          </div>
          <div class="frame-parent3">
            <div class="frame-wrapper">
              <div class="frame-parent4">
                <div class="container">
                  <div class="div26">Инвестировано:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="ton3">100 TON</div>
                </div>
              </div>
            </div>
            <div class="frame-item" />
            <div class="frame-wrapper">
              <div class="frame-parent5">
                <div class="frame">
                  <div class="div26">Доходность всего:</div>
                </div>
                <div class="ton-container">
                  <div class="ton4">7 TON</div>
                </div>
              </div>
            </div>
            <div class="frame-item" />
            <div class="frame-wrapper">
              <div class="frame-parent5">
                <div class="frame">
                  <div class="div26">Текущая доходность:</div>
                </div>
                <div class="ton-container">
                  <div class="ton4">45% годовых</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="notification">
          <img class="percent-icon1" alt="" src="@/assets/images/percent.svg" />
          <div class="div26">Проценты начисляются с 12 апреля 2023 года</div>
        </div>
        <div class="des-and-bbn">
          <catos-button
            variant="fourth"
            :style="{ width: '100%', margin: '0' }"
            @click="widthraw"
            >Вывести депозит</catos-button
          >

          <catos-button
            variant="fourth"
            :style="{ width: '100%', margin: '0' }"
            @click="add"
            >Инвестировать</catos-button
          >
        </div>
      </div>
    </template>
  </desktop-modal>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import desktopModal from "@/components/base/desktop-modal.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
const emits = defineEmits(["close", "add", "widthraw"]);
import { Pool } from "@/types/pool.type";
import {useComputedPoolInfo} from "@/composables/infoCalculation/useComputedPoolInfo";
import { i18n } from "@/i18n";

const add = () => {
  emits("add");
};
const widthraw = () => {
  emits("widthraw");
};
const close = () => {
  emits("close");
};

const { pool } = defineProps({
  pool: {
    type: Object as PropType<Pool>,
  },
});

const {
  interestRate, monthInterestRateString, 
  maxDuration, freePeriod, interestRateString,
  freePeriodString, createdTerm } = useComputedPoolInfo(pool)
</script>
<style scoped>
.pie-chart-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
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
.div1 {
  position: relative;
  font-size: 0.75em;
}
.ton-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.31em;
}
.div {
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
.frame-child {
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
.div2 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
}
.percent-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.frame-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0.75em;
  color: #3b3b3b;
}
.parent {
  align-self: stretch;
  border-radius: 20px;
  background-color: #f6f4fc;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.63em 1.25em 0.63em 0.63em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75em;
}
.c {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.c-wrapper {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
}
.colors-graphsorders-icon {
  position: relative;
  width: 1em;
  height: 1em;
}
.span {
  color: rgba(129, 129, 165, 0.4);
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

  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0em 0em 0em 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
}
.frame-div {
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  color: #3b3b3b;
  width: 100%;
  padding: 0 0.6em;
  margin-bottom: 1em;
}
.frame-group {
  width: 37.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
  color: #a592dd;
}
.div5 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.div6 {
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
.field-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent1 {
  width: 37.5em;
  display: flex;
  flex-direction: column;
  padding: 0em 0.63em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.wrapper {
  border-radius: 8.79px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 0.31em 0.31em 0.31em 0.38em;
  align-items: center;
  justify-content: flex-start;
}
.div26 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.container {
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em 0.13em 0.38em;
  align-items: flex-start;
  justify-content: flex-start;
}
.ton3 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
  display: flex;
  align-items: center;

  flex-shrink: 0;
}
.ton-wrapper {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
}
.frame-parent4 {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.81em;
}
.frame-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.frame-item {
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  width: 17.56em;
  height: 0.06em;
}
.frame {
  width: 9.81em;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em 0.13em 0.38em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
}
.ton4 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.ton-container {
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  text-align: right;
}
.container-click {
  position: absolute;
  margin: 0 !important;
  top: -0.31em;
  left: 16.81em;
  width: 1.81em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 2;
}
.frame-parent5 {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 0.81em;
}
.frame-parent3 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.frame-parent2 {
  position: absolute;
  top: 35.31em;

  border-radius: 16px;
  background-color: #f6f4fc;
  width: 37.5em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.63em 0.75em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: center;
  gap: 0.63em;
}
.percent-icon1 {
  position: relative;
  width: 1em;
  height: 1em;
  overflow: hidden;
  flex-shrink: 0;
}
.notification {
  position: absolute;
  top: 44.81em;

  border-radius: 16px;
  background-color: #f6f4fc;
  width: 37.5em;
  display: flex;
  flex-direction: row;
  padding: 0.94em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
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
.button {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.des-and-bbn {
  position: absolute;
  top: 50em;
  border-radius: 16px;
  background-color: #f9fbff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  width: 37.5em;
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
  text-align: right;
  color: #fefefe;
}
.frame-parent {
  position: relative;
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  width: 100%;
  height: 55.94em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
@media (max-height: 900px) {
  .frame-parent {
    height: auto;
    overflow-y: auto;
  }
}
</style>
