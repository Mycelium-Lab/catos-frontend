<template>
  <modal>
    <div class="header">
      <div class="div8">Обмен</div>
    </div>

    <div class="frame-wrapper">
      <div class="frame-group">
        <div class="subtotal-parent">
          <div class="subtotal">Курс:</div>
          <div class="subtotal">Обратный курс:</div>
          <div class="subtotal">Комиссия</div>
        </div>
        <div class="group">
          <div class="subtotal">
            <span class="ton">1 TON </span>
            <span>= 0.006CATOS</span>
          </div>
          <div class="subtotal">
            <span class="ton">1 CATOS</span>
            <span> = 166.66 TON</span>
          </div>
          <div class="subtotal">
            <span class="ton">0.5%:</span>
            <span> 0 TON (≈0 USD)</span>
          </div>
        </div>
      </div>
    </div>
    <div class="buttonnext" @click="() => (isSuccess = true)">
      <b class="ton-kepeer">Отправить</b>
    </div>
    <div class="frame-container">
      <div class="frame-div">
        <div class="fieldsinput-parent">
          <div class="fieldsinput">
            <div class="div12">Отдаете:</div>
            <input-data
              border=" 1px solid rgba(165, 146, 221, 0.4)"
              background="rgba(230, 221, 255, 0.3)"
              :style="{ width: '100%' }"
            ></input-data>
          </div>
          <div class="fieldsinput-wrapper">
            <div class="fieldsinput2">
              <div class="iconsmail-group">
                <img class="iconsmail1" alt="" src="./public/iconsmail2.svg" />

                <div class="div14">≈45 556 USD</div>
                <img
                  class="iconsedit-outline"
                  alt=""
                  src="./public/iconseditoutline.svg"
                />
              </div>
            </div>
          </div>
          <div class="ton2">
            <span class="ton-txt">
              <span class="span5">Балланс: </span>
              <span class="ton3">257 324 TON</span>
            </span>
          </div>
        </div>
      </div>
      <div class="divided-switch">
        <img
          class="divided-switch-child"
          alt=""
          src="@/assets/images/line-32.svg"
        />

        <div class="swap-wrapper">
          <img class="swap-icon" alt="" src="@/assets/images/swap.svg" />
        </div>
      </div>
      <div class="frame-div">
        <div class="fieldsinput-parent">
          <div class="fieldsinput">
            <div class="div12">Получаете:</div>
            <input-data
              :readonly="true"
              border="1px solid rgba(112, 202, 152, 0.2)"
              background="rgba(145, 246, 182, 0.3)"
              :style="{ width: '100%' }"
              value="12000"
            ></input-data>
          </div>
          <div class="fieldsinput-wrapper">
            <div class="fieldsinput5">
              <div class="iconsmail-group">
                <img class="iconsmail1" alt="" src="./public/iconsmail2.svg" />

                <div class="div14">≈45 556 USD</div>
                <img
                  class="iconsedit-outline"
                  alt=""
                  src="./public/iconseditoutline.svg"
                />
              </div>
            </div>
          </div>
          <div class="ton2">
            <span class="ton-txt">
              <span class="span5">Балланс: </span>
              <span class="ton3">257 324 TON</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <success :style="{ fontSize: '0.6rem' }" v-if="isSuccess"></success>
  </modal>
</template>

<script setup lang="ts">
import { ref } from "vue";

import inputData from "@/components/fields/input-data.vue";
import success from "@/components/wallet/exchange/succeess.vue";
import modal from "@/components/ui-kit/modal.vue";
const isSuccess = ref(false);
</script>

