<template>
  <div class="frame-parent">
    <div class="frame-group">
      <div class="frame-wrapper">
        <div class="frame-container">
          <div class="frame-div">
            <div class="parent">
              <div class="div">Займ #{{ loan?.id }} получен</div>
              <div class="ton">{{ loan?.amount }} TON</div>
              <div class="eqb5dze1h44-wrapper">
                <div class="eqb5dze1h44">
                  <p class="p">
                    <span class="span1"> Были отправлены на ваш кошелек: </span>
                  </p>
                  <a class="eqb5dze1h441">EQB5...dzE1hа44</a>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-wrapper1">
            <div class="group">
              <div class="div1">Транзакция:</div>
              <div class="field-copykey-parent">
                <div class="field-copykey">
                  <div class="text-1">
                    <div class="key">Key:</div>
                  </div>
                  <div class="code">
                    <div class="cahrjj3">EQCoqrqUMQCKKZTBFCQ0VzgOf</div>
                  </div>
                </div>
                <div class="component-27-parent">
                  <div class="component-27">
                    <img
                      class="share-icon"
                      alt=""
                      src="@/assets/images/iconsshare-black.svg"
                    />
                    <div class="number">Поделиться</div>
                  </div>
                  <div class="component-27">
                    <img
                      class="share-icon"
                      alt=""
                      src="@/assets/images/iconspaste.svg"
                    />
                    <div class="number">Скопировать</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-wrapper2">
            <div class="frame-parent1">
              <div class="container">
                <div class="div2">Кредитор:</div>
                <div class="radiobutton-parent">
                  <img
                    class="radiobutton-icon"
                    alt=""
                    src="@/assets/images/investore.svg"
                  />
                  <div class="div3">Деньги до зарплаты</div>
                </div>
              </div>
              <div class="frame-child" />
              <div class="parent1">
                <div class="div2">Пулл:</div>
                <div class="wrapper">
                  <div class="div5">#{{ poolId }}</div>
                </div>
              </div>
              <div class="frame-child" />
              <div class="frame-parent2">
                <div class="frame">
                  <div class="div6">Ставка:</div>
                </div>
                <div class="wrapper1">
                  <div class="div7">{{interestRate}}% в день</div>
                </div>
              </div>
              <div class="frame-child" />
              <div class="frame-parent3">
                <div class="wrapper2">
                  <div class="div2">Беспроцентный период:</div>
                </div>
                <div class="div9">
                  <span class="span2">до {{ freePeriod }} дней</span>
                  <span :class="freePeriodStatus ==='закончен' ? 'span3': 'span3_green'"> {{  ` (${freePeriodStatus})` }}</span>
                </div>
              </div>
              <div class="frame-child" />
              <div class="notification-wrapper">
                <div class="notification">
                  <img
                    class="percent-icon"
                    alt=""
                    src="@/assets/images/percent.svg"
                  />
                  <div class="div10">
                    Проценты начнут начисляться с 12 апреля 2023 года, после
                    16:00
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-wrapper3">
            <div class="frame-parent4">
              <div class="radiobutton-parent">
                <img
                  class="alert-triangle-icon"
                  alt=""
                  src="@/assets/images/alerttriangle-red.svg"
                />
                <div class="div11">Займ просрочен</div>
              </div>
              <div class="div12">
                Ваш долг вместе с персональными данными будет выставлен на
                открытый аукцион для коллекторов через 23:59:59
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="des-and-bbn-wrapper">
        <div class="des-and-bbn">
          <div class="button-parent">
            <catos-button
              variant="fourth"
              @click="repay"
              :style="{ width: '100%', margin: '0' }"
              >Погасить</catos-button
            >
            <catos-button
              variant="fourth"
              @click="prolong"
              :style="{ width: '100%', margin: '0' }"
              >Пролонгировать</catos-button
            >
          </div>
          <catos-button
            variant="fourth_outline"
            :style="{ width: '100%' }"
            @click="close"
            >Перейти в мои займы</catos-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, PropType, onMounted } from "vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import { LoansResponse } from "@/types/loan.types";
import {useComputedPoolInfo} from "@/composables/infoCalculation/useComputedPoolInfo"
import { useComputedLoanInfo } from "@/composables/infoCalculation/useComputedLoanInfo";
import { usePoolListStore } from "@/stores/poolList";

onMounted(async() => {
  if(loan?.pool_id) {
    poolByLoan.value = await poolItem(loan?.pool_id)
    freePeriod.value = useComputedPoolInfo(poolByLoan.value).freePeriod.value

    interestRate.value = useComputedLoanInfo(loan).interestRate
    endTerm.value = useComputedLoanInfo(loan).endTerm.value
    freePeriodStatus.value = useComputedLoanInfo(loan, freePeriod.value).freePeriodStatus.value
  }
})

