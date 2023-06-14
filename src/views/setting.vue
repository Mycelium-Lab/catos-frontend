<template>
  <default-setting>
    <div class="user-nav">
      <div class="info-user">
        <div class="nav-bar">
          <div class="tags-grey">
            <!--<img class="bg-hover-icon" alt="" src="./public/bg-hover.svg" />-->

            <b class="tag">Кредитор</b>
          </div>
          <div class="buttons-icon-outline-arr-parent">
            <div class="buttons-icon-outline-arr">
              <div class="bg"></div>
              <img class="bell-icon" alt="" src="./public/bell.svg" />

              <div class="status">
                <img class="mask-icon" alt="" src="./public/mask.svg" />

                <b class="b">+1 </b>
              </div>
            </div>
            <div class="buttons-icon-outline-arr">
              <div class="bg"></div>
              <img class="icon" alt="" src="./public/icon.svg" />
            </div>
          </div>
        </div>
        <div class="tags-grey1">
          <!--<img class="bg-hover-icon" alt="" src="./public/bg-hover.svg" />-->

          <b class="tag">Кредитор</b>
        </div>
        <div class="fields-and-photo-and-name">
          <div class="photo-and-name">
            <div class="photo" @click="() => (isLoadPhoto = true)">
              <img
                class="img-icon"
                alt=""
                src="./public/img@2x.png"
                id="imgImage"
                v-if="!isLoadPhoto"
              />

              <!--<img class="status-icon" alt="" src="./public/status.svg" />-->

              <div class="vector-parent" v-if="isLoadPhoto">
                <input type="file" class="input-upload" @change="upload" />
                <div class="upload-cloud-parent">
                  <img
                    class="upload-cloud-icon"
                    alt=""
                    src="@/assets/images/uploadcloud.svg"
                  />

                  <div class="div4">Загрузить фото</div>
                </div>
              </div>
            </div>
            <div class="name">
              <b class="name1">Валентин Иванович Бабаев</b>
              <div class="job-title">Кредитор</div>
            </div>
          </div>
          <div class="fields-edit">
            <div class="frame-parent">
              <div class="iconsmail-parent">
                <img class="iconsmail" alt="" src="./public/iconsmail.svg" />

                <div class="alesso-waitsongmailcom">
                  Alesso Waitson@gmailcom
                </div>
              </div>
              <img
                class="iconsedit-outline"
                alt=""
                src="./public/iconseditoutline.svg"
                @click="() => (isChangeEmail = true)"
              />
            </div>
            <div class="frame-parent">
              <div class="iconsmail-parent">
                <img class="iconsmail" alt="" src="./public/iconsmobile.svg" />
                <div class="div5">+390-999-00-01</div>
              </div>
              <img
                class="iconsedit-outline"
                alt=""
                src="./public/iconseditoutline.svg"
                @click="() => (isChangePhone = true)"
              />
            </div>
            <div class="frame-container">
              <div class="iconsmail-parent">
                <img class="iconsmail" alt="" src="./public/iconslock.svg" />

                <div class="parent">
                  <div class="div6">**********</div>
                  <img
                    class="iconspassword"
                    alt=""
                    src="./public/password.png"
                  />
                </div>
              </div>
              <img
                class="iconsedit-outline2"
                alt=""
                src="./public/iconseditoutline.svg"
                id="iconseditOutline2"
                @click="() => (isChangePassword = true)"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="field-buttons">
        <router-link
          class="field-button"
          id="fieldButtonContainer"
          :to="{ name: 'transaction-history' }"
        >
          <div class="api">История транзакций</div>
          <img class="iconchange" alt="" src="./public/iconchange.svg" />
        </router-link>
        <div
          class="field-button"
          id="fieldButtonContainer1"
          @click="() => (isScrinnig = true)"
        >
          <div class="api">Настроить API</div>
          <img class="iconchange" alt="" src="./public/iconchange.svg" />
        </div>
        <div class="field-button2">
          <div class="api">Изменить кошелек</div>
          <img class="iconchange" alt="" src="./public/iconchange.svg" />
        </div>
        <div class="field-button2">
          <div class="api">Изменить данные компании</div>
          <img class="iconchange" alt="" src="./public/iconchange.svg" />
        </div>
        <div class="field-button-switch">
          <div class="div10">Двухфакторная авторизация</div>
          <catos-switch />
        </div>
        <div class="tags-grey2">
          <!--<img class="bg-hover-icon" alt="" src="./public/bg-hover.svg" />-->

          <b class="tag">Кредитор</b>
        </div>
      </div>
    </div>
    <change-email
      v-if="isChangeEmail"
      @close="() => (isChangeEmail = false)"
    ></change-email>
    <change-phone
      v-if="isChangePhone"
      @close="() => (isChangePhone = false)"
    ></change-phone>
    <change-password
      v-if="isChangePassword"
      @close="() => (isChangePassword = false)"
    ></change-password>
  </default-setting>
