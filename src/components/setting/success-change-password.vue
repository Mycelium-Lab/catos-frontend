<template>
  <modal>
    <div class="bg1"></div>
    <div class="fieldsregistration-options">
      <div class="fields-password-and-mail2">
        <div class="iconslock-container">
          <div class="div18">Пароль</div>
        </div>
      </div>
      <div class="fields-password-and-mail3">
        <div class="iconslock-container"></div>
      </div>
      <div class="div20">
        <span>Придумайте пароль</span>
        <span class="span">*</span>
      </div>
      <div class="div21">
        <span>Повторите пароль </span>
        <span class="span">*</span>
      </div>
      <div class="text-and-fill">
        <div class="div22">
          <span>Пароль </span>
          <span class="span">*</span>
        </div>
      </div>
    </div>
    <div class="decor-parent">
      <div class="decor"></div>
      <div class="frame-parent3">
        <div class="fields-parent">
          <div class="fields">
            <div class="fieldsregistration-options1">
              <div class="text-and-fill1">
                <img class="success-image" src="@/assets/images/success.svg" />
                <h3 class="title-info">Пароль успешно изменен</h3>
                <span class="div28">
                  Пароль повиться в вашем профиле, приятного использования
                </span>
              </div>

              <catos-button
                @click="toProfile"
                :style="{ width: '74vw', top: '13em', left: '1.3em' }"
                >Вернуться в профиль</catos-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script setup lang="ts">
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import modal from "../ui-kit/modal.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const toProfile = () => {
  router.push({ name: "setting" });
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
.div9 {
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
.bg-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 27.88em;
  height: 26.81em;
}
.div11 {
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
  padding: 0.44em 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.bg-hover-icon {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 8px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.tag {
  position: absolute;
  top: calc(50% - 11px);
  left: 1.21em;
  font-size: 0.88em;
  line-height: 1.5em;
}
.tags-grey {
  position: relative;
  width: 6.25em;
  height: 2.25em;
}
.bg,
.icon {
  position: absolute;
}
.bg {
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #ececf2;
  box-sizing: border-box;
}
.icon {
  top: calc(50% - 9px);
  left: calc(50% - 9px);
  font-size: 1.13em;
}
.buttons-icon-outline-arr {
  position: relative;
  width: 2.25em;
  height: 2.25em;
  font-family: fa-solid-900;
}
.tags-grey-parent {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10.25em;
}
.tags-grey1 {
  position: relative;
  width: 6.25em;
  height: 2.25em;
  display: none;
}
.img-icon {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 27px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
}
.status-icon {
  position: absolute;
  top: calc(50% + 22px);
  left: calc(50% + 23px);
  width: 0.75em;
  height: 0.75em;
  display: none;
}
.img {
  position: relative;
  width: 4.63em;
  height: 4.63em;
}
.job-title,
.name {
  position: relative;
  line-height: 1.5em;
}
.name {
  font-size: 1em;
  letter-spacing: 0.5px;
}
.job-title {
  font-size: 0.88em;
  color: #8181a5;
}
.img-parent,
.name-parent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.img-parent {
  gap: 0.56em;
}
.alesso-waitsongmailcom {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.03em;
  line-height: 100%;
  font-weight: 500;
}
.iconsmail-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.13em;
}
.iconsedit-outline {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
  opacity: 0.5;
}
.frame-div {
  align-self: stretch;
  border-bottom: 1px solid rgba(165, 146, 221, 0.08);
  display: flex;
  flex-direction: row;
  padding: 1em 1.31em;
  align-items: center;
  justify-content: space-between;
}
.iconsmobile {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.div12 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.04em;
  line-height: 100%;
  font-weight: 500;
}
.frame-parent1 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 1em 1.31em;
  align-items: center;
  justify-content: space-between;
}
.div13 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 100%;
  font-weight: 600;
}
.iconspassword1 {
  position: relative;
  width: 1.13em;
  height: 1.13em;
  overflow: hidden;
  flex-shrink: 0;
}
.group {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.frame-container,
.frame-group,
.tables-contacts-grid-01 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.frame-container {
  align-self: stretch;
  align-items: flex-start;
  text-align: left;
  color: #2e3a59;
}
.frame-group,
.tables-contacts-grid-01 {
  align-items: center;
}
.frame-group {
  align-self: stretch;
  gap: 1em;
  color: #3b3b3b;
  font-family: Inter;
}
.tables-contacts-grid-01 {
  border-radius: 16px;
  background-color: #fff;
  border: 0.5px solid rgba(46, 58, 89, 0.08);
  box-sizing: border-box;
  width: 21.38em;
  padding: 1.06em 0;
  gap: 1.5em;
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
.api {
  position: relative;
  font-size: 0.88em;
  line-height: 140%;
  z-index: 0;
}
.api-parent {
  border-radius: 8px;
  background-color: #f5f5fa;
  width: 18.75em;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0 0.5em 0.75em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  position: relative;
}
.div17 {
  position: relative;
  font-size: 0.88em;
  line-height: 140%;
}
.handle,
.overlay {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 10px);
  left: calc(50% - 10px);
  border-radius: 50%;
  background-color: #fff;
  width: 1.25em;
  height: 1.25em;
  z-index: 1;
}
.overlay {
  top: calc(50% - 12px);
  left: calc(50% - 12px);
  border-radius: 100px;
  background-color: #6750a4;
  width: 1.5em;
  height: 1.5em;
  display: none;
  opacity: 0.08;
  z-index: 0;
}
.handle-container {
  width: 2em;
  height: 2em;
  justify-content: center;
  position: relative;
  z-index: 0;
}
.handle-container,
.parent4,
.switch {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.switch {
  border-radius: 100px;
  background-color: #a592dd;
  width: 3.25em;
  height: 1.75em;
  justify-content: flex-end;
}
.parent4 {
  border-radius: 8px;
  background-color: #f5f5fa;
  width: 18.75em;
  padding: 0.5em 0.63em;
  box-sizing: border-box;
  justify-content: space-between;
}
.tags-grey2 {
  position: relative;
  width: 6.25em;
  height: 2.25em;
  display: none;
  text-align: center;
  color: #8181a5;
  font-family: Lato;
}
.tables-contacts-grid-01-parent,
.tables-contacts-grid-011 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.tables-contacts-grid-011 {
  border-radius: 16px;
  background-color: #fff;
  border: 0.5px solid rgba(46, 58, 89, 0.08);
  box-sizing: border-box;
  width: 21.38em;
  padding: 1.06em 0;
  align-items: center;
  gap: 1em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
.tables-contacts-grid-01-parent {
  position: absolute;
  top: 8.56em;
  left: 1.5em;
  align-items: flex-start;
  gap: 0.63em;
  color: #8181a5;
  font-family: Lato;
}

.div18 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.03em;
  line-height: 120%;
}
.iconslock-container {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.fields-password-and-mail2,
.fields-password-and-mail3 {
  position: absolute;
  height: 22.35%;
  width: 87.72%;
  top: 24.02%;
  right: 6.14%;
  bottom: 53.63%;
  left: 6.14%;
  border-radius: 16px;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0 0.75em;
  align-items: flex-start;
  justify-content: center;
  color: rgba(46, 58, 89, 0.36);
}
.fields-password-and-mail3 {
  top: 66.48%;
  bottom: 11.17%;
}
.span {
  color: red;
}
.div20,
.div21 {
  position: absolute;
  top: 15.04%;
  left: 6.14%;
  font-size: 0.63em;
  letter-spacing: 0.4px;
  line-height: 110%;
  font-weight: 300;
}
.div21 {
  top: 57.5%;
  left: 7.02%;
}
.div22 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 1px;
  line-height: 0.71em;
  font-weight: 500;
}
.text-and-fill {
  position: absolute;
  top: -0.31em;
  left: 1.13em;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 0 0.38em;
  align-items: flex-start;
  justify-content: flex-start;
}
.fieldsregistration-options {
  position: absolute;
  top: 19.13em;
  left: 2.13em;
  border-radius: 16px;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  width: 19.44em;
  height: 17.44em;
  text-align: left;
}
.home-icon {
  position: absolute;
  top: 0.38em;
  left: 0.75em;
  width: 1.88em;
  height: 1.88em;
  overflow: hidden;
}
.div23 {
  position: absolute;
  top: 3.6em;
  left: 1.1em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
}
.container1,
.iconsmenu {
  width: 3.38em;
  height: 3.38em;
}
.container1 {
  position: relative;
}
.iconsmenu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 0;
  color: rgba(48, 51, 55, 0.9);
}
.basket-icon {
  position: absolute;
  top: 0.38em;
  left: 0.73em;
  width: 1.88em;
  height: 1.88em;
  overflow: hidden;
}
.div24 {
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
.div25 {
  position: absolute;
  top: 3.6em;
  left: 0.2em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
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
.div26 {
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
  color: rgba(48, 51, 55, 0.9);
}
.div27 {
  position: absolute;
  top: 3.6em;
  left: 0.6em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
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
.b1,
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
.b1 {
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
.status-icon1,
.status-icon2,
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
.status-icon1,
.status-icon2 {
  top: 0.69em;
  left: 16.75em;
  z-index: 7;
}
.status-icon2 {
  left: 12.5em;
  opacity: 0;
  z-index: 8;
}
.decor,
.nav-menu {
  position: absolute;
  box-sizing: border-box;
}
.nav-menu {
  bottom: 0;
  left: calc(50% - 195px);
  border-radius: 20px 20px 0 0;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  width: 24.38em;
  display: flex;
  flex-direction: row;
  padding: 0.5em 2em 1.25em;
  align-items: center;
  justify-content: space-between;
  text-align: right;
  color: rgba(93, 104, 123, 0.9);
}
.decor {
  top: 3.75em;
  left: 1em;

  width: 90%;
  height: 24.69em;
}
.job-title1 {
  position: relative;
  font-size: 1.13em;
  line-height: 1.17em;
  font-weight: 600;
}
.job-title-wrapper {
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 0 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
}
.fieldsregistration-options-child {
  position: absolute;
  width: 100%;
  top: calc(50% - 49.5px);
  right: 0;
  left: 0;
  backdrop-filter: blur(5px);
  border: none;
  box-sizing: border-box;
  height: 21em;
}
.div28 {
  font-size: 0.75em;
  line-height: 0.71em;
  font-weight: 300;
  text-align: center;
  color: rgba(59, 59, 59, 0.96);
  line-height: 140%;
}
.div29,
.text-and-fill1 {
  position: absolute;
  display: flex;
  width: 100%;
}
.text-and-fill1 {
  top: 0;
  background: none;
  flex-direction: column;
  padding: 0 0.38em;
  align-items: center;
}
.div29 {
  width: 84.21%;
  top: 72.48%;
  left: 6.14%;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
  color: #78789a;
  align-items: center;
}
.koa {
  letter-spacing: 0.02em;
}
.hyan123 {
  letter-spacing: 0.03em;
}
.alessowaitsongmailcom {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 100%;
  font-weight: 500;
}
.iconsmail-container {
  width: 15.81em;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.fieldsregistration-options1 {
  position: relative;
  width: 100%;
  height: 11.7em;
  z-index: 0;
  background: #f6f4fc;
  border-radius: var(--br-base);
}
.icon1 {
  position: absolute;
  margin: 0 !important;
  height: calc(100% - 69px);
  top: 1.56em;
  right: 1.31em;
  bottom: 2.75em;
  border-radius: 0 16px 16px 0;
  max-height: 100%;
  width: 2.5em;
  display: none;
  z-index: 1;
}
.fields {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 1.75em;
  width: 100%;
}
.fieldsregistration-options-item {
  position: absolute;
  width: 100%;
  top: calc(50% - 103.5px);
  right: 0;
  left: 0;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 0.5px solid rgba(46, 58, 89, 0.4);
  box-sizing: border-box;
  height: 11.38em;
}
.div32 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
}
.fields-password-and-mail5 {
  position: absolute;
  width: calc(100% - 42px);
  top: calc(50% - 47.5px);
  right: 1.31em;
  left: 1.31em;
  border-radius: 16px;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  height: 2.5em;
  overflow: hidden;
  display: none;
  flex-direction: column;
  padding: 0 0.75em;
  align-items: flex-start;
  justify-content: center;
  color: #2e3a59;
  font-family: Poppins;
}
.koahyan123gmailcom1 {
  color: #3b3b3b;
}
.koahyan123gmailcom {
  position: absolute;
  top: 11.42%;
  left: 6.14%;
  font-size: 0.63em;
  line-height: 1em;
  font-weight: 300;
  text-decoration: none;
  color: rgba(59, 59, 59, 0.58);
}
.span5 {
  color: rgba(59, 59, 59, 0.68);
}
.span6 {
  color: #000;
}
.div33 {
  position: absolute;
  top: 17.81%;
  left: 6.14%;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
  color: rgba(59, 59, 59, 0.58);
}
.iconssend {
  position: relative;
  border-radius: 2px;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.div34,
.div35 {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.02em;
  line-height: 120%;
}
.div35 {
  font-size: 0.88em;
  background: linear-gradient(
    38.6deg,
    #2e2c2c,
    #4b4949 67.46%,
    #131313,
    rgba(0, 0, 0, 0.94),
    #434343
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.frame,
.frame-parent4 {
  display: flex;
  align-items: center;
}
.frame {
  border-radius: 8px;
  background-color: rgba(253, 214, 116, 0.39);
  flex-direction: column;
  padding: 0.13em 0.69em;
  justify-content: center;
}
.frame-parent4 {
  align-self: stretch;
  flex-direction: row;
  justify-content: space-between;
}
.fieldsregistration-options-inner {
  position: absolute;
  width: calc(100% - 42px);
  top: 9.38em;
  right: 1.31em;
  left: 1.31em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: Poppins;
}
.div36 {
  position: relative;
  font-size: 1.25em;
  line-height: 125%;
  font-weight: 500;
}
.component-4 {
  border-radius: 15px;
  border: 1px solid #70ca98;
  box-sizing: border-box;
  width: 2.7em;
  height: 2.7em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
}
.inputfields {
  position: absolute;
  top: 4.19em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 0.31em;
  color: #2e3a59;
  width: 100%;
}
.fieldsregistration-options2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 13.69em;
}
.div41 {
  position: absolute;
  top: 67.55%;
  left: 6.14%;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
  color: red;
}
.div30,
.text {
  position: relative;
}
.div30 {
  width: 100%;
  height: 11.75em;
}
.text {
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.buttons-tabs,
.buttons-tabs1 {
  align-self: stretch;
  border-radius: 25px;
  box-sizing: border-box;
  height: 2em;
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
}
.buttons-tabs {
  background-color: rgba(87, 126, 247, 0.96);
  cursor: pointer;
}
.buttons-tabs1 {
  border: 0.5px solid rgba(87, 126, 247, 0.96);
  color: #555562;
}
.text-and-button {
  align-self: stretch;
  flex: 1;
  align-items: flex-start;
  gap: 0.81em;
}
.des-and-bbn,
.fields-parent,
.frame-parent3,
.text-and-button {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.des-and-bbn {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f9fbff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  padding: 0.75em 1.31em;
  align-items: flex-start;
  text-align: right;
  color: #fefefe;
  margin-top: 15em;
}
.fields-parent,
.frame-parent3 {
  align-items: center;
}
.fields-parent {
  padding-bottom: 1.75em;
  gap: 1em;
  text-align: left;
  width: 85vw;
}
.frame-parent3 {
  position: absolute;
  top: 3em;
  left: 1.5em;
  height: 34.06em;
  gap: 0.38em;
}
.span8 {
  letter-spacing: 0.01em;
}
.div42,
.div43 {
  position: relative;
  line-height: 130%;
}
.div42 {
  align-self: stretch;
  font-size: 0.63em;
  font-weight: 300;
}
.div43 {
  font-size: 0.75em;
  text-decoration: underline;
}
.message-circle-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
}
.frame-wrapper {
  border-radius: 16px;
  width: 18.75em;
  height: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  color: #2c56c0;
}
.frame-parent5,
.instance-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent5 {
  gap: 0.75em;
}
.instance-wrapper {
  position: absolute;
  top: 38.19em;
  left: 2.81em;
  color: rgba(59, 59, 59, 0.54);
}
.decor-parent {
  position: relative;
  top: 0em;
  left: 0;

  background-color: #fff;

  box-sizing: border-box;
  width: 100vw;
  height: 50.88em;
}
.div44 {
  left: 3.29em;
  font-size: 0.88em;
  line-height: 2em;
  font-weight: 300;
}
.search-icon {
  top: calc(50% - 20px);
  right: 3.88em;
  border-radius: 10px;
  width: 2.5em;
  height: 2.5em;
  overflow: hidden;
}

.div8 {
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 59.38em;
  overflow-y: auto;
  text-align: center;
  color: #3b3b3b;
  font-family: Inter;
}

.title-info {
  font-weight: 400;
  font-size: var(--font-size-base);
  line-height: 20.8px;
  margin: 0.5em 0em;
}
.success-image {
  margin-top: 0.9em;
}

@media (max-width: 375px) {
  .component-4 {
    width: 2.4em;
    height: 2.4em;
  }
}
@media (max-width: 340px) {
  .component-4 {
    width: 2.2em;
    height: 2.2em;
  }
}
</style>
