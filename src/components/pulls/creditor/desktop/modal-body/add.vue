<template>
  <liquidity-managment-modal @close="close">
    <template v-slot:header> Пулл #12345 </template>
    <template v-slot:subheaderIcon>
      <img class="header-icon" alt="" src="@/assets/images/success-cash.svg" />
    </template>
    <template v-slot:subheader> Добавление ликвидности в пулл #12345 </template>
    <template v-slot:first-row>
      <div class="field">
        <div class="roi">Баланс кошелька:</div>
        <div class="div9">257 324 TON</div>
      </div>
    </template>
    <template v-slot:form>
      <div class="text-and-button_action text-and-button">
        <div class="fieldsinput-parent_add fieldsinput-parent">
          <label class="label">Настроить токен:</label>
          <div :style="{ margin: '0 auto', width: '456px' }">
            <catos-select
              placeholder="TON"
              :options="options"
              :value="valueToken"
              :optionWidthDesk="456"
              @selected="(ev:any) => (valueToken = ev)"
            ></catos-select>
          </div>
          <div class="fieldsinput">
            <div class="div16">Введите сумму для пополнения:</div>
            <input-data
              :style="{ width: '456px' }"
              placeholder="10 000 TON"
            ></input-data>
          </div>
          <div class="min-10-ton-parent">
            <div class="min-10-ton-container">
              <span>Min: </span>
              <span class="span8"> </span>
              <span class="ton1">10 TON</span>
            </div>
            <div class="min-10-ton-container">
              <span>Max: </span>
              <span class="span8"> </span>
              <span class="ton1">257 324 TON</span>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:action>
      <div class="des-and-bbn_add des-and-bbn">
        <catos-button
          variant="fourth"
          @click="qr"
          :style="{ width: '100%', margin: '0' }"
          >Добавить</catos-button
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
</template>

<script setup lang="ts">
import { ref } from "vue";
import liquidityManagmentModal from "@/components/base/liquidity-managment-modal.vue";
import inputData from "@/components/fields/input-data.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import catosSelect from "@/components/fields/catos-select.vue";
const valueToken = ref("");
const options = ["TON", "CATOS"];
const emits = defineEmits(["close", "qr"]);
const qr = () => {
  emits("qr");
};
const close = () => {
  emits("close");
};
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
}
.text-and-button_action {
  width: 30em;
}
.label {
  font-size: 13px;
  margin-left: 1.5em;
}
</style>