</template>

<script setup lang="ts">
import { ref } from "vue";
import defaultSetting from "@/components/layouts/default-setting.vue";
import catosSwitch from "@/components/ui-kit/catos-switch.vue";
import changeEmail from "@/components/setting/change-email.vue";
import changePhone from "@/components/setting/change-phone.vue";
import changePassword from "@/components/setting/change-password.vue";
import bottomSheet from "@/components/ui-kit/bottomsheet.vue";
import scrinning from "@/components/setting/scrinning.vue";
import authentication from "@/components/setting/authentication.vue";
import { useRouter } from "vue-router";

const isChangeEmail = ref(false);
const isChangePhone = ref(false);
const isChangePassword = ref(false);
const isLoadPhoto = ref(false);
const isScrinnig = ref(false);
const isAuth = ref(false);

const router = useRouter();

const upload = (ev: any) => {
  router.push({ name: "edit-photo" });
};
</script>

<style scoped lang="scss">
.battery-icon {
  position: absolute;
  height: 25.76%;
  width: 6.24%;
  top: 39.4%;
  right: 7.61%;
  bottom: 34.85%;
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
  color: #1c1c1c;
}
.bg-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 27.88em;
  height: 26.81em;
}
.div3 {
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
  font-family: "Lato", sans-serif;
}
.tags-grey {
  position: relative;
  width: 6.25em;
  height: 2.25em;
  background-color: #f5f5fa;
  border-radius: 8px;
}
.bg {
  position: absolute;
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
.bell-icon,
.mask-icon {
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.bell-icon {
  position: absolute;
  height: 55.56%;
  width: 55.56%;
  top: 22.22%;
  right: 22.22%;
  bottom: 22.22%;
  left: 22.22%;
}
.mask-icon {
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.b,
.mask-icon,
.status {
  position: absolute;
}
.b {
  height: 61.54%;
  width: 69.23%;
  top: 21.43%;
  left: 7.14%;
  font-size: 0.41em;
  line-height: 120%;
  display: none;
}
.status {
  height: 38.89%;
  width: 38.89%;
  top: 8.33%;
  right: 8.33%;
  bottom: 52.78%;
  left: 52.78%;
}
.buttons-icon-outline-arr {
  position: relative;
  width: 2.25em;
  height: 2.25em;
}
.icon {
  position: absolute;
  top: calc(50% - 0.88px);
  left: calc(50% - 6.75px);
  width: 0.84em;
  height: 0.14em;
}
.buttons-icon-outline-arr-parent,
.nav-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.buttons-icon-outline-arr-parent {
  justify-content: flex-start;
  gap: 0.88em;
  text-align: right;
  color: rgba(255, 255, 255, 0.96);
  font-family: Inter;
}
.nav-bar {
  width: 90%;
  justify-content: space-between;
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
  border-radius: 16px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  cursor: pointer;
}
.status-icon {
  position: absolute;
  top: calc(50% + 12px);
  left: calc(50% + 13px);
  width: 0.75em;
  height: 0.75em;
  display: none;
}
.frame-child {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 26px;
  width: 4.63em;
  height: 4.63em;
}
.upload-cloud-icon {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
}
.div4 {
  position: relative;
  font-size: 0.63em;
  line-height: 110%;
  font-weight: 300;
  display: inline-block;
  width: 6.6em;
  color: #2e3a59;
}
.upload-cloud-parent {
  position: absolute;
  top: 1.13em;
  left: 0.25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.3em;
}
.photo,
.vector-parent {
  width: 4.63em;
  height: 4.63em;
}
.vector-parent {
  position: absolute;
  top: 0em;
  left: 0;
  border: 1px dashed #a592dd;
  border-radius: var(--br-base);
  background: #e8ddff;
}
.photo {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  flex-shrink: 0;
}
.job-title,
.name1 {
  position: relative;
  line-height: 1.5em;
}
.name1 {
  font-size: 1em;
  letter-spacing: 0.5px;
}
.job-title {
  font-size: 0.88em;
  color: #8181a5;
}
.name,
.photo-and-name {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.name {
  color: #3b3b3b;
}
.photo-and-name {
  gap: 0.56em;
}
.iconsmail {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.alesso-waitsongmailcom {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.03em;
  line-height: 100%;
  font-weight: 500;
}
.iconsmail-parent {
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
.frame-parent {
  align-self: stretch;
  border-bottom: 1px solid rgba(165, 146, 221, 0.08);
  display: flex;
  flex-direction: row;
  padding: 1em 1.31em;
  align-items: center;
  justify-content: space-between;
}
.div5,
.div6 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.04em;
  line-height: 100%;
  font-weight: 500;
}
.div6 {
  letter-spacing: 0.02em;
  font-weight: 600;
}
.iconspassword {
  position: relative;
  width: 1.13em;
  height: 1.13em;
  overflow: hidden;
  flex-shrink: 0;
}
.parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.iconsedit-outline2 {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
  opacity: 0.5;
  cursor: pointer;
}
.frame-container {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 1em 1.31em;
  align-items: center;
  justify-content: space-between;
}
.fields-and-photo-and-name,
.fields-edit,
.info-user {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.fields-edit {
  align-self: stretch;
  align-items: flex-start;
  text-align: left;
}
.fields-and-photo-and-name,
.info-user {
  align-items: center;
}
.fields-and-photo-and-name {
  align-self: stretch;
  gap: 1em;
  color: #2e3a59;
  font-family: Inter;
}
.info-user {
  border-radius: 16px;
  background-color: #fff;
  border: 0.5px solid rgba(46, 58, 89, 0.08);
  box-sizing: border-box;
  width: 90%;
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
}
.field-button {
  border-radius: 8px;
  background-color: #f5f5fa;
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
  cursor: pointer;
  text-decoration: none;
  color: var(--color-darkslategray-100);
}
.api {
  position: relative;
  font-size: 0.88em;
  line-height: 140%;
  z-index: 0;
}
.field-button2 {
  border-radius: 8px;
  background-color: #f5f5fa;
  width: 90%;
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
.field-button,
.field-button2 {
  width: 90%;
}
.div10 {
  position: relative;
  font-size: 0.88em;
  line-height: 140%;
}
.handle,
.overlay {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  border-radius: 50%;
  background-color: #79747e;
  width: 1em;
  height: 1em;
  z-index: 1;
}
.overlay {
  border-radius: 100px;
  background-color: #1c1b1f;
  display: none;
  opacity: 0.08;
  z-index: 0;
}
.field-button-switch,
.handle-container,
.switch {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.handle-container {
  width: 2em;
  height: 2em;
  justify-content: center;
  position: relative;
  z-index: 0;
}
.field-button-switch,
.switch {
  box-sizing: border-box;
}
.switch {
  border-radius: 100px;
  background-color: #e7e0ec;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  width: 3.25em;
  height: 1.75em;
  justify-content: flex-start;
  cursor: pointer;
}
.field-button-switch {
  border-radius: 8px;
  background-color: #f5f5fa;
  width: 90%;
  padding: 0.5em 0.63em;
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
.field-buttons,
.user-nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.field-buttons {
  border-radius: 16px;
  background-color: #fff;
  border: 0.5px solid rgba(46, 58, 89, 0.08);
  box-sizing: border-box;
  width: 90%;
  padding: 1.06em 0;
  align-items: center;
  gap: 1em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
.user-nav {
  position: absolute;
  left: 1.3em;
  align-items: flex-start;
  gap: 0.63em;
  color: #8181a5;
  font-family: Lato;
  width: 100vw;
}
.home-icon {
  position: absolute;
  top: 0.38em;
  left: 0.75em;
  width: 1.88em;
  height: 1.88em;
  overflow: hidden;
}
.div11 {
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
.div12 {
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
.div13 {
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
.div14 {
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
.div15 {
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
.mask-icon1 {
  position: absolute;
  left: 7.14%;
}
.mask-icon1 {
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
.status1 {
  top: 0.63em;
  left: 8em;
  opacity: 0;
  z-index: 5;
  color: rgba(255, 255, 255, 0.96);
}
.status-icon1,
.status-icon2,
.status1,
.status2 {
  position: absolute;
  margin: 0 !important;
  width: 0.88em;
  height: 0.88em;
}
.status2 {
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
.div17 {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.01em;
  line-height: 130%;
  color: rgba(59, 59, 59, 0.6);
}
.group {
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
.span {
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
.frame-parent1,
.google-authentificator-io-parent {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent1 {
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
  width: 18.75em;
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
.div18 {
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
.frame-div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.buttonnext-parent {
  gap: 1em;
  color: #f3f3f3;
}
.frame-div {
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

.connect {
  position: absolute;
  top: 60em;
  left: 0;
  border-radius: 40px 40px 0 0;
  border: 1px solid rgba(0, 0, 0, 0.13);
  box-sizing: border-box;
  width: 24.38em;
  height: 48em;
  overflow: hidden;
}
.div {
  position: relative;
  width: 100%;
  height: 59.38em;
  overflow-y: auto;
  text-align: center;
  color: #3b3b3b;
  font-family: Inter;
}
.input-upload {
  width: 17vw;
  height: 5.4em;
  position: absolute;
  z-index: 20;
  opacity: 0;
  right: 0.1em;
}
.field-button {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
</style>
