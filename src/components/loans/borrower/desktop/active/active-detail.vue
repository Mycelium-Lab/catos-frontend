<template>
  <desktop-modal @close="close">
    <template v-slot:title>Информация о займе #{{ loan?.id }}</template>
    <template v-slot:body>
      <div class="frame-parent">
        <div class="frame-group">
          <div class="frame-container">
            <div class="parent">
              <div class="div">
                <img
                  class="pie-chart-icon"
                  alt=""
                  src="@/assets/images/pie-chart.svg"
                />
                <div class="ton-parent">
                  <div class="div1">Займ на </div>
                  <div class="ton">{{ loan?.amount ? loan?.amount / NANO_MULTIPLIER  : 0 }} TON</div>
                </div>
              </div>
              <div class="frame-child" />
              <div class="frame-div">
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
                <div class="percent-parent">
                  <img
                    class="percent-icon"
                    alt=""
                    src="@/assets/images/activity.svg"
                  />
                  <div class="div2">ROI = {{poolByLoan?.roi}}%</div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-parent2">
            <div class="field-parent">
              <div class="field">
                <div class="div5">Ставка:</div>
                <div class="div6">{{interestRate }}% в день</div>
              </div>
              <div class="col-titles-bg" />
            </div>
            <div class="field-parent">
              <div class="field">
                <div class="div5">На срок:</div>
                <div class="div6">до {{ maxDuration }}</div>
              </div>
              <div class="col-titles-bg" />
            </div>
            <div class="field-parent">
              <div class="field">
                <div class="div5">Беспроцентный период:</div>
                <div class="div6">до {{freePeriod}} дн</div>
              </div>
              <div class="col-titles-bg" />
            </div>
            <div class="field-parent">
              <div class="field">
                <div class="div5">Всего ликвидности:</div>
                <div class="div6">{{ poolByLoan?.all_liquidity / NANO_MULTIPLIER}} TON</div>
              </div>
              <div class="col-titles-bg" />
            </div>

            <div class="field-parent">
              <div class="field">
                <div class="div5">Свободно:</div>
                <div class="div6">{{ poolByLoan?.available_liquidity / NANO_MULTIPLIER}} TON</div>
              </div>
              <div class="col-titles-bg" />
            </div>
            <div class="field-parent">
              <div class="field">
                <div class="div5">ROI инвесторов:</div>
                <div class="div6">{{ poolByLoan?.roi}}% годовых</div>
              </div>
              <div class="col-titles-bg" />
            </div>
          </div>

          <div class="notification">
            <img
              class="percent-icon1"
              alt=""
              src="@/assets/images/percent.svg"
            />
            <div class="div26">Проценты начисляются с {{ accrualDate }}</div>
          </div>
          <div class="des-and-bbn">
            <catos-button
              variant="fourth_outline"
              :style="{ width: '100%', margin: '0' }"
              @click="close"
              >Закрыть</catos-button
            >
          </div>
        </div>
      </div>
    </template>
  </desktop-modal>
</template>
<script setup lang="ts">
import { ref, PropType, onMounted } from "vue";
import { LoansResponse } from "@/types/loan.types";
// @ts-ignore
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import desktopModal from "@/components/base/desktop-modal.vue";
import { usePoolListStore } from "@/stores/poolList";
import {useComputedPoolInfo} from "@/composables/infoCalculation/useComputedPoolInfo"
import { useComputedLoanInfo } from "@/composables/infoCalculation/useComputedLoanInfo";
import { NANO_MULTIPLIER } from "@/utils/constants";

onMounted(async () => {
  if(loan?.pool_id) {
    poolByLoan.value = await poolItem(loan?.pool_id)
    freePeriod.value = useComputedPoolInfo(poolByLoan.value).freePeriod.value 
    freePeriodString.value = useComputedPoolInfo(poolByLoan.value).freePeriodString.value
    maxDuration.value = useComputedPoolInfo(poolByLoan.value).maxDuration.value
    accrualDate.value = useComputedLoanInfo(loan, freePeriod.value).interestAccrualDate.value
  }
})

const poolByLoan = ref()
const freePeriod = ref()
const freePeriodString = ref()
const maxDuration = ref()
const accrualDate = ref()

const { loan } = defineProps({
  loan: {
    type: Object as PropType<LoansResponse>,
  }
});

const { poolItem } = usePoolListStore();
const {isOverdue, interestRate, duration, startTerm, endTerm, interestRateString} = useComputedLoanInfo(loan)
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
.frame-div {
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

  width: 13.56em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0em 0em 0em 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-end;
}
.frame-parent1 {
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  color: #3b3b3b;
  width: 100%;
  padding: 0em 0.63em;
  font-size: 1.17em;
}
.frame-container {
  align-self: stretch;
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
.frame-parent2 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: 0em 0.63em;
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
  width: 10.83em;
  flex-shrink: 0;
  width: auto;
}
.ton-wrapper {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
}
.frame-parent5 {
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
.frame-parent6 {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 0.81em;
}
.frame-parent4 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.frame-parent3 {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f6f4fc;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.63em 0.75em;
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
  align-self: stretch;
  border-radius: 16px;
  background-color: #f6f4fc;
  display: flex;
  flex-direction: row;
  padding: 0.94em;
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
  color: #fefefe;
}
.frame-group {
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  width: 40em;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
}
.frame-parent {
  position: relative;
  width: 100%;
  height: 55.94em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
.status-subtitle {
  color: rgba(59, 59, 59, 0.96);
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
  margin: 0;
}
.status-subtitle-link {
  color: rgba(87, 126, 247, 0.96);
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
  text-decoration-line: underline;
  cursor: pointer;
}
@media (max-height: 1100px) {
  .frame-parent {
    height: 35.94em;
    overflow-y: auto;
  }
}
</style>
