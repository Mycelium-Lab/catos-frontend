<template>
  <desktop-modal @close="close">
    <template v-slot:title> Просроченная заявка на займ #{{ loan?.id }} </template>
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
                      src="@/assets/images/colors-graphsorders2.svg"
                    />
                    <div class="div">Продается</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-parent1">
            <div class="frame-parent2">
              <div class="frame-parent3">
                <div class="fieldsinput-parent">
                  <div class="fieldsinput">
                    <div class="div2">Изменить сумму продажи:</div>
                    <input-data
                      :style="{ width: '100%', margin: '0' }"
                    ></input-data>
                  </div>
                </div>
                <catos-button
                  variant="fourth"
                  :style="{ width: '100%', margin: '0' }"
                  >Сохранить</catos-button
                >
              </div>
              <div class="frame-parent4">
                <div class="frame-wrapper1">
                  <div class="component-parent">
                    <div class="fieldsinput-parent">
                      <div class="field">
                        <div class="div4"><b>Цена:</b></div>
                        <div class="div5"><b>4000 TON</b></div>
                      </div>
                      <div class="col-titles-bg" />
                      <div class="field">
                        <div class="div4">Ставка:</div>
                        <div class="div5">{{ interestRate }}% в день</div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                    <div class="fieldsinput-parent">
                      <div class="field">
                        <div class="div4">Займ:</div>
                        <div class="div5">{{ loan?.amount }} TON</div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                    <div class="fieldsinput-parent">
                      <div class="field">
                        <div class="div4">Начисленные проценты:</div>
                        <div class="div5">512 TON</div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                    <div class="fieldsinput-parent">
                      <div class="field">
                        <div class="div4">Сумма к возвращению:</div>
                        <div class="div5">13 000 TON</div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                    <div class="fieldsinput-parent">
                      <div class="field">
                        <div class="div4">Вернуть не позднее:</div>
                        <div class="div5">{{ endTerm }}</div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                  </div>
                </div>
                <div class="frame-wrapper">
                  <div class="notification">
                    <img
                      class="percent-icon"
                      alt=""
                      src="@/assets/images/percent.svg"
                    />
                    <div class="min-10-ton-container">
                      Проценты начисляются с 12 апреля 2023 года
                    </div>
                  </div>
                </div>
                <div class="frame-parent5">
                  <div class="parent">
                    <div class="div15">Одобренные ранее:</div>
                    <div class="dividing" />
                    <div class="frame-wrapper2">
                      <div class="frame-wrapper3">
                        <div class="frame-wrapper1">
                          <div class="ton-wrapper">
                            <div class="ton3">
                              <span>Пулл </span>
                              <span class="span5">#12345</span>
                              <span>, срок 30 дней, сумма 10 000 TON </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="frame-wrapper2">
                      <div class="frame-wrapper3">
                        <div class="frame-wrapper1">
                          <div class="ton-wrapper">
                            <div class="ton3">
                              <span>Пулл </span>
                              <span class="span5">#12344</span>
                              <span>, срок 14 дней, сумма 3 000 TON </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="frame-wrapper2">
                      <div class="frame-wrapper3">
                        <div class="frame-wrapper1">
                          <div class="ton-wrapper">
                            <div class="ton3">
                              <span>Пулл </span>
                              <span class="span5">#12343</span>
                              <span class="span8">, </span>
                              <span class="span9">не одобрено</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="frame-wrapper2">
                      <div class="frame-wrapper3">
                        <div class="frame-wrapper1">
                          <div class="ton-wrapper">
                            <div class="ton3">
                              <span>Пулл </span>
                              <span class="span5">#12342</span>
                              <span>, срок 14 дней, сумма 3 000 TON </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="des-and-bbn">
            <catos-button
              variant="secondary"
              :style="{ width: '100%', margin: '0', fontSize: '14px' }"
              @click="api"
              >Отправить API повторно
            </catos-button>
            <catos-button
              variant="fourth_outline"
              :style="{ width: '100%', margin: '0', fontSize: '14px' }"
              @click="close"
              >Закрыть
            </catos-button>
          </div>
        </div>
      </div>
    </template>
  </desktop-modal>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import desktopModal from "@/components/base/desktop-modal.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import inputData from "@/components/fields/input-data.vue";
import { LoansResponse } from "@/types/loan.types";
import { useComputedLoanInfo } from "@/composables/infoCalculation/useComputedLoanInfo";

const { loan } = defineProps({
  loan: {
    type: Object as PropType<LoansResponse>,
  },
});

const {isOverdue, interestRate, duration, startTerm, endTerm} = useComputedLoanInfo(loan)

const emtis = defineEmits(["close", "api"]);
const api = () => {
  emtis("api");
};
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
  width: 2.5em;
  height: 2.5em;
}
.status-all {
  border-radius: 8px;

  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0em 0em 0em 0.63em;
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
  justify-content: space-between;
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
.div3 {
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
.fieldsinput-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  width: 28.13em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.75em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1em;
}
.div4 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.div5 {
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
.percent-icon {
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
.div15 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 150%;
  font-weight: 500;
  display: inline-block;
  width: 21.43em;
}
.dividing {
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  width: 18.81em;
  height: 0.06em;
}
.span5 {
  text-decoration: underline;
  color: rgba(87, 126, 247, 0.96);
}
.ton3 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.ton-wrapper {
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-wrapper3 {
  width: 18.75em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-wrapper2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.span8 {
  color: #3b3b3b;
}
.span9 {
  color: #ff0000;
}
.parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1em;
}
.button1 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
  color: #fefefe;
}
.frame-parent5 {
  align-self: stretch;
  border-radius: 16px;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  display: flex;
  flex-direction: column;
  padding: 1.2em 1.3em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5em;
}
.frame-parent4 {
  width: 28.13em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
  text-align: left;
}
.frame-parent2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.scroll-bar-child {
  position: absolute;
  height: 100%;
  top: 0em;
  right: 0.13em;
  bottom: 0em;
  border-radius: 32px;
  background-color: rgba(230, 221, 255, 0.39);
  width: 0.38em;
}
.scroll-bar-item {
  position: absolute;
  height: 41.71%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 58.29%;
  left: 0%;
  border-radius: 21px;
  background-color: #a592dd;
}
.scroll-bar {
  align-self: stretch;
  position: relative;
  width: 0.63em;
}
.frame-parent1 {
  height: 46.38em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
  text-align: center;
  height: 32em;
  overflow-y: auto;
}
.button2 {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.buttons-tabs3 {
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

  box-sizing: border-box;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
@media (max-height: 900px) {
  .frame-parent1 {
    height: 30em;
  }
}
</style>
