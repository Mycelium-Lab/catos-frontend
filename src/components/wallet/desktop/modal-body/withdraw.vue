<template>
  <div class="frame-parent_withdraw">
    <div class="frame-group">
      <div class="fieldsinputchoise-parent">
        <div class="fieldsinputchoise">
          <div class="div">Выберите криптовалюту для отправки:</div>
          <catos-select
            placeholder="Россия"
            :options="options"
            :value="value"
            @selected="ev => (value = ev)"
            :optionWidthDesk="440"
            :style="{ width: '100%' }"
          ></catos-select>
        </div>
        <!--<img class="frame-child" alt="" src="/line-28.svg" />-->
        <div class="fieldsinput-parent">
          <div class="fieldsinput">
            <div class="div1">Укажите сумму:</div>

            <input-data :style="{ width: '100%' }"></input-data>
          </div>
          <div class="min-10-ton-parent">
            <div class="min-10-ton-container">
              <span>Min: </span>
              <span class="span3"> </span>
              <span class="ton1">10 TON</span>
            </div>
            <div class="max-257-324-container">
              <span>Max: </span>
              <span class="span3"> </span>
              <span class="ton1">257 324 TON</span>
            </div>
          </div>
          <div class="ton3">
            <span class="span5">Балланс: </span>
            <span class="ton4">257 324 TON</span>
          </div>
        </div>
        <!--<img class="frame-child" alt="" src="/line-28.svg" />-->
        <div class="fieldsinput2">
          <div class="div">Укажите адресс кошелька получателя:</div>
          <input-data :style="{ width: '100%' }"></input-data>
        </div>
      </div>
      <div class="frame-container">
        <div class="frame-wrapper">
          <div class="frame-div">
            <div class="alert-triangle-parent">
              <img
                class="alert-triangle-icon"
                alt=""
                src="@/assets/images/alerttriangle.svg"
              />
              <div class="div5">Внимание!</div>
            </div>
            <div class="the-open-network">
              Указывайте адрес получаетля только в сети The open Network (TON).
              Иначе монеты могут быть утеряны навсегда
            </div>
          </div>
        </div>
        <div class="frame-wrapper1">
          <div class="frame-wrapper2">
            <div class="buttonnext-parent">
              <catos-button
                variant="secondary"
                :style="{ width: '100%' }"
                @click="handle"
                >Отправить</catos-button
              >

              <div class="buttonnext1">
                <div class="text">Отмена</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import inputData from "@/components/fields/input-data.vue";
const emits = defineEmits(["result"]);
const handle = () => {
  emits("result");
};
import catosSelect from "@/components/fields/catos-select.vue";
const value = ref("");
const options = {
  sng: ["Россия", "Украина", "Казахстан"],
  euro: ["Польша", "Латвия", "Молдова"],
};
</script>
<style scoped>
.div {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.text {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
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
  color: #2e3a59;
}
.fieldsinputchoise {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.frame-child {
  position: relative;
  width: 18.69em;
  height: 0.13em;
}
.div1 {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
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
  color: #2e3a59;
}
.span2 {
  color: rgba(0, 0, 0, 0.04);
}
.ton {
  font-weight: 300;
  color: #8181a5;
}
.div2 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
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
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
  z-index: 0;
}
.span3 {
  color: rgba(165, 146, 221, 0.7);
}
.ton1 {
  color: #a592dd;
}
.min-10-ton-container {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.max-257-324-container {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
  font-weight: 300;
}
.min-10-ton-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 1;
  text-align: center;
}
.span5 {
  font-weight: 300;
}
.ton4 {
  text-decoration: underline;
  color: rgba(87, 126, 247, 0.96);
}
.ton3 {
  position: absolute;
  margin: 0 !important;
  top: 0.42em;
  right: 0em;
  font-size: 0.75em;
  line-height: 0.83em;
  z-index: 2;
  color: #2e3a59;
}
.fieldsinput-parent {
  align-self: stretch;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 0.63em;
}
.div4 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0em;
  align-items: center;
  justify-content: space-between;
}
.fields-password-and-mail1 {
  align-self: stretch;
  border-radius: 16px;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  height: 2.5em;
  display: flex;
  flex-direction: column;
  padding: 0.5em 0.75em;
  align-items: flex-start;
  justify-content: space-between;
  color: rgba(59, 59, 59, 0.5);
}
.fieldsinput2 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.fieldsinputchoise-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.94em;
}
.alert-triangle-icon {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
}
.div5 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
  display: inline-block;
  width: 17.57em;
  flex-shrink: 0;
}
.alert-triangle-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.the-open-network {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.frame-div {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.frame-wrapper {
  align-self: stretch;
  border-radius: 11px;
  background-color: rgba(253, 214, 116, 0.2);
  display: flex;
  flex-direction: row;
  padding: 0.63em 0.75em;
  align-items: flex-start;
  justify-content: flex-start;
}
.ton-kepeer {
  position: relative;
  font-size: 1em;
  line-height: 130%;
}
.buttonnext {
  align-self: stretch;
  border-radius: 20px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.buttonnext1 {
  border-radius: 20px;
  width: 18.75em;
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  flex-direction: row;
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  color: rgba(38, 38, 38, 0.62);
}
.buttonnext-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.38em;
}
.frame-wrapper2 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-wrapper1 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  color: #f3f3f3;
}
.frame-container {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.13em;
}
.frame-group {
  width: 27.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.frame-parent_withdraw {
  position: relative;
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  width: 100%;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
