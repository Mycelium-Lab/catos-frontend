<template>
  <confirm-qr-destop @close="close" @result="repay" :disabled="isDisabled">
    <template v-slot:header> Займ из пулла  #{{ id }} </template>
    <template v-slot:title>Погасить займ</template>
    <template v-slot:subtitle>
      <input-data
              :style="{ margin: '20px 0px' }"
              placeholder="10 000 TON"
              v-model="amount"
              type="number"
      ></input-data>
      <div class="frame-parent-repay">
        <div class="frame-group-repay">
          <div class="frame-wrapper-repay">
            <div class="frame-container-repay">
              <div class="container-repay">
                <div class="div1-repay">Cумма к погашению:</div>
              </div>
              <div class="ton-wrapper-repay">
                <div class="ton1-repay">{{ remainAmount ? remainAmount / NANO_MULTIPLIER : ''}} TON</div>
              </div>
            </div>
          </div>
          <div class="frame-wrapper-repay">
            <div class="frame-parent1-repay">
              <div class="frame-repay">
                <div class="div1-repay">Итого:</div>
              </div>
              <div class="ton-container-repay">
                <div class="ton1-repay">
                  <b>{{ amount }} TON</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    
    <template v-slot:action>Погасить займ </template>
    <template v-slot:footer>
      <p class="policy-text">
        By proceeding, you accept the <br />
        and Privacy Policy.
      </p>
    </template>
  </confirm-qr-destop>
    <transaction-desktop v-if="isTransaction" 
      @close="isTransaction = false" 
      :uid="uid"
      titlePending="Подтвердите погашение займа"
      subtitlePending="Пожалуйста, подтвердите погашение займ в своем кошельке"
      subtitleSuccess="Вы успешно погасили займ"
      titleFaild="Произошла ошибка при погашении займа"
      ></transaction-desktop>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import ConfirmQrDestop from "@/components/base/confirm-qr-destop.vue";
import useParsedNumber from "@/compossables/useParsedNumber";
import transactionDesktop from "@/components/base/modals/transaction-desktop.vue";
import inputData from "@/components/fields/input-data.vue";
import { repayLoan } from "@/api/loans.api";
import { NANO_MULTIPLIER } from "@/utils/constants";
import { useRetrieveLoanApi } from "@/composables/useRetrieveLoanApi";

const {id} = defineProps({
  id: {type: Number, required: true}
})
const remainAmount = ref<number>();
onMounted(() => {
  useRetrieveLoanApi(id)
    .then(res => {
      remainAmount.value = res.remain.value;
    })
});

const emits = defineEmits(["close"]);
const close = () => {
  emits("close");
};

const isTransaction = ref(false)

const amount = ref("");
const uid = ref()

const isDisabled = computed(() => {
  return Number(amount.value) <= 0 || '' ? true : false
})

/*const toRepay = computed(() => {
  const calculated = Number(1.05 * Number(amount.value)).toFixed(3);
  return calculated;
});*/

const repay = async () => {
  await repayLoan(id, Number(amount.value) * NANO_MULTIPLIER)
  .then(res => {
    isTransaction.value = true
    uid.value = res.data
  }).catch(e => {

  })
}
</script>

<style scoped lang="scss">
.frame-parent-repay {
  position: relative;
  border-radius: 16px;
  background-color: #f6f4fc;
  width: 340px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.63em 0.75em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: center;
  gap: 0.63em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
.div-repay {
  position: relative;
  font-size: 14px;
  line-height: 130%;
  font-weight: 500;
}
.wrapper-repay {
  border-radius: 8.79px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 8px;
  align-items: center;
  justify-content: flex-start;
  border: 0.3px solid #656060;
}
.frame-group-repay {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.frame-wrapper-repay {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.frame-container-repay {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.81em;
}
.container-repay {
  flex: 1;
  display: flex;
  flex-direction: row;
  //padding: 0.13em 0em 0.13em 0.38em;
  align-items: flex-start;
  justify-content: flex-start;
}
.div1-repay {
  position: relative;
  font-size: 14px;
  line-height: 130%;
  font-weight: 300;
}
.ton-repay {
  position: relative;
  font-size: 14px;
  line-height: 130%;
  font-weight: 300;
  display: flex;
  align-items: center;
  width: 10.83em;
  flex-shrink: 0;
}
.frame-child-repay {
  position: relative;
  border-top: 1px solid #050506;
  box-sizing: border-box;
  width: 100%;
  height: 0.06em;
}
.frame-parent1-repay {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 0.81em;
}
.ton-container-repay {
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  text-align: right;
}
.ton1-repay {
  flex: 1;
  position: relative;
  font-size: 14px;
  line-height: 130%;
  font-weight: 300;
  color: #3b3b3b;
}
.policy-text {
  margin-top: 1em;
}
</style>
