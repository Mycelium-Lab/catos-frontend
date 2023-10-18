<template>
  <div class="iphone-13-13-">
    <div class="bg-">
      <div class="bg-child"></div>
      <img class="bg-item" alt="" src="./public/bg.svg" />

      <div class="bg-inner"></div>
    </div>
    <div class="form-registration-16">
      <div class="div8">
        <div class="text-and-button">
          <div class="text">
            <div class="component-20-parent">
              <catos-checkbox @on-change="(arg) => handleCheckboxChange('box1', arg)" variant="rounded"></catos-checkbox>
              <div class="div9">
                Я даю согласие на обработку, хранение моих персональных данных,
                а также данных компании, которую я представляю
              </div>
            </div>
            <div class="frame-group">
              <div class="component-20-group">
                <catos-checkbox @on-change="(arg) => handleCheckboxChange('box2', arg)" variant="rounded"></catos-checkbox>

                <div class="div9">
                  <p class="p">Подтверждаю, что имею право представлять</p>
                  <p class="p">свою организацию</p>
                </div>
              </div>
              <div class="component-20-group">
                <catos-checkbox @on-change="(arg) => handleCheckboxChange('box3', arg)" variant="rounded"></catos-checkbox>

                <div class="div9">
                  Продолжая, я соглашаюсь, что моя организация имеет право
                  оказания услуг кредиторской деятельности
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fieldsregistration-options-parent">
          <div class="fieldsregistration-options">
            <div class="fieldsregistration-options-child"></div>
            <div class="text-and-fill">
              <div class="div12">
                <span>Номер телефона </span>
                <span class="span">*</span>
              </div>
            </div>
            <div class="div13">
              <span class="txt">
                <p class="p">Укажите действующий номер телефона организации</p>
                <p class="p">для звонков и смс</p>
              </span>
            </div>
            <input-data
              class="phone-field"
              placeholder="Ваш номер телефона"
              :style="{ width: '90%' }"
              :left="true"
            > {{ proneNumber }}
              <template v-slot:left-icon>
                <img src="@/assets/images/iconsmobile.svg" />
              </template>
            </input-data>
          </div>
          <div class="fieldsregistration-options1">
            <div class="text-and-fill1">
              <div class="div12">
                <span>Электронная почта </span>
                <span class="span">*</span>
              </div>
            </div>
            <div class="div16">
              Укажите действующую почту. Она будет использована для авторизации
              и восстановления доступа
            </div>
            <input-data
              class="phone-field"
              placeholder="Ваш email"
              :style="{ width: '90%' }"
              :left="true"
            >
              <template v-slot:left-icon>
                <img src="@/assets/images/iconsmail.svg" />
              </template>
            </input-data>
          </div>
          <div class="fieldsregistration-options2">
            <input-data
              class="password-field phone-field"
              placeholder="Пароль"
              :style="{ width: '90%' }"
              :left="true"
              type="password"
            >
              <template v-slot:left-icon>
                <img src="@/assets/images/iconslock.svg" />
              </template>
            </input-data>
            <input-data
              class="password-field-repead password-field phone-field"
              placeholder="Пароль"
              :style="{ width: '90%' }"
              :left="true"
              type="password"
            >
              <template v-slot:left-icon>
                <img src="@/assets/images/iconslock.svg" />
              </template>
            </input-data>
            <div class="div19">
              <span>Придумайте пароль</span>
              <span class="span">*</span>
            </div>
            <div class="div20">
              <span>Повторите пароль </span>
              <span class="span">*</span>
            </div>
            <div class="text-and-fill1">
              <div class="div21">
                <span>Пароль </span>
                <span class="span">*</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-link
      class="buttonnext"
      :to="{
        name: 'confirm',
        state: { role },
      }"
    >
      <b class="b1">Продолжить</b></router-link
    >

    <div class="slidersteps">
      <div class="loader"></div>
      <div class="numbers">
        <div class="div37">из</div>
        <div class="div37">7</div>
      </div>
      <div class="steps">
        <div class="div39">1 шаг</div>
      </div>
    </div>
    <div class="header">
      <div class="page-title-parent">
        <b class="page-title1">{{ title }}</b>
      </div>
    </div>
    <router-link class="buttonback" to="" @click="$router.go(-1)">
      <div class="div40">Назад</div>
      <img class="search-icon" alt="" src="./public/search-icon.svg" />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import catosSelect from "../../components/fields/catos-select.vue";
import inputData from "../../components/fields/input-data.vue";
import loaderField from "../../components/fields/loader-field.vue";
import catosCheckbox from "../../components/ui-kit/catos-checkbox.vue";
import { ref, computed } from "vue";
const value = ref("");
const options = {
  sng: ["Россия", "Украина", "Казахстан"],
  euro: ["Польша", "Латвия", "Молдова"],
};
const title = computed(() => {  
  return window.history.state.title;
});
const role = computed(() => window.history.state?.role);
const handleCheckboxChange = (checkboxName: string, checked: boolean) => {
  if (checkboxes.hasOwnProperty(checkboxName)) {
    checkboxes[checkboxName] = checked;
  }
  console.log(checkboxes);
};
const proneNumber = ref("");
const checkboxes: Record<string, boolean> = {
  box1: false,
  box2: false,
  box3: false
}
const isLinkActive = computed(() => {
  return checkboxes.box1 && checkboxes.box2 && checkboxes.box3;
});
</script>

