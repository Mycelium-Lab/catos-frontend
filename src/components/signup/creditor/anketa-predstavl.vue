<template>
  <div class="iphone-13-13-form-registr">
    <img class="bg-icon" alt="" src="../public/bg.svg" />

    <div class="form-registration-46">
      <div class="div8">
        <div class="group">
          <div class="div9">
            <span class="txt">
              <span class="span">Данные паспорта</span>
              <span class="span1"> </span>
            </span>
          </div>
          <div class="frame-group">
            <div class="frame-wrapper">
              <div class="frame-wrapper">
                <div class="fieldsinputchoise">
                  <div class="div10">
                    <span>Страна выдачи документа </span>
                    <span class="span2">* </span>
                  </div>
                   <catos-select
                    placeholder="Россия"
                    :options="countries"
                    :value="passportDataStore.passportDTO.country"
                    @selected="ev => (passportDataStore.passportDTO.country = ev)"
                    :optionWidth="77"
                    :style="{ width: '100%' }"
                  ></catos-select>
                </div>
              </div>
            </div>
            <div class="frame-container">
              <div class="frame-div">
                <div class="div10">
                  <span>Серия и номер </span>
                  <span class="span2">* </span>
                </div>
                <input-data
                  :style="{ width: '100%' }"
                  placeholder="1234 098761"
                  :right="true"
                  @update:model-value="
                    event => {
                      passportDataStore.passportDTO.series =
                        event.split(' ')[0];
                      passportDataStore.passportDTO.number =
                        event.split(' ')[1];
                    }
                  "                >
                  <template v-slot:right-icon>
                    <img src="@/assets/images/iconseditoutline-black.svg" />
                  </template>
                </input-data>
              </div>
              <div class="frame-div">
                <div class="div10">
                  <span>Дата выдачи </span>
                  <span class="span2">* </span>
                </div>
                <div class="fields-password-and-mail-container">
                  <input-data
                    :style="{ width: '100%' }"
                    type="date"
                    placeholder="01.02.2022"
                    v-model:model-value="
                      passportDataStore.passportDTO.issue_date
                    "
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
            <div class="fieldsinputchoise">
              <div class="div10">
                <span
                  >Кем выдан
                  <span class="span5"> </span>
                </span>
                <span class="span5">
                  <span>* </span>
                </span>
              </div>
              <catos-textarea
                :style="{ width: '100%', resize: 'none' }"
                placeholder="ГУМВД России по Санкт-Петербургу, и Ленинградской области"
                v-model:model-value="
                  passportDataStore.passportDTO.issuing_organization
                "
                @selected="
                  ev =>
                    (passportDataStore.passportDTO.issuing_organization = ev)
                "
              ></catos-textarea>
            </div>
          </div>
        </div>
        <div class="div17">
          <div class="frame-parent1">
            <div class="fieldsinput-parent">
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
              <div class="fieldsinputchoise">
                <div class="div24">
                  <span class="span17">Национальность</span>
                  <span class="span15"> </span>
                </div>
                <input-data
                  :style="{ width: '100%' }"
                  placeholder="Национальность"
                  :right="true"
                  v-model:model-value="passportDataStore.passportDTO.nationality"
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
              <div class="fieldsinput">
                <div class="div18">
                  <span class="span8">Должность </span>
                  <span class="span2">
                    <span>*</span>
                    <span class="span10"> </span>
                  </span>
                </div>
                <input-data
                  :style="{ width: '100%' }"
                  placeholder="Ваша должность"
                  :right="true"
                  v-model:model-value="paperDataStore.paperDTO.work_position"
                >
                  <template v-slot:right-icon>
                    <img src="@/assets/images/iconseditoutline-black.svg" />
                  </template>
                </input-data>
              </div>
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
                variant='right'
                @on-slide="ev => paperDataStore.paperDTO.ownership = Boolean(ev)"
              ></button-slider>
            </div>
          </div>
          <div class="child"></div>
          <div class="wrapper2">
            <div class="div30">
              <span>Данные представителя организации </span>
              <span class="span2">*</span>
            </div>
          </div>
        </div>
      </div>
      <router-link class="buttonnext" to="/sign-up/anketa-verification">
        <b class="b1">Продолжить</b>
      </router-link>
      <div class="header">
        <img
          class="icons3dpersona-creditors"
          alt=""
          src="../public/icons3dpersona-creditors@2x.png"
        />

        <div class="parent9">
          <div class="div31">
            <p class="p">Заполняйте поля внимательно</p>
            <p class="p">и настоящими данными</p>
          </div>
          <div class="div32">
            <p class="p">Данные будут использоваться</p>
            <p class="p">для заключения пользовательского соглашения</p>
          </div>
        </div>
      </div>
      <div class="registration-options">
        <div class="registration-options-child"></div>
        <div class="text-and-fill">
          <div class="div30">
            <span>Адрес регистрации</span>
            <span class="span2"> *</span>
          </div>
        </div>
        <div class="fieldsinputchoise-parent">
          <div class="text2">
            <div class="div22">
              <span class="span8">
                <span class="span17">Область, край </span>
                <span class="span15"> </span>
              </span>
              <span class="span15">
                <span>
                  <span>*</span>
                  <span class="span10"> </span>
                </span>
              </span>
            </div>
            <catos-select
              placeholder="Московская"
              :options="regions"
              :value="
                passportDataStore.passportDTO.registration_address.region
              "
              :optionWidth="77"
              :style="
              passportDataStore.passportDTO.country !== 'Россия'
                  ? { width: '100%', opacity: '0.2', cursor: 'not-allowed', pointerEvents: 'none' }
                  : { width: '100%', opacity: '1' }
              "
              @selected="
                ev =>
                  (passportDataStore.passportDTO.registration_address.region =
                    ev)
              "
              :disabled="passportDataStore.passportDTO.country !== 'Россия'"
            ></catos-select>
          </div>
          <div class="fieldsinputchoise3">
            <div class="div10">
              <span>Район </span>
              <span class="span2">* </span>
            </div>
            <catos-select
              :placeholder="passportDataStore.passportDTO.registration_address.region !== '' && neighborhoodsReg ? neighborhoodsReg[0] : 'Воскресенск'"
              :options="neighborhoodsReg"
              :value="passportDataStore.passportDTO.registration_address.neighborhood"
              @selected=" ev => (passportDataStore.passportDTO.registration_address.neighborhood = ev)"
              :optionWidth="77"
              :style="
                passportDataStore.passportDTO.registration_address.region === '' || passportDataStore.passportDTO.country !== 'Россия'
                  ? { width: '100%', opacity: '0.2', cursor: 'not-allowed', pointerEvents: 'none' }
                  : { width: '100%', opacity: '1' }
              "
              :disabled="passportDataStore.passportDTO.registration_address.region === '' || passportDataStore.passportDTO.country !== 'Россия'"
            ></catos-select>
          </div>
          <div class="fieldsinputchoise3">
            <div class="div10">Населенный пункт</div>
            <catos-select
            :placeholder="passportDataStore.passportDTO.registration_address.region !== '' && citiesReg ? citiesReg[0] : 'Москва'"
              :options="citiesReg"
              :value="passportDataStore.passportDTO.registration_address.city"
              :optionWidth="77"
              :style="
                 passportDataStore.passportDTO.registration_address.region === '' || passportDataStore.passportDTO.country !== 'Россия'
                  ? { width: '100%', opacity: '0.2', cursor: 'not-allowed', pointerEvents: 'none' }
                  : { width: '100%', opacity: '1' }
              "
              @selected="
                ev =>
                  (passportDataStore.passportDTO.registration_address.city =
                    ev)
              "
             :disabled="passportDataStore.passportDTO.registration_address.region === '' || passportDataStore.passportDTO.country !== 'Россия'"
            ></catos-select>
          </div>
          <div class="text2">
            <div class="div10">Улица</div>
            <input-data
              :modelValue="passportDataStore.passportDTO.registration_address.street"
              @update:model-value="passportDataStore.passportDTO.registration_address.street = $event"
              placeholder="Начните вводить адресс"
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
              <div class="div10">Дом</div>
              <input-data
                :modelValue="passportDataStore.passportDTO.registration_address.house"
              @update:model-value="passportDataStore.passportDTO.registration_address.house = $event"
                placeholder="1"
                :style="{ width: '100%' }"
              ></input-data>
            </div>
            <div class="parent11">
              <div class="div10">Корпус</div>
              <input-data
              :modelValue="passportDataStore.passportDTO.registration_address.housing"
              @update:model-value="passportDataStore.passportDTO.registration_address.housing = $event"
                placeholder="1"
                :style="{ width: '100%' }"
              ></input-data>
            </div>
          </div>
          <div class="frame-parent3">
            <div class="parent11">
              <div class="div10">Строение</div>
              <input-data
              :modelValue="passportDataStore.passportDTO.registration_address.building"
              @update:model-value="passportDataStore.passportDTO.registration_address.building = $event"
                placeholder="1"
                :style="{ width: '100%' }"
              ></input-data>
            </div>
            <div class="parent11">
              <div class="div10">Квартира</div>
              <input-data
              :modelValue="passportDataStore.passportDTO.registration_address.apartment"
              @update:model-value="passportDataStore.passportDTO.registration_address.apartment = $event"
                placeholder="№"
                :style="{ width: '100%' }"
              ></input-data>
            </div>
          </div>
          <div class="parent11">
            <div class="div10">Индекс</div>
            <input-data
              @update:model-value="passportDataStore.passportDTO.registration_address.index = $event"
              placeholder="193 984"
              :style="{ width: '100%' }"
            ></input-data>
          </div>
        </div>
      </div>
      <div class="registration-options1">
        <div class="registration-options-item"></div>
        <div class="text-and-fill">
          <div class="div30">
            <span>Адрес фактического места проживания</span>
            <span class="span2"> *</span>
          </div>
        </div>
        <div class="fieldsinputchoise-parent">
         
          <div class="fieldsinputchoise">
            <div class="div10">
              <span>Область, край </span>
              <span class="span2">* </span>
            </div>
            <catos-select
            placeholder="Московская"
              :options="regions"
              :value="passportDataStore.passportDTO.living_address.region"
              :optionWidth="77"
              :style="passportDataStore.passportDTO.country !== 'Россия'
                  ? { width: '100%', opacity: '0.2', cursor: 'not-allowed', pointerEvents: 'none' }
                  : { width: '100%', opacity: '1' }
              "
              @selected="ev => (passportDataStore.passportDTO.living_address.region = ev)"
              :disabled="passportDataStore.passportDTO.country !== 'Россия'"
            ></catos-select>
          </div>
          <div class="fieldsinput">
            <div class="div10">
              <span>Район </span>
              <span class="span2">* </span>
            </div>
            <catos-select
              :placeholder="passportDataStore.passportDTO.living_address.region !== '' && neighborhoodsLiv ? neighborhoodsLiv[0] : 'Воскресенск'"
              :options="neighborhoodsLiv"
              :value="
                passportDataStore.passportDTO.living_address.neighborhood
              "
              :optionWidth="77"
              :style="
                passportDataStore.passportDTO.living_address.region === '' || passportDataStore.passportDTO.country !== 'Россия'
                  ? { width: '100%', opacity: '0.2', cursor: 'not-allowed', pointerEvents: 'none' }
                  : { width: '100%', opacity: '1' }
              "
              @selected="
                ev =>
                  (passportDataStore.passportDTO.living_address.neighborhood =
                    ev)
              "
               :disabled="passportDataStore.passportDTO.living_address.region === '' || passportDataStore.passportDTO.country !== 'Россия'"
            ></catos-select>
          </div>
          <div class="fieldsinputchoise3">
            <div class="div10">Населенный пункт</div>
            <catos-select
              :placeholder="passportDataStore.passportDTO.living_address.region !== '' && citiesLiv ? citiesLiv[0] : 'Москва'"
              :options="citiesLiv"
              :value="passportDataStore.passportDTO.living_address.city"
              :optionWidth="77"
              :style="
                 passportDataStore.passportDTO.living_address.region === '' || passportDataStore.passportDTO.country !== 'Россия'
                  ? { width: '100%', opacity: '0.2', cursor: 'not-allowed', pointerEvents: 'none' }
                  : { width: '100%', opacity: '1' }
              "
              @selected="
                ev => (passportDataStore.passportDTO.living_address.city = ev)
              "
              :disabled="passportDataStore.passportDTO.living_address.region === '' || passportDataStore.passportDTO.country !== 'Россия'"
            ></catos-select>
          </div>
          <div class="text2">
            <div class="div10">Улица</div>
            <input-data
            :modelValue="passportDataStore.passportDTO.living_address.street"
            @update:model-value="
                ev =>
                  (passportDataStore.passportDTO.living_address.street = ev)
              "
              placeholder="Начните вводить адресс"
              :style="{ width: '100%' }"
              :right="true"
            >
              <template v-slot:right-icon>
                <img src="@/assets/images/iconseditoutline-black.svg" />
              </template>
            </input-data>
          </div>
        </div>
        <div class="frame-parent5">
          <div class="frame-parent3">
            <div class="parent11">
              <div class="div10">Дом</div>
              <input-data
              :modelValue="passportDataStore.passportDTO.living_address.house"
              @update:model-value="
                  ev =>
                    (passportDataStore.passportDTO.living_address.house = ev)
                "
                placeholder="1"
                :style="{ width: '100%' }"
              ></input-data>
            </div>
            <div class="parent11">
              <div class="div10">Корпус</div>
              <input-data
              :modelValue="passportDataStore.passportDTO.living_address.housing"
              @update:model-value="
                  ev =>
                    (passportDataStore.passportDTO.living_address.housing = ev)
                "
                placeholder="1"
                :style="{ width: '100%' }"
              ></input-data>
            </div>
          </div>
          <div class="frame-parent3">
            <div class="parent11">
              <div class="div10">Строение</div>
              <input-data
              :modelValue="passportDataStore.passportDTO.living_address.building"
              @update:model-value="
                  ev =>
                    (passportDataStore.passportDTO.living_address.building =
                      ev)
                "
                placeholder="1"
                :style="{ width: '100%' }"
              ></input-data>
            </div>
            <div class="parent11">
              <div class="div10">Квартира</div>
              <input-data
              :modelValue="passportDataStore.passportDTO.living_address.apartment"
              @update:model-value="
                  ev =>
                    (passportDataStore.passportDTO.living_address.apartment =
                      ev)
                "
                placeholder="1"
                :style="{ width: '100%' }"
              ></input-data>
            </div>
          </div>
          <div class="parent11">
            <div class="div10">Индекс</div>
            <input-data
              @update:model-value="passportDataStore.passportDTO.living_address.index = $event"
              placeholder="193 984"
              :style="{ width: '100%' }"
            ></input-data>
          </div>
        </div>
      </div>
      <div class="registration-options-wrapper">
        <div class="registration-options2">
          <div class="registration-options-inner"></div>
          <div class="text-and-fill2">
            <div class="div30">
              <span>Подтверждающие документы </span>
              <span class="span2">*</span>
            </div>
          </div>
          <div class="parent22">
            <div class="div67">
              Загрузите фото или скан паспорта так как это показано на
              изображении выше. Данные паспорта должны быть хорошо различимы.
              Разрешение фотографии должно быть не менее 1200 × 1200 пикселей
            </div>
            <div class="organizmloader">
              <div class="frame-parent8">
                <div class="icons-parent">
                  <div class="icons">
                    <div class="icon">
                      <div class="icon-child"></div>
                      <div class="icon-item"></div>
                      <div class="rectangle-group">
                        <div class="frame-inner"></div>
                        <div class="frame-inner"></div>
                        <div class="frame-inner"></div>
                        <div class="frame-inner"></div>
                        <div class="frame-inner"></div>
                        <div class="frame-inner"></div>
                        <div class="frame-inner"></div>
                      </div>
                      <div class="icon-inner"></div>

                      <div class="icon-child1"></div>
                      <div class="icon-child2"></div>
                      <div class="icon-child3"></div>
                      <div class="icon-child4"></div>
                      <div class="icon-child5"></div>
                      <div class="icon-child6"></div>
                      <div class="icon-child7"></div>
                      <div class="icon-child8"></div>
                      <div class="ellipse-div"></div>
                      <img
                        class="frame-icon"
                        alt=""
                        src="../public/frame-1817518.svg"
                      />
                    </div>
                  </div>
                  <div class="loader-group">
                    <loader-field
                      name="Разворот с датой выдачи и фотографией"
                      :obligatory-field="true"
                      :style="{ width: '100%', paddingBottom: '0.1em' }"
                      class="loader-file"
                      @on-change="file => saveImage('passPhoto1', file)"
                    ></loader-field>
                  </div>
                </div>
                <div class="loadernav">
                  <div class="icons-group">
                    <div class="icons1">
                      <div class="iconsfile">
                        <img
                          class="vector-icon1"
                          alt=""
                          src="../public/vector.svg"
                        />

                        <div class="jpg">JPG</div>
                      </div>
                    </div>
                    <div class="frame-wrapper1">
                      <div class="goa-filejpg-wrapper">
                        <div class="goa-filejpg">
                          Goa_file2
                          <span class="jpg1">.jpg</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="loader">
                    <div class="loader1">
                      <img
                        class="loader-child"
                        alt=""
                        src="../public/frame-1817486.svg"
                      />

                      <div class="div69">100%</div>
                    </div>
                    <img
                      class="loader-child"
                      alt=""
                      src="../public/remove.svg"
                    />
                  </div>
                </div>
              </div>
              <div class="frame-parent9">
                <div class="icons-container">
                  <div class="icons">
                    <div class="icon-child"></div>
                    <div class="icon-item"></div>
                    <div class="icons-inner">
                      <div class="rectangle-container">
                        <div class="frame-inner"></div>
                        <div class="frame-inner"></div>
                        <div class="frame-inner"></div>
                        <div class="frame-inner"></div>
                        <div class="frame-inner"></div>
                      </div>
                    </div>
                    <div class="icons-child1"></div>
                    <img
                      class="frame-icon"
                      alt=""
                      src="../public/frame-18175181.svg"
                    />
                  </div>
                  <div class="loader-group">
                    <loader-field
                      name="Страница с регистрацией"
                      :obligatory-field="true"
                      :style="{ width: '100%', paddingBottom: '0.1em' }"
                      class="loader-file"
                      @on-change="file => saveImage('passPhoto2', file)"
                    ></loader-field>
                  </div>
                </div>
                <div class="loadernav">
                  <div class="icons-group">
                    <div class="icons1">
                      <div class="iconsfile">
                        <img
                          class="vector-icon1"
                          alt=""
                          src="../public/vector.svg"
                        />

                        <div class="jpg">JPG</div>
                      </div>
                    </div>
                    <div class="frame-wrapper1">
                      <div class="goa-filejpg-wrapper">
                        <div class="goa-filejpg">
                          Goa_file2
                          <span class="jpg1">.jpg</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="loader">
                    <div class="loader1">
                      <img
                        class="loader-child"
                        alt=""
                        src="../public/frame-1817486.svg"
                      />

                      <div class="div69">100%</div>
                    </div>
                    <img
                      class="loader-child"
                      alt=""
                      src="../public/remove.svg"
                    />
                  </div>
                </div>
              </div>
              <div class="div72">
                <span><b>Загрузите страницы паспорта</b></span>
              </div>
              <div class="div73">
                <span><b>Загрузите селфи с разворотом паспорта</b></span>
              </div>
            </div>
          </div>
          <div class="parent23">
            <div class="div67">
              Загрузите ваше селфи фото с паспортом так как это показано на
              изображении выше. Данные паспорта должны быть хорошо различимы.
              Разрешение фотографии должно быть не менее 1200 × 1200 пикселей
            </div>
            <div class="organizmloader1">
              <div class="frame-wrapper">
                <div class="frame-parent10">
                  <div class="frame-parent11">
                    <img
                      class="frame-child11"
                      alt=""
                      src="../public/frame-1817525.svg"
                    />
                    <div class="frame-wrapper3">
                      <div class="icon-wrapper">
                        <div class="icon1">
                          <div class="icon-child9"></div>
                          <div class="icon-child10"></div>
                          <div class="rectangle-parent1">
                            <div class="frame-child12"></div>
                            <div class="frame-child12"></div>
                            <div class="frame-child12"></div>
                            <div class="frame-child12"></div>
                            <div class="frame-child12"></div>
                            <div class="frame-child12"></div>
                            <div class="frame-child12"></div>
                          </div>
                          <div class="icon-child11"></div>

                          <div class="icon-child13"></div>
                          <div class="icon-child14"></div>
                          <div class="icon-child15"></div>
                          <div class="icon-child16"></div>
                          <div class="icon-child17"></div>
                          <div class="icon-child18"></div>
                          <div class="icon-child19"></div>
                          <div class="icon-child20"></div>
                          <div class="icon-child21"></div>
                          <img
                            class="icon-child22"
                            alt=""
                            src="../public/frame-18175182.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="loader-group">
                  <loader-field
                    name="Загрузите и разворот с датой выдачи"
                    :obligatory-field="true"
                    :style="{ width: '100%', paddingBottom: '0.1em' }"
                    class="loader-file"
                    @on-change="file => saveImage('selfie', file)"
                  ></loader-field>
                </div>
              </div>
              <div class="loadernav">
                <div class="icons-group">
                  <div class="icons1">
                    <div class="iconsfile">
                      <img
                        class="vector-icon1"
                        alt=""
                        src="../public/vector.svg"
                      />

                      <div class="jpg">JPG</div>
                    </div>
                  </div>
                  <div class="frame-wrapper1">
                    <div class="goa-filejpg-wrapper">
                      <div class="goa-filejpg">
                        Goa_file2
                        <span class="jpg1">.jpg</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="loader">
                  <div class="loader5">
                    <img
                      class="loader-child"
                      alt=""
                      src="../public/frame-18174861.svg"
                    />

                    <div class="div69">12%</div>
                  </div>
                  <img class="loader-child" alt="" src="../public/remove.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header1">
      <div class="page-title-parent">
        <b class="page-title1">Анкета представителя</b>
      </div>
    </div>
    <div class="slidersteps">
      <div class="loader6"></div>
      <div class="numbers">
        <div class="div79">из</div>
        <div class="div79">7</div>
      </div>
      <div class="steps">
        <div class="div69">4 шаг</div>
      </div>
    </div>
    <router-link class="buttonback" to="" @click="$router.go(-1)">
      <div class="div82">Назад</div>
      <img class="search-icon" alt="" src="../public/search-icon.svg" />
    </router-link>
  </div>
  <!--<confirm-qr-destop></confirm-qr-destop>-->
