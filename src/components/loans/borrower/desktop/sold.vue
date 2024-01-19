<template>
  <desktop-modal @close="close">
    <template v-slot:title>Займ #{{ loan?.id }} продан</template>
    <template v-slot:body>
      <div class="frame-parent">
        <div class="frame-group">
          <div class="frame-wrapper">
            <div class="frame-container">
              <div class="frame-div">
                <div class="wrapper">
                  <div class="div">Статус:</div>
                </div>
                <div class="status-all">
                  <div class="colors-graphsorders-parent">
                    <img
                      class="colors-graphsorders-icon"
                      alt=""
                      src="@/assets/images/colors-graphsorders3.svg"
                    />
                    <div class="div">Займ продан коллектору</div>
                  </div>
                  <!--<img class="iconchange" alt="" src="/iconchange.svg" />-->
                </div>
              </div>
            </div>
          </div>
          <div class="frame-container">
            <div class="parent">
              <div class="div2">Кредитор:</div>
      
              <div class="group"  @click="() => (isCreditorInfo = true)">
            <span class="div5_link div5">{{ poolByLoan?.organization }}</span>
            <img
                  class="radiobutton-icon"
                  alt=""
                  src="@/assets/images/investore.svg"
              />
          </div>
            </div>
          </div>
          <div class="frame-wrapper2">
            <div class="frame-parent1">
              <div class="frame-wrapper3">
                <div class="component-parent">
                  <div class="component">
                    <div class="field">
                      <div class="div4">пул:</div>
                      <div class="div5">#{{poolByLoan?.id}}</div>
                    </div>
                    <div class="col-titles-bg" />
                  </div>
                  <div class="component">
                    <div class="field">
                      <div class="div4">Ставка</div>
                      <div class="div7">{{interestRate}}% в день</div>
                    </div>
                    <div class="col-titles-bg" />
                  </div>
                  <div class="component">
                    <div class="field">
                      <div class="div4">Беспроцентный период:</div>
                      <div class="div7">
                        <span>до {{ freePeriodDate }}</span>
                        <span :class="freePeriodStatus === 'длится' ? 'span_green span' : 'span'"> {{ ` (${freePeriodStatus})` }}</span>
                      </div>
                    </div>
                    <div class="col-titles-bg" />
                  </div>
                  <div class="component">
                    <div class="field">
                      <div class="div4">Вернуть не позднее:</div>
                      <div class="div7">до {{endTerm}}</div>
                    </div>
                    <div class="col-titles-bg" />
                  </div>
                </div>
              </div>
              <div class="notification">
                <!--<img
                  class="alert-triangle-icon"
                  alt=""
                  src="/alerttriangle.svg"
                />-->
                <div class="div12">
                  <p class="p">Вернуть не позднее: до {{ endTerm }}</p>
                  <p v-if="isOverdue" class="p1">(просрочен)</p>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-wrapper4">
            <div class="frame-parent2">
              <div class="radiobutton-parent">
                <!--<img
                  class="alert-triangle-icon1"
                  alt=""
                  src="/alerttriangle1.svg"
                />-->
                <div class="div13">Займ продан</div>
              </div>
              <div class="div14">
                <span class="span1">Ваш долг был продан </span>
                <span class="span2">коллектору 000 Обязательства</span>
                <span class="span1"
                  >. С вами свяжутся представители этой организации для
                  обсуждения вопросов возврата долга</span
                >
              </div>
            </div>
          </div>
          <div class="des-and-bbn">
            <catos-button
              variant="fourth_outline"
              :style="{ width: '100%', margin: '0 auto' }"
              @click="close"
              >Перейти в мои займы</catos-button
            >
          </div>
        </div>
      </div>
      <creditor-info
    v-if="isCreditorInfo"
    :pool="poolByLoan"
    @close="() => (isCreditorInfo = false)"
  ></creditor-info>
    </template>
  </desktop-modal>
