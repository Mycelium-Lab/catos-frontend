<template>
  <div class="modal-wrapper">
    <div class="parent">
      <div class="div">
        <div class="header-pop-up">
          <div class="page-title-parent">
            <div class="page-title">Новый пулл</div>
            <img
              class="close-icon-action close-icon"
              alt=""
              src="@/assets/desktop/close.svg"
              @click="close"
            />
          </div>
          <div class="header-pop-up-child" />
        </div>
        <div class="fieldsinputchoise-parent">
          <!-- <div class="fieldsinputchoise">
            <div class="div1">Настройте токен:</div>
            <catos-select
              placeholder="TON"
              :options="options"
              :value="valueToken"
              @selected="ev => (valueToken = ev)"
              :optionWidthDesk="210"
            ></catos-select>
          </div> -->
          <div class="frame-wrapper">
            <div class="instance-parent">
                <div>
                  <div class="frame-parent">
                  <div class="group">
                    <div class="div2">Дневная ставка</div>
                    <!-- <img
                      class="vector-icon"
                      alt=""
                      src="@/assets/desktop/fallback/vector.svg"
                    />-->
                  </div>
                  <range-slider
                    :max="30"
                    v-model="percent"
                    rangeWidth="100%"
                    inputLabel="percent"
                  ></range-slider>
                </div>
                <div class="frame-parent" :style="{ marginTop: '50px' }">
                  <div class="group">
                    <div class="div2">Беспроцентный период</div>
                  </div>
                  <range-slider
                    :max="30"
                    v-model="freePeriod"
                    rangeWidth="100%"
                    inputLabel="invest"
                  ></range-slider>
                </div>
              </div>
              <div>
                <div class="frame-parent">
                <div class="group">
                  <div class="div2">Срок</div>
                </div>
                <range-slider
                  :max="30"
                  v-model="duration"
                  rangeWidth="100%"
                  inputLabel="invest"
                ></range-slider>
              </div>
              <div class="frame-parent"  :style="{ marginTop: '50px' }" >
                <div class="group">
                  <div class="div2">Минимальный размер инвестиции (TON)</div>
                </div>
                <range-slider
                  :max="30"
                  v-model="minInvestAmount"
                  rangeWidth="100%"
                  inputLabel="invest"
                ></range-slider>
              </div>
              </div>
            </div>
          </div>
          <div class="buttonnext-parent">
            <button class="buttonnext" @click="create">
              <div class="group-parent">
                <img
                  class="frame-child"
                  alt=""
                  src="@/assets/images/iconsstars.svg"
                />
                <b class="b">Создать пулл</b>
              </div>
            </button>
            <button class="buttonnext1" @click="close">
              <div class="wrapper">
                <div class="div8">Отмена</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <transaction-desktop 
    v-if="isTransaction" 
    :uid="uid"
    @close="isTransaction = false" 
    titlePending="Подтвердите создание пулла"
    subtitlePending="Пожалуйста, подтвердите создание пулла в своем кошельке"
    subtitleSuccess="Вы успешно создали пулл"
    titleFaild="Произошла ошибка при создании пулла"
    ></transaction-desktop>

    <status-modal-desktop
      v-if="isFail"
      @result="() => (isFail = false)"
      @close="() => (isFail = false)"
    >
      <template v-slot:header> Создание пулла </template>
      <template v-slot:title> Произошла ошибка при создании пулла </template>
      <template v-slot:subtitle> 
        <p class="status-subtitle"><span :style="{display: 'flex', justifyContent: 'center'}">Указание причины:</span><span :style="{display: 'flex', justifyContent: 'center'}">{{  i18n.global.t(`errors.401`)}}</span></p>
      </template>
      <template v-slot:image>
        <img src="@/assets/images/fail-transaction.svg" />
      </template>
      <template v-slot:action> Ок </template>
    </status-modal-desktop>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
// import catosSelect from "@/components/fields/catos-select.vue";
import rangeSlider from "@/components/ui-kit/range-slider.vue";
import transactionDesktop from "@/components/base/modals/transaction-desktop.vue";
import statusModalDesktop from "@/components/base/status-modal-desktop.vue";
import { createPool } from "@/api/pools.api";
import { authStorage, profileStorage } from "@/utils/localStorage";
import { useLoginApi } from "@/composables/useLoginApi";
import { i18n } from "@/i18n";
import { NANO_MULTIPLIER } from "@/utils/constants";

const isTransaction = ref(false)