</template>

<script setup lang="ts">
import catosSelect from "../../../components/fields/catos-select.vue";
import inputData from "../../../components/fields/input-data.vue";
import catosTextarea from "../../../components/fields/catos-textarea.vue";
import buttonSlider from "../../../components/ui-kit/buttons/button-slider.vue";
import loaderField from "../../../components/fields/loader-field.vue";
import { ref, computed, reactive } from "vue";
import { useUserDataStore } from "@/stores/userData";
import { usePaperDataStore } from "@/stores/paperData";
import { usePassportDataStore } from "@/stores/passportData";
import catosCheckbox from "../../../components/ui-kit/catos-checkbox.vue";
import { useCityList } from '@/composables/useCityList'
import { useNeighborhoodList } from "@/composables/useNeighborhoodList"
import countries from "@/json/countries.json"
import regions from "@/json/regions.json"

const paperDataStore = usePaperDataStore()
const passportDataStore = usePassportDataStore()
const userDataStore = useUserDataStore();

const {citiesByRegion: ctitesRegistration} = useCityList('registration', 'passport')
const {citiesByRegion: ctitesLiving} = useCityList('living', 'passport')
const {neighborhoodByRegion: neighborhoodRegistration} = useNeighborhoodList('registration', 'passport')
const {neighborhoodByRegion: neighborhoodLiving} = useNeighborhoodList('living', 'passport')

