<template>
  <div class="descrioption-parent">
    <div class="descrioption">
      <div class="number">Мои чеки</div>
      <div class="details">Детали</div>
    </div>
    <div class="frame-parent">
      <div class="frame-group">
        <div class="frame-container">
          <div class="svg-gobbler-2-1-parent">
            <img
              class="svg-gobbler-2-1"
              alt=""
              src="@/assets/images/invoice.svg"
            />
            <div class="ticked-id-parent">
              <b class="ticked-id">Чек #207</b>
              <div class="time">2 мая, 11:52</div>
            </div>
          </div>
          <div
            class="buttons-icon-outline-arr"
            @click="() => (isDetail = true)"
          >
            <img class="more" src="@/assets/desktop/more.svg" />
          </div>
        </div>
        <div class="frame-div">
          <div class="title-parent">
            <div class="title">Чек на 10 TON</div>
            <div class="description">
              Мой первый чек для бабули, привет моя бабуля!
            </div>
          </div>
          <div class="frame-child" />
          <div class="author">
            <img class="img-icon" alt="" src="@/assets/images/edit-photo.png" />
            <div class="author1">Валентин Иванович</div>
          </div>
        </div>
      </div>
      <div class="frame-group">
        <div class="frame-container">
          <div class="svg-gobbler-2-1-parent">
            <img
              class="svg-gobbler-2-1"
              alt=""
              src="@/assets/images/invoice.svg"
            />
            <div class="ticked-id-parent">
              <b class="ticked-id">Чек #207</b>
              <div class="time">11 апреля, 10:51</div>
            </div>
          </div>
          <div
            class="buttons-icon-outline-arr"
            @click="() => (isDetail = true)"
          >
            <img class="more" src="@/assets/desktop/more.svg" />
          </div>
        </div>
        <div class="frame-div">
          <div class="title-group">
            <div class="title">Чек на 50 TON</div>
            <div class="description1">Чек без описания:</div>
          </div>
          <div class="frame-child" />
          <div class="author">
            <img class="img-icon" alt="" src="@/assets/images/edit-photo.png" />
            <div class="author1">Валентин Иванович</div>
          </div>
        </div>
      </div>
      <div class="frame-group">
        <div class="frame-container">
          <div class="svg-gobbler-2-1-parent">
            <img
              class="svg-gobbler-2-1"
              alt=""
              src="@/assets/images/invoice.svg"
            />
            <div class="ticked-id-parent">
              <b class="ticked-id">Чек #206</b>
              <div class="time">11:52</div>
            </div>
          </div>
          <div
            class="buttons-icon-outline-arr"
            @click="() => (isDetail = true)"
          >
            <img class="more" src="@/assets/desktop/more.svg" />
          </div>
        </div>
        <div class="frame-div">
          <div class="title-group">
            <div class="title">Чек на 50 TON</div>
            <div class="description1">Чек без описания:</div>
          </div>
          <div class="frame-child" />
          <div class="author">
            <img class="img-icon" alt="" src="@/assets/images/edit-photo.png" />
            <div class="author1">Валентин Иванович</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--<desktop-modal v-if="isDetail" @click="() => (isDetail = false)">
    <template v-slot:title>Чек №207</template>
    <template v-slot:body>
      <div class="popup-parent">
        <div class="popup-detail">
          <div class="field-">
            <div class="svg-gobbler-2-1-parent">
              
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
              
            </div>
          </div>
          <div class="counters-graph-web">
            <div class="title-wrapper">
              <b class="title">Чек #207</b>
            </div>
            <div class="component-26-parent">
              <div class="component-26">
                
                <div class="number">Поделиться</div>
              </div>
              <div class="component-26">
                
                <div class="number">Скопировать</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </desktop-modal>-->
