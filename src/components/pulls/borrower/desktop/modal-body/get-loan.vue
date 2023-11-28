<template>
  <div class="frame-parent">
    <div class="frame-group">
      <div class="frame-container">
        <div class="parent">
          <div class="div">Кредитор:</div>
          <div class="group" @click="() => (isCreditorInfo = true)">
            <a class="div1">Деньги до зарплаты</a>
            <img
              class="radiobutton-icon"
              alt=""
              src="@/assets/images/investore.svg"
            />
          </div>
        </div>
        <div class="frame-child" />
        <div class="frame-div">
          <div class="wrapper">
            <div class="div2">Ставка:</div>
          </div>
          <div class="div3">{{ interestRate }}% в день</div>
        </div>
        <div class="frame-child" />
        <div class="frame-parent1">
          <div class="container">
            <div class="div2">Беспроцентный период:</div>
          </div>
          <div class="div3">{{ freePeriod }} дней</div>
        </div>
      </div>
      <div class="fields-parent">
        <div class="fields">
          <div class="parent1">
            <div class="div2">Сумма займа:</div>
            <div class="frame-parent2">
              <div class="tag-parent">
                <div class="tag">
                  <div class="div2">
                    <span class="span">от</span>
                    <span class="span1"> 0 </span>
                  </div>
                </div>
                <range-slider
                  :max="50000"
                  :modelValue="1"
                  rangeWidth="159px"
                  inputLabel="ton"
                  @update:model-value="e => (sumLoans = e)"
                ></range-slider>

                <div class="tag">
                  <div class="div2">
                    <span class="span">
                      <span class="span">до </span>
                      <span class="span1">50 000 </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fields">
          <div class="parent1">
            <div class="div2">На срок:</div>
            <div class="frame-parent3">
              <div class="tag-group">
                <div class="tag">
                  <div class="div2">
                    <span class="span1">1 </span>
                    <span class="span">день</span>
                  </div>
                </div>
                <range-slider
                  :max="30"
                  :modelValue="1"
                  rangeWidth="100%"
                  @update:model-value="e => (term = e)"
                ></range-slider>
                <div class="tag">
                  <div class="div2">
                    <span class="span1">30 </span>
                    <span class="span">дней</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="frame-parent4">
        <div class="frame-parent5">
          <div class="frame">
            <div class="div2">Итого:</div>
          </div>
          <div class="header">
            <div class="div14">Сумма займа:</div>
            <div class="ton1">{{ sum }} TON</div>
          </div>
          <div class="parent3">
            <div class="div14">Возврат в течении:</div>
            <div class="ton1">
              {{ term === 1 || term === 21 ? `${term} дня` : `${term} дней` }}
            </div>
          </div>
        </div>
        <div class="info-1-parent">
          <div class="info-1">
            <div class="div17">
              Вы можете погасить займ досрочно заплатив меньший процент по
              кредиту
            </div>
          </div>
          <div class="info-2">
            <div class="info-2-inner">
              <div class="frame-parent6">
                <div class="group">
                  <img
                    class="alert-triangle-icon"
                    alt=""
                    src="@/assets/images/alerttriangle.svg"
                  />
                  <div class="div18">Внимание!</div>
                </div>
                <div class="div19">
                  Если не вернуть займ вовремя, ваш долг может быть продан
                  коллекторам
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="des-and-bbn">
        <catos-button
          variant="secondary"
          :style="{ width: '100%', margin: '0' }"
          @click="take"
        >
          <template v-slot:icon>
            <img alt="" src="@/assets/images/iconsstars.svg" />
          </template>
          Получить займ</catos-button
        >
      </div>
    </div>
  </div>
  <creditor-info
    v-if="isCreditorInfo"
    @close="() => (isCreditorInfo = false)"
  ></creditor-info>
  <action-desktop 
    v-if="isAction && !actionStatus" 
    @close="isAction = false" 
    :status="actionStatus"
    header="Заявка на займ"
    title="Создание заявки на займ"
    subtitle="Пожалуйста, подождите пока завершится процесс создания заявки на займ"
    ></action-desktop>
    <action-desktop v-else-if="isAction && actionStatus === 'success'" 
    @close="isAction = false" 
    :status="actionStatus"
    header="Заявка на займ"
     title="Заявка успешно принята"
     subtitle="Ваша заявка на займ успешно принята, ожидайде подтверждения"
    ></action-desktop>
    <action-desktop 
    v-else-if="isAction && actionStatus === 'fail'" 
    @close="isAction = false" 
    header="Заявка на займ"
    title="Произошла ошибка при создании заявки на займ"
    :status="actionStatus"></action-desktop>
</template>
<script setup lang="ts">
import { ref, computed, PropType } from "vue";
// @ts-ignore
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import creditorInfo from "@/components/base/desktop/creditor-info.vue";
import rangeSlider from "@/components/ui-kit/range-slider.vue";
import useParsedNumber from "@/compossables/useParsedNumber";
import actionDesktop from "@/components/base/modals/action-desktop.vue";
import { createLoanRequest } from "@/api/loanRequests.api";
import { Pool } from "@/types/pool.type";
import {useComputedPoolInfo} from "@/composables/infoCalculation/useComputedPoolInfo"

const {pool} = defineProps({
  pool: {
    type: Object as PropType<Pool>
  } 
}) 

const {
  interestRate, monthInterestRateString, 
  maxDuration, freePeriod, interestRateString,
  freePeriodString } = useComputedPoolInfo(pool)

const emits = defineEmits(["close"]);
const isCreditorInfo = ref(false);
const sumLoans = ref(1);
const term = ref(1);

const isAction = ref(false)
const actionStatus = ref('')

const parsedTrim = computed(() => {
  const { parsed } = useParsedNumber(sumLoans.value);
  return parsed.replaceAll(' ', '')
})

