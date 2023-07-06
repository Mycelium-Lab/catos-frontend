<template>
  <div class="api">
    <div class="buttonback" @click="toPannel">
      <div class="div32">Назад</div>
      <img class="search-icon" alt="" src="@/assets/images/search-icon.svg" />
    </div>
    <div class="header">
      <div class="pi">АPI запросы</div>
    </div>
    <div class="cardsdashboard">
      <div class="full-ifo-card">
        <div class="header-info">
          <div class="checkboxdone-parent">
            <div class="checkboxdone" />
            <div class="info">
              <div class="div">Алексей Иванов</div>
              <div class="id-100">ID #100</div>
            </div>
            <div class="status-all">
              <div class="colors-graphsorders-parent">
                <img
                  class="colors-graphsorders-icon"
                  alt=""
                  src="@/assets/images/colors-graphsorders3.svg"
                />
                <div class="number">Ошибка</div>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-parent">
          <div class="frame-group">
            <div class="wrapper">
              <div class="request-data">Тип запроса:</div>
            </div>
            <div class="container">
              <div class="utc">Заявка на скоринг</div>
            </div>
          </div>
          <div class="frame-child" />
          <div class="frame-group">
            <div class="wrapper">
              <div class="request-data">Request data:</div>
            </div>
            <div class="c-wrapper">
              <div class="c">Cкачать</div>
            </div>
          </div>
          <div class="frame-child" />
          <div class="frame-group">
            <div class="wrapper">
              <div class="request-data">Response data:</div>
            </div>
            <div class="c-wrapper">
              <div class="c">Cкачать</div>
            </div>
          </div>
          <div class="frame-child" />
          <div class="frame-group">
            <div class="wrapper">
              <div class="request-data">Datatime:</div>
            </div>
            <div class="container">
              <div class="utc">23.11.22, 16:00 UTC</div>
            </div>
          </div>
          <div class="line-div" />
          <div class="frame-child" />
          <div class="counters-graph-web-parent">
            <div class="frame-parent">
              <div class="title-wrapper">
                <div class="request-data">Действие:</div>
              </div>
              <div class="component-26-parent">
                <div class="component-26">
                  <img
                    class="share-icon"
                    alt=""
                    src="@/assets/images/iconsshare-black.svg"
                  />
                  <div class="number">Переслать</div>
                </div>
              </div>
            </div>
            <div class="filter-2-child" />
            <div class="datatime-230822-1600-utc-parent">
              <div class="datatime-230822-1600-container">
                Комментарий: <span class="datatime-23">Datatime 23</span>.08
                <span class="utc1">.22, 16:00 UTC</span>
              </div>
              <div class="frame">
                <div class="div4">Неверный формат ответа</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cardsdashboard1">
      <div class="full-ifo-card">
        <div class="header-info">
          <div class="checkboxdone-parent">
            <div class="checkboxdone" />
            <div class="info">
              <div class="div">Иван Воробьев</div>
              <div class="id-100">ID #99</div>
            </div>
            <div class="status-all">
              <div class="colors-graphsorders-parent">
                <img
                  class="colors-graphsorders-icon"
                  alt=""
                  src="@/assets/images/colors-graphsorders3.svg"
                />
                <div class="number">Ошибка</div>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-parent">
          <div class="frame-group">
            <div class="wrapper">
              <div class="request-data">Тип запроса:</div>
            </div>
            <div class="container">
              <div class="utc">Обновление статуса займа</div>
            </div>
          </div>
          <div class="frame-child" />
          <div class="frame-group">
            <div class="wrapper">
              <div class="request-data">Request data:</div>
            </div>
            <div class="c-wrapper">
              <div class="c">Cкачать</div>
            </div>
          </div>
          <div class="frame-child" />
          <div class="frame-group">
            <div class="wrapper">
              <div class="request-data">Response data:</div>
            </div>
            <div class="c-wrapper">
              <div class="c">Cкачать</div>
            </div>
          </div>
          <div class="frame-child" />
          <div class="frame-group">
            <div class="wrapper">
              <div class="request-data">Datatime:</div>
            </div>
            <div class="container">
              <div class="utc">23.11.22, 16:00 UTC</div>
            </div>
          </div>
          <div class="line-div" />
          <div class="frame-child" />
          <div class="counters-graph-web-parent">
            <div class="frame-parent">
              <div class="title-wrapper">
                <div class="request-data">Действие:</div>
              </div>
              <div class="component-26-wrapper">
                <div class="component-26">
                  <img
                    class="share-icon"
                    alt=""
                    src="@/assets/images/iconsshare-black.svg"
                  />
                  <div class="number">Переслать</div>
                </div>
              </div>
            </div>
            <div class="filter-2-child" />
            <div class="datatime-230822-1600-utc-parent">
              <div class="datatime-230822-1600-container">
                Комментарий: <span class="datatime-23">Datatime 23</span>.08
                <span class="utc1">.22, 16:00 UTC</span>
              </div>
              <div class="frame">
                <div class="div4">Ответ не получен</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cardsdashboard2">
      <div class="full-ifo-card">
        <div class="header-info">
          <div class="checkboxdone-parent">
            <div class="checkboxdone" />
            <div class="info">
              <div class="div">Василий Сколкин</div>
              <div class="id-100">ID #86</div>
            </div>
            <div class="status-all">
              <div class="colors-graphsorders-parent">
                <img
                  class="colors-graphsorders-icon"
                  alt=""
                  src="@/assets/images/colors-graphsorders1.svg"
                />
                <div class="number">Успешно</div>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-parent">
          <div class="frame-group">
            <div class="wrapper">
              <div class="request-data">Тип запроса:</div>
            </div>
            <div class="container">
              <div class="utc">Заявка на скоринг</div>
            </div>
          </div>
          <div class="frame-child" />
          <div class="frame-group">
            <div class="wrapper">
              <div class="request-data">Request data:</div>
            </div>
            <div class="c-wrapper">
              <div class="c">Cкачать</div>
            </div>
          </div>
          <div class="frame-child" />
          <div class="frame-group">
            <div class="wrapper">
              <div class="request-data">Response data:</div>
            </div>
            <div class="c-wrapper">
              <div class="c">Cкачать</div>
            </div>
          </div>
          <div class="frame-child" />
          <div class="frame-group">
            <div class="wrapper">
              <div class="request-data">Datatime:</div>
            </div>
            <div class="container">
              <div class="utc">23.11.22, 16:00 UTC</div>
            </div>
          </div>
          <div class="line-div" />
          <div class="frame-child" />
          <div class="title-wrapper">
            <div class="frame-parent">
              <div class="title-wrapper">
                <div class="request-data">Действие:</div>
              </div>
              <div class="component-26-wrapper">
                <div class="component-26">
                  <img
                    class="share-icon"
                    alt=""
                    src="@/assets/images/iconsshare-black.svg"
                  />
                  <div class="number">Переслать</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cardsdashboard3">
      <div class="full-ifo-card">
        <div class="header-info">
          <div class="checkboxdone-parent">
            <div class="checkboxdone" />
            <div class="info">
              <div class="div">Владлен Ноунейм</div>
              <div class="id-100">ID #12</div>
            </div>
            <div class="status-all">
              <div class="colors-graphsorders-parent">
                <img
                  class="colors-graphsorders-icon"
                  alt=""
                  src="@/assets/images/colors-graphsorders1.svg"
                />
                <div class="number">Успешно</div>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-parent">
          <div class="frame-group">
            <div class="wrapper">
              <div class="request-data">Тип запроса:</div>
            </div>
            <div class="container">
              <div class="utc">Заявка на скоринг</div>
            </div>
          </div>
          <div class="frame-child" />
          <div class="frame-group">
            <div class="wrapper">
              <div class="request-data">Request data:</div>
            </div>
            <div class="c-wrapper">
              <div class="c">Cкачать</div>
            </div>
          </div>
          <div class="frame-child" />
          <div class="frame-group">
            <div class="wrapper">
              <div class="request-data">Response data:</div>
            </div>
            <div class="c-wrapper">
              <div class="c">Cкачать</div>
            </div>
          </div>
          <div class="frame-child" />
          <div class="frame-group">
            <div class="wrapper">
              <div class="request-data">Datatime:</div>
            </div>
            <div class="container">
              <div class="utc">23.11.22, 16:00 UTC</div>
            </div>
          </div>
          <div class="line-div" />
          <div class="frame-child" />
          <div class="title-wrapper">
            <div class="frame-parent">
              <div class="title-wrapper">
                <div class="request-data">Действие:</div>
              </div>
              <div class="component-26-parent">
                <div class="component-26">
                  <img
                    class="share-icon"
                    alt=""
                    src="@/assets/images/iconsshare-black.svg"
                  />
                  <div class="number">Переслать</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="paginationfield">
        <div class="numbers">
          <div class="paginationnumber">
            <div class="div18">1</div>
          </div>
          <div class="paginationnumber1">
            <div class="div18">2</div>
          </div>
          <div class="paginationnumber">
            <div class="div18">3</div>
          </div>
          <div class="paginationnumber">
            <div class="div18">4</div>
          </div>
          <div class="paginationnumber">
            <div class="div18">5</div>
          </div>
        </div>
        <div class="active-bg" />
        <img class="buttonback-icon" alt="" src="/buttonback.svg" />
      </div>-->
    <div class="filter-2">
      <div class="frame-parent17">
        <div class="menu-2-parent">
          <img
            class="frame-icon"
            alt=""
            src="@/assets/images/iconsfilter.svg"
          />
          <div class="div23">
            <span>Фильтр </span>
            <span class="span">(1)</span>
          </div>
        </div>
        <div class="menu-2-parent">
          <img class="share-icon" alt="" src="@/assets/images/iconssort.svg" />
          <div class="div23">
            <span>Сортировка </span>
            <span class="span">(1)</span>
          </div>
        </div>
      </div>
      <div class="filter-2-child" />
      <div class="data">
        <div class="data">
          <div class="frame-parent19">
            <div class="parent">
              <div class="request-data">Выберите статус:</div>
              <div class="fields-password-and-mail">
                <div class="group">
                  <div class="div26">Все статусы</div>
                  <img
                    class="share-icon"
                    alt=""
                    src="@/assets/images/chevron-right.svg"
                  />
                </div>
              </div>
            </div>
            <div class="parent">
              <div class="request-data">Выберите дату:</div>
              <div class="fields-password-and-mail-parent">
                <input-data
                  type="date"
                  placeholder="01.02.1994"
                  :style="{ width: '100%' }"
                  :value="date"
                ></input-data>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button-slider
      :style="{ width: '24em', margin: '0 auto', top: '-90.7em' }"
      :variantIndex="2"
      :tabs="['По ID', 'По дате']"
    ></button-slider>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import buttonSlider from "@/components/ui-kit/buttons/button-slider.vue";
