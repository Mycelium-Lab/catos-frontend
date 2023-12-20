<template>
  <desktop-modal v-if="isStatus" @close="close">
    <template v-slot:title>Информация о займе #{{ loan?.id }}</template>
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
                        v-if="isOverdue"
                        class="colors-graphsorders-icon"
                        alt=""
                        src="@/assets/images/colors-graphsorders3.svg"
                      />
                      <img
                        v-else-if="loan?.status === 'paid'"
                        class="colors-graphsorders-icon"
                        alt=""
                        src="@/assets/images/colors-graphsorders1.svg"
                      />
                      <img
                        v-else
                        class="colors-graphsorders-icon"
                        alt=""
                        src="@/assets/images/colors-graphsorders2.svg"
                      />
                      <div class="div">
                        {{ isOverdue ? i18n.global.t(`loans-status.overdue`) : i18n.global.t(`loans-status.${loan?.status}`)}}
                      </div>
                    </div>
                    <img
                      class="iconchange"
                      alt=""
                      src="@/assets/images/iconchange.svg"
                    />
                  </div>
                  <div v-if="loan?.status === 'for_sale'" class="container">
                    <div class="div">Снять с продажи</div>
                  </div>
                </div>
              </div>
              <div class="frame-wrapper1">
                <div class="frame-wrapper2">
                  <div class="parent">
                    <div class="div3">Изменить статус для займа:</div>
                    <div class="frame-parent2">
                      <div class="statusapplication-wrapper">
                        <div class="statusapplication">
                          <img
                            class="colors-graphsorders-icon"
                            alt=""
                            src="@/assets/images/colors-graphsorders1.svg"
                          />
                          <div class="div4">Снять с продажи</div>
                        </div>
                      </div>
                      <catos-button
                        variant="trash"
                        :style="{ width: '215px', margin: '0' }"
                        >Переместить в корзину
                        <template v-slot:icon>
                          <img src="@/assets/images/trash.svg" />
                        </template>
                      </catos-button>
                    </div>
                    <div class="div6">Перейти в историю удалений</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-wrapper4">
            <div class="frame-parent3">
              <div class="frame-wrapper5">
                <div class="component-parent">
                  <div class="component">
                    <div class="field">
                      <div class="div7">Дата смены статуса:</div>
                      <div class="div4"></div>
                    </div>
                    <div class="col-titles-bg" />
                  </div>
                  <div class="component">
                    <div class="field">
                      <div class="div7">Дата получения займа:</div>
                      <div class="div4">{{ startTerm }}</div>
                    </div>
                    <div class="col-titles-bg" />
                  </div>
                  <div class="component">
                    <div class="field">
                      <div class="div7">Ставка:</div>
                      <div class="div4">{{interestRate }}% в день</div>
                    </div>
                    <div class="col-titles-bg" />
                  </div>
                  <div class="component">
                    <div class="field">
                      <div class="div7">Срок:</div>
                      <div class="div4">на {{ duration }} дней</div>
                    </div>
                    <div class="col-titles-bg" />
                  </div>
                  <div class="component">
                    <div class="field">
                      <div class="div7">Займ:</div>
                      <div class="div4">{{ loan?.amount ? loan?.amount / NANO_MULTIPLIER : 0 }} TON</div>
                    </div>
                    <div class="col-titles-bg" />
                  </div>
                  <!--<div class="component">
                    <div class="field">
                      <div class="div7">Сумма к возвращению:</div>
                      <div class="div4"> TON</div>
                    </div>
                    <div class="col-titles-bg" />
                  </div>-->
                  <div class="component">
                    <div class="field">
                      <div class="div7">Анкета заявителя:</div>
                      <a
                        class="div20_link div20"
                        @click="
                          () => {
                            isStatus = false;
                            isBlank = true;
                          }
                        "
                        >Открыть</a
                      >
                    </div>
                    <div class="col-titles-bg" />
                  </div>
                  <div class="component">
                    <div class="field">
                      <div class="div7">Заявитель:</div>
                      <div class="div20">{{ loan?.borrower.name }} {{ loan?.borrower.surname }}</div>
                    </div>
                    <div class="col-titles-bg" />
                  </div>
                </div>
              </div>
              <div class="notification">
                <!--<img
                  class="alert-triangle-icon"
                  alt=""
                  src="/alerttriangle.svg"
                />-->
                <div class="div">
                  <p class="p">
                    <span>
                      <span class="span">Беспроцентный период: </span>
                      <span>до {{ freePeriod }} дней</span>
                    </span>
                  </p>
                  <p :class="freePeriodStatus === 'длится' ? 'p1_active p1' : 'p1'">
                  <span>
                    <span>{{ `(${freePeriodStatus})` }}</span>
                  </span>
                </p>
                </div>
              </div>
            </div>
          </div>
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
  <desktop-modal
    v-if="isBlank"
    @close="close"
    variant="back"
    :toBack="
      () => {
        isBlank = false;
        isStatus = true;
      }
    "
  >
    <template v-slot:title> Анкета заявителя: </template>
    <template v-slot:body>
      <div
        :style="{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }"
      >
        <img width="86" src="@/assets/images/iconsloadpdf.svg" />
        <div class="group-action">
          <catos-button
            variant="fourth"
            :style="{ width: '165px', margin: '0' }"
            >Открыть анкету</catos-button
          >
          <catos-button
            variant="fourth"
            :style="{ width: '165px', margin: '0' }"
            >Скачать анкету</catos-button
          >
        </div>
      </div>
    </template>
  </desktop-modal>
