<template>
  <div class="menu">
    <div class="iconsmenu-parent">
      <img class="iconsmenu" alt="" src="/iconsmenu.svg" />
      <div class="div">МЕНЮ</div>
    </div>
    <div class="buttons">
      <div class="component-21">
        <div class="iconsmenu1">
          <img class="container-icon" alt="" src="/container.svg" />
        </div>
        <div class="div1">Пуллы</div>
      </div>
      <div class="component-211">
        <div class="iconsmenu1">
          <img class="container-icon" alt="" src="/container1.svg" />
        </div>
        <div class="div1">Займы</div>
      </div>
      <div class="component-211">
        <div class="iconsmenu1">
          <img class="container-icon" alt="" src="/container2.svg" />
        </div>
        <div class="div1">Дашбоард</div>
      </div>
      <div class="component-211">
        <div class="iconsmenu1">
          <img class="container-icon" alt="" src="/container3.svg" />
        </div>
        <div class="div1">Настройки</div>
      </div>
      <div class="component-211">
        <div class="iconsmenu1">
          <img class="container-icon" alt="" src="/container4.svg" />
        </div>
        <div class="div1">Кошелек</div>
      </div>
      <div class="component-211">
        <div class="iconsmenu1">
          <div class="container-icon">
            <div class="user-container">
              <div class="user-container-child" />
              <img class="vector-icon" alt="" src="/vector.svg" />
            </div>
          </div>
        </div>
        <div class="div1">Профиль</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "FrameComponent",
});
</script>
<style scoped>
.iconsmenu {
  position: absolute;
  top: 0em;
  left: -0.03em;
  border-radius: 16px;
  width: 3em;
  height: 3.75em;
}
.div {
  position: absolute;
  top: 2.3em;
  left: 4.75em;
  font-size: 0.63em;
  line-height: 130%;
  font-weight: 500;
}
.iconsmenu-parent {
  position: relative;
  width: 7.69em;
  height: 3.75em;
}
.container-icon {
  position: relative;
  width: 3.75em;
  height: 3.75em;
}
.iconsmenu1 {
  border-radius: 16px;
  width: 3em;
  height: 3.75em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.div1 {
  position: relative;
  font-size: 0.75em;
  line-height: 120%;
  font-weight: 500;
}
.component-21 {
  border-radius: 16px;
  background-color: #f6f4fc;
  width: 7.75em;
  display: flex;
  flex-direction: row;
  padding: 0em 1.81em 0em 0em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  color: rgba(48, 51, 55, 0.9);
}
.component-211 {
  border-radius: 16px;
  width: 7.75em;
  display: flex;
  flex-direction: row;
  padding: 0em 1.81em 0em 0em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
}
.user-container-child {
  position: absolute;
  top: 0.17em;
  left: 0.14em;
  border-radius: 6.67px;
  border: 6.7px solid #353240;
  box-sizing: border-box;
  width: 1.74em;
  height: 1.74em;
}
.vector-icon {
  position: absolute;
  top: calc(50% - 10px);
  left: calc(50% - 10.56px);
  width: 1.32em;
  height: 1.32em;
}
.user-container {
  position: absolute;
  top: calc(50% - 15.56px);
  left: calc(50% - 15.56px);
  width: 2.01em;
  height: 2.01em;
  overflow: hidden;
}
.buttons {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.38em;
  text-align: right;
  color: rgba(93, 104, 123, 0.9);
}
.menu {
  border-radius: 16px;
  border: 1px solid #f6f4fc;
  box-sizing: border-box;
  width: 8.69em;
  display: flex;
  flex-direction: column;
  padding: 0em 0.5em 0.63em;
  align-items: center;
  justify-content: flex-start;
  gap: 2em;
}
</style>
