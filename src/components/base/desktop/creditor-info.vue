<template>
  <div class="modal-wrapper">
    <div class="parent">
      <div class="div">
        <div class="header-pop-up">
          <div class="page-title-parent">
            <div class="page-title">Информация о кредиторе</div>
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
          <div class="frame-group">
            <div class="icon-parent">
              <img class="icon" alt="" src="@/assets/images/iconsperson.svg" />
              <div class="div1">{{ pool?.organization }}</div>
            </div>
            <div class="frame-wrapper">
              <div class="group">
                <div class="div2">
                  <img
                    class="close-icon"
                    alt=""
                    src="@/assets/images/pie-chart.svg"
                  />
                  <div class="ton-parent">
                    <div class="ton">{{ revenueSumm }} TON</div>
                    <div class="div3">Доход</div>
                  </div>
                </div>
                <div class="frame-child" />
                <div class="frame-container">
                  <div class="icon-parent">
                    <img
                      class="percent-icon"
                      alt=""
                      src="@/assets/images/percent.svg"
                    />
                    <div class="div4">1 день = {{ midMillipercent }}%</div>
                  </div>
                  <div class="icon-parent">
                    <img
                      class="percent-icon"
                      alt=""
                      src="@/assets/images/clock.svg"
                    />
                    <div class="div4">{{ midFreePeriod }} дня = 0%</div>
                  </div>
                  <div class="icon-parent">
                    <img
                      class="percent-icon"
                      alt=""
                      src="@/assets/images/activity.svg"
                    />
                    <div class="div4">ROI = {{ midRoi }}%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-div">
            <div class="field-parent">
              <div class="field">
                <div class="roi">Дата регистрации:</div>
                <div class="n"></div>
              </div>
              <div class="col-titles-bg" />
            </div>
            <div class="field-parent">
              <div class="field">
                <div class="roi">Кредитных пуллов:</div>
                <div class="div9">
                  <span class="span">{{ allPoolsCount }} </span>
                  <span class="span1"> (</span>
                  <span class="span">{{ activePoolsCount }}</span>
                  <span class="span1"> активно)</span>
                </div>
              </div>
              <div class="col-titles-bg" />
            </div>
            <div class="field-parent">
              <div class="field">
                <div class="roi">Всего ликвидности:</div>
                <div class="n">{{ allLiquiditySumm }} TON</div>
              </div>
              <div class="col-titles-bg" />
            </div>
            <div class="field-parent">
              <div class="field">
                <div class="roi">Доступно для выдачи:</div>
                <div class="n">{{ availableLiquiditySumm }} TON</div>
              </div>
              <div class="col-titles-bg" />
            </div>
            <div class="field-parent">
              <div class="field">
                <div class="roi">Доход:</div>
                <div class="n">{{ revenueSumm }} ТОN</div>
              </div>
              <div class="col-titles-bg" />
            </div>
            <div class="field-parent">
              <div class="field">
                <div class="roi">ROI:</div>
                <div class="n">{{ midRoi }}% годовых</div>
              </div>
              <div class="col-titles-bg" />
            </div>
            <div class="field-parent">
              <div class="field">
                <div class="roi">Количество выданных займов:</div>
                <div class="n">{{loansIssue}} раз</div>
              </div>
              <div class="col-titles-bg" />
            </div>
            <div class="field-parent">
              <div class="field">
                <div class="roi">Сумма выданных займов:</div>
                <div class="n">{{ loansSummIssue }} TON</div>
              </div>
              <div class="col-titles-bg" />
            </div>
            <div class="field-parent">
              <div class="field">
                <div class="roi">Процент невозврата:</div>
                <div class="n">{{midOverdueMillipercent}}%</div>
              </div>
            </div>
          </div>
          <div class="des-and-bbn">
            <button class="buttons-tabs" @click="close">
              <div class="text">Закрыть</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { Pool } from "@/types/pool.type";
import { useComputedCreditorInfo } from "@/composables/infoCalculation/useComputedCreditorInfo";
const emtis = defineEmits(["close"]);

const { pool } = defineProps({
  pool: {
    type: Object as PropType<Pool>,
  },
});

const {
  allPoolsCount, activePoolsCount, loansSummIssue, loansIssue, 
  allLiquiditySumm, availableLiquiditySumm, midRoi, midMillipercent,
  midFreePeriod, midOverdueMillipercent, revenueSumm
} = useComputedCreditorInfo(pool?.owner_id ? pool?.owner_id : 0)

const close = () => {
  emtis("close");
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
.icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
}
.div1 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
}
.icon-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
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
.div3 {
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
.div2 {
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
.div4 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
}
.frame-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0.75em;
  color: #3b3b3b;
}
.group {
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
.frame-wrapper {
  width: 37.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  color: #a592dd;
}
.frame-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
  color: #1f1f1f;
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
.span {
  //text-decoration: underline;
}
.span1 {
  color: #3b3b3b;
}
.div9 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  //color: rgba(87, 126, 247, 0.96);
}
.n {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.roi {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.frame-div {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: 0em 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
  text-align: left;
}
.percent-icon1 {
  position: relative;
  width: 1em;
  height: 1em;
  overflow: hidden;
  flex-shrink: 0;
}
.div19 {
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
  text-align: left;
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
  cursor: pointer;
  font-size: 1rem;
  background: transparent;
  &:hover {
    border: 0.5px solid rgba(87, 126, 247, 0.96);
    background: rgba(87, 126, 247, 0.24);
  }
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
  color: #555562;
}
.frame-parent {
  align-self: stretch;
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  justify-content: flex-start;
  gap: 1.25em;
  text-align: right;
  overflow-y: auto;
}
.div {
  position: absolute;
  top: calc(50% - 259.5px);
  left: calc(50% - 320px);
  border-radius: 15px;

  box-sizing: border-box;
  width: 40em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.parent {
  position: relative;
  width: 100%;
  height: 44.94em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
@media (max-height: 900px) {
  .div {
    height: 600px;
  }
  .group {
    padding: 1.2em 0.81em;
  }
}
</style>
