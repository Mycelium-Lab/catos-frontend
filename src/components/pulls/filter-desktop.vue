<template>
  <div class="modal-wrapper">
    <div class="filter-parent">
      <div
        :class="
          manage === 'pulls'
            ? 'filter_manage-pulls filter'
            : manage === 'bids'
            ? 'filter_manage-bids filter'
            : 'filter'
        "
      >
        <div class="rectangle-parent">
          <div class="frame-child" />
          <div class="header-pop-up">
            <div class="page-title-parent">
              <div class="page-title">Фильтры</div>
              <img
                class="close-icon"
                alt=""
                src="@/assets/desktop/close.svg"
                @click="close"
              />
            </div>
            <div class="frame-child" />
          </div>
        </div>
        <div class="frame-parent">
          <div class="parent">
            <chips-bar desktop></chips-bar>
            <div class="fieldsinputchoise-parent">
              <div v-if="role === 'creditor'" class="fieldsinputchoise">
                <div class="div1">Настройте токен:</div>
                <catos-select
                  placeholder="Catos"
                  :options="options"
                  :value="value"
                  :style="{ width: '100%' }"
                  :optionWidthDesk="710"
                  @selected="ev => (value = ev)"
                ></catos-select>
              </div>
              <div
                v-if="role === 'collector'"
                :style="{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between',
                  gap: '1.88em',
                }"
              >
                <div
                  v-if="role === 'collector'"
                  :style="{ width: '100%' }"
                  class="fieldsinputchoise"
                >
                  <div class="div1">Токену:</div>
                  <catos-select
                    placeholder="Catos"
                    :options="options"
                    :value="value"
                    :style="{ width: '100%' }"
                    :optionWidthDesk="340"
                    @selected="ev => (value = ev)"
                  ></catos-select>
                </div>
                <div
                  v-if="role === 'collector'"
                  :style="{ width: '100%' }"
                  class="fieldsinputchoise"
                >
                  <div class="div1">Месту проживания:</div>
                  <catos-select
                    placeholder="Catos"
                    :options="options"
                    :value="valuePlace"
                    :style="{ width: '100%' }"
                    :optionWidthDesk="340"
                    @selected="ev => (valuePlace = ev)"
                  ></catos-select>
                </div>
              </div>

              <!--Admin - user and Admin - bids-->
              <div
                v-if="
                  role === 'admin' && (manage === 'user' || manage === 'bids')
                "
                :style="{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between',
                  gap: '1.88em',
                }"
              >
                <div
                  v-if="
                    role === 'admin' && (manage === 'user' || manage === 'bids')
                  "
                  :style="{ width: '100%' }"
                  class="fieldsinputchoise"
                >
                  <div class="div1">Роли:</div>
                  <catos-select
                    placeholder="Catos"
                    :options="options"
                    :value="valueRoles"
                    :style="{ width: '100%' }"
                    :optionWidthDesk="340"
                    @selected="ev => (valueRoles = ev)"
                  ></catos-select>
                </div>
                <div :style="{ width: '100%' }" class="fieldsinputchoise">
                  <div class="div1">Статусу:</div>
                  <catos-select
                    placeholder="Catos"
                    :options="options"
                    :value="value"
                    :style="{ width: '100%' }"
                    :optionWidthDesk="340"
                    @selected="ev => (value = ev)"
                  ></catos-select>
                </div>
              </div>
              <div
                v-if="
                  role === 'admin' && (manage === 'user' || manage === 'bids')
                "
                :style="{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between',
                  gap: '1.88em',
                }"
              >
                <div
                  v-if="
                    role === 'admin' && (manage === 'user' || manage === 'bids')
                  "
                  :style="{ width: '50%' }"
                  class="fieldsinputchoise"
                >
                  <div class="div1">Стране:</div>
                  <catos-select
                    placeholder="Catos"
                    :options="options"
                    :value="valuePlace"
                    :style="{ width: '100%' }"
                    :optionWidthDesk="340"
                    @selected="ev => (valuePlace = ev)"
                  ></catos-select>
                </div>
                <div
                  :style="{
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }"
                  class="fieldsinputchoise"
                  v-if="
                    role === 'admin' && (manage === 'user' || manage === 'bids')
                  "
                >
                  <div
                    :style="{
                      gap: '0.63em',
                      display: 'flex',
                      flexDirection: 'column',
                    }"
                  >
                    <div class="div1">По дате регистрации:</div>

                    <input-data
                      type="date"
                      placeholder="01.02.2022"
                      :style="{ width: '100%' }"
                    ></input-data>
                  </div>

                  <div
                    :style="{
                      gap: '0.63em',
                      display: 'flex',
                      flexDirection: 'column',
                    }"
                  >
                    <div class="div1" :style="{ visibility: 'hidden' }">
                      По дате регистрации:
                    </div>
                    <input-data
                      type="date"
                      placeholder="01.02.2022"
                      :style="{ width: '100%' }"
                    ></input-data>
                  </div>
                </div>
              </div>

              <!--Admin - pulls-->

              <div
                v-if="role === 'admin' && manage === 'pulls'"
                :style="{ width: '100%' }"
                class="fieldsinputchoise"
              >
                <div class="div1">Роли:</div>
                <catos-select
                  placeholder="Catos"
                  :options="options"
                  :value="valueRoles"
                  :style="{ width: '100%' }"
                  :optionWidthDesk="710"
                  @selected="ev => (valueRoles = ev)"
                ></catos-select>
              </div>

              <div
                v-if="role === 'admin' && manage === 'pulls'"
                :style="{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between',
                  gap: '1.88em',
                }"
              >
                <div
                  v-if="role === 'admin' && manage === 'pulls'"
                  :style="{ width: '100%' }"
                  class="fieldsinputchoise"
                >
                  <div class="div1">Стране:</div>
                  <catos-select
                    placeholder="Catos"
                    :options="options"
                    :value="valuePlace"
                    :style="{ width: '100%' }"
                    :optionWidthDesk="340"
                    @selected="ev => (valuePlace = ev)"
                  ></catos-select>
                </div>
                <div
                  :style="{ width: '100%' }"
                  class="fieldsinputchoise"
                  v-if="role === 'admin' && manage === 'pulls'"
                >
                  <div class="div1">По дате регистрации:</div>
                  <input-data
                    type="date"
                    placeholder="01.02.2022"
                    :style="{ width: '100%' }"
                  ></input-data>
                </div>
              </div>

              <!--Admin - loans-->
              <div
                v-if="role === 'admin' && manage === 'loans'"
                :style="{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between',
                  gap: '1.88em',
                }"
              >
                <div
                  v-if="role === 'admin' && manage === 'loans'"
                  :style="{ width: '100%' }"
                  class="fieldsinputchoise"
                >
                  <div class="div1">Заемщику:</div>
                  <catos-select
                    placeholder="Catos"
                    :options="options"
                    :value="valueLoans"
                    :style="{ width: '100%' }"
                    :optionWidthDesk="340"
                    @selected="ev => (valueLoans = ev)"
                  ></catos-select>
                </div>
                <div
                  v-if="role === 'admin' && manage === 'loans'"
                  :style="{ width: '100%' }"
                  class="fieldsinputchoise"
                >
                  <div class="div1">Токену:</div>
                  <catos-select
                    placeholder="Catos"
                    :options="options"
                    :value="valueToken"
                    :style="{ width: '100%' }"
                    :optionWidthDesk="340"
                    @selected="ev => (valueToken = ev)"
                  ></catos-select>
                </div>
              </div>
              <div
                v-if="role === 'admin' && manage === 'loans'"
                :style="{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between',
                  gap: '1.88em',
                }"
              >
                <div
                  v-if="role === 'admin' && manage === 'loans'"
                  :style="{ width: '100%' }"
                  class="fieldsinputchoise"
                >
                  <div class="div1">Токену:</div>
                  <catos-select
                    placeholder="Catos"
                    :options="options"
                    :value="value"
                    :style="{ width: '100%' }"
                    :optionWidthDesk="340"
                    @selected="ev => (value = ev)"
                  ></catos-select>
                </div>
                <div
                  v-if="role === 'admin' && manage === 'loans'"
                  :style="{ width: '100%' }"
                  class="fieldsinputchoise"
                >
                  <div class="div1">Статусу:</div>
                  <catos-select
                    placeholder="Catos"
                    :options="options"
                    :value="valueStatus"
                    :style="{ width: '100%' }"
                    :optionWidthDesk="340"
                    @selected="ev => (valueStatus = ev)"
                  ></catos-select>
                </div>
              </div>
              <!---->

              <div v-if="role === 'borrower'" class="frame-group">
                <div class="instance-parent">
                  <div class="group">
                    <div class="div6">Одобренному лимиту:</div>

                    <range-minmax-slider
                      :max="3000"
                      v-model:min-value="sliderMinDbt"
                      v-model:max-value="sliderMaxDbt"
                      inputLabel="cat"
                      desktop
                    ></range-minmax-slider>
                  </div>
                  <div class="group">
                    <div class="div6">Сроку:</div>
                    <range-minmax-slider
                      :max="365"
                      v-model:min-value="sliderMinOverdue"
                      v-model:max-value="sliderMaxOverdue"
                      inputLabel="day"
                      desktop
                    ></range-minmax-slider>
                  </div>
                </div>
                <div class="instance-parent">
                  <div class="parent1">
                    <div class="div6">Дневной ставке:</div>
                    <range-minmax-slider
                      :max="30"
                      v-model:min-value="sliderMinRange"
                      v-model:max-value="sliderMaxRange"
                      inputLabel="percent"
                      desktop
                    ></range-minmax-slider>
                  </div>
                  <div class="parent1">
                    <div class="div6">Беспроцентному периоду:</div>
                    <range-minmax-slider
                      :max="30"
                      v-model:min-value="sliderMinCost"
                      v-model:max-value="sliderMaxCost"
                      inputLabel="percent"
                      desktop
                    ></range-minmax-slider>
                  </div>
                </div>
              </div>

              <div v-else-if="role === 'creditor'" class="frame-group">
                <div class="instance-parent">
                  <div class="group">
                    <div class="div6">Дневной ставке:</div>

                    <range-minmax-slider
                      :max="30"
                      v-model:min-value="sliderMinRange"
                      v-model:max-value="sliderMaxRange"
                      inputLabel="percent"
                      desktop
                    ></range-minmax-slider>
                  </div>
                  <div class="group">
                    <div class="div6">Сроку:</div>
                    <range-minmax-slider
                      :max="365"
                      v-model:min-value="sliderMinOverdue"
                      v-model:max-value="sliderMaxOverdue"
                      inputLabel="day"
                      desktop
                    ></range-minmax-slider>
                  </div>
                </div>
                <div class="instance-parent">
                  <div class="parent1">
                    <div class="div6">Беспроцентному периоду:</div>
                    <range-minmax-slider
                      :max="30"
                      v-model:min-value="sliderMinCost"
                      v-model:max-value="sliderMaxCost"
                      inputLabel="percent"
                      desktop
                    ></range-minmax-slider>
                  </div>
                  <div class="parent1">
                    <div class="div6">Процент возврата:</div>
                    <range-minmax-slider
                      :max="30"
                      v-model:min-value="sliderMinReturn"
                      v-model:max-value="sliderMaxReturn"
                      inputLabel="percent"
                      desktop
                    ></range-minmax-slider>
                  </div>
                </div>
              </div>
              <div v-else-if="role === 'depositor'" class="frame-group">
                <div class="instance-parent">
                  <div class="group">
                    <div class="div6">Доходности:</div>

                    <range-minmax-slider
                      :max="3000"
                      v-model:min-value="sliderMinDbt"
                      v-model:max-value="sliderMaxDbt"
                      inputLabel="ton"
                      desktop
                    ></range-minmax-slider>
                  </div>
                  <div class="group">
                    <div class="div6">Количеству инвесторов:</div>
                    <range-minmax-slider
                      :max="3650"
                      v-model:min-value="sliderMinDepositor"
                      v-model:max-value="sliderMaxDepositor"
                      inputLabel="depositor"
                      desktop
                    ></range-minmax-slider>
                  </div>
                </div>
                <div class="instance-parent">
                  <div class="parent1">
                    <div class="div6">Дневной ставки:</div>
                    <range-minmax-slider
                      :max="30"
                      v-model:min-value="sliderMinRange"
                      v-model:max-value="sliderMaxRange"
                      inputLabel="percent"
                      desktop
                    ></range-minmax-slider>
                  </div>
                  <div class="parent1">
                    <div class="div6">Беспроцентному периоду:</div>
                    <range-minmax-slider
                      :max="30"
                      v-model:min-value="sliderMinCost"
                      v-model:max-value="sliderMaxCost"
                      inputLabel="percent"
                      desktop
                    ></range-minmax-slider>
                  </div>
                </div>
              </div>
              <div v-else-if="role === 'collector'" class="frame-group">
                <div class="instance-parent">
                  <div class="group">
                    <div class="div6">Текущему долгу:</div>

                    <range-minmax-slider
                      :max="3000"
                      v-model:min-value="sliderMinDbt"
                      v-model:max-value="sliderMaxDbt"
                      inputLabel="ton"
                      desktop
                    ></range-minmax-slider>
                  </div>
                  <div class="group">
                    <div class="div6">Просроченных дней:</div>
                    <range-minmax-slider
                      :max="365"
                      v-model:min-value="sliderMinOverdue"
                      v-model:max-value="sliderMaxOverdue"
                      inputLabel="day"
                      desktop
                    ></range-minmax-slider>
                  </div>
                </div>
                <div class="instance-parent">
                  <div class="parent1">
                    <div class="div6">Дневной ставки:</div>
                    <range-minmax-slider
                      :max="30"
                      v-model:min-value="sliderMinRange"
                      v-model:max-value="sliderMaxRange"
                      inputLabel="percent"
                      desktop
                    ></range-minmax-slider>
                  </div>
                  <div class="parent1">
                    <div class="div6">Стоимость займа:</div>
                    <range-minmax-slider
                      :max="3000"
                      v-model:min-value="sliderMinDbt"
                      v-model:max-value="sliderMaxDbt"
                      inputLabel="ton"
                      desktop
                    ></range-minmax-slider>
                  </div>
                </div>
              </div>
              <div
                v-else-if="role === 'admin' && manage === 'user'"
                class="frame-group"
                :style="{ width: '712px' }"
              >
                <div class="instance-parent" :style="{ width: '100%' }">
                  <div class="group" :style="{ width: '100%' }">
                    <div class="div6">Стоимости займа:</div>

                    <range-minmax-slider
                      :max="3000"
                      v-model:min-value="sliderMinDbt"
                      v-model:max-value="sliderMaxDbt"
                      inputLabel="ton"
                      desktop
                    ></range-minmax-slider>
                  </div>
                </div>
              </div>

              <!--Admin Pulls-->
              <div
                v-else-if="role === 'admin' && manage === 'pulls'"
                class="frame-group"
              >
                <div class="instance-parent">
                  <div class="group">
                    <div class="div6">Беспроцентному периоду:</div>

                    <range-minmax-slider
                      :max="30"
                      v-model:min-value="sliderMinCost"
                      v-model:max-value="sliderMaxCost"
                      inputLabel="percent"
                      desktop
                    ></range-minmax-slider>
                  </div>
                  <div class="group">
                    <div class="div6">Количеству выданных займов:</div>
                    <range-minmax-slider
                      :max="3650"
                      v-model:min-value="sliderMinDepositor"
                      v-model:max-value="sliderMaxDepositor"
                      inputLabel="depositor"
                      desktop
                    ></range-minmax-slider>
                  </div>
                </div>
                <div class="instance-parent">
                  <div class="parent1">
                    <div class="div6">Дневной ставки:</div>
                    <range-minmax-slider
                      :max="30"
                      v-model:min-value="sliderMinRange"
                      v-model:max-value="sliderMaxRange"
                      inputLabel="percent"
                      desktop
                    ></range-minmax-slider>
                  </div>
                  <div class="parent1">
                    <div class="div6">Проценту не возврата:</div>
                    <range-minmax-slider
                      :max="100"
                      v-model:min-value="sliderMinNotReturn"
                      v-model:max-value="sliderMaxNotReturn"
                      inputLabel="percent"
                      desktop
                    ></range-minmax-slider>
                  </div>
                </div>
              </div>
              <!--Admin Loans-->
              <div
                v-if="role === 'admin' && manage === 'loans'"
                :style="{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between',
                  gap: '1.88em',
                }"
              >
                <div
                  v-if="role === 'admin' && manage === 'loans'"
                  :style="{ width: '100%' }"
                  class="fieldsinputchoise"
                >
                  <div class="div1">По дате выдачи:</div>
                  <input-data
                    type="date"
                    placeholder="01.02.2022"
                    :style="{ width: '100%' }"
                  ></input-data>
                </div>
                <div
                  :style="{ width: '100%' }"
                  class="fieldsinputchoise"
                  v-if="role === 'admin' && manage === 'loans'"
                >
                  <div :style="{ visibility: 'hidden' }" class="div1">
                    По дате регистрации:
                  </div>
                  <input-data
                    type="date"
                    placeholder="01.02.2022"
                    :style="{ width: '100%' }"
                  ></input-data>
                </div>
                <div
                  :style="{ width: '100%' }"
                  class="fieldsinputchoise"
                  v-if="role === 'admin' && manage === 'loans'"
                >
                  <div class="div1">По смене статуса:</div>
                  <input-data
                    type="date"
                    placeholder="01.02.2022"
                    :style="{ width: '100%' }"
                  ></input-data>
                </div>
                <div
                  :style="{ width: '100%' }"
                  class="fieldsinputchoise"
                  v-if="role === 'admin' && manage === 'loans'"
                >
                  <div :style="{ visibility: 'hidden' }" class="div1">
                    По дате регистрации:
                  </div>
                  <input-data
                    type="date"
                    placeholder="01.02.2022"
                    :style="{ width: '100%' }"
                  ></input-data>
                </div>
              </div>
            </div>
          </div>
          <div class="buttonnext-parent">
            <div class="buttonnext" @click="close">
              <b class="ton-kepeer">Сохранить и выйти</b>
            </div>
            <div class="div18">Сбросить параметры</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import chipsBar from "../ui-kit/chips-bar.vue";