<style scoped lang="scss">
.div8 {
  position: relative;
  font-size: 1em;
  line-height: 130%;
  font-weight: 600;
}
.header {
  position: absolute;
  top: 2.5em;
  left: 2.81em;
  border-radius: 8px;
  width: 77vw;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0.75em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.swipe-down {
  position: absolute;
  top: 0.75em;
  left: 10.81em;
  border-radius: 25px;
  background-color: #cad0e4;
  width: 2.63em;
  height: 0.31em;
}
.subtotal {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.subtotal-parent {
  width: 9em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.ton {
  font-weight: 500;
}
.frame-group,
.frame-wrapper,
.group {
  display: flex;
  justify-content: flex-start;
}
.group {
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5em;
}
.frame-group,
.frame-wrapper {
  align-items: center;
}
.frame-group {
  border-radius: 11px;
  border: 1px solid rgba(165, 146, 221, 0.1);
  box-sizing: border-box;
  width: 88vw;
  flex-direction: row;
  padding: 0.63em 0.88em;
}
.frame-wrapper {
  position: absolute;
  top: 21.19em;
  left: 1.5em;
  flex-direction: column;
}
.ton-kepeer {
  position: relative;
  font-size: 1em;
  line-height: 1.75em;
}
.buttonnext {
  position: absolute;
  top: 27.81em;
  left: 1.5em;
  border-radius: 20px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  width: 88vw;
  height: 3em;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #f3f3f3;
}
.div12 {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.iconsmail1 {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
}
.span2,
.span3 {
  font-family: Inter;
}
.span2 {
  color: #2e3a59;
}
.span3 {
  font-weight: 300;
  color: rgba(0, 0, 0, 0.04);
}
.ton1 {
  font-size: 0.88em;
}
.span4 {
  font-size: 0.75em;
}
.div13 {
  flex: 1;
  position: relative;
  line-height: 130%;
}
.iconsedit-outline {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
}
.iconsmail-group {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.fieldsinput,
.fieldsinput1 {
  display: flex;
  flex-direction: column;
}
.fieldsinput1 {
  align-self: stretch;
  border-radius: 16px;
  background-color: rgba(230, 221, 255, 0.3);
  border: 1px solid rgba(165, 146, 221, 0.4);
  box-sizing: border-box;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  padding: 0 0.75em;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
}
.fieldsinput {
  width: 72%;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
  z-index: 0;
}
.div14 {
  flex: 1;
  position: relative;
  font-size: 0.63em;
  line-height: 130%;
}
.fieldsinput-wrapper,
.fieldsinput2 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.fieldsinput2 {
  border-radius: 16px;
  border: 1px solid rgba(165, 146, 221, 0.4);
  box-sizing: border-box;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  padding: 0 0.75em;
  justify-content: center;
}
.fieldsinput-wrapper {
  flex: 1;
  justify-content: flex-end;
  z-index: 1;
  text-align: center;
  width: 20%;
}
.span5 {
  font-weight: 300;
}
.ton3 {
  text-decoration: underline;
  color: rgba(87, 126, 247, 0.96);
}
.ton-txt {
  line-break: anywhere;
  width: 100%;
}
.ton2 {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 30.5px);
  right: 0em;
  font-size: 0.63em;
  line-height: 130%;
  display: flex;
  align-items: center;
  width: 11em;
  flex-shrink: 0;
  z-index: 2;
  color: #2e3a59;
}
.fieldsinput-parent,
.frame-div {
  display: flex;
  justify-content: flex-start;
}
.fieldsinput-parent {
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  position: relative;
  gap: 0.25em;
}
.frame-div {
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
}
.divided-switch-child {
  position: absolute;
  top: 0.77em;
  left: -0.03em;
  width: 21.44em;
  height: 0.06em;
}
.swap-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.swap-wrapper {
  position: absolute;
  top: 0;
  left: 27vw;
  background-color: #fff;
  width: 30vw;
  display: flex;
  flex-direction: row;
  padding: 0 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.divided-switch {
  position: relative;
  width: 21.38em;
  height: 1.5em;
}
.span7 {
  color: #2e3a59;
}
.div16 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.fieldsinput4 {
  align-self: stretch;
  border-radius: 16px;
  background-color: rgba(145, 246, 182, 0.3);
  border: 1px solid rgba(112, 202, 152, 0.2);
  box-sizing: border-box;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  padding: 0 0.75em;
  justify-content: center;
  text-align: center;
}
.fieldsinput4,
.fieldsinput5,
.frame-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.fieldsinput5 {
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid rgba(112, 202, 152, 0.2);
  box-sizing: border-box;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  padding: 0 0.75em;
  justify-content: center;
}
.frame-container {
  position: absolute;
  top: 6.06em;
  left: 6vw;
  justify-content: flex-start;
  gap: 1.5em;
  width: 88vw;
}
.header-parent {
  position: relative;
  border-radius: 30px 30px 0 0;
  background-color: #fff;
  box-shadow: 0 12px 12px rgba(151, 71, 255, 0.04);
  width: 100%;
  height: 51.06em;
  overflow: hidden;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
