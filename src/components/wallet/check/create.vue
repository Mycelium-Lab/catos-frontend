<template>
  <modal>
    <div class="wrapper">
      <div class="header">
        <div class="div28">Создать чек</div>
      </div>
      <div class="swipe-down"></div>
      <div class="des-1-2">
        <div class="des">
          <img class="des-child" alt="" src="@/assets/images/dialog.png" />

          <div class="div9">
            Здесь вы можете создать чек для мгновенной отправки криптовалюты
            любому пользователю
          </div>
        </div>
      </div>
      <div class="fieldsinputchoise">
        <div class="div10">
          <p class="p">Выберите криптовалюту для отправки с помошью чека</p>
        </div>
        <catos-select
          placeholder="TON"
          :options="options"
          :value="value"
          :optionWidth="77"
          :style="{ width: '100%' }"
          @selected="ev => (value = ev)"
        ></catos-select>
      </div>
      <div class="field-info-parent">
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
      <div class="frame-wrapper-check">
        <div class="buttonnext-wrapper-check">
          <router-link class="buttonnext" :to="{ name: 'wallet' }">
            <b class="ton-kepeer">Создать чек</b>
          </router-link>
        </div>
      </div>
      <div class="component-wrapper">
        <div class="frame-container-checks">
          <div class="frame-checks">
            <div class="frame-parent1">
              <div class="field-info">
                <div class="title1">
                  <span>Описание к чеку:</span>
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
        </div>
      </div>
      <div class="frame-parent2">
        <div class="group">
          <div class="div14">Добавить пароль к чеку (не обязательно)</div>
          <img class="container-click" alt="" src="@/assets/images/info.svg" />
        </div>
        <copy-paste :style="{ marginTop: '0em' }">
          <template v-slot:icon>
            <img src="@/assets/images/iconscopy.svg" />
          </template>
        </copy-paste>
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
const options = ["TON", "CATOS"];
</script>

<style scoped lang="scss">
.wrapper {
  height: 1000px;
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
  position: relative;
  width: 100%;
  gap: 0.63em;
  top: 8em;
  width: 77vw;
  margin: 0 auto;
  z-index: 100;
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
  position: absolute;
}
.title {
  position: relative;
  font-size: 0.63em;
  line-height: 130%;
  top: 7em;
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
  top: 6em;
}
.field-info-parent {
  position: relative;
  top: 2em;
  width: 87.7vw;
  border-radius: 14px;
  border: 1px solid rgba(165, 146, 221, 0.1);
  overflow: hidden;
  padding: 1.25em 1.31em;
  gap: 1.5em;
  margin: 0 auto;
  height: 220px;
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
.buttonnext-wrapper-check,
.frame-wrapper-check {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.buttonnext-wrapper-check {
  align-self: stretch;
  justify-content: center;
  width: 100%;
}
.frame-wrapper-check {
  position: relative;
  top: 23em;
  justify-content: flex-start;
  text-align: center;
  color: #f3f3f3;
  padding: 0px 24px;
}
.span4 {
  color: rgba(120, 120, 154, 0.5);
}
.description,
.title1 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  display: inline-block;
  width: 25em;
}
.description {
  font-size: 0.88em;
  color: #3b3b3b;
  width: 100%;
}
.frame-parent1 {
  display: flex;
  flex-direction: column;
  padding: 0 0 1.13em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
  width: 100%;
  background-color: transparent;
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
  justify-content: flex-start;
  gap: 0.63em;
  color: #1c1d21;
  font-family: Lato;
}
.component-wrapper,
.frame-container-checks,
.frame-checks {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.frame-checks {
  border-radius: 12px;
  background-color: rgba(165, 146, 221, 0.1);
  padding: 0.75em 1.31em;
  box-sizing: border-box;
  align-items: flex-start;
  gap: 0.63em;
}
.frame-container-checks {
  align-items: center;
}
.component-wrapper {
  position: relative;
  top: 0.5em;
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
  top: 2em;

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
  height: 58.75em;
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
</style>
