<template>
  <div class="iphone-13-13-form-registr">
    <img class="bg-icon" alt="" src="../public/bg.svg" />

    <div class="form-registration-56">
      <div :class="isMobile ? 'header2' : 'header2_desktop'">
        <img
          class="icons3dpersona-creditors"
          alt=""
          src="../public/icons3dpersona-creditors@2x.png"
        />
        <div class="parent9">
          <div class="div75">
            <span class="span51">Пожалуйста проверьте еще раз ваши данные</span
            >, все ли верно
            <span class="span51"> </span>
          </div>
          <div class="div76">
            <p class="p">Данные будут использоваться</p>
            <p class="p">для заключения пользовательского соглашения</p>
          </div>
        </div>
      </div>
      <div
        :class="
          isMobile
            ? 'registration-options-parent'
            : 'registration-options-parent_desktop'
        "
      >
        <div class="registration-options3">
          <div class="registration-options-inner"></div>
          <div class="text-and-fill">
            <div class="div31">
              <span>Адрес регистрации</span>
              <span class="span1"> *</span>
            </div>
          </div>
          <div class="fieldsinputchoise-parent">
            <div class="fieldsinputchoise">
              <div class="goa-filejpg">Область, край</div>
              <catos-select
              placeholder="Московская"
              :options="regions"
                :value="passportDataStore.passportDTO.registration_address.region"
                @selected="ev => (passportDataStore.passportDTO.registration_address.region = ev)"
                :optionWidthDesk="405"
                :style="
                passportDataStore.passportDTO.country !== 'Россия' && passportDataStore.passportDTO.country !== 'Россия'
                  ? { width: '100%', opacity: '0.2', cursor: 'not-allowed', pointerEvents: 'none' }
                  : { width: '100%', opacity: '1' }
              "
                :disabled="passportDataStore.passportDTO.country !== 'Россия'"
              ></catos-select>
            </div>
            <div class="fieldsinputchoise">
              <div class="goa-filejpg">Район</div>
              <catos-select
              :placeholder="passportDataStore.passportDTO.registration_address.region !== '' && neighborhoodsReg ? neighborhoodsReg[0] : 'Воскресенск'"
              :options="neighborhoodsReg"
                :value="passportDataStore.passportDTO.registration_address.city"
                @selected="ev => (passportDataStore.passportDTO.registration_address.city = ev)"
                :optionWidthDesk="405"
                :style="
                passportDataStore.passportDTO.registration_address.region === '' || passportDataStore.passportDTO.country !== 'Россия'
                  ? { width: '100%', opacity: '0.2', cursor: 'not-allowed', pointerEvents: 'none' }
                  : { width: '100%', opacity: '1' }
              "
                :disabled="passportDataStore.passportDTO.registration_address.region === '' || passportDataStore.passportDTO.country !== 'Россия'"
              ></catos-select>
            </div>
            <div class="fieldsinput">
              <div class="goa-filejpg">Населенный пункт</div>
              <catos-select
              :placeholder="passportDataStore.passportDTO.registration_address.region !== '' && citiesReg ? citiesReg[0] : 'Москва'"
              :options="citiesReg"
                :value="passportDataStore.passportDTO.registration_address.neighborhood"
                @selected="ev => (passportDataStore.passportDTO.registration_address.neighborhood = ev)"
                :optionWidthDesk="405"
                :style="
                 passportDataStore.passportDTO.registration_address.region === '' || passportDataStore.passportDTO.country !== 'Россия'
                  ? { width: '100%', opacity: '0.2', cursor: 'not-allowed', pointerEvents: 'none' }
                  : { width: '100%', opacity: '1' }
              "
               :disabled="passportDataStore.passportDTO.registration_address.region === '' || passportDataStore.passportDTO.country !== 'Россия'"
              ></catos-select>
            </div>
            <div class="fieldsinputchoise">
              <div class="goa-filejpg">Улица</div>
              <input-data
                v-model:model-value="passportDataStore.passportDTO.registration_address.street"
                placeholder="Начните вводить улицу"
                :style="{ width: '100%' }"
                :right="true"
              >
                <template v-slot:right-icon>
                  <img src="@/assets/images/iconseditoutline-black.svg" />
                </template>
              </input-data>
            </div>
          </div>
          <div class="frame-parent2">
            <div class="frame-parent3">
              <div class="parent11">
                <div class="div22">Дом</div>
                <input-data
                  v-model:model-value="passportDataStore.passportDTO.registration_address.house"
                  placeholder="1"
                  :style="{ width: '100%' }"
                ></input-data>
              </div>
              <div class="parent11">
                <div class="div22">Корпус</div>
                <input-data
                  v-model:model-value="passportDataStore.passportDTO.registration_address.housing"
                  placeholder="1/2"
                  :style="{ width: '100%' }"
                ></input-data>
              </div>
            </div>
            <div class="frame-parent3">
              <div class="parent11">
                <div class="div22">Строение</div>
                <input-data
                  v-model:model-value="passportDataStore.passportDTO.registration_address.building"
                  placeholder="-"
                  :style="{ width: '100%' }"
                ></input-data>
              </div>
              <div class="parent11">
                <div class="div22">Квартира</div>
                <input-data
                  v-model:model-value="passportDataStore.passportDTO.registration_address.apartment"
                  placeholder="№23"
                  :style="{ width: '100%' }"
                ></input-data>
              </div>
            </div>
            <div class="parent11">
              <div class="div22">Индекс</div>
              <input-data
                v-model:model-value="indexString"
                placeholder="240 432"
                :style="{ width: '100%' }"
              ></input-data>
            </div>
          </div>
        </div>
        <div class="parent31">
          <div class="div21">
            <span class="txt">
              <span class="span14">Данные паспорта</span>
              <span class="span20"> </span>
            </span>
          </div>
          <div class="frame-parent15">
            <div class="fieldsinputchoise-wrapper">
              <div class="fieldsinputchoise-wrapper">
                <div class="fieldsinputchoise">
                  <div class="div22">
                    <span>Страна выдачи документа </span>
                    <span class="span1">* </span>
                  </div>
                  <catos-select
                  placeholder="Россия"
                    :options="countries"
                    :value="passportDataStore.passportDTO.country"
                    @selected="ev => (passportDataStore.passportDTO.country = ev)"
                    :optionWidthDesk="405"
                    :style="{ width: '100%' }"
                  ></catos-select>
                </div>
              </div>
            </div>
            <div class="frame-parent16">
              <div class="parent32">
                <div class="div22">
                  <span>Серия и номер </span>
                  <span class="span1">* </span>
                </div>
                <input-data
                  v-model:model-value="passportNumberString"
                  placeholder="1234 446462"
                >
                </input-data>
              </div>
              <div class="parent33">
                <div class="div22">
                  <span>Дата выдачи </span>
                  <span class="span1">* </span>
                </div>
                <div class="fields-password-and-mail-wrapper">
                  <input-data
                    v-model:model-value="passportDataStore.passportDTO.issue_date"
                    type="date"
                    placeholder="01.02.2022"
                    :style="{ width: '100%' }"
                  ></input-data>
                </div>
              </div>
            </div>
            <div class="fieldsinputchoise">
              <div class="div22">
                <span
                  >Кем выдан
                  <span class="span60"> </span>
                </span>
                <span class="span60">
                  <span>* </span>
                </span>
              </div>
              <catos-textarea
                :style="{ width: '100%' }"
                :value="passportDataStore.passportDTO.issuing_organization"
                @selected="passportDataStore.passportDTO.issuing_organization = $event"
                placeholder="ГУМВД России по Санкт-Петербургу, и Ленинградской области"
              ></catos-textarea>
            </div>
          </div>
        </div>
        <div class="div101">
          <div class="div102">
            <div class="fieldsinput-group">
              <div class="fieldsinput">
                <div class="div9">
                  <span class="span">ФИО </span>
                  <span class="span1">
                    <span>*</span>
                    <span class="span2"> </span>
                  </span>
                </div>
                <input-data
                  placeholder="Введите ваше имя"
                  v-model:model-value="passportDataStore.passportDTO.name"
                  :style="{ width: '100%' }"
                  :right="true"
                >
                  <template v-slot:right-icon>
                    <img src="@/assets/images/iconseditoutline-black.svg" />
                  </template>
                </input-data>
              </div>
              <div class="parent37">
                <div class="div22">
                  <span>Дата рождения: </span>
                  <span class="span1">* </span>
                </div>
                <div class="fields-password-and-mail-parent1">
                  <input-data
                    v-model:model-value="passportDataStore.passportDTO.birthdate"
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
            <div class="parent39">
              <div class="div22">
                <span>Пол: </span>
                <span class="span1">* </span>
              </div>
              <div class="frame-parent17">
                <div
                  class="radiobutton-parent"
                  @click="
                    () => {isSelectedRadioButton1 = true; isSelectedRadioButton2 = false; passportDataStore.passportDTO.gender = 'М'}
                  "
                >
                  <catos-checkbox
                    :select="passportDataStore.passportDTO.gender === 'М'"
                    variant="radiobutton"
                    :key="String(isSelectedRadioButton1)"
                  ></catos-checkbox>

                  <div class="text">Мужской</div>
                </div>
                <div
                  class="radiobutton-group"
                  @click="
                    () => {isSelectedRadioButton2 = true; isSelectedRadioButton1 = false; passportDataStore.passportDTO.gender = 'Ж'}
                  "
                >
                  <catos-checkbox
                    :select="passportDataStore.passportDTO.gender === 'Ж'"
                    variant="radiobutton"
                    :key="String(isSelectedRadioButton2)"
                  ></catos-checkbox>

                  <div class="text">Женский</div>
                </div>
              </div>
            </div>
            <div class="child"></div>
            <div class="wrapper19">
              <div class="div31">Ваши персональные данные</div>
            </div>
          </div>
        </div>
      </div>
      <div
      :class="isMobile ? 'buttonnext1' : 'buttonnext1_desktop'"
        @click="handleNextClick"
      >
        <b class="b2">Сохранить и продолжить</b>
      </div>
    </div>
    <div class="slidersteps">
      <div class="loader6"></div>
      <div class="numbers">
        <div class="div113">из</div>
        <div class="div113">7</div>
      </div>
      <div class="steps">
        <div class="div67">4 шаг</div>
      </div>
    </div>
    <router-link to="" @click="$router.go(-1)" class="buttonback">
      <div class="div116">Назад</div>
      <img class="search-icon" alt="" src="../public/search-icon.svg" />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import router from "@/router";
