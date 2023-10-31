<template>
  <desktop-modal @close="close">
    <template v-slot:title>Сортировать по:</template>
    <template v-slot:body>
      <div class="frame-parent">
        <div class="frame-wrapper">
          <div class="frame-group">
            <div class="parent">
              <chips-bar desktop></chips-bar>

              <div class="frame-container">
                <div class="frame-div">
                  <div class="parent">
                    <div class="div5">Сортировка таблицы:</div>
                    <div class="container">
                      <div class="div7">По дате:</div>
                      <div class="frame-parent1">
                        <div class="radiobutton-parent">
                          <catos-checkbox
                            variant="radiobutton"
                          ></catos-checkbox>
                          <div class="div8">По убыванию</div>
                        </div>
                        <div class="radiobutton-parent">
                          <catos-checkbox
                            variant="radiobutton"
                          ></catos-checkbox>
                          <div class="div8">По возрастанию</div>
                        </div>
                      </div>
                    </div>
                    <div class="container">
                      <div class="div7">По колличеству тон:</div>
                      <div class="frame-parent1">
                        <div class="radiobutton-parent">
                          <catos-checkbox
                            variant="radiobutton"
                          ></catos-checkbox>
                          <div class="div8">По убыванию</div>
                        </div>
                        <div class="radiobutton-parent">
                          <catos-checkbox
                            variant="radiobutton"
                          ></catos-checkbox>
                          <div class="div8">По возрастанию</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="frame-child" />
                  <div class="frame-container">
                    <div class="container">
                      <div class="div5">Фильтр транзакций:</div>
                      <div class="frame-parent3">
                        <div class="n-parent">
                          <div class="n">Всегда показывать по дате</div>
                          <catos-switch></catos-switch>
                        </div>
                        <div class="n-parent">
                          <div class="n">Всегда показывать колличеству ТОN</div>
                          <catos-switch></catos-switch>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="buttonnext-parent">
              <catos-button
                variant="secondary"
                @click="close"
                :style="{ margin: '0 auto' }"
                >Применить и сохранить фильтр</catos-button
              >

              <div class="div15">Сбросить параметры</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </desktop-modal>
</template>
<script setup lang="ts">
import { ref } from "vue";
import desktopModal from "@/components/base/desktop-modal.vue";
import catosCheckbox from "@/components/ui-kit/catos-checkbox.vue";
import chipsBar from "@/components/ui-kit/chips-bar.vue";
import catosSwitch from "@/components/ui-kit/catos-switch.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
const emits = defineEmits(["close"]);
const close = () => {
  emits("close");
};
</script>
<style scoped>
.div1 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.div2 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 100%;
}
.icons {
  position: relative;
  width: 1.5em;
  height: 1.5em;
}
.tag {
  border-radius: 24.18px;
  background-color: #e5e2f1;
  display: flex;
  flex-direction: row;
  padding: 0.38em 0.75em;
  align-items: center;
  justify-content: center;
  gap: 0.75em;
}
.iconsedit-outline {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.tag1 {
  border-radius: 24.18px;
  border: 1px solid #e4e0f1;
  display: flex;
  flex-direction: row;
  padding: 0.38em 0.75em;
  align-items: center;
  justify-content: center;
  gap: 0.75em;
}
.tags-brand {
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
}
.div {
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1em;
  color: #2e3a59;
}
.div5 {
  align-self: stretch;
  position: relative;
  font-size: 1em;
  line-height: 150%;
  font-weight: 500;
}
.div7 {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 150%;
}
.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.div8 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.radiobutton-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.81em;
}
.frame-parent1 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5em;
}
.container {
  width: 21.38em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
}
.frame-child {
  align-self: stretch;
  position: relative;
  background-color: #f3efff;
  width: 0.06em;
}
.handle {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 10px);
  left: calc(50% - 10px);
  border-radius: 50%;
  background-color: #fff;
  width: 1.25em;
  height: 1.25em;
  z-index: 1;
}
.overlay {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 12px);
  left: calc(50% - 12px);
  border-radius: 100px;
  background-color: #6750a4;
  width: 1.5em;
  height: 1.5em;
  display: none;
  opacity: 0.08;
  z-index: 0;
}
.handle-container {
  width: 2em;
  height: 2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
}
.switch {
  border-radius: 100px;
  background-color: #a592dd;
  width: 3.25em;
  height: 1.75em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
.n {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 150%;
}
.handle1 {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  border-radius: 50%;
  background-color: #79747e;
  width: 1em;
  height: 1em;
  z-index: 1;
}
.overlay1 {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  border-radius: 100px;
  background-color: #1c1b1f;
  width: 1em;
  height: 1em;
  display: none;
  opacity: 0.08;
  z-index: 0;
}
.switch1 {
  border-radius: 100px;
  background-color: #e7e0ec;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  width: 3.25em;
  height: 1.75em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.n-parent {
  width: 21.31em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75em;
}
.frame-parent3 {
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
}
.frame-div {
  width: 45.81em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
  position: relative;
  top: 1.5em;
}
.frame-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.ton-kepeer {
  position: relative;
  font-size: 1em;
  line-height: 130%;
}
.buttonnext {
  border-radius: 20px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  width: 20.63em;
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;

  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.div15 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
  color: rgba(38, 38, 38, 0.62);
  text-align: left;
}
.buttonnext-parent {
  width: 21.38em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5em;
  text-align: center;
  color: #f3f3f3;
  position: relative;
  top: 1.5rem;
}
.frame-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.88em;
}
.frame-wrapper {
  top: 0em;
  left: 0em;
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  align-items: center;
  justify-content: flex-start;
}
.frame-parent {
  position: relative;
  width: 100%;
  height: 30em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
