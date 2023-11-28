<template>
  <div class="iphone-13-13-form-registr">
    <img class="bg-icon" alt="" src="../public/bg.svg" />

    <div class="form-registration-46">
      <router-link
        to=""
        :class="isMobile ? 'buttonnext' : 'buttonnext_desktop buttonnext'"
        @click="handleNextButton"
      >
        <b class="b1">Закончить регистрацию</b>
      </router-link>
      <div :class="isMobile ? 'header' : 'header_desktop header'">
        <img
          class="icons3dpersona-creditors"
          alt=""
          src="../public/icons3dpersona-creditors@2x.png"
        />

        <div class="group">
          <div class="div8">Почти готово!</div>
          <div class="div9">
            Пожалуйста предоставьте дополнительную информацию о работе и вашем
            доходе
          </div>
        </div>
      </div>
      <div
        :class="isMobile ? 'frame-group' : 'frame-group_desktop frame-group'"
      >
        <div class="frame-inner"></div>
        <div class="fieldsinputchoise-parent">
          <div class="fieldsinputchoise">
            <div class="div10">
              <span class="span">Вид занятости </span>
              <span class="span1">*</span>
            </div>
            <catos-select
              v-if="isMobile"
              :placeholder="optionsWork[0]"
              :options="optionsWork"
              :value="borrowerDataStore.borrowerDTO.employment_type"
              @selected="ev => (borrowerDataStore.borrowerDTO.employment_type = ev)"
              :optionWidth="77"
              :style="{ width: '100%' }"
            ></catos-select>
            <catos-select
              v-else
              :placeholder="optionsWork[0]"
              :options="optionsWork"
              :value="borrowerDataStore.borrowerDTO.employment_type"
              @selected="ev => (borrowerDataStore.borrowerDTO.employment_type = ev)"
              :optionWidthDesk="329"
              :style="{ width: '100%' }"
            ></catos-select>
          </div>
          <div class="fieldsinputchoise">
            <div class="div11">Ежемесячный доход</div>
            <input-data
              placeholder="В рублях"
              :style="{ width: '100%' }"
              :right="true"
              name="revenue"
              :model-value="valueRevenue"
              @update:model-value="borrowerDataStore.borrowerDTO.revenue = Number($event)"
            >
              <template v-slot:right-icon>
                <img src="@/assets/images/iconseditoutline-black.svg" />
              </template>
            </input-data>
          </div>
        </div>
        <div class="frame">
          <div class="div12">Вид занятости и доход</div>
        </div>
      </div>
      <div
        :class="
          isMobile
            ? 'frame-container'
            : 'frame-container_desktop frame-container'
        "
      >
        <div
          :class="
            isMobile ? 'rectangle-div' : 'rectangle-div_desktop rectangle-div'
          "
        ></div>
        <div class="fieldsinputchoise-parent">
          <div class="fieldsinputchoise">
            <div class="div10">
              <span class="span">Образование </span>
              <span class="span1">*</span>
            </div>
            <catos-select
              v-if="isMobile"
              :placeholder="optionsEducation[0]"
              :options="optionsEducation"
              :value="borrowerDataStore.borrowerDTO.education"
              @selected="ev => (borrowerDataStore.borrowerDTO.education = ev)"
              :optionWidth="77"
              :style="{ width: '100%' }"
              data-element="select-education"
            ></catos-select>
            <catos-select
              v-else
              :placeholder="optionsEducation[0]"
              :options="optionsEducation"
              :value="borrowerDataStore.borrowerDTO.education"
              @selected="ev => (borrowerDataStore.borrowerDTO.education = ev)"
              :optionWidthDesk="500"
              :style="{ width: '100%' }"
              data-element="select-education"
            ></catos-select>
          </div>
          <div class="fieldsinputchoise">
            <div class="div14">
              <span>Семейное положение </span>
              <span class="span1">*</span>
            </div>
            <catos-select
              v-if="isMobile"
              :placeholder="optionsFamaly[0]"
              :options="optionsFamaly"
              :value="borrowerDataStore.borrowerDTO.relationship"
              @selected="ev => (borrowerDataStore.borrowerDTO.relationship = ev)"
              :optionWidth="77"
              :style="{ width: '100%' }"
              data-element="select-famaly"
            ></catos-select>
            <catos-select
              v-else
              :placeholder="optionsFamaly[0]"
              :options="optionsFamaly"
              :value="borrowerDataStore.borrowerDTO.relationship"
              @selected="ev => (borrowerDataStore.borrowerDTO.relationship = ev)"
              :optionWidthDesk="329"
              :style="{ width: '100%' }"
              data-element="select-famaly"
            ></catos-select>
          </div>
          <div class="fieldsinputchoise">
            <div class="div14">
              <span>Есть ли у вас дети </span>
              <span class="span1">*</span>
            </div>
            <catos-select
              v-if="isMobile"
              :placeholder="optionsChildren[0]"
              :options="optionsChildren"
              :value="optionsChildren[borrowerDataStore.borrowerDTO.children]"
              @selected="ev => (borrowerDataStore.borrowerDTO.children = optionsChildren.indexOf(ev))"
              :optionWidth="77"
              :style="{ width: '100%' }"
              data-element="select-children"
            ></catos-select>
            <catos-select
              v-else
              :placeholder="optionsChildren[0]"
              :options="optionsChildren"
              :value="optionsChildren[borrowerDataStore.borrowerDTO.children]"
              @selected="ev => (borrowerDataStore.borrowerDTO.children = optionsChildren.indexOf(ev))"
              :optionWidthDesk="329"
              :style="{ width: '100%' }"
              data-element="select-children"
            ></catos-select>
          </div>
          <div class="fieldsinputchoise">
            <div class="div14">
              <span>Есть ли у вас судимость? </span>
              <span class="span1">*</span>
            </div>
            <catos-select
              v-if="isMobile"
              :placeholder="optionsCriminal[0]"
              :options="optionsCriminal"
              :value="borrowerDataStore.borrowerDTO.criminal"
              @selected="ev => (borrowerDataStore.borrowerDTO.criminal = ev)"
              :optionWidth="77"
              :style="{ width: '100%' }"
              data-element="select-creminal"
            ></catos-select>
            <catos-select
              v-else
              :placeholder="optionsCriminal[0]"
              :options="optionsCriminal"
              :value="borrowerDataStore.borrowerDTO.criminal"
              @selected="ev => (borrowerDataStore.borrowerDTO.criminal = ev)"
              :optionWidthDesk="329"
              :style="{ width: '100%' }"
              data-element="select-creminal"
            ></catos-select>
          </div>
        </div>
        <div class="frame">
          <div class="div12">Общая информация</div>
        </div>
        <div class="fieldsinputchoise5">
          <div class="div14">
            <span>Как вы узнали о нас ? </span>
            <span class="span1">*</span>
          </div>
          <catos-select
            v-if="isMobile"
            :placeholder="optionsChannel[0]"
            :options="optionsChannel"
            :value="borrowerDataStore.borrowerDTO.survey"
            @selected="ev => (borrowerDataStore.borrowerDTO.survey = ev)"
            :optionWidth="77"
            :style="{ width: '100%' }"
            top
            data-element="select-channel"
          ></catos-select>
          <catos-select
            v-else
            :placeholder="optionsChannel[0]"
            :options="optionsChannel"
            :value="borrowerDataStore.borrowerDTO.survey"
            @selected="ev => (borrowerDataStore.borrowerDTO.survey = ev)"
            :optionWidthDesk="329"
            :style="{ width: '100%' }"
            top
            data-element="select-channel"
          ></catos-select>
        </div>
      </div>
    </div>
    <div class="header1">
      <b class="page-title1">Регистрация</b>
    </div>
    <div class="slidersteps">
      <div class="loader"></div>
      <div class="numbers">
        <div class="div21">из</div>
        <div class="div21">7</div>
      </div>
      <div class="steps">
        <div class="div23">5 шаг</div>
      </div>
    </div>
    <!-- <router-link class="buttonback" to="" @click="$router.go(-1)">
      <div class="div24">Назад</div>
      <img class="search-icon" alt="" src="../public/search-icon.svg" />
    </router-link> -->
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import router from '@/router';
import catosSelect from "../../../components/fields/catos-select.vue";
import inputData from "../../../components/fields/input-data.vue";
import { useDevice } from "@/compossables/useDevice";
import { useBorrowerDataStore } from "@/stores/borrowerData";
import { userinfo } from '@/api/documents.api';
import { numberWithSpaces } from "@/utils/bitDepthNumbers"

