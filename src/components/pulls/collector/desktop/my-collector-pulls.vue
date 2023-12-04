<template>
  <desktop-modal v-if="isDetail" @close="close">
    <template v-slot:title> Информация о задолженности #{{ loan?.id }} </template>
    <template v-slot:body>
      <div class="frame-parent">
        <div class="frame-group">
          <div class="frame-container">
            <div class="frame-wrapper">
              <div class="frame-div">
                <div class="frame-parent1">
                  <div class="frame-parent2">
                    <div class="header-wrapper">
                      <div class="header">
                        <div class="div">Основная информация</div>
                      </div>
                    </div>
                    <div class="frame-wrapper1">
                      <div class="parent">
                        <div class="div1">Кредитор:</div>
                        <div
                          class="radiobutton-parent"
                          @click="() => (isCreditorInfo = true)"
                        >
                          <div class="div2">{{ poolByLoan?.organization }} </div>
                          <img
                            class="radiobutton-icon"
                            alt=""
                            src="@/assets/images/investore.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="frame-parent_status">
                      <div class="c-wrapper">
                        <div class="c">Cостояние:</div>
                      </div>
                      <div class="status-all">
                        <div class="colors-graphsorders-parent">
                          <img
                            class="colors-graphsorders-icon"
                            alt=""
                            src="@/assets/images/colors-graphsorders3.svg"
                          />
                          <div class="c">
                            <span>Не погашена </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field-parent">
                      <div class="field">
                        <div class="div3"><b>Цена продажи:</b></div>
                        <div class="ton"><b>{{ loan?.price }} TON</b></div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                    <div class="field-parent">
                      <div class="field">
                        <div class="div3">Текущий долг:</div>
                        <div class="ton">{{ duty }} TON</div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                    <div class="field-parent">
                      <div class="field">
                        <div class="div3">Ставка:</div>
                        <div class="ton">{{ loan?.millipercent ? loan?.millipercent / 100 : '' }}% в день</div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                    <div class="field-parent">
                      <div class="field">
                        <div class="div3">Просрочен на:</div>
                        <div class="ton">{{overdue}} дня</div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                    <div class="field-parent">
                      <div class="field">
                        <div class="div3">Цена покупки:</div>
                        <div class="ton">{{ loan?.price }} TON</div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                  </div>
                  <div class="frame-parent3">
                    <div class="header-wrapper">
                      <div class="header">
                        <div class="div">Параметры займа</div>
                      </div>
                    </div>
                    <div class="field-parent">
                      <div class="field">
                        <div class="div3">Тело займа:</div>
                        <div class="ton">{{ loan?.amount }} TON</div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                    <div class="field-parent">
                      <div class="field">
                        <div class="div3">Накопленный процент:</div>
                        <div class="ton">TON</div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                    <div class="field-parent">
                      <div class="field">
                        <div class="div3">Выплачено по долгу:</div>
                        <div class="ton">{{ loan?.paid_amount }} TON</div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                    <div class="field-parent">
                      <div class="field">
                        <div class="div3">Одобренный лимит:</div>
                        <div class="ton">до {{ poolByLoan?.available_liquidity }} TON</div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                    <div class="field-parent">
                      <div class="field">
                        <div class="div3">На срок:</div>
                        <div v-if="poolByLoan?.max_duration" class="ton">до {{ parse(poolByLoan?.max_duration).days }} дней</div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                    <div class="field-parent">
                      <div class="field">
                        <div class="div3">Беспроцентный лимит:</div>
                        <div v-if="poolByLoan?.free_period" class="ton">{{ parse(poolByLoan?.free_period).days }} дня</div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                    <div class="field-parent">
                      <div class="field">
                        <div class="div3">Взят:</div>
                        <div  class="ton">{{localeTime}}</div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                    <div class="field-parent">
                      <div class="field">
                        <div class="div3">Пролонгирован:</div>
                        <div class="ton"></div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                    <div class="field-parent">
                      <div class="field">
                        <div class="div3">Выкуплен:</div>
                        <div class="ton"></div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                  </div>
                  <div class="frame-parent3">
                    <div class="header-parent">
                      <div class="header">
                        <div class="div">Информация о заемщике</div>
                      </div>
                      <div class="div22"></div>
                    </div>
                    <div class="field-parent">
                      <div class="field">
                        <div class="div23">Имя:</div>
                        <div class="ton">
                          {{ loan?.borrower?.passport?.name ? loan?.borrower?.passport?.name : ''}} 
                          {{ loan?.borrower?.passport?.surname ? loan?.borrower?.passport?.surname : ''}} 
                        </div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                    <div class="field-parent">
                      <div class="field">
                        <div class="div23">Проживает в:</div>
                        <div class="ton">{{  loan?.borrower?.passport?.living_address?.city ? loan?.borrower?.passport?.living_address?.city : ''  }}</div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                    <div class="field-parent">
                      <div class="field">
                        <div class="div23">Возраст:</div>
                        <div class="ton">{{ age }} лет</div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                    <div class="field-parent">
                      <div class="field">
                        <div class="div23">Годовой доход:</div>
                        <div class="ton">{{ loan?.borrower?.userinfo?.revenue ? loan?.borrower?.userinfo?.revenue : '' }} руб</div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                    <div class="field-parent">
                      <div class="field">
                        <div class="div23">Сфера деятельности:</div>
                        <div class="ton">{{ loan?.borrower?.userinfo?.employment_type ? loan?.borrower?.userinfo?.employment_type : ''}}</div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                    <div class="field-parent">
                      <div class="field">
                        <div class="div23">Анкета заемщика:</div>
                        <div class="ton_link ton">Открыть</div>
                      </div>
                      <div class="col-titles-bg" />
                    </div>
                    <div class="icons-parent">
                      <div class="icons">
                        <div class="iconsfile">
                          <img
                            class="vector-icon"
                            alt=""
                            src="@/assets/images/iconspdf.svg"
                          />

                          <div class="pdf">PDF</div>
                        </div>
                      </div>
                      <div class="pdf1">Скачать анкету в PDF</div>
                      <img
                        class="iconchange1"
                        alt=""
                        src="/src/views/public/iconchange.svg"
                      />
                    </div>
                  </div>
                </div>
                <div class="frame-wrapper2">
                  <div class="group">
                    <div class="div33">
                      <img
                        class="pie-chart-icon"
                        alt=""
                        src="@/assets/images/pie-chart.svg"
                      />
                      <div class="container">
                        <div class="div34">Стоимость:</div>
                        <div class="ton5">{{ loan?.price }} TON</div>
                      </div>
                    </div>
                    <div class="frame-child" />
                    <div class="frame-parent5">
                      <div class="percent-parent">
                        <img
                          class="percent-icon"
                          alt=""
                          src="@/assets/images/percent.svg"
                        />
                        <div v-if="poolByLoan?.millipercent" class="div35">1 день = {{ poolByLoan?.millipercent / 100  }} %</div>
                      </div>
                      <div class="percent-parent">
                        <img
                          class="percent-icon"
                          alt=""
                          src="@/assets/images/clock.svg"
                        />
                        <div v-if="poolByLoan?.free_period" class="div35">{{ parse(poolByLoan?.free_period).days }} дня = 0%</div>
                      </div>
                      <div class="icons2bar-cards-parent">
                        <!--<img
                            class="percent-icon"
                            alt=""
                            src="/icons2bar-cards.svg"
                          />-->
                        <div class="div37">30 дней = 30%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="des-and-bbn-wrapper">
            <catos-button
              variant="fourth"
              :style="{ width: '400px', margin: '0 auto' }"
              @click="() => (isStatusChange = true)"
              >Сменить статус</catos-button
            >
            <catos-button
              variant="fourth_outline"
              :style="{ width: '400px', margin: '0 auto' }"
              @click="close"
              >Отмена</catos-button
            >
          </div>
        </div>
      </div>
    </template>
  </desktop-modal>
  <creditor-info
    v-if="isCreditorInfo"
    :pool="poolByLoan"
    @close="() => (isCreditorInfo = false)"
  ></creditor-info>
  <status-change
    v-if="isStatusChange"
    variant="collector"
    :id="loan?.id ? loan?.id : 0"
    @close="() => (isStatusChange = false)"
  ></status-change>
