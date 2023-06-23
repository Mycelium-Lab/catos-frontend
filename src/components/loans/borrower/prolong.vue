<template>
  <modal from="pulls">
    <div class="wrapper">
      <div class="pull-stats">
        <div class="pull-stats-child"></div>
        <div class="pull-stats1">
          <div class="frame-group">
            <div class="frame-container">
              <div class="frame-inner"></div>
              <div class="buttons-tabs-parent">
                <div class="buttons-tabs">
                  <div class="group">
                    <div class="div8">Займ на:</div>
                    <div class="ton">13 000 TON</div>
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

                    <div class="div9">1 день = 1%</div>
                  </div>
                  <div class="percent-parent">
                    <img
                      class="percent-icon"
                      alt=""
                      src="@/assets/images/clock.svg"
                    />

                    <div class="div10">
                      <p class="p">Пролонгация</p>
                      <p class="p">на 30 дней</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="frame-parent1">
              <div class="frame-parent2">
                <div class="frame">
                  <div class="div11">Ставка:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="div12">1% в день</div>
                </div>
              </div>
              <div class="line-div"></div>
              <div class="frame-parent2">
                <div class="frame">
                  <div class="div11">Беспроцентный период:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="div14">
                    <p class="p2">до 05.02.22, 16:00</p>
                    <p class="p3">(закончен)</p>
                  </div>
                </div>
              </div>
              <div class="line-div"></div>
              <div class="frame-parent2">
                <div class="frame">
                  <div class="div11">Начисленные проценты:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="div12">512 TON</div>
                </div>
              </div>
              <div class="line-div"></div>
              <div class="frame-parent2">
                <div class="frame">
                  <div class="div11">Сумма к возвращению:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="div12">13 512 TON</div>
                </div>
              </div>
              <div class="line-div"></div>
              <div class="frame-parent2">
                <div class="frame">
                  <div class="div11">Доступно для выдачи:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="div12">257 547 раз</div>
                </div>
              </div>
              <div class="line-div"></div>
              <div class="frame-parent2">
                <div class="frame">
                  <div class="div19">Вернуть не позднее:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="div14">
                    <p class="p2">13.02.22, 16:00</p>
                    <p class="p5">(займ просрочен)</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="frame-wrapper">
              <div class="frame-parent8">
                <div class="info-parent">
                  <img
                    class="info-icon"
                    alt=""
                    src="@/assets/images/iconsinfo.svg"
                  />

                  <div class="div21">Пролонгация займа</div>
                </div>
                <div class="div22">
                  Позволяет продлить дату погашения до 30 дней. Для пролонгации
                  займа вам нужно оплатить только начисленные проценты
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="wrapper10">
          <div class="div23">
            <span>Пролонгация займа </span>
            <span class="span">#557946</span>
          </div>
        </div>
        <div class="buttonnext" @click="toPay">
          <b class="ton-kepeer">Оплатить 512 TON и пролонгировтаь</b>
        </div>
        <div class="des-and-bbn">
          <div class="text-and-button-wrapper">
            <div class="text-and-button" @click="toLoan">
              <div class="buttons-tabs1">
                <div class="text">Вернуться в мои займы</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
import modal from "@/components/ui-kit/modal.vue";
const toLoan = () => {
  router.push({ name: "loans-borrower" });
};
const toPay = () => {
  router.push({
    name: "pulls-borrower-get-loan-scan",
    state: {
      title: "Extend the loan",
      subTitle:
        "Scan the QR code and pay 512 TON with Tonkeeper using  EQB5...dzE1hа44",
      actionTitle: "Extend the loan",
      bottomSubTitle: "policy",
      from: "prolong",
      modal: {
        variant: 4,
        title: "Займ #567946 прологирован",
      },
    },
  });
};
</script>

