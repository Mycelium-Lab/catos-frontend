<template>
  <desktop-modal v-if="isAddAdmin" @close="close">
    <template v-slot:title> Добавить администратора </template>
    <template v-slot:body>
      <div class="frame-parent">
        <div class="frame-group">
          <div class="wrapper">
            <div class="div">Данные</div>
          </div>
          <div class="fieldsinput-parent">
            <div class="fieldsinput">
              <div class="div1">Укажите Email нового администратора</div>
              <input-data
                placeholder="Введите email"
                :style="{ width: '100%', margin: '0' }"
                :right="true"
              >
                <template v-slot:right-icon>
                  <img src="@/assets/images/iconseditoutline-black.svg" />
                </template>
              </input-data>
            </div>
            <div class="fieldsinput">
              <div class="div1">Укажите имя</div>
              <input-data
                placeholder="Введите имя"
                :style="{ width: '100%', margin: '0' }"
                :right="true"
              >
                <template v-slot:right-icon>
                  <img src="@/assets/images/iconseditoutline-black.svg" />
                </template>
              </input-data>
            </div>
          </div>
        </div>
        <div class="frame-group">
          <div class="wrapper">
            <div class="div">Настройки прав доступа</div>
          </div>
          <div class="fieldsinput-parent">
            <div class="field-item">
              <div class="text-icon">
                <div class="div6">Управление заявками</div>
                <catos-switch></catos-switch>
              </div>
            </div>
            <div class="field-item">
              <div class="text-icon">
                <div class="div6">Управление пользователями</div>
                <catos-switch></catos-switch>
              </div>
            </div>
            <div class="field-item">
              <div class="text-icon">
                <div class="div6">Управление пуллами</div>
                <catos-switch></catos-switch>
              </div>
            </div>
            <div class="field-item">
              <div class="text-icon">
                <div class="div6">Управление займами</div>
                <catos-switch></catos-switch>
              </div>
            </div>
            <div class="field-item">
              <div class="text-icon">
                <div class="div6">API запросы для скоринга</div>
                <catos-switch></catos-switch>
              </div>
            </div>
            <div class="field-item">
              <div class="text-icon">
                <div class="div6">Добавление администраторов</div>
                <catos-switch></catos-switch>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-div">
          <div class="frame-parent1">
            <div class="title-wrapper">
              <div class="title">
                <span>Написать личное сообщение:</span>
                <span class="span"> (не обязательно)</span>
              </div>
            </div>
            <textarea class="description-area"></textarea>
          </div>

          <div class="c">
            Сообщение будет отправлено на почту вместе c уведомлением о
            регистрации, так же можно оставить подпись
          </div>
          <div class="author-parent">
            <div class="author">
              <img
                class="img-icon"
                alt=""
                src="@/assets/desktop/fallback/img@2x.png"
              />
              <div class="author1">Валентин Иванович</div>
            </div>
            <catos-switch></catos-switch>
          </div>
        </div>

        <div class="frame-wrapper">
          <div class="frame-wrapper1">
            <catos-button
              variant="secondary"
              :style="{ width: '100%', margin: '0' }"
              @click="
                () => {
                  isAddAdmin = false;
                  isResult = true;
                }
              "
              >Создать администратора</catos-button
            >
          </div>
        </div>
      </div>
    </template>
  </desktop-modal>
  <status-modal-desktop v-if="isResult" @close="close">
    <template v-slot:header> Добавить администратора </template>
    <template v-slot:title> Новый администратор успешно создан </template>
    <template v-slot:image>
      <img src="@/assets/images/iconssuccess-user.svg" />
    </template>
    <template v-slot:subtitle>
      <h4 class="subtitle-email">slavarussia@mail.ru</h4>
      <p class="subtitle">Параметры доступа отправлены на указанный email</p>
    </template>
    <template v-slot:action> Продолжить </template>
  </status-modal-desktop>
</template>
<script setup lang="ts">
import { ref } from "vue";
// @ts-ignore
import inputData from "@/components/fields/input-data.vue";
// @ts-ignore
import catosSwitch from "@/components/ui-kit/catos-switch.vue";
// @ts-ignore
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
// @ts-ignore
import statusModalDesktop from "@/components/base/status-modal-desktop.vue";
// @ts-ignore
import desktopModal from "@/components/base/desktop-modal.vue";

const isAddAdmin = ref(true);
const isResult = ref(false);

const emits = defineEmits(["close"]);
const close = () => {
  emits("close");
};
</script>
<style scoped>
.div {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 130%;
  font-weight: 500;
}
.wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
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
  color: rgba(46, 58, 89, 0.36);
}
.fieldsinput {
  width: 27.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.fieldsinput-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.frame-group {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.94em;
}
.div6 {
  position: relative;
  font-size: 0.88em;
  line-height: 140%;
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
.text-icon {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.field-item {
  border-radius: 8px;
  background-color: rgba(230, 221, 255, 0.3);
  width: 27.5em;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.63em 1.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
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
.span {
  color: rgba(120, 120, 154, 0.5);
}
.title {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.description {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  color: #3b3b3b;
  display: inline-block;
  width: 21.43em;
}
.frame-parent1 {
  display: flex;
  flex-direction: column;
  padding: 0em 0em 1.13em;
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
.c {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  line-height: 140%;
  color: rgba(59, 59, 59, 0.6);
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
  flex: 1;
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
  justify-content: flex-start;
  gap: 0.63em;
  color: #1c1d21;
  font-family: Lato;
}
.frame-div {
  align-self: stretch;
  border-radius: 12px;
  background-color: rgba(165, 146, 221, 0.1);
  display: flex;
  flex-direction: column;
  padding: 0.75em 1.31em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
  color: #78789a;
  width: 440px;
}
.ton-kepeer {
  position: relative;
  font-size: 1em;
  line-height: 130%;
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
.frame-wrapper1 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-wrapper {
  width: 18.75em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  color: #f3f3f3;
}
.frame-parent {
  position: relative;
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
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
.subtitle-email {
  margin: 0;
  color: #3b3b3b;
  font-size: 18px;
  font-weight: 700;
}
.subtitle {
  margin: 0;
  color: #8181a5;
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  opacity: 0.4000000059604645;
}
@media (max-height: 900px) {
  .frame-parent {
    height: 38em;
    overflow-y: auto;
  }
}
</style>