const { isMobile } = useDevice();
const valueRevenue = computed(() => borrowerDataStore.borrowerDTO.revenue === 0 ? '' : numberWithSpaces(borrowerDataStore.borrowerDTO.revenue.toString()));
const handleNextButton = async () => {
  await userinfo(borrowerDataStore.borrowerDTO)
    .then((res) => {
      if (res.status === 201) {
        console.log('Data saved');
        router.push({name: 'connect-wallet'});
      }
      else {
        console.log(res);
      }
      })
    .catch((err) => {
      console.log(err);
    })  
};

const borrowerDataStore = useBorrowerDataStore();
const optionsWork = [
  "Основное место работы",
  "Дополнительное место работы",
  "Работа по совместительству",
  "Частичная занятость",
  "Временная работа",
  "Удалённая работа",
  "Сезонная работа",
  "Домашний труд",
  "Самозанятые",
  "Индивидуальные предприниматели",
  "Фрилансеры",
];
const optionsEducation = [
  "Начальное общее образование",
  "Основное общее образование",
  "Среднее общее образование",
  "Начальное профессиональное образование",
  "Среднее профессиональное образование",
  "Высшее образование — бакалавриат",
  "Высшее образование — специалитет",
  "Высшее образование — магистратура",
  "Послевузовское образование (аспирантура/докторантура)",
];
const optionsFamaly = [
  "Не женат / не замужем",
  "Женат / Замужем",
  "В гражданском браке",
  "В разводе",
  "Вдовец / Вдова",
];
const optionsChildren = ["Нет", "1", "2", "3", "4", "5 и более", ""];
const optionsCriminal = [
  "Нет судимости",
  "Есть судимость",
  "Условная судимость",
  "Судимость погашена",
];
const optionsChannel = [
  "Интернет-поиск",
  "Социальные сети",
  "Рекомендация друзей",
  "Реклама на ТВ",
  "Реклама на радио",
  "Печатная реклама",
  "Электронная рассылка",
  "Участие в мероприятиях",
  "Другое",
];
</script>

