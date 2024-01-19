<template>
  <div class="pull-parent" @click="() => (isDetail = true)">
    <div class="pull">
      <div class="pull-stats-wrapper">
        <div class="pull-stats">
          <div class="parent">
            <div class="div">
              <img
                class="pie-chart-icon"
                alt=""
                src="@/assets/images/pie-chart.svg"
              />
              <div class="ton-parent">
                <div class="ton">1 537 000 TON</div>
                <div class="div1">Всего ликвидности:</div>
              </div>
            </div>
            <div class="frame-child" />
            <div class="frame-parent">
              <div class="percent-parent">
                <img
                  class="percent-icon"
                  alt=""
                  src="@/assets/images/percent.svg"
                />
                <div class="div2">1 день = 1%</div>
              </div>
              <div class="percent-parent">
                <img
                  class="percent-icon"
                  alt=""
                  src="@/assets/images/clock.svg"
                />
                <div class="div2">3 дня = 0%</div>
              </div>
              <div class="percent-parent">
                <img
                  class="percent-icon"
                  alt=""
                  src="@/assets/images/activity.svg"
                />
                <div class="div2">ROI = 75%</div>
              </div>
              <div class="percent-parent">
                <img
                  class="percent-icon"
                  alt=""
                  src="@/assets/images/iconscalendar-mini.svg"
                />
                <div class="div2">30 дней</div>
              </div>
            </div>
          </div>
          <div class="frame-group">
            <div class="frame-wrapper">
              <div class="group">
                <div class="div5">Кредитор:</div>
                <div class="radiobutton-parent">
                  <img
                    class="radiobutton-icon"
                    alt=""
                    src="@/assets/images/investore.svg"
                  />
                  <div class="div6">Деньги до зарплаты</div>
                </div>
              </div>
            </div>
            <div class="frame-container">
              <div class="field-parent">
                <div class="field">
                  <div class="roi">Ставка:</div>
                  <div class="div8">1% в день</div>
                </div>
                <div class="col-titles-bg" />
              </div>
              <div class="field-parent">
                <div class="field">
                  <div class="roi">На срок:</div>
                  <div class="div8">до 30 дней</div>
                </div>
                <div class="col-titles-bg" />
              </div>
              <div class="field-parent">
                <div class="field">
                  <div class="roi">Беспроцентный период:</div>
                  <div class="div8">3 дня</div>
                </div>
                <div class="col-titles-bg" />
              </div>
              <div class="field-parent">
                <div class="field">
                  <div class="roi">Всего ликвидности:</div>
                  <div class="div8">450 000 TON</div>
                </div>
                <div class="col-titles-bg" />
              </div>
              <div class="field-parent">
                <div class="field">
                  <div class="roi">Свободно ликвидности:</div>
                  <div class="ton-wrapper">
                    <div class="div8">37 000 TON</div>
                  </div>
                </div>
                <div class="col-titles-bg" />
              </div>
              <div class="field-wrapper">
                <div class="field">
                  <div class="roi">ROI:</div>
                  <div class="div8">75% годовых</div>
                </div>
              </div>
            </div>
          </div>
          <div class="des-and-bbn">
            <catos-button
              variant="fourth_outline"
              :style="{ width: '100%', margin: '0' }"
              @click="() => (isDetail = false)"
              >Подробнее</catos-button
            >
          </div>
        </div>
      </div>
      <div class="filtr-wrapper">
        <div class="filtr">
          <div class="div16">Пул №1223</div>
        </div>
      </div>
    </div>
  </div>
  <desktop-modal
    v-if="isDetail && variant === 'approved'"
    @close="() => (isDetail = false)"
  >
    <template v-slot:title>Анкета пользователя #12345</template>
    <template v-slot:body>
      <approved-pulls @close="() => (isDetail = false)"></approved-pulls>
    </template>
  </desktop-modal>
</template>
<script setup lang="ts">
import { ref } from "vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import approvedPulls from "@/components/admin/modal-body/aprroved-pulls-detail.vue";
import desktopModal from "@/components/base/desktop-modal.vue";

const { variant } = defineProps({
  variant: { type: String },
});
const isDetail = ref(false);
const isLoans = ref(false);
</script>
<style scoped lang="scss">
.pie-chart-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.ton {
  position: relative;
  font-size: 1em;
  background: linear-gradient(
    38.6deg,
    #2e2c2c,
    #4b4949 67.46%,
    #131313,
    rgba(0, 0, 0, 0.94),
    #434343
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.div1 {
  position: relative;
  font-size: 0.75em;
  background: linear-gradient(#3b3b3b, #3b3b3b), #3b3b3b;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.ton-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.31em;
}
.div {
  align-self: stretch;
  border-radius: 15px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.94em;
  align-items: center;
  justify-content: center;
  gap: 0.63em;
}
.frame-child {
  align-self: stretch;
  flex: 1;
  position: relative;
  background-color: rgba(217, 217, 217, 0);
}
.percent-icon {
  position: relative;
  width: 0.75em;
  height: 0.75em;
  overflow: hidden;
  flex-shrink: 0;
}
.div2 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
}
.percent-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.frame-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0.75em;
}
.parent {
  align-self: stretch;
  border-radius: 20px;
  background-color: #f6f4fc;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75em;
}
.div5 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
}
.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.div6 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
  font-weight: 300;
}
.radiobutton-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.group {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75em;
}
.frame-wrapper {
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid #f6f4fc;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.38em 0.81em;
  align-items: flex-start;
  justify-content: center;
}
.div8 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
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
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.ton-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.roi {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.field-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-container {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: 0em 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.frame-group {
  align-self: stretch;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.88em;
}
.text {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 130%;
  font-weight: 500;
}
.buttons-tabs {
  align-self: stretch;
  border-radius: 25px;
  background-color: rgba(87, 126, 247, 0.96);
  display: flex;
  flex-direction: row;
  padding: 0.69em 1.5em;
  align-items: center;
  justify-content: center;
}
.text-and-button {
  align-self: stretch;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.text2 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 500;
}
.buttons-tabs2 {
  align-self: stretch;
  border-radius: 25px;
  border: 1px solid #5d83f7;
  display: flex;
  flex-direction: row;
  padding: 0.69em 1.5em;
  align-items: center;
  justify-content: center;
}
.button2 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #555562;
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
  gap: 0.63em;
  text-align: right;
  color: #f8f8ff;
}
.pull-stats {
  align-self: stretch;
  border-radius: 24px;
  background-color: #fff;
  border: 1px solid #abb0bd;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1.63em 0.63em 0.63em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.88em;
}
.pull-stats-wrapper {
  position: absolute;
  top: 0.81em;
  left: 0em;
  width: 23.75em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.div16 {
  position: relative;
  font-size: 0.75em;
  display: flex;
  align-items: center;
  width: 6.17em;
  flex-shrink: 0;
}
.filtr {
  border-radius: 8.79px;
  background-color: #fff;
  border: 0.3px solid #656060;
  display: flex;
  flex-direction: row;
  padding: 0.5em;
  align-items: center;
  justify-content: center;
}
.filtr-wrapper {
  position: absolute;
  height: 5.66%;
  width: 28.95%;
  top: 0%;
  right: 68.96%;
  bottom: 94.34%;
  left: 2.09%;
  display: flex;
  flex-direction: column;
  padding: 0em 0em 0em 1.25em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.pull {
  width: 23.75em;
  height: 32.25em;
}
.pull-parent {
  position: relative;
  width: 100%;
  height: 32.25em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
  cursor: pointer;
  &:hover .pull-stats {
    background-color: #fcfcfe;
  }
}
</style>