<style scoped lang="scss">
.bg-child,
.bg-item {
  position: absolute;
  top: -18em;
  left: -7em;
  height: 36.88em;
}
.bg-child {
  height: 76.65%;
  width: 69.45%;
  right: 13.32%;
  bottom: 0;
  background-color: #fdd674;
}
.bg-item {
  height: 48.44%;
  width: 69.27%;
  right: 13.5%;
  bottom: 28.21%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.bg-,
.bg-inner {
  position: absolute;
  top: 8.31em;
  left: 20.56em;
}
.bg- {
  top: -4.87em;
  left: -6.06em;

  height: 20.88em;
}
.component-20-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.div9 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
  width: 100%;
}
.component-20-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
  width: 100%;
}
.p {
  margin: 0;
}
.component-20-group {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.frame-group {
  gap: 1.38em;
  width: 100%;
}
.frame-group,
.text,
.text-and-button {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.text {
  width: 100%;
  gap: 0.88em;
}
.text-and-button {
  position: absolute;
  top: 29.75em;
  left: 0;
  width: 100%;
}
.fieldsregistration-options-child {
  position: absolute;
  width: 100%;
  top: calc(50% - 49.5px);
  right: 0;
  left: 0;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  height: 6.5em;
}
.span {
  color: red;
}
.div12 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
  font-weight: 500;
}
.text-and-fill {
  position: absolute;
  top: 0;
  left: 1.13em;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 0 0.38em;
  align-items: flex-start;
  justify-content: flex-start;
}
.txt {
  line-break: anywhere;
  width: 100%;
}
.div13 {
  position: absolute;
  width: 100%;
  top: 66.97%;
  left: 6.14%;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
  color: #78789a;
  display: flex;
  align-items: center;
}
.iconsmobile {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.div14 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
}
.iconsmobile-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.fields-password-and-mail2 {
  position: absolute;
  height: 36.7%;
  width: 87.72%;
  top: 22.94%;
  right: 6.14%;
  bottom: 40.37%;
  left: 6.14%;
  border-radius: 15px;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 0.75em;
  align-items: flex-start;
  justify-content: center;
  color: rgba(46, 58, 89, 0.36);
}
.fieldsregistration-options {
  position: relative;
  width: 100%;
  height: 6.81em;
}
.div16,
.text-and-fill1 {
  position: absolute;
  display: flex;
}
.text-and-fill1 {
  top: -0.31em;
  left: 1.13em;
  background-color: #fff;
  flex-direction: row;
  padding: 0 0.38em;
  align-items: flex-start;
  justify-content: flex-start;
}
.div16 {
  top: 62.39%;
  left: 6.14%;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
  color: rgba(59, 59, 59, 0.58);
  align-items: center;
}
.alessowaitsongmailcom {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 100%;
  font-weight: 500;
}
.iconsmail-group {
  width: 15.81em;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.fields-password-and-mail3 {
  position: absolute;
  height: 34.19%;
  width: 87.72%;
  top: 21.37%;
  right: 6.14%;
  bottom: 44.44%;
  left: 6.14%;
  border-radius: 16px;
  background-color: #e5fee5;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.03em 0.75em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: center;
  color: #2e3a59;
}
.fieldsregistration-options1 {
  position: relative;
  border-radius: 16px;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  width: 100%;
  height: 7.31em;
}
.div17 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.03em;
  line-height: 120%;
}
.iconspassword1 {
  position: relative;
  width: 1.13em;
  height: 1.13em;
  overflow: hidden;
  flex-shrink: 0;
}
.fields-password-and-mail4,
.fields-password-and-mail5 {
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
.fields-password-and-mail5 {
  top: 66.48%;
  bottom: 11.17%;
}
.div19,
.div20 {
  position: absolute;
  top: 13.97%;
  left: 6.14%;
  font-size: 0.63em;
  letter-spacing: 0.4px;
  line-height: 110%;
  font-weight: 300;
}
.div20 {
  top: 56.42%;
  left: 7.02%;
}
.div21 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 1px;
  line-height: 0.71em;
  font-weight: 500;
}
.fieldsregistration-options2 {
  position: relative;
  border-radius: 16px;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  width: 100%;
  height: 11.19em;
}
.fieldsregistration-options-parent {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 1.5em;
  width: 100%;
}
.div8 {
  position: absolute;
  top: 2.25em;
  left: 6vw;
  width: 87.7vw;
  height: 40.13em;
}
.fieldsregistration-options-item {
  position: absolute;
  width: 100%;
  top: calc(50% - 92px);
  right: 0;
  left: 0;
  border-radius: 15px;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  height: 11.88em;
}
.fields-password-and-mail6 {
  position: absolute;
  width: calc(100% - 42px);
  top: calc(50% - 36px);
  right: 1.31em;
  left: 1.31em;
  border-radius: 16px;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  height: 2.5em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 0.75em;
  align-items: flex-start;
  justify-content: center;
  color: #2e3a59;
  font-family: Poppins;
}
.span6 {
  color: #78789a;
}
.div25 {
  position: absolute;
  top: 12.76%;
  left: 6.14%;
  font-size: 0.63em;
  letter-spacing: 1px;
  line-height: 1em;
  font-weight: 300;
  color: rgba(59, 59, 59, 0.58);
}
.span7 {
  color: rgba(59, 59, 59, 0.68);
}
.span8 {
  color: #000;
}
.span9 {
  color: #3b3b3b;
}
.div26 {
  position: absolute;
  top: 19.9%;
  left: 6.14%;
  font-size: 0.63em;
  letter-spacing: 1px;
  line-height: 120%;
  font-weight: 300;
  color: #78789a;
}
.iconssend {
  position: relative;
  border-radius: 2px;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.div27 {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.02em;
  line-height: 120%;
}
.iconssend-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.div28 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
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
.frame-div {
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
.frame-div {
  align-self: stretch;
  flex-direction: row;
  justify-content: space-between;
}
.frame-container {
  position: absolute;
  width: calc(100% - 42px);
  top: 7.38em;
  right: 1.31em;
  left: 1.31em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
  font-family: Poppins;
}
.fieldsregistration-options3 {
  position: absolute;
  top: 0;
  left: 0;
  width: 21.38em;
  height: 12.25em;
}
.fields-password-and-mail7 {
  position: absolute;
  top: 3.94em;
  left: 1.31em;
  border-radius: 16px;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  width: 18.75em;
  height: 2.5em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 0.75em;
  align-items: flex-start;
  justify-content: center;
  color: rgba(46, 58, 89, 0.36);
}
.div33,
.div34 {
  line-height: 120%;
}
.div33 {
  position: absolute;
  top: 19.9%;
  left: 6.14%;
  font-size: 0.63em;
  letter-spacing: 1px;
  font-weight: 300;
  color: rgba(59, 59, 59, 0.58);
}
.div34 {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.03em;
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
.wrapper1 {
  border-radius: 8px;
  background-color: rgba(253, 214, 116, 0.39);
  display: flex;
  flex-direction: column;
  padding: 0.13em 0.69em;
  align-items: flex-start;
  justify-content: flex-start;
}
.div36 {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.03em;
  line-height: 120%;
}
.frame-parent1 {
  position: absolute;
  width: calc(100% - 42px);
  top: 7.44em;
  right: 1.31em;
  left: 1.31em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
  font-family: Poppins;
}
.div22,
.fieldsregistration-options4 {
  position: absolute;
  top: 14.31em;
  left: 0;
  width: 21.38em;
  height: 12.25em;
}
.div22 {
  top: 2.31em;
  left: 25.25em;
  height: 26.63em;
}
.form-registration-16 {
  position: absolute;
  top: 12.25em;
  left: 0;
  border-radius: 40px 40px 0 0;
  background-color: #fff;
  width: 100vw;
  height: 48.25em;
}
.b1 {
  position: relative;
  font-size: 1em;
  line-height: 1.75em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.69em;
  flex-shrink: 0;
}
.buttonnext,
.loader {
  position: absolute;
  box-sizing: border-box;
}
.buttonnext {
  top: 56.13em;
  left: 6vw;
  border-radius: 20px;
  background-color: #ffdb6d;
  width: 87.7vw;
  height: 3em;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.5em 7.25em;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  color: #3b3b3b;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.loader {
  top: 0.13em;
  left: 2.63em;
  border-radius: 24px;
  background-color: #f5f9ff;
  border: 1px solid rgba(0, 0, 0, 0.03);
  width: 7.69em;
  height: 1.5em;
  opacity: 0.51;
}
.div37 {
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
.div39 {
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
.page-title1 {
  color: #3b3b3b;
}
.page-title1,
.page-title2 {
  position: relative;
  font-size: 1.25em;
  line-height: 1.4em;
}
.page-title-parent {
  position: absolute;
  top: 0.63em;
  left: 5vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 7.56em;
  width: 90vw;
}
.div40,
.header {
  position: absolute;
}
.header {
  height: 4.96%;
  width: 100.51%;
  top: 13.22%;
  right: -0.26%;
  bottom: 81.82%;
  left: -0.26%;
  color: rgba(59, 59, 59, 0.17);
}
.div40 {
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
  color: #3b3b3b;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.battery-icon {
  position: absolute;
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
.div41 {
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
.time-style,
.time-style1 {
  position: absolute;
  height: 47.73%;
  width: 13.85%;
  top: 27.27%;
  right: 80.77%;
  bottom: 25%;
  left: 5.38%;
}
.time-style1 {
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
.iphone-13-13- {
  position: relative;
  background-color: #fdd674;
  width: 100%;
  height: 60.5em;
  overflow-y: auto;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
  overflow-x: hidden;
}
.phone-field {
  position: relative;
  top: 1.5em;
  left: 1.2em;
}
.password-field {
  top: 3em;
}
.password-field-repead {
  top: 5em;
}
.disabled {
    opacity: 0.5;
    pointer-events: none;
}
</style>
