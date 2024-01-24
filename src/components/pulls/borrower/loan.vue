<template>
  <div class="new-pull">
    <div class="description1">
      <div class="div46">Получить займ из пула #12345</div>
    </div>
    <div class="fields-parent">
      <div class="fields">
        <div class="parent6">
          <div class="div47">Сумма займа:</div>
          <div class="frame-parent14">
            <range-slider
              :style="{ width: '77vw', position: 'relative' }"
              inputLabel="ton"
              :modelValue="13000"
              :max="50000"
            >
              <template v-slot:left-label>
                <span class="left-label"><span>от</span> 0</span>
              </template>
              <template v-slot:right-label>
                <span class="right-label"><span>до</span> 50 000</span>
              </template>
            </range-slider>
          </div>
        </div>
      </div>
      <div class="fields">
        <div class="parent6">
          <div class="div47">На срок:</div>
          <div class="frame-parent14">
            <range-slider
              :style="{ width: '77vw', position: 'relative' }"
              inputLabel="day"
              :modelValue="7"
              :max="30"
            >
              <template v-slot:left-label>
                <span class="left-label"><span>от</span> 1</span>
              </template>
              <template v-slot:right-label>
                <span class="right-label_day right-label"
                  ><span>до</span> 30</span
                >
              </template>
            </range-slider>
          </div>
        </div>
      </div>
    </div>
    <div class="des-and-bbn1">
      <div class="text-and-button2" @click="next">
        <div class="frame-parent16">
          <img class="frame-child5" alt="" src="@/assets/images/stars.svg" />

          <div class="text5">Получить займ</div>
        </div>
      </div>
      <div class="text-and-button3" @click="toBack">
        <div class="buttons-tabs5">
          <div class="text6">Отмена</div>
        </div>
      </div>
    </div>
    <div class="frame-parent17">
      <div class="alert-triangle-parent">
        <div class="div47">Кредитор:</div>
        <div class="alert-triangle-parent-1 alert-triangle-parent">
          <div class="div55">Деньги до зарплаты</div>
          <img
            class="radiobutton-icon"
            alt=""
            src="@/assets/images/investore.svg"
          />
        </div>
      </div>
      <div class="frame-child6"></div>
      <div class="frame-parent18">
        <div class="wrapper10">
          <div class="div47">Ставка:</div>
        </div>
        <div class="ton-wrapper">
          <div class="div57">1% в день</div>
        </div>
      </div>
      <div class="frame-child6"></div>
      <div class="frame-parent18">
        <div class="wrapper10">
          <div class="div47">Беспроцентный период:</div>
        </div>
        <div class="ton-wrapper">
          <div class="div57">3 дня</div>
        </div>
      </div>
    </div>
    <div class="frame-parent20">
      <div class="frame-parent21">
        <div class="wrapper14">
          <div class="div60">Итого:</div>
        </div>
        <div class="header1">
          <div class="div61">Сумма займа:</div>
          <div class="ton4">13 910 TON</div>
        </div>
        <div class="parent10">
          <div class="div61">Возврат в течении:</div>
          <div class="ton4">7 дней</div>
        </div>
      </div>
      <div class="fields">
        <div class="info-1">
          <div class="div64">
            Вы можете погасить займ досрочно заплатив меньший процент по кредиту
          </div>
        </div>
        <div class="info-2">
          <div class="info-2-inner">
            <div class="frame-parent22">
              <div class="alert-triangle-parent">
                <img
                  class="iconsedit-outline"
                  alt=""
                  src="@/assets/images/alerttriangle.svg"
                />

                <div class="div65">Внимание!</div>
              </div>
              <div class="div66">
                Если не вернуть займ вовремя, ваш долг может быть продан
                коллекторам
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
import rangeSlider from "@/components/ui-kit/range-slider.vue";
import catosCheckbox from "@/components/ui-kit/catos-checkbox.vue";

