<template>
  <div class="modal-wrapper">
    <div class="parent">
      <div class="div">
        <div class="header-pop-up">
          <div class="page-title-parent">
            <div class="page-title">Кредитные пуллы</div>
            <img
              class="close-icon-action close-icon"
              alt=""
              src="@/assets/desktop/close.svg"
              @click="close"
            />
          </div>
          <div class="header-pop-up-child" />
        </div>
        <div class="inner">
          <div class="frame-parent">
            <div class="frame-wrapper">
              <div class="frame-wrapper">
                <div class="wrapper">
                  <div class="div1">
                    <img
                      class="close-icon"
                      alt=""
                      src="@/assets/images/pie-chart.svg"
                    />
                    <div class="ton-parent">
                      <div class="ton">Управление ликвидностью пулл #{{ pool?.id }}</div>
                      <div class="div2">Доход</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="frame-group">
              <div class="frame-div">
                <div class="field-parent">
                  <div class="field">
                    <div class="div3">Всего ликвидности:</div>
                    <div class="ton1">{{ pool?.all_liquidity ? pool?.all_liquidity / NANO_MULTIPLIER : 0}} TON</div>
                  </div>
                  <div class="col-titles-bg" />
                </div>
                <!--<div class="field-parent">
                  <div class="field">
                    <div class="div3">Кредитных пуллов:</div>
                    <div class="ton1">TON</div>
                  </div>
                  <div class="col-titles-bg" />
                </div>-->
                <div class="field-parent">
                  <div class="field">
                    <div class="div3">Доступно для выдачи:</div>
                    <div class="ton1">{{ availableForLoan }} TON</div>
                  </div>
                  <div class="col-titles-bg" />
                </div>
                <div class="field-parent">
                  <div class="field">
                    <div class="div3">Доступно для изъятия:</div>
                    <div class="ton1">{{ pool?.available_liquidity ? pool?.available_liquidity  / NANO_MULTIPLIER: 0 }} TON</div>
                  </div>
                  <div class="col-titles-bg" />
                </div>
                <div class="field-parent">
                  <div class="field">
                    <div class="div3">Процент невозврата:</div>
                    <div  v-if="pool?.millipercent"  class="ton1">{{ pool?.overdue_millipercent / 100 }}%</div>
                  </div>
                  <div class="col-titles-bg" />
                </div>
                <div class="field-parent">
                  <div class="field">
                    <div class="div3">Не вернули:</div>
                    <div class="ton1">{{debt}} TON</div>
                  </div>
                  <div class="col-titles-bg" />
                </div>
                <div class="field-parent">
                  <div class="field">
                    <div class="div3">Продано коллекторам:</div>
                    <div class="ton1">{{ sold}} TON</div>
                  </div>
                  <div class="col-titles-bg" />
                </div>
                <div class="field-parent">
                  <div class="field">
                    <div class="div3">На продаже коллекторам:</div>
                    <div class="ton1">{{ forSale }} TON</div>
                  </div>
                  <div class="col-titles-bg" />
                </div>
              </div>
              <div class="rectangle-parent"></div>
            </div>
            <div class="des-and-bbn">
              <button class="button" @click="toWithdraw">
                <div class="buttons-tabs">
                  <div class="text">Изъять ликвидность</div>
                </div>
              </button>
              <button class="button" @click="toAdd">
                <div class="buttons-tabs">
                  <div class="text">Добавить ликвидность</div>
                </div>
              </button>
              <button class="button2" @click="close">
                <div class="buttons-tabs2">
                  <div class="text">Закрыть</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Pool } from "@/types/pool.type";
import { useComputedPoolInfo } from "@/composables/infoCalculation/useComputedPoolInfo";
import { PropType} from "vue";
import { NANO_MULTIPLIER } from "@/utils/constants";

const { pool } = defineProps({
  pool: {
    type: Object as PropType<Pool>,
  },
});
const emtis = defineEmits(["close", "withdraw", "add"]);

const {availableForLoan, sold, forSale, debt} = useComputedPoolInfo(pool)

const close = () => {
  emtis("close");
};
const toWithdraw = () => {
  emtis("withdraw");
};
const toAdd = () => {
  emtis("add");
};
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
.ton {
  align-self: stretch;
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
.div2 {
  position: relative;
  font-size: 0.75em;
  background: linear-gradient(#3b3b3b, #3b3b3b), #3b3b3b;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: none;
}
.ton-parent {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.31em;
}
.div1 {
  flex: 1;
  border-radius: 15px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.94em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.wrapper {
  align-self: stretch;
  border-radius: 20px;
  background-color: #f6f4fc;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.63em 1.25em 0.63em 0.63em;
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
  width: 36.25em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.frame-div {
  display: flex;
  flex-direction: column;
  padding: 0em 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.instance-child {
  position: absolute;
  height: 100%;
  top: 0em;
  right: 0.13em;
  bottom: 0em;
  border-radius: 32px;
  background-color: rgba(230, 221, 255, 0.39);
  width: 0.38em;
}
.instance-item {
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
.rectangle-parent {
  align-self: stretch;
  position: relative;
  width: 0.63em;
}
.frame-group {
  display: flex;
  flex-direction: row;
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
  padding: 0.69em 0.5em;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #3062fd;
  }
}
.button {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1rem;
  color: #f8f8ff;
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
  &:hover {
    border: 0.5px solid rgba(87, 126, 247, 0.96);
    background: rgba(87, 126, 247, 0.24);
  }
}
.button2 {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #555562;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1rem;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.inner {
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 1.25em;
  align-items: flex-start;
  justify-content: center;
}
.div {
  position: absolute;
  top: calc(50% - 283.5px);
  left: calc(50% - 330px);
  border-radius: 15px;
  border: 1px solid #f6f4fc;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 660px;
}
.parent {
  position: relative;
  width: 100%;

  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
