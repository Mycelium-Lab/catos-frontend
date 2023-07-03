<template>
  <div class="frame-parent">
    <div class="frame-group">
      <div class="frame-wrapper">
        <div class="fieldsinput-parent">
          <div class="fieldsinput">
            <div class="div">Отдаете:</div>
            <input-data
              placeholder="1 000 TON"
              :style="{ width: '100%' }"
            ></input-data>
          </div>
          <div class="fieldsinput-wrapper">
            <div class="fieldsinput2">
              <div class="iconsmail-parent">
                <!--<img class="iconsmail" alt="" src="/iconsmail.svg" />-->
                <div class="div2">≈45 556 USD</div>
                <!--<img
                  class="iconsedit-outline"
                  alt=""
                  src="/iconseditoutline.svg"
                />-->
              </div>
            </div>
          </div>
          <div class="ton1">
            <span class="ton-txt">
              <span class="span4">Балланс: </span>
              <span class="ton2">257 324 TON</span>
            </span>
          </div>
        </div>
      </div>
      <div class="divided-switch">
        <!--<img class="divided-switch-child" alt="" src="/line-32.svg" />-->
        <div class="swap-wrapper">
          <!--<img class="swap-icon" alt="" src="/swap.svg" />-->
        </div>
      </div>
      <div class="frame-wrapper">
        <div class="fieldsinput-parent">
          <div class="fieldsinput">
            <div class="div">Получаете:</div>
            <div class="fieldsinput4">
              <div class="iconsmail-parent">
                <!--<img class="iconsmail" alt="" src="/iconsmail.svg" />-->
                <div class="div2">
                  <span class="span">12 000</span>
                  <span>
                    <span class="span6"> </span>
                    <span>СATOS</span>
                  </span>
                </div>
                <!--<img
                  class="iconsedit-outline"
                  alt=""
                  src="/iconseditoutline.svg"
                />-->
              </div>
            </div>
          </div>
          <div class="fieldsinput-wrapper">
            <div class="fieldsinput5">
              <div class="iconsmail-parent">
                <!--<img class="iconsmail" alt="" src="/iconsmail.svg" />-->
                <div class="div2">≈45 556 USD</div>
                <!--<img
                  class="iconsedit-outline"
                  alt=""
                  src="/iconseditoutline.svg"
                />-->
              </div>
            </div>
          </div>
          <div class="ton3">
            <span class="ton-txt">
              <span class="span4">Балланс: </span>
              <span class="ton2">257 324 TON</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="frame-wrapper1">
      <div class="frame-parent1">
        <div class="subtotal-parent">
          <div class="div">Курс:</div>
          <div class="div">Обратный курс:</div>
          <div class="div">Комиссия</div>
        </div>
        <div class="parent">
          <div class="div">
            <span class="span">1 TON </span>
            <span>= 0.006CATOS</span>
          </div>
          <div class="div">
            <span class="span">1 CATOS</span>
            <span> = 166.66 TON</span>
          </div>
          <div class="div">
            <span class="span">0.5%:</span>
            <span> 0 TON (≈0 USD)</span>
          </div>
        </div>
      </div>
    </div>
    <catos-button
      variant="secondary"
      :style="{ width: '100%', margin: '0' }"
      @click="send"
      >Отправить</catos-button
    >
  </div>
</template>
<script setup lang="ts">
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import inputData from "@/components/fields/input-data.vue";
const emmit = defineEmits(["result"]);
const send = () => {
  emmit("result");
};
</script>
<style scoped>
.div {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.iconsmail {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
}
.span {
  font-weight: 500;
}
.span1 {
  font-family: Inter;
  color: #2e3a59;
}
.span2 {
  font-weight: 300;
  font-family: Inter;
  color: rgba(0, 0, 0, 0.04);
}
.ton {
  font-size: 0.88em;
}
.span3 {
  font-size: 0.75em;
}
.div1 {
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
.iconsmail-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
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
  display: flex;
  flex-direction: column;
  padding: 0em 0.75em;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
}
.fieldsinput {
  width: 15em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
  z-index: 0;
}
.div2 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.fieldsinput2 {
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid rgba(165, 146, 221, 0.4);
  box-sizing: border-box;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 0em 0.75em;
  align-items: flex-start;
  justify-content: center;
}
.fieldsinput-wrapper {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  z-index: 1;
  text-align: center;
}
.span4 {
  font-weight: 300;
}
.ton2 {
  text-decoration: underline;
  color: rgba(87, 126, 247, 0.96);
}
.ton-txt {
  line-break: anywhere;
  width: 100%;
}
.ton1 {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 32.5px);
  right: 0em;
  font-size: 0.75em;
  line-height: 130%;
  text-align: right;
  display: flex;
  align-items: center;
  width: 11.92em;
  flex-shrink: 0;
  z-index: 2;
  color: #2e3a59;
}
.fieldsinput-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  gap: 0.25em;
}
.frame-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.divided-switch-child {
  position: absolute;
  top: 0.77em;
  left: -0.03em;
  width: 27.56em;
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
  top: 0em;
  left: calc(50% - 51px);
  background-color: #fff;
  width: 6.38em;
  display: flex;
  flex-direction: row;
  padding: 0em 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.divided-switch {
  align-self: stretch;
  position: relative;
  height: 1.5em;
}
.span6 {
  color: #2e3a59;
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
  display: flex;
  flex-direction: column;
  padding: 0em 0.75em;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
}
.fieldsinput5 {
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid rgba(112, 202, 152, 0.2);
  box-sizing: border-box;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 0em 0.75em;
  align-items: flex-start;
  justify-content: center;
}
.ton3 {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 32.5px);
  right: 0em;
  font-size: 0.75em;
  line-height: 130%;
  text-align: right;
  display: flex;
  align-items: center;
  width: 13em;
  flex-shrink: 0;
  z-index: 2;
  color: #2e3a59;
}
.frame-group {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5em;
}
.subtotal-parent {
  width: 9em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.parent {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.frame-parent1 {
  align-self: stretch;
  border-radius: 11px;
  border: 1px solid rgba(165, 146, 221, 0.1);
  display: flex;
  flex-direction: row;
  padding: 1.25em;
  align-items: center;
  justify-content: flex-start;
}
.frame-wrapper1 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.ton-kepeer {
  position: relative;
  font-size: 1em;
  line-height: 130%;
}
.buttonnext {
  border-radius: 20px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  width: 21.38em;
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #f3f3f3;
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