const toBack = () => {
  router.go(-1);
};
const next = () => {
  router.push({
    name: "pulls-borrower-get-loan-payment",
    state: {
      title: "Take the loan",
      subTitle: "Scan the QR code with your phone's camera  Tonkeeper",
      routerName: "pulls-borrower-get-loan-result",
      actionTitle: "Make transaction with Tokenkeeper",
      bottomSubTitle: "policy",
    },
  });
};
</script>

<style scoped lang="scss">
.buttonnext- {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 20px;
  width: 4.66em;
  height: 50.97em;
}
.bg-icon,
.buttonnext-1,
.pull {
  position: absolute;
  top: 0;
  left: 0;
  width: 35.19em;
  height: 20.88em;
}
.buttonnext-1,
.pull {
  top: 52.38em;
  width: 36.44em;
  height: 215.63em;
}
.pull {
  top: 0;
  background-color: #fff;
  width: 24.38em;
  height: 57.94em;
  overflow: hidden;
}
.div9 {
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
  top: 5.81em;
  left: 2.81em;
  border-radius: 7px;
  width: 18.75em;
  display: flex;
  flex-direction: column;
  padding: 0.44em 0;
  align-items: center;
  justify-content: center;
}
.pull-stats-child {
  width: 100%;
  top: calc(50% - 235.5px);
  right: 0;
  left: 0;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 0.5px solid #2e3a59;
  height: 30.25em;
}
.div10 {
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
  width: 20.38em;
  height: 5.94em;
  overflow: hidden;
}
.div11,
.ton {
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.ton {
  font-size: 1.13em;
  line-height: 0.89em;
  background: linear-gradient(
    38.6deg,
    #2e2c2c,
    #4b4949 67.46%,
    #131313,
    rgba(0, 0, 0, 0.94),
    #434343
  );
}
.div11 {
  font-size: 0.63em;
  line-height: 0.68em;
  font-weight: 300;
  background: linear-gradient(#3b3b3b, #3b3b3b), #3b3b3b;
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
.div12 {
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
  width: 20.38em;
  height: 5.94em;
}
.div15 {
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
.frame-parent1,
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
.frame-parent1 {
  width: 18.75em;
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
.div23 {
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
  width: 18.75em;
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
  position: absolute;
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
  position: absolute;
  top: 2em;
  left: 0.5em;
  align-items: center;
  gap: 0.88em;
}
.pull-stats {
  position: absolute;
  top: 20.75em;
  left: 1.5em;
  width: 21.38em;
  height: 31.06em;
  text-align: left;
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
.div24 {
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
.frame-parent8,
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
.frame-parent8 {
  position: absolute;
  top: 12.25em;
  left: 2.81em;
  width: 18.75em;
  gap: 3.75em;
  text-align: left;
}
.fill {
  position: absolute;
  top: 0.06em;
  left: 0.06em;
  border-radius: 20px;
  background-color: #fdd674;
  border: 0.5px solid rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  width: 7.38em;
  height: 2.06em;
}
.div26,
.div27 {
  position: absolute;
  top: 0.71em;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 110%;
}
.div26 {
  left: 1.68em;
  background: linear-gradient(rgba(59, 59, 59, 0.96), rgba(59, 59, 59, 0.96)),
    #000;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.div27 {
  left: 10.14em;
  display: inline-block;
  width: 5.5em;
}
.button-slider {
  position: absolute;
  top: 8.56em;
  left: 4.5em;
  border-radius: 20px;
  background-color: #f6f4fc;
  width: 15.38em;
  height: 2.19em;
  overflow: hidden;
  color: rgba(59, 59, 59, 0.75);
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
.buttonnext,
.group-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.group-container {
  gap: 0.19em;
}
.buttonnext {
  position: absolute;
  top: 15.75em;
  left: 1.5em;
  border-radius: 20px;
  background: linear-gradient(89.81deg, #9747ff, #ad6fff);
  border: 0.5px solid #fdd674;
  box-sizing: border-box;
  width: 21.38em;
  height: 3em;
  overflow: hidden;
  padding: 0.5em 0.38em 0.5em 0;
  cursor: pointer;
  color: #fff;
}
.div29 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 120%;
}
.description {
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
.div30 {
  position: absolute;
  top: 3.8em;
  left: 32em;
  font-size: 0.63em;
  text-decoration: underline;
  letter-spacing: 0.01em;
  line-height: 100%;
  font-weight: 500;
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
.div31,
.div32 {
  position: relative;
  font-size: 0.88em;
}
.div31 {
  line-height: 150%;
  font-weight: 300;
}
.div32 {
  letter-spacing: 0.01em;
  line-height: 100%;
}
.iconsedit-outline {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
  top: -0.1em;
}
.tag {
  border-radius: 24.18px;
  background-color: rgba(224, 219, 238, 0.82);
  height: 1.75em;
  padding: 0.38em 0.75em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.group,
.tag,
.tag1,
.tags-brand {
  display: flex;
  flex-direction: row;
  gap: 0.75em;
}
.tag1 {
  border-radius: 24.18px;
  border: 1px solid #e4e0f1;
  box-sizing: border-box;
  height: 1.75em;
  padding: 0.38em 0.75em;
  align-items: center;
  justify-content: center;
}
.group,
.tags-brand {
  align-items: flex-start;
  justify-content: flex-start;
}
.group {
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
.div37 {
  position: relative;
  font-size: 0.95em;
  line-height: 100%;
}
.tag3 {
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
.tag4 {
  display: flex;
  flex-direction: row;
}
.tag4 {
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
  width: 21em;
  height: 1.63em;
}
.frame-parent10,
.parent1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent10 {
  gap: 0.63em;
  color: rgba(46, 58, 89, 0.4);
}
.parent1 {
  gap: 0.88em;
}
.pro-beats1 {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.02em;
  line-height: 100%;
}
.tag5,
.tag6 {
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
.tag6 {
  width: 9.56em;
}
.scroll-thumb-icon1 {
  position: relative;
  width: 20.31em;
  height: 1.63em;
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
.div43 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 100%;
  font-weight: 300;
}
.ton-kepeer {
  position: relative;
  font-size: 1em;
  line-height: 1.75em;
}
.buttonnext1,
.parent5 {
  display: flex;
  align-items: center;
}
.buttonnext1 {
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
.parent5 {
  position: absolute;
  top: 48.69em;
  left: 2em;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5em;
}
.battery-icon,
.div28 {
  position: absolute;
  overflow: hidden;
}
.div28 {
  top: 53.88em;
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
  top: 39.4%;
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
.div44 {
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
.pull-parent,
.swipe-down1 {
  position: absolute;
  top: 0;
  left: -0.03em;
  background-color: #f6f6f6;
  width: 24.38em;
  height: 110.81em;
}
.swipe-down1 {
  top: 0.75em;
  left: 10.81em;
  border-radius: 25px;
  background-color: #cad0e4;
  width: 2.63em;
  height: 0.31em;
}
.div46 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  letter-spacing: 0.01em;
  line-height: 120%;
}
.description1 {
  position: relative;
  top: 2.19em;

  width: 77vw;

  text-align: center;
  margin: 0 auto;
}
.div47,
.div48 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 400;
}
.div48 {
  font-size: 0.75em;
  line-height: 100%;
}
.tag11 {
  flex: 1;
  border-radius: 16px;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.38em 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.ton3 {
  position: relative;
  font-size: 0.95em;
  letter-spacing: 0.02em;
  line-height: 100%;
}
.tag12 {
  border-radius: 16px;
  background-color: #f6f4fc;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  width: 9.94em;
  height: 2.5em;
  padding: 0.38em 1.5em;
  align-items: center;
  justify-content: center;
}
.tag-parent2,
.tag12,
.tag13 {
  display: flex;
  flex-direction: row;
}
.tag13 {
  flex: 1;
  border-radius: 16px;
  height: 2.5em;
  padding: 0.38em 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  color: rgba(46, 58, 89, 0.4);
}
.tag-parent2 {
  align-self: stretch;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.38em;
}
.scroll-thumb-icon4 {
  position: relative;
  width: 18.78em;
  height: 2.38em;
}
.frame-parent14 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
  color: #2e3a59;
  position: relative;
  margin: 0 auto;
}
.parent6 {
  width: 77vw;
  position: relative;
  margin: 0 auto;
  gap: 0.88em;
}
.fields,
.parent6 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 77vw;
  position: relative;
  margin: 0 auto;
}
.span41 {
  font-weight: 300;
  color: rgba(46, 58, 89, 0.4);
}
.tag-parent3,
.tag15 {
  display: flex;
  flex-direction: row;
}
.tag15 {
  border-radius: 16px;
  background-color: #f6f4fc;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  width: 9.94em;
  height: 2.5em;
  padding: 0.38em 1.5em;
  align-items: center;
  justify-content: center;
  color: #3b3b3b;
}
.tag-parent3 {
  align-self: stretch;
  align-items: flex-start;
  justify-content: flex-start;
}
.fields-parent {
  position: relative;
  top: 14em;

  border-radius: 14px;
  border: 1px solid rgba(165, 146, 221, 0.14);
  display: flex;
  flex-direction: column;
  padding: 1.5em 1.31em;
  align-items: center;

  margin: 0 auto;
  gap: 2em;
  width: 87.7vw;
  height: 16.5em;
  padding-bottom: 0em;
}
.frame-child5 {
  margin: 0 !important;
  top: 0;
  left: 0;
  width: 1.22em;
  height: 1.13em;
  z-index: 0;
}
.group-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
}
.text5 {
  position: relative;
  font-size: 1em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.frame-parent16,
.text-and-button2 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.frame-parent16 {
  flex-direction: row;
  gap: 0.35em;
}
.text-and-button2 {
  align-self: stretch;
  border-radius: 27px;
  background-color: #9747ff;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  flex-direction: column;
  color: #f8f8ff;
  cursor: pointer;
}
.text6 {
  position: absolute;
  top: 0.5em;
  left: calc(50% - 28px);
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.buttons-tabs5 {
  align-self: stretch;
  position: relative;
  border-radius: 25px;
  height: 2em;
}
.des-and-bbn1,
.text-and-button3 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.text-and-button3 {
  align-self: stretch;
  color: #555562;
}
.des-and-bbn1 {
  position: relative;
  top: 34em;
  /* left: 2.81em; */
  border-radius: 16px;
  background-color: #f9fbff;
  width: 87.7vw;
  padding: 0.75em;
  box-sizing: border-box;
  gap: 1em;
  text-align: right;
  margin: 0 auto;
}
.div55 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.frame-child6,
.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.frame-child6 {
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  width: 77vw;
  height: 0.06em;
}
.wrapper10 {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0;
  align-items: flex-start;
  justify-content: flex-start;
}
.div57 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.frame-parent17,
.frame-parent18 {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.frame-parent18 {
  width: 100%;
  flex-direction: row;
  gap: 0.5em;
}
.frame-parent17 {
  position: relative;
  top: -19.5em;
  flex-direction: column;
  gap: 0.75em;
  width: 77vw;
  margin: 0 auto;
}
.div60 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.wrapper14 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0 1.13em;
  align-items: flex-start;
  justify-content: flex-start;
  color: #8181a5;
}
.div61,
.ton4 {
  position: relative;
  font-size: 1em;
  line-height: 130%;
  font-weight: 300;
}
.ton4 {
  font-weight: 600;
}
.frame-parent21,
.header1,
.parent10 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0.25em;
}
.header1 {
  border-radius: 6px;
  padding: 0 7.25em 0 1.13em;
  align-items: center;
  padding-right: 0em;
}
.frame-parent21,
.parent10 {
  padding: 0 0 0 1.13em;
  align-items: flex-start;
}
.frame-parent21 {
  border-radius: 8px;
  background: linear-gradient(
      rgba(165, 146, 221, 0.2),
      rgba(165, 146, 221, 0.2)
    ),
    #fff;
  flex-direction: column;
  padding: 0.5em 0 0.63em;
  align-items: center;
}
.div64 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.info-1 {
  border-radius: 8px;
  border: 1px solid rgba(165, 146, 221, 0.1);
  box-sizing: border-box;
  width: 100%;
  height: 4.44em;
  display: flex;
  flex-direction: row;
  padding: 0.63em 1.13em;
  align-items: flex-start;
  justify-content: flex-start;
}
.div65 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
  display: inline-block;
  width: 17.57em;
  flex-shrink: 0;
}
.alert-triangle-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 0.63em;
  &-1 {
    justify-content: flex-end;
  }
}
.div66 {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.frame-parent22 {
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25em;
}
.frame-parent20,
.frame-parent22,
.info-2,
.info-2-inner {
  display: flex;
  justify-content: flex-start;
}
.info-2-inner {
  border-radius: 11px;
  background-color: #f9f0e1;
  width: 100%;
  flex-direction: row;
  padding: 0.63em 0.75em;
  box-sizing: border-box;
  align-items: flex-start;
}
.frame-parent20,
.info-2 {
  flex-direction: column;
}
.info-2 {
  align-items: flex-start;
  margin-top: -1.19em;
  width: 100%;
}
.frame-parent20 {
  position: relative;
  top: 1em;
  /* left: calc(50% - 171px); */
  border-radius: 14px;
  background-color: #f8f6fc;
  padding: 1.25em 1.31em;
  align-items: center;
  gap: 1.13em;
  width: 87.7vw;
  margin: 0 auto;
}
.home-icon,
.new-pull {
  position: absolute;
  overflow: hidden;
}
.new-pull {
  top: 1.5em;
  left: 0;

  background-color: #fff;
  box-sizing: border-box;
  width: 100vw;
  height: 66.38em;
  text-align: left;
}
.home-icon {
  top: 0.38em;
  left: 0.75em;
  width: 1.88em;
  height: 1.88em;
}
.div67 {
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
.div68 {
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
.div69 {
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
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.div70 {
  position: absolute;
  top: 3.6em;
  left: 0.5em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
}
.user-container-child {
  position: absolute;
  top: 0.16em;
  left: 0.13em;
  border-radius: 6px;
  border: 6px solid #c1c4c9;
  box-sizing: border-box;
  width: 1.56em;
  height: 1.56em;
}
.vector-icon {
  position: absolute;
  top: calc(50% - 9px);
  left: calc(50% - 9.5px);
  width: 1.19em;
  height: 1.19em;
}
.user-container {
  position: absolute;
  top: 0.41em;
  left: 0.81em;
  width: 1.81em;
  height: 1.81em;
  overflow: hidden;
}
.iconsmenu3 {
  width: 3.38em;
  height: 3.38em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;
}
.div71 {
  position: absolute;
  top: 3.6em;
  left: 0.6em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
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
  left: 7.14%;
}
.mask-icon {
  height: 85.71%;
  width: 85.71%;
  top: 7.14%;
  right: 7.14%;
  bottom: 7.14%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.b2 {
  height: 61.54%;
  width: 69.23%;
  top: 21.43%;
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
  opacity: 0;
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
  z-index: 7;
}
.status-icon1 {
  left: 12.5em;
  z-index: 8;
}

.div8 {
  position: relative;
  background-color: #fdd674;
  width: 100%;
  height: 74.94em;
  overflow: hidden;
  text-align: center;
  color: #3b3b3b;
  font-family: Inter;
}
.left-label,
.right-label {
  font-weight: 300;
  font-size: 12px;
  line-height: 100%;
  /* identical to box height, or 12px */

  letter-spacing: 0.02em;
  & span {
    color: rgba(46, 58, 89, 0.4);
  }
}
.left-label {
  position: absolute;
  top: 1.4em;
  left: 9.5vw;
}
.right-label {
  position: absolute;
  top: 1.4em;
  left: 61vw;
  &_day {
    right: -2vw;
  }
}
</style>
