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
                    :options="options"
                    :value="value"
                    @selected="ev => (value = ev)"
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
                <input-data placeholder="1234 09876"></input-data>
              </div>
              <div class="frame-div">
                <div class="div10">
                  <span>Дата выдачи </span>
                  <span class="span2">* </span>
                </div>
                <div class="fields-password-and-mail-container">
                  <input-data type="date" placeholder="01.02.2022"></input-data>
                  <div class="iconscalendar-wrapper">
                    <!--<input-data
                      :simulate="true"
                      type="date"
                      placeholder="01.02.1994"
                      :style="{
                        width: '100%',
                        position: 'relative',
                        right: '0.5em',
                      }"
                      @selected="e => (date = e)"
                    ></input-data>-->
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
                :style="{ width: '100%' }"
                placeholder="ГУМВД России по Санкт-Петербургу, и Ленинградской области"
              ></catos-textarea>
            </div>
          </div>
        </div>
        <div class="div17">
          <div class="inner">
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
                  placeholder="Введите имя"
                  :style="{ width: '100%' }"
                ></input-data>
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
                  placeholder="Введите фамилию"
                  :style="{ width: '100%' }"
                ></input-data>
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
                  placeholder="Введите отчество"
                  :style="{ width: '100%' }"
                ></input-data>
              </div>
              <div class="parent8">
                <div class="div10">
                  <span>Дата рождения: </span>
                  <span class="span2">* </span>
                </div>
                <div class="fields-password-and-mail-container">
                  <input-data
                    type="date"
                    placeholder="01.02.1994"
                    :style="{ width: '100%' }"
                    :value="date"
                  ></input-data>
                  <div class="iconscalendar-wrapper">
                    <!--<input-data
                      :simulate="true"
                      type="date"
                      placeholder="01.02.1994"
                      :style="{
                        width: '100%',
                        position: 'relative',
                        right: '0.5em',
                      }"
                      @selected="e => (date = e)"
                    ></input-data>-->
                    <img
                      class="iconscalendar"
                      alt=""
                      src="../public/iconscalendar.svg"
                      :style="{ position: 'absolute' }"
                    />
                  </div>
                </div>
              </div>
              <div class="parent10">
                <div class="div10">
                  <span>Пол: </span>
                  <span class="span2">* </span>
                </div>
                <div class="frame-parent1">
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
                    <div class="text">Мужской</div>
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
                    <div class="text">Женский</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="child"></div>
          <div class="wrapper1">
            <div class="div29">
              <span>Персональные данные</span>
              <span class="span2">*</span>
            </div>
          </div>
        </div>
      </div>
      <router-link
        class="buttonnext"
        id="buttonNextContainer"
        :to="{
          name: 'borrower-verification',
          state: { role },
        }"
      >
        <b class="b1">Продолжить</b>
      </router-link>
      <div class="header">
        <img
          class="icons3dpersona-creditors"
          alt=""
          src="../public/icons3dpersona-creditors@2x.png"
        />

        <div class="parent11">
          <div class="div30">Пользовательская информация</div>
          <div class="div31">
            Для получения займа пожалуйста заполните анкету:
          </div>
        </div>
      </div>
      <div class="registration-options">
        <div class="registration-options-child"></div>
        <div class="text-and-fill">
          <div class="div29">
            <span>Адресс регистрации</span>
            <span class="span2"> *</span>
          </div>
        </div>
        <div class="fieldsinputchoise-parent">
          <div class="fieldsinputchoise1">
            <div class="div22">
              <span class="span8">
                <span class="span22">Область, край </span>
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
              placeholder="Россия"
              :options="options"
              :value="value"
              @selected="ev => (value = ev)"
            ></catos-select>
          </div>
          <div class="fieldsinputchoise2">
            <div class="div10">
              <span>Район </span>
              <span class="span2">* </span>
            </div>
            <catos-select
              placeholder="Красносельский"
              :options="options"
              :value="value"
              @selected="ev => (value = ev)"
            ></catos-select>
          </div>
          <div class="fieldsinputchoise2">
            <div class="div10">Населенный пункт</div>
            <catos-select
              placeholder="Санкт-Петербург"
              :options="options"
              :value="value"
              @selected="ev => (value = ev)"
            ></catos-select>
          </div>
          <div class="fieldsinputchoise1">
            <div class="div10">Улица</div>
            <input-data
              placeholder="Начните вводить адресс"
              :style="{ width: '100%' }"
            ></input-data>
          </div>
        </div>
        <div class="frame-parent2">
          <div class="frame-parent3">
            <div class="parent13">
              <div class="div10">Дом</div>
              <input-data
                placeholder="1"
                :style="{ width: '100%' }"
              ></input-data>
            </div>
            <div class="parent13">
              <div class="div10">Корпус</div>
              <input-data
                placeholder="1"
                :style="{ width: '100%' }"
              ></input-data>
            </div>
          </div>
          <div class="frame-parent3">
            <div class="parent13">
              <div class="div10">Строение</div>
              <input-data
                placeholder="1"
                :style="{ width: '100%' }"
              ></input-data>
            </div>
            <div class="parent13">
              <div class="div10">Квартира</div>
              <input-data
                placeholder="№"
                :style="{ width: '100%' }"
              ></input-data>
            </div>
          </div>
          <div class="parent13">
            <div class="div10">Индекс</div>
            <input-data
              placeholder="193 984"
              :style="{ width: '100%' }"
            ></input-data>
          </div>
        </div>
      </div>
      <div class="registration-options1">
        <div class="registration-options-item"></div>
        <div class="text-and-fill">
          <div class="div29">
            <span>Адресс фактического места проживания</span>
            <span class="span2"> *</span>
          </div>
        </div>
        <div class="fieldsinputchoise-group">
          <div class="fieldsinputchoise">
            <div class="div10">
              <span>Страна </span>
              <span class="span2">* </span>
            </div>
            <catos-select
              placeholder="Россия"
              :options="options"
              :value="value"
              @selected="ev => (value = ev)"
            ></catos-select>
          </div>
          <div class="fieldsinputchoise">
            <div class="div10">
              <span>Область, край </span>
              <span class="span2">* </span>
            </div>
            <catos-select
              placeholder="Cеверо-западный округ"
              :options="options"
              :value="value"
              @selected="ev => (value = ev)"
            ></catos-select>
          </div>
          <div class="fieldsinput">
            <div class="div10">
              <span>Район </span>
              <span class="span2">* </span>
            </div>
            <catos-select
              placeholder="Красносельский"
              :options="options"
              :value="value"
              @selected="ev => (value = ev)"
            ></catos-select>
          </div>
          <div class="fieldsinputchoise2">
            <div class="div10">Населенный пункт</div>
            <catos-select
              placeholder="Cанкт-Петербург"
              :options="options"
              :value="value"
              @selected="ev => (value = ev)"
            ></catos-select>
          </div>
          <div class="fieldsinputchoise1">
            <div class="div10">Улица</div>
            <input-data
              placeholder="Начните вводить адресс"
              :style="{ width: '100%' }"
            ></input-data>
          </div>
        </div>
        <div class="frame-parent5">
          <div class="frame-parent3">
            <div class="parent13">
              <div class="div10">Дом</div>
              <input-data
                placeholder="1"
                :style="{ width: '100%' }"
              ></input-data>
            </div>
            <div class="parent13">
              <div class="div10">Корпус</div>
              <input-data
                placeholder="1"
                :style="{ width: '100%' }"
              ></input-data>
            </div>
          </div>
          <div class="frame-parent3">
            <div class="parent13">
              <div class="div10">Строение</div>
              <input-data
                placeholder="1"
                :style="{ width: '100%' }"
              ></input-data>
            </div>
            <div class="parent13">
              <div class="div10">Квартира</div>
              <input-data
                placeholder="№"
                :style="{ width: '100%' }"
              ></input-data>
            </div>
          </div>
          <div class="parent13">
            <div class="div10">Индекс</div>
            <input-data
              placeholder="193 894"
              :style="{ width: '100%' }"
            ></input-data>
          </div>
        </div>
      </div>
      <div class="registration-options-wrapper">
        <div class="registration-options2">
          <div class="registration-options-inner"></div>
          <div class="text-and-fill2">
            <div class="div29">
              <span>Подтверждающие документы </span>
              <span class="span2">*</span>
            </div>
          </div>
          <div class="parent24">
            <div class="div66">
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
                  <div class="div67">
                    <p class="p">Разворот</p>
                    <p class="p">с датой выдачи</p>
                    <p class="p">и фотографией</p>
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

                      <div class="div68">100%</div>
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
                  <div class="div69">
                    <p class="p">Страница</p>
                    <p class="p">с регистрацией</p>
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

                      <div class="div68">100%</div>
                    </div>
                    <img
                      class="loader-child"
                      alt=""
                      src="../public/remove.svg"
                    />
                  </div>
                </div>
              </div>
              <div class="div71">
                <span>Загрузите страницы паспорта </span>
                <span class="span2">*</span>
              </div>
            </div>
          </div>
          <div class="parent25">
            <div class="div66">
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
                  <div class="div67">
                    <p class="p">Ваше фото и разворот</p>
                    <p class="p">с датой выдачи</p>
                  </div>
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

                    <div class="div68">12%</div>
                  </div>
                  <img class="loader-child" alt="" src="../public/remove.svg" />
                </div>
              </div>
            </div>
          </div>
          <div class="div75">
            <span>Загрузите селфи с разворотом паспорта </span>
            <span class="span2">*</span>
          </div>
        </div>
      </div>
    </div>
    <div class="header1">
      <div class="page-title-wrapper">
        <b class="page-title1">Регистрация</b>
      </div>
    </div>
    <div class="slidersteps">
      <div class="loader6"></div>
      <div class="numbers">
        <div class="div78">из</div>
        <div class="div78">7</div>
      </div>
      <div class="steps">
        <div class="div68">3 шаг</div>
      </div>
    </div>
    <router-link to="" @click="$router.go(-1)" class="buttonback">
      <div class="div81">Назад</div>
      <img class="search-icon" alt="" src="../public/search-icon.svg" />
    </router-link>
    <div class="header1">
      <b class="page-title1">Регистрация заемщика</b>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import catosSelect from "../../../components/fields/catos-select.vue";
