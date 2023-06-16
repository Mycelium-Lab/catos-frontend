<template>
  <router-link class="nav-buttons" to="" @click="$router.go(-1)">
    <div class="buttonback">
      <div class="div22">Назад</div>
      <img class="search-icon" alt="" src="@/assets/images/search-icon.svg" />
    </div>
  </router-link>
  <default-wallet-overlay>
    <div class="div">
      <!--<img class="bg-icon" alt="" src="@/assets/images/bg.svg" />-->

      <!--  <div class="bg3"></div> -->
      <div class="header-parent">
        <div class="header1">
          <div class="div14">Вывод средств:</div>
        </div>
        <div class="frame-container">
          <div class="fieldsinputchoise-parent">
            <div class="fieldsinputchoise">
              <div class="div15">Выберите криптовалюту для отправки:</div>
              <catos-select
                placeholder="Россия"
                :options="options"
                :value="value"
                @selected="ev => (value = ev)"
              ></catos-select>
            </div>
            <img class="frame-child" alt="" src="@/assets/images/devider.svg" />

            <div class="fieldsinput-parent">
              <div class="fieldsinput">
                <div class="div16">Укажите сумму:</div>
                <input-data
                  :style="{ width: '100%' }"
                  placeholder="10 000 TON"
                ></input-data>
              </div>
              <div class="min-10-ton-parent">
                <div class="min-10-ton-container">
                  <span>Min:</span>
                  <span class="span8"> </span>
                  <span class="ton1">10 TON</span>
                </div>
                <div class="min-10-ton-container">
                  <span>Max:</span>
                  <span class="span8"> </span>
                  <span class="ton1">257 324 TON</span>
                </div>
              </div>
              <div class="ton3">
                <span class="span10">Балланс: </span>
                <span class="ton4">257 324 TON</span>
              </div>
            </div>
            <img class="frame-child" alt="" src="@/assets/images/devider.svg" />

            <div class="fieldsinput2">
              <div class="div18">Укажите адресс кошелька получателя:</div>
              <input-data
                placeholder="Введите адресс"
                :style="{ width: '100%' }"
              >
                <template v-slot:right-icon>
                  <img
                    src="@/components/login/public/iconsedit1.svg"
                    :width="20"
                    :height="20"
                  />
                </template>
              </input-data>
            </div>
          </div>
          <div class="frame-div">
            <div class="frame-wrapper">
              <div class="frame-parent1">
                <div class="alert-triangle-parent">
                  <img
                    class="alert-triangle-icon"
                    alt=""
                    src="@/assets/images/alerttriangle.svg"
                  />

                  <div class="div20">Внимание!</div>
                </div>
                <div class="the-open-network">
                  Указывайте адрес получаетля только в сети The open Network
                  (TON). Иначе монеты могут быть утеряны навсегда
                </div>
              </div>
            </div>
            <div class="frame-wrapper1">
              <div class="frame-wrapper2">
                <div class="buttonnext-group">
                  <div class="buttonnext" @click="() => (witrow = true)">
                    <b class="ton-kepeer">Отправить</b>
                  </div>
                  <div class="buttonnext2">
                    <div class="div21">Отмена</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <success v-if="witrow"></success>
  </default-wallet-overlay>
</template>

<script setup lang="ts">
import { ref } from "vue";
import inputData from "../fields/input-data.vue";
import catosSelect from "@/components/fields/catos-select.vue";
import defaultWalletOverlay from "../layouts/default-wallet-overlay.vue";
import successScrinning from "../setting/success-scrinning.vue";
import success from "@/components/wallet/withrow/success.vue";
import fail from "@/components/wallet/withrow/fail.vue";

const witrow = ref(false);
const value = ref("");
const options = {
  sng: ["Россия", "Украина", "Казахстан"],
  euro: ["Польша", "Латвия", "Молдова"],
};
</script>

