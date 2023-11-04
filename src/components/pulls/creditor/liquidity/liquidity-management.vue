<template>
  <modal from="pulls">
    <div class="wrapper">
      <div class="new-pull-parent">
        <div class="pull-stats">
          <div class="pull-stats1">
            <div class="frame-group">
              <div class="frame">
                <div class="roi">Всего ликвидности:</div>
              </div>
              <div class="ton-wrapper">
                <div class="ton">1 053 324 TON</div>
              </div>
            </div>
            <div class="pull-stats-child"></div>
            <div class="frame-group">
              <div class="frame">
                <div class="roi">Выдано в займ:</div>
              </div>
              <div class="ton-wrapper">
                <div class="ton">796 000 TON</div>
              </div>
            </div>
            <div class="pull-stats-child"></div>
            <div class="frame-group">
              <div class="frame">
                <div class="roi">Доступно для выдачи:</div>
              </div>
              <div class="ton-wrapper">
                <div class="ton">257 324 TON</div>
              </div>
            </div>
            <div class="pull-stats-child"></div>
            <div class="frame-group">
              <div class="frame">
                <div class="roi">Доступно для изьятия</div>
              </div>
              <div class="ton-wrapper">
                <div class="ton">257 324 TON</div>
              </div>
            </div>
            <div class="pull-stats-child"></div>
            <div class="frame-group">
              <div class="frame">
                <div class="roi">Процент невозврата:</div>
              </div>
              <div class="ton-wrapper">
                <div class="ton">
                  4
                  <span class="span">,5%</span>
                </div>
              </div>
            </div>
            <div class="pull-stats-child"></div>
            <div class="frame-group">
              <div class="frame">
                <div class="roi">Не вернули:</div>
              </div>
              <div class="ton-wrapper">
                <div class="ton">100 246 TON</div>
              </div>
            </div>
            <div class="pull-stats-child"></div>
            <div class="frame-group">
              <div class="frame">
                <div class="roi">Продано коллекторам:</div>
              </div>
              <div class="ton-wrapper">
                <div class="ton">57 273 TON</div>
              </div>
            </div>
            <div class="pull-stats-child"></div>
            <div class="frame-group">
              <div class="frame">
                <div class="roi">На продаже коллекторам:</div>
              </div>
              <div class="ton-wrapper">
                <div class="ton">33 211 TON</div>
              </div>
            </div>
            <div class="pull-stats-child"></div>
            <div class="frame-group">
              <div class="frame">
                <div class="roi">На продаже коллекторам:</div>
              </div>
              <div class="ton-wrapper">
                <div class="ton">33 211 TON</div>
              </div>
            </div>
            <div class="pull-stats-child"></div>
            <div class="frame-group">
              <div class="frame">
                <div class="roi">Общий доход:</div>
              </div>
              <div class="ton-wrapper">
                <div class="ton">102 311 TON</div>
              </div>
            </div>
            <div class="pull-stats-child"></div>
            <div class="frame-group">
              <div class="frame">
                <div class="roi">ROI:</div>
              </div>
              <div class="ton-wrapper">
                <div class="ton">72% годовых</div>
              </div>
            </div>
            <div class="pull-stats-child"></div>
            <div class="frame-group">
              <div class="frame">
                <div class="roi">Займов выдано:</div>
              </div>
              <div class="ton-wrapper">
                <div class="ton">10 547 раз</div>
              </div>
            </div>
            <div class="pull-stats-child"></div>
            <div class="frame-group">
              <div class="frame">
                <div class="roi">Займов погашено:</div>
              </div>
              <div class="ton-wrapper">
                <div class="ton">3 927 раз</div>
              </div>
            </div>
            <div class="pull-stats-child"></div>
            <div class="frame-group">
              <div class="frame">
                <div class="roi">Займов активно:</div>
              </div>
              <div class="ton-wrapper">
                <div class="ton">6 468</div>
              </div>
            </div>
          </div>
          <div class="pull-stats-child10"></div>
          <div class="pull-stats-child11"></div>
          <div class="des-and-bbn">
            <div class="text-and-button-wrapper">
              <div class="text-and-button">
                <div
                  class="buttons-tabs"
                  id="buttonsTabsContainer"
                  @click="() => (isWithrow = true)"
                >
                  <div class="text">Изьять ликвидность</div>
                </div>
                <div
                  class="buttons-tabs"
                  id="buttonsTabsContainer1 "
                  @click="() => (isAdd = true)"
                >
                  <div class="text1">Добавить ликвидность</div>
                </div>
                <div class="buttons-tabs2" @click="toBack">
                  <div class="text2">Закрыть</div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-parent13">
            <div class="frame-child1"></div>
            <div class="buttons-tabs-wrapper">
              <div class="buttons-tabs3">
                <div class="pie-chart-parent">
                  <img
                    class="pie-chart-icon"
                    alt=""
                    src="@/assets/images/pie-chart.svg"
                  />

                  <div class="div26">
                    <p class="p">Управление ликвидностью</p>
                    <p class="p">пулл #12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <add v-if="isAdd"></add>
      <withrow v-if="isWithrow" @on-close="() => (isWithrow = false)"></withrow>
    </div>
  </modal>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import appBar from "@/components/ui-kit/app-bar.vue";
import modal from "@/components/ui-kit/modal.vue";
import { useRouter } from "vue-router";
import withrow from "./withrow.vue";
import add from "./add.vue";

const isAdd = ref(false);
const isWithrow = ref(false);

const variant = computed(() => {
  return window.history.state.variant;
});
const router = useRouter();