const sum = computed(() => {
  console.log('sumLoans.value', sumLoans.value)
  let amountWithoutInterestRatePeriod = 0

  if(Number(term.value) - freePeriod.value <= 0 && freePeriod.value !== 0) {
    amountWithoutInterestRatePeriod = sumWithFreePeriod.value
    return amountWithoutInterestRatePeriod
  }

  const withInterestRatePeriod = Number(term.value) - freePeriod.value
  const sumWithInterestRate = Number(sumLoans.value) + interestRate.value * withInterestRatePeriod;
  return sumWithInterestRate
});

const sumWithFreePeriod = computed(() => Number(sumLoans.value))

const take = async () => {
  isAction.value = true
  await createLoanRequest({
    pool_id: pool?.id ? pool?.id : 0,
    amount: Number(sum.value),
    duration: Number(term.value)
  }).then(res => {
    actionStatus.value = 'success'
  }).catch(e => {
    actionStatus.value = 'fail'
        console.error(e)
  })
};

const close = () => {
  emits("close");
};
</script>
<style scoped>
.div {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.div1 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
  color: #2c56c0;
  text-decoration: underline;
}
.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.group {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
  cursor: pointer;
}
.parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.frame-child {
  align-self: stretch;
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  height: 0.06em;
}
.div2 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.wrapper {
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
}
.div3 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
  text-align: right;
}
.frame-div {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.container {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent1 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}
.frame-container {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
}
.span {
  font-weight: 300;
}
.span1 {
  color: #2e3a59;
}
.tag {
  border-radius: 16px;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.38em 0em;
  box-sizing: border-box;
  align-items: center;
}
.ton {
  position: relative;
  font-size: 1em;
  letter-spacing: 0.02em;
  line-height: 130%;
}
.tag1 {
  border-radius: 16px;
  background-color: #f6f4fc;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  width: 9.94em;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.38em 1.5em;
  align-items: center;
  justify-content: center;
  color: #2e3a59;
}
.tag-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1em;
}
.scroll-thumb-icon {
  position: relative;
  width: 18.78em;
  height: 2.38em;
}
.frame-parent2 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.parent1 {
  width: 18.75em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.88em;
}
.fields {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

span {
  font-weight: 300;
  color: rgba(46, 58, 89, 0.4);
}
.span6 {
  letter-spacing: 0.02em;
}
.span7 {
  letter-spacing: 0.03em;
}
.div11 {
  position: relative;
  font-size: 1em;
  line-height: 130%;
}
.tag4 {
  border-radius: 16px;
  background-color: #f6f4fc;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  width: 9.94em;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.38em 1.5em;
  align-items: center;
  justify-content: center;
  color: #3b3b3b;
}
.tag-group {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1em;
}
.frame-parent3 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
  color: #2e3a59;
}
.fields-parent {
  border-radius: 14px;
  border: 1px solid rgba(165, 146, 221, 0.14);
  display: flex;
  flex-direction: row;
  padding: 1.5em 1.31em 2.3em 1.31em;
  align-items: center;
  justify-content: center;
  gap: 2em;
}
.frame {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0em 1.13em;
  align-items: flex-start;
  justify-content: flex-start;
  color: #8181a5;
}
.div14 {
  position: relative;
  font-size: 1em;
  line-height: 130%;
  font-weight: 300;
}
.ton1 {
  position: relative;
  font-size: 1em;
  line-height: 130%;
  font-weight: 600;
}
.header {
  align-self: stretch;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  padding: 0em 7.25em 0em 1.13em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.25em;
}
.parent3 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0em 0em 0em 1.13em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.frame-parent5 {
  align-self: stretch;
  border-radius: 8px;
  background: linear-gradient(
      rgba(165, 146, 221, 0.2),
      rgba(165, 146, 221, 0.2)
    ),
    #fff;
  display: flex;
  flex-direction: column;
  padding: 0.5em 0em 0.63em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.25em;
}
.div17 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.info-1 {
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid rgba(165, 146, 221, 0.1);
  box-sizing: border-box;
  height: 4.44em;
  display: flex;
  flex-direction: row;
  padding: 1.25em 1.13em;
  align-items: flex-start;
  justify-content: flex-start;
}
.alert-triangle-icon {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
}
.div18 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
  display: inline-block;
  width: 17.57em;
  flex-shrink: 0;
}
.div19 {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.frame-parent6 {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.info-2-inner {
  align-self: stretch;
  border-radius: 11px;
  background-color: #f9f0e1;
  display: flex;
  flex-direction: row;
  padding: 1.25em;
  align-items: flex-start;
  justify-content: flex-start;
}
.info-2 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: -0.75em;
}
.info-1-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent4 {
  align-self: stretch;
  border-radius: 14px;
  background-color: #f8f6fc;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1.25em 1.31em;
  align-items: center;
  justify-content: flex-start;
  gap: 1.13em;
}
.frame-inner {
  position: absolute;
  margin: 0 !important;
  top: 0em;
  left: 0em;
  width: 1.22em;
  height: 1.13em;
  z-index: 0;
}
.group-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
}
.text {
  position: relative;
  font-size: 1em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.frame-parent7 {
  width: 5.25em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25em;
}
.text-and-button {
  align-self: stretch;
  border-radius: 27px;
  background-color: #9747ff;
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.des-and-bbn {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f9fbff;
  display: flex;
  flex-direction: column;
  padding: 0.75em;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
  color: #f8f8ff;
}
.frame-group {
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  width: 44.63em;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
}
.frame-parent {
  position: relative;
  width: 100%;

  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
@media (max-height: 900px) {
  .frame-parent {
    height: 30em;
    overflow-y: auto;
  }
}
</style>
