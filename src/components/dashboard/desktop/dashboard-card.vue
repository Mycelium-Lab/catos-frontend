<template>
  <div class="cards-parent">
    <div class="cards">
      <div class="full-ifo-card">
        <div class="header-info">
          <div class="frame-parent">
            <div class="checkboxdone-parent">
              <div class="checkboxdone" />
              <div class="parent">
                <div class="div">Алексей Иванов</div>
                <div class="id-100">ID #100</div>
              </div>
            </div>
            <div class="statusapplication">
              <img
                class="colors-graphsorders-icon"
                alt=""
                src="@/assets/images/colors-graphsorders-gradient.svg"
              />
              <div class="div1">ROI = 60%</div>
            </div>
          </div>
        </div>
        <button-slider
          :style="{ width: '338px', margin: '0' }"
          :variantIndex="2"
          :tabs="['Кол-во займов', 'Займы в TON']"
          @on-slide="toggleSlide"
        ></button-slider>
      </div>
      <div class="cards-inner">
        <div class="component-parent">
          <div v-if="currentTable === 'amount'" class="component">
            <div class="field">
              <div class="div5">Всего пуллов:</div>
              <div class="div1_link div1">160</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="component">
            <div class="field">
              <div class="div5">Выдано займов:</div>
              <div
                :class="currentTable === 'amount' ? 'div1_link div1' : 'div1'"
              >
                {{ currentTable === "amount" ? "160" : "100 000 TON" }}
              </div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="component">
            <div class="field">
              <div class="div5">Займов активно:</div>
              <div
                :class="currentTable === 'amount' ? 'div1_link div1' : 'div1'"
              >
                {{ currentTable === "amount" ? "160" : "100 000 TON" }}
              </div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="component">
            <div class="field">
              <div class="div5">Займов погашено:</div>
              <div
                :class="currentTable === 'amount' ? 'div1_link div1' : 'div1'"
              >
                {{ currentTable === "amount" ? "160" : "100 000 TON" }}
              </div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="component">
            <div class="field">
              <div class="div5">Займов пророченно:</div>
              <div
                :class="currentTable === 'amount' ? 'div1_link div1' : 'div1'"
              >
                {{ currentTable === "amount" ? "160" : "100 000 TON" }}
              </div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="component">
            <div class="field">
              <div class="div5">Займов на продаже:</div>
              <div
                :class="currentTable === 'amount' ? 'div1_link div1' : 'div1'"
              >
                {{ currentTable === "amount" ? "160" : "100 000 TON" }}
              </div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="component">
            <div class="field">
              <div class="div5">
                {{ currentTable === "amount" ? "Займов продано" : "Прибыль" }}:
              </div>
              <div
                :class="currentTable === 'amount' ? 'div1_link div1' : 'div1'"
              >
                {{ currentTable === "amount" ? "160" : "100 000 TON" }}
              </div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="component">
            <div class="field">
              <div class="div5">
                {{ currentTable === "amount" ? "Выдано займов" : "ROI" }}:
              </div>
              <div
                :class="currentTable === 'amount' ? 'div1_link div1' : 'div1'"
              >
                {{ currentTable === "amount" ? "160" : "60%" }}
              </div>
            </div>
            <div class="col-titles-bg6" />
          </div>
        </div>
      </div>
      <div class="des-and-bbn">
        <catos-button
          variant="fourth"
          :style="{ width: '100%', margin: '0' }"
          @click="toAnalytics"
          >См. детальную аналитику</catos-button
        >
        <catos-button
          variant="fourth_outline"
          :style="{ width: '100%', margin: '0' }"
          >Подробнее</catos-button
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
// @ts-ignore
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
// @ts-ignore
import buttonSlider from "@/components/ui-kit/buttons/button-slider.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const currentTable = ref("amount");
const toAnalytics = () => {
  router.push({ name: "dashboard-analytics-desktop" });
};
const toggleSlide = (slideIndex: any) => {
  if (slideIndex === 0) {
    currentTable.value = "amount";
  } else if (slideIndex === 1) {
    currentTable.value = "amountOnTON";
  }
};
</script>
<style scoped lang="scss">
style scoped > .checkboxdone {
  position: relative;
  border-radius: 4.14px;
  border: 0.8px solid #a592dd;
  box-sizing: border-box;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
}
.div {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 130%;
  font-weight: 600;
  display: inline-block;
  width: 8.43em;
}
.id-100 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 130%;
  color: #b5b5c3;
}
.parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.checkboxdone-parent {
  position: absolute;
  top: 0.03em;
  left: 0em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1em;
}
.colors-graphsorders-icon {
  position: relative;
  width: 1em;
  height: 1em;
}
.div1 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  &_link {
    text-decoration: underline;
    color: #5d83f7;
  }
}
.statusapplication {
  position: absolute;
  top: 0em;
  right: 0em;
  border-radius: 8px;
  background-color: #f9f7fc;
  border: 0.5px solid rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  width: 7.5em;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  align-items: center;
  justify-content: center;
  gap: 0.63em;
}
.frame-parent {
  align-self: stretch;
  position: relative;
  height: 2.5em;
}
.header-info {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.div2 {
  position: relative;
  font-size: 1em;
  line-height: 130%;
  display: inline-block;
  width: 6.69em;
  flex-shrink: 0;
}
.tab1 {
  display: none;
  flex-direction: row;
  padding: 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
}
.div3 {
  flex: 1;
  position: relative;
  font-size: 1em;
  line-height: 130%;
}
.tab2 {
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
}
.tab3 {
  flex: 1;
  border-radius: 45px;
  background-color: #fdd674;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  color: #1f1f1f;
}
.tab-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.tab {
  align-self: stretch;
  border-radius: 45px;
  background-color: #f6f4fc;
  border: 1px solid #eceaf2;
  display: flex;
  flex-direction: column;
  padding: 0.13em;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  color: rgba(59, 59, 59, 0.75);
}
.full-ifo-card {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1em;
}
.div5 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
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
.component {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.col-titles-bg6 {
  align-self: stretch;
  position: relative;
  border-radius: 18px;
  background-color: rgba(165, 146, 221, 0.1);
  height: 0.06em;
  display: none;
}
.component-parent {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.cards-inner {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.span {
  letter-spacing: 0.03em;
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
  background-color: rgba(87, 126, 247, 0.96);
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.44em 5.5em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.buttons-tabs1 {
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
  text-align: right;
  color: #fefefe;
  gap: 10px;
}
.cards {
  border-radius: 24px;
  background-color: #fff;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  width: 23.75em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1.25em 1.31em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.cards-parent {
  position: relative;
  width: 100%;
  height: 33.19em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
