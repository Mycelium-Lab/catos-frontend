<template>
  <div class="modal-wrapper">
    <div class="sort">
      <div class="header-pop-up">
        <div class="page-title-parent">
          <div class="page-title">
            <slot name="title"></slot>
          </div>
          <img
            class="close-icon"
            alt=""
            src="@/assets/desktop/close.svg"
            @click="close"
          />
        </div>
        <div class="header-pop-up-child" />
      </div>
      <div class="frame-parent">
        <div class="parent">
          <!--<div class="div">
            <div class="div1">Выбор сортировки:</div>
            <div class="tags-brand">
              <div class="tag">
                <div class="div2">Создать</div>
                <img class="icons" alt="" src="/icons.svg" />
              </div>
              <div class="tag1">
                <div class="div2">Сортировка 1</div>
                <img class="close-icon" alt="" src="/iconseditoutline.svg" />
              </div>
              <div class="tag1">
                <div class="div2">Сортировка 2</div>
                <img class="close-icon" alt="" src="/iconseditoutline.svg" />
              </div>
            </div>
          </div>-->
          <chips-bar @on-edit="handleEdit" desktop></chips-bar>
          <div class="fieldsinputchoise-parent">
            <div class="fieldsinputchoise">
              <!--<div class="div1">Настройте токен:</div>
              <div class="fields-password-and-mail">
                <div class="text-parent">
                  <div class="text">CATOS</div>
                  <img class="icons" alt="" src="/iconchange.svg" />
                </div>
              </div>-->
              <slot name="select"></slot>
            </div>
            <div class="frame-group">
              <div class="frame-container">
                <slot name="left-option"></slot>
                <!--<div class="group">
                  <div class="div6">По одобренному кредиту:</div>
                  <div class="frame-div">
                    <div class="radiobutton-parent">
                      <img
                        class="radiobutton-icon"
                        alt=""
                        src="/radiobutton.svg"
                      />
                      <div class="text">По убыванию</div>
                    </div>
                    <div class="radiobutton-parent">
                      <img
                        class="radiobutton-icon"
                        alt=""
                        src="/radiobutton1.svg"
                      />
                      <div class="text">По возрастанию</div>
                    </div>
                  </div>
                </div>
                <div class="group">
                  <div class="div6">Дневной ставке:</div>
                  <div class="frame-div">
                    <div class="radiobutton-parent">
                      <img
                        class="radiobutton-icon"
                        alt=""
                        src="/radiobutton1.svg"
                      />
                      <div class="text">По убыванию</div>
                    </div>
                    <div class="radiobutton-parent">
                      <img
                        class="radiobutton-icon"
                        alt=""
                        src="/radiobutton.svg"
                      />
                      <div class="text">По возрастанию</div>
                    </div>
                  </div>
                </div>
                <div class="group">
                  <div class="div6">Срок:</div>
                  <div class="frame-div">
                    <div class="radiobutton-parent">
                      <img
                        class="radiobutton-icon"
                        alt=""
                        src="/radiobutton1.svg"
                      />
                      <div class="text">По убыванию</div>
                    </div>
                    <div class="radiobutton-parent">
                      <img
                        class="radiobutton-icon"
                        alt=""
                        src="/radiobutton1.svg"
                      />
                      <div class="text">По возрастанию</div>
                    </div>
                  </div>
                </div>-->
              </div>
              <div class="frame-child" />
              <div class="frame-container">
                <slot name="right-option"></slot>
                <!--<div class="group">
                  <div class="div6">Беспроцентный периоду:</div>
                  <div class="frame-div">
                    <div class="radiobutton-parent">
                      <img
                        class="radiobutton-icon"
                        alt=""
                        src="/radiobutton1.svg"
                      />
                      <div class="text">По убыванию</div>
                    </div>
                    <div class="radiobutton-parent">
                      <img
                        class="radiobutton-icon"
                        alt=""
                        src="/radiobutton1.svg"
                      />
                      <div class="text">По возрастанию</div>
                    </div>
                  </div>
                </div>
                <div class="group">
                  <div class="div18">Количеству выданных займов:</div>
                  <div class="frame-div">
                    <div class="radiobutton-parent">
                      <img
                        class="radiobutton-icon"
                        alt=""
                        src="/radiobutton1.svg"
                      />
                      <div class="text">По убыванию</div>
                    </div>
                    <div class="radiobutton-parent">
                      <img
                        class="radiobutton-icon"
                        alt=""
                        src="/radiobutton1.svg"
                      />
                      <div class="text">По возрастанию</div>
                    </div>
                  </div>
                </div>
                <div class="group">
                  <div class="div6">По проценту не возврата:</div>
                  <div class="frame-div">
                    <div class="radiobutton-parent">
                      <img
                        class="radiobutton-icon"
                        alt=""
                        src="/radiobutton1.svg"
                      />
                      <div class="text">По убыванию</div>
                    </div>
                    <div class="radiobutton-parent">
                      <img
                        class="radiobutton-icon"
                        alt=""
                        src="/radiobutton.svg"
                      />
                      <div class="text">По возрастанию</div>
                    </div>
                  </div>
                </div>-->
              </div>
            </div>
          </div>
        </div>
        <div class="buttonnext-parent">
          <!--<div class="buttonnext">
            <b class="ton-kepeer">Сохранить и выйти</b>
          </div>
        -->
          <catos-button
            variant="secondary"
            :style="{ margin: '0 auto' }"
            @click="close"
          >
            <slot name="action"></slot>
          </catos-button>
          <div class="div24">Сбросить параметры</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import chipsBar from "@/components/ui-kit/chips-bar.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";

const isEdit = ref(false);
const isCreateMode = ref(false);
const handleEdit = (ev: any) => {
  if (ev) {
    isCreateMode.value = true;
  }
  isEdit.value = true;
};
const emtis = defineEmits(["close"]);
const close = () => {
  emtis("close");
};
</script>
<style scoped>
.modal-wrapper {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
.page-title {
  flex: 1;
  position: relative;
  font-size: 1.13em;
  line-height: 130%;
  font-weight: 600;
}
.close-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.page-title-parent {
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 1.25em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.81em;
}
.header-pop-up-child {
  align-self: stretch;
  position: relative;
  background-color: #f6f4fc;
  height: 0.06em;
}
.header-pop-up {
  align-self: stretch;
  border-radius: 15px 15px 0px 0px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
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
}
.text {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.text-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.fields-password-and-mail {
  align-self: stretch;
  border-radius: 16px;
  border: 0.5px solid #2e3a59;
  box-sizing: border-box;
  height: 2.5em;
  display: flex;
  flex-direction: column;
  padding: 0.5em 0.75em;
  align-items: flex-start;
  justify-content: center;
  color: rgba(46, 58, 89, 0.36);
}
.fieldsinputchoise {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.div6 {
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
.radiobutton-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.81em;
}
.frame-div {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5em;
}
.group {
  width: 21.38em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
}
.frame-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.frame-child {
  align-self: stretch;
  position: relative;
  background-color: #f3efff;
  width: 0.06em;
}
.div18 {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 150%;
  font-weight: 500;
}
.frame-group {
  width: 45.81em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.fieldsinputchoise-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.88em;
  color: #3b3b3b;
}
.parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.88em;
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
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.div24 {
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
}
.frame-parent {
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  align-items: center;
  justify-content: flex-start;
  gap: 2.25em;
  color: #2e3a59;
}
.sort {
  position: relative;
  border-radius: 15px;
  border: 1px solid #f6f4fc;
  box-sizing: border-box;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
