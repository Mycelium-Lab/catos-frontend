<template>
  <desktop-modal @close="close">
    <template v-slot:title> Информация о пулле №1223 </template>
    <template v-slot:body>
      <div class="frame-parent">
        <div class="frame-group">
          <div class="parent">
            <div class="div">
              <img class="pie-chart-icon" alt="" src="/piechart.svg" />
              <div class="ton-parent">
                <div class="ton">1 537 000 TON</div>
                <div class="div1">Доход</div>
              </div>
            </div>
            <div class="frame-child" />
            <div class="frame-container">
              <div class="percent-parent">
                <img class="percent-icon" alt="" src="/percent.svg" />
                <div class="div2">1 день = 1%</div>
              </div>
              <div class="percent-parent">
                <img class="percent-icon" alt="" src="/clock.svg" />
                <div class="div2">3 дня = 0%</div>
              </div>
              <div class="percent-parent">
                <img class="percent-icon" alt="" src="/activity.svg" />
                <div class="div2">ROI = 75%</div>
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
                  class="colors-graphsorders-icon"
                  alt=""
                  src="/colors-graphsorders.svg"
                />
                <div class="c">
                  <span>Активен </span>
                  <span class="span">(отключить)</span>
                </div>
              </div>
              <img class="iconchange" alt="" src="/iconchange.svg" />
            </div>
          </div>
        </div>
        <div class="frame-parent1">
          <div class="field-parent">
            <div class="field">
              <div class="div5">Ставка:</div>
              <div class="div6">1% в день</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div5">На срок:</div>
              <div class="div6">до 30 дней</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div5">Беспроцентный период:</div>
              <div class="div6">3 дня</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div5">Всего ликвидности:</div>
              <div class="div6">450 000 TON</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div5">Доступно ликвидности:</div>
              <div class="div6">37 000 TON</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div5">Доход за 30 дней:</div>
              <div class="div6">75% годовых</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div5">% Просроченных займов :</div>
              <div class="div6">2%</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div5">% Проданных займов</div>
              <div class="div6">20%</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div5">Пуллов сгенерировано для инвесторов</div>
              <div class="div6">10 574 раз</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div5">Количество инвесторов</div>
              <div class="div6">130 человек</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-wrapper">
            <div class="field">
              <div class="div5">Дата создания:</div>
              <div class="div6">22.05.2023</div>
            </div>
          </div>
        </div>
        <div class="des-and-bbn">
          <div class="button">
            <div class="buttons-tabs">
              <div class="text">Инвестировать</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </desktop-modal>
</template>
<script setup lang="ts">
// @ts-ignore
import desktopModal from "@/components/base/desktop-modal.vue";
const emits = defineEmits(["close"]);
const close = () => {
  emits("close");
};
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
  background-color: rgba(165, 146, 221, 0.07);
  width: 13.56em;
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
  justify-content: flex-start;
  gap: 1em;
  color: #3b3b3b;
}
.frame-group {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
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
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: 0em 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
  color: #3b3b3b;
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
  align-self: stretch;
  border-radius: 16px;
  background-color: #f9fbff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
  color: #fefefe;
}
.frame-parent {
  position: relative;
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
  text-align: left;
  color: #a592dd;
  font-family: Inter;
}
</style>