<style scoped lang="scss">
.battery-icon {
  position: absolute;
  height: 25.76%;
  width: 6.24%;
  top: 39.4%;
  right: 7.61%;
  bottom: 34.84%;
  left: 86.15%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.wifi-icon {
  position: relative;
  width: 0.95em;
  height: 0.69em;
}
.mobile-signal-icon {
  position: relative;
  width: 1.06em;
  height: 0.67em;
}
.div1 {
  position: absolute;
  height: 85.71%;
  width: 100%;
  top: 9.52%;
  left: 0;
  font-size: 0.94em;
  letter-spacing: -0.02em;
  font-weight: 500;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.time-style {
  position: absolute;
  height: 47.73%;
  width: 13.85%;
  top: 27.27%;
  right: 80.77%;
  bottom: 25%;
  left: 5.38%;
}
.div2 {
  position: absolute;
  height: 85.71%;
  width: 100%;
  top: 9.52%;
  left: 0;
  font-size: 0.94em;
  letter-spacing: -0.02em;
  font-weight: 100;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.time-style1 {
  position: absolute;
  height: 47.73%;
  width: 13.85%;
  top: 27.27%;
  right: 80.77%;
  bottom: 25%;
  left: 5.38%;
  display: none;
  color: #fff;
}
.ui-bars-status-bars-white {
  position: absolute;
  top: 0;
  left: 0;
  width: 24.38em;
  height: 2.75em;
  text-align: center;
  color: #1c1c1c;
}
.bg-icon {
  position: absolute;
  top: -0.3em;
  left: -5em;
}
.catos {
  align-self: stretch;
  position: relative;
  font-size: 1.13em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
}
.header {
  position: absolute;
  top: 5.81em;
  left: 2.81em;
  border-radius: 7px;
  width: 18.75em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.span1 {
  font-weight: 600;
}
.span2 {
  font-weight: 500;
  font-family: Inter;
}
.span {
  font-size: 1em;
}
.usd1 {
  font-size: 0.88em;
}
.usd {
  position: relative;
  line-height: 130%;
}
.bg1,
.usd-wrapper {
  border-radius: 14px;
  background-color: rgba(165, 146, 221, 0.08);
}
.usd-wrapper {
  align-self: stretch;
  border: 1px solid rgba(165, 146, 221, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.88em 1.5em;
  align-items: flex-start;
  justify-content: flex-start;
}
.bg1 {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.graph-icon1 {
  position: absolute;
  width: 38.67%;
  top: calc(50% - 22.5px);
  right: 4%;
  left: 57.33%;
  max-width: 100%;
  overflow: hidden;
  height: 2.88em;
}
.number1 {
  position: absolute;
  top: calc(50% - 10.5px);
  left: 0;
  font-size: 1em;
  line-height: 130%;
  font-weight: 600;
}
.numbers1 {
  position: relative;
  width: 7.19em;
  height: 1.31em;
}
.title1 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  color: #8181a5;
}
.numbers-group {
  position: absolute;
  top: calc(50% - 21.5px);
  left: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.counters-graph-web1 {
  position: relative;
  border-radius: 13px;
  border: 1px solid rgba(165, 146, 221, 0.08);
  box-sizing: border-box;
  width: 18.75em;
  height: 5.31em;
  overflow: hidden;
  flex-shrink: 0;
}
.span3 {
  font-size: 1.25em;
}
.number2 {
  position: absolute;
  top: calc(50% - 13px);
  left: 0;
  line-height: 130%;
  font-weight: 600;
}
.numbers2 {
  position: relative;
  width: 8.38em;
  height: 1.63em;
}
.numbers-container {
  position: absolute;
  top: calc(50% - 23.5px);
  left: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.text {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.buttons-tabs {
  align-self: stretch;
  border-radius: 25px;
  background-color: rgba(87, 126, 247, 0.96);
  height: 2em;
  display: flex;
  flex-direction: row;
  padding: 0.44em 5.5em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.des-and-bbn,
.text-and-button,
.user-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.text-and-button {
  width: 17.25em;
  gap: 0.81em;
}
.des-and-bbn,
.user-nav {
  border-radius: 16px;
}
.des-and-bbn {
  background-color: #f9fbff;
  width: 18.75em;
  padding: 0.75em;
  box-sizing: border-box;
  text-align: right;
  color: #fefefe;
}
.user-nav {
  position: absolute;
  top: 7.81em;
  left: 1.5em;
  background-color: #fff;
  border: 1px solid rgba(165, 146, 221, 0.08);
  overflow: hidden;
  padding: 1em 1.31em;
  gap: 0.94em;
}
.div3 {
  position: relative;
  font-size: 0.88em;
  line-height: 140%;
  z-index: 0;
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
.des-and-bbn1,
.field-button {
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
}
.field-button {
  border-radius: 8px;
  background-color: #f5f5fa;
  width: 17.25em;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  flex-direction: row;
  padding: 0.5em 0 0.5em 0.75em;
  align-items: center;
  position: relative;
}
.des-and-bbn1 {
  border-radius: 16px;
  width: 18.75em;
  flex-direction: column;
  padding: 0.75em;
  align-items: flex-start;
  gap: 1.13em;
}
.home-icon,
.user-nav1 {
  position: absolute;
  overflow: hidden;
}
.user-nav1 {
  top: 36.44em;
  left: 1.5em;
  border-radius: 16px;
  background-color: #fff;
  border: 1px solid rgba(165, 146, 221, 0.08);
  display: flex;
  flex-direction: column;
  padding: 0.94em 1.31em;
  align-items: flex-start;
  justify-content: flex-start;
}
.home-icon {
  top: 0.38em;
  left: 0.75em;
  width: 1.88em;
  height: 1.88em;
}
.div6 {
  position: absolute;
  top: 3.6em;
  left: 1.1em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
}
.container,
.iconsmenu {
  width: 3.38em;
  height: 3.38em;
}
.container {
  position: relative;
}
.iconsmenu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 0;
}
.basket-icon {
  position: absolute;
  top: 0.38em;
  left: 0.73em;
  width: 1.88em;
  height: 1.88em;
  overflow: hidden;
}
.div7 {
  position: absolute;
  top: 3.6em;
  left: 1.02em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
}
.iconsmenu1 {
  width: 3.38em;
  height: 3.38em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.news-icon {
  position: absolute;
  top: 0.38em;
  left: 0.77em;
  width: 1.88em;
  height: 1.88em;
  overflow: hidden;
}
.div8 {
  position: absolute;
  top: 3.6em;
  left: 0.2em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
  height: 100vh;
}
.iconsmenu2 {
  width: 3.38em;
  height: 3.38em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.div9 {
  position: absolute;
  top: 3.6em;
  left: 0.05em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
}
.iconsmenu3 {
  width: 3.38em;
  height: 3.38em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;
}
.div10 {
  position: absolute;
  top: 3.6em;
  left: 0.6em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
  background: linear-gradient(rgba(48, 51, 55, 0.9), rgba(48, 51, 55, 0.9)),
    rgba(93, 104, 123, 0.9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.wallet-money-cash-svgrepo-com-icon {
  position: absolute;
  top: 0.41em;
  left: 0.81em;
  width: 1.81em;
  height: 1.81em;
  overflow: hidden;
}
.iconsmenu4 {
  width: 3.38em;
  height: 3.38em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 4;
}
.b,
.mask-icon {
  position: absolute;
  left: 7.14%;
}
.mask-icon {
  height: 85.71%;
  width: 85.71%;
  top: 7.14%;
  right: 7.14%;
  bottom: 7.14%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.b {
  height: 61.54%;
  width: 69.23%;
  top: 21.43%;
  font-size: 0.41em;
  line-height: 120%;
  display: inline-block;
}
.status {
  top: 0.63em;
  left: 8em;
  opacity: 0;
  z-index: 5;
  color: rgba(255, 255, 255, 0.96);
}
.status,
.status-icon,
.status-icon1,
.status1 {
  position: absolute;
  margin: 0 !important;
  width: 0.88em;
  height: 0.88em;
}
.status1 {
  top: 0.63em;
  left: 8em;
  opacity: 0;
  z-index: 6;
  color: rgba(255, 255, 255, 0.96);
}
.status-icon,
.status-icon1 {
  top: 0.69em;
}
.status-icon {
  left: 16.75em;
  display: none;
  z-index: 7;
}
.status-icon1 {
  left: 12.5em;
  opacity: 0;
  z-index: 8;
}
.nav-menu {
  position: absolute;
  bottom: 0;
  left: calc(50% - 195px);
  border-radius: 20px 20px 0 0;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  width: 24.38em;
  display: flex;
  flex-direction: row;
  padding: 0.5em 2em 1.25em;
  align-items: center;
  justify-content: space-between;
  text-align: right;
  color: rgba(93, 104, 123, 0.9);
}
.p {
  margin: 0;
}
.div12 {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.01em;
  line-height: 130%;
  color: rgba(59, 59, 59, 0.6);
}
.parent {
  position: absolute;
  top: 2.25em;
  left: 2.81em;
  border-radius: 7px;
  width: 18.75em;
  display: flex;
  flex-direction: column;
  padding: 0.44em 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 0.75em;
}
.span4 {
  letter-spacing: 0.01em;
}
.google-authentificator-container {
  position: absolute;
  top: 25.92em;
  left: 3.75em;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
  display: inline-block;
  width: 25em;
}
.connect-child {
  position: absolute;
  top: 6em;
  left: -74.19em;
  width: 98.44em;
  height: 9.94em;
}
.iconsstatus-transaction {
  position: absolute;
  top: 9.38em;
  left: 7.75em;
  width: 8.88em;
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
.frame-group,
.google-authentificator-io-parent {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-group {
  width: 18.75em;
  flex-direction: row;
  gap: 0.75em;
  text-align: left;
}
.google-authentificator-io-parent {
  flex-direction: column;
  gap: 1em;
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
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.div13 {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.01em;
  line-height: 120%;
  font-weight: 300;
  color: rgba(59, 59, 59, 0.7);
  display: inline-block;
  width: 25em;
}
.buttonnext-parent,
.frame-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.buttonnext-parent {
  gap: 1em;
  color: #f3f3f3;
}
.frame-parent {
  position: absolute;
  top: 24.19em;
  left: 2.81em;
  width: 18.75em;
  gap: 1.5em;
  cursor: pointer;
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
.bg3,
.connect {
  position: absolute;
  left: 0;
  width: 24.38em;
}
.connect {
  top: 60em;
  border-radius: 40px 40px 0 0;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.13);
  box-sizing: border-box;
  height: 48em;
  overflow: hidden;
  text-align: center;
}
.bg3 {
  top: 0;
  background-color: rgba(166, 146, 221, 0.2);
  backdrop-filter: blur(4px);
  height: 100vh;
  width: 100vw;
}
.div14 {
  position: relative;
  font-size: 1em;
  line-height: 130%;
  font-weight: 600;
}
.header1 {
  position: absolute;
  top: 1.5em;
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
.div15,
.text3 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.text3 {
  font-size: 0.88em;
  line-height: 120%;
}
.iconchange5 {
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
.fields-password-and-mail,
.fieldsinputchoise {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.fields-password-and-mail {
  align-self: stretch;
  border-radius: 16px;
  border: 0.5px solid #2e3a59;
  box-sizing: border-box;
  height: 2.5em;
  padding: 0.5em 0.75em;
  justify-content: center;
  color: #2e3a59;
}
.fieldsinputchoise {
  width: 100%;
  justify-content: flex-start;
  gap: 0.63em;
}
.frame-child {
  position: relative;
  width: 18.69em;
  height: 0.13em;
}
.div16 {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
}
.iconsmail {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
}
.span5 {
  font-weight: 500;
}
.span6 {
  color: #2e3a59;
}
.span7 {
  color: rgba(0, 0, 0, 0.04);
}
.ton {
  font-weight: 300;
  color: #8181a5;
}
.div17 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
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
  padding: 0.25em 0;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.fieldsinput,
.fieldsinput1 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
}
.fieldsinput1 {
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
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
  width: 100%;
  z-index: 0;
}
.span8 {
  color: rgba(165, 146, 221, 0.7);
}
.ton1 {
  color: #a592dd;
}
.min-10-ton-container {
  position: relative;
  font-size: 0.63em;
  line-height: 1em;
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
.span10 {
  font-weight: 300;
}
.ton4 {
  text-decoration: underline;
  color: rgba(87, 126, 247, 0.96);
}
.ton3 {
  position: absolute;
  margin: 0 !important;
  top: -0.1em;
  right: 0;
  font-size: 0.63em;
  line-height: 1em;
  z-index: 2;
  color: #2e3a59;
}
.fieldsinput-parent {
  border-radius: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 0.63em;
}
.div18,
.div19 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
}
.div19 {
  font-size: 0.88em;
  letter-spacing: 0.03em;
  line-height: 130%;
  font-weight: 300;
}
.fields-password-and-mail1,
.group {
  display: flex;
  justify-content: space-between;
}
.group {
  align-self: stretch;
  flex-direction: row;
  padding: 0.25em 0;
  align-items: center;
}
.fields-password-and-mail1 {
  border-radius: 16px;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  width: 18.75em;
  height: 2.5em;
  flex-direction: column;
  padding: 0.5em 0.75em;
  align-items: flex-start;
  color: rgba(59, 59, 59, 0.5);
}
.fieldsinput2,
.fieldsinputchoise-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
  width: 100%;
}
.fieldsinputchoise-parent {
  gap: 1.75em;
}
.alert-triangle-icon,
.div20 {
  position: relative;
  flex-shrink: 0;
}
.alert-triangle-icon {
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
}
.div20 {
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
  display: inline-block;
  width: 17.57em;
}
.alert-triangle-parent {
  display: flex;
  flex-direction: row;
  align-items: self-end;
  justify-content: flex-start;
  gap: 0.63em;
}
.the-open-network {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
  width: 100%;
}
.frame-parent1,
.frame-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent1 {
  flex: 1;
  flex-direction: column;
  gap: 0.25em;
  width: 70vw;
}
.frame-wrapper {
  border-radius: 11px;
  background-color: rgba(253, 214, 116, 0.2);
  width: 100%;
  flex-direction: row;
  padding: 0.63em 0.75em;
  box-sizing: border-box;
}
.buttonnext2,
.div21 {
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
}
.div21 {
  position: relative;
  font-size: 0.88em;
  line-height: 2em;
  display: flex;
  width: 7.64em;
}
.buttonnext2 {
  border-radius: 20px;
  width: 18.75em;
  height: 3em;
  overflow: hidden;
  display: none;
  flex-direction: row;
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  color: rgba(38, 38, 38, 0.62);
}
.buttonnext-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.38em;
  width: 100%;
}
.frame-wrapper2 {
  align-self: stretch;
  align-items: flex-start;
}
.frame-container,
.frame-div,
.frame-wrapper1,
.frame-wrapper2 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.frame-wrapper1 {
  width: 100%;
  align-items: center;
  text-align: center;
  color: #f3f3f3;
}
.frame-container,
.frame-div {
  align-items: flex-start;
  gap: 1.5em;
}
.frame-div {
  width: 100%;
}
.frame-container {
  position: relative;
  top: 5em;
  gap: 3em;
  padding: 0px 45px;
  padding-bottom: 20px;
}
.header-parent,
.swipe-down1 {
  position: absolute;
  top: 0.75em;
  left: 10.81em;
  border-radius: 25px;
  background-color: #cad0e4;
  width: 2.63em;
  height: 0.31em;
}
.header-parent {
  left: 0;
  border-radius: 30px 30px 0 0;
  background-color: #fff;
  box-shadow: 0 12px 12px rgba(151, 71, 255, 0.04);
  height: 100%;
  overflow: hidden;
  width: 100vw;
  overflow-y: auto;
}
.div22 {
  position: absolute;
  top: 0.43em;
  left: 3.29em;
  font-size: 0.88em;
  line-height: 2em;
  font-weight: 300;
}
.search-icon {
  position: absolute;
  top: calc(50% - 20px);
  right: 3.88em;
  border-radius: 10px;
  width: 2.5em;
  height: 2.5em;
  overflow: hidden;
}
.buttonback {
  position: relative;
  border-radius: 9px;
  background-color: rgba(251, 251, 251, 0.42);
  width: 6.38em;
  height: 2.5em;
  top: 2.6em;
  left: 0em;
  color: rgba(59, 59, 59, 1);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.nav-buttons {
  position: absolute;
  top: 2em;
  left: 1.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  z-index: 100;
}
.div {
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 80vh;
  overflow-y: auto;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
  overflow-x: hidden;
  z-index: 2000;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  font-size: 1rem;
}
</style>
