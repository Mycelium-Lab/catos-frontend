<template>
  <div class="frame-parent_rejected">
    <div class="frame-group">
      <div class="c-wrapper">
        <div class="c">Cостояние:</div>
      </div>
      <div class="status-all">
        <div class="colors-graphsorders-parent">
          <img
            class="colors-graphsorders-icon"
            alt=""
            src="@/assets/images/colors-graphsorders1.svg"
          />
          <div class="div">Активен</div>
        </div>
        <img class="iconchange" alt="" src="src/views/public/iconchange.svg" />
      </div>
    </div>
    <div class="frame-wrapper2">
      <div class="parent1">
        <div class="div10">Кредитор:</div>
        <div class="radiobutton-parent">
          <img
            class="radiobutton-icon"
            alt=""
            src="@/assets/images/investore.svg"
          />
          <div class="div111">Деньги до зарплаты</div>
        </div>
      </div>
    </div>
    <div class="frame-wrapper">
      <div class="frame-container">
        <div class="frame-div">
          <div class="header-wrapper"></div>
          <div class="field-parent">
            <div class="field">
              <div class="email">Ставка:</div>
              <div class="someuswergmailru">1 % в день</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="email">На срок:</div>
              <div class="someuswergmailru">30 дней</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="email">Беспроцентный период:</div>
              <div class="someuswergmailru">3 дня</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="email">Выдано:</div>
              <div class="someuswergmailru">796 000 TON</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="email">Свободно ликвидности:</div>
              <div class="someuswergmailru">37 000 TON</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="email">Займов выдано:</div>
              <a class="someuswergmailru_link someuswergmailru">10 546 раз</a>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="email">Процент не возврата:</div>
              <div class="someuswergmailru">4,5%</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="email">Дата создания:</div>
              <div class="someuswergmailru">22.05.2023</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="email">Доход:</div>
              <div class="someuswergmailru">102 311 TON</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="email">ROI:</div>
              <div class="someuswergmailru">72% годовых</div>
            </div>
            <div class="col-titles-bg" />
          </div>
        </div>
      </div>
    </div>
    <div class="button-wrapper">
      <catos-button
        :style="{ width: '580px', height: '40px', margin: '0' }"
        @click="close"
        variant="fourth_outline"
      >
        Закрыть
      </catos-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";

const emits = defineEmits(["close"]);
const close = () => {
  emits("close");
};
</script>
<style scoped lang="scss">
.c {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.c-wrapper {
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
.div {
  position: relative;
  font-size: 0.75em;
  line-height: 140%;
  top: 0.06em;
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
.frame-group {
  align-self: stretch;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1em;
}
.div1 {
  position: relative;
  font-size: 0.88em;
  line-height: 140%;
}
.span {
  text-decoration: underline;
}
.span1 {
  letter-spacing: -0.01em;
}
.span2 {
  letter-spacing: 0.01em;
}
.div2 {
  position: relative;
  font-size: 0.75em;
  line-height: 140%;
  color: #8181a5;
}
.parent {
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.94em;
  align-items: flex-start;
  justify-content: center;
  gap: 0.31em;
}
.header {
  align-self: stretch;
  border-radius: 6px;
  background-color: #f9f7fc;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0em;
  align-items: center;
  justify-content: center;
}
.header-wrapper {
  width: 36.25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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

.email {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.someuswergmailru {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  &_link {
    color: rgba(87, 126, 247, 0.96);
    font-size: 14px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      text-decoration: none;
    }
  }
}
.frame-div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.catos {
  position: relative;
  font-size: 1em;
  line-height: 130%;
}
.span3,
.div11 {
  text-decoration: underline;
  color: rgba(87, 126, 247, 0.96);
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
}
.p {
  margin: 0;
}
.div17 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  text-align: right;
}
.frame-container {
  width: 37.5em;
  display: flex;
  flex-direction: column;
  padding: 0em 0.63em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.88em;
}
.frame-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent_rejected {
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
.button-wrapper {
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  background: #f9fbff;
  width: 580px;
  padding: 10px;
  height: 48px;
  display: flex;
  align-items: center;
}
.frame-wrapper2 {
  align-self: stretch;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid #f6f4fc;
  display: flex;
  padding: 6px 21px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
}
.parent1 {
  width: 16.06em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}

.div10 {
  color: #3b3b3b;
  font-size: 12px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 10px;
}
.radiobutton-parent {
  width: 11em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.div111 {
  color: #3b3b3b;
  font-size: 12px;
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  line-height: 10px;
}
</style>
