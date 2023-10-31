<template>
  <div class="frame-parent">
    <div class="api-wrapper">
      <div class="api">
        Для автоматической работы настройте скрининг заявок на займы через API
      </div>
    </div>
    <img class="frame-child" alt="" src="@/assets/desktop/scrinning-api.svg" />
    <div class="fields-copypaste">
      <label class="field-label">Вебхук для заявок и займов</label>
      <img class="field-info" src="@/assets/images/info.svg" />
      <copy-paste :style="{ width: '100%', position: 'relative' }">
        <template v-slot:icon>
          <img src="@/assets/images/iconscopy.svg" alt="" />
        </template>
      </copy-paste>
    </div>
    <div class="fields-copypaste_last fields-copypaste">
      <label class="field-label">Ссылка для ответов:</label>
      <img class="field-info" src="@/assets/images/info.svg" />
      <copy-paste :style="{ width: '100%', position: 'relative' }">
        <template v-slot:icon>
          <img src="@/assets/images/iconscopy.svg" alt="" />
        </template>
      </copy-paste>
    </div>
    <div class="frame-wrapper">
      <div class="frame-div">
        <catos-button
          variant="secondary"
          :style="{ width: '100%' }"
          @click="handleResult"
          >Cохранить</catos-button
        >
        <div class="buttonnext-parent" @click="close">
          <div class="buttonnext1">
            <div class="div2">Отмена</div>
          </div>
        </div>
      </div>
    </div>
    <a class="div3">Документация и инструкции</a>
  </div>
</template>
<script setup lang="ts">
import CatosButton from "@/components/ui-kit/buttons/catos-button.vue";
import copyPaste from "@/components/fields/copy-paste.vue";

const emmit = defineEmits(["close", "result"]);
const close = () => {
  emmit("close");
};

const handleResult = () => {
  emmit("result");
};
</script>
<style scoped lang="scss">
.api {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.api-wrapper {
  align-self: stretch;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(59, 59, 59, 0.6);
}
.frame-child {
  position: relative;
  width: 39.06em;
  height: 8.88em;
}
.div {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.container-click {
  position: relative;
  width: 1.81em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0em 0.25em;
  align-items: center;
  justify-content: space-between;
}
.key {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 600;
}
.text-1 {
  display: none;
  flex-direction: row;
  padding: 0em 0.63em 0em 0em;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
}
.code {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  color: #3b3b3b;
}
.iconchange {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  top: 0em;
  right: 0em;
  bottom: 0em;
  max-height: 100%;
  width: 3.25em;
  z-index: 2;
}
.field-copykey {
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0em 0.5em 0.75em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  text-align: left;
  color: rgba(59, 59, 59, 0.5);
}
.frame-group {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.ton-kepeer {
  position: relative;
  font-size: 1em;
  line-height: 130%;
}
.buttonnext {
  align-self: stretch;
  border-radius: 20px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.div2 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.buttonnext1 {
  align-self: stretch;
  border-radius: 20px;
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  color: rgba(38, 38, 38, 0.62);
}
.buttonnext-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.38em;
  cursor: pointer;
}
.frame-div {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #f3f3f3;
}
.div3 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  letter-spacing: 0.01em;
  line-height: 130%;
  color: rgba(87, 126, 247, 0.96);
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
}
.frame-parent {
  position: relative;
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  width: 480px;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
  text-align: center;
  color: #3b3b3b;
  font-family: Inter;
}
.fields-copypaste {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  & .field-label {
    align-self: start;
    position: relative;
    bottom: 0.2em;
    left: 0.5em;
    color: #3b3b3b;
    text-align: center;
    font-size: 12px;
    font-family: Inter;
    font-weight: 300;
    line-height: 130%;
  }

  & .field-info {
    width: 1em;
    height: 1em;
    position: absolute;
    right: 0.5em;
    top: -0.3em;
  }
}
</style>
