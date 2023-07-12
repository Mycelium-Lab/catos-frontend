<template>
  <liquidity-managment-modal @close="close">
    <template v-slot:header> Пулл #12345 </template>
    <template v-slot:subheaderIcon>
      <img class="header-icon" alt="" src="@/assets/images/change-cash.svg" />
    </template>
    <template v-slot:subheader> Изъятие ликвидности из пулла #12345 </template>
    <template v-slot:first-row>
      <div class="field">
        <div class="roi">Доступно для изьятия:</div>
        <div class="div9">257 324 TON</div>
      </div>
    </template>
    <template v-slot:form>
      <div class="text-and-button_action text-and-button">
        <div class="fieldsinput-parent">
          <div class="fieldsinput">
            <div class="div16">Введите сумму для вывода:</div>
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
      <div class="des-and-bbn_withdraw des-and-bbn">
        <catos-button
          variant="fourth"
          :style="{ width: '100%', margin: '0' }"
          @click="qr"
          >Вывести на кошелек CATOS</catos-button
        >

        <catos-button
          variant="fourth"
          :style="{ width: '100%', margin: '0' }"
          @click="qr"
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
</template>

<script setup lang="ts">
import liquidityManagmentModal from "@/components/base/liquidity-managment-modal.vue";
import inputData from "@/components/fields/input-data.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
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

  &_withdraw {
    flex-direction: column;
  }
}
.text-and-button_action {
  width: 30em;
}
</style>
