<template>
  <div class="modal-wrapper">
    <div class="filter-parent">
      <div class="filter">
        <div class="rectangle-parent">
          <div class="frame-child" />
          <div class="header-pop-up">
            <div class="page-title-parent">
              <div class="page-title">Фильтры</div>
              <img
                class="close-icon"
                alt=""
                src="@/assets/desktop/close.svg"
                @click="close"
              />
            </div>
            <div class="frame-child" />
          </div>
        </div>
        <div class="frame-parent">
          <div class="parent">
            <chips-bar @on-edit="handleEdit"></chips-bar>
            <div class="fieldsinputchoise-parent">
              <div class="fieldsinputchoise">
                <div class="div1">Настройте токен:</div>
                <catos-select
                  placeholder="Выберите статус"
                  :options="options"
                  :value="valueStatus"
                  @selected="ev => (valueToken = ev)"
                ></catos-select>
              </div>
              <div class="frame-group">
                <div class="instance-parent">
                  <div class="group">
                    <div class="div6">Дневной ставке:</div>
                    <div class="frame-container">
                      <div class="tag-parent">
                        <div class="tag3">
                          <div class="ton-kepeer">
                            <span class="span">
                              <span class="span1">от</span>
                            </span>
                            <span>
                              <span class="span"> О</span>
                            </span>
                            <span class="span3">
                              <span>.1 % </span>
                              <span class="span4">мин</span>
                            </span>
                          </div>
                        </div>
                        <div class="tag3">
                          <div class="div8">
                            <span class="span1">
                              <span>до</span>
                            </span>
                            <span class="span6">
                              <span class="span1"> </span>
                              <span>30 % </span>
                            </span>
                            <span class="span1">макс</span>
                          </div>
                        </div>
                      </div>
                      <!--<img
                        class="scroll-thumb-icon"
                        alt=""
                        src="/scroll-thumb.svg"
                      />-->
                    </div>
                  </div>
                  <div class="group">
                    <div class="div6">Срок</div>
                    <div class="frame-container">
                      <div class="tag-parent">
                        <div class="tag3">
                          <div class="ton-kepeer">
                            <span class="span">
                              <span class="span1">от</span>
                            </span>
                            <span>
                              <span class="span"> </span>
                            </span>
                            <span class="span3">
                              <span>1 </span>
                              <span class="span4">дня</span>
                            </span>
                          </div>
                        </div>
                        <div class="tag3">
                          <div class="div8">
                            <span class="span1">
                              <span>до</span>
                            </span>
                            <span class="span6">
                              <span class="span1"> </span>
                              <span>365 </span>
                            </span>
                            <span class="span1">дней</span>
                          </div>
                        </div>
                      </div>
                      <!--<img
                        class="scroll-thumb-icon"
                        alt=""
                        src="/scroll-thumb.svg"
                      />-->
                    </div>
                  </div>
                </div>
                <div class="instance-parent">
                  <div class="parent1">
                    <div class="div6">Беспроцентный период:</div>
                    <div class="frame-container">
                      <div class="tag-parent">
                        <div class="tag3">
                          <div class="ton-kepeer">
                            <span class="span">
                              <span class="span1">от</span>
                            </span>
                            <span>
                              <span class="span"> О</span>
                            </span>
                            <span class="span3">
                              <span>.1 % </span>
                              <span class="span4">мин</span>
                            </span>
                          </div>
                        </div>
                        <div class="tag3">
                          <div class="div8">
                            <span class="span1">
                              <span>до</span>
                            </span>
                            <span class="span6">
                              <span class="span1"> </span>
                              <span>30 % </span>
                            </span>
                            <span class="span1">макс</span>
                          </div>
                        </div>
                      </div>
                      <!--<img
                        class="scroll-thumb-icon"
                        alt=""
                        src="/scroll-thumb.svg"
                      />-->
                    </div>
                  </div>
                  <div class="parent1">
                    <div class="div6">Процент возврата:</div>
                    <div class="frame-container">
                      <div class="tag-parent">
                        <div class="tag3">
                          <div class="ton-kepeer">
                            <span class="span">
                              <span class="span1">от</span>
                            </span>
                            <span>
                              <span class="span"> О</span>
                            </span>
                            <span class="span3">
                              <span>.1 % </span>
                              <span class="span4">мин</span>
                            </span>
                          </div>
                        </div>
                        <div class="tag3">
                          <div class="div8">
                            <span class="span1">
                              <span>до</span>
                            </span>
                            <span class="span6">
                              <span class="span1"> </span>
                              <span>30 % </span>
                            </span>
                            <span class="span1">макс</span>
                          </div>
                        </div>
                      </div>
                      <!--<img
                        class="scroll-thumb-icon"
                        alt=""
                        src="/scroll-thumb.svg"
                      />-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="buttonnext-parent">
            <div class="buttonnext">
              <b class="ton-kepeer">Сохранить и выйти</b>
            </div>
            <div class="div18">Сбросить параметры</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import chipsBar from "../ui-kit/chips-bar.vue";
const isEdit = ref(false);
const isCreateMode = ref(false);
import catosSelect from "../fields/catos-select.vue";
const valueToken = ref("");
const valueStatus = ref("");
const options = ["Россия", "Украина", "Казахстан", "Белорусь"];
const emtis = defineEmits(["close"]);
const handleEdit = (ev: any) => {
  if (ev) {
    isCreateMode.value = true;
  }
  isEdit.value = true;
};

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
.frame-child {
  align-self: stretch;
  position: relative;
  background-color: #f6f4fc;
  height: 0.06em;
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
.header-pop-up {
  align-self: stretch;
  border-radius: 15px 15px 0px 0px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.rectangle-parent {
  align-self: stretch;
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
  position: relative;
  font-size: 1em;
}
.span1 {
  font-weight: 300;
}
.span {
  letter-spacing: 0.02em;
}
.span4 {
  font-weight: 300;
  font-family: Inter;
  color: rgba(46, 58, 89, 0.4);
}
.span3 {
  letter-spacing: 0.03em;
}
.tag3 {
  flex: 1;
  border-radius: 16px;
  background-color: #f6f4fc;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.38em 1.5em;
  align-items: center;
  justify-content: center;
}
.span6 {
  color: #2e3a59;
}
.div8 {
  position: relative;
  font-size: 1em;
  letter-spacing: 0.01em;
  line-height: 130%;
}
.tag-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.scroll-thumb-icon {
  position: relative;
  width: 21.38em;
  height: 2.38em;
}
.frame-container {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
  color: rgba(46, 58, 89, 0.4);
}
.group {
  width: 21.25em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.88em;
}
.instance-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.parent1 {
  width: 21.25em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.94em;
}
.frame-group {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.88em;
}
.fieldsinputchoise-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.75em;
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
.div18 {
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
.filter {
  position: absolute;
  top: calc(50% - 334px);
  left: calc(50% - 375px);
  border-radius: 15px;
  border: 1px solid #f6f4fc;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.filter-parent {
  position: relative;
  width: 100%;
  height: 41.75em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