import inputData from "../fields/input-data.vue";

import catosSelect from "../fields/catos-select.vue";
import rangeMinmaxSlider from "../ui-kit/range-minmax-slider.vue";

const role = computed(() => {
  return JSON.parse(localStorage.getItem("role") || "{}");
});
const manage = computed(() => {
  return JSON.parse(localStorage.getItem("manage") || "{}");
});

const value = ref("");
const valuePlace = ref("");
const valueRoles = ref("");
const valueLoans = ref("");
const valueStatus = ref("");
const valueToken = ref("");

const options = ["Россия", "Украина", "Казахстан", "Белорусь"];
const emtis = defineEmits(["close"]);

const close = () => {
  emtis("close");
};
const sliderMinOverdue = ref(1);
const sliderMaxOverdue = ref(365);
const sliderMinDbt = ref(0);
const sliderMaxDbt = ref(3000);
const sliderMinRange = ref(
  role.value === "depositor" ||
    role.value === "collector" ||
    manage.value === "pulls"
    ? 1
    : 0.1
);
const sliderMaxRange = ref(30);
const sliderMinCost = ref(0.1);
const sliderMaxCost = ref(30);
const sliderMinReturn = ref(0.1);
const sliderMaxReturn = ref(30);
const sliderMinNotReturn = ref(0.1);
const sliderMaxNotReturn = ref(100);
const sliderMinDepositor = ref(1);
const sliderMaxDepositor = ref(3650);
</script>
<style scoped lang="scss">
.modal-wrapper {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
.frame-child {
  align-self: stretch;
  position: relative;
  background-color: #f6f4fc;
  height: 0.06em;
}
.page-title {
  flex: 1;
  position: relative;
  font-size: 1.13em;
  line-height: 130%;
  font-weight: 600;
}
.close-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
}
.page-title-parent {
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 1.25em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.81em;
}
.header-pop-up {
  align-self: stretch;
  border-radius: 15px 15px 0px 0px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.rectangle-parent {
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.div1 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.div2 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 100%;
}
.icons {
  position: relative;
  width: 1.5em;
  height: 1.5em;
}
.tag {
  border-radius: 24.18px;
  background-color: #e5e2f1;
  display: flex;
  flex-direction: row;
  padding: 0.38em 0.75em;
  align-items: center;
  justify-content: center;
  gap: 0.75em;
}
.tag1 {
  border-radius: 24.18px;
  border: 1px solid #e4e0f1;
  display: flex;
  flex-direction: row;
  padding: 0.38em 0.75em;
  align-items: center;
  justify-content: center;
  gap: 0.75em;
}
.tags-brand {
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
}
.div {
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1em;
}
.text {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
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
  color: rgba(46, 58, 89, 0.36);
}
.fieldsinputchoise {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.div6 {
  position: relative;
  font-size: 1em;
}
.span1 {
  font-weight: 300;
}
.span {
  letter-spacing: 0.02em;
}
.span4 {
  font-weight: 300;
  font-family: Inter;
  color: rgba(46, 58, 89, 0.4);
}
.span3 {
  letter-spacing: 0.03em;
}
.tag3 {
  flex: 1;
  border-radius: 16px;
  background-color: #f6f4fc;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.38em 1.5em;
  align-items: center;
  justify-content: center;
}
.span6 {
  color: #2e3a59;
}
.div8 {
  position: relative;
  font-size: 1em;
  letter-spacing: 0.01em;
  line-height: 130%;
}
.tag-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.scroll-thumb-icon {
  position: relative;
  width: 21.38em;
  height: 2.38em;
}
.frame-container {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
  color: rgba(46, 58, 89, 0.4);
}
.group {
  width: 21.25em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.88em;
}
.instance-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.parent1 {
  width: 21.25em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.88em;
}
.frame-group {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.88em;
}
.fieldsinputchoise-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.75em;
  color: #3b3b3b;
  width: 100%;
}
.parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.88em;
  width: 100%;
}
.ton-kepeer {
  position: relative;
  font-size: 1em;
  line-height: 130%;
}
.buttonnext {
  border-radius: 20px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  width: 20.63em;
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.div18 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
  color: rgba(38, 38, 38, 0.62);
  text-align: left;
  cursor: pointer;
}
.buttonnext-parent {
  width: 21.38em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5em;
  text-align: center;
  color: #f3f3f3;
}
.frame-parent {
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  align-items: center;
  justify-content: flex-start;
  gap: 2.25em;
  width: 100%;
  color: #2e3a59;
}
.filter {
  position: absolute;
  top: calc(50% - 334px);
  left: calc(50% - 375px);
  border-radius: 15px;
  border: 1px solid #f6f4fc;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  &_manage-pulls {
    top: -50px;
  }
  &_manage-bids {
    width: 752px;
  }
}
.filter-parent {
  position: relative;
  width: 100%;
  height: 41.75em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
