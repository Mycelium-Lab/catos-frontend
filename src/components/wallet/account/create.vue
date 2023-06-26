<template>
  <modal>
    <div class="wrapper">
      <div class="header">
        <div class="div28">Создание счета</div>
      </div>
      <div class="swipe-down"></div>
      <div class="des-1-2">
        <div class="des">
          <img class="des-child" alt="" src="@/assets/images/dialog.png" />

          <div class="div9">
            Здесь вы можете создать счёт для получения оплаты или сбора средств
            в криптовалюте.
          </div>
        </div>
      </div>
      <div class="field-info-parent">
        <div class="field-info">
          <div class="fieldsinputchoise">
            <div class="div10">
              <p class="p">Выберите тип счета:</p>
            </div>
            <catos-select
              placeholder="Россия"
              :options="options"
              :value="value"
              :optionWidth="77"
              :style="{ width: '100%' }"
              @selected="ev => (value = ev)"
            ></catos-select>
            <div class="div10">
              <p class="p">Выберите криптовалюту для получения оплаты</p>
            </div>
            <catos-select
              placeholder="Россия"
              :options="options"
              :value="value"
              :optionWidth="77"
              :style="{ width: '100%' }"
              @selected="ev => (value = ev)"
            ></catos-select>
          </div>
        </div>
        <div class="frame-group">
          <div class="fieldsinput-parent">
            <div class="fieldsinput">
              <div class="div11">Укажите сумму:</div>
              <input-data
                placeholder="10 000  TON"
                border=" 1px solid rgba(165, 146, 221, 0.4)"
                background="rgba(230, 221, 255, 0.3)"
                :style="{ width: '100%' }"
              ></input-data>
            </div>
            <div class="title-wrapper">
              <div class="title">(≈1 456 USD)</div>
            </div>
          </div>
          <div class="ton">
            <span class="span3">Балланс: </span>
            <span class="ton1">257 324 TON</span>
          </div>
        </div>
      </div>
      <div class="frame-wrapper-accounts">
        <div class="buttonnext-wrapper_create buttonnext-wrapper">
          <router-link
            class="buttonnext"
            :to="{ name: 'accounts-create-finish' }"
          >
            <b class="ton-kepeer">Создать счет</b>
          </router-link>
        </div>
      </div>
      <div class="component-wrapper-accounts">
        <div class="frame-container-accounts">
          <div class="frame-accounts">
            <div class="frame-parent-account">
              <div class="field-info">
                <div class="title1">
                  <span>Описание к счету:</span>
                  <span class="span4"> (не обязательно)</span>
                </div>
              </div>
              <textarea class="description-area"></textarea>
            </div>
            <!--<div class="frame-inner"></div>-->
            <div class="div13">
              Пользователи увидят это описание, когда вы поделитесь чеком, так
              же можно показать или скрыть кто поделился
            </div>
            <div class="author-parent">
              <div class="author">
                <img
                  class="img-icon"
                  alt=""
                  src="@/assets/images/edit-photo.png"
                />

                <div class="author1">Валентин Иванович</div>
              </div>
              <catos-switch checked></catos-switch>
            </div>
          </div>
          <div class="frmae-div-1 frame-accounts">
            <div class="frame-parent-account">
              <div class="field-info">
                <div class="title1">
                  <span>Укажите скрытое сообщение:</span>
                  <span class="span4"> (не обязательно)</span>
                </div>
              </div>
              <textarea class="description-area"></textarea>
            </div>
            <!--<div class="frame-inner"></div>-->
            <div class="div13">
              Пользователи увидят это сообщение после оплаты счёта
            </div>
            <div class="author-parent">
              <div class="author">
                <img
                  class="img-icon"
                  alt=""
                  src="@/assets/images/edit-photo.png"
                />

                <div class="author1">Валентин Иванович</div>
              </div>
              <catos-switch checked></catos-switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import modal from "@/components/ui-kit/modal.vue";