const { loan } = defineProps({
  loan: {
    type: Object as PropType<LoansResponse>,
  },
  poolId: {
    type: Number
  }
});

const interestRate = ref()
const poolByLoan = ref()
const endTerm = ref()
const freePeriodStatus = ref()
const freePeriod = ref()

const { poolItem } = usePoolListStore();

const emits = defineEmits(["close", "repay", "prolong"]);
const prolong = () => {
  emits("prolong");
};
const repay = () => {
  emits("repay");
};
const close = () => {
  emits("close");
};
</script>
<style scoped lang="scss">
.div {
  align-self: stretch;
  position: relative;
  font-size: 1.13em;
  line-height: 130%;
  font-weight: 600;
}
.ton {
  align-self: stretch;
  position: relative;
  font-size: 1.25em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
}
.span {
  color: #3b3b3b;
}
.span1 {
  color: rgba(59, 59, 59, 0.96);
}
.p {
  margin: 0;
}
.eqb5dze1h441 {
  margin: 0;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
}
.eqb5dze1h44 {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.eqb5dze1h44-wrapper {
  width: 20.75em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #577ef7;
}
.parent {
  align-self: stretch;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  padding: 0.44em 0em;
  align-items: center;
  justify-content: center;
  gap: 0.75em;
}
.frame-div {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
}
.div1 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 130%;
}
.key {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 600;
}
.text-1 {
  display: none;
  flex-direction: row;
  padding: 0em 0.63em 0em 0em;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
}
.cahrjj3 {
  position: relative;
  font-size: 0.75em;
  text-decoration: underline;
  line-height: 130%;
  font-weight: 600;
}
.code {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  color: rgba(87, 126, 247, 0.96);
}
.iconchange {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  top: 0em;
  right: 8.75em;
  bottom: 0em;
  max-height: 100%;
  width: 3.25em;
  display: none;
  z-index: 2;
}
.field-copykey {
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0em 0.5em 0.75em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  position: relative;
}
.share-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.number {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.component-27 {
  flex: 1;
  border-radius: 7px;
  background-color: rgba(165, 146, 221, 0.1);
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0.44em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}
.component-27-parent {
  align-self: stretch;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
  color: rgba(59, 59, 59, 0.8);
}
.field-copykey-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  text-align: left;
  color: rgba(59, 59, 59, 0.5);
}
.group {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.frame-wrapper1 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
}
.div2 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.div3 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.radiobutton-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.container {
  align-self: stretch;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.frame-child {
  align-self: stretch;
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  height: 0.06em;
}
.div5 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 130%;
  font-weight: 300;
  text-align: end;
}
.wrapper {
  width: 3.69em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: rgba(87, 126, 247, 0.96);
}
.parent1 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.div6 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.frame {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
}
.div7 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.wrapper1 {
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
}
.frame-parent2 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.wrapper2 {
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
}
.span2 {
  font-weight: 300;
}
.span3 {
  color: #ff0000;
  &_green{
    color: #469f25;
  }
}
.div9 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  text-align: right;
}
.frame-parent3 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}
.percent-icon {
  position: relative;
  width: 1em;
  height: 1em;
  overflow: hidden;
  flex-shrink: 0;
}
.div10 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.notification {
  flex: 1;
  border-radius: 16px;
  background-color: #f6f4fc;
  display: flex;
  flex-direction: row;
  padding: 0.94em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.notification-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent1 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
}
.frame-wrapper2 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.alert-triangle-icon {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
}
.div11 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.03em;
  line-height: 120%;
  font-weight: 500;
  display: inline-block;
  width: 17.57em;
  flex-shrink: 0;
}
.div12 {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
  color: #3b3b3b;
}
.frame-parent4 {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.frame-wrapper3 {
  align-self: stretch;
  border-radius: 11px;
  background-color: rgba(255, 0, 0, 0.08);
  display: flex;
  flex-direction: row;
  padding: 0.94em;
  align-items: flex-start;
  justify-content: flex-start;
  color: #ff0000;
}
.frame-container {
  display: flex;
  flex-direction: column;
  padding: 0em 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.frame-wrapper {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.text {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
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
  flex: 1;
  height: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.button-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.text2 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 500;
}
.buttons-tabs2 {
  align-self: stretch;
  border-radius: 25px;
  border: 1px solid #5d83f7;
  display: flex;
  flex-direction: row;
  padding: 0.69em 1.5em;
  align-items: center;
  justify-content: center;
}
.button2 {
  align-self: stretch;
  height: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #555562;
}
.des-and-bbn {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f9fbff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  padding: 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.des-and-bbn-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
  color: #f8f8ff;
}
.frame-group {
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.frame-parent {
  position: relative;
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  width: 100%;
  height: 49.56em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
@media (max-height: 900px) {
  .frame-parent {
    height: 650px;
    overflow-y: auto;
  }
}
</style>
