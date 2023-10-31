<template>
  <div class="descrioption-parent">
    <div class="descrioption">
      <div class="number">Активные счета</div>
      <div class="details">Детали</div>
    </div>
    <div class="frame-parent">
      <div class="frame-group">
        <div class="frame-container">
          <div class="svg-gobbler-2-1-parent">
            <img
              class="svg-gobbler-2-1"
              alt=""
              src="@/assets/images/edit-photo.png"
            />
            <div class="ticked-id-parent">
              <b class="ticked-id">Счет #207</b>
              <div class="time">2 мая, 11:52</div>
            </div>
          </div>
          <div class="buttons-icon-outline-arr">
            <img class="more" src="@/assets/desktop/more.svg" />
          </div>
        </div>
        <div class="frame-div">
          <div class="title-parent">
            <div class="title">
              <b>Счет</b>
              <span class="ton"> на 10 TON</span>
            </div>
            <div class="description">
              Мой первый счёт для бабули, привет моя бабуля!
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
              src="@/assets/images/edit-photo.png"
            />
            <div class="ticked-id-parent">
              <b class="ticked-id">Счет #207</b>
              <div class="time">11 апреля, 10:51</div>
            </div>
          </div>
          <div class="buttons-icon-outline-arr">
            <img class="more" src="@/assets/desktop/more.svg" />
          </div>
        </div>
        <div class="frame-div">
          <div class="title-group">
            <div class="title">
              <b>Счет</b>
              <span class="ton"> на 50 TON</span>
            </div>
            <div class="description1">Счет без описания:</div>
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
              src="@/assets/images/edit-photo.png"
            />
            <div class="ticked-id-parent">
              <b class="ticked-id">Счет #206</b>
              <div class="time">11:52</div>
            </div>
          </div>
          <div class="buttons-icon-outline-arr">
            <img class="more" src="@/assets/desktop/more.svg" />
          </div>
        </div>
        <div class="frame-div">
          <div class="title-group">
            <div class="title">
              <b>Счет</b>
              <span class="ton"> на 50 TON</span>
            </div>
            <div class="description1">Счет без описания:</div>
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
</template>
<script setup lang="ts">
import { ref } from "vue";
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
.bg {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 8px;
  background-color: #fff;
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
.ton {
  font-weight: 600;
}
.title {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
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
.more {
  margin-top: 1em;
}
</style>