import catosSelect from "../../../components/fields/catos-select.vue";
import inputData from "../../../components/fields/input-data.vue";
import catosCheckbox from "../../../components/ui-kit/catos-checkbox.vue";
import catosTextarea from "../../../components/fields/catos-textarea.vue";
import { passports } from "@/api/documents.api";
import { useUserDataStore } from "@/stores/userData";
import { usePassportDataStore } from "@/stores/passportData";
import { useCityList } from '@/composables/useCityList'
import { useNeighborhoodList } from "@/composables/useNeighborhoodList"
import countries from "@/json/countries.json"
import regions from "@/json/regions.json"
import { roleStorage } from "@/utils/localStorage";

const passportDataStore = usePassportDataStore();
const passportNumberString = computed(() => {
  return passportDataStore.passportDTO.series.toString() + ' ' + passportDataStore.passportDTO.number.toString();
});
const indexString = computed(() => {
  return passportDataStore.passportDTO.registration_address.index.toString();
});
const isSelectedRadioButton1 = ref(false);
const isSelectedRadioButton2 = ref(false);
import { useDevice } from "@/compossables/useDevice";

const { isMobile } = useDevice();

const {citiesByRegion: ctitesRegistration} = useCityList('registration', 'passport')
const {neighborhoodByRegion: neighborhoodRegistration} = useNeighborhoodList('registration', 'passport')

