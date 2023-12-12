<template>
  <desktop-modal @close="close">
    <template v-slot:title> Просроченная заявка на займ #{{ loan?.id }} </template>
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
                    src="@/assets/images/colors-graphsorders1.svg"
                  />
                  <div class="div">Продан</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-div">
          <div class="frame-wrapper1">
            <div class="frame-parent1">
              <div class="frame-wrapper2">
                <div class="component-parent">
                  <div class="component">
                    <div class="field">
                      <div class="div2"><b>Цена:</b></div>
                      <div class="div3"><b>{{loan?.price}} TON</b></div>
                    </div>
                    <!--<div class="col-titles-bg" />
                    <div class="field">
                      <div class="div2">Дата смены статуса:</div>
                      <div class="div3"></div>
                    </div>-->
                    <div class="col-titles-bg" />
                  </div>
                  <div class="component">
                    <div class="field">
                      <div class="div2">Заявитель:</div>
                      <div class="div3"></div>
                    </div>
                    <div class="col-titles-bg" />
                  </div>
                  <div class="component">
                    <div class="field">
                      <div class="div2">Анкета заявителя:</div>
                      <a class="div7_link div7" @click="toBlank">Открыть</a>
                    </div>
                    <div class="col-titles-bg" />
                  </div>
                  <div class="component">
                    <div class="field">
                      <div class="div2">Дата создания заявки:</div>
                      <div class="div3">{{ startTerm }}</div>
                    </div>
                    <div class="col-titles-bg" />
                  </div>
                  <div class="component">
                    <div class="field">
                      <div class="div2">Вернуть не позднее:</div>
                      <div class="div3">{{ endTerm }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="frame-parent2">
                <div class="parent">
                  <div class="div13">Одобренные ранее:</div>
                  <div class="dividing" />
                  <div v-for="v in previouslyApproved" :key="v.id" class="frame-wrapper3">
                    <div class="frame-wrapper4">
                      <div class="frame-wrapper2">
                        <div class="ton-wrapper">
                          <div class="ton">
                            <span>Пулл </span>
                            <span class="span">#{{ v.pool_id }}</span>
                            <span>, </span>
                            <span v-if="v.status === 'approved'"> срок {{ useComputedLoanRequestInfo(v).duration.value }}, сумма {{ v.approved_amount / NANO_MULTIPLIER}} TON </span>
                            <span class="span4" v-else-if="v.status === 'declined'">не одобрено</span>
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
          <!--<catos-button
            variant="secondary"
            :style="{ width: '100%', margin: '0', fontSize: '14.px' }"
            @click="api"
            >Отправить API повторно</catos-button
          >-->

          <catos-button
            variant="fourth_outline"
            :style="{ width: '100%', margin: '0' }"
            @click="close"
            >Закрыть</catos-button
          >
        </div>
      </div>
    </template>
  </desktop-modal>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import desktopModal from "@/components/base/desktop-modal.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import { LoansResponse } from "@/types/loan.types";
import { useComputedLoanInfo } from "@/composables/infoCalculation/useComputedLoanInfo";
import { useComputedLoanRequestInfo } from "@/composables/infoCalculation/useComputedLoanRequestInfo"
import { NANO_MULTIPLIER } from "@/utils/constants";


const { loan } = defineProps({
  loan: {
    type: Object as PropType<LoansResponse>,
  },
});

const {isOverdue, interestRate, duration, startTerm, endTerm} = useComputedLoanInfo(loan)
const {previouslyApproved} = useComputedLoanRequestInfo()

const emtis = defineEmits(["close", "api", "blank"]);
const toBlank = () => {
  emtis("blank");
};
const api = () => {
  emtis("api");
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
.div7 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 130%;
  color: rgba(87, 126, 247, 0.96);
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
.frame-wrapper2 {
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
  padding: 0.94em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.div13 {
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
.span {
  text-decoration: underline;
  color: rgba(87, 126, 247, 0.96);
}
.ton {
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
.frame-wrapper4 {
  width: 18.75em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-wrapper3 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.span3 {
  color: #3b3b3b;
}
.span4 {
  color: #ff0000;
}
.parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1em;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
  color: #fefefe;
}
.frame-parent2 {
  align-self: stretch;
  border-radius: 16px;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  display: flex;
  flex-direction: column;
  padding: 1.5em 1.31em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5em;
}
.frame-parent1 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
}
.frame-wrapper1 {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-div {
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.button1 {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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
  flex: 1;
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
  flex-direction: row;
  padding: 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
  text-align: right;
  color: #fefefe;
  width: 480px;
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
@media (max-height: 900px) {
  .frame-parent1 {
    overflow-y: auto;
    height: 20em;
  }
}
</style>
