<template>
  <div class="iphone-13-13-form-registr-proverka">
    <img class="bg-icon" alt="" src="../public/bg.svg" />

    <div class="form-registration-56">
      <div class="header2">
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
      <div class="text-and-fill3"></div>
      <div
        :class="
          isMobile ? 'frame-parent12' : 'frame-parent12_desktop frame-parent12'
        "
      >
        <div class="frame-parent13">
          <div class="fieldsinput-group">
            <div class="fieldsinput">
                <div class="div18">
                  <span class="span8">Имя </span>
                  <span class="span2">
                    <span>*</span>
                    <span class="span10"> </span>
                  </span>
                </div>
                <input-data
                  :style="{ width: '100%' }"
                  placeholder="Введите имя"
                  :right="true"
                  v-model:model-value="passportDataStore.passportDTO.name"
                >
                  <template v-slot:right-icon>
                    <img src="@/assets/images/iconseditoutline-black.svg" />
                  </template>
                </input-data>
              </div>
              <div class="fieldsinput">
                <div class="div18">
                  <span class="span8">Фамилия </span>
                  <span class="span2">
                    <span>*</span>
                    <span class="span10"> </span>
                  </span>
                </div>
                <input-data
                  :style="{ width: '100%' }"
                  placeholder="Введите фамилию"
                  :right="true"
                  v-model:model-value="passportDataStore.passportDTO.surname"
                >
                  <template v-slot:right-icon>
                    <img src="@/assets/images/iconseditoutline-black.svg" />
                  </template>
                </input-data>
              </div>
              <div class="fieldsinput">
                <div class="div22">
                  <span class="span14">Отчество (если есть) </span>
                  <span class="span15">
                    <span>*</span>
                    <span class="span10"> </span>
                  </span>
                </div>
                <input-data
                  :style="{ width: '100%' }"
                  placeholder="Введите отчество"
                  :right="true"
                  v-model:model-value="passportDataStore.passportDTO.middlename"
                >
                  <template v-slot:right-icon>
                    <img src="@/assets/images/iconseditoutline-black.svg" />
                  </template>
                </input-data>
              </div>
            <div class="fieldsinput6">
              <div class="div15">
                <span class="span9">Национальность</span>
                <span class="span7"> </span>
              </div>
              <catos-select
                placeholder="Россия"
                :options="options"
                :value="passportDataStore.passportDTO.nationality"
                @selected="ev => (passportDataStore.passportDTO.nationality = ev)"
                :optionWidth="77"
                :style="{ width: '100%' }"
                data-element="select-nation"
              ></catos-select>
            </div>
            <div class="fieldsinput6">
              <div class="goa-filejpg">Должность</div>
              <input-data
                placeholder="Банкир"
                :style="{ width: '100%' }"
                :right="true"
                v-model:model-value="paperDataStore.paperDTO.work_position"
              >
                <template v-slot:right-icon>
                  <img src="@/assets/images/iconseditoutline-black.svg" />
                </template>
              </input-data>
            </div>
            <div class="des-and-bbn">
              <div class="wrapper1">
                <div class="div27">
                  <p class="p">
                    Продолжая, вы подтверждаете, что у вас есть все необходимые
                    полномочия
                  </p>
                  <p class="p">
                    для осуществления кредиторской деятельности от имени вашей
                    организации
                  </p>
                </div>
              </div>
              <div class="text-and-button">
                <div class="text2">
                  <div class="div28">
                    <span>
                      <span class="span">Владение</span>
                      <span class="span23">
                        <span class="span10"> </span>
                      </span>
                    </span>
                    <span class="span23">
                      <span>
                        <span>*</span>
                        <span class="span10"> </span>
                      </span>
                    </span>
                  </div>
                  <div class="div29">Владеете ли вы более 25% компании?</div>
                </div>
              </div>
              <button-slider
                :style="{ width: '100%' }"
                @on-slide="ev => paperDataStore.paperDTO.ownership = Boolean(ev)"
              ></button-slider>
            </div>
          </div>
          <div class="frame-child19"></div>
          <div class="wrapper12">
            <div class="div31">
              <span>Данные представителя организации </span>
              <span class="span1">*</span>
            </div>
          </div>
          
        </div>
        <div class="registration-options3">
          <div class="registration-options-child1"></div>
          <div class="text-and-fill">
            <div class="div31">
              <span>Адрес регистрации</span>
              <span class="span1"> *</span>
            </div>
          </div>
          <div class="fieldsinputchoise-parent">
            <div class="fieldsinputchoise">
              <div class="goa-filejpg">
                Область <span class="span29">, </span>край
              </div>

              <catos-select

                placeholder="Выберите область"
                :options="options"
                :value="
                passportDataStore.passportDTO.registration_address.region
                "
                @selected="
                ev =>
                  (passportDataStore.passportDTO.registration_address.region =
                    ev)
              "
                :optionWidth="77"
                :style="{ width: '100%' }"
              ></catos-select>
            </div>
            <div class="fieldsinputchoise">
              <div class="goa-filejpg">Район</div>
              <catos-select
                placeholder="Выберите населенный пункт"
                :options="options"
                :value="passportDataStore.passportDTO.registration_address.city"
                @selected="
                ev =>
                  (passportDataStore.passportDTO.registration_address.city =
                    ev)
              "
                :optionWidth="77"
                :style="{ width: '100%' }"
              ></catos-select>
            </div>
            <div class="fieldsinput">
              <div class="goa-filejpg">Населенный пункт</div>
              <catos-select
                placeholder="Выберите район"
                :options="options"
                :value="
                passportDataStore.passportDTO.registration_address.neighborhood
              "
                @selected="
                ev =>
                  (passportDataStore.passportDTO.registration_address.neighborhood =
                    ev)
              "
                :optionWidth="77"
                :style="{ width: '100%' }"
              ></catos-select>
            </div>
            <div class="fieldsinputchoise">
              <div class="goa-filejpg">Улица</div>
              <input-data
                placeholder="Введите улицу"
                :style="{ width: '100%' }"
                :right="true"
                v-model:model-value="passportDataStore.passportDTO.registration_address.street"
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
                <input-data placeholder="1" :style="{ width: '100%' }"
                v-model:model-value="passportDataStore.passportDTO.registration_address.house"
                >
                </input-data>
              </div>
              <div class="parent11">
                <div class="div22">Корпус</div>
                <input-data
                  placeholder="1/2"
                  :style="{ width: '100%' }"
                  v-model:model-value="passportDataStore.passportDTO.registration_address.housing"
                ></input-data>
              </div>
            </div>
            <div class="frame-parent3">
              <div class="parent11">
                <div class="div22">Строение</div>
                <input-data
                  placeholder="-"
                  :style="{ width: '100%' }"
                  v-model:model-value="passportDataStore.passportDTO.registration_address.building"
                ></input-data>
              </div>
              <div class="parent11">
                <div class="div22">Квартира</div>
                <input-data
                  placeholder="№23"
                  :style="{ width: '100%' }"
                  v-model:model-value="passportDataStore.passportDTO.registration_address.apartment"
                ></input-data>
              </div>
            </div>
            <div class="parent11">
              <div class="div22">Индекс</div>
              <input-data
                placeholder="240 432"
                :style="{ width: '100%' }"
                v-model:model-value="indexPassportString"
              ></input-data>
            </div>
          </div>
        </div>
        <div
          :class="
            isMobile
              ? 'registration-options4'
              : 'registration-options4_desktop registration-options4'
          "
        >
          <div class="registration-options-child2"></div>
          <div class="text-and-fill">
            <div class="div31">Данные организации</div>
          </div>
          <div class="fieldsinputchoise-parent">
            <div class="fieldsinputchoise">
              <div class="goa-filejpg">Страна</div>
              <catos-select
                placeholder="Россия"
                :options="options"
                :optionWidth="77"
                :style="{ width: '100%' }"
                data-element="select-state"
              ></catos-select>
            </div>
            <div class="fieldsinput">
              <div class="div9">
                <span class="span">Форма регистрации </span>
                <span class="span1">
                  <span>*</span>
                  <span class="span2"> </span>
                </span>
              </div>
              <catos-select
                placeholder="Выберите форму регистрации"
                :options="options"
                :value="paperDataStore.paperDTO.registration_form"
                @selected="
                  ev => (paperDataStore.paperDTO.registration_form = ev)
                "
                :optionWidth="77"
                :style="{ width: '100%' }"
                data-element="select-form"
              ></catos-select>
            </div>
            <div class="fieldsinputchoise">
              <div class="div9">
                <span class="span">Наименование организации </span>
                <span class="span1">
                  <span>*</span>
                  <span class="span2"> </span>
                </span>
              </div>
              <input-data
                placeholder="Введите наименование организации"
                :style="{ width: '100%' }"
                :right="true"
                v-model:model-value="paperDataStore.paperDTO.name"
              >
                <template v-slot:right-icon>
                  <img src="@/assets/images/iconseditoutline-black.svg" />
                </template>
              </input-data>
            </div>
            <div class="fieldsinputchoise">
              <div class="div9">
                <span class="span">ОГРН или ОГРНИП </span>
                <span class="span1">
                  <span>*</span>
                  <span class="span2"> </span>
                </span>
              </div>
              <input-data
                placeholder="Введите ОГРН или ОГРНИП"
                :style="{ width: '100%' }"
                :right="true"
                v-model:model-value="regNumberString.value"
                @update:model-value="
                  ev => (paperDataStore.paperDTO.registration_number = ev)
                "
              >
                <template v-slot:right-icon>
                  <img src="@/assets/images/iconseditoutline-black.svg" />
                </template>
              </input-data>
            </div>
            <div class="fieldsinputchoise">
              <div class="div22">
                <span>Область, край </span>
                <span class="span2">* </span>
              </div>
              <catos-select
                placeholder="Северо-западный округ"
                :options="options"
                :value="paperDataStore.paperDTO.address.region"
                :optionWidth="77"
                :style="{ width: '100%' }"
                @selected="
                  ev =>
                    (paperDataStore.paperDTO.address.region = ev)
                "
              ></catos-select>
            </div>
            <div class="fieldsinput">
            <div class="div22">
              <span>Район</span>
              <span class="span2">* </span>
            </div>
            <catos-select
              placeholder="Красносельский"
              :options="options"
              :value="
                paperDataStore.paperDTO.address.neighborhood
              "
              :optionWidth="77"
              :style="{ width: '100%' }"
              @selected="
                ev =>
                  (paperDataStore.paperDTO.address.neighborhood =
                    ev)
              "
            ></catos-select>
          </div>
          <div class="fieldsinputchoise3">
            <div class="div22">Населенный пункт</div>
            <catos-select
              placeholder="Санкт-Петербург"
              :options="options"
              :value="paperDataStore.paperDTO.address.city"
              :optionWidth="77"
              :style="{ width: '100%' }"
              @selected="
                ev => (paperDataStore.paperDTO.address.city = ev)
              "
            ></catos-select>
          </div>
          <div class="fieldsinputchoise3">
            <div class="div10">Улица</div>
            <input-data
              placeholder="Начните вводить адресс"
              :style="{ width: '100%' }"
              :right="true"
              v-model:model-value="paperDataStore.paperDTO.address.street"
            >
              <template v-slot:right-icon>
                <img src="@/assets/images/iconseditoutline-black.svg" />
              </template>
            </input-data>
          </div>
        
          <div class="frame-parent5">
            <div class="frame-parent3">
              <div class="parent11">
                <div class="div10">Дом</div>
                <input-data
                  placeholder="1"
                  :style="{ width: '100%' }"
                   v-model:model-value="paperDataStore.paperDTO.address.house"
                ></input-data>
              </div>
              <div class="parent11">
                <div class="div10">Корпус</div>
                <input-data
                  placeholder="1"
                  :style="{ width: '100%' }"
                  v-model:model-value="paperDataStore.paperDTO.address.housing"
                ></input-data>
              </div>
            </div>
            <div class="frame-parent3" :style="{ marginTop: '1em' }">
              <div class="parent11">
                <div class="div10">Строение</div>
                <input-data
                  placeholder="1"
                  :style="{ width: '100%' }"
                  v-model:model-value="paperDataStore.paperDTO.address.building"
                ></input-data>
              </div>
              <div class="parent11">
                <div class="div10">Квартира</div>
                <input-data
                  placeholder="1"
                  :style="{ width: '100%' }"
                  v-model:model-value="paperDataStore.paperDTO.address.apartment"
                ></input-data>
              </div>
            </div>
            <div class="parent11" :style="{ marginTop: '1em' }">
              <div class="div10">Индекс</div>
                <input-data
                  placeholder="193 984"
                  :style="{ width: '100%' }"
                  v-model:model-value="indexPaperString"
                ></input-data>
            </div>
        </div>
          
            <div class="fieldsinputchoise">
              <div class="goa-filejpg">Веб-сайт организации</div>
              <input-data
                placeholder="Введите веб-сайт организации"
                :style="{ width: '100%' }"
                :right="true"
                v-model:model-value="paperDataStore.paperDTO.website"
              >
                <template v-slot:right-icon>
                  <img src="@/assets/images/iconseditoutline-black.svg" />
                </template>
              </input-data>
            </div>
          </div>
        </div>
        <div :class="isMobile ? 'parent35' : 'parent35_desktop parent35'">
          <div class="div21">
            <span class="txt">
              <span class="span14">Данные паспорта</span>
              <span class="span20"> </span>
            </span>
          </div>
          <div class="frame-parent17">
            <div class="frame-wrapper">
              <div class="frame-wrapper">
                <div class="fieldsinputchoise">
                  <div class="div22">
                    <span>Страна выдачи документа </span>
                    <span class="span2">* </span>
                  </div>
                  <input-data
                    :style="{ width: '100%' }"
                    placeholder="Гражданство"
                    :right="true"
                    v-model:model-value="passportDataStore.passportDTO.country"
                  >
                    <template v-slot:right-icon>
                      <img src="@/assets/images/iconseditoutline-black.svg" />
                    </template>
                  </input-data>
                </div>
              </div>
            </div>
            <div class="frame-parent18">
              <div class="parent36">
                <div class="div22">
                  <span>Серия и номер </span>
                  <span class="span1">* </span>
                </div>
                <input-data
                  placeholder="34 446462"
                  :style="{ width: '100%' }"
                  :right="true"
                  v-model:model-value="passportNumberString.value"
                >
                  <template v-slot:right-icon>
                    <img src="@/assets/images/iconseditoutline-black.svg" />
                  </template>
                </input-data>
              </div>
              <div class="parent37">
                <div class="div22">
                  <span>Дата выдачи </span>
                  <span class="span1">* </span>
                </div>
                <div class="fields-password-and-mail-wrapper">
                  <input-data
                    type="date"
                    placeholder="01.02.2022"
                    :style="{ width: '100%' }"
                    v-model:model-value="
                      passportDataStore.passportDTO.issue_date
                    "
                  ></input-data>
                </div>
              </div>
              
            </div>
            <div class="fieldsinputchoise">
              <div class="div22">
                <span
                  >Кем выдан
                  <span class="span80"> </span>
                </span>
                <span class="span80">
                  <span>* </span>
                </span>
              </div>
              <catos-textarea
                placeholder="МВД России по Москве, и Московской области"
                :value=" passportDataStore.passportDTO.issuing_organization"
                @selected="passportDataStore.passportDTO.issuing_organization = $event"
              ></catos-textarea>
            </div>
          </div>
        </div>
      </div>
      <router-link class="buttonnext1" to="" @click="handleNextClick">
        <b class="b2">Сохранить и продолжить</b>
      </router-link>
    </div>
    <div class="slidersteps">
      <div class="loader6"></div>
      <div class="numbers">
        <div class="div120">из</div>
        <div class="div120">7</div>
      </div>
      <div class="steps">
        <div class="div67">5 шаг</div>
      </div>
    </div>
    <router-link class="buttonback" to="" @click="$router.go(-1)">
      <div class="div123">Назад</div>
      <img class="search-icon" alt="" src="../public/search-icon.svg" />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import inputData from "../../../components/fields/input-data.vue";