<style scoped>
.wrapper {
  height: 900px;
}
.frame-inner,
.pull-stats-child {
  position: absolute;
  left: 0;
  box-sizing: border-box;
}
.pull-stats-child {
  width: 87.7vw;
  top: calc(50% - 214.5px);
  right: 0;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 0.5px solid rgba(46, 58, 89, 0.4);
  height: 38.5em;
}
.frame-inner {
  top: 0;
  border-radius: 16px;
  background-color: #f6f4fc;
  border: 0.5px solid rgba(46, 58, 89, 0.08);
  width: 100%;
  height: 5.94em;
  overflow: hidden;
}
.div8,
.ton {
  position: relative;
}
.div8 {
  font-size: 0.63em;
  line-height: 0.68em;
  font-weight: 300;
  color: rgba(59, 59, 59, 1);
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
.group {
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
  width: 43.1vw;
  height: 4.06em;
}
.percent-icon {
  width: 0.75em;
  height: 0.75em;
}
.div9 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
}
.percent-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.p {
  margin: 0;
}
.div10 {
  position: relative;
  font-size: 0.75em;
  line-height: 120%;
}
.buttons-tabs-parent,
.frame-div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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
  width: 100%;
  height: 5.94em;
}
.div11 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
  font-weight: 300;
}
.frame {
  width: 36.4vw;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.div12 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
  font-weight: 300;
}
.frame-parent2 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2.8em;
}
.line-div {
  align-self: stretch;
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  height: 0.06em;
}
.p2 {
  margin: 0;
  font-weight: 300;
}
.p3 {
  margin: 0;
  color: #ff9901;
}
.div14 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 120%;
}
.ton-wrapper {
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0;
  align-items: flex-start;
  justify-content: flex-start;
}
.div19 {
  position: relative;
  font-size: 0.75em;
  line-height: 120%;
  font-weight: 300;
}
.p5 {
  margin: 0;
  color: red;
}
.frame-parent1 {
  width: 77vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.div21,
.info-icon {
  position: relative;
  flex-shrink: 0;
}
.info-icon {
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
}
.div21 {
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
  display: inline-block;
  width: 17.57em;
}
.info-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.div22 {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.frame-parent8,
.frame-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent8 {
  flex: 1;
  flex-direction: column;
  gap: 0.25em;
}
.frame-wrapper {
  border-radius: 11px;
  background-color: #f6f4fc;
  width: 77vw;
  flex-direction: row;
  padding: 0.63em 0.75em;
  box-sizing: border-box;
}
.frame-group,
.pull-stats1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.frame-group {
  border-radius: 20px;
  padding: 0 0 0.75em;
  gap: 0.88em;
  width: 83.6vw;
}
.pull-stats1 {
  position: relative;
  top: 2.63em;
  width: 100%;

  margin: 0 auto;
}
.span {
  text-decoration: underline;
  color: rgba(87, 126, 247, 0.96);
}
.div23 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.wrapper10 {
  position: absolute;
  top: 0;
  left: calc(50% - 112.5px);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0.75em;
  align-items: center;
  justify-content: center;
}
.ton-kepeer {
  position: relative;
  font-size: 0.88em;
  line-height: 2em;
}
.buttonnext {
  position: relative;
  top: 3.8em;
  /* left: calc(50% - 150px); */
  border-radius: 20px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  width: 77vw;
  height: 3em;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  /* padding: 0.5em 7.25em; */
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  color: #f3f3f3;
  cursor: pointer;
}
.text {
  position: absolute;
  top: 0.5em;
  left: calc(50% - 86px);
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.buttons-tabs1 {
  align-self: stretch;
  position: relative;
  border-radius: 25px;
  border: 0.5px solid rgba(87, 126, 247, 0.96);
  box-sizing: border-box;
  height: 2em;
  cursor: pointer;
}
.text-and-button {
  flex: 1;
  flex-direction: column;
}
.des-and-bbn,
.text-and-button,
.text-and-button-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.text-and-button-wrapper {
  align-self: stretch;
  flex-direction: row;
}
.des-and-bbn {
  position: relative;
  top: 4.9em;
  /* left: 1.31em; */
  border-radius: 16px;
  background-color: #f9fbff;
  width: 77vw;
  flex-direction: column;
  padding: 0.75em;
  box-sizing: border-box;
  text-align: right;
  margin: 0 auto;
}
.pull-stats,
.swipe-down {
  position: relative;
  top: 1.5em;
  /* left: 1.5em; */
  width: 87.7vw;
  height: 37.56em;
  margin: 0 auto;
}
.swipe-down {
  top: 0.75em;
  left: 10.81em;
  border-radius: 25px;
  background-color: #cad0e4;
  width: 2.63em;
  height: 0.31em;
}
.pull-stats-parent {
  position: relative;
  border-radius: 30px 30px 0 0;
  background-color: #fff;
  box-shadow: 0 12px 12px rgba(151, 71, 255, 0.04);

  box-sizing: border-box;
  width: 100%;
  height: 45.94em;
  overflow: hidden;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