</template>
<script setup lang="ts">
import DesktopModal from "@/components/base/desktop-modal.vue";
import { ref } from "vue";
const isDetail = ref(false);
</script>
<style scoped>
.number {
  position: relative;
  font-size: 0.75em;
  line-height: 1.5em;
}
.details {
  position: relative;
  font-size: 0.75em;
  line-height: 1.5em;
  display: inline-block;
  width: 3.67em;
  flex-shrink: 0;
}
.descrioption {
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(245, 245, 250, 0.4);
  height: 1.81em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0em 0.38em;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
}
.svg-gobbler-2-1 {
  position: relative;
  border-radius: 10px;
  width: 2.38em;
  height: 2.38em;
  overflow: hidden;
  flex-shrink: 0;
}
.ticked-id {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  background: linear-gradient(rgba(59, 59, 59, 0.8), rgba(59, 59, 59, 0.8)),
    #3b3b3b;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.time {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 500;
  text-align: right;
}
.ticked-id-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.svg-gobbler-2-1-parent {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0.81em;
}
.bg-more {
  height: 100%;
  width: 100%;

  border-radius: 8px;

  border: 1px solid #ececf2;
  box-sizing: border-box;
}
.icon {
  position: absolute;
  top: calc(50% - 9px);
  left: calc(50% - 9px);
  font-size: 1.13em;
}
.buttons-icon-outline-arr {
  position: relative;
  width: 2.25em;
  height: 2.25em;
  text-align: center;
  color: #8181a5;
  font-family: fa-solid-900;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #ececf2;
}
.frame-container {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.title {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 600;
  display: inline-block;
  width: 21.43em;
}
.description {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  color: rgba(59, 59, 59, 0.8);
}
.title-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.frame-child {
  align-self: stretch;
  position: relative;
  border-top: 1px solid rgba(165, 146, 221, 0.1);
  box-sizing: border-box;
  height: 0.06em;
}
.img-icon {
  position: relative;
  border-radius: 6px;
  width: 2.13em;
  height: 2.13em;
  object-fit: cover;
}
.author1 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  display: inline-block;
  width: 12.71em;
  flex-shrink: 0;
}
.author {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.06em;
  color: #1c1d21;
  font-family: Lato;
}
.frame-div {
  align-self: stretch;
  border-radius: 12px;
  background-color: rgba(165, 146, 221, 0.1);
  display: flex;
  flex-direction: column;
  padding: 0.75em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
  color: #3b3b3b;
}
.frame-group {
  align-self: stretch;
  border-radius: 10px;
  border: 1px solid rgba(165, 146, 221, 0.08);
  display: flex;
  flex-direction: column;
  padding: 1.25em 0.75em;
  align-items: flex-start;
  justify-content: center;
  gap: 1.13em;
}
.description1 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  color: rgba(59, 59, 59, 0.8);
  display: inline-block;
  width: 21.43em;
}
.title-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.frame-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
  color: #8681a5;
  font-family: Inter;
}
.descrioption-parent {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
  text-align: left;
  color: #8181a5;
  font-family: Lato;
}

/* Detail modal*/
.svg-gobbler-2-1 {
  position: relative;
  border-radius: 10px;
  width: 2.38em;
  height: 2.38em;
  overflow: hidden;
  flex-shrink: 0;
}
.invoice-aa-04-19-18 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 500;
  display: inline-block;
  width: 11.79em;
}
.new-madieton-llc {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  color: rgba(59, 59, 59, 0.4);
  display: inline-block;
  width: 13.75em;
}
.name {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.13em;
}
.svg-gobbler-2-1-parent {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.69em;
}
.total {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  display: inline-block;
  width: 7.71em;
}
.paid {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  color: #70ca98;
}
.details {
  display: flex;
  flex-direction: column;
  padding: 0.13em 1.25em;
  align-items: flex-start;
  justify-content: center;
  gap: 0.13em;
  text-align: right;
}
.chevron-right-icon {
  position: relative;
  width: 0.63em;
  height: 1em;
  overflow: hidden;
  flex-shrink: 0;
}
.arrows-table {
  border-radius: 0px 4px 4px 0px;
  background-color: #f1ecff;
  width: 0.63em;
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.field- {
  align-self: stretch;
  border-radius: 10px;
  background-color: rgba(246, 244, 251, 0.5);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0em 0.25em 0.25em;
  align-items: center;
  justify-content: flex-start;
}
.title {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 1.5em;
  background: linear-gradient(rgba(59, 59, 59, 0.8), rgba(59, 59, 59, 0.8)),
    #3b3b3b;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
.component-26-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.94em;
}
.counters-graph-web {
  align-self: stretch;
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  align-items: flex-start;
  justify-content: center;
  gap: 0.94em;
  color: rgba(59, 59, 59, 0.8);
}
.popup-detail {
  border-radius: 10px;
  background-color: #f6f4fc;
  width: 27.5em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.5em 0.44em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.popup-parent {
  position: relative;
  width: 100%;
  height: 12.5em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
.more {
  margin-top: 1em;
}
</style>
