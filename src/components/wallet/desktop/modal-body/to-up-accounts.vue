<template>
  <div class="frame-parent">
    <div class="frame-group">
      <div class="frame-container">
        <div class="frame-div">
          <div class="header-parent">
            <div class="header">
              <div class="div">Счет на:</div>
            </div>
            <div class="header1">
              <div class="ton">10 000 000 TON</div>
            </div>
          </div>
          <div class="div1">Используйте адрес ниже для пополнения баланса:</div>
        </div>
        <div class="qr">
          <div class="qr-code-2">
            <img
              class="replace-me-icon"
              alt=""
              src="@/assets/images/replace-me@2x.png"
            />
          </div>
        </div>
        <div class="info">
          <div class="frame-parent1">
            <div class="wrapper">
              <div class="div2">Ссылка на получение счета:</div>
            </div>
            <copy-paste>
              <template v-slot:icon>
                <img src="@/assets/images/iconscopy.svg" alt="" />
              </template>
            </copy-paste>
          </div>
        </div>
      </div>
      <div class="frame-parent2">
        <div class="component-27-wrapper">
          <div class="component-27">
            <img
              class="share-icon"
              alt=""
              src="@/assets/images/iconsshare.svg"
            />
            <div class="number">Поделиться</div>
          </div>
        </div>
        <div class="frame-wrapper">
          <div class="trash-2-parent">
            <img class="trash-2-icon" alt="" src="@/assets/images/trash.svg" />
            <div class="div3">Удалить счет</div>
          </div>
        </div>
      </div>
    </div>
    <div class="des-and-bbn">
      <catos-button
        variant="fourth_outline"
        :style="{ width: '205px', margin: '0' }"
        @click="toAccounts"
        >К счетам</catos-button
      >

      <div class="button-wrapper">
        <catos-button
          variant="fourth_outline"
          :style="{ width: '205px', margin: '0' }"
          @click="toWallet"
          >В кошелек</catos-button
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import copyPaste from "@/components/fields/copy-paste.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
const emits = defineEmits(["close"]);
const toAccounts = () => {
  emits("close");
};
const router = useRouter();
const toWallet = () => {
  router.push({ name: "wallet" });
};
</script>
<style scoped>
.div {
  position: relative;
  font-size: 1em;
  line-height: 130%;
  font-weight: 600;
}
.header {
  border-radius: 6px;
  width: 18.63em;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.ton {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 500;
}
.header1 {
  border-radius: 6px;
  background: linear-gradient(
      rgba(165, 146, 221, 0.21),
      rgba(165, 146, 221, 0.21)
    ),
    #fff;
  width: 18.63em;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.header-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.div1 {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  color: rgba(59, 59, 59, 0.6);
  text-align: center;
}
.frame-div {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.replace-me-icon {
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
  object-fit: cover;
}
.qr-code-2 {
  position: absolute;
  top: calc(50% - 73px);
  left: calc(50% - 73px);
  border-radius: 17.64px;
  border: 0.6px dashed #a592dd;
  box-sizing: border-box;
  width: 9.13em;
  height: 9.13em;
  overflow: hidden;
}
.qr {
  position: relative;
  width: 9.13em;
  height: 9.13em;
  overflow: hidden;
  flex-shrink: 0;
}
.div2 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
  display: flex;
  align-items: center;
  width: 22.33em;
}
.wrapper {
  border-radius: 10px;
  width: 18.75em;
  display: flex;
  flex-direction: column;
  padding: 0em 0.75em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.key {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 600;
}
.text-1 {
  display: none;
  flex-direction: row;
  padding: 0em 0.63em 0em 0em;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
}
.cahrjj3 {
  position: relative;
  font-size: 0.75em;
  text-decoration: underline;
  line-height: 130%;
  font-weight: 600;
  color: inherit;
}
.code {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  color: #3b3b3b;
}
.iconchange {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  top: 0em;
  right: 0em;
  bottom: 0em;
  max-height: 100%;
  width: 3.25em;
  z-index: 2;
}
.field-copykey {
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  border: 0.5px solid rgba(165, 146, 221, 0.1);
  box-sizing: border-box;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0em 0.5em 0.75em;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  color: rgba(59, 59, 59, 0.5);
}
.frame-parent1 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.38em;
}
.info {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #000;
}
.frame-container {
  align-self: stretch;
  border-radius: 14px;
  background-color: #f8f6fc;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1.13em 1.31em;
  align-items: center;
  justify-content: flex-start;
  gap: 1.63em;
}
.share-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.number {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 600;
}
.component-27 {
  align-self: stretch;
  border-radius: 33px;
  background-color: #a865ff;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0em 0.44em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}
.component-27-wrapper {
  flex: 1;
  height: 2.5em;
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
.div3 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 500;
}
.trash-2-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.frame-wrapper {
  flex: 1;
  border-radius: 36px;
  background-color: #3b3b3b;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.38em 1.69em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.frame-parent2 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
  color: #fff;
}
.frame-group {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.31em;
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
.buttons-tabs1 {
  align-self: stretch;
  border-radius: 25px;
  border: 1px solid #5d83f7;
  display: flex;
  flex-direction: row;
  padding: 0.69em 1.5em;
  align-items: center;
  justify-content: center;
}
.button-wrapper {
  flex: 1;
  display: flex;
  flex-direction: row;
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
  gap: 0.63em;
  text-align: right;
  color: #555562;
}
.frame-parent {
  position: relative;
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
