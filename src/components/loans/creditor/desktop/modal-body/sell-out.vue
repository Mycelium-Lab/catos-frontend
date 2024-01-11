<template>
  <desktop-modal @close="close">
    <template v-slot:title> Информация о займе #{{loan?.id}} </template>
    <template v-slot:body>
      <div class="frame-parent">
        <div class="frame-group">
          <div class="frame-wrapper">
            <div class="frame-container">
              <div class="frame-div">
                <div class="frame-parent1">
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
          </div>
          <div class="frame-wrapper1">
            <div class="frame-parent2">
              <div class="frame-wrapper2">
                <div class="component-parent">
                  <div class="component">
                    <div class="field">
                      <div class="div3">Заявитель:</div>
                      <div class="div4">{{ loan?.borrower.name }} {{ loan?.borrower.surname }}</div>
                    </div>
                    <div class="col-titles-bg" />
                  </div>
                  <div class="component">
                    <div class="field">
                      <div class="div3">Ставка:</div>
                      <div class="div4">{{ interestRate }}% в день</div>
                    </div>
                    <div class="col-titles-bg" />
                  </div>
                  <div class="component">
                    <div class="field">
                      <div class="div3">Займ:</div>
                      <div class="div4">{{ loan?.amount ? loan?.amount / NANO_MULTIPLIER: 0 }} TON</div>
                    </div>
                    <div class="col-titles-bg" />
                  </div>
                  <div class="component">
                    <div class="field">
                      <div class="div3">Начисленные проценты:</div>
                      <div class="div4">TON</div>
                    </div>
                    <div class="col-titles-bg" />
                  </div>
                  <div class="component">
                    <div class="field">
                      <div class="div3">Срок:</div>
                      <div class="div4">на {{ duration }}</div>
                    </div>
                    <div class="col-titles-bg" />
                  </div>
                  <!--<div class="component">
                    <div class="field">
                      <div class="div3">Сумма к возвращению:</div>
                      <div class="div4">TON</div>
                    </div>
                    <div class="col-titles-bg" />
                  </div>-->
                  <div class="component">
                    <div class="field">
                      <div class="div3">Комиссия CATOS:</div>
                      <div class="div4">5 %</div>
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
                <div class="min-10-ton-container">
                  <p class="p">Вернуть не позднее: до {{endTerm}}</p>
                  <p class="p1">(просрочен)</p>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-parent3">
            <div class="component">
              <div class="fieldsinput">
                <div class="div16">Установить цену продажи:</div>
                <input-data  v-model="price" :style="{ width: '100%' }"></input-data>
              </div>
              <div class="min-10-ton-parent">
              </div>
            </div>
            <catos-button
              variant="fourth"
              :style="{ width: '100%', magin: '0' }"
              @click="sell"
              >Продать</catos-button
            >
          </div>
        </div>
      </div>
    </template>
  </desktop-modal>
  <transaction-desktop 
    v-if="isTransaction" 
    @close="isTransaction = false"
    :uid="uid" 
    titlePending="Продажа займа"
    subtitlePending="Пожалуйста, подождите пока завершится процесс продажи займа"
    subtitleSuccess="Займ успешно продан"
    titleFaild="Произошла ошибка при продаже займа"
    ></transaction-desktop>
</template>
<script setup lang="ts">
import {PropType, onMounted, ref} from "vue"
import inputData from "@/components/fields/input-data.vue";
import desktopModal from "@/components/base/desktop-modal.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import { useComputedLoanInfo } from "@/composables/infoCalculation/useComputedLoanInfo";
import { LoansResponse } from "@/types/loan.types";
import { sellLoan } from "@/api/loans.api";
import transactionDesktop from "@/components/base/modals/transaction-desktop.vue";
import { NANO_MULTIPLIER } from "@/utils/constants";

const { loan } = defineProps({
  loan: {
    type: Object as PropType<LoansResponse>,
      required: true
  },
});

const price = ref()
const isTransaction = ref(false)
const uid = ref()

const {isOverdue, interestRate, duration, startTerm, endTerm} = useComputedLoanInfo(loan)

const emtis = defineEmits(["close", "result"]);

const sell = async () => {
    await sellLoan(loan?.id ? loan?.id : 0, Number(price.value) * NANO_MULTIPLIER).then(res => {
      isTransaction.value = true
      uid.value = res.data
    }).catch(e => {
        
  })
  //emtis("result");
};
const handleSuccess= () => {
    isTransaction.value = false;
    location.reload()
}
const close = () => {
  emtis("close");
};

</script>
<style scoped>
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
  width: 1.8em;
  height: 2.5em;
}
.status-all {
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  width: 17.06em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0em 0em 0em 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
}
.container {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
  color: #5d83f7;
}
.frame-parent1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1em;
}
.frame-div {
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid rgba(129, 129, 165, 0.1);
  box-sizing: border-box;
  height: 3.31em;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0.5em 0.5em 1.31em;
  align-items: center;
  justify-content: flex-start;
}
.frame-container {
  align-self: stretch;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.frame-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.div3 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.div4 {
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
.component-parent {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.frame-wrapper2 {
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
.frame-parent2 {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
}
.frame-wrapper1 {
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.div16 {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  line-height: 100%;
  font-weight: 300;
}
.iconsmail {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
}
.span {
  font-weight: 300;
}
.span1 {
  color: #2e3a59;
}
.span2 {
  color: rgba(0, 0, 0, 0.04);
}
.ton {
  font-weight: 300;
  color: rgba(0, 0, 0, 0.91);
}
.div17 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.iconsedit-outline {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
}
.iconsmail-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.fieldsinput1 {
  align-self: stretch;
  border-radius: 16px;
  background-color: rgba(230, 221, 255, 0.3);
  border: 1px solid #a592dd;
  box-sizing: border-box;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 0em 0.75em;
  align-items: flex-start;
  justify-content: center;
  color: rgba(0, 0, 0, 0.65);
}
.fieldsinput {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.span3 {
  color: rgba(165, 146, 221, 0.7);
}
.ton1 {
  color: #a592dd;
}
.min-10-ton-container {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.min-10-ton-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
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
  height: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
  color: #fefefe;
}
.frame-parent3 {
  border-radius: 16px;
  background-color: #f9fbff;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.75em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1em;
  text-align: center;
}
.frame-group {
  flex: 1;
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
  display: flex;
  flex-direction: row;
  padding: 1.25em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
