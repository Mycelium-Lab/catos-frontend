<template>
  <modal from="setting">
    <div class="swipe-down-parent">
      <div class="wrapper">
        <div class="div">Анкета пользователя #12345</div>
      </div>
      <div class="des-and-bbn">
        <div class="text-and-button" @click="toBack">
          <div class="buttons-tabs">
            <div class="text">Закрыть</div>
          </div>
        </div>
      </div>
      <div class="frame-parent">
        <div class="frame-group">
          <div class="frame-container">
            <div class="container">
              <div class="roi">Статус:</div>
            </div>
            <div class="status-all">
              <div class="colors-graphsorders-parent">
                <img
                  class="colors-graphsorders-icon"
                  alt=""
                  src="@/assets/images/colors-graphsorders1.svg"
                />
                <div class="roi">Активен</div>
              </div>
              <img
                class="iconchange"
                alt=""
                src="/src/views/public/iconchange.svg"
              />
            </div>
          </div>
          <div class="frame-wrapper">
            <div class="parent">
              <div class="div3">Кредитор:</div>
              <div class="radiobutton-parent">
                <div class="div4">Деньги до зарплаты</div>
                <img
                  class="radiobutton-icon"
                  alt=""
                  src="@/assets/images/investore.svg"
                />
              </div>
            </div>
          </div>
          <div class="frame-div">
            <div class="frame-parent1">
              <div class="frame-parent2">
                <div class="frame">
                  <div class="roi">Ставка:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="ton">1 % в день</div>
                </div>
              </div>
              <div class="frame-child" />
              <div class="frame-parent2">
                <div class="frame">
                  <div class="roi">На срок:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="ton">30 дней</div>
                </div>
              </div>
              <div class="frame-child" />
              <div class="frame-parent2">
                <div class="frame">
                  <div class="roi">Беспроцентный период:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="ton">3 дня</div>
                </div>
              </div>
              <div class="frame-child" />
              <div class="frame-parent2">
                <div class="frame">
                  <div class="roi">Всего ликвидности:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="ton">450 000 TON</div>
                </div>
              </div>
              <div class="frame-child" />
              <div class="frame-parent2">
                <div class="frame">
                  <div class="roi">Выдано:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="ton">796 000 TON</div>
                </div>
              </div>
              <div class="frame-child" />
              <div class="frame-parent2">
                <div class="frame">
                  <div class="roi">Свободно ликвидности:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="ton">37 000 TON</div>
                </div>
              </div>
              <div class="frame-child" />
              <div class="frame-parent2">
                <div class="frame">
                  <div class="roi">Займов выдано:</div>
                </div>
                <div class="wrapper10">
                  <div class="div15">10 546 раз</div>
                </div>
              </div>
              <div class="frame-child" />
              <div class="frame-parent2">
                <div class="frame">
                  <div class="roi">Процент не возврата:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="ton">4,5 %</div>
                </div>
              </div>
              <div class="frame-child" />
              <div class="frame-parent2">
                <div class="frame">
                  <div class="roi">Дата создания:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="ton">22.05.2023</div>
                </div>
              </div>
              <div class="frame-child" />
              <div class="frame-parent2">
                <div class="frame">
                  <div class="roi">Доход:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="ton">102 311 TON</div>
                </div>
              </div>
              <div class="frame-child" />
              <div class="frame-parent2">
                <div class="frame">
                  <div class="roi">ROI:</div>
                </div>
                <div class="ton-wrapper">
                  <div class="ton">72% годовых</div>
                </div>
              </div>
              <div class="frame-child7" />
            </div>
          </div>
        </div>
        <div class="des-and-bbn1">
          <div class="text-and-button" @click="toBack">
            <div class="buttons-tabs">
              <div class="text">Закрыть</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>
<script setup lang="ts">
// @ts-ignore
import modal from "@/components/ui-kit/modal.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const toBack = () => {
  router.push({ name: "manage-pulls-mobile" });
};
</script>
<style scoped>
.swipe-down {
  position: absolute;
  top: 0.75em;
  left: 10.81em;
  border-radius: 25px;
  background-color: #cad0e4;
  width: 2.63em;
  height: 0.31em;
}
.div {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.wrapper {
  position: absolute;
  top: 2.5em;
  left: calc(50% - 112.5px);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0.75em;
  align-items: center;
  justify-content: center;
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
  height: 2em;
  display: flex;
  flex-direction: row;
  padding: 0.44em 5.5em;
  align-items: center;
  justify-content: center;
}
.text-and-button {
  width: 17.25em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.des-and-bbn {
  position: absolute;
  top: 160.81em;
  left: 2.81em;
  border-radius: 16px;
  background-color: #f9fbff;
  width: 18.75em;
  display: flex;
  flex-direction: column;
  padding: 0.75em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
  color: #555562;
}
.container {
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
.frame-container {
  border-radius: 12px;
  border: 1px solid rgba(129, 129, 165, 0.1);
  box-sizing: border-box;
  width: 21.38em;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0.5em 0.5em 1.31em;
  align-items: center;
  justify-content: flex-start;
  gap: 3em;
}
.div3 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
}
.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.div4 {
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
.parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2em;
  width: 100%;
}
.frame-wrapper {
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid #f6f4fc;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.38em 1.31em;
  align-items: flex-start;
  justify-content: center;
}
.frame {
  width: 7.19em;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent2 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 4.06em;
}
.frame-child {
  align-self: stretch;
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  height: 0.06em;
}
.ton {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.ton-wrapper {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-end;
}
.div15 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  text-decoration: underline;
  line-height: 130%;
}
.wrapper10 {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
  color: rgba(87, 126, 247, 0.96);
}
.roi {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.frame-child7 {
  align-self: stretch;
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  height: 0.06em;
  display: none;
}
.frame-parent1 {
  width: 18.75em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.frame-div {
  border-radius: 14px;
  border: 1px solid #f8f6fc;
  box-sizing: border-box;
  width: 21.38em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1.13em 1.31em 1.5em;
  align-items: center;
  justify-content: flex-start;
}
.frame-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.88em;
}
.des-and-bbn1 {
  border-radius: 16px;
  background-color: #f9fbff;
  width: 18.75em;
  display: flex;
  flex-direction: column;
  padding: 0.75em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
  color: #555562;
}
.frame-parent {
  position: absolute;
  top: 5.88em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
}
.swipe-down-parent {
  position: relative;
  border-radius: 30px 30px 0px 0px;
  margin: 0 auto;
  box-sizing: border-box;
  width: 87vw;
  height: 58.63em;
  overflow: hidden;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