import catosTextarea from "../../../components/fields/catos-textarea.vue";
import catosSelect from "../../../components/fields/catos-select.vue";
import buttonSlider from "../../../components/ui-kit/buttons/button-slider.vue";
import { useUserDataStore } from "@/stores/userData";
import { usePaperDataStore } from "@/stores/paperData";
import { usePassportDataStore } from "@/stores/passportData";
import { ref, reactive , computed} from "vue";
import { passports, papers } from "@/api/documents.api";
import router from "@/router";

const paperDataStore = usePaperDataStore()
const passportDataStore = usePassportDataStore()

const indexPassportString = computed(() => {
  return passportDataStore.passportDTO.registration_address.index.toString();
});

const indexPaperString = computed(() => {
  return paperDataStore.paperDTO.address.index.toString();
});

const regNumberString = reactive({
  value:
  paperDataStore.paperDTO.registration_number === 0
      ? ""
      : paperDataStore.paperDTO.registration_number.toString(),
});

import { useDevice } from "@/compossables/useDevice";

const { isMobile } = useDevice();

const value = ref("");
const valueOrganisation = ref("");
const valueFormRegistration = ref("");
const optionsFormRegistration = ["ОАО", "АО", "ПАО"];
const options = {
  euro: [
    "Россия",
    "Германия",
    "Великобритания",
    "Франиця",
    "Италия",
    "Испания",
    "Украина",
    "Польша",
    "Румыния",
    "Нидерланды",
    "Беларусь",
    "Греция",
    "Португалия",
    "Чехия",
    "Швеция",
  ],
  asia: [
    "Китай",
    "Индия",
    "Индонезия",
    "Пакистан",
    "Бангладеш",
    "Япония",
    "Филиппины",
    "Вьетнам",
    "Турция",
    "Иран",
    "Таиланд",
    "Мьянма",
    "Южная Корея",
    "Ирак",
    "Афганистан",
  ],
  africa: [
    "Нигерия",
    "Эфиопия",
    "Египет",
    "ДР Конго",
    "Южная Африка",
    "Танзания",
    "Судан",
    "Алжир",
    "Уганда",
    "Морокко",
  ],
  america: [
    "США",
    "Бразилия",
    "Мексика",
    "Колумбия",
    "Аргентина",
    "Перу",
    "Венесуэла",
    "Чили",
    "Гватемала",
    "Эквадор",
  ],
  australia_okeania: ["Австралия", "Папуа - Новая Гвинея", "Новая Зеландия"],
};
const optionsRegion = {
  republic: [
    "Адыгея",
    "Башкортостан",
    "Бурятия",
    "Алтай",
    "Дагестан",
    "Донецкая Народная Республика",
    "Ингушетия",
    "Кабардино-Балкария",
    "Калмыкия",
    "Карачаево-Черкесия",
    "Карелия",
    "Коми",
    "Крым",
    "Луганская Народная Республика",
    "Марий Эл",
    "Мордовия",
    "Саха / Якутия",
    "Северная Осетия - Алания",
    "Татарстан",
    "Тыва",
    "Удмуртия",
    "Хакасия",
    "Чеченская",
    "Чувашская - Чувашия",
  ],
  edge: [
    "Алтайский",
    "Забайкальский",
    "Камчатский",
    "Краснодарский",
    "Красноярский",
    "Пермский",
    "Приморский",
    "Ставропольский",
    "Хабаровский",
  ],
  region: [
    "Амурская",
    "Архангельская",
    "Астраханская",
    "Белгородская",
    "Брянская",
    "Владимирская",
    "Волгоградская",
    "Вологодская",
    "Воронежская",
    "Еврейская Автономная",
    "Запорожская",
    "Ивановская",
    "Иркутская",
    "Калининградская",
    "Калужская",
    "Кемеровская - Кузбасс",
    "Кировская",
    "Костромская",
    "Курганская",
    "Курская",
    "Ленинградская",
    "Липецкая",
    "Магаданская",
    "Московская",
    "Мурманская",
    "Нижегородская",
    "Новгородская",
    "Новосибирская",
    "Омская",
    "Оренбургская",
    "Орловская",
    "Пензенская",
    "Псковская",
    "Ростовская",
    "Рязанская",
    "Самарская",
    "Саратовская",
    "Сахалинская",
    "Свердловская",
    "Смоленская",
    "Тамбовская",
    "Тверская",
    "Томская",
    "Тульская",
    "Тюменская",
    "Ульяновская",
    "Херсонская",
    "Челябинская",
    "Ярославская",
  ],
};

