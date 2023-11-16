<template>
  <div class="frame-parent">
    <div class="frame-wrapper">
      <div class="parent">
        <div class="div">
          <img
            class="pie-chart-icon"
            alt=""
            src="@/assets/images/pie-chart.svg"
          />
          <div class="group">
            <div class="div1">Займ на:</div>
            <div class="ton">1 537 000 TON</div>
          </div>
        </div>

        <div class="frame-group">
          <div class="percent-parent">
            <img
              class="percent-icon"
              alt=""
              src="@/assets/images/percent.svg"
            />
            <div class="div2">1 день = 1%</div>
          </div>
          <div class="percent-parent">
            <img class="percent-icon" alt="" src="@/assets/images/clock.svg" />
            <div class="div2">Пролонгация на 30 дней</div>
          </div>
        </div>
      </div>
    </div>
    <div class="frame-container">
      <div class="field-parent">
        <div class="field">
          <div class="div4">Ставка:</div>
          <div class="ton-kepeer">1% в день</div>
        </div>
        <div class="col-titles-bg" />
      </div>
      <div class="field-parent">
        <div class="field">
          <div class="div4">Беспроцентный период:</div>
          <div class="ton-kepeer">
            <span>до 05.02.22, 16:00 </span>
            <span class="span">(закончен)</span>
          </div>
        </div>
        <div class="col-titles-bg" />
      </div>
      <div class="field-parent">
        <div class="field">
          <div class="div4">Начисленные проценты:</div>
          <div class="ton-kepeer">450 000 TON</div>
        </div>
        <div class="col-titles-bg" />
      </div>
      <div class="field-parent">
        <div class="field">
          <div class="div4">Сумма к возвращению:</div>
          <div class="ton-kepeer">1 987 000 TON</div>
        </div>
        <div class="col-titles-bg" />
      </div>
      <div class="field-parent">
        <div class="field">
          <div class="div4">Сумма к погашению для пролонгации:</div>
          <div class="ton-kepeer">512 TON</div>
        </div>
        <div class="col-titles-bg" />
      </div>
      <div class="field-wrapper">
        <div class="field">
          <div class="div4">Вернуть не позднее:</div>
          <div class="ton-kepeer">
            <span>13.02.22, 16:00 </span>
            <span class="span1">(займ просрочен)</span>
          </div>
        </div>
      </div>
    </div>
    <div class="frame-wrapper1">
      <div class="frame-parent1">
        <div class="info-parent">
          <img class="info-icon" alt="" src="@/assets/desktop/info-black.svg" />
          <div class="div14">Пролонгация займа</div>
        </div>
        <div class="div15">
          Позволяет продлить дату погашения до 30 дней. Для пролонгации займа
          вам нужно оплатить только начисленные проценты
        </div>
      </div>
    </div>
    <div class="des-and-bbn">
      <input-data
              :style="{ margin: '20px 0px', width: '100%' }"
              placeholder="10 000 TON"
              v-model="amount"
              type="number"
      ></input-data>
      <catos-button
        variant="secondary"
        :style="{ width: '100%' }"
        @click="handle"
        :disabled="isDisabled"
        >Оплатить 512 TON и пролонгировтаь</catos-button
      >

      <div class="button">
        <button class="buttons-tabs" @click="close">
          <div class="text">Вернуться в мои займы</div>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import catosButton from "@/components//ui-kit/buttons/catos-button.vue";
import inputData from "@/components/fields/input-data.vue";
const emtis = defineEmits(["close", "prolong"]);

const close = () => {
  emtis("close");
};
const handle = () => {
  emtis("prolong", Number(amount.value));
};
const amount = ref("");

const isDisabled = computed(() => {
  return Number(amount.value) <= 0 || '' ? true : false
})
</script>
<style scoped>
.pie-chart-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.div1 {
  position: relative;
  font-size: 0.75em;
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
.group {
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
.frame-group {
  flex: 1;
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
.frame-wrapper {
  width: 37.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #a592dd;
}
.div4 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
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
.span {
  color: #ff9901;
}
.span1 {
  color: #ff0000;
}
.field-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-container {
  position: absolute;
  top: 7em;
  /*left: 1.25em;*/
  width: 37.5em;
  display: flex;
  flex-direction: column;
  padding: 0em 0.63em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.info-icon {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
}
.div14 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
  display: inline-block;
  width: 17.57em;
  flex-shrink: 0;
}
.info-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.div15 {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.frame-parent1 {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.frame-wrapper1 {
  position: absolute;
  top: 22em;
  /*left: 1.25em;*/
  border-radius: 11px;
  background-color: #f6f4fc;
  width: 37.5em;
  display: flex;
  flex-direction: row;
  padding: 0.94em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.ton-kepeer {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.buttonnext {
  align-self: stretch;
  border-radius: 20px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  height: 3em;
  display: flex;
  flex-direction: row;
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.text {
  position: relative;
  font-size: 0.88rem;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.buttons-tabs {
  align-self: stretch;
  flex: 1;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  padding: 0.69em 1.5em;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;
  border: none;
}
.button {
  align-self: stretch;
  height: 3em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
  color: #3b3b3b;
}
.des-and-bbn {
  position: absolute;
  top: 28.88em;
  /*left: 1.25em;*/
  border-radius: 16px;
  background-color: #f9fbff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  width: 37.5em;
  display: flex;
  flex-direction: column;
  padding: 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
  text-align: center;
  color: #f3f3f3;
}
.frame-parent {
  position: relative;
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  width: 100%;
  height: 38em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
