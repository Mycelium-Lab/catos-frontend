<template>
  <div class="iphone-13-13-form-registr">
    <img class="bg-icon" alt="" src="../public/bg.svg" />

    <div class="form-registration-46">
      <div class="div8">
        <div class="div9">
          <div class="fieldsinput-parent">
            <div class="fieldsinput">
              <div class="div10">
                <span class="span">ФИО </span>
                <span class="span1">
                  <span>*</span>
                  <span class="span2"> </span>
                </span>
              </div>
              <input-data
                placeholder="Введите ваше имя"
                :style="{ width: '100%' }"
                :rigth="true"
              >
                <template v-slot:right-icon>
                  <img src="@/assets/images/iconseditoutline-black.svg" />
                </template>
              </input-data>
            </div>
            <div class="frame-div">
              <div class="div12">
                <span>Дата рождения: </span>
                <span class="span1">* </span>
              </div>
              <div class="fields-password-and-mail-container">
                <input-data
                  type="date"
                  placeholder="01.02.1994"
                  :style="{ width: '100%' }"
                ></input-data>

                <div class="iconscalendar-wrapper">
                  <img
                    class="iconscalendar"
                    alt=""
                    src="../public/iconscalendar.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="parent2">
            <div class="div12">
              <span>Пол: </span>
              <span class="span1">* </span>
            </div>
            <div class="frame-group">
              <div
                class="radiobutton-parent"
                @click="
                  () => (isSelectedRadioButton1 = !isSelectedRadioButton1)
                "
              >
                <catos-checkbox
                  :select="isSelectedRadioButton1"
                  variant="radiobutton"
                  :key="String(isSelectedRadioButton1)"
                ></catos-checkbox>
                <div class="div15">Мужской</div>
              </div>
              <div
                class="radiobutton-group"
                @click="
                  () => (isSelectedRadioButton2 = !isSelectedRadioButton2)
                "
              >
                <catos-checkbox
                  :select="isSelectedRadioButton2"
                  variant="radiobutton"
                  :key="String(isSelectedRadioButton2)"
                ></catos-checkbox>
                <div class="div15">Женский</div>
              </div>
            </div>
          </div>
          <div class="child"></div>
          <div class="frame">
            <div class="div17">Ваши персональные данные</div>
          </div>
        </div>
      </div>
      <router-link
        class="buttonnext"
        :to="{
          name: 'connect-wallet',
        }"
      >
        <b class="b1">Продолжить</b>
      </router-link>
      <div class="header">
        <img
          class="icons3dpersona-creditors"
          alt=""
          src="../public/icons3dpersona-creditors1@2x.png"
        />

        <div class="parent3">
          <div class="div18">
            <span class="span5">Пожалуйста проверьте еще раз ваши данные</span>,
            все ли верно
            <span class="span5"> </span>
          </div>
          <div class="div19">
            <p class="p">Данные будут использоваться</p>
            <p class="p">для заключения пользовательского соглашения</p>
          </div>
        </div>
      </div>
      <div class="parent4">
        <div class="div20">
          <span class="txt">
            <span class="span7">Данные паспорта</span>
            <span class="span8"> </span>
          </span>
        </div>
        <div class="frame-container">
          <div class="frame-wrapper">
            <div class="frame-wrapper">
              <div class="fieldsinputchoise">
                <div class="div12">
                  <span>Страна выдачи документа </span>
                  <span class="span1">* </span>
                </div>
                <catos-select
                  placeholder="Россия"
                  :options="options"
                  :value="value"
                  @selected="ev => (value = ev)"
                  :optionWidthDesk="352"
                  :style="{ width: '100%' }"
                ></catos-select>
              </div>
            </div>
          </div>
          <div class="frame-parent1">
            <div class="parent5">
              <div class="div12">
                <span>Серия и номер </span>
                <span class="span1">* </span>
              </div>
              <input-data placeholder="33 446462"></input-data>
            </div>
            <div class="parent6">
              <div class="div12">
                <span>Дата выдачи </span>
                <span class="span1">* </span>
              </div>
              <div class="fields-password-and-mail-wrapper">
                <input-data
                  type="date"
                  placeholder="01.02.2022"
                  :style="{ width: '100%' }"
                ></input-data>
              </div>
            </div>
          </div>
          <div class="fieldsinputchoise">
            <div class="div12">
              <span
                >Кем выдан
                <span class="span12"> </span>
              </span>
              <span class="span12">
                <span>* </span>
              </span>
            </div>
            <catos-textarea
              :style="{ width: '100%' }"
              placeholder="ГУМВД России по Санкт-Петербургу, и Ленинградской области"
            ></catos-textarea>
          </div>
        </div>
      </div>
    </div>

    <div class="slidersteps">
      <div class="loader"></div>
      <div class="numbers">
        <div class="div30">из</div>
        <div class="div30">7</div>
      </div>
      <div class="steps">
        <div class="div32">4 шаг</div>
      </div>
    </div>
    <router-link to="" @click="$router.go(-1)" class="buttonback">
      <div class="div33">Назад</div>
      <img class="search-icon" alt="" src="../public/search-icon.svg" />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import catosSelect from "../../../components/fields/catos-select.vue";
