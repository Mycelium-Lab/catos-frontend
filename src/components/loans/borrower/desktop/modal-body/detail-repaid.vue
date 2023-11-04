<template>
  <div class="frame-parent">
    <div class="frame-group">
      <div class="frame-container">
        <div class="frame-wrapper">
          <div class="parent">
            <div class="div">Транзакция получения:</div>
            <div class="field-copykey-parent">
              <div class="field-copykey">
                <div class="text-1">
                  <div class="key">Key:</div>
                </div>
                <div class="code">
                  <div class="cahrjj3">EQCoqrqUMQCKKZTBFCQ0VzgOf</div>
                </div>
              </div>
              <div class="component-27-parent">
                <div class="component-27">
                  <img
                    class="share-icon"
                    alt=""
                    src="@/assets/images/iconsshare-black.svg"
                  />
                  <div class="number">Поделиться</div>
                </div>
                <div class="component-27">
                  <img
                    class="share-icon"
                    alt=""
                    src="@/assets/images/iconspaste.svg"
                  />
                  <div class="number">Скопировать</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-div">
          <div class="frame-parent1">
            <div class="frame-parent2">
              <div class="wrapper">
                <div class="div1">Дата получения займа:</div>
              </div>
              <div class="container">
                <div class="div2">11.06.22, 16:00</div>
              </div>
            </div>
            <div class="frame-child" />
            <div class="frame-parent3">
              <div class="frame">
                <div class="div3">Беспроцентный период:</div>
              </div>
              <div class="ton">
                до 12.05.23
                <span class="span">, 16:00</span>
              </div>
            </div>
            <div class="frame-child" />
          </div>
        </div>
      </div>
      <div class="frame-parent4">
        <div class="frame-wrapper">
          <div class="parent">
            <div class="div">Транзакция погашения:</div>
            <div class="field-copykey-parent">
              <div class="field-copykey">
                <div class="text-1">
                  <div class="key">Key:</div>
                </div>
                <div class="code">
                  <div class="cahrjj3">EQCoqrqUMQCKKZTBFCQ0VzgOf</div>
                </div>
              </div>
              <div class="component-27-parent">
                <div class="component-27">
                  <img
                    class="share-icon"
                    alt=""
                    src="@/assets/images/iconsshare-black.svg"
                  />
                  <div class="number">Поделиться</div>
                </div>
                <div class="component-27">
                  <img
                    class="share-icon"
                    alt=""
                    src="@/assets/images/iconspaste.svg"
                  />
                  <div class="number">Скопировать</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-parent5">
          <div class="frame-parent2">
            <div class="wrapper">
              <div class="div1">Дата погашения займа:</div>
            </div>
            <div class="container">
              <div class="div2">11.06.22, 16:00</div>
            </div>
          </div>
          <div class="frame-child" />
          <div class="frame-parent3">
            <div class="frame">
              <div class="div3">Пролонгирован:</div>
            </div>
            <a class="div9" @click="toProlong">2 раза</a>
          </div>
          <div class="frame-child" />
          <div class="frame-wrapper2">
            <div class="parent1">
              <div class="div10">Кредитор:</div>
              <div
                class="radiobutton-parent"
                @click="() => (isCreditorInfo = true)"
              >
                <div class="div11">Деньги до зарплаты</div>
                <img
                  class="radiobutton-icon"
                  alt=""
                  src="@/assets/images/investore.svg"
                />
              </div>
            </div>
          </div>
          <div class="frame-child" />
          <div class="frame-parent2">
            <div class="wrapper4">
              <div class="div3">Пулл:</div>
            </div>
            <div class="wrapper5">
              <div class="div13">#66389563</div>
            </div>
          </div>
          <div class="frame-child" />
          <div class="frame-parent2">
            <div class="wrapper6">
              <div class="div3">Ставка:</div>
            </div>
            <div class="frame">
              <div class="ton">1% в день</div>
            </div>
          </div>
          <div class="frame-child" />
          <div class="frame-parent2">
            <div class="wrapper8">
              <div class="div3">Начиленные проценты:</div>
            </div>
            <div class="frame">
              <div class="ton">327 TON</div>
            </div>
          </div>
          <div class="frame-child" />
          <div class="frame-parent2">
            <div class="wrapper9">
              <div class="div3">Сумма погашения:</div>
            </div>
            <div class="frame">
              <div class="ton">13 327 TON</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <creditor-info
    v-if="isCreditorInfo"
    @close="() => (isCreditorInfo = false)"
  ></creditor-info>
</template>
<script setup lang="ts">
import { ref } from "vue";
import creditorInfo from "@/components/base/desktop/creditor-info.vue";
const emits = defineEmits(["prolong"]);
const toProlong = () => {
  emits("prolong");
};
const isCreditorInfo = ref(false);
</script>
<style scoped lang="scss">
.div {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 130%;
  font-weight: 500;
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
.cahrjj3 {
  position: relative;
  font-size: 0.75em;
  text-decoration: underline;
  line-height: 130%;
  font-weight: 600;
}
.code {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  color: rgba(87, 126, 247, 0.96);
}
.iconchange {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  top: 0em;
  right: 8.75em;
  bottom: 0em;
  max-height: 100%;
  width: 3.25em;
  display: none;
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
}
.share-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.number {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.component-27 {
  flex: 1;
  border-radius: 7px;
  background-color: rgba(165, 146, 221, 0.1);
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0.44em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}
.component-27-parent {
  align-self: stretch;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
  color: rgba(59, 59, 59, 0.8);
}
.field-copykey-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  text-align: left;
  color: rgba(59, 59, 59, 0.5);
}
.parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.frame-wrapper {
  width: 36.25em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.div1 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.wrapper {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
}
.div2 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.container {
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
}
.frame-parent2 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 0.5em;
}
.frame-child {
  align-self: stretch;
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  height: 0.06em;
}
.div3 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.frame {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
}
.span {
  letter-spacing: -0.01em;
}
.frame-parent3 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5em;
}
.frame-parent1 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
}
.frame-div {
  width: 36.25em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
}
.frame-container {
  position: absolute;
  top: 0em;
  left: 0em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.div9 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 130%;
  color: rgba(87, 126, 247, 0.96);
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
}
.div10 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
}
.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.div11 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
  font-weight: 300;
  color: rgba(87, 126, 247, 0.96);
  text-decoration: underline;
}
.radiobutton-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
  cursor: pointer;
}
.parent1 {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.63em;
}
.frame-wrapper2 {
  align-self: stretch;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.wrapper4 {
  width: 2.38em;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.div13 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 130%;
  font-weight: 300;
}
.wrapper5 {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
  color: rgba(87, 126, 247, 0.96);
}
.wrapper6 {
  width: 3.31em;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.wrapper8 {
  width: 12.13em;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.ton {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.wrapper9 {
  width: 8.13em;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent5 {
  width: 36.25em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
  text-align: left;
}
.frame-parent4 {
  position: absolute;
  top: 16.69em;
  left: 0.13em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.frame-group {
  width: 36.38em;
  height: 44.19em;
}
.frame-parent {
  position: relative;
  width: 100%;
  height: 22.19em;
  text-align: right;
  color: #3b3b3b;
  font-family: Inter;
  overflow-y: auto;
}
@media (max-height: 900px) {
  .frame-parent {
    height: 14em;
  }
}
</style>