</template>
<script setup lang="ts">
import { ref, PropType, onMounted } from "vue";
import creditorInfo from "@/components/base/desktop/creditor-info.vue";
import desktopModal from "@/components/base/desktop-modal.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import { LoansResponse } from "@/types/loan.types";
import { useComputedLoanInfo } from "@/composables/infoCalculation/useComputedLoanInfo";
import {useComputedPoolInfo} from "@/composables/infoCalculation/useComputedPoolInfo"
import { usePoolListStore } from "@/stores/poolList";

onMounted(async() => {
  if(loan?.pool_id) {
    poolByLoan.value = await poolItem(loan?.pool_id)
    freePeriodStatus.value = useComputedLoanInfo(loan, freePeriod.value).freePeriodStatus.value
    freePeriod.value = useComputedPoolInfo(poolByLoan.value).freePeriod.value
    freePeriodDate.value = useComputedLoanInfo(loan, freePeriod.value).freePeriodDate.value
  } 
})

const { loan } = defineProps({
  loan: {
    type: Object as PropType<LoansResponse>,
  }
});

const poolByLoan = ref()
const freePeriod = ref()
const freePeriodDate = ref()
const freePeriodStatus = ref()
const { poolItem } = usePoolListStore();
const isCreditorInfo = ref(false);

const {isOverdue, interestRate, duration, startTerm, endTerm} = useComputedLoanInfo(loan)

const emits = defineEmits(["close"]);
const close = () => {
  emits("close");
};
</script>
<style scoped lang="scss">
.div {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.wrapper {
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
  display: none;
}
.status-all {
  flex: 1;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  height: 2.5em;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0em 0em 0em 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
}
.frame-div {
  flex: 1;
  border-radius: 12px;
  border: 1px solid rgba(129, 129, 165, 0.1);
  box-sizing: border-box;
  height: 3.31em;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0.5em 0.5em 1.31em;
  align-items: center;
  justify-content: flex-start;
  gap: 3em;
}
.frame-container {
  align-self: stretch;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.frame-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.div2 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
}
.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.div3 {
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
.div4 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130.5%;
  font-weight: 300;
}
.div5 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 130%;
  color: rgba(87, 126, 247, 0.96);
  &_link{
    font-size: 12px;
  }
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
.component {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.div7 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.span {
  color: #ff0000;
  &_green{
    color: #469f25;
  }
}
.component-parent {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.frame-wrapper3 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.alert-triangle-icon {
  position: relative;
  width: 1em;
  height: 1em;
  overflow: hidden;
  flex-shrink: 0;
}
.p {
  margin: 0;
}
.p1 {
  margin: 0;
  color: #ff0000;
}
.div12 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.notification {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f6f4fc;
  display: flex;
  flex-direction: row;
  padding: 0.94em 2.06em 0.94em 0.94em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.frame-parent1 {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
}
.frame-wrapper2 {
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.alert-triangle-icon1 {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
}
.div13 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.03em;
  line-height: 120%;
  font-weight: 500;
  display: inline-block;
  width: 17.57em;
  flex-shrink: 0;
}
.span1 {
  font-weight: 300;
}
.span2 {
  text-decoration: underline;
  color: rgba(87, 126, 247, 0.96);
}
.div14 {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  color: #3b3b3b;
}
.frame-parent2 {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.frame-wrapper4 {
  align-self: stretch;
  border-radius: 11px;
  background-color: rgba(255, 0, 0, 0.08);
  display: flex;
  flex-direction: row;
  padding: 0.63em 0.75em;
  align-items: flex-start;
  justify-content: flex-start;
  color: #ff0000;
}
.text {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 500;
}
.buttons-tabs {
  flex: 1;
  border-radius: 25px;
  border: 1px solid #5d83f7;
  box-sizing: border-box;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.44em 5.5em;
  align-items: center;
  justify-content: center;
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
  color: #555562;
}
.frame-group {
  width: 30em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.group{
  display: flex;
  align-items: center;
  font-size: 0.75em;
  gap: 6px;
}
.frame-parent {
  position: relative;
  width: 100%;
  height: 34.31em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
