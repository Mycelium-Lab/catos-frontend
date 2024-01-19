<template>
  <modal from="setting">
    <div class="header-parent" @click="() => (isSuccess = true)">
      <div class="header">
        <div class="div">Добавить администратора</div>
      </div>

      <div class="frame-parent">
        <div class="fieldsinput-parent">
          <div class="fieldsinput">
            <div class="div1">Укажите Email нового администратора</div>
            <input-data
              right
              :style="{ width: '100%', margin: '0' }"
              placeholder="Введите email"
            >
              <template v-slot:right-icon>
                <img
                  src="@/assets/images/iconseditoutline-black.svg"
                /> </template
            ></input-data>
          </div>
          <div class="fieldsinput1">
            <div class="div1">Укажите имя</div>
            <input-data
              right
              :style="{ width: '100%', margin: '0' }"
              placeholder="Введите имя"
            >
              <template v-slot:right-icon>
                <img
                  src="@/assets/images/iconseditoutline-black.svg"
                /> </template
            ></input-data>
          </div>
          <div class="text-and-fill">
            <div class="div5">Данные</div>
          </div>
        </div>
        <div class="field-button-switch-parent">
          <div class="field-button-switch">
            <div class="api">Управление заявками</div>
            <catos-switch></catos-switch>
          </div>
          <div class="field-button-switch1">
            <div class="api">Управление пользователями</div>
            <catos-switch></catos-switch>
          </div>
          <div class="field-button-switch2">
            <div class="api">Управление пулами</div>
            <catos-switch></catos-switch>
          </div>
          <div class="field-button-switch3">
            <div class="api">Управление займами</div>
            <catos-switch></catos-switch>
          </div>
          <div class="field-button-switch4">
            <div class="api">API запросы для скоринга</div>
            <catos-switch></catos-switch>
          </div>
          <div class="field-button-switch5">
            <div class="api">Добавление администраторов</div>
            <catos-switch></catos-switch>
          </div>
          <div class="text-and-fill1">
            <div class="div5">Настройки прав доступа</div>
          </div>
        </div>
        <div class="message-1">
          <div class="frame-group">
            <div class="frame-container">
              <div class="title-wrapper">
                <div class="title">
                  <span>Написать личное сообщение:</span>
                  <span class="span"> (не обязательно)</span>
                </div>
              </div>
              <textarea class="description"> </textarea>
            </div>
            <div class="frame-child" />
            <div class="c-container">
              <span class="c-container1">
                <p class="p">Сообщение будет отправлено на почту вместе</p>
                <p class="p">
                  c уведомлением о регистрации, так же можно оставить подпись
                </p>
              </span>
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
              <catos-switch></catos-switch>
            </div>
          </div>
        </div>
        <div class="frame-wrapper">
          <div class="frame-div">
            <div class="frame-wrapper1">
              <div class="buttonnext-parent" @click="() => isSuccess">
                <div class="buttonnext">
                  <b class="ton-kepeer">Создать администратора</b>
                </div>
                <div class="div12" @click="toBack">отмена</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </modal>
  <status-modal
    v-if="isSuccess"
    @onModal="() => (isSuccess = false)"
    :variant="5"
    title="Новый администратор успешно создан"
  ></status-modal>
</template>
<script setup lang="ts">
import { ref } from "vue";
import modal from "@/components/ui-kit/modal.vue";
import inputData from "../fields/input-data.vue";
import catosSwitch from "../ui-kit/catos-switch.vue";
import statusModal from "../base/status-modal.vue";

