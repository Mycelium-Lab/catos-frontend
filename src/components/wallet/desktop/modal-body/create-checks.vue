<template>
  <div class="des-parent_create-checks">
    <div class="des-desktop">
      <img
        class="des-child"
        alt=""
        src="@/assets/desktop/frame-1817887@2x.png"
      />
      <div class="div">
        Здесь вы можете создать чек для мгновенной отправки криптовалюты любому
        пользователю
      </div>
    </div>
    <div class="field-info-parent">
      <div class="field-info">
        <div class="fieldsinputchoise">
          <div class="div1">
            Выберите криптовалюту для отправки с помошью чека.
          </div>
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
      <div class="frame-parent">
        <div class="fieldsinput-parent">
          <div class="fieldsinput">
            <div class="div1">Укажите сумму:</div>
            <input-data :style="{ width: '100%' }"></input-data>
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
    <catos-button
      variant="secondary"
      :style="{ width: '100%', margin: '0' }"
      @click="close"
      >Создать чек</catos-button
    >

    <div class="instance-wrapper">
      <div class="frame-container">
        <div class="frame-group">
          <div class="frame-div">
            <div class="title-container">
              <div class="title1">
                <span>Описание к чеку:</span>
                <span class="span4"> (не обязательно)</span>
              </div>
            </div>
            <textarea class="description-area"></textarea>
          </div>
          <!--<div class="frame-child" />-->
          <div class="div4">
            Пользователи увидят это описание, когда вы поделитесь чеком, так же
            можно показать или скрыть кто поделился
          </div>
          <div class="author-parent">
            <div class="author">
              <!--<img class="img-icon" alt="" src="@/assets/images/img@2x.png" />-->
              <div class="author1">Валентин Иванович</div>
            </div>
            <catos-switch></catos-switch>
          </div>
        </div>
      </div>
    </div>
    <div class="frame-parent1">
      <div class="text-parent">
        <div class="div5">Добавить пароль к чеку (не обязательно)</div>
        <!--<img class="container-click" alt="" src="/container--click.svg" />-->
      </div>
      <copy-paste>
        <template v-slot:icon>
          <img src="@/assets/images/iconscopy.svg" />
        </template>
      </copy-paste>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import copyPaste from "@/components/fields/copy-paste.vue";
import catosSwitch from "@/components/ui-kit/catos-switch.vue";
import catosSelect from "@/components/fields/catos-select.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import inputData from "@/components/fields/input-data.vue";
const value = ref("");
const options = {
  sng: ["Россия", "Украина", "Казахстан"],
  euro: ["Польша", "Латвия", "Молдова"],
};
const emits = defineEmits(["close"]);
const close = () => {
  emits("close");
};
</script>
<style scoped>
.des-child {
  position: relative;
  width: 3.16em;
  height: 3.16em;
  object-fit: cover;
}
.div {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.des-desktop {
  border-radius: 16px;
  background-color: #f8f6fc;
  width: 27.5em;
  display: flex;
  flex-direction: row;
  padding: 0.63em 0.75em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}
.div1 {
  align-self: stretch;
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
.field-info {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.iconsmail {
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
  padding: 0.25em 0em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
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
  display: flex;
  flex-direction: column;
  padding: 0em 0.75em;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
}
.fieldsinput {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.title {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.title-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0em 0.63em;
  align-items: center;
  justify-content: center;
  color: #8181a5;
  position: absolute;
  top: 4.3em;
  left: 9em;
}
.fieldsinput-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
  z-index: 0;
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
  top: 0.17em;
  right: 0em;
  font-size: 0.75em;
  line-height: 0.83em;
  z-index: 1;
  color: #2e3a59;
}
.frame-parent {
  align-self: stretch;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 0.94em;
}
.field-info-parent {
  border-radius: 14px;
  border: 1px solid rgba(165, 146, 221, 0.1);
  box-sizing: border-box;
  width: 27.5em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1.25em 1.31em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5em;
  height: 13em;
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
}
.frame-wrapper {
  width: 27.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  color: #f3f3f3;
}
.span4 {
  color: rgba(120, 120, 154, 0.5);
}
.title1 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  display: inline-block;
  width: 21.43em;
}
.title-container {
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
.frame-div {
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
.div4 {
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
.handle {
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
  background-color: #a592dd;
  width: 3.25em;
  height: 1.75em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
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
.frame-group {
  align-self: stretch;
  border-radius: 12px;
  background-color: rgba(165, 146, 221, 0.1);
  display: flex;
  flex-direction: column;
  padding: 0.75em 1.31em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.frame-container {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.instance-wrapper {
  width: 27.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #78789a;
}
.div5 {
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
.span5 {
  font-weight: 600;
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
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0em 0.5em 1.31em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  text-align: left;
  color: rgba(59, 59, 59, 0.5);
}
.frame-parent1 {
  width: 27.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
  text-align: center;
}
.des-parent_create-checks {
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  width: 100%;

  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
  display: flex;
  gap: 20px;
  flex-direction: column;
}
.description-area {
  outline: none;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(165, 146, 221, 0.1);
  width: 100%;
  padding-bottom: 10px;
}
@media (max-height: 900px) {
  /*.des-parent {
    height: 600px;
    overflow-y: auto;
  }*/
}
</style>
