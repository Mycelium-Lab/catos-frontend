<template>
  <liquidity-managment-modal @close="close">
    <template v-slot:header> Пул #{{ poolId }} </template>
    <template v-slot:subheaderIcon>
      <img class="header-icon" alt="" src="@/assets/images/change-cash.svg" />
    </template>
    <template v-slot:subheader>
      {{ role === "investor" ? "Вывести депозит" : "Изъять ликвидность" }} из
      пула #{{ poolId }}
    </template>
    <template v-slot:first-row>
      <div class="field">
        <div class="roi">Доступно для изъятия:</div>
        <!--<div class="div9">
          {{ input ? Number(input).toFixed(3) : "0.000" }} TON
        </div>-->
        <div class="div9">
          {{ availableLiquidity ? availableLiquidity : 0 }} TON
        </div>
      </div>

      <div v-if="role === 'investor'" class="field">
        <div class="roi">Тело депозита</div>
        <div class="div9">
          <span>{{ deposit }} TON</span>
        </div>
      </div>

      <div v-if="role === 'investor'" class="field">
        <div class="roi">Прибыль</div>
        <div class="div9">
          <span>{{ profit }} TON</span>
        </div>
      </div>

      <div v-if="role === 'investor' || role === 'creditor'" class="field">
        <div class="roi">
          Сервисный сбор CATOS:
          {{
            platformSettingsStore.platformSettings
              .liquidWithdrawFeeMillipercent / 100
          }}%
        </div>
        <div class="div9">
          <span>{{ comis }} TON</span>
        </div>
      </div>
      <div v-if="role === 'investor' || role === 'creditor'" class="field">
        <div class="roi">
          Будет выведено на кошелек:
        </div>
        <div class="div9">
          <span>{{ (Number(amount) - comis).toFixed(6) }} TON</span>
        </div>
      </div>
    </template>
    <template v-slot:form>
      <div class="text-and-button_action text-and-button">
        <div class="fieldsinput-parent">
          <div class="fieldsinput">
            <div class="div16">Введите сумму для вывода:</div>
            <input-data
              :min="minWithdrawAmount"
              :max="maxWithdrawAmount"
              :style="{ width: '456px' }"
              placeholder="10 000 TON"
              v-model="amount"
              type="number"
            ></input-data>
          </div>
          <div class="min-10-ton-parent">
            <div class="min-10-ton-container">
              <span>Min: </span>
              <span class="span8"> </span>
              <span class="ton1">{{ minWithdrawAmount + " TON" }}</span>
            </div>
            <div v-if="amountOutOfRange" class="min-10-ton-container">
              <span class="warn-text">{{
                "Сумма должна быть больше " +
                minWithdrawAmount +
                " TON и меньше " +
                maxWithdrawAmount +
                " TON"
              }}</span>
            </div>
            <div class="min-10-ton-container">
              <span>Max: </span>
              <span class="span8"> </span>
              <span class="ton1">{{ maxWithdrawAmount }} TON</span>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:action>
      <div class="des-and-bbn_withdraw des-and-bbn">
        <!--  <catos-button
          variant="fourth"
          :style="{ width: '100%', margin: '0' }"
          @click="qr"
          >Вывести на кошелек CATOS</catos-button
        >
      -->

        <catos-button
          variant="fourth"
          :style="{ width: '100%', margin: '0' }"
          @click="handleWithdraw"
          >Вывести на кошелек TONKeeper</catos-button
        >

        <catos-button
          variant="fourth_outline"
          :style="{ width: '100%', margin: '0' }"
          @click="close"
          >Отмена</catos-button
        >
      </div>
    </template>
  </liquidity-managment-modal>
  <transaction-desktop
    v-if="isTransaction"
    @close="isTransaction = false"
    :uid="uid"
    :titlePending="
      role === 'investor'
        ? 'Подтвердите вывод депозита из пула'
        : 'Подтвердите изъятие ликвидности из пула'
    "
    :subtitlePending="
      role === 'investor'
        ? 'Пожалуйста, подтвердите вывод депозита из пула в своем кошельке'
        : 'Пожалуйста, изъятие ликвидности из пула в своем кошельке'
    "
    :subtitleSuccess="
      role == 'investor'
        ? 'Вы успешно вывели депозит из пула'
        : 'Вы успешно изъяли ликвидность из пула'
    "
    titleFaild="transactionStatus"
    :title="
      role === 'investor'
        ? 'Произошла ошибка при выводе депозита из пула'
        : 'Произошла ошибка при изъятии ликвидности из пула'
    "
  >
  </transaction-desktop>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import liquidityManagmentModal from "@/components/base/liquidity-managment-modal.vue";
import inputData from "@/components/fields/input-data.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import { roleStorage } from "@/utils/localStorage";
import transactionDesktop from "@/components/base/modals/transaction-desktop.vue";
import { withdrawFromPool } from "@/api/pools.api";
import { usePlatformSettingsStore } from "@/stores/platformSettings";
import { NANO_MULTIPLIER } from "@/utils/constants";

const { poolId, availableLiquidity } = defineProps({
  poolId: { type: Number, required: true },
  availableLiquidity: { type: Number, required: true },
});
const platformSettingsStore = usePlatformSettingsStore();
const amount = ref("");
const minWithdrawAmount = ref(1); // TON
const maxWithdrawAmount = ref(availableLiquidity); // TON
const amountOutOfRange = computed(() => {
  if (amount.value != "") {
    return (
      Number(amount.value) < minWithdrawAmount.value ||
      Number(amount.value) > maxWithdrawAmount.value
    );
  }
  return false;
});
const isTransaction = ref(false);
const uid = ref();

const role = computed(() => {
  return roleStorage.get();
});

const emits = defineEmits(["close"]);

const close = () => {
  emits("close");
};

const handleWithdraw = async () => {
  await withdrawFromPool({
    pool_id: poolId,
    amount: Number(amount.value) * NANO_MULTIPLIER,
  })
    .then(res => {
      isTransaction.value = true;
      uid.value = res.data;
    })
    .catch(e => {});
};

const input = ref("");
const deposit = computed(() => Number(Number(input.value) * 0.8).toFixed(3));
const profit = computed(() => Number(Number(input.value) * 0.2).toFixed(3));
const comis = computed(
  () =>
    (Number(amount.value) *
      platformSettingsStore.platformSettings.liquidWithdrawFeeMillipercent) /
    10000
);
</script>

<style scoped lang="scss">
.header-icon {
  position: relative;
  width: 48px;
  height: 48px;
  overflow: hidden;
  flex-shrink: 0;
}
.field {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.63em;
}
.roi {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.div9 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.fieldsinput-parent {
  border-radius: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  gap: 0.63em;
  background: #f9fbff;
  height: 110px;
  &_add {
    height: 194px;
  }
}
.fieldsinput {
  align-self: stretch;
  display: flex;
  flex-direction: column;
}
.fieldsinput {
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
  width: 100%;
  z-index: 0;
  margin-top: 1em;
}

.div16 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
}

.min-10-ton-parent {
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 1;
  text-align: center;
  width: 96%;
}
.min-10-ton-container {
  position: relative;
  font-size: 0.63em;
  line-height: 1em;
  font-weight: 300;
}
.span8 {
  color: rgba(165, 146, 221, 0.7);
}
.ton1 {
  color: #3b3b3b;
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

  &_withdraw {
    flex-direction: column;
  }
}
.text-and-button_action {
  width: 30em;
}
.warn-text {
  color: coral;
}
</style>
