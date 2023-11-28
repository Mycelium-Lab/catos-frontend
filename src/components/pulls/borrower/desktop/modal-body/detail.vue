<template>
  <desktop-modal @close="close">
    <template v-slot:title> Информация о пулле # {{ pool?.id }} </template>
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
                <div class="ton">{{ pool?.available_liquidity }} TON</div>
                <div class="div1">Одобренный лимит</div>
              </div>
            </div>

            <div class="frame-container">
              <div class="percent-parent">
                <img
                  class="percent-icon"
                  alt=""
                  src="@/assets/images/percent.svg"
                />
                <div class="div2">{{ interestRateString }}</div>
              </div>
              <div class="percent-parent">
                <img
                  class="percent-icon"
                  alt=""
                  src="@/assets/images/clock.svg"
                />
                <div class="div2">{{ freePeriodString }}</div>
              </div>
              <div class="icons2bar-cards-parent">
                <img
                  class="percent-icon"
                  alt=""
                  src="@/assets/images/iconscalendar-mini.svg"
                />
                <div class="div4">{{ monthInterestRateString }}</div>
              </div>
            </div>
          </div>
          <div class="frame-wrapper">
            <div class="group">
              <div class="div5">Кредитор:</div>
              <div
                class="radiobutton-parent"
                @click="() => (isCreditorInfo = true)"
              >
                <div class="div6">Деньги до зарплаты</div>
                <img
                  class="radiobutton-icon"
                  alt=""
                  src="@/assets/images/investore.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="frame-div">
          <div class="field-parent">
            <div class="field">
              <div class="div7">Одобренный лимит:</div>
              <div class="ton1">до {{ pool?.available_liquidity }}  TON</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div7">Ставка:</div>
              <div class="ton1">{{ interestRate }}% в день</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div7">Беспроцентный период:</div>
              <div class="ton1">{{ freePeriod }} дня</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div7">Всего ликвидности:</div>
              <div class="ton1">{{ pool?.all_liquidity }} TON</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div7">Выдано:</div>
              <div class="ton1"> TON</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div7">Доступно для выдачи:</div>
              <div class="ton1"> раз</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div7">Дата создания:</div>
              <div class="ton1"></div>
            </div>
            <div class="col-titles-bg" />
          </div>
        </div>
        <div class="des-and-bbn">
          <catos-button
            variant="fourth"
            :style="{ width: '100%', margin: '0' }"
            @click="toWidthdraw"
            >Изъять ликвидность</catos-button
          >
          <catos-button
            variant="fourth"
            :style="{ width: '100%', margin: '0' }"
            @click="toAdd"
            >Добавить ликвидность</catos-button
          >
        </div>
      </div>
    </template>
  </desktop-modal>
  <creditor-info
    v-if="isCreditorInfo"
    @close="() => (isCreditorInfo = false)"
  ></creditor-info>
</template>
<script setup lang="ts">
import { ref, PropType } from "vue";
// @ts-ignore
import desktopModal from "@/components/base/desktop-modal.vue";
// @ts-ignore
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import creditorInfo from "@/components/base/desktop/creditor-info.vue";
import { Pool } from "@/types/pool.type";
import {useComputedPoolInfo} from "@/composables/infoCalculation/useComputedPoolInfo";

const emits = defineEmits(["close", "add", "widthdraw"]);

const { pool } = defineProps({
  pool: {
    type: Object as PropType<Pool>,
  },
});

const {
  interestRate, monthInterestRateString, 
  maxDuration, freePeriod, interestRateString,
  freePeriodString } = useComputedPoolInfo(pool)

const toAdd = () => {
  emits("add");
};
const toWidthdraw = () => {
  emits("widthdraw");
};
const close = () => {
  emits("close");
};
const isCreditorInfo = ref(false);
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
.div4 {
  position: relative;
  font-size: 0.88em;
  line-height: 120%;
}
.icons2bar-cards-parent {
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
  justify-content: space-between;
  gap: 0.75em;
}
.div5 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
}
.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.div6 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
  font-weight: 300;

  color: #2c56c0;
  text-decoration: underline;
}
.radiobutton-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
  cursor: pointer;
}
.group {
  align-self: stretch;
  flex: 1;
  border-radius: 16px;
  border: 1px solid #f6f4fc;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0.81em;
  align-items: center;
  justify-content: space-between;
  gap: 0.63em;
}
.frame-wrapper {
  align-self: stretch;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
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
.div7 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.ton1 {
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
.frame-div {
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
  letter-spacing: 0.02em;
  line-height: 120%;
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
.text1 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 500;
}
.button1 {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #fefefe;
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
  gap: 0.63em;
  text-align: right;
  color: #f8f8ff;
  width: 580px;
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