</template>
<script setup lang="ts">
import { ref, PropType, onMounted } from "vue";
import desktopModal from "@/components/base/desktop-modal.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import { LoansResponse } from "@/types/loan.types";
import { useComputedLoanInfo } from "@/composables/infoCalculation/useComputedLoanInfo";
import { useComputedPoolInfo } from "@/composables/infoCalculation/useComputedPoolInfo";
import { usePoolListStore } from "@/stores/poolList";
import { i18n } from "@/i18n";
import { NANO_MULTIPLIER } from "@/utils/constants";

onMounted(async() => {
  const poolListStore = usePoolListStore()
  pool.value = await poolListStore.poolItem(loan?.pool_id ? loan?.pool_id : 0)
  if(pool.value) {
    const {freePeriod: fp} = useComputedPoolInfo(pool.value)
    const {freePeriodStatus: fps} = useComputedLoanInfo(loan, fp.value)
    freePeriod.value = fp.value
    freePeriodStatus.value = fps.value
  }
})

const { loan } = defineProps({
  loan: {
    type: Object as PropType<LoansResponse>,
  },
});

const isStatus = ref(true);
const isBlank = ref(false);
const pool = ref()
const freePeriod = ref()
const freePeriodStatus = ref()

const {isOverdue, interestRate, duration, startTerm} = useComputedLoanInfo(loan)
const emtis = defineEmits(["close"]);
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
  left: 0.4em
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
.div3 {
  position: relative;
  font-size: 0.88em;
  line-height: 150%;
  font-weight: 300;
}
.div4 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.statusapplication {
  align-self: stretch;
  border-radius: 8px;
  border: 0.5px solid rgba(46, 58, 89, 0.4);
  box-sizing: border-box;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  align-items: center;
  justify-content: center;
  gap: 0.63em;
}
.statusapplication-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.trash-2-icon {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
}
.div5 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.trash-2-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}

.frame-parent2 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 0.63em;
  color: #3b3b3b;
}
.div6 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
  color: rgba(87, 126, 247, 0.96);
}
.parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.frame-wrapper2 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.frame-wrapper1 {
  align-self: stretch;
  border-radius: 15px;
  background-color: #fff;
  border: 1px solid #f2f2f6;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  align-items: center;
  justify-content: flex-start;
  color: #2e3a59;
}
.frame-container {
  align-self: stretch;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1em;
}
.frame-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.div7 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
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
.div20 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 130%;
  color: #5d83f7;
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
.frame-wrapper5 {
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
.span {
  font-weight: 300;
  font-family: Inter;
}
.p {
  margin: 0;
}
.p1 {
  margin: 0;
  color: #ff9901;
  &_active{
    color: #469f25;
  }
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
.frame-parent3 {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
}
.frame-wrapper4 {
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
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
  text-align: right;
  color: #555562;
}
.frame-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
  width: 480px;
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
.group-action {
  display: flex;
  gap: 10px;
}

@media (max-height: 900px) {
  .frame-parent {
    height: 500px;
    overflow-y: auto;
  }
}
</style>