const emtis = defineEmits(["close", "create"]);
// const valueToken = ref("");
// const options = ["TON", "CATOS"];
const percent = ref(0);
const freePeriod = ref(0);
const duration = ref(0);
const minInvestAmount = ref(0)
const uid = ref()
const isFail = ref(false)

const close = () => {
  emtis("close");
};
const toSeconds = (days: number) => days * 24 * 60 * 60;
const create = async () => {

  const token = authStorage.get()?.access

    if(token) {
      await useLoginApi().handleVerify(token)

      const hasVerified = profileStorage.get()?.hasVerified

      if(hasVerified) {
      await createPool({
      millipercent: percent.value * 100,
      overdue_millipercent: percent.value * 100, // TODO: добавить поля для ввода остальных данных
      max_loan_amount: 1000 * NANO_MULTIPLIER,
      min_invest_amount: minInvestAmount.value * NANO_MULTIPLIER,
      max_duration: toSeconds(duration.value),
      free_period: toSeconds(freePeriod.value),
    }).then(res => {
      isTransaction.value = true
      uid.value = res.data
    // transactionStatus.value = 'success'
    }).catch(e => {
      //transactionStatus.value = 'fail'
    // console.error(e)
    })
  }
  else{
    isFail.value = true
  }
  }
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
.div1 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.text {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.iconchange {
  position: relative;
  width: 1.5em;
  height: 1.5em;
}
.text-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.fields-password-and-mail {
  align-self: stretch;
  border-radius: 16px;
  border: 0.5px solid #2e3a59;
  box-sizing: border-box;
  height: 2.5em;
  display: flex;
  flex-direction: column;
  padding: 0.5em 0.75em;
  align-items: flex-start;
  justify-content: center;
  color: rgba(46, 58, 89, 0.36);
}
.fieldsinputchoise {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.div2 {
  flex: 1;
  position: relative;
  font-size: 1em;
}
.vector-icon {
  position: relative;
  width: 1em;
  height: 1em;
}
.group {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.94em;
}
.span1 {
  font-weight: 300;
}
.span {
  letter-spacing: 0.02em;
}
.span4 {
  font-weight: 300;
  font-family: Inter;
  color: rgba(46, 58, 89, 0.4);
}
.span3 {
  letter-spacing: 0.03em;
}
.div3 {
  position: relative;
  font-size: 1em;
  line-height: 130%;
}
.tag {
  flex: 1;
  border-radius: 16px;
  background-color: #f6f4fc;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.38em 1.5em;
  align-items: center;
  justify-content: center;
}
.span6 {
  color: #2e3a59;
}
.div4 {
  position: relative;
  font-size: 1em;
  letter-spacing: 0.01em;
  line-height: 130%;
}
.tag-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.scroll-thumb-icon {
  position: relative;
  width: 21.38em;
  height: 2.38em;
}
.frame-group {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
  color: rgba(46, 58, 89, 0.4);
}
.frame-parent {
  width: 13.25em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.88em;
}
.instance-parent {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.frame-wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-child {
  position: relative;
  width: 1.5em;
  height: 1.39em;
}
.b {
  position: relative;
  font-size: 1em;
  letter-spacing: 1px;
  line-height: 1.75em;
}
.group-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.19em;
}
.buttonnext {
  border-radius: 20px;
  background: linear-gradient(89.81deg, #9747ff, #ad6fff);
  border: 0.5px solid #fdd674;
  box-sizing: border-box;
  width: 21.38em;
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0.38em 0.5em 0em;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
  color: #fff;
  &:hover {
    background: linear-gradient(73deg, #7811fe 0%, #ad6fff 100%), #445331;
  }
}
.div8 {
  position: relative;
  font-size: 1em;
  letter-spacing: 1px;
  line-height: 1.75em;
  font-weight: 500;
}
.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.buttonnext1 {
  border-radius: 20px;
  background-color: #fff;
  width: 21.38em;
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0.38em 0.5em 0em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #1f1f1f;
  border: none;
  font-size: 1rem;
  cursor: pointer;
}
.buttonnext-parent {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
  text-align: center;
  color: #fff;
  margin-top: 1.5em;
}
.fieldsinputchoise-parent {
  align-self: stretch;
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
}
.div {
  position: absolute;
  top: calc(50% - 185px);
  left: calc(50% - 372px);
  border-radius: 15px;
  border: 1px solid #f6f4fc;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.parent {
  position: relative;
  width: 100%;
  height: 23.13em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