import inputData from "../../../components/fields/input-data.vue";
import catosCheckbox from "../../../components/ui-kit/catos-checkbox.vue";
import catosTextarea from "../../../components/fields/catos-textarea.vue";
const value = ref("");
const isSelectedRadioButton1 = ref(false);
const isSelectedRadioButton2 = ref(false);
const options = {
  sng: ["Россия", "Украина", "Казахстан"],
  euro: ["Польша", "Латвия", "Молдова"],
};
</script>

<style scoped lang="scss">
.bg-icon {
  position: absolute;
  top: 0;
  left: 0;
  height: 20.88em;
}
.span,
.span2 {
  font-weight: 300;
}
.span2 {
  font-family: Inter;
}
.span1 {
  color: red;
}
.div10,
.div11 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
}
.div11 {
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 130%;
  font-weight: 500;
}
.iconsedit-outline {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
}
.group {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0;
  align-items: center;
  justify-content: space-between;
}
.fields-password-and-mail2,
.fieldsinput {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.fields-password-and-mail2 {
  border-radius: 16px;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  width: 18.75em;
  height: 2.5em;
  padding: 0.5em 0.75em;
  justify-content: space-between;
}
.fieldsinput {
  justify-content: flex-start;
  gap: 0.5em;
}
.div12,
.div13 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.div13 {
  font-size: 0.88em;
  letter-spacing: 0.06em;
  line-height: 120%;
  font-weight: 500;
}
.iconsedit-outline1 {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
}
.fields-password-and-mail3 {
  align-self: stretch;
  flex: 1;
  border-radius: 16px;
  background-color: #f9fbff;
  border: 0.5px solid #656060;
  display: flex;
  flex-direction: column;
  padding: 0.5em 0.75em;
  align-items: flex-start;
  justify-content: center;
}
.iconscalendar {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.iconscalendar-wrapper {
  border-radius: 16px;
  background-color: rgba(253, 214, 116, 0.3);
  width: 2.5em;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.fields-password-and-mail-container {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.38em;
}
.fieldsinput-parent,
.frame-div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-div {
  width: 100%;
  height: 4em;
  gap: 0.5em;
}
.fieldsinput-parent {
  position: absolute;
  top: 2.31em;
  left: 1.31em;
  gap: 1.38em;
  z-index: 100;
  width: 88.5%;
}
.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.div15 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.03em;
  line-height: 120%;
  font-weight: 300;
}
.radiobutton-group,
.radiobutton-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.38em;
}
.radiobutton-group {
  color: rgba(59, 59, 59, 0.5);
}
.frame-group {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0 3.75em 0 0;
  align-items: flex-start;
  justify-content: space-between;
}
.child,
.parent2 {
  position: absolute;
}
.parent2 {
  top: 12.31em;
  left: 1.31em;
  width: 88.5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
  z-index: 100;
}
.child {
  width: 100%;
  top: calc(50% - 132.5px);
  right: 0;
  left: 0;
  border-radius: 15px;
  border: 0.5px solid rgba(46, 58, 89, 0.4);
  box-sizing: border-box;
  height: 16.94em;
}
.div17 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
  font-weight: 500;
}
.div8,
.div9,
.frame {
  position: absolute;
  top: 0;
}
.frame {
  left: 0.81em;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 0 0.5em;
  align-items: flex-start;
  justify-content: flex-start;
}
.div8,
.div9 {
  left: 0;
  width: 100%;
  height: 17.31em;
}
.div8 {
  top: 9.25em;
  left: 1.5em;
  width: 87.7vw;
}
.b1,
.buttonnext {
  display: flex;
  align-items: center;
  justify-content: center;
}
.b1 {
  position: relative;
  font-size: 1em;
  line-height: 1.75em;
  width: 6.69em;
  flex-shrink: 0;
}
.buttonnext {
  position: absolute;
  top: 49.81em;
  left: 1.5em;
  border-radius: 20px;
  background-color: #ffdb6d;
  width: 87.7vw;
  height: 3em;
  overflow: hidden;
  flex-direction: row;
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  text-align: center;
  color: var(--color-darkslategray-100);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
}
.icons3dpersona-creditors {
  position: relative;
  border-radius: 45px;
  width: 4.44em;
  height: 4.38em;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
}
.span5 {
  letter-spacing: 0.01em;
}
.div18 {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 120%;
  font-weight: 600;
}
.p {
  margin: 0;
}
.div19 {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.01em;
  line-height: 130%;
  font-weight: 300;
  color: rgba(59, 59, 59, 0.7);
}
.header,
.parent3 {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.38em;
}
.header {
  position: absolute;
  top: 2.25em;
  left: 1.5em;
  width: 100vw;
  flex-direction: row;
  gap: 0.75em;
}
.span7 {
  font-size: 1em;
  font-weight: 500;
}
.span8 {
  font-size: 0.88em;
  font-weight: 300;
}
.txt {
  line-break: anywhere;
  width: 100%;
}
.div20,
.text {
  position: relative;
}
.div20 {
  line-height: 110%;
  display: flex;
  align-items: center;
  width: 21.31em;
}
.text {
  font-size: 0.88em;
  letter-spacing: 0.03em;
  line-height: 120%;
  font-weight: 500;
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
.fields-password-and-mail4,
.fieldsinputchoise {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.fields-password-and-mail4 {
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
  gap: 0.5em;
}
.fieldsinputchoise,
.frame-wrapper {
  align-self: stretch;
  justify-content: flex-start;
}
.fields-password-and-mail5,
.frame-wrapper,
.parent5 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.fields-password-and-mail5 {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f9fbff;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  height: 2.5em;
  padding: 0.5em 0.75em;
  justify-content: center;
  color: #2e3a59;
}
.parent5 {
  flex: 1;
  justify-content: flex-start;
  gap: 0.5em;
}
.fields-password-and-mail-wrapper {
  align-self: stretch;
  height: 2.5em;
  flex-direction: row;
  color: #2e3a59;
}
.fields-password-and-mail-wrapper,
.frame-parent1,
.parent6 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.parent6 {
  flex: 1;
  height: 4em;
  flex-direction: column;
  gap: 0.5em;
}
.frame-parent1 {
  align-self: stretch;
  flex-direction: row;
  gap: 0.75em;
}
.span12 {
  letter-spacing: -2px;
  color: red;
}
.div27 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 120%;
}
.wrapper2 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0 0.75em 0 0;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
}
.fields-password-and-mail-child {
  position: absolute;
  margin: 0 !important;
  right: 0.72em;
  bottom: 0.66em;
  width: 0.59em;
  height: 0.59em;
  z-index: 1;
}
.fields-password-and-mail7 {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f9fbff;
  border: 0.5px solid #656060;
  padding: 0.5em 0.75em 1em;
  position: relative;
  gap: 0.25em;
  color: #2e3a59;
}
.fields-password-and-mail7,
.frame-container,
.parent4 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-container {
  align-self: stretch;
  gap: 1.25em;
}
.parent4 {
  position: absolute;
  top: 28.06em;
  left: 2.81em;
  width: 77%;
  gap: 1.5em;
}
.form-registration-46 {
  position: absolute;
  top: 12.25em;
  left: 0;
  border-radius: 40px 40px 0 0;
  background-color: #fff;
  width: 100vw;
  height: 60.13em;
}
.page-title1 {
  position: absolute;
  top: calc(50% - 14px);
  left: calc(50% - 65px);
  font-size: 1.25em;
  line-height: 1.4em;
}
.battery-icon,
.header1 {
  position: absolute;
  height: 4.38%;
  width: 100.51%;
  top: 11.68%;
  right: -0.26%;
  bottom: 83.94%;
  left: -0.26%;
}
.battery-icon {
  height: 25.76%;
  width: 6.24%;
  top: 39.39%;
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
.div28 {
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
.loader {
  position: absolute;
  top: 0.13em;
  left: 2.63em;
  border-radius: 24px;
  background-color: #f5f9ff;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  width: 7.69em;
  height: 1.5em;
  opacity: 0.51;
}
.div30 {
  position: relative;
  font-size: 0.5em;
  line-height: 120%;
  font-weight: 500;
}
.numbers {
  position: absolute;
  top: 0.56em;
  left: 8.19em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.44em;
}
.div32 {
  position: relative;
  font-size: 0.75em;
  line-height: 120%;
  font-weight: 500;
}
.slidersteps,
.steps {
  position: absolute;
  height: 1.75em;
}
.steps {
  top: 0;
  left: 2.75em;
  border-radius: 19px;
  background-color: #f5f9ff;
  width: 4.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #2e3a59;
}
.slidersteps {
  top: 4.19em;
  right: 1em;
  width: 10.31em;
  color: #958463;
}
.div33 {
  position: absolute;
  top: 0.43em;
  left: 3.29em;
  font-size: 0.88em;
  line-height: 2em;
  font-weight: 300;
}
.buttonback,
.search-icon {
  position: absolute;
  height: 2.5em;
}
.search-icon {
  top: calc(50% - 20px);
  right: 3.88em;
  border-radius: 10px;
  width: 2.5em;
  overflow: hidden;
}
.buttonback {
  top: 3.81em;
  left: 1em;
  border-radius: 9px;
  width: 6.38em;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  color: #3b3b3b;
}
.iphone-13-13-form-registr {
  position: relative;
  background-color: #fdd674;
  width: 100%;
  height: 68.5em;
  overflow: hidden;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
  overflow-x: hidden;
}
@media (min-width: 500px) {
  .header {
    position: relative;
    top: -17.25em;
    /* left: 1.5em; */
    width: 23.38em;
    flex-direction: row;
    gap: 0.75em;
    margin: 0 auto;
  }
  .div8 {
    top: 11.25em;
    /* left: 1.5em; */
    width: 23.8em;
    margin: 0 auto;
    position: relative;
  }
  .parent4 {
    position: relative;
    top: 4.5em;
    left: 1.81em;
    width: 23.38em;
    gap: 1.5em;
    margin: 0 auto;
  }
  .buttonnext {
    position: relative;
    top: 34em;
    left: 1.9em;
    border-radius: 20px;
    background-color: #ffdb6d;
    width: 23.38em;
    height: 3em;
    margin: 0 auto;
    overflow: hidden;
    flex-direction: row;
    padding: 0.5em 7.25em;
    box-sizing: border-box;
    text-align: center;
    color: var(--color-darkslategray-100);
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
  }
}
</style>
