<template>
  <div class="iphone-13-13-form-registr">
    <img class="bg-icon" alt="" src="../public/bg.svg" />

    <div class="header">
      <div class="page-title-parent">
        <b class="page-title1">Анкета организации</b>
      </div>
    </div>
    <div class="form-registration-36">
      <div class="div8">
        <div class="registration-options">
          <div class="registration-options-child"></div>
          <div class="text-and-fill">
            <div class="div9">
              <span>Данные организации </span>
              <span class="span">*</span>
            </div>
          </div>
          <div class="fieldsinputchoise-parent">
            <div class="fieldsinputchoise">
              <div class="div10">
                <span>Страна </span>
                <span class="span">* </span>
              </div>
              <catos-select
                placeholder="Выбрать страну:"
                :options="options"
                :value="value"
                @selected="ev => (value = ev)"
              ></catos-select>
            </div>
            <div class="fieldsinputchoise1">
              <div class="div10">
                <span>Форма регистрации </span>
                <span class="span">* </span>
              </div>
              <catos-select
                placeholder="Выбрать страну:"
                :options="options"
                :value="value"
                @selected="ev => (value = ev)"
              ></catos-select>
            </div>
            <div class="fieldsinputchoise">
              <div class="div10">
                <span>Наименование организации </span>
                <span class="span">* </span>
              </div>
              <input-data
                placeholder="Введите наименование"
                :style="{ width: '100%' }"
              ></input-data>
            </div>
            <div class="fieldsinputchoise">
              <div class="div10">
                <span>ОГРН или ОГРНИП </span>
                <span class="span">* </span>
              </div>
              <input-data
                placeholder="Введите номер"
                :style="{ width: '100%' }"
              ></input-data>
            </div>
            <div class="fieldsinputchoise">
              <div class="div10">
                <span>Адрес представительства компании </span>
                <span class="span">* </span>
              </div>
              <input-data
                placeholder="Ленинский пр-т 77, Г. Москва, ..."
                :style="{ width: '100%' }"
              ></input-data>
            </div>
            <div class="fieldsinputchoise">
              <div class="div10">Веб-сайт организации</div>
              <input-data
                placeholder="catos.ru"
                :style="{ width: '100%' }"
              ></input-data>
            </div>
          </div>
        </div>
        <div class="registration-options-parent">
          <div class="registration-options1">
            <div class="registration-options-item"></div>
            <div class="text-and-fill1">
              <div class="div20">
                <span>Документы организации </span>
                <span class="span">*</span>
              </div>
            </div>
            <div class="x-forms">
              <div class="organizmloader">
                <div class="frame-group">
                  <loader-field class="loader-file"></loader-field>
                  <div class="text-parent">
                    <div class="icons-parent">
                      <div class="icons">
                        <div class="iconsfile">
                          <img
                            class="vector-icon"
                            alt=""
                            src="../public/vector.svg"
                          />

                          <img
                            class="iconsfile-child"
                            alt=""
                            src="../public/vector-245.svg"
                          />
                        </div>
                      </div>
                      <div class="frame-wrapper">
                        <div class="goa-filejpg-wrapper">
                          <div class="business-registration-proof-container">
                            Goa_file
                            <span class="jpg1">.jpg</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="loader1">
                      <div class="loader2">
                        <img
                          class="loader-child"
                          alt=""
                          src="../public/frame-1817486.svg"
                        />

                        <div class="div22">12%</div>
                      </div>
                      <img
                        class="loader-child"
                        alt=""
                        src="../public/remove.svg"
                      />
                    </div>
                  </div>
                  <div class="text-parent">
                    <div class="icons-parent">
                      <div class="icons">
                        <div class="iconsfile">
                          <img
                            class="vector-icon"
                            alt=""
                            src="../public/vector.svg"
                          />

                          <img
                            class="iconsfile-child"
                            alt=""
                            src="../public/vector-245.svg"
                          />
                        </div>
                      </div>
                      <div class="frame-wrapper">
                        <div class="goa-filejpg-wrapper">
                          <div class="business-registration-proof-container">
                            Goa_file2
                            <span class="jpg1">.jpg</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="loader1">
                      <div class="loader4">
                        <img
                          class="loader-child"
                          alt=""
                          src="../public/frame-18174861.svg"
                        />

                        <div class="div22">100%</div>
                      </div>
                      <img
                        class="loader-child"
                        alt=""
                        src="../public/remove.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="organizmloader1">
                <div class="business-registration-proof-group">
                  <loader-field class="loader-file"></loader-field>
                </div>
                <div class="checkbox-parent">
                  <catos-checkbox></catos-checkbox>
                  <div class="same-as-in">
                    Same as in business registration proof
                  </div>
                </div>
              </div>
              <div class="organizmloader2">
                <div class="business-registration-proof-group">
                  <loader-field class="loader-file"></loader-field>
                </div>
                <input-data
                  placeholder="Тип фалйа"
                  :style="{ width: '85%', left: '6.9%', bottom: '3%' }"
                ></input-data>
              </div>
            </div>
          </div>
          <div class="text-declaration">
            <div class="declaration">Declaration:</div>
            <div class="checkbox-group">
              <catos-checkbox></catos-checkbox>

              <div class="by-submitting-this">
                By submitting this form, you confirm that:
              </div>
            </div>
            <div class="frame-parent1">
              <div class="frame-parent2">
                <div class="rectangle-wrapper">
                  <div class="frame-inner"></div>
                </div>
                <div class="you-are-authorised-to-act-on-b-wrapper">
                  <div class="you-are-authorised">
                    You are authorised to act on behalf of the business
                  </div>
                </div>
              </div>
              <div class="frame-parent3">
                <div class="rectangle-wrapper">
                  <div class="frame-inner"></div>
                </div>
                <div class="all-beneficial-owners">
                  All beneficial owners, directors, and partners have been
                  declared and their details have been provided.
                </div>
              </div>
              <div class="frame-parent3">
                <div class="rectangle-wrapper">
                  <div class="frame-inner"></div>
                </div>
                <div class="all-beneficial-owners">
                  All information and documents provided are true, complete and
                  accurate.
                </div>
              </div>
            </div>
          </div>
        </div>
        <router-link
          class="buttonnext"
          id="buttonNextContainer"
          :to="{
            name: 'anketa',
          }"
        >
          <b class="b1">Продолжить</b>
        </router-link>
      </div>
      <div class="header1">
        <img
          class="icons3dorganization"
          alt=""
          src="../public/icons3dorganization.svg"
        />

        <div class="parent4">
          <div class="div27">
            <p class="p">Заполняйте поля внимательно</p>
            <p class="p">и настоящими данными</p>
          </div>
          <div class="div28">
            <p class="p">Данные будут использоваться</p>
            <p class="p">для заключения пользовательского соглашения</p>
          </div>
        </div>
      </div>
    </div>
    <div class="slidersteps">
      <div class="loader7"></div>
      <div class="numbers">
        <div class="div31">из</div>
        <div class="div31">7</div>
      </div>
      <div class="steps">
        <div class="div22">3 шаг</div>
      </div>
    </div>
    <router-link class="buttonback" to="" @click="$router.go(-1)">
      <div class="div34">Назад</div>
      <img class="search-icon" alt="" src="../public/search-icon.svg" />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import catosSelect from "../../../components/fields/catos-select.vue";
