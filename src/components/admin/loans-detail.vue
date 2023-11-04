<template>
  <modal from="setting">
    <div class="frame-parent">
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
        <div class="frame-group">
          <div class="status-container-parent">
            <div class="status-container">
              <div class="container">
                <div class="c">Статус:</div>
              </div>
              <div class="status-all">
                <div class="colors-graphsorders-parent">
                  <img
                    class="colors-graphsorders-icon"
                    alt=""
                    src="@/assets/images/colors-graphsorders3.svg"
                  />
                  <div class="c">Просрочен повторно</div>
                </div>
              </div>
            </div>
            <div class="frame-container">
              <div class="frame-div">
                <div class="frame-parent1">
                  <div class="frame">
                    <div class="c">Дата смены статуса:</div>
                  </div>
                  <div class="ton-wrapper">
                    <div class="ton">21.12.2022</div>
                  </div>
                </div>
                <div class="frame-child" />
                <div class="frame-parent1">
                  <div class="frame">
                    <div class="c">Дата выдачи займа:</div>
                  </div>
                  <div class="ton-wrapper">
                    <div class="ton">18.12.2022, 10:00</div>
                  </div>
                </div>
                <div class="frame-child" />
                <div class="frame-parent1">
                  <div class="frame">
                    <div class="c">Ставка:</div>
                  </div>
                  <div class="ton-wrapper">
                    <div class="ton">1% в день</div>
                  </div>
                </div>
                <div class="frame-child" />
                <div class="frame-parent1">
                  <div class="frame">
                    <div class="c">Cрок:</div>
                  </div>
                  <div class="ton-wrapper">
                    <div class="ton">на 30 дней</div>
                  </div>
                </div>
                <div class="frame-child" />
                <div class="frame-parent1">
                  <div class="frame">
                    <div class="c">Займ:</div>
                  </div>
                  <div class="ton-wrapper">
                    <div class="ton">13 000 TON</div>
                  </div>
                </div>
                <div class="frame-child" />
                <div class="frame-parent1">
                  <div class="frame">
                    <div class="c">Беспроцентный период:</div>
                  </div>
                  <div class="ton-wrapper">
                    <div class="div12">
                      <p class="p">до 18.12.2022, 16:00</p>
                      <p class="p1">(закончен)</p>
                    </div>
                  </div>
                </div>
                <div class="frame-child" />
                <div class="frame-parent1">
                  <div class="frame">
                    <div class="c">Вернуть не позднее:</div>
                  </div>
                  <div class="ton-wrapper">
                    <div class="div14">
                      <span class="txt">
                        <p class="p">до 18.12.2022, 16:00</p>
                        <p class="p3">(просрочен повторно)</p>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="frame-child" />
                <div class="frame-parent1">
                  <div class="frame">
                    <div class="c">Начисленные проценты:</div>
                  </div>
                  <div class="ton-wrapper">
                    <div class="ton">515 ТON</div>
                  </div>
                </div>
                <div class="frame-child" />
                <div class="frame-parent1">
                  <div class="frame">
                    <div class="c">Сумма к возвращению:</div>
                  </div>
                  <div class="ton-wrapper">
                    <div class="ton">13 512 ТON</div>
                  </div>
                </div>
                <div class="frame-child" />
                <div class="frame-parent1">
                  <div class="frame">
                    <div class="c">Заявитель:</div>
                  </div>
                  <div class="wrapper15">
                    <div class="div18">Иван Иванов</div>
                  </div>
                </div>
                <div class="frame-child" />
                <div class="frame-parent1">
                  <div class="frame">
                    <div class="c">Анкета заявителя:</div>
                  </div>
                  <div class="wrapper15">
                    <div class="div18" @click="() => (isBlank = true)">
                      Открыть
                    </div>
                  </div>
                </div>
                <div class="frame-child7" />
              </div>
              <div class="icons-parent">
                <div class="icons">
                  <div class="iconsfile">
                    <img src="@/assets/images/iconspdf.svg" />
                  </div>
                </div>
                <div class="pdf1">Скачать анкету в PDF</div>
                <img
                  class="iconchange"
                  alt=""
                  src="/src/views/public/iconchange.svg"
                />
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
    </div>
  </modal>
  <load-modal
    v-if="isBlank"
    @onClose="() => (isBlank = false)"
    variant="form"
  ></load-modal>
</template>
<script setup lang="ts">
import { ref } from "vue";
import modal from "@/components/ui-kit/modal.vue";
import { useRouter } from "vue-router";
import loadModal from "../base/load-modal.vue";
const isBlank = ref(false);

const router = useRouter();
const toBack = () => {
  router.push({ name: "manage-loans-mobile" });
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
.status-all {
  align-self: stretch;
  flex: 1;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0em 0.5em 0.63em;
  align-items: center;
  justify-content: flex-start;
}
.status-container {
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
.frame {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent1 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.frame-child {
  align-self: stretch;
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  height: 0.06em;
}
.c {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
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
  justify-content: flex-start;
}
.p {
  margin: 0;
  font-weight: 300;
  text-align: end;
}
.p1 {
  margin: 0;
  color: #ff9901;
}
.div12 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  display: flex;
  flex-direction: column;
  align-items: end;
}
.p3 {
  margin: 0;
  color: #ff0000;
}
.txt {
  line-break: anywhere;
  width: 100%;
}
.div14 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  display: flex;
  flex-direction: column;
  align-items: end;
}
.div18 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  text-decoration: underline;
  line-height: 130%;
}
.wrapper15 {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
  color: rgba(87, 126, 247, 0.96);
}
.frame-child7 {
  align-self: stretch;
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  height: 0.06em;
  display: none;
}
.frame-div {
  width: 18.75em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
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
  font-size: 0.75em;
  line-height: 140%;
  color: #3b3b3b;
  z-index: 1;
  top: 0.2em;
}
.iconchange {
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
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  width: 18.75em;
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
.frame-container {
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
  gap: 1.63em;
}
.status-container-parent {
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
.frame-group {
  position: relative;
  top: 5.88em;
  /* left: 1.5em; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 78vw;
  margin: 0 auto;
  gap: 1.25em;
}
.swipe-down-parent {
  position: absolute;
  top: 0em;
  left: 0em;

  box-sizing: border-box;
  width: 100vw;
  height: 58.63em;
  overflow: hidden;
}
.frame-parent {
  position: relative;
  width: 100%;
  height: 58.63em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
