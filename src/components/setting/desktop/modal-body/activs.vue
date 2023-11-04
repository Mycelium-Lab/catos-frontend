<template>
  <desktop-modal @close="close">
    <template v-slot:title>Активы</template>
    <template v-slot:body>
      <div class="frame-parent">
        <div class="frame-wrapper">
          <div class="fieldsinputchoise-parent">
            <div class="fieldsinputchoise">
              <div class="text-parent">
                <div class="text">Выбор статуса:</div>
              </div>
              <div class="div">
                <div class="div1">Тип транзакции:</div>
                <div class="fields">
                  <div class="field-item">
                    <div class="text-icon">
                      <div class="div2">Показывать все</div>
                      <div class="switch">
                        <div class="handle-container">
                          <div class="handle" />
                          <div class="overlay" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="field-item1">
                    <div class="text-icon1">
                      <div class="div2">Ликвидность добавлена</div>
                      <catos-checkbox></catos-checkbox>
                    </div>
                  </div>
                  <div class="field-item1">
                    <div class="text-icon1">
                      <div class="div2">Ликвидность выведена</div>
                      <catos-checkbox></catos-checkbox>
                    </div>
                  </div>
                  <div class="field-item3">
                    <div class="text-icon1">
                      <div class="ton-kepeer">Казахстан</div>
                      <catos-checkbox></catos-checkbox>
                    </div>
                  </div>
                </div>
              </div>
              <div class="div">
                <div class="div1">Статус транзакции:</div>
                <div class="fields">
                  <div class="field-item1">
                    <div class="text-icon1">
                      <div class="div2">Внесенная сумма</div>
                      <catos-checkbox></catos-checkbox>
                    </div>
                  </div>
                  <div class="field-item1">
                    <div class="text-icon1">
                      <div class="div2">В ожидании обработки</div>
                      <catos-checkbox></catos-checkbox>
                    </div>
                  </div>
                  <div class="field-item1">
                    <div class="text-icon1">
                      <div class="div2">В процессе обработки</div>
                      <catos-checkbox></catos-checkbox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field-item7">
              <div class="text-icon">
                <div class="div2">Показывать все</div>
                <catos-switch></catos-switch>
              </div>
            </div>
            <div class="buttonnext-wrapper">
              <catos-button
                @click="close"
                variant="secondary"
                :style="{ margin: '0 auto', marginTop: '1.5em' }"
                >Применить сортировку</catos-button
              >
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
import catosSwitch from "@/components/ui-kit/catos-switch.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
const emits = defineEmits(["close"]);
const close = () => {
  emits("close");
};
</script>
<style scoped>
.text {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.iconchange {
  position: relative;
  width: 1.5em;
  height: 1.5em;
}
.text-parent {
  align-self: stretch;
  border-bottom: 1px solid rgba(165, 146, 221, 0.08);
  display: flex;
  flex-direction: row;
  padding: 0em 0em 0.56em;
  align-items: center;
  justify-content: space-between;
  color: #8181a5;
}
.div1 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 130%;
}
.div2 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
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
.text-icon {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 440px;
  margin-top: 1.5em;
}
.field-item {
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(230, 221, 255, 0.07);
  height: 2.5em;
  display: none;
  flex-direction: column;
  padding: 0.63em 1.25em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: center;
}
.checkboxdone-icon {
  position: relative;
  border-radius: 4.14px;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.text-icon1 {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.field-item1 {
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(230, 221, 255, 0.3);
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.63em 1.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
}
.div5 {
  position: relative;
  font-size: 1em;
  line-height: 130%;
}
.field-item3 {
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(230, 221, 255, 0.3);
  height: 2.5em;
  display: none;
  flex-direction: row;
  padding: 0.63em 1.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
}
.fields {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
  color: #3b3b3b;
}
.div {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
}
.fieldsinputchoise {
  top: 0em;
  left: 0em;
  border-radius: 16px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  width: 27.5em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.88em 1.31em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5em;
}
.fieldsinputchoise-parent {
  position: relative;
  width: 100%;
  height: 31.5em;
  text-align: left;
  color: #2e3a59;
  font-family: Inter;
}
</style>
