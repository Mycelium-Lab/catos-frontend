<template>
  <div class="modal-wrapper">
    <div class="div">
      <div class="header-pop-up">
        <div class="page-title-parent">
          <div class="page-title">Заявка на займ #{{ loanRequest?.id }}</div>
          <img
            class="close-icon-action close-icon"
            alt=""
            src="@/assets/desktop/close.svg"
            @click="close"
          />
        </div>
        <div class="header-pop-up-child" />
      </div>
      <div class="frame-parent">
        <div class="frame-wrapper">
          <div class="frame-container">
            <div class="frame-group">
              <div class="wrapper">
                <div class="div1">Статус:</div>
              </div>
              <div class="status-all">
                <div class="colors-graphsorders-parent">
                  <img
                    v-if="loanRequest?.status === 'approved'"
                    class="colors-graphsorders-icon"
                    alt=""
                    src="@/assets/images/colors-graphsorders1.svg"
                  />
                  <img
                    v-else-if="loanRequest?.status === 'declined'"
                    class="colors-graphsorders-icon"
                    alt=""
                    src="@/assets/images/colors-graphsorders3.svg"
                  />
                  <img
                    v-else
                    class="colors-graphsorders-icon"
                    alt=""
                    src="@/assets/images/colors-graphsorders4.svg"
                  />
                  <div class="div1">
                    {{  i18n.global.t(`loans-request-status.${loanRequest?.status}`)}}
                  </div>
                </div>
                <img
                  class="iconchange"
                  alt=""
                  src="@/assets/desktop/iconchange.svg"
                  @click="handleChangeStatus"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="frame-div">
          <div v-if="statusChangedTerm" class="field-parent">
            <div class="field">
              <div class="div3">Дата смены статуса:</div>
              <div class="div4">{{ statusChangedTerm }}</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div3">Заявитель:</div>
              <div class="div4"></div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div3">Анкета заявителя:</div>
              <a class="div8" @click="toBlank">Открыть</a>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="div3">Дата создания:</div>
              <div class="div4">{{ createdTerm }}</div>
            </div>
            <div class="col-titles-bg" />
          </div>
        </div>
        <div class="frame-parent1">
          <div class="parent">
            <div class="div12">Одобренные ранее:</div>
            <div class="dividing" />
            <div class="frame-wrapper1">
              <div class="frame-wrapper2">
                <div class="frame-wrapper3">
                  <div class="ton-wrapper">
                    <div class="ton">
                      <span>Пулл </span>
                      <span class="span">#12345</span>
                      <span>, срок 30 дней, сумма 10 000 TON </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="frame-wrapper1">
              <div class="frame-wrapper2">
                <div class="frame-wrapper3">
                  <div class="ton-wrapper">
                    <div class="ton">
                      <span>Пулл </span>
                      <span class="span">#12344</span>
                      <span>, срок 14 дней, сумма 3 000 TON </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="frame-wrapper1">
              <div class="frame-wrapper2">
                <div class="frame-wrapper3">
                  <div class="ton-wrapper">
                    <div class="ton">
                      <span>Пулл </span>
                      <span class="span">#12343</span>
                      <span class="span3">, </span>
                      <span class="span4">не одобрено</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="frame-wrapper1">
              <div class="frame-wrapper2">
                <div class="frame-wrapper3">
                  <div class="ton-wrapper">
                    <div class="ton">
                      <span>Пулл </span>
                      <span class="span">#12342</span>
                      <span>, срок 14 дней, сумма 3 000 TON </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="button">
            <div class="buttons-tabs">
              <div class="text">Изменить одобренную сумму</div>
            </div>
          </button>
        </div>
        <div class="des-and-bbn">
          <button class="button1" @click="toRepeadAPI">
            <div class="buttons-tabs1">
              <div class="text">Отправить API повторно</div>
            </div>
          </button>
          <button class="button1_detail button1">
            <div class="buttons-tabs1_detail buttons-tabs1" @click="close">
              <div class="text">Закрыть</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { useComputedLoanRequestInfo } from "@/composables/infoCalculation/useComputedLoanRequestInfo"
import { LoansRequestResponse } from "@/types/loan.types";
import { i18n } from "@/i18n";

const { loanRequest } = defineProps({
  loanRequest: {
    type: Object as PropType<LoansRequestResponse>,
  },
});
const emtis = defineEmits(["close", "blank", "api", 'onHandleChangeStatus']);

const toRepeadAPI = () => {
  emtis("api");
};
const toBlank = () => {
  emtis("blank");
};
const close = () => {
  emtis("close");
};

const handleChangeStatus = () => {
  emtis("onHandleChangeStatus");
}
const {statusChangedTerm, createdTerm} = useComputedLoanRequestInfo(loanRequest)
</script>
<style scoped lang="scss">
.modal-wrapper {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
.page-title {
  flex: 1;
  position: relative;
  font-size: 1.13em;
  line-height: 130%;
  font-weight: 600;
}
.close-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
  &-action {
    cursor: pointer;
  }
}
.page-title-parent {
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 1.25em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.81em;
}
.header-pop-up-child {
  align-self: stretch;
  position: relative;
  background-color: #f6f4fc;
  height: 0.06em;
}
.header-pop-up {
  align-self: stretch;
  border-radius: 15px 15px 0px 0px;
  border: 1px solid #f3efff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.div1 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  top: 0.1em;
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
  cursor: pointer;
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
.field-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.div8 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 130%;
  color: #5d83f7;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
}
.frame-div {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: 0em 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.percent-icon {
  position: relative;
  width: 1em;
  height: 1em;
  overflow: hidden;
  flex-shrink: 0;
}
.div11 {
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
.div12 {
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
.frame-wrapper3 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-wrapper2 {
  width: 18.75em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-wrapper1 {
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
  font-size: 0.88rem;
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
  cursor: pointer;
  &:hover {
    background: #3062fd;
  }
}
.button {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
  color: #fefefe;
  background: transparent;
  border: none;
  font-size: 1rem;
}
.frame-parent1 {
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
.buttons-tabs1 {
  align-self: stretch;
  border-radius: 25px;
  background-color: #a966ff;
  display: flex;
  flex-direction: row;
  padding: 0.69em 1.5em;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: linear-gradient(73deg, #7811fe 0%, #ad6fff 100%), #445331;
  }
  &_detail {
    background: transparent;
    border: 1px solid #5d83f7;
    &:hover {
      border: 0.5px solid rgba(87, 126, 247, 0.96);
      background: rgba(87, 126, 247, 0.24);
    }
  }
}
.button1 {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: none;
  background: transparent;

  color: rgba(254, 254, 254, 1);
  &_detail {
    color: rgba(85, 85, 98, 1);
  }
}
.buttons-tabs2 {
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
  border: none;
  background: transparent;
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
  align-self: stretch;
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
  overflow-y: auto;
}
.div {
  position: relative;
  border-radius: 15px;
  border: 1px solid #f6f4fc;
  box-sizing: border-box;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
.group-action {
  display: flex;
  gap: 10px;
}
@media (max-height: 900px) {
  .div {
    height: 600px;
  }
}
</style>
