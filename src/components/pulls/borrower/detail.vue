<template>
  <modal from="pulls">
    <div class="wrapper">
      <div class="header">Информация о пуле №1223</div>

      <div class="pull-stats">
        <div class="pull-stats1">
          <div class="frame-group">
            <div class="frame-container">
              <div class="frame-inner"></div>
              <div class="buttons-tabs-parent">
                <div class="buttons-tabs">
                  <div class="ton-parent">
                    <div class="ton">37 000 TON</div>
                    <div class="div10">Доступно ликвидности:</div>
                  </div>
                  <img
                    class="pie-chart-icon"
                    alt=""
                    src="@/assets/images/pie-chart.svg"
                  />
                </div>
                <div class="frame-div">
                  <div class="percent-parent">
                    <img
                      class="percent-icon"
                      alt=""
                      src="@/assets/images/percent.svg"
                    />

                    <div class="div11">1 день = 1%</div>
                  </div>
                  <div class="percent-parent">
                    <img
                      class="percent-icon"
                      alt=""
                      src="@/assets/images/clock.svg"
                    />

                    <div class="div11">3 дня = 0%</div>
                  </div>
                  <div class="percent-parent">
                    <img
                      class="percent-icon"
                      alt=""
                      src="@/assets/images/activity.svg"
                    />

                    <div class="div11">ROI = 75%</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="frame-parent1">
              <div class="roi-wrapper">
                <div class="div11">Состояние:</div>
              </div>
              <div class="statuspull-wrapper">
                <div class="statuspull">
                  <div class="div14">Активен</div>
                </div>
              </div>
            </div>
            <div class="frame-parent2">
              <div class="frame-parent3">
                <div class="roi-wrapper">
                  <div class="roi">Ставка:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="div16">1% в день</div>
                </div>
              </div>
              <div class="line-div"></div>
              <div class="frame-parent3">
                <div class="roi-wrapper">
                  <div class="roi">На срок:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="div16">до 30 дней</div>
                </div>
              </div>
              <div class="line-div"></div>
              <div class="frame-parent3">
                <div class="roi-wrapper">
                  <div class="roi">Беспроцентный период:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="div16">3 дня</div>
                </div>
              </div>
              <div class="line-div"></div>
              <div class="frame-parent3">
                <div class="roi-wrapper">
                  <div class="roi">Всего ликвидности:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="div16">450 000 TON</div>
                </div>
              </div>
              <div class="line-div"></div>
              <div class="frame-parent3">
                <div class="roi-wrapper">
                  <div class="roi">Доступно ликвидности:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="div16">37 000 TON</div>
                </div>
              </div>
              <div class="line-div"></div>
              <div class="frame-parent3">
                <div class="roi-wrapper">
                  <div class="roi">Доход за 30 дней:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="div16">75% годовых</div>
                </div>
              </div>
              <div class="line-div"></div>
              <div class="frame-parent3">
                <div class="roi-wrapper">
                  <div class="roi">% Проданных займов:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="div16">20%</div>
                </div>
              </div>
              <div class="line-div"></div>
              <div class="frame-parent3">
                <div class="roi-wrapper">
                  <div class="roi">Пулов сгенерировано для инвесторов:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="div16">10 574 раз</div>
                </div>
              </div>
              <div class="line-div"></div>
              <div class="frame-parent3">
                <div class="roi-wrapper">
                  <div class="roi">Количество инвесторов:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="div16">130 человек</div>
                </div>
              </div>
              <div class="line-div"></div>
              <div class="frame-parent3">
                <div class="roi-wrapper">
                  <div class="roi">Дата создания:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="div16">22. 05. 2023</div>
                </div>
              </div>
            </div>
            <div class="percent-group">
              <div class="frame-parent3">
                <div class="roi-wrapper_tag roi-wrapper">
                  <div class="roi">Моя ликвидность</div>
                </div>
              </div>
              <div class="frame-parent3">
                <div class="roi-wrapper">
                  <div class="roi">Всего доходность:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="div16">7 TON</div>
                </div>
              </div>
              <div class="frame-parent3">
                <div class="roi-wrapper">
                  <div class="roi">Текущая доходность:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="div16">45%</div>
                </div>
              </div>
              <div class="frame-parent3">
                <div class="roi-wrapper">
                  <div class="roi">Доходность за 30 дней:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="div16">75% годовых</div>
                </div>
              </div>
            </div>
          </div>

          <div class="des-and-bbn">
            <div class="text-and-button-parent">
              <div class="text-and-button">
                <div
                  class="buttons-tabs2"
                  id="buttonsTabsContainer4"
                  @click="() => (isWithrow = true)"
                >
                  <div class="text3">Изъять ликвидность</div>
                </div>
                <div class="buttons-tabs2" id="buttonsTabsContainer4">
                  <div class="text3" @click="() => (isAdd = true)">
                    Добавить ликвидность
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <add v-if="isAdd" @on-close="() => (isAdd = false)"></add>
      <withrow v-if="isWithrow" @on-close="() => (isWithrow = false)"></withrow>
      <!--<app-bar></app-bar>-->
    </div>
  </modal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { computed } from "vue";
import appBar from "@/components/ui-kit/app-bar.vue";
import modal from "@/components/ui-kit/modal.vue";
import { useRouter } from "vue-router";
import satusModal from "@/components/base/status-modal.vue";
import withrow from "../creditor/liquidity/withrow.vue";
import add from "../creditor/liquidity/add.vue";

const variant = computed(() => {
  return window.history.state.variant;
});

const isAdd = ref(false);
const isWithrow = ref(false);

const router = useRouter();
const toManage = () => {
  router.push({
    name: "pulls-liquidity-management",
    state: { variant: variant.value },
  });
};
</script>

<style scoped lang="scss">
.wrapper {
  height: 1160px;
}
.pull {
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
  top: 2em;

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
  /* Fallback: Set a background color. */
  background-color: red;

  /* Create the gradient. */
  background: linear-gradient(
    38.6deg,
    #2e2c2c,
    #4b4949 67.46%,
    #131313,
    rgba(0, 0, 0, 0.94),
    #434343
  );

  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
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
.div14_change {
  left: 6em;
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
  justify-content: space-between;
}
.statuspull-wrapper {
  flex: 1;
  padding: 0.13em 0;
  color: #1cbd62;
  justify-content: flex-end;
}
.frame-parent1 {
  align-self: stretch;
  gap: 1em;
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
  justify-content: space-between;
  gap: 1em;
}
.line-div {
  align-self: stretch;
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  height: 0.06em;
}
.ton-wrapper {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0;
  align-items: flex-end;
  justify-content: flex-end;
}
.roi {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.frame-parent2,
.roi-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.roi-wrapper {
  width: 40vw;
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
  flex-direction: column;
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
  text-align: center;
  top: 0.5em;
  font-size: 0.88em;
  line-height: 120%;
  font-weight: 500;
}
.text2 {
  left: 1.79em;
}
.text3 {
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
  top: -3em;
  align-items: center;
  gap: 0.88em;
  margin: 0px auto;
}
.pull-stats {
  position: relative;
  top: 6em;
  text-align: left;
  margin: 0px 24px;
  border: 0.5px solid rgba(46, 58, 89, 0.4);
  border-radius: 15px;
  margin-bottom: 13em;
  height: 800px;
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
  top: -22em;
  /* left: 2.81em; */
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
  top: -21.75em;
  /* left: 1.5em; */
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

.roi-wrapper_tag {
  & .roi {
    background: #ffff;
    padding: 5px;
    border-radius: 8.79px;
  }
}
</style>