import inputData from "../../../components/fields/input-data.vue";
import loaderField from "../../../components/fields/loader-field.vue";
import catosCheckbox from "../../../components/ui-kit/catos-checkbox.vue";
import { ref } from "vue";
const value = ref("");
const options = {
  sng: ["Россия", "Украина", "Казахстан"],
  euro: ["Польша", "Латвия", "Молдова"],
};
</script>

<style scoped lang="scss">
.bg-icon {
  position: absolute;
  top: -18em;
  left: -7em;
  height: 36.88em;
}
.page-title1,
.page-title4 {
  position: relative;
  font-size: 1.25em;
  letter-spacing: -1px;
  line-height: 1.4em;
}
.page-title4 {
  color: rgba(59, 59, 59, 0.17);
}
.page-title-parent {
  position: absolute;
  top: 0.63em;
  left: 6em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 7.56em;
}
.header {
  position: absolute;
  height: 2.51%;
  width: 100.51%;
  top: 6.7%;
  right: -0.26%;
  bottom: 90.79%;
  left: -0.26%;
}
.registration-options-child {
  position: absolute;
  width: 100%;
  top: calc(50% - 260.5px);
  right: 0;
  left: 0;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 0.5px solid #2e3a59;
  box-sizing: border-box;
  height: 32.75em;
}
.span {
  color: red;
}
.div9 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
  font-weight: 500;
}
.text-and-fill {
  position: absolute;
  top: 0;
  left: 1.06em;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 0 0.38em;
  align-items: flex-start;
  justify-content: flex-start;
}
.div10,
.text {
  position: relative;
  font-size: 0.63em;
  letter-spacing: 0.4px;
  line-height: 110%;
  font-weight: 300;
}
.text {
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
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
.fields-password-and-mail2 {
  border-radius: 16px;
  border: 0.5px solid #2e3a59;
  box-sizing: border-box;
  width: 18.75em;
  height: 2.5em;
  display: flex;
  flex-direction: column;
  padding: 0.5em 0.75em;
  align-items: flex-start;
  justify-content: center;
  color: rgba(46, 58, 89, 0.36);
}
.fieldsinputchoise {
  align-self: stretch;
  width: 100%;
}
.fieldsinputchoise,
.fieldsinputchoise1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
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
.fields-password-and-mail4 {
  border-radius: 16px;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  width: 18.75em;
  height: 2.5em;
  padding: 0.5em 0.75em;
  justify-content: space-between;
  color: rgba(46, 58, 89, 0.36);
}
.fields-password-and-mail4,
.fields-password-and-mail7,
.fieldsinputchoise-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.fields-password-and-mail7 {
  border-radius: 16px;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  width: 18.75em;
  height: 2.5em;
  padding: 0.5em 0.75em;
  justify-content: space-between;
  color: rgba(46, 58, 89, 0.36);
  font-family: Poppins;
}
.fieldsinputchoise-parent {
  position: absolute;
  top: 2.25em;
  left: 1.31em;
  justify-content: flex-start;
  gap: 1.38em;
}
.registration-options {
  position: absolute;
  top: 0;
  left: 0;
  width: 21.38em;
  height: 32.94em;
}
.registration-options-item {
  position: absolute;
  width: 100%;
  top: calc(50% - 326.5px);
  right: 0;
  left: 0;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 0.5px solid #2e3a59;
  box-sizing: border-box;
  height: 40.75em;
}
.div20 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: -1px;
  line-height: 0.71em;
  font-weight: 500;
}
.text-and-fill1 {
  position: absolute;
  top: -0.31em;
  left: 1.06em;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 0 0.38em;
  align-items: flex-start;
  justify-content: flex-start;
}
.business-registration-proof-container {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
  font-weight: 300;
}
.upload-cloud-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.div21 {
  position: relative;
  font-size: 0.63em;
  line-height: 1em;
  font-weight: 300;
}
.loader,
.loader-inner,
.upload-cloud-parent {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.upload-cloud-parent {
  flex-direction: row;
  gap: 0.75em;
}
.loader,
.loader-inner {
  flex-direction: column;
}
.loader {
  align-self: stretch;
  border-radius: 16px;
  background-color: #e8ddff;
  border: 1px dashed #a592dd;
  box-sizing: border-box;
  height: 3.25em;
  padding: 0.5em 0.75em;
  justify-content: center;
  color: #2e3a59;
}
.business-registration-proof-parent {
  width: 16.88em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.06em;
  color: #3b3b3b;
}
.vector-icon {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.iconsfile-child {
  top: 0.09em;
  left: 0.53em;
  border-radius: 1.07px;
  width: 0.53em;
  height: 0.5em;
}
.iconsfile,
.iconsfile-child,
.jpg {
  position: absolute;
}
.jpg {
  top: 2.35em;
  left: 0.54em;
  font-size: 0.35em;
  line-height: 120%;
  font-weight: 500;
}
.iconsfile {
  top: 0.38em;
  left: 0.5em;
  width: 1.06em;
  height: 1.31em;
}
.icons {
  position: relative;
  border-radius: 42px;
  background-color: #fdd674;
  width: 2em;
  height: 2em;
}
.jpg1 {
  letter-spacing: 1px;
}
.frame-wrapper,
.goa-filejpg-wrapper,
.icons-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-wrapper,
.icons-parent {
  flex-direction: row;
  align-items: center;
}
.frame-wrapper {
  color: #2e3a59;
}
.icons-parent {
  gap: 0.5em;
}
.loader-child {
  position: relative;
  width: 0.88em;
  height: 0.88em;
  overflow: hidden;
  flex-shrink: 0;
}
.div22 {
  position: relative;
  font-size: 0.75em;
  line-height: 120%;
  font-weight: 500;
}
.loader2 {
  border-radius: 24px;
  background-color: #f5f9ff;
  width: 4.38em;
  padding: 0.44em 0.5em;
  box-sizing: border-box;
  align-items: flex-start;
  gap: 0.38em;
}
.loader1,
.loader2,
.loader4 {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.loader1 {
  align-items: center;
  gap: 0.75em;
  color: #2e3a59;
}
.loader4 {
  border-radius: 24px;
  background-color: #f5f9ff;
  padding: 0.44em 0.5em;
  align-items: flex-start;
  gap: 0.38em;
}
.business-registration-proof-group,
.frame-group,
.organizmloader {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-group {
  gap: 0.63em;
}
.business-registration-proof-group,
.organizmloader {
  align-self: stretch;
}
.organizmloader {
  border-radius: 16px;
  background-color: rgba(237, 244, 255, 0.3);
  overflow: hidden;
  color: #fff;
}
.business-registration-proof-group {
  gap: 1.06em;
}
.checkbox-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.same-as-in {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 120%;
  font-weight: 300;
}
.checkbox-parent,
.organizmloader1 {
  align-self: stretch;
  display: flex;
  justify-content: flex-start;
}
.checkbox-parent {
  flex-direction: row;
  align-items: center;
  gap: 0.94em;
  color: #000;
}
.organizmloader1 {
  border-radius: 16px;
  background-color: rgba(237, 244, 255, 0.3);
  overflow: hidden;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
}
.div26 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.03em;
  line-height: 120%;
  font-weight: 300;
}
.fieldsinput4,
.organizmloader2,
.x-forms {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.fieldsinput4 {
  align-self: stretch;
  border-radius: 16px;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  height: 2.5em;
  padding: 0.5em 0.75em;
  justify-content: space-between;
  color: rgba(46, 58, 89, 0.36);
}
.organizmloader2,
.x-forms {
  justify-content: flex-start;
}
.organizmloader2 {
  align-self: stretch;
  border-radius: 16px;
  background-color: rgba(237, 244, 255, 0.3);
  overflow: hidden;
  gap: 0.63em;
}
.x-forms {
  position: absolute;
  top: 2.25em;
  left: 1.31em;
  width: 18.75em;
  gap: 2em;
}
.registration-options1 {
  position: relative;
  width: 21.38em;
  height: 40.69em;
}
.declaration {
  position: relative;
  font-size: 1.13em;
  letter-spacing: -1px;
  line-height: 120%;
  font-weight: 500;
}
.by-submitting-this {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 21.67em;
  flex-shrink: 0;
}
.checkbox-group {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1em;
}
.frame-inner {
  position: relative;
  border-radius: 20px;
  background-color: #0f1c15;
  width: 0.31em;
  height: 0.31em;
}
.rectangle-wrapper {
  display: flex;
  flex-direction: row;
  padding: 0.25em;
  align-items: flex-start;
  justify-content: flex-start;
}
.you-are-authorised {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.you-are-authorised-to-act-on-b-wrapper {
  width: 18.63em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent2 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0.38em;
}
.all-beneficial-owners {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.frame-parent3 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.38em;
}
.frame-parent1,
.registration-options-parent,
.text-declaration {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent1 {
  align-self: stretch;
  gap: 0.88em;
}
.registration-options-parent,
.text-declaration {
  gap: 1.25em;
}
.text-declaration {
  width: 21.38em;
}
.registration-options-parent {
  position: absolute;
  top: 36.25em;
  left: 0;
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
.div8 {
  position: absolute;
  width: 21.38em;
}
.buttonnext {
  top: 91.44em;
  left: 0;
  border-radius: 20px;
  background-color: #ffdb6d;
  height: 3em;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  color: var(--color-darkslategray-100);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.div8 {
  top: 8.75em;
  left: 1.5em;
  height: 94.44em;
}
.icons3dorganization {
  position: relative;
  border-radius: 45px;
  width: 4.44em;
  height: 4.38em;
  overflow: hidden;
  flex-shrink: 0;
}
.p {
  margin: 0;
}
.div27,
.div28 {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 110%;
  font-weight: 600;
}
.div28 {
  font-size: 0.75em;
  line-height: 120%;
  font-weight: 300;
  color: rgba(59, 59, 59, 0.68);
}
.header1,
.parent4 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.parent4 {
  flex: 1;
  flex-direction: column;
  gap: 0.38em;
}
.header1 {
  position: absolute;
  top: 2.25em;
  left: 1.5em;
  width: 20.06em;
  flex-direction: row;
  gap: 0.75em;
}
.form-registration-36 {
  position: absolute;
  top: 12.94em;
  left: 0;
  border-radius: 40px 40px 0 0;
  background-color: #fff;
  width: 24.38em;
  height: 106.5em;
  overflow-y: auto;
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
.div29 {
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
.loader7 {
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
.div31 {
  position: relative;
  font-size: 0.5em;
  line-height: 120%;
  font-weight: 500;
}
.numbers {
  position: absolute;
  top: 0.56em;
  left: 7.19em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.44em;
}
.slidersteps,
.steps {
  position: absolute;
  height: 1.75em;
}
.steps {
  top: 0;
  left: 1.75em;
  border-radius: 19px;
  background-color: #f5f9ff;
  width: 4.63em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #2e3a59;
}
.slidersteps {
  top: 4.19em;
  left: 12.56em;
  width: 10.31em;
  color: #958463;
}
.div34 {
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
  left: 1.5em;
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
  height: 119.44em;
  overflow-y: auto;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