const citiesReg = computed(() => {
    return ctitesRegistration.value
});
const neighborhoodsReg = computed(() => {
    return neighborhoodRegistration.value
});

const isDataLoading = ref(false);
const handleNextClick = async () => {
  isDataLoading.value = true;
  await passports(passportDataStore.passportDTO)
    .then(async (res) => {
      if (res.status === 201) {
        console.log('Data saved');
        router.push(roleStorage.get() === 'borrower' ? {name: 'borrower-finish'} : {name: 'connect-wallet'});
      }
      else {
        console.log(res);
      }
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      isDataLoading.value = false;
    });
}
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
.div9 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
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
  z-index: 100;
}
.fields-password-and-mail2 {
  border-radius: 16px;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  width: 18.75em;
  height: 2.5em;
  padding: 0.5em 0.75em;
  justify-content: space-between;
  color: rgba(59, 59, 59, 0.5);
}
.fieldsinput {
  justify-content: flex-start;
  gap: 0.5em;
}
.span6 {
  line-height: 130%;
  font-weight: 300;
}
.span7 {
  line-height: 0.83em;
  color: red;
}
.div13 {
  position: relative;
  font-size: 0.75em;
}
.span9 {
  line-height: 130%;
}
.div15,
.text {
  position: relative;
  font-size: 0.75em;
  font-weight: 300;
}
.text {
  font-size: 0.88em;
  letter-spacing: 0.03em;
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
.fields-password-and-mail5 {
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
.fieldsinput-parent,
.fieldsinputchoise {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.fieldsinputchoise {
  align-self: stretch;
  gap: 0.5em;
}
.fieldsinput-parent {
  gap: 1.38em;
}
.p {
  margin: 0;
}
.div18 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.frame {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.span14 {
  font-size: 1em;
  font-weight: 500;
}
.span15 {
  font-size: 0.88em;
  color: red;
}
.div19 {
  position: relative;
  line-height: 110%;
}
.div19,
.div20,
.text1 {
  align-self: stretch;
}
.div20 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.text1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.fill-for-active-button {
  position: absolute;
  width: calc(100% - 151px);
  top: 0;
  right: 9.44em;
  left: 0;
  border-radius: 25px;
  background-color: #a592dd;
  height: 2em;
}
.text-2,
.text2 {
  position: absolute;
  top: 0.5em;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
}
.text2 {
  left: 2.79em;
  font-weight: 500;
}
.text-2 {
  left: 12.64em;
  text-decoration: underline;
  color: #d9d9d9;
}
.buttons-tabs {
  align-self: stretch;
  position: relative;
  border-radius: 25px;
  border: 0.5px solid #a592dd;
  box-sizing: border-box;
  height: 2em;
  text-align: right;
  color: #f8f8ff;
}
.text-and-button {
  width: 18em;
  align-items: flex-start;
  gap: 0.81em;
  color: #3b3b3b;
}
.des-and-bbn,
.frame-group,
.text-and-button {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.des-and-bbn {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f9fbff;
  padding: 0.75em;
  align-items: flex-start;
  gap: 1.13em;
  color: rgba(59, 59, 59, 0.9);
}
.frame-group {
  position: absolute;
  top: 2.25em;
  left: 1.31em;
  width: 18.75em;
  align-items: center;
  gap: 1.75em;
}
.span20 {
  font-size: 0.88em;
  font-weight: 300;
}
.txt {
  line-break: anywhere;
  width: 100%;
}
.div21,
.div22 {
  position: relative;
}
.div21 {
  line-height: 110%;
  display: flex;
  align-items: center;
  width: 21.31em;
}
.div22 {
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.fields-password-and-mail7 {
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
  color: rgba(46, 58, 89, 0.36);
}
.fieldsinputchoise-wrapper,
.frame-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.fieldsinputchoise-wrapper {
  align-self: stretch;
}
.frame-wrapper {
  width: 21.38em;
}
.div24 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.06em;
  line-height: 120%;
  font-weight: 300;
}
.fields-password-and-mail8,
.parent4 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.fields-password-and-mail8 {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f9fbff;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  height: 2.5em;
  padding: 0.5em 0.75em;
  justify-content: center;
  color: rgba(46, 58, 89, 0.36);
}
.parent4 {
  width: 10.31em;
  justify-content: flex-start;
  gap: 0.5em;
}
.iconsedit-outline5 {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
}
.fields-password-and-mail9 {
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
.fields-password-and-mail-container,
.frame-parent1 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.fields-password-and-mail-container {
  align-self: stretch;
  gap: 0.38em;
  color: rgba(46, 58, 89, 0.36);
}
.frame-parent1 {
  width: 21.31em;
  gap: 0.75em;
}
.span25 {
  letter-spacing: 0.03em;
}
.p3,
.span26 {
  letter-spacing: 0.02em;
}
.p3 {
  margin: 0;
}
.div28 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 120%;
  font-weight: 300;
}
.wrapper1 {
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
.fields-password-and-mail10,
.frame-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.fields-password-and-mail10 {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f9fbff;
  border: 0.5px solid #656060;
  padding: 0.5em 0.75em 1em;
  position: relative;
  gap: 0.25em;
  color: rgba(46, 58, 89, 0.36);
}
.frame-container {
  gap: 1.25em;
}
.div8,
.parent3 {
  position: absolute;
}
.parent3 {
  top: 43.06em;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5em;
}
.div8 {
  top: 8.75em;
  left: 1.5em;
  width: 21.38em;
  height: 61.31em;
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
  top: 208.38em;
  left: 1.5em;
  border-radius: 20px;
  background-color: #ffdb6d;
  width: 21.38em;
  height: 3em;
  overflow: hidden;
  flex-direction: row;
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  text-align: center;
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
.div29,
.div30 {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
}
.div30 {
  font-size: 0.75em;
  line-height: 120%;
  font-weight: 300;
  color: rgba(59, 59, 59, 0.7);
}
.header,
.parent9 {
  width: 69%;
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
  width: 21.38em;
  flex-direction: row;
  gap: 0.75em;
}
.registration-options-child {
  position: absolute;
  width: 100%;
  top: calc(50% - 298px);
  right: 0;
  left: 0;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 0.5px solid #2e3a59;
  box-sizing: border-box;
  height: 37.44em;
}
.div31 {
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
.span29 {
  letter-spacing: -1px;
}
.span31 {
  font-family: Inter;
}
.fieldsinputchoise-parent {
  position: absolute;
  top: 2.25em;
  left: 1.31em;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.38em;
  width: 88%;
}
.fieldsinputchoise-parent,
.parent11,
.wrapper2 {
  display: flex;
  justify-content: flex-start;
}
.wrapper2 {
  align-self: stretch;
  flex-direction: row;
  align-items: center;
}
.parent11 {
  width: 9em;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5em;
}
.frame-parent2,
.frame-parent3,
.wrapper4 {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.frame-parent3 {
  align-items: flex-start;
  gap: 0.75em;
  width: 100%;
}
.frame-parent2,
.wrapper4 {
  align-items: center;
}
.frame-parent2 {
  position: absolute;
  top: 22em;
  left: 1.31em;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
  width: 88%;
}
.registration-options {
  position: absolute;
  top: 72.31em;
  left: 1.5em;
  width: 21.38em;
  height: 37.63em;
}
.frame-parent5 {
  position: absolute;
  top: 27em;
  left: 1.31em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1em;
}
.registration-options1 {
  position: absolute;
  top: 111.94em;
  left: 1.5em;
  width: 21.38em;
  height: 42.38em;
}
.registration-options-item {
  position: absolute;
  width: 100%;
  top: calc(50% - 231.5px);
  right: 0;
  left: 0;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 0.5px solid #2e3a59;
  box-sizing: border-box;
  height: 50.63em;
}
.text-and-fill2 {
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
.div65 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
  display: flex;
  align-items: center;
  width: 24.5em;
}
.icon-child {
  position: absolute;
  top: 0.14em;
  left: 3.59em;
  background-color: #c5c5c5;
  width: 0.07em;
  height: 4.79em;
}
.icon-item {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  border: 2px solid #c5c5c5;
  box-sizing: border-box;
  width: 7.25em;
  height: 5em;
}
.frame-inner {
  position: relative;
  border-radius: 2.32px;
  background-color: #c5c5c5;
  width: 0.07em;
  height: 2.03em;
}
.rectangle-group {
  position: absolute;
  top: 0.58em;
  left: 4.79em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.14em;
}
.icon-inner {
  position: absolute;
  top: 0.58em;
  left: 2.17em;
  border-radius: 2.32px;
  background-color: #c5c5c5;
  width: 0.14em;
  height: 2.03em;
}
.icon-child1,
.vector-icon {
  position: absolute;
  top: 0.73em;
  left: 2.47em;
  width: 0.67em;
  height: 1.81em;
}
.icon-child1 {
  top: 0.58em;
  left: 1.89em;
  border-radius: 2.32px;
  background-color: #c5c5c5;
  width: 0.07em;
  height: 4.06em;
}
.ellipse-div,
.icon-child2,
.icon-child3,
.icon-child4,
.icon-child5,
.icon-child6,
.icon-child7,
.icon-child8 {
  position: absolute;
  top: 0.58em;
  left: 1.67em;
  border-radius: 2.32px;
  background-color: #c5c5c5;
  width: 0.07em;
  height: 4.06em;
}
.ellipse-div,
.icon-child3,
.icon-child4,
.icon-child5,
.icon-child6,
.icon-child7,
.icon-child8 {
  left: 1.45em;
}
.ellipse-div,
.icon-child4,
.icon-child5,
.icon-child6,
.icon-child7,
.icon-child8 {
  left: 1.23em;
}
.ellipse-div,
.icon-child5,
.icon-child6,
.icon-child7,
.icon-child8 {
  left: 1.01em;
}
.ellipse-div,
.icon-child6,
.icon-child7,
.icon-child8 {
  left: 0.58em;
  height: 0.87em;
}
.ellipse-div,
.icon-child7,
.icon-child8 {
  top: 1.6em;
}
.ellipse-div,
.icon-child8 {
  top: 3.19em;
  left: 4.35em;
  width: 1.89em;
  height: 1.45em;
}
.ellipse-div {
  top: 3.05em;
  left: 2.47em;
  border-radius: 50%;
  width: 0.87em;
  height: 0.87em;
}
.frame-icon,
.icon {
  position: absolute;
  top: 1.31em;
  left: 2.47em;
  width: 2.32em;
  height: 2.32em;
}
.icon {
  top: 0;
  left: 0;
  width: 7.25em;
  height: 5.04em;
}
.icons {
  position: relative;
  border-radius: 10px;
  background-color: #fff;
  width: 7.25em;
  height: 5em;
  overflow: hidden;
  flex-shrink: 0;
}
.icons-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.06em;
}
.vector-icon1 {
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
  top: 0;
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
.icons1 {
  position: relative;
  border-radius: 42px;
  background-color: #fdd674;
  width: 2em;
  height: 2em;
}
.jpg1 {
  letter-spacing: 1px;
}
.goa-filejpg {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
  font-weight: 300;
}
.frame-wrapper1,
.goa-filejpg-wrapper,
.icons-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-wrapper1,
.icons-group {
  flex-direction: row;
  align-items: center;
}
.frame-wrapper1 {
  color: #2e3a59;
}
.icons-group {
  gap: 0.5em;
}
.loader-child {
  position: relative;
  width: 0.88em;
  height: 0.88em;
  overflow: hidden;
  flex-shrink: 0;
}
.div67 {
  position: relative;
  font-size: 0.75em;
  line-height: 120%;
  font-weight: 500;
}
.loader,
.loader1,
.loadernav {
  display: flex;
  flex-direction: row;
}
.loader1 {
  border-radius: 24px;
  background-color: #f5f9ff;
  padding: 0.44em 0.5em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.38em;
}
.loader,
.loadernav {
  align-items: center;
}
.loader {
  justify-content: flex-start;
  gap: 0.75em;
  color: #2e3a59;
}
.loadernav {
  align-self: stretch;
  justify-content: space-between;
  color: #fff;
}
.frame-parent8,
.rectangle-container {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent8 {
  align-self: stretch;
  flex-direction: column;
  gap: 0.63em;
  z-index: 0;
}
.rectangle-container {
  flex-direction: row;
  gap: 0.14em;
  transform: rotate(-90deg);
  transform-origin: 0 0;
}
.icons-child1,
.icons-inner {
  position: absolute;
  border-radius: 2.32px;
}
.icons-inner {
  top: 0.94em;
  left: 4.06em;
  border: 1.2px solid #c5c5c5;
  display: flex;
  flex-direction: column;
  padding: 0.44em 0.29em;
  align-items: flex-start;
  justify-content: flex-start;
}
.icons-child1 {
  top: 0.77em;
  left: 4.35em;
  background-color: #c5c5c5;
  width: 0.14em;
  height: 2.03em;
  transform: rotate(-90deg);
  transform-origin: 0 0;
}
.div68 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
  white-space: pre-wrap;
}
.frame-parent9,
.icons-container {
  display: flex;
  justify-content: flex-start;
}
.icons-container {
  width: 17.25em;
  flex-direction: row;
  align-items: center;
  gap: 1.06em;
}
.frame-parent9 {
  flex-direction: column;
  align-items: flex-start;
  gap: 0.63em;
  z-index: 1;
}
.div70 {
  position: absolute;
  margin: 0 !important;
  top: 1.67em;
  left: 1em;
  font-size: 0.75em;
  line-height: 0.83em;
  font-weight: 300;
  z-index: 2;
  color: #3b3b3b;
}
.organizmloader,
.parent22 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.organizmloader {
  border-radius: 16px;
  background-color: rgba(237, 244, 255, 0.3);
  width: 18.75em;
  padding: 3em 0.75em 1.25em;
  box-sizing: border-box;
  align-items: flex-start;
  position: relative;
  gap: 1em;
  color: #000;
}
.parent22 {
  position: absolute;
  top: 2.25em;
  left: 1.31em;
  align-items: center;
  gap: 1.13em;
  color: rgba(59, 59, 59, 0.9);
}
.frame-child11 {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 48px;
  width: 5.19em;
  height: 5.19em;
  overflow: hidden;
}
.icon-child9 {
  position: absolute;
  top: 0.09em;
  left: 2.23em;
  background-color: #d9d9d9;
  width: 0.05em;
  height: 2.97em;
}
.icon-child10 {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 7.2px;
  border: 2.2px solid #d9d9d9;
  box-sizing: border-box;
  width: 4.5em;
  height: 3.15em;
}
.frame-child12 {
  position: relative;
  border-radius: 1.44px;
  background-color: #d9d9d9;
  width: 0.05em;
  height: 1.26em;
}
.rectangle-parent1 {
  position: absolute;
  top: 0.36em;
  left: 2.97em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.09em;
}
.icon-child11 {
  position: absolute;
  top: 0.36em;
  left: 1.35em;
  border-radius: 1.44px;
  background-color: #d9d9d9;
  width: 0.09em;
  height: 1.26em;
}
.icon-child12 {
  position: absolute;
  top: 0.45em;
  left: 1.53em;
  width: 0.42em;
  height: 1.13em;
}
.icon-child13,
.icon-child14,
.icon-child15,
.icon-child16,
.icon-child17,
.icon-child18,
.icon-child19,
.icon-child20 {
  position: absolute;
  top: 0.36em;
  left: 1.17em;
  border-radius: 1.44px;
  background-color: #d9d9d9;
  width: 0.05em;
  height: 2.52em;
}
.icon-child14,
.icon-child15,
.icon-child16,
.icon-child17,
.icon-child18,
.icon-child19,
.icon-child20 {
  left: 1.03em;
}
.icon-child15,
.icon-child16,
.icon-child17,
.icon-child18,
.icon-child19,
.icon-child20 {
  left: 0.9em;
}
.icon-child16,
.icon-child17,
.icon-child18,
.icon-child19,
.icon-child20 {
  left: 0.77em;
}
.icon-child17,
.icon-child18,
.icon-child19,
.icon-child20 {
  left: 0.63em;
}
.icon-child18,
.icon-child19,
.icon-child20 {
  left: 0.36em;
  height: 0.54em;
}
.icon-child19,
.icon-child20 {
  top: 0.99em;
}
.icon-child20 {
  top: 1.98em;
  left: 2.7em;
  width: 1.17em;
  height: 0.9em;
}
.icon-child21,
.icon-child22 {
  position: absolute;
  left: 1.53em;
}
.icon-child21 {
  top: 1.89em;
  border-radius: 50%;
  background-color: #d9d9d9;
  width: 0.54em;
  height: 0.54em;
}
.icon-child22 {
  top: 0.81em;
  width: 1.44em;
  height: 1.44em;
}
.icon1 {
  position: relative;
  width: 4.5em;
  height: 3.15em;
}
.icon-wrapper {
  position: absolute;
  top: 4.5em;
  left: 0;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(-90deg);
  transform-origin: 0 0;
}
.frame-wrapper3 {
  position: absolute;
  top: 0.56em;
  left: 4.13em;
  width: 3.15em;
  height: 4.5em;
}
.frame-parent11 {
  position: relative;
  width: 7.25em;
  height: 5.19em;
}
.frame-parent10 {
  width: 17.81em;
  flex-direction: row;
  align-items: center;
  gap: 1.19em;
}
.frame-parent10,
.loader5,
.organizmloader1,
.parent23 {
  display: flex;
  justify-content: flex-start;
}
.loader5 {
  border-radius: 24px;
  background-color: #f5f9ff;
  width: 4.38em;
  flex-direction: row;
  padding: 0.44em 0.5em;
  box-sizing: border-box;
  align-items: flex-start;
  gap: 0.38em;
}
.organizmloader1,
.parent23 {
  flex-direction: column;
}
.organizmloader1 {
  border-radius: 16px;
  background-color: rgba(237, 244, 255, 0.3);
  width: 18.75em;
  overflow: hidden;
  padding: 3em 0.75em 1.25em;
  box-sizing: border-box;
  align-items: flex-start;
  gap: 0.63em;
  color: #000;
}
.parent23 {
  position: absolute;
  top: 30.88em;
  left: 1.31em;
  align-items: center;
  gap: 1.13em;
  color: rgba(59, 59, 59, 0.9);
}
.div74 {
  position: absolute;
  top: 50.83em;
  left: 2.75em;
  font-size: 0.75em;
  line-height: 0.83em;
  font-weight: 300;
}
.registration-options2 {
  position: relative;
  width: 21.38em;
  height: 28.81em;
}
.registration-options-wrapper {
  position: absolute;
  top: 156.56em;
  left: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.form-registration {
  position: absolute;
  top: 14.13em;
  left: 0;
  border-radius: 40px 40px 0 0;
  background-color: #fff;
  width: 24.38em;
  height: 213.44em;
  opacity: 0.6;
}
.page-title1,
.page-title5 {
  position: relative;
  font-size: 1.25em;
  line-height: 1.4em;
}
.page-title5 {
  color: rgba(59, 59, 59, 0.17);
}
.page-title-parent {
  position: absolute;
  top: 0.63em;
  left: -64.75em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 7.56em;
}
.header1 {
  position: absolute;
  height: 2.89%;
  width: 100.51%;
  top: 7.72%;
  right: -0.26%;
  bottom: 89.39%;
  left: -0.26%;
}
.span51 {
  letter-spacing: 0.01em;
}
.div75,
.div76 {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 120%;
  font-weight: 600;
}
.div76 {
  font-size: 0.75em;
  letter-spacing: 0.01em;
  line-height: 130%;
  font-weight: 300;
  color: rgba(59, 59, 59, 0.7);
}
.header2 {
  position: absolute;
  top: 3em;
  left: 1.5em;
  width: 21.38em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
  &_desktop {
    position: relative;
    top: 5em;
    left: 1.5em;
    width: 28.38em;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.75em;
    margin: 0 auto;
  }
}
.registration-options-inner {
  position: absolute;
  width: 100%;
  top: calc(50% - 302.5px);
  right: 0;
  left: 0;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 0.5px solid rgba(46, 58, 89, 0.4);
  box-sizing: border-box;
  height: 38.06em;
}
.text11 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 120%;
}
.fields-password-and-mail30 {
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
  color: #2e3a59;
}
.text12 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.03em;
  line-height: 120%;
}
.fields-password-and-mail33 {
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
  color: #2e3a59;
}
.div84 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.06em;
  line-height: 120%;
}
.fields-password-and-mail34 {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f9fbff;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  height: 2.5em;
  display: flex;
  flex-direction: column;
  padding: 0.5em 0.75em;
  align-items: flex-start;
  justify-content: center;
  color: #2e3a59;
}
.registration-options3 {
  position: absolute;
  top: 40.5em;
  left: 0;
  width: 100%;
  height: 38.19em;
}
.text14 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.03em;
  line-height: 120%;
  font-weight: 500;
}
.fields-password-and-mail39 {
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
.div96 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.06em;
  line-height: 120%;
  font-weight: 500;
}
.parent32 {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
.frame-parent16,
.parent33 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.parent33 {
  flex: 1;
  height: 4em;
  flex-direction: column;
  gap: 0.5em;
}
.frame-parent16 {
  align-self: stretch;
  flex-direction: row;
  gap: 0.75em;
}
.span60 {
  letter-spacing: -2px;
  color: red;
}
.div100 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 120%;
}
.fields-password-and-mail42 {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f9fbff;
  border: 0.5px solid #656060;
  padding: 0.5em 0.75em 1em;
  position: relative;
  gap: 0.25em;
  color: #2e3a59;
}
.fields-password-and-mail42,
.frame-parent15,
.parent31 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent15 {
  align-self: stretch;
  gap: 1.25em;
  width: 88%;
}
.parent31 {
  position: absolute;
  top: 19.31em;
  width: 100%;
  gap: 1.5em;
  left: 1.31em;
}
.div104 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 130%;
  font-weight: 500;
}
.fields-password-and-mail43 {
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
}
.fields-password-and-mail-parent1 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.38em;
}
.fieldsinput-group,
.parent37 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 100;
}
.parent37 {
  width: 100%;
  height: 4em;
  gap: 0.5em;
}
.fieldsinput-group {
  position: absolute;
  top: 2.31em;
  left: 1.31em;
  gap: 1.38em;
  width: 88%;
}
.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
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
.frame-parent17,
.parent39 {
  display: flex;
  align-items: flex-start;
}
.frame-parent17 {
  align-self: stretch;
  flex-direction: row;
  padding: 0 3.75em 0 0;
  justify-content: space-between;
  z-index: 100;
}
.parent39 {
  position: absolute;
  top: 12.31em;
  left: 1.31em;
  width: 88%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5em;
}
.child {
  position: absolute;
  width: 100%;
  top: calc(50% - 132.5px);
  right: 0;
  left: 0;
  border-radius: 15px;
  border: 0.5px solid rgba(46, 58, 89, 0.4);
  box-sizing: border-box;
  height: 16.94em;
}
.wrapper19 {
  position: absolute;
  top: 0;
  left: 0.81em;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 0 0.5em;
  align-items: flex-start;
  justify-content: flex-start;
}
.div101,
.div102 {
  position: absolute;
  top: 0;
  width: 100%;
  height: 17.31em;
}
.div102 {
  left: 0;
}
.registration-options-parent {
  position: absolute;
  top: 10.5em;
  left: 6vw;
  width: 87.7vw;
  height: 77.56em;
}
.registration-options-parent_desktop {
  position: relative;
  top: 8.5em;

  width: 28.8em;
  height: 77.56em;
  margin: 0 auto;
}
.b2 {
  position: relative;
  font-size: 1em;
  line-height: 1.75em;
}
.buttonnext1 {
  position: absolute;
  top: 90.06em;
  left: 1.5em;
  border-radius: 20px;
  background-color: #fdd674;
  width: 88%;
  height: 3em;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--color-darkslategray-100);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  &_desktop {
    position: relative;
    top: 12.5em;
    left: 0.2em;
    border-radius: 20px;
    background-color: #fdd674;
    width: 28.8em;
    height: 3em;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    color: var(--color-darkslategray-100);
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
    cursor: pointer;
  }
}
.swipe-down {
  position: absolute;
  top: 0.75em;
  left: 10.88em;
  border-radius: 25px;
  background-color: #cad0e4;
  width: 2.63em;
  height: 0.31em;
}
.form-registration-56 {
  position: absolute;
  top: 8em;
  left: 0;
  border-radius: 40px 40px 0 0;
  background-color: #fff;
  width: 100vw;
  height: 110.94em;
}
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
.div111 {
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

.loader6 {
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
.div113 {
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
.div116 {
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
  height: 110.69em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
  overflow: hidden;
}
</style>