const citiesReg = computed(() => {
    return ctitesRegistration.value
});
const citiesLiv = computed(() => {
    return ctitesLiving.value
});
const neighborhoodsReg = computed(() => {
    return neighborhoodRegistration.value
});
const neighborhoodsLiv = computed(() => {
    return neighborhoodLiving.value
});

const isSelectedRadioButton1 = ref(false);
const isSelectedRadioButton2 = ref(false);
import { useDevice } from "@/compossables/useDevice";


const { isMobile } = useDevice();

const saveImage = async (boxName: string, file: File | null) => {
  if (file) {
    switch (boxName) {
      case "passPhoto1":
        userDataStore.firstPhotoFile = file;
        passportDataStore.passportDTO.first_photo = 'Goa_file2.jpg';
        break;
      case "passPhoto2":
        userDataStore.secondPhotoFile = file;
        passportDataStore.passportDTO.second_photo = 'Goa_file2.jpg';
        break;
      case "selfie":
        userDataStore.selfieFile = file;
        passportDataStore.passportDTO.selfie = 'Goa_file2.jpg';
        break;
      default:
        break;
    }
    console.log("File saved");
  } else {
    console.log("File is null");
  }
};
const passportNumberString = reactive({
  value:
  passportDataStore.passportDTO.number === 0
      ? ""
      : passportDataStore.passportDTO.number.toString(),
});
</script>

