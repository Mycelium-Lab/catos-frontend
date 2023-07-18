<template>
  <div class="field-fill-color-field-info-parent">
    <div class="field-fill-color-field-info">
      <div class="field-info">
        <img
          class="iconsstatus-transaction"
          alt=""
          src="@/assets/images/success-cash.svg"
        />
        <div class="div">Выберете способ оплаты</div>
      </div>
    </div>
    <div class="component-20-parent">
      <div
        class="component-20"
        @click="
          () => {
            isActive === 0 ? (isActive = -1) : (isActive = 0);
          }
        "
      >
        <div class="description-and-image">
          <catos-checkbox
            variant="radiobutton"
            :select="isActive === 0"
            id="1"
          ></catos-checkbox>

          <div class="description">
            <div class="catos">Кошелек Catos</div>
            <div class="balance-10-273">Balance: 10 273 CATOS</div>
          </div>
        </div>
      </div>
      <div
        class="component-21"
        @click="
          () => {
            isActive === 1 ? (isActive = -1) : (isActive = 1);
          }
        "
      >
        <div class="description-and-image1">
          <catos-checkbox
            variant="radiobutton"
            :select="isActive === 1"
            id="2"
          ></catos-checkbox>

          <div class="description">
            <div class="tonkeeper">Кошелек TONKeeper</div>
            <div class="balance-104-273">Balance: 104 273 TON</div>
          </div>
        </div>
      </div>
    </div>
    <div class="des-and-bbn">
      <catos-button
        variant="fourth"
        :disabled="isActive === -1"
        :style="{ width: '100%', margin: '0' }"
        @click="handle"
        >Продолжить</catos-button
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import catosCheckbox from "@/components/ui-kit/catos-checkbox.vue";

const emits = defineEmits(["qr"]);
const handle = () => {
  emits("qr");
};
const isActive = ref(-1);
</script>
<style scoped lang="scss">
.iconsstatus-transaction {
  position: relative;
  width: 3.38em;
  height: 3.38em;
  overflow: hidden;
  flex-shrink: 0;
}
.div {
  flex: 1;
  position: relative;
  font-size: 1em;
  letter-spacing: 0.01em;
  line-height: 130%;
}
.field-info {
  align-self: stretch;
  border-radius: 16px;
  background-color: #fff;
  height: 4em;
  display: flex;
  flex-direction: row;
  padding: 0em 0.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.field-fill-color-field-info {
  align-self: stretch;
  border-radius: 12px;
  background-color: #f6f4fc;
  border: 1px solid rgba(46, 58, 89, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.88em 0.75em;
  align-items: center;
  justify-content: center;
}
.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.radiobutton-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.catos {
  align-self: stretch;
  position: relative;
  font-size: 1em;
  line-height: 1.56em;
  font-weight: 500;
}
.balance-10-273 {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 1.14em;
  font-weight: 300;
}
.description {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.description-and-image {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.63em;
}
.component-20 {
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid rgba(165, 146, 221, 0.4);
  display: flex;
  flex-direction: column;
  padding: 0.75em 1.31em 0.88em;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  &:hover {
    background: rgba(165, 146, 221, 0.08);
  }
}
.tonkeeper {
  align-self: stretch;
  position: relative;
  font-size: 1em;
  letter-spacing: 1px;
  line-height: 1.56em;
  font-weight: 500;
}
.balance-104-273 {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 1.14em;
  font-weight: 300;
}
.description-and-image1 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.component-21 {
  align-self: stretch;
  border-radius: 16px;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  display: flex;
  flex-direction: column;
  padding: 0.75em 1.31em 0.88em;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  &:hover {
    background: rgba(165, 146, 221, 0.08);
  }
}
.component-20-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.text {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 500;
}
.buttons-tabs {
  align-self: stretch;
  border-radius: 25px;
  background-color: #a865ff;
  display: flex;
  flex-direction: row;
  padding: 0.69em 1.5em;
  align-items: center;
  justify-content: center;
}
.button {
  align-self: stretch;
  flex: 1;
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
  flex-direction: row;
  padding: 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
  color: #fefefe;
}
.field-fill-color-field-info-parent {
  position: relative;
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  width: 600px;
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}

.back-row {
  border-radius: 9px;
  background: rgba(251, 251, 251, 0.42);
  width: 37.5em;
  padding: 1px 0px;
  display: flex;
  justify-content: flex-start;

  & button {
    height: 39px;
    border-radius: 10px;
    border: 0.5px solid rgba(46, 58, 89, 0.04);
    background: #f5f9ff;
    color: #3b3b3b;
    font-size: 14px;
    font-family: Inter;
    font-weight: 300;
    line-height: 130%;
    padding: 10px 15px;
    cursor: pointer;
  }
}
</style>