const optionsArea = {
  adygea: [
    "Гиагинский",
    "Кошехабльский",
    "Красногвардейский",
    "Майкопский",
    "Тахтамукайский",
    "Теучежский",
    "Шовгеновский",
  ],
  bashkortostan: [
    "Абзелиловский",
    "Альшеевский",
    "Архангельский",
    "Аскинский",
    "Аургазинский",
    "Баймакский",
    "Бакалинский",
    "Балтачевский",
    "Белебеевский",
    "Белокатайский",
    "Белорецкий",
    "Бижбулякский",
    "Бирский",
    "Благоварский",
    "Благовещенский",
    "Буздякский",
    "Бураевский",
    "Бурзянский",
    "Гафурийский",
    "Давлекановский",
    "Дуванский",
    "Дюртюлинский",
    "Ермекеевский",
    "Зианчуринский",
    "Зилаирский",
    "Иглинский",
    "Илишевский",
    "Ишимбайский",
    "Калтасинский",
    "Караидельский",
    "Кармаскалинский",
    "Кигинский",
    "Краснокамский",
    "Кугарчинский",
    "Кушнаренковский",
    "Куюргазинский",
    "Мелеузовский",
    "Мечетлинский",
    "Мишкинский",
    "Миякинский",
    "Нуримановский",
    "Салаватский",
    "Стерлибашевский",
    "Стерлитамакский",
    "Татышлинский",
    "Туймазинский",
    "Уфимский",
    "Учалинский",
    "Федоровский",
    "Хайбуллинский",
    "Чекмагушевский",
    "Чишминский",
    "Шаранский",
    "Янаульский",
  ],
  buryatia: [
    "Баргузинский",
    "Баунтовский эвенкийский",
    "Бичурский",
    "Джидинский",
    "Еравнинский",
    "Заиграевский",
    "Закаменский",
    "Иволгинский",
    "Кабанский",
    "Кижингинский",
    "Курумканский",
    "Кяхтинский",
    "Муйский",
    "Мухоршибирский",
    "Окинский",
    "Прибайкальский",
    "Северобайкальский",
    "Селенгинский",
    "Тарбагатайский",
    "Тункинский",
    "Хоринский",
  ],
  altay: [
    "Кош-Агачский",
    "Майминский",
    "Онгудайский",
    "Турочакский",
    "Улаганский",
    "Усть-Канский",
    "Усть-Коксинский",
    "Чемальский",
    "Чойский",
    "Шебалинский",
  ],
  dagestan: [
    "Агульский",
    "Акушинский",
    "Ахвахский",
    "Ахтынский",
    "Бабаюртовский",
    "Ботлихский",
    "Буйнакский",
    "Гергебильский",
    "Гумбетовский",
    "Гунибский",
    "Дахадаевский",
    "Дербентский",
    "Докузпаринский",
    "Казбековский",
    "Кайтагский",
    "Карабудахкентский",
    "Каякентский",
    "Кизилюртовский",
    "Кизлярский",
    "Кулинский",
    "Кумторкалинский",
    "Курахский",
    "Лакский",
    "Левашинский",
    "Магарамкентский",
    "Новолакский",
    "Ногайский",
    "Рутульский",
    "Сергокалинский",
    "Сулейман-Стальский",
    "Табасаранский",
    "Тарумовский",
    "Тляратинский",
    "Унцукульский",
    "Хасавюртовский",
    "Хивский",
    "Хунзахский",
    "Цумадинский",
    "Цунтинский",
    "Чародинский",
    "Шамильский",
  ],
  ingushetia: ["Джейрахский", "Малгобекский", "Назрановский", "Сунженский"],
  dnr: [
    "Артемовский",
    "Волновахский",
    "Володарский",
    "Донецк",
    "Енакиево",
    "Краматорский",
    "Красноармейский",
    "Першотравневый",
    "Харцызск",
  ],
  "kabardino-balkaria": [
    "Баксанский",
    "Зольский",
    "Лескенский",
    "Майский",
    "Прохладненский",
    "Терский",
    "Урванский",
    "Чегемский",
    "Черекский",
    "Эльбрусский",
  ],
  kalmykia: [
    "Городовиковский",
    "Ики-Бурульский",
    "Кетченеровский",
    "Лаганский",
    "Малодербетовский",
    "Октябрьский",
    "Приютненский",
    "Сарпинский",
    "Целинный",
    "Черноземельский",
    "Юстинский",
    "Яшалтинский",
    "Яшкульский",
  ],
  "karachay-cherkessia": [
    "Абазинский",
    "Адыге-Хабльский",
    "Зеленчукский",
    "Карачаевский",
    "Малокарачаевский",
    "Ногайский",
    "Прикубанский",
    "Урупский",
    "Усть-Джегутинский",
    "Хабезский",
  ],
  karelia: [
    "Беломорский",
    "Калевальский",
    "Кемский",
    "Кондопожский",
    "Лахденпохский",
    "Лоухский",
    "Медвежьегорский",
    "Муезерский",
    "Олонецкий",
    "Питкярантский",
    "Прионежский",
    "Пряжинский",
    "Пудожский",
    "Сегежский",
    "Суоярвский",
  ],
  komi: [
    "Ижемский",
    "Княжпогостский",
    "Койгородский",
    "Корткеросский",
    "Прилузский",
    "Сыктывдинский",
    "Сысольский",
    "Троицко-Печорский",
    "Удорский",
    "Усть-Вымский",
    "Усть-Куломский",
    "Усть-Цилемский",
  ],
  "mariy-el": [
    "Волжский",
    "Горномарийский",
    "Звениговский",
    "Килемарский",
    "Куженерский",
    "Мари-Турекский",
    "Медведевский",
    "Моркинский",
    "Новоторъяльский",
    "Оршанский",
    "Параньгинский",
    "Сернурский",
    "Советский",
    "Юринский",
  ],
  mordovia: [
    "Ардатовский",
    "Атюрьевский",
    "Атяшевский",
    "Большеберезниковский",
    "Большеигнатовский",
    "Дубенский",
    "Ельниковский",
    "Зубово-Полянский",
    "Инсарский",
    "Ичалковский",
    "Кадошкинский",
    "Ковылкинский",
    "Кочкуровский",
    "Краснослободский",
    "Лямбирский",
    "Ромодановский",
    "Рузаевский",
    "Старошайговский",
    "Темниковский",
    "Теньгушевский",
    "Торбеевский",
    "Чамзинский",
  ],
  saha: [
    "Абыйский",
    "Алданский",
    "Аллаиховский",
    "Амгинский",
    "Анабарский",
    "Булунский",
    "Верхневилюйский",
    "Верхнеколымский",
    "Верхоянский",
    "Вилюйский",
    "Горный",
    "Жиганский",
    "Кобяйский",
    "Ленский",
    "Мегино-Кангаласский",
    "Мирнинский",
    "Момский",
    "Намский",
    "Нерюнгринский",
    "Нижнеколымский",
    "Нюрбинский",
    "Оймяконский",
    "Олекминский",
    "Оленекский",
    "эвенкийский",
    "национальный",
    "Среднеколымский",
    "Сунтарский",
    "Таттинский",
    "Томпонский",
    "Усть-Алданский",
    "Усть-Майский",
    "Усть-Янский",
    "Хангаласский",
    "Чурапчинский",
    "Эвено-Бытантайский",
    "Национальный",
  ],
  alanya: [
    "Алагирский",
    "Ардонский",
    "Дигорский",
    "Ирафский",
    "Кировский",
    "Моздокский",
    "Правобережный",
    "Пригородный",
  ],
  tatarstan: [
    "Агрызский",
    "Азнакаевский",
    "Аксубаевский",
    "Актанышский",
    "Алексеевский",
    "Алькеевский",
    "Альметьевский",
    "Апастовский",
    "Арский",
    "Атнинский",
    "Бавлинский",
    "Балтасинский",
    "Бугульминский",
    "Буинский",
    "Верхнеуслонский",
    "Высокогорский",
    "Дрожжановский",
    "Елабужский",
    "Заинский",
    "Зеленодольский",
    "Кайбицкий",
    "Камско-Устьинский",
    "Кукморский",
    "Лаишевский",
    "Лениногорский",
    "Мамадышский",
    "Менделеевский",
    "Мензелинский",
    "Муслюмовский",
    "Нижнекамский",
    "Новошешминский",
    "Нурлатский",
    "Пестречинский",
    "Рыбно-Слободский",
    "Сабинский",
    "Сармановский",
    "Спасский",
    "Тетюшский",
    "Тукаевский",
    "Тюлячинский",
    "Черемшанский",
    "Чистопольский",
    "Ютазинский",
  ],
  tuva: [
    "Бай-Тайгинский",
    "Барун-Хемчикский",
    "Дзун-Хемчикский",
    "Каа-Хемский",
    "Кызылский",
    "Монгун-Тайгинский",
    "Овюрский",
    "Пий-Хемский",
    "Сут-Хольский",
    "Тандинский",
    "Тере-Хольский",
    "Тес-Хемский",
    "Тоджинский",
    "Улуг-Хемский",
    "Чаа-Хольский",
    "Чеди-Хольский",
    "Эрзинский",
  ],
  udmurtia: [
    "Алнашский",
    "Балезинский",
    "Вавожский",
    "Воткинский",
    "Глазовский",
    "Граховский",
    "Дебёсский",
    "Дебесский",
    "Завьяловский",
    "Игринский",
    "Камбарский",
    "Каракулинский",
    "Кезский",
    "Кизнерский",
    "Киясовский",
    "Красногорский",
    "Малопургинский",
    "Можгинский",
    "Сарапульский",
    "Селтинский",
    "Сюмсинский",
    "Увинский",
    "Шарканский",
    "Юкаменский",
    "Якшур-Бодьинский",
    "Ярский",
  ],
  hakasia: [
    "Алтайский",
    "Аскизский",
    "Бейский",
    "Боградский",
    "Орджоникидзевский",
    "Таштыпский",
    "Усть-Абаканский",
    "Ширинский",
  ],
  сhechnya: [
    "Ачхой-Мартановский",
    "Веденский",
    "Грозненский",
    "Гудермесский",
    "Итум-Калинский",
    "Курчалоевский",
    "Надтеречный",
    "Наурский",
    "Ножай-Юртовский",
    "Серноводский",
    "Урус-Мартановский",
    "Шалинский",
    "Шаройский",
    "Шатойский",
    "Шелковской",
  ],
  сhuvashia: [
    "Алатырский",
    "Аликовский",
    "Батыревский",
    "Вурнарский",
    "Ибресинский",
    "Канашский",
    "Козловский",
    "Комсомольский",
    "Красноармейский",
    "Красночетайский",
    "Мариинско-Посадский",
    "Моргаушский",
    "Порецкий",
    "Урмарский",
    "Цивильский",
    "Чебоксарский",
    "Шемуршинский",
    "Шумерлинский",
    "Ядринский",
    "Яльчикский",
    "Янтиковский",
  ],
  altai: [
    "Алейский",
    "Алтайский",
    "Баевский",
    "Бийский",
    "Благовещенский",
    "Бурлинский",
    "Быстроистокский",
    "Волчихинский",
    "Егорьевский",
    "Ельцовский",
    "Завьяловский",
    "Залесовский",
    "Заринский",
    "Змеиногорский",
    "Зональный",
    "Калманский",
    "Каменский",
    "Ключевский",
    "Косихинский",
    "Красногорский",
    "Краснощёковский",
    "Крутихинский",
    "Кулундинский",
    "Курьинский",
    "Кытмановский",
    "Локтевский",
    "Мамонтовский",
    "Михайловский",
    "Немецкий",
    "национальный",
    "Новичихинский",
    "Павловский",
    "Панкрушихинский",
    "Первомайский",
    "Петропавловский",
    "Поспелихинский",
    "Ребрихинский",
    "Родинский",
    "Романовский",
    "Рубцовский",
    "Смоленский",
    "Советский",
    "Солонешенский",
    "Солтонский",
    "Суетский",
    "Табунский",
    "Тальменский",
    "Тогульский",
    "Топчихинский",
    "Третьяковский",
    "Троицкий",
    "Тюменцевский",
    "Угловский",
    "Усть-Калманский",
    "Усть-Пристанский",
    "Хабарский",
    "Целинный",
    "Чарышский",
    "Шелаболихинский",
    "Шипуновский",
  ],
  krasnodarskiy: [
    "Абинский",
    "Анапский",
    "Апшеронский",
    "Белоглинский",
    "Белореченский",
    "Брюховецкий",
    "Выселковский",
    "Гулькевичский",
    "Динской",
    "Ейский",
    "Кавказский",
    "Калининский",
    "Каневской",
    "Кореновский",
    "Красноармейский",
    "Крыловский",
    "Крымский",
    "Курганинский",
    "Кущевский",
    "Лабинский",
    "Ленинградский",
    "Мостовский",
    "Новокубанский",
    "Новопокровский",
    "Отрадненский",
    "Павловский",
    "Приморско-Ахтарский",
    "Северский",
    "Славянский",
    "Староминский",
    "Тбилисский",
    "Темрюкский",
    "Тимашевский",
    "Тихорецкий",
    "Туапсинский",
    "Успенский",
    "Усть-Лабинский",
    "Щербиновский",
  ],
  krasnoyarskiy: [
    "Абанский",
    "Ачинский",
    "Балахтинский",
    "Березовский",
    "Бирилюсский",
    "Боготольский",
    "Богучанский",
    "Большемуртинский",
    "Большеулуйский",
    "Дзержинский",
    "Емельяновский",
    "Енисейский",
    "Ермаковский",
    "Идринский",
    "Иланский",
    "Ирбейский",
    "Казачинский",
    "Канский",
    "Каратузский",
    "Кежемский",
    "Козульский",
    "Краснотуранский",
    "Курагинский",
    "Манский",
    "Минусинский",
    "Мотыгинский",
    "Назаровский",
    "Нижнеингашский",
    "Новоселовский",
    "Партизанский",
    "Пировский",
    "Рыбинский",
    "Саянский",
    "Северо-Енисейский",
    "Сухобузимский",
    "Таймырский",
    "Долгано-Ненецкий",
    "Тасеевский",
    "Туруханский",
    "Тюхтетский",
    "Ужурский",
    "Уярский",
    "Шарыповский",
    "Шушенский",
    "Эвенкийский",
  ],
  primorskiy: [
    "Анучинский",
    "Дальнереченский",
    "Кавалеровский",
    "Кировский",
    "Красноармейский",
    "Лазовский",
    "Михайловский",
    "Надеждинский",
    "Октябрьский",
    "Ольгинский",
    "Партизанский",
    "Пограничный",
    "Пожарский",
    "Спасский",
    "Тернейский",
    "Уссурийский",
    "Ханкайский",
    "Хасанский",
    "Хорольский",
    "Черниговский",
    "Чугуевский",
    "Шкотовский",
    "Яковлевский",
  ],
  stavropolskiy: [
    "Александровский",
    "Андроповский",
    "Апанасенковский",
    "Арзгирский",
    "Благодарненский",
    "Буденновский",
    "Георгиевский",
    "Грачевский",
    "Изобильненский",
    "Ипатовский",
    "Кировский",
    "Кочубеевский",
    "Красногвардейский",
    "Курский",
    "Левокумский",
    "Минераловодский",
    "Нефтекумский",
    "Новоалександровский",
    "Новоселицкий",
    "Петровский",
    "Предгорный",
    "Советский",
    "Степновский",
    "Труновский",
    "Туркменский",
    "Шпаковский",
  ],
  khabarovkiy: [
    "Амурский",
    "Аяно-Майский",
    "Бикинский",
    "Ванинский",
    "Верхнебуреинский",
    "Вяземский",
    "Имени Лазо",
    "Имени Полины Осипенко",
    "Комсомольский",
    "Нанайский",
    "Николаевский",
    "Охотский",
    "Советско-Гаванский",
    "Солнечный",
    "Тугуро-Чумиканский",
    "Ульчский",
    "Хабаровский",
  ],
  amurskaya: [
    "Архаринский",
    "Белогорский",
    "Благовещенский",
    "Бурейский",
    "Завитинский",
    "Зейский",
    "Ивановский",
    "Константиновский",
    "Магдагачинский",
    "Мазановский",
    "Михайловский",
    "Октябрьский",
    "Ромненский",
    "Свободненский",
    "Селемджинский",
    "Серышевский",
    "Сковородинский",
    "Тамбовский",
    "Тындинский",
    "Шимановский",
  ],
  arkhangelskay: [
    "Вельский",
    "Верхнетоемский",
    "Вилегодский",
    "Виноградовский",
    "Каргопольский",
    "Коношский",
    "Котласский",
    "Красноборский",
    "Ленский",
    "Лешуконский",
    "Мезенский",
    "Новая Земля",
    "Няндомский",
    "Онежский",
    "Пинежский",
    "Плесецкий",
    "Приморский",
    "Устьянский",
    "Холмогорский",
    "Шенкурский",
  ],
  astrakhanskaya: [
    "Ахтубинский",
    "Володарский",
    "Енотаевский",
    "Икрянинский",
    "Камызякский",
    "Красноярский",
    "Лиманский",
    "Наримановский",
    "Приволжский",
    "Харабалинский",
    "Черноярский",
  ],
  belgorodskaya: [
    "Алексеевский",
    "Белгородский",
    "Борисовский",
    "Валуйский",
    "Вейделевский",
    "Волоконовский",
    "Грайворонский",
    "Губкинский",
    "Ивнянский",
    "Корочанский",
    "Красненский",
    "Красногвардейский",
    "Краснояружский",
    "Новооскольский",
    "Прохоровский",
    "Ракитянский",
    "Ровеньский",
    "Старооскольский",
    "Чернянский",
    "Шебекинский",
    "Яковлевский",
  ],
  bryanskaya: [
    "Брасовский",
    "Брянский",
    "Выгоничский",
    "Гордеевский",
    "Дубровский",
    "Дятьковский",
    "Жирятинский",
    "Жуковский",
    "Злынковский",
    "Карачевский",
    "Клетнянский",
    "Климовский",
    "Клинцовский",
    "Комаричский",
    "Красногорский",
    "Мглинский",
    "Навлинский",
    "Новозыбковский",
    "Погарский",
    "Почепский",
    "Рогнединский",
    "Севский",
    "Стародубский",
    "Суземский",
    "Суражский",
    "Трубчевский",
    "Унечский",
  ],
  vladimirskaya: [
    "Александровский",
    "Вязниковский",
    "Гороховецкий",
    "Гусь-Хрустальный",
    "Камешковский",
    "Киржачский",
    "Ковровский",
    "Кольчугинский",
    "Меленковский",
    "Муромский",
    "Петушинский",
    "Селивановский",
    "Собинский",
    "Судогодский",
    "Суздальский",
    "Юрьев-Польский",
  ],
  volgogradskaya: [
    "Алексеевский",
    "Быковский",
    "Городищенский",
    "Даниловский",
    "Дубовский",
    "Еланский",
    "Жирновский",
    "Иловлинский",
    "Калачевский",
    "Камышинский",
    "Киквидзенский",
    "Клетский",
    "Котельниковский",
    "Котовский",
    "Кумылженский",
    "Ленинский",
    "Михайловский",
    "Нехаевский",
    "Николаевский",
    "Новоаннинский",
    "Новониколаевский",
    "Октябрьский",
    "Ольховский",
    "Палласовский",
    "Руднянский",
    "Светлоярский",
    "Серафимовичский",
    "Среднеахтубинский",
    "Старополтавский",
    "Суровикинский",
    "Урюпинский",
    "Фроловский",
    "Чернышковский",
  ],
  vologodskaya: [
    "Бабаевский",
    "Бабушкинский",
    "Белозерский",
    "Вашкинский",
    "Великоустюгский",
    "Верховажский",
    "Вожегодский",
    "Вологодский",
    "Вытегорский",
    "Грязовецкий",
    "Кадуйский",
    "Кирилловский",
    "Кичменгско-Городецкий",
    "Междуреченский",
    "Никольский",
    "Нюксенский",
    "Сокольский",
    "Сямженский",
    "Тарногский",
    "Тотемский",
    "Усть-Кубинский",
    "Устюженский",
    "Харовский",
    "Чагодощенский",
    "Череповецкий",
    "Шекснинский",
  ],
  voronezhskaya: [
    "Аннинский",
    "Бобровский",
    "Богучарский",
    "Борисоглебский",
    "Бутурлиновский",
    "Верхнемамонский",
    "Верхнехавский",
    "Воробьевский",
    "Грибановский",
    "Калачеевский",
    "Каменский",
    "Кантемировский",
    "Каширский",
    "Лискинский",
    "Нижнедевицкий",
    "Новоусманский",
    "Новохопёрский",
    "Ольховатский",
    "Острогожский",
    "Павловский",
    "Панинский",
    "Петропавловский",
    "Поворинский",
    "Подгоренский",
    "Рамонский",
    "Репьёвский",
    "Россошанский",
    "Семилукский",
    "Таловский",
    "Терновский",
    "Хохольский",
    "Эртильский",
  ],
  ivanovskaya: [
    "Верхнеландеховский",
    "Вичугский",
    "Гаврилово-Посадский",
    "Заволжский",
    "Ивановский",
    "Ильинский",
    "Кинешемский",
    "Комсомольский",
    "Лежневский",
    "Лухский",
    "Палехский",
    "Пестяковский",
    "Приволжский",
    "Пучежский",
    "Родниковский",
    "Савинский",
    "Тейковский",
    "Фурмановский",
    "Шуйский",
    "Южский",
    "Юрьевецкий",
  ],
  irkutskaya: [
    "Аларский",
    "Ангарский",
    "Балаганский",
    "Баяндаевский",
    "Бодайбинский",
    "Боханский",
    "Братский",
    "Жигаловский",
    "Заларинский",
    "Зиминский",
    "Иркутский",
    "Казачинско-Ленский",
    "Катангский",
    "Качугский",
    "Киренский",
    "Куйтунский",
    "Мамско-Чуйский",
    "Нижнеилимский",
    "Нижнеудинский",
    "Нукутский",
    "Ольхонский",
    "Осинский",
    "Слюдянский",
    "Тайшетский",
    "Тулунский",
    "Усольский",
    "Усть-Илимский",
    "Усть-Кутский",
    "Усть-Удинский",
    "Черемховский",
    "Чунский",
    "Шелеховский",
    "Эхирит-Булагатский",
  ],
  kaliningradskaya: [
    "Багратионовский",
    "Балтийский",
    "Гвардейский",
    "Гурьевский",
    "Гусевский",
    "Зеленоградский",
    "Краснознаменский",
    "Неманский",
    "Нестеровский",
    "Озерский",
    "Полесский",
    "Правдинский",
    "Светлогорский",
    "Славский",
    "Черняховский",
  ],
  kaluzhskaya: [
    "Бабынинский",
    "Барятинский",
    "Боровский",
    "Дзержинский",
    "Думиничский",
    "Жиздринский",
    "Жуковский",
    "Износковский",
    "Кировский",
    "Козельский",
    "Куйбышевский",
    "Людиновский",
    "Малоярославецкий",
    "Медынский",
    "Мещовский",
    "Мосальский",
    "Перемышльский",
    "Спас-Деменский",
    "Сухиничский",
    "Тарусский",
    "Ульяновский",
    "Ферзиковский",
    "Хвастовичский",
    "Юхновский",
  ],
  kamchatskiy: [
    "Алеутский",
    "Быстринский",
    "Елизовский",
    "Карагинский",
    "Мильковский",
    "Олюторский",
    "Пенжинский",
    "Соболевский",
    "Тигильский",
    "Усть-Большерецкий",
    "Усть-Камчатский",
  ],
  kemerovskaya: [
    "Беловский",
    "Гурьевский",
    "Ижморский",
    "Кемеровский",
    "Крапивинский",
    "Ленинск-Кузнецкий",
    "Мариинский",
    "Новокузнецкий",
    "Прокопьевский",
    "Промышленновский",
    "Таштагольский",
    "Тисульский",
    "Топкинский",
    "Тяжинский",
    "Чебулинский",
    "Юргинский",
    "Яйский",
    "Яшкинский",
  ],
  kirovskaya: [
    "Арбажский",
    "Афанасьевский",
    "Белохолуницкий",
    "Богородский",
    "Верхнекамский",
    "Верхошижемский",
    "Вятскополянский",
    "Даровской",
    "Зуевский",
    "Кикнурский",
    "Кильмезский",
    "Кирово-Чепецкий",
    "Котельничский",
    "Куменский",
    "Лебяжский",
    "Лузский",
    "Малмыжский",
    "Мурашинский",
    "Нагорский",
    "Немский",
    "Нолинский",
    "Омутнинский",
    "Опаринский",
    "Оричевский",
    "Орловский",
    "Пижанский",
    "Подосиновский",
    "Санчурский",
    "Свечинский",
    "Слободской",
    "Советский",
    "Сунский",
    "Тужинский",
    "Унинский",
    "Уржумский",
    "Фаленский",
    "Халтуринский",
    "Шабалинский",
    "Юрьянский",
    "Яранский",
  ],
  kostromskaya: [
    "Антроповский",
    "Буйский",
    "Вохомский",
    "Галичский",
    "Кадыйский",
    "Кологривский",
    "Костромской",
    "Красносельский",
    "Макарьевский",
    "Мантуровский",
    "Межевской",
    "Нейский",
    "Нерехтский",
    "Октябрьский",
    "Островский",
    "Павинский",
    "Парфеньевский",
    "Поназыревский",
    "Пыщугский",
    "Солигаличский",
    "Судиславский",
    "Сусанинский",
    "Чухломский",
    "Шарьинский",
  ],
  kurganskaya: [
    "Альменевский",
    "Белозерский",
    "Варгашинский",
    "Далматовский",
    "Звериноголовский",
    "Каргапольский",
    "Катайский",
    "Кетовский",
    "Куртамышский",
    "Лебяжьевский",
    "Макушинский",
    "Мишкинский",
    "Мокроусовский",
    "Петуховский",
    "Половинский",
    "Притобольный",
    "Сафакулевский",
    "Целинный",
    "Частоозерский",
    "Шадринский",
    "Шатровский",
    "Шумихинский",
    "Щучанский",
    "Юргамышский",
  ],
  kurskaya: [
    "Беловский",
    "Большесолдатский",
    "Глушковский",
    "Горшеченский",
    "Дмитриевский",
    "Железногорский",
    "Золотухинский",
    "Касторенский",
    "Конышевский",
    "Кореневский",
    "Курский",
    "Курчатовский",
    "Льговский",
    "Мантуровский",
    "Медвенский",
    "Обоянский",
    "Октябрьский",
    "Поныровский",
    "Пристенский",
    "Рыльский",
    "Советский",
    "Солнцевский",
    "Суджанский",
    "Тимский",
    "Фатежский",
    "Хомутовский",
    "Черемисиновский",
    "Щигровский",
  ],
  leningradskaya: [
    "Волосовский",
    "Волховский",
    "Всеволожский",
    "Выборгский",
    "Гатчинский",
    "Кингисеппский",
    "Киришский",
    "Кировский",
    "Лодейнопольский",
    "Ломоносовский",
    "Лужский",
    "Подпорожский",
    "Приозерский",
    "Сланцевский",
    "Тихвинский",
    "Тосненский",
  ],
  lipetskaya: [
    "Воловский",
    "Грязинский",
    "Данковский",
    "Добринский",
    "Добровский",
    "Долгоруковский",
    "Елецкий",
    "Задонский",
    "Измалковский",
    "Краснинский",
    "Лебедянский",
    "Лев-Толстовский",
    "Липецкий",
    "Становлянский",
    "Тербунский",
    "Усманский",
    "Хлевенский",
    "Чаплыгинский",
  ],
  magadanskaya: [
    "Ольский",
    "Омсукчанский",
    "Северо-Эвенский",
    "Среднеканский",
    "Сусуманский",
    "Тенькинский",
    "Хасынский",
    "Ягоднинский",
  ],
  moskovskaya: [
    "Воскресенск",
    "Зеленоград",
    "Дмитров",
    "Истра",
    "Клин",
    "Коломна",
    "Москва",
    "Наро-Фоминск",
    "Ногинск",
    "Одинцово",
    "Орехово-Зуево",
    "Пушкино",
    "Сергиев Посад",
    "Троицк",
    "Чеховский",
    "Шатура",
    "Щербинка",
  ],
  murmanskaya: [
    "Кандалакшский",
    "Ковдорский",
    "Кольский",
    "Ловозерский",
    "Печенгский",
    "Терский",
  ],
  nizhegorodskaya: [
    "Ардатовский",
    "Арзамасский",
    "Балахнинский",
    "Богородский",
    "Большеболдинский",
    "Большемурашкинский",
    "Бутурлинский",
    "Вадский",
    "Варнавинский",
    "Вачский",
    "Ветлужский",
    "Вознесенский",
    "Володарский",
    "Воротынский",
    "Воскресенский",
    "Гагинский",
    "Городецкий",
    "Дальнеконстантиновский",
    "Дивеевский",
    "Княгининский",
    "Ковернинский",
    "Краснобаковский",
    "Краснооктябрьский",
    "Кстовский",
    "Лукояновский",
    "Лысковский",
    "Павловский",
    "Пильнинский",
    "Починковский",
    "Сергачский",
    "Сеченовский",
    "Сокольский",
    "Сосновский",
    "Спасский",
    "Тонкинский",
    "Тоншаевский",
    "Уренский",
    "Чкаловский",
    "Шарангский",
    "Шатковский",
  ],
  novgorodskaya: [
    "Батецкий",
    "Боровичский",
    "Валдайский",
    "Волотовский",
    "Демянский",
    "Крестецкий",
    "Любытинский",
    "Маловишерский",
    "Марёвский",
    "Мошенской",
    "Новгородский",
    "Окуловский",
    "Парфинский",
    "Пестовский",
    "Поддорский",
    "Солецкий",
    "Старорусский",
    "Хвойнинский",
    "Холмский",
    "Чудовский",
    "Шимский",
  ],
  novosibirskaya: [
    "Баганский",
    "Барабинский",
    "Болотнинский",
    "Венгеровский",
    "Доволенский",
    "Здвинский",
    "Искитимский",
    "Карасукский",
    "Каргатский",
    "Колыванский",
    "Коченевский",
    "Кочковский",
    "Краснозерский",
    "Куйбышевский",
    "Купинский",
    "Кыштовский",
    "Маслянинский",
    "Мошковский",
    "Новосибирский",
    "Ордынский",
    "Северный",
    "Сузунский",
    "Татарский",
    "Тогучинский",
    "Убинский",
    "Усть-Таркский",
    "Чановский",
    "Черепановский",
    "Чистоозерный",
    "Чулымский",
  ],
  omskaya: [
    "Азовский немецкий национальный",
    "Большереченский",
    "Большеуковский",
    "Горьковский",
    "Знаменский",
    "Исилькульский",
    "Калачинский",
    "Колосовский",
    "Кормиловский",
    "Крутинский",
    "Любинский",
    "Марьяновский",
    "Москаленский",
    "Муромцевский",
    "Называевский",
    "Нижнеомский",
    "Нововаршавский",
    "Одесский",
    "Оконешниковский",
    "Омский",
    "Павлоградский",
    "Полтавский",
    "Русско-Полянский",
    "Саргатский",
    "Седельниковский",
    "Таврический",
    "Тарский",
    "Тевризский",
    "Тюкалинский",
    "Усть-Ишимский",
    "Черлакский",
    "Шербакульский",
  ],
  orenburskaya: [
    "Абдулинский",
    "Адамовский",
    "Акбулакский",
    "Александровский",
    "Асекеевский",
    "Беляевский",
    "Бугурусланский",
    "Бузулукский",
    "Гайский",
    "Грачевский",
    "Домбаровский",
    "Илекский",
    "Кваркенский",
    "Красногвардейский",
    "Кувандыкский",
    "Курманаевский",
    "Матвеевский",
    "Новоорский",
    "Новосергиевский",
    "Октябрьский",
    "Оренбургский",
    "Первомайский",
    "Переволоцкий",
    "Пономаревский",
    "Сакмарский",
    "Саракташский",
    "Светлинский",
    "Северный",
    "Соль-Илецкий",
    "Сорочинский",
    "Ташлинский",
    "Тоцкий",
    "Тюльганский",
    "Шарлыкский",
  ],
  orlovskaya: [
    "Болховский",
    "Верховский",
    "Глазуновский",
    "Дмитровский",
    "Должанский",
    "Залегощенский",
    "Знаменский",
    "Колпнянский",
    "Корсаковский",
    "Краснозоренский",
    "Кромской",
    "Ливенский",
    "Малоархангельский",
    "Мценский",
    "Новодеревеньковский",
    "Новосильский",
    "Орловский",
    "Покровский",
    "Свердловский",
    "Сосковский",
    "Троснянский",
    "Урицкий",
    "Хотынецкий",
    "Шаблыкинский",
  ],
  pensenskaya: [
    "Башмаковский",
    "Бековский",
    "Белинский",
    "Бессоновский",
    "Вадинский",
    "Городищенский",
    "Земетчинский",
    "Иссинский",
    "Каменский",
    "Камешкирский",
    "Колышлейский",
    "Кузнецкий",
    "Лопатинский",
    "Лунинский",
    "Малосердобинский",
    "Мокшанский",
    "Наровчатский",
    "Неверкинский",
    "Нижнеломовский",
    "Никольский",
    "Пачелмский",
    "Пензенский",
    "Сердобский",
    "Сосновоборский",
    "Спасский",
    "Тамалинский",
    "Шемышейский",
  ],
  permskiy: [
    "Бардымский",
    "Березовский",
    "Большесосновский",
    "Верещагинский",
    "Гайнский",
    "Горнозаводский",
    "Еловский",
    "Ильинский",
    "Карагайский",
    "Кишертский",
    "Косинский",
    "Кочевский",
    "Красновишерский",
    "Кудымкарский",
    "Куединский",
    "Кунгурский",
    "Нытвенский",
    "Октябрьский",
    "Ординский",
    "Осинский",
    "Оханский",
    "Очерский",
    "Пермский",
    "Сивинский",
    "Соликамский",
    "Суксунский",
    "Уинский",
    "Усольский",
    "Частинский",
    "Чердынский",
    "Чернушинский",
    "Юрлинский",
    "Юсьвинский",
  ],
  psovskaya: [
    "Бежаницкий",
    "Великолукский",
    "Гдовский",
    "Дедовичский",
    "Дновский",
    "Красногородский",
    "Куньинский",
    "Локнянский",
    "Невельский",
    "Новоржевский",
    "Новосокольнический",
    "Опочецкий",
    "Островский",
    "Палкинский",
    "Печорский",
    "Плюсский",
    "Порховский",
    "Псковский",
    "Пустошкинский",
    "Пушкиногорский",
    "Пыталовский",
    "Себежский",
    "Струго-Красненский",
    "Усвятский",
  ],
  rostovskya: [
    "Азовский",
    "Аксайский",
    "Багаевский",
    "Белокалитвинский",
    "Боковский",
    "Верхнедонской",
    "Веселовский",
    "Волгодонской",
    "Дубовский",
    "Егорлыкский",
    "Заветинский",
    "Зерноградский",
    "Зимовниковский",
    "Кагальницкий",
    "Каменский",
    "Кашарский",
    "Константиновский",
    "Красносулинский",
    "Куйбышевский",
    "Мартыновский",
    "Матвеево-Курганский",
    "Миллеровский",
    "Милютинский",
    "Морозовский",
    "Мясниковский",
    "Неклиновский",
    "Обливский",
    "Октябрьский",
    "Орловский",
    "Песчанокопский",
    "Пролетарский",
    "Ремонтненский",
    "Родионово-Несветайский",
    "Сальский",
    "Семикаракорский",
    "Советский",
    "Тарасовский",
    "Тацинский",
    "Усть-Донецкий",
    "Целинский",
    "Цимлянский",
    "Чертковский",
    "Шолоховский",
  ],
  ryzanskaya: [
    "Александро-Невский",
    "Ермишинский",
    "Захаровский",
    "Кадомский",
    "Касимовский",
    "Клепиковский",
    "Кораблинский",
    "Милославский",
    "Михайловский",
    "Пителинский",
    "Пронский",
    "Путятинский",
    "Рыбновский",
    "Ряжский",
    "Рязанский",
    "Сапожковский",
    "Сараевский",
    "Сасовский",
    "Скопинский",
    "Спасский",
    "Старожиловский",
    "Ухоловский",
    "Чучковский",
    "Шацкий",
    "Шиловский",
  ],
  samarskaya: [
    "Александро-Невский",
    ,
    "Ермишинский",
    "Захаровский",
    "Кадомский",
    "Касимовский",
    "Клепиковский",
    "Кораблинский",
    "Милославский",
    "Михайловский",
    "Пителинский",
    "Пронский",
    "Путятинский",
    "Рыбновский",
    "Ряжский",
    "Рязанский",
    "Сапожковский",
    "Сараевский",
    "Сасовский",
    "Скопинский",
    "Спасский",
    "Старожиловский",
    "Ухоловский",
    "Чучковский",
    "Шацкий",
    "Шиловский",
  ],
  saratovkaya: [
    "Александрово-Гайский",
    "Аркадакский",
    "Аткарский",
    "Базарно-Карабулакский",
    "Балаковский",
    "Балашовский",
    "Балтайский",
    "Вольский",
    "Воскресенский",
    "Дергачевский",
    "Духовницкий",
    "Екатериновский",
    "Ершовский",
    "Ивантеевский",
    "Калининский",
    "Красноармейский",
    "Краснокутский",
    "Краснопартизанский",
    "Лысогорский",
    "Марксовский",
    "Новобурасский",
    "Новоузенский",
    "Озинский",
    "Перелюбский",
    "Петровский",
    "Питерский",
    "Пугачевский",
    "Ровенский",
    "Романовский",
    "Ртищевский",
    "Самойловский",
    "Саратовский",
    "Советский",
    "Татищевский",
    "Турковский",
    "Федоровский",
    "Хвалынский",
    "Энгельсский",
  ],
  sakhalinskaya: [
    "Александровск-Сахалинский",
    "Анивский",
    "Долинский",
    "Корсаковский",
    "Курильский",
    "Макаровский",
    "Невельский",
    "Ногликский",
    "Охинский",
    "Поронайский",
    "Северо-Курильский",
    "Смирныховский",
    "Томаринский",
    "Тымовский",
    "Углегорский",
    "Холмский",
    "Южно-Курильский",
  ],
  sverdlovskaya: [
    "Алапаевский",
    "Артемовский",
    "Артинский",
    "Ачитский",
    "Байкаловский",
    "Белоярский",
    "Богдановичский",
    "Верхнесалдинский",
    "Верхотурский",
    "Гаринский",
    "Ирбитский",
    "Каменский",
    "Камышловский",
    "Красноуфимский",
    "Невьянский",
    "Нижнесергинский",
    "Новолялинский",
    "Пригородный",
    "Пышминский",
    "Режевский",
    "Серовский",
    "Слободо-Туринский",
    "Сухоложский",
    "Сысертский",
    "Таборинский",
    "Тавдинский",
    "Талицкий",
    "Тугулымский",
    "Туринский",
    "Шалинский",
  ],
  smolenskaya: [
    "Велижский",
    "Вяземский",
    "Гагаринский",
    "Глинковский",
    "Демидовский",
    "Дорогобужский",
    "Духовщинский",
    "Ельнинский",
    "Ершичский",
    "Кардымовский",
    "Краснинский",
    "Монастырщинский",
    "Новодугинский",
    "Починковский",
    "Рославльский",
    "Руднянский",
    "Сафоновский",
    "Смоленский",
    "Сычевский",
    "Темкинский",
    "Угранский",
    "Хиславичский",
    "Холм-Жирковский",
    "Шумячский",
    "Ярцевский",
  ],
  tamboskaya: [
    "Бондарский",
    "Гавриловский",
    "Жердевский",
    "Знаменский",
    "Инжавинский",
    "Кирсановский",
    "Мичуринский",
    "Мордовский",
    "Моршанский",
    "Мучкапский",
    "Никифоровский",
    "Первомайский",
    "Петровский",
    "Пичаевский",
    "Рассказовский",
    "Ржаксинский",
    "Сампурский",
    "Сосновский",
    "Староюрьевский",
    "Тамбовский",
    "Токаревский",
    "Уваровский",
    "Уметский",
  ],
  tverskaya: [
    "Андреапольский",
    "Бежецкий",
    "Бельский",
    "Бологовский",
    "Весьегонский",
    "Вышневолоцкий",
    "Жарковский",
    "Западнодвинский",
    "Зубцовский",
    "Калининский",
    "Калязинский",
    "Кашинский",
    "Кесовогорский",
    "Кимрский",
    "Конаковский",
    "Краснохолмский",
    "Кувшиновский",
    "Лесной",
    "Лихославльский",
    "Максатихинский",
    "Молоковский",
    "Оленинский",
    "Пеновский",
    "Рамешковский",
    "Ржевский",
    "Сандовский",
    "Селижаровский",
    "Сонковский",
    "Спировский",
    "Старицкий",
    "Торжокский",
    "Торопецкий",
    "Фировский",
  ],
  tomskaya: [
    "Александровский",
    "Асиновский",
    "Бакчарский",
    "Верхнекетский",
    "Зырянский",
    "Каргасокский",
    "Кожевниковский",
    "Колпашевский",
    "Кривошеинский",
    "Молчановский",
    "Парабельский",
    "Первомайский",
    "Тегульдетский",
    "Томский",
    "Чаинский",
    "Шегарский",
  ],
  tulskaya: [
    "Алексинский",
    "Арсеньевский",
    "Белевский",
    "Богородицкий",
    "Веневский",
    "Воловский",
    "Дубенский",
    "Ефремовский",
    "Заокский",
    "Каменский",
    "Кимовский",
    "Киреевский",
    "Куркинский",
    "Ленинский",
    "Новомосковский",
    "Одоевский",
    "Плавский",
    "Суворовский",
    "Тепло-Огаревский",
    "Узловский",
    "Чернский",
    "Щекинский",
    "Ясногорский",
  ],
  tumenskaya: [
    "Абатский",
    "Армизонский",
    "Аромашевский",
    "Бердюжский",
    "Вагайский",
    "Викуловский",
    "Голышмановский",
    "Заводоуковский",
    "Исетский",
    "Ишимский",
    "Казанский",
    "Нижнетавдинский",
    "Омутинский",
    "Сладковский",
    "Сорокинский",
    "Тобольский",
    "Тюменский",
    "Уватский",
    "Упоровский",
    "Юргинский",
    "Ялуторовский",
    "Ярковский",
  ],
  ulyanovskaya: [
    "Базарносызганский",
    "Барышский",
    "Вешкаймский",
    "Инзенский",
    "Карсунский",
    "Кузоватовский",
    "Майнский",
    "Мелекесский",
    "Николаевский",
    "Новомалыклинский",
    "Новоспасский",
    "Павловский",
    "Радищевский",
    "Сенгилеевский",
    "Старокулаткинский",
    "Старомайнский",
    "Сурский",
    "Тереньгульский",
    "Ульяновский",
    "Цильнинский",
    "Чердаклинский",
  ],
  chelyabinskaya: [
    "Агаповский",
    "Аргаяшский",
    "Ашинский",
    "Брединский",
    "Варненский",
    "Верхнеуральский",
    "Еманжелинский",
    "Еткульский",
    "Карталинский",
    "Каслинский",
    "Катав-Ивановский",
    "Кизильский",
    "Коркинский",
    "Красноармейский",
    "Кунашакский",
    "Кусинский",
    "Нагайбакский",
    "Нязепетровский",
    "Октябрьский",
    "Пластовский",
    "Саткинский",
    "Сосновский",
    "Троицкий",
    "Увельский",
    "Уйский",
    "Чебаркульский",
    "Чесменский",
  ],
  zabaykalskiy: [
    "Агинский",
    "Акшинский",
    "Александрово-Заводский",
    "Балейский",
    "Борзинский",
    "Газимуро-Заводский",
    "Дульдургинский",
    "Забайкальский",
    "Каларский",
    "Калганский",
    "Карымский",
    "Краснокаменский",
    "Красночикойский",
    "Кыринский",
    "Могойтуйский",
    "Могочинский",
    "Нерчинский",
    "Нерчинско-Заводский",
    "Оловяннинский",
    "Ононский",
    "Петровск-Забайкальский",
    "Приаргунский",
    "Сретенский",
    "Тунгиро-Олекминский",
    "Тунгокоченский",
    "Улётовский",
    "Хилокский",
    "Чернышевский",
    "Читинский",
    "Шелопугинский",
    "Шилкинский",
  ],
  yaroslavskaya: [
    "Большесельский",
    "Борисоглебский",
    "Брейтовский",
    "Гаврилов-Ямский",
    "Даниловский",
    "Любимский",
    "Мышкинский",
    "Некоузский",
    "Некрасовский",
    "Первомайский",
    "Переславский",
    "Пошехонский",
    "Ростовский",
    "Рыбинский",
    "Тутаевский",
    "Угличский",
    "Ярославский",
  ],
  evreyskaya: [
    "Биробиджанский",
    "Ленинский",
    "Облученский",
    "Октябрьский",
    "Смидовичский",
  ],
  zaporozhskaya: [
    "Акимовский",
    "Бердянский",
    "Васильевский",
    "Веселовский",
    "Запорожский",
    "Каменско-Днепровский",
    "Куйбышевский",
    "Мелитопольский",
    "Михайловский",
    "Пологовский",
    "Приазовский",
    "Приморский",
    "Токмакский",
    "Черниговский",
  ],
  сrimea: [
    "Бахчисарайский",
    ,
    "Белогорский",
    "Джанкойский",
    "Кировский",
    "Красногвардейский",
    "Красноперекопский",
    "Ленинский",
    "Нижнегорский",
    "Первомайский",
    "Раздольненский",
    "Сакский",
    "Симферопольский",
    "Советский",
    "Черноморский",
  ],
  lnr: [
    "Алчевск",
    "Антрацит",
    "Антрацитовский",
    "Беловодский",
    "Белокуракинский",
    "Брянка",
    "Кировск",
    "Краснодон",
    "Краснодонский",
    "Красный",
    "луч",
    "Кременской",
    "Лисичанск",
    "Луганск",
    "Лутугинский",
    "Марковский",
    "Меловский",
    "Новоайдарский",
    "Новопсковский",
    "Первомайск",
    "Перевальский",
    "Сватовский",
    "Свердловск",
    "Свердловский",
    "Северодонецкий",
    "Славяносербский",
    "Станично-Луганский",
    "Старобельский",
    "Стаханов",
    "Счастьенский",
    "Троицкий",
  ],
  khersonskaya: [
    "Бериславский",
    "Генический",
    "Каховский",
    "Скадовский",
    "Херсонский",
  ],
};
const translateRegion = {
  adygea: "Адыгея",
  bashkortostan: "Башкортостан",
  buryatia: "Бурятия",
  altay: "Алтай",
  dagestan: "Дагестан",
  ingushetia: "Ингушетия",
  dnr: "Донецкая Народная Республика",
  "kabardino-balkaria": "Кабардино-Балкария",
  kalmykia: "Калмыкия",
  "karachay-cherkessia": "Карачаево-Черкесия",
  karelia: "Карелия",
  komi: "Коми",
  "mariy-el": "Марий Эл",
  mordovia: "Мордовия",
  saha: "Саха / Якутия",
  alanya: "Северная Осетия - Алания",
  tatarstan: "Татарстан",
  tuva: "Тыва",
  udmurtia: "Удмуртия",
  hakasia: "Хакасия",
  сhechnya: "Чеченская",
  сhuvashia: "Чувашская - Чувашия",
  altai: "Алтайский",
  krasnodarskiy: "Краснодарский",
  krasnoyarskiy: "Красноярский",
  primorskiy: "Приморский",
  stavropolskiy: "Ставропольский",
  khabarovkiy: "Хабаровский",
  amurskaya: "Амурская",
  arkhangelskay: "Архангельская",
  astrakhanskaya: "Астраханская",
  belgorodskaya: "Белгородская",
  bryanskaya: "Брянская",
  vladimirskaya: "Владимирская",
  volgogradskaya: "Волгоградская",
  vologodskaya: "Вологодская",
  voronezhskaya: "Воронежская",
  ivanovskaya: "Ивановская",
  irkutskaya: "Иркутская",
  kaliningradskaya: "Калининградская",
  kaluzhskaya: "Калужская",
  kamchatskiy: "Камчатский",
  kemerovskaya: "Кемеровская - Кузбасс",
  kirovskaya: "Кировская",
  kostromskaya: "Костромская",
  kurganskaya: "Курганская",
  kurskaya: "Курская",
  leningradskaya: "Ленинградская",
  lipetskaya: "Липецкая",
  magadanskaya: "Магаданская",
  moskovskaya: "Московская",
  murmanskaya: "Мурманская",
  nizhegorodskaya: "Нижегородская",
  novgorodskaya: "Новгородская",
  novosibirskaya: "Новосибирская",
  omskaya: "Омская",
  orenburskaya: "Оренбурская",
  orlovskaya: "Орловская",
  pensenskaya: "Пензенская",
  permskiy: "Пермский",
  psovskaya: "Псковская",
  rostovskya: "Ростовская",
  ryzanskaya: "Рязанская",
  samarskaya: "Самарская",
  saratovkaya: "Саратовская",
  sakhalinskaya: "Сахалинская",
  sverdlovskaya: "Свердловская",
  smolenskaya: "Смоленская",
  tamboskaya: "Тамбовская",
  tverskaya: "Тверская",
  tomskaya: "Томская",
  tulskaya: "Тульская",
  tumenskaya: "Тюменская",
  ulyanovskaya: "Ульяновская",
  chelyabinskaya: "Челябинская",
  zabaykalskiy: "Забайкальский",
  yaroslavskaya: "Ярославская",
  evreyskaya: "Еврейская Автономная",
  zaporozhskaya: "Запорожская",
  сrimea: "Крым",
  lnr: "Луганская Народная Республика",
  khersonskaya: "Херсонская",
};

