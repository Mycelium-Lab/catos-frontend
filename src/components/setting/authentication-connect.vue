<template>
  <modal>
    <div class="group">
      <div class="div8">Двухфакторная авторизация</div>
      <div class="div9">
        Отсканируйте QR код с ключем доступа в приложении Google Authentificator
        или добавьте его вручную:
      </div>
    </div>

    <img class="connect-child" alt="" src="@/assets/images/dash-one.svg" />

    <img
      class="iconsstatus-transaction"
      alt=""
      src="@/assets/images/qr-code-dash.svg"
    />

    <div class="frame-group">
      <div class="google-authentificator-io-parent">
        <div class="google-authentificator-container1">
          <span>Google Authentificator: </span>
          <span class="ios">для iOS и для Android</span>
        </div>

        <div class="frame-container">
          <copy-paste :style="{ marginTop: '0em' }" value="CATOSdApp">
            <template v-slot:label> Account Name: </template>
            <template v-slot:icon>
              <img src="@/assets/images/iconspaste.svg"
            /></template>
          </copy-paste>
        </div>
        <div class="frame-container">
          <copy-paste :style="{ marginTop: '0em' }" value="LKDXOOQCPWAAIAWT">
            <template v-slot:label> Key: </template>
            <template v-slot:icon>
              <img src="@/assets/images/iconspaste.svg"
            /></template>
          </copy-paste>
        </div>
      </div>
      <div class="buttonnext-parent">
        <div class="buttonnext">
          <b class="ton-kepeer">Добавил, продолжить</b>
        </div>
      </div>
    </div>
  </modal>
</template>

<script setup lang="ts">
import CopyPaste from "../fields/copy-paste.vue";
import modalStep from "../ui-kit/modal-step.vue";
import modal from "../ui-kit/modal.vue";
</script>

<style scoped lang="scss">
.div8 {
  align-self: stretch;
  position: relative;
  font-size: 1.13em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
  width: 77vw;
  text-align: center;
}
.p {
  margin: 0;
}
.div9 {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.01em;
  line-height: 130%;
  color: rgba(59, 59, 59, 0.6);
  width: 77vw;
  text-align: center;
}
.group {
  position: absolute;
  top: 2.25em;
  left: 2.81em;
  border-radius: 7px;
  width: 77vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75em;
}
.span {
  letter-spacing: 0.01em;
}
.google-authentificator-container {
  position: absolute;
  top: 25.17em;
  left: 3.75em;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
  color: #78789a;
  display: inline-block;
  width: 77vw;
  text-align: center;
}
.connect-child {
  position: absolute;
  top: 5.92em;
  left: 0;
  width: 98.44em;
  height: 9.99em;
}
.iconsstatus-transaction {
  position: absolute;
  top: 8.75em;
  left: 30vw;
  height: 8.88em;
  overflow: hidden;
}
.ios {
  color: rgba(59, 59, 59, 0.7);
}
.google-authentificator-container1 {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  line-height: 140%;
  font-weight: 300;
  text-align: center;
}
.iconchange {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  max-height: 100%;
  width: 2.5em;
  z-index: 1;
}
.ios-parent {
  flex: 1;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  height: 2.5em;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0 0.5em 0.75em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  position: relative;
}
.android {
  position: relative;
  font-size: 0.75em;
  line-height: 140%;
  z-index: 0;
}
.frame-container,
.google-authentificator-io-parent {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-container {
  width: 77vw;
  flex-direction: row;
  gap: 0.75em;
  text-align: left;
}
.google-authentificator-io-parent {
  flex-direction: column;
  gap: 1em;
  width: 77vw;
}
.ton-kepeer {
  position: relative;
  font-size: 1em;
  line-height: 1.75em;
}
.buttonnext {
  border-radius: 20px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  width: 100%;
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.div10 {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.01em;
  line-height: 120%;
  font-weight: 300;
  color: rgba(59, 59, 59, 0.7);
  display: inline-block;
  width: 100%;
  text-align: center;
}
.buttonnext-parent,
.frame-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.buttonnext-parent {
  gap: 1em;
  color: #f3f3f3;
  width: 77vw;
}
.frame-group {
  position: absolute;
  top: 20em;
  left: 2.81em;
  width: 77vw;
  gap: 1.5em;
}
.swipe-down {
  position: absolute;
  top: 0.75em;
  left: 10.94em;
  border-radius: 25px;
  background-color: #cad0e4;
  width: 2.63em;
  height: 0.31em;
}
.connect {
  position: relative;
  background-color: #fff;
  box-sizing: border-box;
  width: 100%;
  height: 47.44em;
  overflow: hidden;
  text-align: center;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
