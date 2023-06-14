<template>
  <div class="popup-">
    <div class="counters-graph-web">
      <div class="bg"></div>
      <div class="component-26">
        <img class="share-icon" alt="" src="./public/share.svg" />

        <div class="number">Поделиться</div>
      </div>
      <div class="component-261">
        <img class="share-icon" alt="" src="./public/copy.svg" />

        <div class="number">Скопировать</div>
      </div>
      <div class="title-frame">
        <b class="title2">Чек #207</b>
      </div>
    </div>
    <div class="field-">
      <div class="svg-gobbler-2-1-parent">
        <img class="svg-gobbler-2-1" alt="" src="./public/svggobbler-2-1.svg" />

        <div class="name">
          <div class="invoice-aa-04-19-18">Чек отправлен</div>
          <div class="new-madieton-llc">Описание статуса:</div>
        </div>
      </div>
      <div class="details">
        <div class="total">10 TON</div>
        <div class="paid">Отправлено</div>
      </div>
      <div class="arrows-table">
        <img
          class="chevron-right-icon"
          alt=""
          src="./public/chevronright.svg"
        />
      </div>
    </div>
    <div class="div15" id="popuptext">Закрыть</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.bg {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 10px;
  background-color: #fff;
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
.component-26,
.component-261 {
  position: absolute;
  top: 3.06em;
  left: 1.88em;
  border-radius: 7px;
  background-color: rgba(165, 146, 221, 0.1);
  width: 8.38em;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0.44em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}
.component-261 {
  left: 10.94em;
}
.title2 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 1.5em;
  background: linear-gradient(rgba(59, 59, 59, 0.8), rgba(59, 59, 59, 0.8)),
    #3b3b3b;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.title-frame {
  position: absolute;
  top: 0.81em;
  left: 1.75em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.counters-graph-web {
  position: absolute;
  top: 3.94em;
  left: 0.69em;
  width: 21.06em;
  height: 6.13em;
}
.svg-gobbler-2-1 {
  position: relative;
  border-radius: 10px;
  width: 2.38em;
  height: 2.38em;
  overflow: hidden;
  flex-shrink: 0;
}
.invoice-aa-04-19-18,
.new-madieton-llc {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  display: inline-block;
  width: 13.75em;
}
.invoice-aa-04-19-18 {
  font-weight: 500;
}
.new-madieton-llc {
  color: rgba(59, 59, 59, 0.4);
}
.name,
.svg-gobbler-2-1-parent {
  display: flex;
  justify-content: flex-start;
}
.name {
  overflow: hidden;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.13em;
}
.svg-gobbler-2-1-parent {
  flex-direction: row;
  align-items: center;
  gap: 0.69em;
  z-index: 0;
}
.paid,
.total {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.total {
  display: inline-block;
  width: 9em;
}
.paid {
  align-self: stretch;
  color: #70ca98;
}
.details {
  display: flex;
  flex-direction: column;
  padding: 0.13em 0;
  align-items: flex-start;
  justify-content: center;
  gap: 0.13em;
  z-index: 1;
  text-align: right;
}
.arrows-table,
.chevron-right-icon {
  width: 0.63em;
  overflow: hidden;
  flex-shrink: 0;
}
.chevron-right-icon {
  position: relative;
  height: 1em;
}
.arrows-table {
  margin: 0 !important;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 20.75em;
  border-radius: 0 4px 4px 0;
  background-color: #f1ecff;
  display: flex;
  flex-direction: row;
  padding: 0.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.arrows-table,
.div15,
.field- {
  position: absolute;
}
.field- {
  top: 0.5em;
  left: 0.44em;
  border-radius: 10px;
  background-color: rgba(246, 244, 251, 0.5);
  width: 21.38em;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0 0.25em 0.25em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  color: #3b3b3b;
}
.div15 {
  top: 14.87em;
  left: 12.54em;
  font-size: 0.75em;
  line-height: 130%;
  cursor: pointer;
}
.popup- {
  position: relative;
  border-radius: 10px;
  background-color: #f6f4fc;
  width: 22.25em;
  height: 13.13em;
  overflow: hidden;
  max-width: 90%;
  max-height: 90%;
  text-align: left;
  color: rgba(59, 59, 59, 0.8);
  font-family: Inter;
}
</style>