const getArea = (type = "register") => {
  const values = Object.values(translateRegion);
  const keys = Object.keys(translateRegion);
  let index = 0;
  // @ts-ignore
  if (type === "register") {
    index = values.indexOf(valueRegion.value);
  } else {
    index = values.indexOf(valueRegionFact.value);
  }

  // @ts-ignore
  return optionsArea[keys[index]];
};

const city = {
  adygea: ["Адыгейск", "Майкоп"],
  bashkortostan: [
    "Агидель",
    "Амзинский",
    "Сельсовет",
    "Кумертау",
    "Маячинский",
    "Межгорье",
    "Нефтекамск",
    "Октябрьский",
    "Подгорный",
    "Салават",
    "Сибай",
    "Стерлитамак",
    "Ташкиновский",
    "Туялясский",
    "Уфа",
  ],
  buryatia: ["Северобайкальск", "Улан-Удэ"],
  altay: ["Горно-Алтайск"],
  dagestan: [
    "Буйнакск",
    "Дагестанские Огни",
    "Дербент",
    "Избербаш",
    "Каспийск",
    "Кизилюрт",
    "Кизляр",
    "Махачкала",
    "Хасавюрт",
    "Южно-Сухокумск",
  ],
  ingushetia: ["Карабулак", "Магас", "Малгобек", "Назрань", "Сунжа"],
  dnr: [
    "Авдеевка",
    "Амвросиевка",
    "Волноваха",
    "Горловка",
    "Дебальцево",
    "Докучаевск",
    "Ждановка",
    "Кировское",
    "Макеевка",
    "Мариуполь",
    "Новоазовск",
    "Снежное",
    "Старобешево",
    "Тельманово",
    "Торез",
    "Углегорск",
    "Шахтерск",
    "Ясиноватая",
  ],
  "kabardino-balkaria": ["Баксан", "Нальчик", "Прохладный"],
  kalmykia: ["Элиста"],
  "karachay-cherkessia": ["Карачаевск", "Теберда", "Черкесск"],
  karelia: ["Костомукша", "Петрозаводск", "Сортавала", ""],
  komi: [
    "Воркута",
    "Вуктыл",
    "Инта",
    "Печора",
    "Сосногорск",
    "Сыктывкар",
    "Усинск",
    "Ухта",
  ],
  "mariy-el": ["Волжск", "Йошкар-Ола", "Козьмодемьянск"],
  mordovia: ["Ковылкино", "Рузаевка", "Саранск"],
  saha: ["Якутск"],
  alanya: ["Владикавказ"],
  tatarstan: ["Казань", "Набережные Челны"],
  tuva: ["Ак-Довурак", "Кызыл"],
  udmurtia: ["Воткинск", "Глазов", "Ижевск", "Можга", "Сарапул"],
  hakasia: ["Абаза", "Абакан", "Саяногорск", "Сорск", "Черногорск"],
  сhechnya: ["Аргун", "Грозный"],
  сhuvashia: ["Алатырь", "Канаш", "Новочебоксарск", "Чебоксары", "Шумерля"],
  altai: [
    "Алейск",
    "Барнаул",
    "Белокуриха",
    "Бийск",
    "Заринск",
    "Новоалтайск",
    "Рубцовск",
    "Славгород",
    "Яровое",
  ],
  krasnodarskiy: [
    "Армавир",
    "Геленджик",
    "Горячий",
    "Ключ",
    "Краснодар",
    "Новороссийск",
    "Сириус",
    "Сочи",
  ],
  krasnoyarskiy: [
    "Ачинск",
    "Боготол",
    "Бородино",
    "Дивногорск",
    "Енисейск",
    "Железногорск",
    "Зеленогорск",
    "Канск",
    "Кедровый",
    "Красноярск",
    "Лесосибирск",
    "Минусинск",
    "Назарово",
    "Норильск",
    "Подгорный",
    "Солнечный",
    "Сосновоборск",
    "Шарыпово",
  ],
  primorskiy: [
    "Арсеньев",
    "Артем",
    "Большой",
    "Камень",
    "Владивосток",
    "Дальнегорск",
    "Дальнереченск",
    "Лесозаводск",
    "Находка",
    "Партизанск",
    "Спасск-Дальний",
    "Уссурийск",
    "Фокино",
  ],
  stavropolskiy: [
    "Георгиевск",
    "Ессентуки",
    "Железноводск",
    "Кисловодск",
    "Лермонтов",
    "Невинномысск",
    "Пятигорск",
    "Ставрополь",
  ],
  khabarovkiy: [
    "Амурск",
    "Бикин",
    "Комсомольск-на-Амуре",
    "Николаевск-на-Амуре",
    "Советская Гавань",
    "Хабаровск",
  ],
  amurskaya: [
    "Белогорск",
    "Белогорск",
    "Город",
    "Благовещенск",
    "Зея",
    "Прогресс",
    "Райчихинск",
    "Свободный",
    "Тында",
    "Циолковский",
    "Шимановск",
  ],
  arkhangelskay: [
    "Архангельск",
    "Коряжма",
    "Мирный",
    "Новодвинск",
    "Северодвинск",
  ],
  astrakhanskaya: ["Астрахань", "Знаменск"],
  belgorodskaya: ["Белгород", "Губкин", "Старый", "Оскол", "Шебекино"],
  bryanskaya: [
    "Брянск",
    "Клинцы",
    "Новозыбков",
    "Сельцо",
    "Стародуб",
    "Фокино",
  ],
  vladimirskaya: [
    "Владимир",
    "Гусь-Хрустальный",
    "Ковров",
    "Муром",
    "Радужный",
  ],
  volgogradskaya: [
    "Волгоград",
    "Волжский",
    "Камышин",
    "Михайловка",
    "Урюпинск",
    "Фролово",
  ],
  vologodskaya: ["Вологда", "Череповец"],
  voronezhskaya: ["Воронеж", "Воронеж-45", "Нововоронеж"],
  ivanovskaya: ["Иваново", "Кинешма"],
  irkutskaya: [
    "Бодайбо",
    "Братск",
    "Зима",
    "Иркутск",
    "Нижнеудинск",
    "Саянск",
    "Свирск",
    "Тайшет",
    "Тулун",
    "Усолье-Сибирское",
    "Усть-Илимск",
    "Усть-Кут",
    "Черемхово",
    "Шелехов",
  ],
  kaliningradskaya: [
    "Калининград",
    "Ладушкин",
    "Мамоново",
    "Пионерский",
    "Светлый",
    "Советск",
    "Янтарный",
  ],
  kaluzhskaya: ["Калуга", "Обнинск"],
  kamchatskiy: ["Вилючинск", "Петропавловск-Камчатский"],
  kemerovskaya: [
    "Анжеро-Судженск",
    "Белово",
    "Березовский",
    "Калтан",
    "Кемерово",
    "Киселевск",
    "Краснобродский",
    "Ленинск-Кузнецкий",
    "Междуреченск",
    "Мыски",
    "Новокузнецк",
    "Осинники",
    "Полысаево",
    "Прокопьевск",
    "Тайга",
    "Юрга",
  ],
  kirovskaya: ["Киров", "Кирово-Чепецк", "Первомайский"],
  kostromskaya: ["Волгореченск", "Кострома"],
  kurganskaya: ["Курган", "Шадринск"],
  kurskaya: ["Железногорск", "Курск", "Курчатов", "Льгов", "Щигры"],
  leningradskaya: [
    "Зеленогорск",
    "Колпино",
    "Красное Село",
    "Кронштадт",
    "Ломоносов",
    "Павловск",
    "Петергоф",
    "Пушкин",
    "Санкт-Петербург",
    "Сестрорецк ",
    "Сосновый Бор",
  ],
  lipetskaya: ["Елец", "Липецк"],
  magadanskaya: ["Магадан"],
  moskovskaya: [
    "Балашиха",
    "Бронницы",
    "Видное",
    "Волоколамск",
    "Дзержинский",
    "Долгопрудный",
    "Домодедово",
    "Дубна",
    "Егорьевск",
    "Жуковский",
    "Зарайск",
    "Кашира",
    "Королёв",
    "Котельники",
    "Красногорск",
    "Краснознаменск",
    "Лобня",
    "Лосино-Петровский",
    "Лотошино",
    "Рабочий",
    "поселок",
    "Луховицы",
    "Лыткарино",
    "Люберцы",
    "Можайск",
    "Мытищи",
    "Павловский",
    "Посад",
    "Подольск",
    "Протвино",
    "Пущино",
    "Раменское",
    "Реутов",
    "Руза",
    "Серебряные",
    "Пруды",
    "Серпухов",
    "Солнечногорск",
    "Ступино",
    "Талдом",
    "Фрязино",
    "Химки",
    "Черноголовка",
    "Чехов",
    "Шаховская",
    "Щёлково",
    "Электрогорск",
    "Электросталь",
  ],
  murmanskaya: [
    "Апатиты",
    "Гаджиево",
    "Заозерск",
    "Кировск",
    "Мончегорск",
    "Мурманск",
    "Оленегорск",
    "Оленегорск-1",
    "Оленегорск-2",
    "Островной",
    "Полярные",
    "Зори",
    "Полярный",
    "Североморск",
    "Снежногорск",
  ],
  nizhegorodskaya: [
    "Арзамаc",
    "Бор",
    "Выкса",
    "Дзержинск",
    "Кулебаки",
    "Навашино",
    "Нижний",
    "Новгород",
    "Первомайск",
    "Перевоз",
    "Саров",
    "Семенов",
    "Шахунья",
  ],
  novgorodskaya: ["Великий Новгород"],
  novosibirskaya: ["Бердск", "Искитим", "Кольцово", "Новосибирск", "Обь"],
  omskaya: ["Омск"],
  orenburskaya: [
    "Бугуруслан",
    "Бузулук",
    "Гай",
    "Кувандык",
    "Медногорск",
    "Новотроицк",
    "Оренбург",
    "Орск",
    "Сорочинск",
    "Ясный",
  ],
  orlovskaya: ["Ливны", "Мценск", "Орёл"],
  pensenskaya: ["Ливны", "Мценск", "Орёл"],
  permskiy: [
    "Александровск",
    "Березники",
    "Гремячинск",
    "Губаха",
    "Добрянка",
    "Кизел",
    "Краснокамск",
    "Кудымкар",
    "Кунгур",
    "Лысьва",
    "Пермь",
    "Соликамск",
    "Чайковский",
    "Чусовой",
  ],
  psovskaya: ["Великие Луки", "Псков"],
  rostovskya: [
    "Азов",
    "Батайск",
    "Волгодонск",
    "Гуково",
    "Донецк",
    "Зверево",
    "Каменск-Шахтинский",
    "Новочеркасск",
    "Новошахтинск",
    "Ростов-на-Дону",
    "Таганрог",
    "Шахты",
  ],
  ryzanskaya: ["Касимов", "Рязань", "Сасово", "Скопин"],
  samarskaya: [
    "Жигулевск",
    "Кинель",
    "Новокуйбышевск",
    "Октябрьск",
    "Отрадный",
    "Похвистнево",
    "Самара",
    "Сызрань",
    "Тольятти",
    "Чапаевск",
  ],
  saratovkaya: [
    "Аткарск",
    "Балаково",
    "Балашов",
    "Вольск",
    "Красноармейск",
    "Маркс",
    "Пугачев",
    "Ртищево",
    "Саратов",
    "Хвалынск",
    "Шиханы",
    "Энгельс",
  ],
  sakhalinskaya: ["Южно-Сахалинск"],
  sverdlovskaya: [
    "Алапаевск",
    "Асбест",
    "Березовский",
    "Верхний Тагил",
    "Верхняя Пышма",
    "Верхняя Тура",
    "Волчанск",
    "Дегтярск",
    "Екатеринбург",
    "Заречный",
    "Ивдель",
    "Ирбит",
    "Каменск-Уральский",
    "Камышлов",
    "Карпинск",
    "Качканар",
    "Кировград",
    "Краснотурьинск",
    "Красноуральск",
    "Красноуфимск",
    "Кушва",
    "Лесной",
    "Малышев",
    "Нижний Тагил",
    "Нижняя Салда",
    "Нижняя Тура",
    "Новоуральск",
    "Первоуральск",
    "Полевской",
    "Ревда",
    "Североуральск",
    "Серов",
    "Среднеуральск",
  ],
  smolenskaya: ["Десногорск", "Смоленск"],
  tamboskaya: [
    "Кирсанов",
    "Котовск",
    "Мичуринск",
    "Моршанск",
    "Рассказово",
    "Тамбов",
    "Уварово",
  ],
  tverskaya: [
    "Андреаполь",
    "Белый",
    "Весьегонск",
    "Вышний",
    "Волочек",
    "Жарковский",
    "Западная",
    "Двина",
    "Зубцов",
    "Кашин",
    "Кесова",
    "Гора",
    "Кимры",
    "Красный",
    "Холм",
    "Лесное",
    "Село",
    "Лихославль",
    "Максатиха",
    "Молоково",
    "Нелидово",
    "Озерный",
    "Оленино",
    "Осташков",
    "Пено",
    "Рамешки",
    "Ржев",
    "Сандово",
    "Селижарово",
    "Сонково",
    "Спирово",
    "Старица",
    "Тверь",
    "Торжок",
    "Удомля",
  ],
  tomskaya: ["Кедровый", "Северск", "Стрежевой", "Томск"],
  tulskaya: ["Донской", "Тула"],
  tumenskaya: ["Заводоуковск", "Ишим", "Тобольск", "Тюмень", "Ялуторовск"],
  ulyanovskaya: ["Димитровград", "Новоульяновск", "Ульяновск"],
  chelyabinskaya: [
    "Верхний Уфалей",
    "Златоуст",
    "Карабаш",
    "Копейск",
    "Коркино",
    "Кыштым",
    "Магнитогорск",
    "Миасс",
    "Озерск",
    "Снежинск",
    "Трехгорный",
    "Трехгорный-1",
    "Троицк",
    "Усть-Катав",
    "Чебаркуль",
    "Челябинск",
    "Южноуральск",
  ],
  zabaykalskiy: ["Горный", "Чита"],
  yaroslavskaya: ["Переславль-Залесский", "Ярославль"],
  evreyskaya: ["Биробиджан"],
  zaporozhskaya: ["Бердянск", "Мелитополь", "Энергодар", "Горо"],
  сrimea: [
    "Алушта",
    "Армянск",
    "Джанкой",
    "Евпатория",
    "Керчь",
    "Красноперекопск",
    "Саки",
    "Симферополь",
    "Судак",
    "Феодосия",
    "Ялта",
  ],
  lnr: ["Ровеньки", "Рубежное", "Северодонецк"],
  khersonskaya: [
    "Алёшки",
    "Белозёрка",
    "Берислав",
    "Великая",
    "Александровка",
    "Лепетиха",
    "Верхний",
    "Рогачик",
    "Высокополье",
    "Геническ",
    "Голая",
    "Пристань",
    "Горностаевка",
    "Ивановка",
    "Каланчак",
    "Каховка",
    "Нижние",
    "Серогозы",
    "Новая",
    "Нововоронцовка",
    "Новотроицкое",
    "Скадовск",
    "Снигирёвка",
    "Херсон",
    "Чаплинка",
  ],
};