import { useRouter } from "vue-router";
const router = useRouter();
const isSuccess = ref(false);
const toBack = () => {
  router.push({ name: "admin-pannel-mobile" });
};
</script>
<style scoped>
.div {
  position: relative;
  font-size: 1em;
  line-height: 130%;
  font-weight: 600;
}
.header {
  position: relative;
  top: 2.5em;

  border-radius: 8px;
  width: 18.75em;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0.75em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.swipe-down {
  position: absolute;
  top: 0.75em;
  left: 10.81em;
  border-radius: 25px;
  background-color: #cad0e4;
  width: 2.63em;
  height: 0.31em;
}
.div1 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.div2 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 300;
}
.iconsedit-outline {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
}
.parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0em;
  align-items: center;
  justify-content: space-between;
}
.fields-password-and-mail {
  border-radius: 16px;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  width: 18.75em;
  height: 2.5em;
  display: flex;
  flex-direction: column;
  padding: 0.5em 0.75em;
  align-items: flex-start;
  justify-content: space-between;
  color: rgba(46, 58, 89, 0.36);
}
.fieldsinput {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
  z-index: 0;
}
.fieldsinput1 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
  z-index: 1;
}
.div5 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
  font-weight: 500;
}
.text-and-fill {
  margin: 0 !important;
  position: absolute;
  top: -0.31em;
  left: 0.88em;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 0em 0.38em;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 2;
  color: #8181a5;
}
.fieldsinput-parent {
  border-radius: 14px;
  border: 1px solid rgba(165, 146, 221, 0.1);
  display: flex;
  flex-direction: column;
  padding: 1.63em 1.31em;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 1.5em;
  width: 100%;
}
.handle {
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
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  border-radius: 100px;
  background-color: #1c1b1f;
  width: 1em;
  height: 1em;
  display: none;
  opacity: 0.08;
  z-index: 0;
}
.handle-container {
  width: 2em;
  height: 2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
}
.switch {
  border-radius: 100px;
  background-color: #e7e0ec;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  width: 3.25em;
  height: 1.75em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.field-button-switch {
  border-radius: 8px;
  background-color: #f5f5fa;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  z-index: 0;
}
.field-button-switch1 {
  border-radius: 8px;
  background-color: #f5f5fa;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
}
.field-button-switch2 {
  border-radius: 8px;
  background-color: #f5f5fa;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
}
.handle3 {
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
.overlay3 {
  position: absolute;
  margin: 0 !important;
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
.switch3 {
  border-radius: 100px;
  background-color: #a592dd;
  width: 3.25em;
  height: 1.75em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
.field-button-switch3 {
  border-radius: 8px;
  background-color: #f5f5fa;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
}
.api {
  position: relative;
  font-size: 0.88em;
  line-height: 140%;
}
.field-button-switch4 {
  border-radius: 8px;
  background-color: #f5f5fa;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  z-index: 4;
}
.field-button-switch5 {
  border-radius: 8px;
  background-color: #f5f5fa;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
}
.text-and-fill1 {
  margin: 0 !important;
  position: absolute;
  top: -0.31em;
  left: 0.88em;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 0em 0.38em;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 6;
  color: #8181a5;
}
.field-button-switch-parent {
  border-radius: 14px;
  border: 1px solid rgba(165, 146, 221, 0.1);
  display: flex;
  flex-direction: column;
  padding: 1.63em 1.31em 1.25em;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 0.88em;
  width: 100%;
}
.span {
  color: rgba(59, 59, 59, 0.44);
}
.title {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  display: inline-block;
}
.title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.span1 {
  letter-spacing: -1px;
}
.description {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  display: inline-block;
  width: 21.43em;
  background: none;
  border: none;
  resize: none;
  outline: none;
}
.frame-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
}
.frame-child {
  align-self: stretch;
  position: relative;
  border-top: 1px solid rgba(165, 146, 221, 0.1);
  box-sizing: border-box;
  height: 0.06em;
}
.p {
  margin: 0;
}
.c-container1 {
  line-break: anywhere;
  width: 100%;
}
.c-container {
  position: relative;
  font-size: 0.63em;
  line-height: 140%;
  color: rgba(59, 59, 59, 0.6);
  display: flex;
  align-items: center;
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
.author-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #1c1d21;
  font-family: Lato;
}
.frame-group {
  border-radius: 12px;
  background-color: rgba(165, 146, 221, 0.1);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.75em 1.31em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.message-1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}
.ton-kepeer {
  position: relative;
  font-size: 1em;
  line-height: 130%;
}
.buttonnext {
  align-self: stretch;
  border-radius: 24px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;

  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.div12 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 100%;
  font-weight: 300;
  color: rgba(38, 38, 38, 0.62);
  text-align: left;
}
.buttonnext-parent {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5em;
}
.frame-wrapper1 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.frame-div {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.frame-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  color: #f3f3f3;
  width: 100%;
}
.frame-parent {
  position: relative;
  top: 5.31em;
  /* left: 1.5em; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.31em;
  width: 88vw;
  margin: 0 auto;
}
.header-parent {
  position: relative;
  border-radius: 30px 30px 0px 0px;
  background-color: #fff;
  box-shadow: 0px 12px 12px rgba(151, 71, 255, 0.04);
  width: 100%;
  height: 78.56em;
  overflow: auto;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