import inputData from "@/components/fields/input-data.vue";
const date = ref("");
const router = useRouter();

const toPannel = () => {
  router.push({ name: "admin-pannel-mobile" });
};
</script>
<style scoped>
.col-titles-bg {
  position: absolute;
  width: calc(100% - 358px);
  top: 27.63em;
  right: -0.75em;
  left: 23.13em;
  border-radius: 18px;
  background-color: #f6f4fc;
  height: 0.06em;
  transform: rotate(90deg);
  transform-origin: 0 0;
}
.pi {
  align-self: stretch;
  position: relative;
  font-size: 1.13em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
}
.header {
  position: relative;
  top: 5.81em;

  border-radius: 7px;
  width: 18.75em;
  display: flex;
  flex-direction: column;
  padding: 0.44em 0em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
}
.checkboxdone {
  position: relative;
  border-radius: 4.14px;
  border: 0.8px solid #a592dd;
  box-sizing: border-box;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
}
.div {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 130%;
  font-weight: 600;
}
.id-100 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 130%;
  color: #b5b5c3;
}
.info {
  width: 9.94em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.colors-graphsorders-icon {
  position: relative;
  width: 1em;
  height: 1em;
}
.colors-graphsorders-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.31em;
  z-index: 0;
}
.iconchange {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  top: 0em;
  right: 0em;
  bottom: 0em;
  max-height: 100%;
  width: 1.63em;
  display: none;
  z-index: 1;
}
.status-all {
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  width: 7.81em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0.63em 0.5em 0.38em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  position: relative;
}
.checkboxdone-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1em;
}
.header-info {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.wrapper {
  width: 7.19em;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.container {
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-group {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4.06em;
}
.frame-child {
  align-self: stretch;
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  height: 0.06em;
}
.request-data {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.c {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  text-decoration: underline;
  line-height: 130%;
}
.c-wrapper {
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
  color: rgba(87, 126, 247, 0.96);
}
.utc {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.line-div {
  align-self: stretch;
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  height: 0.06em;
  display: none;
}
.title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.share-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.number {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.component-26 {
  flex: 1;
  border-radius: 7px;
  background-color: rgba(165, 146, 221, 0.1);
  display: flex;
  flex-direction: row;
  padding: 0.25em 0.44em;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}
.component-261 {
  flex: 1;
  border-radius: 7px;
  background-color: rgba(165, 146, 221, 0.1);
  display: none;
  flex-direction: row;
  padding: 0.25em 0.44em;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}
.component-26-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
  color: rgba(59, 59, 59, 0.8);
}
.datatime-23 {
  letter-spacing: -0.01em;
}
.utc1 {
  letter-spacing: 0.01em;
}
.datatime-230822-1600-container {
  position: relative;
  font-size: 0.63em;
  line-height: 140%;
}
.div4 {
  align-self: stretch;
  position: relative;
  font-size: 0.63em;
  line-height: 140%;
}
.frame {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #3b3b3b;
}
.datatime-230822-1600-utc-parent {
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  width: 18.75em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.63em 1.31em 0.88em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5em;
  color: #8181a5;
}
.counters-graph-web-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
}
.frame-parent {
  width: 18.75em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.full-ifo-card {
  width: 18.75em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1em;
}
.cardsdashboard {
  position: relative;
  top: 20.75em;

  border-radius: 24px;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  width: 21.38em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1.25em 1.31em;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 auto;
}
.component-26-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  color: rgba(59, 59, 59, 0.8);
}
.cardsdashboard1 {
  position: relative;
  top: 22em;

  border-radius: 24px;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  width: 21.38em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1.25em 1.31em;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 auto;
}
.cardsdashboard2 {
  position: relative;
  top: 23.5em;

  border-radius: 24px;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  width: 21.38em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1.25em 1.31em;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 auto;
}
.cardsdashboard3 {
  position: relative;
  top: 25em;

  border-radius: 24px;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  width: 21.38em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1.25em 1.31em;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 auto;
}
.div18 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 600;
}
.paginationnumber {
  border-radius: 6px;
  background-color: #fff;
  border: 1px solid rgba(46, 58, 89, 0.04);
  box-sizing: border-box;
  width: 2.56em;
  height: 2.56em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.paginationnumber1 {
  border-radius: 6px;
  background: linear-gradient(#f5f9ff, #f5f9ff),
    linear-gradient(rgba(94, 129, 244, 0.1), rgba(94, 129, 244, 0.1)), #fff;
  border: 1px solid rgba(46, 58, 89, 0.04);
  box-sizing: border-box;
  width: 2.56em;
  height: 2.56em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(87, 126, 247, 0.96);
}
.numbers {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.06em 0em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
  z-index: 0;
}
.active-bg {
  position: absolute;
  margin: 0 !important;
  top: 3em;
  right: 12.62em;
  border-radius: 1px;
  background-color: #5e81f4;
  width: 2.31em;
  height: 0.13em;
  z-index: 1;
}
.buttonback-icon {
  position: relative;
  border-radius: 9px;
  width: 2.5em;
  height: 2.5em;
  z-index: 2;
}
.paginationfield {
  position: absolute;
  top: 117.81em;
  left: calc(50% - 144px);
  height: 3.5em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1em;
  text-align: center;
}
.frame-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
}
.span {
  color: #5d83f7;
}
.div23 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
  font-weight: 300;
}
.menu-2-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.frame-parent17 {
  width: 18.75em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.filter-2-child {
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  width: 18.81em;
  height: 0.06em;
}
.div26 {
  position: relative;
  font-size: 0.88em;
  line-height: 120%;
}
.group {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.fields-password-and-mail {
  align-self: stretch;
  border-radius: 16px;
  background: linear-gradient(#fff, #fff), #f9fbff;
  border: 0.5px solid #f2f2f2;
  box-sizing: border-box;
  height: 2.5em;
  display: flex;
  flex-direction: column;
  padding: 0.5em 0.75em;
  align-items: flex-start;
  justify-content: center;
}
.parent {
  flex: 1;
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
  display: none;
}
.fields-password-and-mail1 {
  align-self: stretch;
  flex: 1;
  border-radius: 16px;
  background-color: #fff;
  border: 0.5px solid #f2f2f2;
  display: flex;
  flex-direction: column;
  padding: 0.5em 0.75em;
  align-items: center;
  justify-content: center;
}
.iconscalendar-wrapper {
  border-radius: 14px;
  background-color: #fff;
  border: 0.5px solid #f2f2f2;
  box-sizing: border-box;
  width: 2.5em;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  align-items: center;
  justify-content: center;
}
.fields-password-and-mail-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.38em;
  background-color: #fff;
  border-radius: 50px;
}
.frame-parent19 {
  align-self: stretch;
  width: 18.75em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
}
.data {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.filter-2 {
  position: relative;
  top: -80.5em;

  border-radius: 16px;
  background-color: #fcfbfe;
  border: 0.5px solid rgba(46, 58, 89, 0.1);
  box-sizing: border-box;
  width: 21.38em;
  display: flex;
  flex-direction: column;
  padding: 1.25em 1.31em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.88em;
  margin: 0 auto;
}
.fill {
  position: absolute;
  top: 0.13em;
  left: 0.13em;
  border-radius: 16px;
  background-color: #fdd674;
  width: 9.88em;
  height: 1.94em;
}
.id {
  position: absolute;
  top: 0.71em;
  left: 4.43em;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 110%;
}
.div29 {
  position: absolute;
  top: 0.71em;
  left: 16.36em;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 110%;
  color: #8181a5;
}
.button-slider {
  align-self: stretch;
  position: relative;
  border-radius: 20px;
  background-color: #f6f4fc;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  height: 2.19em;
  overflow: hidden;
  flex-shrink: 0;
}
.buttonsslider-dashboard {
  position: absolute;
  top: 19.44em;
  left: calc(50% - 171px);
  width: 21.38em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
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
.div30 {
  position: absolute;
  height: 85.71%;
  width: 100%;
  top: 9.52%;
  left: 0%;
  font-size: 0.94em;
  letter-spacing: -0.02em;
  font-weight: 100;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.time-style {
  position: absolute;
  height: 47.73%;
  width: 13.85%;
  top: 27.27%;
  right: 80.77%;
  bottom: 25%;
  left: 5.38%;
}
.time-style1 {
  position: absolute;
  height: 47.73%;
  width: 13.85%;
  top: 27.27%;
  right: 80.77%;
  bottom: 25%;
  left: 5.38%;
  display: none;
  color: #fff;
}
.ui-bars-status-bars-white {
  position: absolute;
  top: 0em;
  left: 0em;
  width: 24.38em;
  height: 2.75em;
  text-align: center;
  color: #1c1c1c;
}
.div32 {
  position: relative;
  top: 0.79em;
  left: 3em;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.search-icon {
  position: absolute;
  top: calc(50% - 20px);
  right: 3.88em;
  border-radius: 10px;
  width: 2.5em;
  height: 2.5em;
  overflow: hidden;
}
.buttonback {
  position: absolute;
  height: 2.04%;
  width: 6em;
  top: 2.66%;
  right: 67.69%;
  bottom: 95.3%;
  left: 6.15%;
  border-radius: 9px;
  background-color: rgba(251, 251, 251, 0.42);
}
.api {
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 122.38em;
  overflow-y: auto;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