const getCity = (type = "register") => {
  const valueArrs = Object.values(translateRegion);
  let index = 0;
  if (type === "register") {
    index = valueArrs.indexOf(valueRegion.value);
  } else {
    index = valueArrs.indexOf(valueRegionFact.value);
  }
  const keyArrs = Object.keys(translateRegion);
  const region = keyArrs[index];
  // @ts-ignore
  return city[region];
};
const passportNumberString = reactive({
  value:
  passportDataStore.passportDTO.number === 0
      ? ""
      : passportDataStore.passportDTO.number.toString(),
});


const isDataLoading = ref(false);
const handleNextClick = async () => {
  isDataLoading.value = true;
  await passports(passportDataStore.passportDTO)
    .then((res) => {
      if (res.status === 201) {
          console.log('Data saved');
         // router.push({name: 'connect-wallet'});
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
  await papers(paperDataStore.paperDTO)
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
  width: 100%;
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
  width: 100%;
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
.text-2 {
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
  width: 100%;
  align-items: flex-start;
  gap: 0.81em;
  color: #3b3b3b;
}
.des-and-bbn,
.frame-parent1,
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
  width: 100%;
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
  width: 14.88em;
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
.wrapper2 {
  display: flex;
  justify-content: flex-start;
}
.wrapper2 {
  align-self: stretch;
  flex-direction: row;
  align-items: center;
}
.parent11
 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
  width: 100%;
}
.frame-parent2,
.wrapper4 {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.frame-parent3 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1em;
}
.frame-parent2,
.wrapper4 {
  align-items: center;
}
.frame-parent2 {
  position: absolute;
  top: 23.25em;
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
.registration-options-item {
  position: absolute;
  width: 100%;
  top: calc(50% - 336px);
  right: 0;
  left: 0;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 0.5px solid #2e3a59;
  box-sizing: border-box;
  height: 42.19em;
}
.frame-parent5 {

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
.registration-options-inner {
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
  height: 2.02%;
  width: 100.51%;
  top: 5.38%;
  right: -0.26%;
  bottom: 92.6%;
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
  //position: absolute;
  position: relative;
  top: 3em;
  left: 1.5em;
  width: 21.38em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
  margin: 0 auto;
}
.text-and-fill3 {
  position: absolute;
  top: 8.75em;
  left: 2.63em;
  background-color: #fff;
}
.alesso-waitson-anatilio {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 130%;
  font-weight: 500;
}
.checkboxdone-icon {
  position: relative;
  border-radius: 4.14px;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
}
.iconsedit-outline-parent {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.fieldsinput6,
.fieldsinput7 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.fieldsinput7 {
  border-radius: 16px;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  height: 2.5em;
  padding: 0.5em 0.75em;
  justify-content: space-between;
}
.fieldsinput6 {
  justify-content: flex-start;
  gap: 0.5em;
}
.text11 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.03em;
  line-height: 120%;
  font-weight: 500;
}
.fields-password-and-mail30,
.fieldsinput-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 10;
}
.fields-password-and-mail30 {
  border-radius: 16px;
  border: 0.5px solid #2e3a59;
  box-sizing: border-box;
  width: 18.75em;
  height: 2.5em;
  padding: 0.5em 0.75em;
  justify-content: center;
  color: #2e3a59;
}
.fieldsinput-group {
  position: absolute;
  top: 2.19em;
  left: 1.25em;
  justify-content: flex-start;
  gap: 1.38em;
  width: 87.5%;
}
.frame-child19 {
  position: absolute;
  width: 100%;
  top: calc(50% - 204px);
  right: 0;
  left: 0;
  border-radius: 15px;
  border: 0.5px solid rgba(46, 58, 89, 0.4);
  box-sizing: border-box;
  height: 40em;
}
.des-and-bbn1,
.text-and-button1,
.wrapper12 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.wrapper12 {
  position: absolute;
  top: -0.06em;
  left: 0.81em;
  background-color: #fff;
  flex-direction: row;
  padding: 0 0.5em;
}
.des-and-bbn1,
.text-and-button1 {
  flex-direction: column;
}
.text-and-button1 {
  width: 100%;
  gap: 0.81em;
}
.des-and-bbn1 {
  position: absolute;
  top: 26.69em;
  //left: 1.31em;
  border-radius: 16px;
  background-color: #f9fbff;
  width: 87.5%;
  padding: 0.75em;
  box-sizing: border-box;
}
.frame-parent13 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 25.88em;
}
.registration-options-child1 {
  position: absolute;
  width: 100%;
  top: calc(50% - 302.5px);
  right: 0;
  left: 0;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 0.5px solid rgba(46, 58, 89, 0.4);
  box-sizing: border-box;
  height: 38.5em;
}
.text14,
.text15 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 120%;
}
.text15 {
  letter-spacing: 0.03em;
}
.fields-password-and-mail34 {
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
.div90 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.06em;
  line-height: 120%;
}
.fields-password-and-mail35 {
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
  top: 65.63em;
  left: 0;
  //width: 88.7vw;
  height: 38.19em;
}
.registration-options-child2 {
  position: absolute;
  width: 100%;
  top: calc(50% - 260.5px);
  right: 0;
  left: 0;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 0.5px solid rgba(46, 58, 89, 0.4);
  box-sizing: border-box;
  height: 64.5em;
}
.div109 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.03em;
  line-height: 130%;
}
.registration-options4 {
  position: absolute;
  top: 107em;
  left: 0;
  width: 88.7vw;

  height: 32.94em;
  &_desktop {
    width: 23.38em;
  }
}
.fields-password-and-mail46 {
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
.div113 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.06em;
  line-height: 120%;
  font-weight: 500;
}
.parent36 {
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
.frame-parent18,
.parent37 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.parent37 {
  flex: 1;
  height: 4em;
  flex-direction: column;
  gap: 0.5em;
}
.frame-parent18 {
  align-self: stretch;
  flex-direction: row;
  gap: 0.75em;
}
.span80 {
  letter-spacing: -2px;
  color: red;
}
.div117 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 120%;
}
.fields-password-and-mail49 {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f9fbff;
  border: 0.5px solid #656060;
  padding: 0.5em 0.75em 1em;
  position: relative;
  gap: 0.25em;
  color: #2e3a59;
}
.fields-password-and-mail49,
.frame-parent17,
.parent35 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent17 {
  align-self: stretch;
  gap: 1.25em;
  width: 100%;
}
.parent35 {
  position: absolute;
  top: 43em;
  left: 1.31em;
  width: 77vw;
  gap: 1.5em;
  &_desktop {
    position: relative;
    width: 360px;
    left: 0em;
    top: -10em;
  }
}
.frame-parent12 {
  position: absolute;
  top: 9.63em;
  left: 1.5em;
  width: 88vw;
  height: 121.25em;

  &_desktop {
    position: relative;
    top: 6.63em;
    left: 1.5em;
    width: 23.38em;
    height: 121.25em;
    margin: 0 auto;
  }
}
.b2 {
  position: relative;
  font-size: 1em;
  line-height: 1.75em;
}
.buttonnext1 {
  position: absolute;
  top: 184em;
  left: 1.5em;
  border-radius: 20px;
  background-color: #fdd674;
  width: 87.7vw;
  height: 3em;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #3b3b3b;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  &_desktop {
    position: relative;
    top: 10.38em;
    left: 1.5em;
    border-radius: 20px;
    background-color: #fdd674;
    width: 23.38em;
    height: 3em;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    color: #3b3b3b;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
  }
}

.form-registration-56 {
  position: absolute;
  top: 8em;
  left: 0;
  border-radius: 40px 40px 0 0;
  background-color: #fff;
  width: 100%;
  height: 188em;
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
.div118 {
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
.div120 {
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
.div123 {
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
  color: #3b3b3b;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.iphone-13-13-form-registr-proverka {
  position: relative;
  background-color: #fdd674;
  width: 100vw;
  height: 168.69em;
  overflow-y: auto;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
  overflow-x: hidden;
}
@media (max-width: 371px) {
  .frame-child19 {
    height: 32.06em;
  }
  .parent35 {
    top: 29em;
  }
  .registration-options3 {
    top: 49.5em;
  }
  .registration-options4 {
    top: 90em;
  }
}
.div10 {
  position: relative;
  font-size: 0.63em;
  letter-spacing: 0.4px;
  line-height: 110%;
  font-weight: 300;
}
.fieldsinputchoise,
.fieldsinputchoise1,
.fieldsinput, .fieldsinputchoise3, .text2,
.parent11
 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
  width: 100%;
}
.div27 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
</style>
