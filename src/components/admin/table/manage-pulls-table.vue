<template>
  <div class="frame-parent-pulls-table">
    <div class="info-parent">
      <div class="info">
        <div class="statusbar-cards">
          <div class="buttons-tabs">
            <div class="iconsbar-cards-parent">
              <img
                class="iconsbar-cards"
                alt=""
                src="@/assets/images/pie-chart.svg"
              />
              <div class="txt1-parent">
                <div class="txt1">Текущий долг:</div>
                <div class="ton">450 000 TON</div>
                <div class="txt2">Доступно ликвидоности</div>
              </div>
            </div>
            <div class="status-all">
              <div class="colors-graphsorders-parent">
                <img
                  class="colors-graphsorders-icon"
                  alt=""
                  src="@/assets/images/colors-graphsorders1.svg"
                />
                <div class="div">Активен</div>
              </div>
              <img
                class="iconchange"
                alt=""
                src="/src/views/public/iconchange.svg"
              />
            </div>
          </div>
          <div class="frame-group">
            <div class="icons2bar-cards-parent">
              <img
                class="icons2bar-cards"
                alt=""
                src="@/assets/images/percent.svg"
              />
              <div class="div1">1 день = 1%</div>
            </div>
            <div class="icons2bar-cards-parent">
              <img
                class="icons2bar-cards1"
                alt=""
                src="@/assets/images/clock.svg"
              />
              <div class="div1">3 дня = 0%</div>
            </div>
            <div class="icons2bar-cards-parent">
              <img
                class="icons2bar-cards"
                alt=""
                src="@/assets/images/activity.svg"
              />
              <div class="div1">ROI = 75%</div>
            </div>
            <div class="iconsbar-cards-parent">
              <img
                class="icons2bar-cards"
                alt=""
                src="@/assets/images/iconscalendar.svg"
              />
              <div class="div1">30 дней</div>
            </div>
          </div>
        </div>
        <div class="info-inner">
          <div class="parent">
            <div class="div4">Кредитор:</div>
            <div class="radiobutton-parent">
              <div class="div5">Деньги до зарплаты</div>
              <img
                class="radiobutton-icon"
                alt=""
                src="@/assets/images/investore.svg"
              />
            </div>
          </div>
        </div>
        <div class="frame-container">
          <div class="frame-parent1">
            <div class="wrapper">
              <div class="roi">Ставка:</div>
            </div>
            <div class="container">
              <div class="div7">1 % в день</div>
            </div>
          </div>
          <div class="frame-child" />
          <div class="frame-parent1">
            <div class="wrapper">
              <div class="roi">На срок:</div>
            </div>
            <div class="container">
              <div class="div7">30 дней</div>
            </div>
          </div>
          <div class="frame-child" />
          <div class="frame-parent1">
            <div class="wrapper">
              <div class="roi">Беспроцентный период:</div>
            </div>
            <div class="container">
              <div class="div7">3 дня</div>
            </div>
          </div>
          <div class="frame-child" />
          <div class="frame-parent1">
            <div class="wrapper">
              <div class="roi">Всего ликвидности:</div>
            </div>
            <div class="container">
              <div class="div7">450 000 TON</div>
            </div>
          </div>
          <div class="frame-child" />
          <div class="frame-parent1">
            <div class="wrapper">
              <div class="roi">Свободно ликвидности:</div>
            </div>
            <div class="container">
              <div class="div7">37 000 TON</div>
            </div>
          </div>
          <div class="frame-child" />
          <div class="frame-parent1">
            <div class="wrapper">
              <div class="roi">ROI:</div>
            </div>
            <div class="container">
              <div class="div7">75% годовых</div>
            </div>
          </div>
          <div class="frame-child2" />
        </div>
      </div>
      <div class="des-and-bbn">
        <div class="text-and-button">
          <div class="buttons-tabs1">
            <div class="text">Займы</div>
          </div>
          <div class="buttons-tabs2" @click="toDetail">
            <div class="text1">Подробнее</div>
          </div>
        </div>
      </div>
      <div class="filtr">
        <div class="wrapper7">
          <div class="div15">пул #12345</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const toDetail = () => {
  router.push({ name: "manage-pulls-detail" });
};
</script>
<style scoped>
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
  display: none;
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
.div {
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
.div1 {
  position: relative;
  font-size: 0.75em;
  line-height: 120%;
  font-weight: 300;
}
.icons2bar-cards-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.icons2bar-cards1 {
  position: relative;
  width: 0.75em;
  height: 0.75em;
}
.frame-group {
  width: 6.56em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
  color: #3b3b3b;
}
.statusbar-cards {
  border-radius: 16px;
  background-color: #f6f4fc;
  width: 20.13em;
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75em;
  color: #8181a5;
}
.div4 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
}
.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.div5 {
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
.parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.75em;
  width: 100%;
}
.info-inner {
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid #f6f4fc;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.38em 0.81em;
  align-items: flex-start;
  justify-content: center;
}
.wrapper {
  width: 7.19em;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.div7 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.container {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent1 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4.06em;
}
.frame-child {
  align-self: stretch;
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  height: 0.06em;
}
.roi {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.frame-child2 {
  align-self: stretch;
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  height: 0.06em;
  display: none;
}
.frame-container {
  width: 18.75em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.info {
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 0em 0em 0.25em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75em;
  z-index: 0;
}
.text {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 130%;
  font-weight: 500;
}
.buttons-tabs1 {
  align-self: stretch;
  border-radius: 25px;
  background-color: rgba(87, 126, 247, 0.96);
  height: 2em;
  display: flex;
  flex-direction: row;
  padding: 0.44em 5.5em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.text1 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 500;
}
.buttons-tabs2 {
  align-self: stretch;
  border-radius: 25px;
  border: 0.5px solid rgba(87, 126, 247, 0.96);
  box-sizing: border-box;
  height: 2em;
  display: flex;
  flex-direction: row;
  padding: 0.44em 5.5em;
  align-items: center;
  justify-content: center;
  color: #555562;
}
.text-and-button {
  flex: 1;
  width: 17.25em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.81em;
}
.des-and-bbn {
  border-radius: 16px;
  background-color: #f9fbff;
  width: 18.75em;
  display: flex;
  flex-direction: column;
  padding: 0.75em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  text-align: right;
  color: #fefefe;
}
.div15 {
  position: relative;
  font-size: 0.63em;
  line-height: 0.68em;
}
.wrapper7 {
  border-radius: 8.79px;
  border: 0.3px solid #656060;
  box-sizing: border-box;
  height: 1.25em;
  display: flex;
  flex-direction: row;
  padding: 0.42em;
  align-items: center;
  justify-content: center;
  z-index: 0;
}
.filtr {
  margin: 0 !important;
  position: absolute;
  top: -0.62em;
  left: 1.31em;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 2;
}
.info-parent {
  position: absolute;
  top: 0em;
  left: calc(50% - 171px);
  border-radius: 16px;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  display: flex;
  flex-direction: column;
  padding: 1em 0.63em 1.25em;
  align-items: center;
  justify-content: flex-start;
  gap: 1em;
}
.frame-parent-pulls-table {
  position: relative;

  height: 34.25em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