import inputData from "@/components/fields/input-data.vue";
import catosSelect from "@/components/fields/catos-select.vue";
import catosSwitch from "@/components/ui-kit/catos-switch.vue";
import copyPaste from "@/components/fields/copy-paste.vue";
const value = ref("");
const options = {
  sng: ["Россия", "Украина", "Казахстан"],
  euro: ["Польша", "Латвия", "Молдова"],
};
</script>

<style scoped lang="scss">
.wrapper {
  height: 1100px;
}
.div28 {
  position: relative;
  font-size: 1em;
  line-height: 130%;
  font-weight: 600;
}
.header {
  position: absolute;
  top: 1.5em;
  left: 4vw;
  border-radius: 8px;
  width: 88vw;
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
  width: 2.63em;
  height: 0.31em;
}
.des-child {
  position: relative;
  width: 3.16em;
  height: 3.16em;
  object-fit: cover;
}
.div9 {
  flex: 1;
  position: relative;
  font-size: 0.63em;
  line-height: 130%;
}
.des,
.des-1-2 {
  position: relative;
}
.des {
  top: 0;
  left: 0;
  border-radius: 16px;
  background-color: #f8f6fc;
  display: flex;
  flex-direction: row;
  padding: 0.63em 0.75em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}
.des-1-2 {
  top: 4.56em;
  height: 4.13em;
  padding: 0 24px;
}
.p {
  margin: 0;
}
.div10,
.text {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.text {
  font-size: 0.88em;
  line-height: 120%;
}
.iconchange {
  position: relative;
  width: 1.5em;
  height: 1.5em;
}
.fields-password-and-mail2,
.text-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.fields-password-and-mail2 {
  border-radius: 16px;
  border: 0.5px solid #2e3a59;
  box-sizing: border-box;
  height: 2.5em;
  flex-direction: column;
  padding: 0.5em 0.75em;
  align-items: flex-start;
  justify-content: center;
  color: #2e3a59;
}
.fieldsinputchoise {
  width: 100%;
  gap: 0.63em;
}
.field-info,
.fieldsinputchoise {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.field-info {
  width: 100%;
}
.div11 {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
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
.span {
  font-weight: 500;
}
.span1 {
  color: #2e3a59;
}
.span2 {
  font-weight: 300;
  color: rgba(0, 0, 0, 0.04);
}
.div12 {
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
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.title {
  position: relative;
  font-size: 0.63em;
  line-height: 130%;
}
.title-wrapper {
  padding: 0 0.63em;
  box-sizing: border-box;
  left: 0em;
  color: #8181a5;
  position: relative;
  top: 0;
  margin: 0 auto;
}
.fieldsinput-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.13em;
  z-index: 0;
  width: 100%;
}
.span3 {
  font-weight: 300;
}
.ton1 {
  text-decoration: underline;
  color: rgba(87, 126, 247, 0.96);
}
.ton {
  position: absolute;
  margin: 0 !important;
  top: 0.2em;
  right: 0;
  font-size: 0.63em;
  line-height: 1em;
  z-index: 1;
  color: #2e3a59;
}
.field-info-parent,
.frame-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-group {
  border-radius: 12px;
  width: 100%;
  position: relative;
  gap: 0.94em;
}
.field-info-parent {
  position: relative;
  top: 6em;

  border-radius: 14px;
  border: 1px solid rgba(165, 146, 221, 0.1);
  overflow: hidden;
  padding: 1.25em 1.31em;
  gap: 1.5em;
  margin: 0 24px;
}
.ton-kepeer {
  position: relative;
  font-size: 1em;
  line-height: 1.75em;
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
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.buttonnext-wrapper,
.frame-wrapper-accounts {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.buttonnext-wrapper {
  align-self: stretch;
  justify-content: center;
  width: 100%;
  &_create {
    top: 0em;
  }
}
.frame-wrapper-accounts {
  position: relative;
  top: 32em;
  justify-content: flex-start;
  text-align: center;
  color: #f3f3f3;
  padding: 0px 24px;
}
.span4 {
  color: rgba(59, 59, 59, 0.44) !important;
}
.description,
.title1 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  display: inline-block;
  width: 25em;
  & span {
    color: #3b3b3b;
    font-weight: 400;
  }
}
.description {
  font-size: 0.88em;
  color: #3b3b3b;
  width: 100%;
}
.frame-parent-account {
  display: flex;
  flex-direction: column;
  padding: 0 0 0.3em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
  width: 100%;
}
.frame-inner {
  align-self: stretch;
  position: relative;
  border-top: 1px solid rgba(165, 146, 221, 0.1);
  box-sizing: border-box;
  height: 0.06em;
  width: 100%;
}
.div13 {
  position: relative;
  font-size: 0.63em;
  line-height: 140%;
  color: rgba(59, 59, 59, 0.6);
  display: flex;
  align-items: center;
  width: 100%;
}
.img-icon {
  position: relative;
  border-radius: 6px;
  width: 2.13em;
  height: 2.13em;
  object-fit: cover;
}
.author1 {
  position: relative;
  font-size: 0.88em;
  line-height: 1.5em;
  display: inline-block;
  width: 12.71em;
  flex-shrink: 0;
}
.author {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.06em;
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
.author-parent,
.handle-container,
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
.author-parent {
  justify-content: space-between;
  gap: 0.63em;
  color: #1c1d21;
  font-family: Lato;
  width: 100%;
}
.component-wrapper-accounts,
.frame-container-accounts,
.frame-accounts {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.frame-accounts {
  border-radius: 12px;
  background-color: rgba(165, 146, 221, 0.1);
  padding: 0.75em 1.31em;
  box-sizing: border-box;
  align-items: flex-start;
  gap: 0.63em;
  width: 100% !important;
}
.frame-container-accounts {
  align-items: center;
}
.component-wrapper-accounts {
  position: relative;
  top: 70px;
  color: #78789a;
  padding: 0px 24px;
}
.div14 {
  position: relative;
  font-size: 0.75em;
  line-height: 140%;
  font-weight: 300;
}
.container-click {
  position: relative;
  width: 1.81em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.group {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0 0 0 1.31em;
  align-items: center;
  justify-content: space-between;
}
.key {
  position: relative;
  font-size: 0.75em;
  line-height: 140%;
  font-weight: 600;
}
.text-1 {
  display: none;
  flex-direction: row;
  padding: 0 0.63em 0 0;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
}
.span5 {
  line-height: 130%;
  font-weight: 600;
}
.span6 {
  line-height: 140%;
}
.cahrjj3 {
  position: relative;
  font-size: 0.75em;
}
.code {
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
  top: 0;
  right: 0;
  bottom: 0;
  max-height: 100%;
  width: 3.25em;
  z-index: 2;
}
.field-copykey,
.frame-parent2 {
  display: flex;
  justify-content: flex-start;
}
.field-copykey {
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  flex-direction: row;
  padding: 0.5em 0 0.5em 1.31em;
  box-sizing: border-box;
  align-items: center;
  position: relative;
  text-align: left;
  color: rgba(59, 59, 59, 0.5);
}
.frame-parent2 {
  position: relative;
  top: 6em;

  flex-direction: column;
  align-items: flex-start;
  gap: 0.5em;
  text-align: center;
  padding: 0px 24px;
}
.header-parent {
  position: relative;
  border-radius: 30px 30px 0 0;
  background-color: #fff;
  box-shadow: 0 12px 12px rgba(151, 71, 255, 0.04);
  width: 100%;
  height: auto !important;
  overflow: auto;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
.description-area {
  outline: none;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(165, 146, 221, 0.1);
  width: 100%;
  padding-bottom: 10px;
}
.frmae-div-1 {
  position: relative;
  top: 1em;
  width: 100%;
}
</style>