<style scoped lang="scss">
.bg-icon {
  position: absolute;
  top: 0;
  left: 0;
  height: 20.88em;
}
.span {
  font-size: 1em;
  font-weight: 500;
}
.span1 {
  font-size: 0.88em;
  font-weight: 300;
}
.txt {
  line-break: anywhere;
  width: 100%;
}
.div9 {
  position: relative;
  line-height: 110%;
  display: flex;
  align-items: center;
  width: 21.31em;
}
.span2 {
  color: red;
}
.div10,
.text {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
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
.fields-password-and-mail2,
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
  height: 2.5em;
  flex-direction: column;
  padding: 0.5em 0.75em;
  align-items: flex-start;
  justify-content: center;
  color: rgba(46, 58, 89, 0.36);
}
.fieldsinputchoise {
  gap: 0.5em;
}
.fieldsinputchoise,
.frame-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.06em;
}
.div12 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.06em;
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
.fields-password-and-mail3,
.frame-div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.fields-password-and-mail3 {
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
.frame-div {
  flex: 1;
  justify-content: flex-start;
  gap: 0.5em;
}
.iconsedit-outline1 {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
}
.fields-password-and-mail4 {
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
.frame-container {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.fields-password-and-mail-container {
  gap: 0.38em;
  color: rgba(46, 58, 89, 0.36);
}
.frame-container {
  gap: 0.75em;
}
.span5 {
  letter-spacing: -2px;
  color: red;
}
.span7 {
  letter-spacing: 0.01em;
}
.p {
  margin: 0;
}
.div16 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 120%;
  font-weight: 300;
}
.frame {
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
.fields-password-and-mail5 {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f9fbff;
  border: 0.5px solid #656060;
  padding: 0.5em 0.75em 1em;
  position: relative;
  gap: 0.25em;
  color: rgba(46, 58, 89, 0.36);
}
.fields-password-and-mail5,
.frame-group,
.group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-group {
  align-self: stretch;
  gap: 1.25em;
}
.group {
  position: absolute;
  top: 55em;
  left: 1.31em;
  width: 77vw;
  gap: 1.5em;
}
.span10,
.span8 {
  font-weight: 300;
}
.span10 {
  font-family: Inter;
}
.div18 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
}
.parent5 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0;
  align-items: center;
  justify-content: space-between;
}
.fields-password-and-mail6,
.fieldsinput {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.fields-password-and-mail6 {
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
  width: 100%;
  justify-content: flex-start;
  gap: 0.5em;
}
.span14 {
  line-height: 130%;
  font-weight: 300;
}
.span15 {
  line-height: 0.83em;
  color: red;
}
.div22 {
  position: relative;
  font-size: 0.75em;
}
.span17 {
  line-height: 130%;
}
.div24 {
  position: relative;
  font-size: 0.75em;
  font-weight: 300;
}
.fields-password-and-mail9,
.fieldsinput-parent {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.fields-password-and-mail9 {
  border-radius: 16px;
  border: 0.5px solid #2e3a59;
  box-sizing: border-box;
  width: 18.75em;
  height: 2.5em;
  padding: 0.5em 0.75em;
  justify-content: center;
  color: rgba(46, 58, 89, 0.36);
}
.fieldsinput-parent {
  width: 100%;
  justify-content: flex-start;
  gap: 1.38em;
}
.div27 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.wrapper1 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.span23 {
  font-size: 0.88em;
  color: red;
}
.div28 {
  position: relative;
  line-height: 110%;
}
.div28,
.div29,
.text2 {
  align-self: stretch;
}
.div29 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.text2 {
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
.text3 {
  position: absolute;
  top: 0.5em;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
}
.text3 {
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
.frame-parent1 {
  position: absolute;
  top: 2.31em;
  left: 1.31em;
  width: 87%;
  align-items: center;
  gap: 1.75em;
  z-index: 10;
}
.child {
  position: absolute;
  width: 100%;
  top: calc(50% - 325.5px);
  right: 0;
  left: 0;
  border-radius: 15px;
  border: 0.5px solid rgba(46, 58, 89, 0.4);
  box-sizing: border-box;
  height: 53em;
}
.div30 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
  font-weight: 500;
}
.wrapper2 {
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
.div17,
.div8 {
  position: absolute;
  top: -2.31em;
  left: 0;
  width: 88.7vw;
  height: 41.44em;
}
.div8 {
  top: 8em;
  left: 6vw;
  height: 59.06em;
}
.b1,
.buttonnext {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--color-darkslategray-100);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
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
  top: 230em;
  left: 1.5em;
  border-radius: 20px;
  background-color: #ffdb6d;
  width: 88.7vw;
  height: 3em;
  overflow: hidden;
  flex-direction: row;
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  cursor: pointer;
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
.div31,
.div32 {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
}
.div32 {
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
  // position: absolute;
  position: relative;
  top: 1em;
  // left: 1.5em;
  width: 21.38em;
  flex-direction: row;
  gap: 0.75em;
  margin: 0 auto;
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
.fieldsinputchoise3,
.text-and-fill {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.text-and-fill {
  position: absolute;
  top: 0;
  left: 1.06em;
  background-color: #fff;
  flex-direction: row;
  padding: 0 0.38em;
}
.fieldsinputchoise3 {
  flex-direction: column;
  gap: 0.25em;
  width: 100%;
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
.wrapper3 {
  display: flex;
  justify-content: flex-start;
}
.wrapper3 {
  align-self: stretch;
  flex-direction: row;
  align-items: center;
}
.parent11 {
  width: 9em;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25em;
}
.frame-parent2,
.frame-parent3,
.wrapper5 {
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
.wrapper5 {
  align-items: center;
}
.frame-parent2 {
  position: absolute;
  top: 22.75em;
  left: 1.31em;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
  width: 88%;
}
.registration-options {
  position: absolute;
  top: 86.31em;
  left: 6vw;
  width: 87.7vw;
  height: 37.63em;
}
.registration-options-item {
  position: absolute;
  height: 88%;
  width: 100%;
  top: 0.44%;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 0.5px solid #2e3a59;
  box-sizing: border-box;
}
.frame-parent5 {
  position: absolute;
  top: 23.63em;
  left: 1.31em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1em;
  width: 88%;
}
.registration-options1 {
  position: absolute;
  top: 126.94em;
  left: 1.5em;
  width: 87.8vw;
  height: 43.31em;
}
.registration-options-inner {
  position: absolute;
  height: 235%;
  width: 100%;
  top: -0.22%;
  right: 0;
  bottom: -75.49%;
  left: 0;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 0.5px solid #2e3a59;
  box-sizing: border-box;
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
.div67 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
  display: flex;
  align-items: center;
  width: 100%;
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
  top: 0.7em;
  left: 2.44em;
  width: 0.71em;
  height: 1.86em;
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
  flex-direction: column;
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
.div69 {
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
.div70 {
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
  flex-direction: column;
  align-items: center;
  gap: 1.06em;
}
.frame-parent9 {
  flex-direction: column;
  align-items: flex-start;
  gap: 0.63em;
  z-index: 1;
  width: 100%;
}
.div72, .div73 {
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
.div73{
  top: 55em;
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
  width: 88%;
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
  width: 88%;
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
.icon-child12,
.icon-child13 {
  position: absolute;
  top: -1.96em;
  left: 0.44em;
  width: 1.15em;
  height: 1.13em;
}
.icon-child13 {
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
.icon-child20,
.icon-child21 {
  position: absolute;
  top: 0.36em;
  left: 1.03em;
  border-radius: 1.44px;
  background-color: #d9d9d9;
  width: 0.05em;
  height: 2.52em;
}
.icon-child15,
.icon-child16,
.icon-child17,
.icon-child18,
.icon-child19,
.icon-child20,
.icon-child21 {
  left: 0.9em;
}
.icon-child16,
.icon-child17,
.icon-child18,
.icon-child19,
.icon-child20,
.icon-child21 {
  left: 0.77em;
}
.icon-child17,
.icon-child18,
.icon-child19,
.icon-child20,
.icon-child21 {
  left: 0.63em;
}
.icon-child18,
.icon-child19,
.icon-child20,
.icon-child21 {
  left: 0.36em;
  height: 0.54em;
}
.icon-child19,
.icon-child20,
.icon-child21 {
  top: 0.99em;
}
.icon-child20,
.icon-child21 {
  top: 1.98em;
  left: 2.7em;
  width: 1.17em;
  height: 0.9em;
}
.icon-child21 {
  top: 1.89em;
  left: 1.53em;
  border-radius: 50%;
  width: 0.54em;
  height: 0.54em;
}
.icon-child22 {
  position: absolute;
  top: 0.97em;
  left: 1.7em;
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
  justify-content: center;
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
  width: 88%;
  overflow: hidden;
  padding: 3em 0.75em 1.25em;
  box-sizing: border-box;
  align-items: flex-start;
  gap: 0.63em;
  color: #000;
}
.parent23 {
  position: absolute;
  top: 42em;
  left: 1.31em;
  align-items: center;
  gap: 1.13em;
  color: rgba(59, 59, 59, 0.9);
  width: 88%;
}
.div76 {
  position: absolute;
  top: 50.83em;
  left: 11vw;
  font-size: 0.75em;
  line-height: 0.83em;
  font-weight: 300;
  width: 73%;
}
.registration-options2 {
  position: relative;
  width: 87.8vw;
  height: 28.81em;
}
.registration-options-wrapper {
  position: absolute;
  top: 173em;
  left: 1.5em;
  height: 50.56em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.form-registration-46 {
  position: absolute;
  top: 12.25em;
  left: 0;
  border-radius: 40px 40px 0 0;
  background-color: #fff;
  width: 100vw;
  height: 250em;
}
.page-title1 {
  color: #3b3b3b;
}
.page-title1,
.page-title4 {
  position: relative;
  font-size: 1.25em;
  letter-spacing: -1px;
  line-height: 1.4em;
}
.page-title5 {
  color: rgba(59, 59, 59, 0.17);
}
.page-title-parent {
  position: absolute;
  top: -0.63em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 7.56em;
  width: 100%;
}
.battery-icon,
.header1 {
  position: absolute;
  height: 1.33%;
  width: 100;
  top: 3.55%;
  right: -0.26%;
  bottom: 95.12%;
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
.div77 {
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
.div79 {
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
.div82 {
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
  height: 250em;
  overflow-y: hidden;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
  overflow-x: hidden;
}
@media (min-width: 500px) {
  .div17,
  .group {
    width: 400px;
    position: relative;
    margin: 0 auto;
  }
  .div17 {
    top: -15em;
  }
  .group {
    width: 360px;
    top: 60em;
    left: 0em;
  }
  .registration-options {
    position: relative;
    top: 82.5em;
    width: 400px;
    height: 37.63em;
    margin: 0 auto;
    left: 1em;
  }
  .registration-options1 {
    position: relative;
    top: 86em;
    left: 1em;
    width: 400px;
    height: 43.31em;
    margin: 0 auto;
  }
  .registration-options-wrapper {
    position: relative;
    top: 85em;
    left: 1em;
    height: 50.56em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 400px;
    justify-content: flex-start;
    margin: 0 auto;
  }
  .registration-options2 {
    width: 100%;
  }
  .iphone-13-13-form-registr {
    height: 265em;
  }
  .form-registration-46 {
    height: 100%;
  }
  .buttonnext {
    position: relative;
    top: 245em;
    margin: 0 auto;
    left: 1em;
    width: 400px;
  }
  .div76 {
    left: 5em;
  }
}
@media (max-width: 371px) {
  .child {
    height: 43.06em;
  }
  .group {
    top: 42.81em;
  }
  .registration-options {
    top: 74.31em;
  }
  .registration-options1 {
    top: 114.94em;
  }
  .registration-options-wrapper {
    top: 161.25em;
  }
  .buttonnext {
    top: 214em;
  }
  .loader-group {
    gap: 0.63em;
    width: 100%;
  }
}
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
.fields-password-and-mail-parent1 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.38em;
}
.parent39{
  width: 100%;
}
.frame-parent17{
  display: flex;
    justify-content: space-between;
    width: 100%;
}
</style>
