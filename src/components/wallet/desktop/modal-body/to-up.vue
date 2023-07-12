<template>
  <div class="frame-parent">
    <div class="frame-group">
      <div class="fieldsinputchoise-wrapper">
        <div class="fieldsinputchoise">
          <div class="div">Выберите криптовалюту для пополнения балланса:</div>
          <catos-select
            placeholder="Россия"
            :options="options"
            :value="value"
            @selected="ev => (value = ev)"
            :optionWidthDesk="440"
            :style="{ width: '100%' }"
          ></catos-select>
        </div>
      </div>
      <div class="frame-container">
        <div class="header-parent">
          <div class="header">
            <div class="div1">Прямое пополнение</div>
          </div>
          <div class="div2">Используйте адрес ниже для пополнения баланса:</div>
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
          <div class="aderes">
            <div class="ton-parent">
              <div class="ton">
                <span class="span">Монета:</span>
                <span class="the-open-network"> TON</span>
              </div>
              <div class="ton">
                <span class="span">Сеть: </span>
                <span class="the-open-network">The Open Network - TON</span>
              </div>
            </div>
          </div>
          <div class="info-inner">
            <div class="frame-div">
              <div class="alert-triangle-parent">
                <img
                  class="alert-triangle-icon"
                  alt=""
                  src="@/assets/images/alerttriangle.svg"
                />
                <div class="div3">Внимание!</div>
              </div>
              <div class="ton2">
                Отправляйте только TON через сеть: A The open Network (TON),
                иначе монеты могут быть утеряны навсегда
              </div>
            </div>
          </div>
          <div class="frame-parent1">
            <div class="aderes">
              <div class="div4">Кошелек для пополнения:</div>
            </div>
            <copy-paste
              :style="{ width: '412px', fontSize: '12px' }"
              value="EQCoqrqUMQCKKZTBFCQ0VzgOf 
С2K3ieCVOecUmPSFclu2HQJ"
            >
              <template v-slot:icon>
                <img src="@/assets/images/iconscopy.svg" alt="" /> </template
            ></copy-paste>
          </div>
        </div>
      </div>
      <div class="vector-parent">
        <!--<img class="frame-child" alt="" src="/line-30.svg" />-->
        <div class="container">
          <div class="text">Или</div>
        </div>
      </div>
      <catos-button
        variant="secondary"
        :style="{ width: '100%', margin: '0' }"
        @click="payNotif"
        >Пополнить через Tokenkeeper</catos-button
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref("");
const options = {
  sng: ["Россия", "Украина", "Казахстан"],
  euro: ["Польша", "Латвия", "Молдова"],
};
import catosSelect from "@/components/fields/catos-select.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import copyPaste from "@/components/fields/copy-paste.vue";
const emits = defineEmits(["pay-notif"]);

const payNotif = () => {
  emits("pay-notif");
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
.fieldsinputchoise-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.div1 {
  position: relative;
  font-size: 1em;
  line-height: 130%;
  font-weight: 600;
}
.header {
  border-radius: 6px;
  background: linear-gradient(
      rgba(165, 146, 221, 0.21),
      rgba(165, 146, 221, 0.21)
    ),
    #fff;
  width: 18.63em;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.div2 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  color: #78789a;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 21.43em;
}
.header-parent {
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
.span {
  font-weight: 500;
}
.ton {
  position: relative;
  font-size: 1em;
  letter-spacing: 0.5px;
  line-height: 130%;
}
.the-open-network {
  font-weight: 300;
}
.ton-parent {
  width: 16.75em;
  display: flex;
  flex-direction: column;
  padding: 0.25em 0em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.aderes {
  border-radius: 10px;
  width: 18.75em;
  display: flex;
  flex-direction: column;
  padding: 0em 0.75em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.alert-triangle-icon {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
}
.div3 {
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
.ton2 {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
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
.info-inner {
  align-self: stretch;
  border-radius: 11px;
  background-color: rgba(253, 214, 116, 0.2);
  display: flex;
  flex-direction: row;
  padding: 0.63em 0.75em;
  align-items: flex-start;
  justify-content: flex-start;
}
.div4 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
  display: flex;
  align-items: center;
  width: 22.33em;
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
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 600;
}
.code {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  color: #3b3b3b;
}
.iconchange1 {
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
  color: #000;
}
.info {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.88em;
}
.frame-container {
  align-self: stretch;
  border-radius: 14px;
  background-color: #f8f6fc;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  align-items: center;
  justify-content: flex-start;
  gap: 1.63em;
}
.frame-child {
  position: absolute;
  top: 0.94em;
  left: 1.28em;
  width: 26.25em;
  height: 0.06em;
}
.container {
  position: absolute;
  top: 0.38em;
  left: calc(50% - 33px);
  background-color: #fff;
  width: 4.19em;
  display: flex;
  flex-direction: row;
  padding: 0em 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.vector-parent {
  align-self: stretch;
  position: relative;
  height: 1.88em;
  color: rgba(73, 60, 111, 0.58);
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
.buttonnext-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #f3f3f3;
}
.frame-group {
  width: 27.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.frame-parent {
  position: relative;
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  width: 100%;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}

@media (max-height: 900px) {
  .frame-parent {
    height: 36em;
    overflow-y: auto;
  }
}
</style>