import inputData from "../../../components/fields/input-data.vue";
import catosCheckbox from "../../../components/ui-kit/catos-checkbox.vue";
import catosTextarea from "../../../components/fields/catos-textarea.vue";
const role = computed(() => window.history.state?.role);
const isSelectedRadioButton1 = ref(false);
const isSelectedRadioButton2 = ref(false);
const value = ref("");
const date = ref("");
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
  width: 88%;
}
.group {
  position: absolute;
  top: 28.63em;
  left: 1.31em;
  width: 100%;
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
  width: 100%;
  z-index: 100;
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
.parent8 {
  width: 100%;
  height: 4em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
  z-index: 100;
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
.frame-parent1 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0 3.75em 0 0;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}
.fieldsinput-parent,
.parent10 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 100;
}
.parent10 {
  width: 100%;
  gap: 0.5em;
}
.fieldsinput-parent {
  height: 24.38em;
  gap: 1.38em;
  width: 100%;
}
.child,
.inner {
  position: absolute;
}
.inner {
  top: 2.31em;
  left: 1.31em;
  width: 88%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.child {
  width: 100%;
  top: calc(50% - 221.5px);
  right: 0;
  left: 0;
  border-radius: 15px;
  border: 0.5px solid rgba(46, 58, 89, 0.4);
  box-sizing: border-box;
  height: 28.06em;
}
.div29 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
  font-weight: 500;
}
.wrapper1 {
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
  width: 87.7vw;
  height: 28.44em;
}
.div8 {
  top: 11em;
  left: 1.5em;
  height: 46.88em;
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
  top: 198.81em;
  left: 1.5em;
  border-radius: 20px;
  background-color: #ffdb6d;
  width: 88vw;
  height: 3em;
  overflow: hidden;
  flex-direction: row;
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  cursor: pointer;
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
.div30,
.div31 {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
}
.div31 {
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
  color: rgba(59, 59, 59, 0.7);
}
.header,
.parent11 {
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
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 0.75em;
}
.registration-options-child {
  position: absolute;
  width: 100%;
  top: calc(50% - 297px);
  right: 0;
  left: 0;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  height: 37.44em;
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
.span22 {
  line-height: 130%;
}
.fields-password-and-mail10 {
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
.fieldsinputchoise1 {
  align-self: stretch;
}
.fieldsinputchoise1,
.fieldsinputchoise2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
  width: 100%;
}
.fieldsinputchoise-parent {
  position: absolute;
  top: 2.38em;
  left: 1.31em;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.38em;
  width: 88%;
}
.fieldsinputchoise-parent,
.parent13,
.wrapper2 {
  display: flex;
  justify-content: flex-start;
}
.wrapper2 {
  align-self: stretch;
  flex-direction: row;
  align-items: center;
}
.parent13 {
  width: 9em;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25em;
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
  top: 23.7em;
  left: 1.31em;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
  width: 88%;
}
.registration-options {
  position: absolute;
  top: 60.38em;
  left: 1.5em;
  width: 87.7%;
  height: 37.75em;
}
.registration-options-item {
  position: absolute;
  height: 99.56%;
  width: 100%;
  top: 0.44%;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
}
.fieldsinputchoise-group,
.frame-parent5 {
  position: absolute;
  top: 2.25em;
  left: 1.31em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.38em;
  width: 88%;
}
.frame-parent5 {
  top: 29.5em;
  gap: 1em;
}
.registration-options1 {
  position: absolute;
  top: 100.63em;
  left: 1.5em;
  width: 87.7%;
  height: 43.31em;
}
.registration-options-inner {
  position: absolute;
  height: 175.7%;
  width: 100%;
  top: -0.22%;
  right: 0;
  bottom: -75.49%;
  left: 0;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 0.5px solid rgba(46, 58, 89, 0.2);
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
.div66 {
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
.div67,
.icons {
  position: relative;
}
.icons {
  border-radius: 10px;
  background-color: #fff;
  width: 7.25em;
  height: 5em;
  overflow: hidden;
  flex-shrink: 0;
}
.div67 {
  flex: 1;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
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
.div68 {
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
  width: 100%;
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
.div69 {
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
  width: 100%;
}
.div71 {
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
.parent24 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 88%;
}
.organizmloader {
  border-radius: 16px;
  background-color: rgba(237, 244, 255, 0.3);
  width: 100%;
  padding: 3em 0.75em 1.25em;
  box-sizing: border-box;
  align-items: flex-start;
  position: relative;
  gap: 1em;
  color: #000;
}
.parent24 {
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
  top: -2.97em;
  left: 0.81em;
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
.parent25 {
  display: flex;
  justify-content: flex-start;
  width: 88%;
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
.parent25 {
  flex-direction: column;
}
.organizmloader1 {
  border-radius: 16px;
  background-color: rgba(237, 244, 255, 0.3);
  width: 100%;
  overflow: hidden;
  padding: 3em 0.75em 1.25em;
  box-sizing: border-box;
  align-items: flex-start;
  gap: 0.63em;
  color: #000;
}
.parent25 {
  position: absolute;
  top: 30.88em;
  left: 1.31em;
  align-items: center;
  gap: 1.13em;
  color: rgba(59, 59, 59, 0.9);
}
.div75 {
  position: absolute;
  top: 50.83em;
  left: 2.75em;
  font-size: 0.75em;
  line-height: 0.83em;
  font-weight: 300;
  width: 100%;
}
.registration-options2 {
  position: relative;
  width: 100%;
  height: 28.81em;
}
.registration-options-wrapper {
  position: absolute;
  top: 146.5em;
  left: 1.5em;
  height: 50.56em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 87.7%;
}
.form-registration-46 {
  position: absolute;
  top: 12.25em;
  left: 0;
  border-radius: 40px 40px 0 0;
  background-color: #fff;
  width: 100vw;
  /*min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 130);*/
  height: 3300px;
}
.page-title1 {
  position: relative;
  font-size: 1.25em;
  line-height: 1.4em;
  left: 1vw;
}
.page-title-wrapper {
  position: absolute;
  top: 0.63em;
  left: -61.25em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
}
.battery-icon,
.header1 {
  position: absolute;
  height: 1.38%;
  width: 100vw;
  top: 3.67%;
  right: -0.26%;
  bottom: 94.95%;
  left: -0.26%;
  text-align: center;
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
.div76 {
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
.div78 {
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
.div81 {
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
  color: #3b3b3b;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.page-title2 {
  position: relative;
  font-size: 1.25em;
  line-height: 1.4em;
  color: #3b3b3b;
}
.page-title-parent {
  position: absolute;
  top: 0.63em;
  left: 4.25em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 7.56em;
}
.header2 {
  position: absolute;
  height: 1.38%;
  width: 100.51%;
  top: 3.67%;
  right: -0.26%;
  bottom: 94.95%;
  left: -0.26%;
  color: rgba(59, 59, 59, 0.17);
}
.iphone-13-13-form-registr {
  position: relative;
  background-color: #fdd674;
  width: 100%;
  height: 217.75em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
  overflow: hidden;
}
</style>
