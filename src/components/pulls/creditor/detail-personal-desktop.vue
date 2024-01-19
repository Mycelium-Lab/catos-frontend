<template>
  <div class="modal-wrapper">
    <div class="div">
      <div class="header-pop-up">
        <div class="page-title-parent">
          <div class="page-title">пул # {{ pool?.id }}</div>
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
          <div class="parent">
            <div class="div1">
              <img
                class="close-icon"
                alt=""
                src="@/assets/images/pie-chart.svg"
              />
              <div class="ton-parent">
                <div class="ton">{{ pool?.revenue }} TON</div>
                <div class="div2">Доход</div>
              </div>
            </div>
            <div class="frame-child" />
            <div class="frame-container">
              <div class="percent-parent">
                <img
                  class="percent-icon"
                  alt=""
                  src="@/assets/images/percent.svg"
                />
                <div class="div3">{{interestRateString}}</div>
              </div>
              <div class="percent-parent">
                <img
                  class="percent-icon"
                  alt=""
                  src="@/assets/images/clock.svg"
                />
                <div class="div3">{{freePeriodString}}</div>
              </div>
              <div class="percent-parent">
                <img class="percent-icon" src="@/assets/images/activity.svg" />
                <div class="div3">{{`ROI = ${pool?.roi}%`}}</div>
              </div>
            </div>
          </div>
          <div class="frame-div">
            <div class="c-wrapper">
              <div class="c">Cостояние:</div>
            </div>
            <div class="status-all">
              <div class="colors-graphsorders-parent">
                <img 
                      v-if="pool?.status === 'active'"
                      class="colors-graphsorders-icon"
                      alt=""
                      src="@/assets/images/colors-graphsorders1.svg"
                    />
                    <img 
                      v-else-if="pool?.status === 'inactive'"
                      class="colors-graphsorders-icon_inactive colors-graphsorders-icon"
                      alt=""
                      src="@/assets/images/colors-graphsorders3.svg"
                    />
                <div class="c">
                  <span>{{  i18n.global.t(`pools-status.${pool?.status}`)}}</span>
                  <span class="span">(отключить)</span>
                </div>
              </div>
              <img
                class="iconchange"
                alt=""
                src="@/assets/desktop/iconchange.svg"
              />
            </div>
          </div>
        </div>
        <div class="group">
          <div class="div6">Кредитор:</div>
          <div
            class="radiobutton-parent"
            @click="
              () => {
                isCreditoreInfo = true;
              }
            "
          >
            <a class="div7">{{ pool?.organization }}</a>
            <img
              class="radiobutton-icon"
              alt=""
              src="@/assets/images/investore.svg"
            />
          </div>
        </div>
        <div class="frame-parent1">
          <div class="field-parent">
            <div class="field">
              <div class="roi">Ставка:</div>
              <div  v-if="pool?.millipercent" class="div9">{{ pool?.millipercent / 100 }}% в день</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="roi">На срок:</div>
              <div class="div9">до {{maxDuration}}</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="roi">Беспроцентный период:</div>
              <div class="div9">{{ freePeriod }} дн</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="roi">Всего ликвидности:</div>
              <div class="div9">{{ pool?.all_liquidity ? pool?.all_liquidity / NANO_MULTIPLIER : 0 }} TON</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="roi">Количество выданных займов:</div>
              <div class="div9">{{ pool?.loan_count }} раз</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="roi">Сумма выданных займов:</div>
              <div class="div9"> {{ loansSummIssue }} TON</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="roi">Процент невозврата:</div>
              <div  v-if="pool?.millipercent" class="div9">{{ pool?.overdue_millipercent / 100 }}%</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="roi">Доступно ликвидности:</div>
              <div class="div9">{{ pool?.available_liquidity ? pool?.available_liquidity / NANO_MULTIPLIER: 0}} TON</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="roi">Дата создания:</div>
              <div class="div9">{{createdTerm}}</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="roi">Доход:</div>
              <div class="div9">{{ pool?.revenue }} TON</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-wrapper">
            <div class="field">
              <div class="roi">ROI инвесторов:</div>
               <div class="div9">{{pool?.roi}}% годовых</div>
            </div>
          </div>
        </div>
        <div class="des-and-bbn">
          <button class="button" @click="toLoans">
            <div class="buttons-tabs">
              <div class="text">Займы</div>
            </div>
          </button>
          <button class="button" @click="toManagement">
            <div class="buttons-tabs">
              <div class="text">Упр. ликвид</div>
            </div>
          </button>
          <button class="button">
            <div class="buttons-tabs" @click="toAnalytics">
              <div class="text">Аналитика</div>
            </div>
          </button>
          <button class="buttons-tabs3" @click="close">
            <div class="text">Закрыть</div>
          </button>
        </div>
      </div>
    </div>
  </div>
  <creditor-info
    v-if="isCreditoreInfo"
    :pool="pool"
    @close="() => (isCreditoreInfo = false)"
  ></creditor-info>
</template>
<script setup lang="ts">
import { ref, PropType } from "vue";
import creditorInfo from "@/components/base/desktop/creditor-info.vue";
import { Pool } from "@/types/pool.type";
import {useComputedPoolInfo} from "@/composables/infoCalculation/useComputedPoolInfo";
import { i18n } from "@/i18n";
import { NANO_MULTIPLIER } from "@/utils/constants";

const { pool } = defineProps({
  pool: {
    type: Object as PropType<Pool>,
  },
});

const {
  interestRate, monthInterestRateString, 
  maxDuration, freePeriod, interestRateString,
  freePeriodString, createdTerm, loansSummIssue } = useComputedPoolInfo(pool)

const emits = defineEmits(["close", "management", "loans", "analytics"]);

const isCreditoreInfo = ref(false);

const toLoans = () => {
  emits("loans");
};
const toAnalytics = () => {
  emits("analytics");
};
const toManagement = () => {
  emits("management");
};
const close = () => {
  emits("close");
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
}
.ton-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.31em;
}
.div1 {
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
.div3 {
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
.frame-container {
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
  background-color: rgba(165, 146, 221, 0.07);
  width: 13.56em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0em 0em 0em 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
}
.frame-div {
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1em;
  color: #3b3b3b;
}
.frame-group {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
  color: #a592dd;
}
.div6 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
}
.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.div7 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
  font-weight: 300;
  text-decoration: underline;
  color: #577ef7;
  cursor: pointer;
}
.radiobutton-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
  cursor: pointer;
}
.group {
  align-self: stretch;
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
.div9 {
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
.roi {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.field-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent1 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: 0em 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.percent-icon1 {
  position: relative;
  width: 1em;
  height: 1em;
  overflow: hidden;
  flex-shrink: 0;
}
.div25 {
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
  color: #fefefe;
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
  background: transparent;
  border: none;
  cursor: pointer;
}
.buttons-tabs3 {
  flex: 1;
  border-radius: 25px;
  border: 1px solid #5d83f7;
  box-sizing: border-box;
  height: 2.5em;
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
  color: #555562;
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
  gap: 0.63em;
  text-align: right;
  color: #fefefe;
  width: 600px;
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
  height: 100%;
  overflow-y: auto;
}
.div {
  position: relative;
  border-radius: 15px;
  border: 1px solid #f6f4fc;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
  width: 640px;
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