<style scoped lang="scss">
.bg-icon {
  position: absolute;
  top: 0;
  left: 0;
  height: 20.88em;
}
.b1 {
  flex: 1;
  position: relative;
  font-size: 1em;
  line-height: 1.75em;
}
.buttonnext {
  position: absolute;
  top: 56.25em;
  left: 6.5vw;
  border-radius: 20px;
  background-color: #ffdb6d;
  width: 87.7vw;
  height: 3em;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  text-align: center;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  color: #3b3b3b;
  text-decoration: none;
  &_desktop {
    position: relative;
    top: 62em;
    left: 0em;
    border-radius: 20px;
    background-color: #ffdb6d;
    width: 23.38em;
    height: 3em;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    padding: 0.5em 0;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
    color: #3b3b3b;
    text-decoration: none;
  }
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
.div8,
.div9 {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
}
.div9 {
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
  color: rgba(59, 59, 59, 0.7);
}
.group,
.header {
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
  width: 87.8vw;
  flex-direction: row;
  align-items: center;
  gap: 0.75em;
  &_desktop {
    position: relative;
    top: 2.25em;
    left: 0em;
    width: 23.38em;
    flex-direction: row;
    align-items: center;
    gap: 0.75em;
    margin: 0 auto;
  }
}
.span {
  font-weight: 300;
}
.span1 {
  color: red;
}
.div10,
.text {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.text {
  font-size: 0.88em;
  letter-spacing: 0.03em;
  line-height: 120%;
  font-weight: 300;
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
.fields-password-and-mail2,
.fieldsinputchoise {
  width: 18.75em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.fields-password-and-mail2 {
  border-radius: 16px;
  border: 0.5px solid #2e3a59;
  box-sizing: border-box;
  height: 2.5em;
  padding: 0.5em 0.75em;
  justify-content: center;
  color: rgba(59, 59, 59, 0.5);
}
.fieldsinputchoise {
  justify-content: flex-start;
  gap: 0.5em;
}
.div11 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
  font-weight: 300;
}
.checkboxdone-icon,
.iconsedit-outline {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
}
.checkboxdone-icon {
  border-radius: 4.14px;
}
.iconsedit-outline-parent {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.alesso-waitson-anatilio-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0;
  align-items: center;
  justify-content: space-between;
}
.fieldsinput1,
.fieldsinputchoise-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 87.5%;
}
.fieldsinput1 {
  border-radius: 16px;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  width: 18.75em;
  height: 2.5em;
  padding: 0.5em 0.75em;
  justify-content: space-between;
  color: rgba(59, 59, 59, 0.5);
}
.fieldsinputchoise-parent {
  position: absolute;
  top: 2.19em;
  left: 1.31em;
  justify-content: flex-start;
  gap: 1.38em;
}
.frame-inner {
  position: absolute;
  width: 100%;
  top: calc(50% - 102.5px);
  right: 0;
  left: 0;
  border-radius: 15px;
  border: 0.5px solid rgba(46, 58, 89, 0.4);
  box-sizing: border-box;
  height: 13em;
}
.div12 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
  font-weight: 500;
}
.frame {
  position: absolute;
  top: -0.06em;
  left: 0.81em;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 0 0.5em;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-group {
  position: absolute;
  top: 9em;
  left: 6vw;
  width: 87.7vw;
  height: 13.19em;
  &_desktop {
    position: relative;
    top: 6em;
    left: 0em;
    width: 23.38em;
    height: 13.19em;
    margin: 0 auto;
  }
}
.div14 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.rectangle-div {
  position: absolute;
  width: 88.7vw;
  top: calc(50% - 235.5px);
  right: 0;
  left: 0;
  border-radius: 15px;
  border: 0.5px solid rgba(46, 58, 89, 0.4);
  box-sizing: border-box;
  height: 30em;
  &_desktop {
    position: relative;
    width: 23.38em;
    top: calc(50% - 235.5px);
    right: 0;
    left: 0;
    border-radius: 15px;
    border: 0.5px solid rgba(46, 58, 89, 0.4);
    box-sizing: border-box;
    height: 30em;
  }
}
.fieldsinputchoise5 {
  position: absolute;
  top: 24.06em;
  left: 1.31em;
  width: 87.5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.frame-container {
  position: absolute;
  top: 24em;
  left: 6vw;
  width: 87.7vw;
  height: 29.81em;
  &_desktop {
    position: relative;
    top: 9em;
    left: 0em;
    width: 23.38em;
    height: 29.81em;
    margin: 0 auto;
  }
}
.form-registration-46 {
  position: absolute;
  top: 12.25em;
  left: 0;
  border-radius: 40px 40px 0 0;
  background-color: #fff;
  width: 100vw;
  height: 68.19em;
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
  height: 3.87%;
  width: 100.51%;
  top: 10.33%;
  right: -0.26%;
  bottom: 85.79%;
  left: -0.26%;
}
.battery-icon {
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
.div19 {
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
.div21 {
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
.div23 {
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
.div24 {
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
  height: 80.44em;
  overflow-y: auto;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
  overflow-x: hidden;
}
</style>
