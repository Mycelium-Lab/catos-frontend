<template>
  <div v-if="isDetail" class="frame-parent">
    <div class="frame-wrapper">
      <div class="frame-group">
        <div class="frame-container">
          <div class="frame-div">
            <div class="wrapper">
              <div class="div">Статус:</div>
            </div>
            <div class="status-all">
              <div class="colors-graphsorders-parent">
                <img
                  class="colors-graphsorders-icon"
                  alt=""
                  src="@/assets/images/colors-graphsorders3.svg"
                />
                <div class="div">Просрочен</div>
              </div>
              <img
                class="iconchange"
                alt=""
                src="/src/views/public/iconchange.svg"
              />
            </div>
          </div>
          <div class="frame-wrapper1">
            <div class="frame-wrapper2">
              <div class="frame-parent1">
                <div class="field-parent">
                  <div class="field">
                    <div class="c">Дата смены статуса:</div>
                    <div class="ton">21.12.2022</div>
                  </div>
                  <div class="col-titles-bg" />
                </div>
                <div class="field-parent">
                  <div class="field">
                    <div class="c">Дата выдачи займа:</div>
                    <div class="ton">18.12.2022, 10:00</div>
                  </div>
                  <div class="col-titles-bg" />
                </div>
                <div class="field-parent">
                  <div class="field">
                    <div class="c">Ставка:</div>
                    <div class="ton">1% в день</div>
                  </div>
                  <div class="col-titles-bg" />
                </div>
                <div class="field-parent">
                  <div class="field">
                    <div class="c">Cрок:</div>
                    <div class="ton">на 30 дней</div>
                  </div>
                  <div class="col-titles-bg" />
                </div>
                <div class="field-parent">
                  <div class="field">
                    <div class="c">Займ:</div>
                    <div class="ton">37 000 TON</div>
                  </div>
                  <div class="col-titles-bg" />
                </div>
                <div class="field-parent">
                  <div class="field">
                    <div class="c">Беспроцентный период:</div>
                    <div class="ton">
                      <span>до 18.12.2022, 16:00</span>
                      <span class="span"> (закончен) </span>
                    </div>
                  </div>
                  <div class="col-titles-bg" />
                </div>
                <div class="field-parent">
                  <div class="field">
                    <div class="c">Вернуть не позднее:</div>
                    <div class="ton">
                      <span>до 18.12.2022, 16:00</span>
                      <span class="span1"> (просрочен повторно)</span>
                    </div>
                  </div>
                  <div class="col-titles-bg6" />
                </div>
                <div class="field-parent">
                  <div class="field">
                    <div class="c">Начисленные проценты:</div>
                    <div class="ton">512 ТON</div>
                  </div>
                  <div class="col-titles-bg" />
                </div>
                <div class="field-parent">
                  <div class="field">
                    <div class="c">Сумма к возвращению:</div>
                    <div class="ton">12 311 TON</div>
                  </div>
                  <div class="col-titles-bg" />
                </div>
                <div class="field-parent">
                  <div class="field">
                    <div class="c">Заявитель:</div>
                    <div class="div17">Иван Иванов</div>
                  </div>
                  <div class="col-titles-bg" />
                </div>
                <div class="field-parent">
                  <div class="field">
                    <div class="c">Анкета заявителя:</div>
                    <a
                      class="div17_link div17"
                      @click="
                        () => {
                          isDetail = false;
                          isBlank = true;
                        }
                      "
                      >Открыть</a
                    >
                  </div>
                  <div class="col-titles-bg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="icons-parent">
          <div class="icons">
            <div class="iconsfile">
              <img
                class="vector-icon"
                alt=""
                src="@/assets/images/iconspdf.svg"
              />

              <div class="pdf">PDF</div>
            </div>
          </div>
          <div class="pdf1">Скачать анкету в PDF</div>
          <img
            class="iconchange1"
            alt=""
            src="src/views/public/iconchange.svg"
          />
        </div>
        <div class="des-and-bbn">
          <catos-button
            variant="fourth_outline"
            :style="{ width: '100%', margin: '0' }"
            @click="close"
            >Закрыть</catos-button
          >
        </div>
      </div>
    </div>
  </div>
  <blank
    v-if="isBlank"
    @close="
      () => {
        isBlank = false;
        close();
      }
    "
    back
    title=" Анкета пользователя #12345"
    :toBack="
      () => {
        isBlank = false;
        isDetail = true;
      }
    "
  >
  </blank>
</template>
<script setup lang="ts">
import { ref } from "vue";
import blank from "@/components/base/desktop/blank.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
const isDetail = ref(true);
const isBlank = ref(false);
const emits = defineEmits(["close"]);
const close = () => {
  emits("close");
};
</script>
<style scoped lang="scss">
.div {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.wrapper {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
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
}
.iconchange {
  position: relative;
  width: 2.5em;
  height: 2.5em;
}
.status-all {
  align-self: stretch;
  flex: 1;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0em 0em 0em 0.63em;
  align-items: center;
  justify-content: space-between;
}
.frame-div {
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid rgba(129, 129, 165, 0.1);
  display: flex;
  flex-direction: row;
  padding: 0.5em 0.5em 0.5em 1.31em;
  align-items: center;
  justify-content: flex-start;
  gap: 3em;
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
  width: 36.25em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.c {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.ton {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.span {
  color: #ff9901;
}
.span1 {
  color: #ff0000;
}
.col-titles-bg6 {
  align-self: stretch;
  position: relative;
  border-radius: 18px;
  background-color: #a592dd;
  height: 0.06em;
}
.div17 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 130%;
  color: #577ef7;
  cursor: pointer;
  &_link:hover {
    text-decoration: none;
  }
}
.frame-parent1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.frame-wrapper2 {
  width: 37.5em;
  display: flex;
  flex-direction: column;
  padding: 0em 0.63em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-wrapper1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-container {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.vector-icon {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.iconsfile-child {
  position: absolute;
  top: 0.09em;
  left: 0.53em;
  border-radius: 1.07px;
  width: 0.53em;
  height: 0.5em;
}
.pdf {
  position: absolute;
  top: 2.35em;
  left: 0.54em;
  font-size: 0.35em;
  line-height: 120%;
  font-weight: 500;
}
.iconsfile {
  position: absolute;
  top: 0.38em;
  left: 0.5em;
  width: 1.06em;
  height: 1.31em;
}
.icons {
  position: relative;
  border-radius: 42px;
  width: 2em;
  height: 2em;
  z-index: 0;
}
.pdf1 {
  position: relative;
  top: 0.2em;
  font-size: 0.75em;
  line-height: 140%;
  color: #3b3b3b;
  z-index: 1;
}
.iconchange1 {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  top: 0em;
  right: 0em;
  bottom: 0em;
  max-height: 100%;
  width: 2.5em;
  z-index: 2;
}
.icons-parent {
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
  gap: 0.5em;
  color: #fff;
}
.text {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 500;
}
.buttons-tabs {
  align-self: stretch;
  border-radius: 25px;
  border: 0.5px solid rgba(87, 126, 247, 0.96);
  box-sizing: border-box;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.44em 5.5em;
  align-items: center;
  justify-content: center;
}
.text-and-button {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.des-and-bbn {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f9fbff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  padding: 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
  color: #555562;
}
.frame-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.frame-wrapper {
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 1.25em;
  align-items: flex-start;
  justify-content: center;
}
.frame-parent {
  position: relative;
  width: 100%;
  height: 40.94em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
