<template>
  <div class="pull-stats-parent">
    <div class="pull-stats">
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
                src="/colors-graphsorders.svg"
              />
              <div class="number">Ошибка</div>
            </div>
            <img class="iconchange" alt="" src="/iconchange.svg" />
          </div>
        </div>
      </div>
      <div class="frame-parent">
        <div class="frame-group">
          <div class="field-parent">
            <div class="field">
              <div class="request-data">Тип запроса:</div>
              <div class="utc">Заявка на скорингн</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="request-data">Request data:</div>
              <div class="c">Cкачать</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="request-data">Response data:</div>
              <div class="c1">Cкачать</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="request-data">Datatime:</div>
              <div class="utc">23.11.22, 16:00 UTC</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-wrapper">
            <div class="field4">
              <div class="request-data">Действие:</div>
            </div>
          </div>
        </div>
        <div class="notification">
          <img class="percent-icon" alt="" src="/percent.svg" />
          <div class="div5">Проценты заемщика начисляются с 12 апреля</div>
        </div>
        <div class="component-26">
          <img class="share-icon" alt="" src="/share.svg" />
          <div class="number">Переслать</div>
        </div>
        <div class="frame-child" />
        <div class="datatime-230822-1600-utc-parent">
          <div class="datatime-230822-1600-container">
            Комментарий: <span class="datatime-23">Datatime 23</span>.08
            <span class="utc1">.22, 16:00 UTC</span>
          </div>
          <div class="wrapper">
            <div class="div6">Ответ не получен</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineComponent, ref } from "vue";
</script>
<style scoped>
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
  flex: 1;
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
  padding: 0em 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
}
.field {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.63em;
}
.col-titles-bg {
  align-self: stretch;
  position: relative;
  border-radius: 18px;
  background-color: rgba(165, 146, 221, 0.1);
  height: 0.06em;
}
.field-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.request-data {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.c {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  color: rgba(87, 126, 247, 0.96);
}
.c1 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 130%;
  color: rgba(87, 126, 247, 0.96);
}
.utc {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.field4 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.field-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-group {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: 0em 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.percent-icon {
  position: relative;
  width: 1em;
  height: 1em;
  overflow: hidden;
  flex-shrink: 0;
}
.div5 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.notification {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f6f4fc;
  display: flex;
  flex-direction: row;
  padding: 0.94em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
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
  align-self: stretch;
  border-radius: 7px;
  background-color: rgba(165, 146, 221, 0.1);
  display: flex;
  flex-direction: row;
  padding: 0.25em 0.44em;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  color: rgba(59, 59, 59, 0.8);
}
.frame-child {
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  width: 18.81em;
  height: 0.06em;
}
.datatime-23 {
  letter-spacing: -0.01em;
}
.utc1 {
  letter-spacing: 0.01em;
}
.datatime-230822-1600-container {
  position: relative;
  font-size: 0.75em;
  line-height: 140%;
}
.div6 {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  line-height: 140%;
}
.wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #3b3b3b;
}
.datatime-230822-1600-utc-parent {
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.94em;
  align-items: flex-start;
  justify-content: center;
  gap: 0.31em;
  color: #8181a5;
}
.frame-parent {
  align-self: stretch;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.88em;
}
.pull-stats {
  position: absolute;
  top: 0em;
  left: 0em;
  border-radius: 24px;
  background-color: #fff;
  border: 1px solid #abb0bd;
  box-sizing: border-box;
  width: 23.75em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1.25em 0.63em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.88em;
}
.pull-stats-parent {
  position: relative;
  width: 100%;
  height: 28.94em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