</template>
<script setup lang="ts">
import { ref, PropType, computed } from "vue";
// @ts-ignore
import desktopModal from "@/components/base/desktop-modal.vue";
// @ts-ignore
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import creditorInfo from "@/components/base/desktop/creditor-info.vue";
import statusChange from "@/components/loans/creditor/desktop/modal-body/ status-change.vue";
import { useComputedLoanInfo } from "@/composables/infoCalculation/useComputedLoanInfo"
import { LoansBoughtResponse } from "@/types/loan.types";
import { parse } from "tinyduration";
import { Pool } from "@/types/pool.type";

const isDetail = ref(true);
const isStatusChange = ref(false);
const emits = defineEmits(["close"]);

const {loan, poolByLoan} = defineProps({
  loan: { type: Object as PropType<LoansBoughtResponse>},
  poolByLoan: {
    type: Object as PropType<Pool>,
  },
})
const close = () => {
  emits("close");
};
const isCreditorInfo = ref(false);

const { duty, overdue, localeTime, age } = useComputedLoanInfo(loan)
</script>
<style scoped lang="scss">
.div {
  position: relative;
  font-size: 1em;
  line-height: 130%;
}
.header {
  align-self: stretch;
  border-radius: 6px;
  background-color: #f9f7fc;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0em;
  align-items: center;
  justify-content: center;
}
.header-wrapper {
  width: 36.25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.div1 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
}
.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.div2 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
  font-weight: 300;
  color: #2c56c0;
  text-decoration: underline;
}
.radiobutton-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
  cursor: pointer;
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
.frame-wrapper1 {
  align-self: stretch;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1em;
}
.div3 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.ton {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  &_link {
    color: #577ef7;
    text-decoration: underline;
    cursor: pointer;
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
.field-parent {
  width: 36.25em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.frame-parent2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.44em;
}
.frame-parent3 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.p {
  margin: 0;
}
.txt {
  line-break: anywhere;
  width: 100%;
}
.div22 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  color: #78789a;
  text-align: center;
  display: flex;
  align-items: center;
  width: 21.43em;
}
.header-parent {
  width: 36.25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.div23 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.frame-parent1 {
  width: 37.5em;
  display: flex;
  flex-direction: column;
  padding: 0em 0.63em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.88em;
}
.pie-chart-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.div34 {
  position: relative;
  font-size: 0.75em;
}
.ton5 {
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
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.31em;
}
.div33 {
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
.div35 {
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
.div37 {
  position: relative;
  font-size: 0.88em;
  line-height: 120%;
}
.icons2bar-cards-parent {
  width: 6.69em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.frame-parent5 {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0.75em;
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
.frame-wrapper2 {
  width: 37.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.88em;
}
.frame-wrapper {
  display: flex;
  flex-direction: column;
  padding: 0em 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
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
.frame-container {
  height: 35.31em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
  overflow-y: auto;
}
.text {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
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
}
.des-and-bbn-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
  color: #f8f8ff;
  gap: 15px;
}
.frame-group {
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

  width: 13.56em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0em 0em 0em 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-end;
}
.frame-parent_status {
  width: 100%;
  display: flex;

  box-sizing: border-box;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.88em;
  margin-bottom: 1em;
}
.icons-parent {
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
  gap: 0.5em;
  color: #fff;
  margin-top: 0.5em;
  cursor: pointer;
}
.iconsfile {
  position: absolute;
  top: 0.38em;
  left: 0.5em;
  width: 1.06em;
  height: 1.31em;
}
.icons {
  position: relative;
  border-radius: 42px;
  width: 2em;
  height: 2em;
  z-index: 0;
}
.vector-icon {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.pdf {
  position: absolute;
  top: 2.35em;
  left: 0.54em;
  font-size: 0.35em;
  line-height: 120%;
  font-weight: 500;
}
.pdf1 {
  position: relative;
  top: 0.2em;
  font-size: 0.75em;
  line-height: 140%;
  color: #3b3b3b;
  z-index: 1;
}
.iconchange1 {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  top: 0em;
  right: 0em;
  bottom: 0em;
  max-height: 100%;
  width: 2.5em;
  z-index: 2;
}
@media (max-height: 900px) {
  .frame-container {
    height: 500px;
  }
}
</style>
