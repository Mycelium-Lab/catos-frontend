<template>
  <div class="frame-root">
    <div class="frame-parent3">
      <div class="header-container">
        <div class="header4">
          <div class="div28">Прямое пополнение</div>
        </div>
        <div class="div29">Используйте адрес ниже для пополнения баланса:</div>
      </div>
      <div class="qr1">
        <div class="qr-code-21">
          <img
            class="replace-me-icon1"
            alt=""
            src="@/assets/images/replace-me@2x.png"
          />
        </div>
      </div>
      <div class="info1">
        <div class="aderes1">
          <div class="frame-parent4">
            <div class="ton-frame">
              <div class="ton3">
                <span class="span6">Монета:</span>
                <span class="ton4"> TON</span>
              </div>
            </div>
            <div class="ton-frame">
              <div class="ton3">
                <span class="span6">Сеть: </span>
                <span class="ton4">The Open Network - TON</span>
              </div>
            </div>
          </div>
        </div>
        <div class="info-child">
          <div class="frame-parent5">
            <div class="alert-triangle-group">
              <img
                class="alert-triangle-icon1"
                alt=""
                src="@/assets/images/alerttriangle.svg"
              />

              <div class="div30">Внимание!</div>
            </div>
            <div class="ton-container1">
              <p class="ton5">Отправляйте только TON через сеть:</p>
              <p class="ton5">A The open Network (TON), иначе</p>
              <p class="ton5">монеты могут быть утеряны навсегда</p>
            </div>
          </div>
        </div>
        <div class="frame-parent6">
          <div class="aderes1">
            <div class="div31">Кошелек для пополнения:</div>
          </div>
          <copyPaste
            :style="{ width: '77vw' }"
            value="EQCoqrqUMQCKKZTBFCQ0VzgOf 
С2K3ieCVOecUmPSFclu2HQJ"
          >
            <template v-slot:icon>
              <img src="@/assets/images/iconscopy.svg" alt="" />
            </template>
          </copyPaste>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import copyPaste from "@/components/fields/copy-paste.vue";
</script>

<style scoped lang="scss">
.div28 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.header4 {
  border-radius: 6px;
  background: linear-gradient(
      rgba(165, 146, 221, 0.21),
      rgba(165, 146, 221, 0.21)
    ),
    #fff;
  width: 100%;
  flex-direction: row;
  padding: 0.25em 0;
  box-sizing: border-box;
  justify-content: center;
}
.div29,
.header-container,
.header4 {
  display: flex;
  align-items: center;
}
.div29 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  color: #78789a;
  text-align: center;
  justify-content: center;
  width: 100%;
}
.header-container {
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.63em;
  width: 100%;
}
.replace-me-icon1 {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
}
.qr-code-21,
.qr1 {
  width: 9.13em;
  height: 9.13em;
  overflow: hidden;
}
.qr-code-21 {
  position: absolute;
  top: calc(50% - 73px);
  left: calc(50% - 73px);
  border-radius: 17.64px;
  border: 0.6px dashed #a592dd;
  box-sizing: border-box;
}
.qr1 {
  position: relative;
  flex-shrink: 0;
}
.span6 {
  font-weight: 500;
}
.ton4 {
  font-weight: 300;
}
.ton3 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.5px;
  line-height: 130%;
}
.aderes1,
.frame-parent4,
.ton-frame {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.aderes1,
.frame-parent4 {
  width: 100%;
  flex-direction: column;
  padding: 0.25em 0;
  box-sizing: border-box;
}
.aderes1 {
  border-radius: 10px;
  width: 100%;
  padding: 0 0.75em;
}
.alert-triangle-icon1,
.div30 {
  position: relative;
  flex-shrink: 0;
}
.alert-triangle-icon1 {
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
}
.div30 {
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
  display: inline-block;
  width: 17.57em;
}
.alert-triangle-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.ton5 {
  margin: 0;
}
.ton-container1 {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.02em;
  line-height: 130%;
  font-weight: 300;
}
.frame-parent5,
.info-child {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent5 {
  flex: 1;
  flex-direction: column;
  gap: 0.25em;
  width: 100%;
}
.info-child {
  border-radius: 11px;
  background-color: rgba(253, 214, 116, 0.2);
  width: 100%;
  flex-direction: row;
  padding: 0.63em 0.75em;
  box-sizing: border-box;
}
.div31,
.key1 {
  position: relative;
}
.div31 {
  font-size: 0.63em;
  line-height: 130%;
  font-weight: 300;
  display: flex;
  align-items: center;
  width: 26.8em;
}
.key1 {
  font-size: 0.75em;
  line-height: 140%;
  font-weight: 600;
}
.code1,
.text-11 {
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.text-11 {
  display: none;
  padding: 0 0.63em 0 0;
  z-index: 0;
}
.code1 {
  display: flex;
  z-index: 1;
  color: #3b3b3b;
}
.iconchange5 {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  max-height: 100%;
  width: 3.25em;
  z-index: 2;
}
.field-copykey1 {
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  border: 0.5px solid rgba(165, 146, 221, 0.1);
  box-sizing: border-box;
  width: 18.75em;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0 0.5em 0.75em;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  color: rgba(59, 59, 59, 0.5);
}
.frame-parent3,
.frame-parent6,
.info1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
}
.frame-parent6 {
  gap: 0.38em;
  color: #000;
}
.frame-parent3,
.info1 {
  gap: 0.88em;
}
.frame-parent3 {
  border-radius: 14px;
  background-color: #f8f6fc;
  overflow: hidden;
  padding-top: 1.13em;
  padding-bottom: 1.4em;
  align-items: center;
  gap: 1.63em;
  width: 77vw;
}
.line-icon {
  position: absolute;
  top: 0.94em;
  left: 1.28em;
  width: 18.81em;
  height: 0.06em;
}
.wrapper3 {
  position: absolute;
  top: 0.38em;
  left: calc(50% - 34px);
  background-color: #fff;
  width: 4.19em;
  display: flex;
  flex-direction: row;
  padding: 0 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.vector-group {
  position: relative;
  width: 21.38em;
  height: 1.88em;
  color: rgba(73, 60, 111, 0.58);
  top: 2em;
}
.ton-kepeer1 {
  position: relative;
  font-size: 1em;
  line-height: 1.75em;
}
.buttonnext1 {
  border-radius: 20px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  width: 18.81em;
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
.buttonnext-container,
.frame-root {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.buttonnext-container {
  position: absolute;
  align-self: stretch;
  justify-content: center;
  text-align: center;
  color: #f3f3f3;
  top: 38em;
}
.frame-root {
  position: relative;
  width: 100%;
  justify-content: flex-start;
  gap: 1.5em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