const toBack = () => {
  router.push({ name: "pulls" });
};
const toManage = () => {
  router.push({
    name: "pulls-liquidity-management",
    state: { variant: variant.value },
  });
};
</script>

<style scoped>
.wrapper {
  height: 1000px;
}
.swipe-down {
  position: absolute;
  top: 0.75em;
  left: 10.81em;
  border-radius: 25px;
  background-color: #cad0e4;
  width: 2.63em;
  height: 0.31em;
}
.description {
  position: absolute;
  top: 2.19em;
  left: calc(50% - 150px);
  width: 18.75em;
}
.frame-inner {
  position: absolute;
  top: -7.75em;
  left: 0.19em;
  border-radius: 32px;
  background-color: rgba(230, 221, 255, 0.39);
  width: 0.38em;
  height: 13.19em;
}
.rectangle-div {
  position: absolute;
  top: -7.31em;
  left: 0;
  border-radius: 21px;
  background-color: #a592dd;
  width: 0.75em;
  height: 5.5em;
}
.rectangle-group {
  position: absolute;
  top: 18.13em;
  left: 23.25em;
  width: 0.75em;
  height: 10.81em;
}
.frame,
.new-pull {
  box-sizing: border-box;
}
.new-pull {
  position: absolute;
  top: 0;
  left: 0;
  /* border-radius: 30px 30px 0 0; */
  background-color: #fff;
  box-shadow: 0 12px 12px rgba(151, 71, 255, 0.04);
  /* border: 1px solid rgba(0, 0, 0, 0.1); */
  width: 24.38em;
  height: 49.63em;
  overflow: hidden;
}
.frame {
  width: 7.19em;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0;
  align-items: flex-start;
  justify-content: flex-start;
}
.ton {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
  font-weight: 300;
}
.frame-group,
.ton-wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.ton-wrapper {
  padding: 0.13em 0;
}
.frame-group {
  align-self: stretch;
  gap: 4.06em;
  align-items: center;
  justify-content: space-between;
}
.pull-stats-child {
  align-self: stretch;
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  height: 0.06em;
}
.span {
  letter-spacing: -1px;
}
.roi {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.pull-stats1 {
  position: relative;
  top: 6.69em;
  left: 1.31em;
  width: 77vw;
  height: 22em;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
  z-index: 1;
}
.pull-stats-child10 {
  position: absolute;
  top: 25.44em;

  background: linear-gradient(0deg, #fff, rgba(255, 255, 255, 0));
  width: 77vw;
  height: 4em;
  z-index: 2;
}
.pull-stats-child11 {
  position: relative;
  width: 100%;
  top: -19em;
  right: 0;
  left: 0;
  border-radius: 15px;
  border: 0.5px solid rgba(46, 58, 89, 0.4);
  box-sizing: border-box;
  height: 27.19em;
  overflow: auto;
}
.text {
  position: absolute;
  top: 0.5em;
  left: 4.57em;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.buttons-tabs {
  align-self: stretch;
  position: relative;
  border-radius: 25px;
  background-color: rgba(87, 126, 247, 0.96);
  border: 0.5px solid rgba(87, 126, 247, 0.96);
  box-sizing: border-box;
  height: 2em;
  cursor: pointer;
}
.text1,
.text2 {
  position: absolute;
  top: 0.5em;
  left: calc(50% - 83px);
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.text2 {
  left: calc(50% - 31px);
}
.buttons-tabs2 {
  align-self: stretch;
  position: relative;
  border-radius: 25px;
  border: 0.5px solid rgba(87, 126, 247, 0.96);
  box-sizing: border-box;
  height: 2em;
  color: #555562;
}
.text-and-button,
.text-and-button-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.text-and-button {
  flex: 1;
  flex-direction: column;
  gap: 0.81em;
}
.text-and-button-wrapper {
  align-self: stretch;
  flex-direction: row;
}
.des-and-bbn,
.frame-child1 {
  position: absolute;
  border-radius: 16px;
  box-sizing: border-box;
}
.des-and-bbn {
  top: -17.63em;
  /* left: 1.38em; */
  background-color: #f9fbff;
  width: 77vw;
  display: flex;
  flex-direction: column;
  padding: 0.75em;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
  color: #f8f8ff;
  position: relative;
  margin: 0 auto;
}
.frame-child1 {
  top: 0;
  left: 0;
  background-color: #f6f4fc;
  border: 1px solid rgba(46, 58, 89, 0.08);
  width: 100%;
  height: 5.94em;
  overflow: hidden;
}
.pie-chart-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.p {
  margin: 0;
}
.div26 {
  position: relative;
  font-size: 1em;
  letter-spacing: 0.01em;
  line-height: 130%;
}
.pie-chart-parent {
  position: absolute;
  top: 0.69em;
  left: 0.69em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.94em;
}
.buttons-tabs3 {
  position: relative;
  border-radius: 15px;
  background-color: #fff;
  width: 77vw;
  height: 4.06em;
  overflow: hidden;
  flex-shrink: 0;
}
.buttons-tabs-wrapper {
  position: absolute;
  top: 0.94em;
  left: 0.81em;
  width: 18.75em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.frame-parent13,
.pull-stats {
  position: relative;
  top: -58em;
  /* left: 0.5em; */
  width: 83.6vw;
  height: 5.94em;
  margin: 0 auto;
}

.pull-stats {
  top: 2.75em;

  border-radius: 15px;
  width: 87.7vw;
  height: 46.25em;
  overflow: hidden;
}
.new-pull-parent {
  position: relative;
  width: 100%;
  height: 49.63em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
