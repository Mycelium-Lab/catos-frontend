<template>
  <desktop-modal @close="close">
    <template v-slot:title>Информация о займе #{{loan?.id}}</template>
    <template v-slot:body>
      <div class="frame-parent">
        <div class="frame-wrapper">
          <div class="frame-container">
            <div class="frame-group">
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
                  <div class="div">Просрочен</div>
                </div>
                <img
                  class="iconchange"
                  alt=""
                  src="@/assets/images/iconchange.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="frame-div">
          <div class="frame-parent1">
            <div class="frame-wrapper1">
              <div class="component-parent">
                <div class="component">
                  <div class="field">
                    <div class="div2">Дата смены статуса:</div>
                    <div class="div3">{{ startTerm }}</div>
                  </div>
                  <div class="col-titles-bg" />
                </div>
                <div class="component">
                  <div class="field">
                    <div class="div2">Дата получения займа:</div>
                    <div class="div3">{{ startTerm }}</div>
                  </div>
                  <div class="col-titles-bg" />
                </div>
                <div class="component">
                  <div class="field">
                    <div class="div2">Ставка:</div>
                    <div class="div3">{{ interestRate }}% в день</div>
                  </div>
                  <div class="col-titles-bg" />
                </div>
                <div class="component">
                  <div class="field">
                    <div class="div2">Срок:</div>
                    <div class="div4">на {{ duration }}</div>
                  </div>
                  <div class="col-titles-bg" />
                </div>
                <div class="component">
                  <div class="field">
                    <div class="div2">Займ:</div>
                    <div class="div4">{{ loan?.amount ? loan?.amount / NANO_MULTIPLIER : 0 }} TON</div>
                  </div>
                  <div class="col-titles-bg" />
                </div>
                <!--<div class="component">
                  <div class="field">
                    <div class="div2">Сумма к возвращению:</div>
                    <div class="div3">13 512 TON</div>
                  </div>
                  <div class="col-titles-bg" />
                </div>-->
                <div class="component">
                  <div class="field">
                    <div class="div2">Анкета заявителя:</div>
                    <a class="div15_link div15" @click="toBlank">Открыть</a>
                  </div>
                  <div class="col-titles-bg" />
                </div>
                <div class="component">
                  <div class="field">
                    <div class="div2">Заявитель:</div>
                    <div class="div15">{{ loan?.borrower.name }} {{ loan?.borrower.surname }}</div>
                  </div>
                  <div class="col-titles-bg" />
                </div>
              </div>
            </div>
            <div class="notification">
              <img
                class="alert-triangle-icon"
                alt=""
                src="@/assets/images/alerttriangle.svg"
              />
              <div class="div">
                <p class="p">
                  <span>
                    <span class="span">Беспроцентный период: </span>
                    <span>до {{ freePeriod }} дн</span>
                  </span>
                </p>
                <p :class="freePeriodStatus === 'длится' ? 'p1_active p1' : 'p1'">
                  <span>
                    <span>{{ `(${freePeriodStatus})` }}</span>
                  </span>
                </p>
              </div>
            </div>
            <div class="notification1">
              <img
                class="alert-triangle-icon"
                alt=""
                src="@/assets/images/alerttriangle.svg"
              />
              <div class="div19">
                <p class="p">Вернуть не позднее: до {{endTerm}}</p>
                <p class="p1">
                  <span>
                    <span :style="{ color: 'red' }">(просрочен)</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="des-and-bbn">
          <catos-button
            variant="fourth"
            :style="{ margin: '0' }"
            @click="toSell"
            >Выставить займ на продажу</catos-button
          >

          <catos-button
            variant="fourth_outline"
            :style="{ margin: '0' }"
            @click="close"
            >Закрыть</catos-button
          >
        </div>
      </div>
    </template>
  </desktop-modal>
</template>

<script setup lang="ts">
import {PropType, onMounted, ref} from "vue"
import desktopModal from "@/components/base/desktop-modal.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import { LoansResponse } from "@/types/loan.types";
import { useComputedLoanInfo } from "@/composables/infoCalculation/useComputedLoanInfo";
import { usePoolListStore } from "@/stores/poolList";
import { useComputedPoolInfo } from "@/composables/infoCalculation/useComputedPoolInfo";
import { NANO_MULTIPLIER } from "@/utils/constants";

onMounted(async() => {
  const poolListStore = usePoolListStore()
  pool.value = await poolListStore.poolItem(loan?.pool_id ? loan?.pool_id : 0)
  if(pool.value) {
    const {freePeriod: fp} = useComputedPoolInfo(pool.value)
    const {freePeriodStatus: fps} = useComputedLoanInfo(loan, fp.value)
    freePeriod.value = fp.value
    freePeriodStatus.value = fps.value
  }
})

const { loan } = defineProps({
  loan: {
    type: Object as PropType<LoansResponse>,
  },
});

const pool = ref()
const freePeriod = ref()
const freePeriodStatus = ref()

const {isOverdue, interestRate, duration, startTerm, endTerm, updatedStatusTerm} = useComputedLoanInfo(loan)

const emtis = defineEmits(["close", "blank", "sell"]);

const toSell = () => {
  
  emtis("sell");
};
const toBlank = () => {
  emtis("blank");
};
const close = () => {
  emtis("close");
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
  left: 0.4em
}
.status-all {
  flex: 1;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0em 0em 0em 0.63em;
  align-items: center;
  justify-content: space-between;
}
.frame-group {
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
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.div3 {
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
.component {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.div15 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 130%;
  color: #5d83f7;
  &_link {
    cursor: pointer;
    &:hover {
      text-decoration: none;
    }
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
.frame-wrapper1 {
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
.span {
  font-weight: 300;
  font-family: Inter;
}
.p {
  margin: 0;
}
.p1 {
  margin: 0;
  color: #ff9901;
  &_active{
    color: #469f25;
  }
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
.p3 {
  margin: 0;
  color: #ff0000;
}
.div19 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.notification1 {
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
.frame-div {
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
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
.buttons-tabs1 {
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
  color: #555562;
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
.frame-parent {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
.group-action {
  display: flex;
  gap: 10px;
}
</style>
