<template>
  <div class="pull-parent" @click="() => (isDetail = true)">
    <div class="pull">
      <div class="pull-stats-wrapper">
        <div class="pull-stats">
          <div class="buttons-tabs-parent">
            <div class="buttons-tabs">
              <div class="iconsbar-cards-parent">
                <img
                  class="iconsbar-cards"
                  alt=""
                  src="@/assets/images/pie-chart.svg"
                />
                <div class="txt1-parent">
                  <div class="txt1">Займ на:</div>
                  <div class="ton">13 000 TON</div>
                  <div class="txt2">Text2</div>
                </div>
              </div>
              <div class="status-all">
                <div class="colors-graphsorders-parent">
                  <img
                    class="colors-graphsorders-icon"
                    alt=""
                    src="@/assets/images/colors-graphsorders3.svg"
                  />
                  <div class="div">Просрочен повторно</div>
                </div>
              </div>
            </div>
            <div class="frame-parent">
              <div class="iconsbar-cards-parent">
                <img
                  class="percent-icon"
                  alt=""
                  src="@/assets/images/percent.svg"
                />
                <div class="div1">1 день = 1%</div>
              </div>
              <div class="clock-parent">
                <img
                  class="percent-icon"
                  alt=""
                  src="@/assets/images/clock.svg"
                />
                <div class="div2">
                  <p class="p">Просрочен</p>
                  <p class="p">на 9 дней</p>
                </div>
              </div>
            </div>
          </div>
          <div class="pull-stats-inner">
            <div class="frame-group">
              <div class="field-parent">
                <div class="field">
                  <div class="c">Cтатус:</div>
                  <div class="div3">Просрочен повторно</div>
                </div>
                <div class="col-titles-bg" />
              </div>
              <div class="field-parent">
                <div class="field">
                  <div class="c">Дата выдачи займа:</div>
                  <div class="div3">18.01.2022, 16:00</div>
                </div>
                <div class="col-titles-bg" />
              </div>
              <div class="field-parent">
                <div class="field">
                  <div class="c">Ставка:</div>
                  <div class="div3">1% в день</div>
                </div>
                <div class="col-titles-bg" />
              </div>
              <div class="field-parent">
                <div class="field">
                  <div class="c">Займ:</div>
                  <div class="div3">13 000 TON</div>
                </div>
                <div class="col-titles-bg" />
              </div>
              <div class="field-parent">
                <div class="field">
                  <div class="c">Сумма к возвращению:</div>
                  <div class="ton-wrapper">
                    <div class="div3">13 512 TON</div>
                  </div>
                </div>
                <div class="col-titles-bg" />
              </div>
              <div class="field-parent">
                <div class="field">
                  <div class="c">Заявитель:</div>
                  <div class="wrapper">
                    <div class="div11">Иван Иванов</div>
                  </div>
                </div>
                <div class="col-titles-bg" />
              </div>
              <div class="field-wrapper">
                <div class="field">
                  <div class="c">Анкета заявителя:</div>
                  <a class="div13" @click.stop="() => (isBlank = true)"
                    >Открыть</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="des-and-bbn">
            <div class="text-and-button">
              <div class="field-wrapper">
                <div class="buttons-tabs1">
                  <div class="text">Изьять ликвидность</div>
                </div>
              </div>
            </div>
            <div class="button1">
              <div class="buttons-tabs2">
                <div class="text1">Подробнее</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="filtr-wrapper">
        <div class="filtr">
          <div class="div14">Займ #12345</div>
        </div>
      </div>
    </div>
  </div>
  <desktop-modal v-if="isDetail" @close="() => (isDetail = false)">
    <template v-slot:title>Анкета пользователя #12345</template>
    <template v-slot:body>
      <overdue-loans-detail @close="() => (isDetail = false)">
      </overdue-loans-detail>
    </template>

    ></desktop-modal
  >

  <blank
    v-if="isBlank"
    @close="() => (isBlank = false)"
    title="Анекета пользователя #1234"
  >
  </blank>
</template>
<script setup lang="ts">
import { ref } from "vue";
import blank from "@/components/base/desktop/blank.vue";
import overdueLoansDetail from "../modal-body/overdue-loans-detail.vue";
import desktopModal from "@/components/base/desktop-modal.vue";
const isDetail = ref(false);
const isBlank = ref(false);
</script>
<style scoped lang="scss">
.iconsbar-cards {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.txt1 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.ton {
  position: relative;
  font-size: 1.13em;
  line-height: 100%;
  font-weight: 500;
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
.txt2 {
  position: relative;
  font-size: 0.63em;
  line-height: 130%;
  display: none;
}
.txt1-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.13em;
}
.iconsbar-cards-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.colors-graphsorders-icon {
  position: relative;
  width: 1em;
  height: 1em;
}
.div {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
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
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0em 0.5em 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  color: #3b3b3b;
}
.buttons-tabs {
  flex: 1;
  border-radius: 15px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.75em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.percent-icon {
  position: relative;
  width: 0.75em;
  height: 0.75em;
  overflow: hidden;
  flex-shrink: 0;
}
.div1 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
}
.p {
  margin: 0;
}
.div2 {
  position: relative;
  font-size: 0.88em;
}
.clock-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
  text-align: right;
}
.frame-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0.75em;
  color: #3b3b3b;
}
.buttons-tabs-parent {
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
.c {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.div3 {
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
.div11 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 130%;
}
.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: rgba(87, 126, 247, 0.96);
}
.div13 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 130%;
  color: rgba(87, 126, 247, 0.96);
}
.field-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-group {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: 0em 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.pull-stats-inner {
  align-self: stretch;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #3b3b3b;
}
.text {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 130%;
  font-weight: 500;
}
.buttons-tabs1 {
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
.text1 {
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
.button1 {
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
  width: 23.75em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.div14 {
  position: relative;
  font-size: 0.75em;
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
  height: 6.11%;
  width: 30.79%;
  top: -3.23%;
  right: 68.04%;
  bottom: 94.11%;
  left: 1.17%;
  display: flex;
  flex-direction: column;
  padding: 0em 0em 0em 1.25em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  color: #3b3b3b;
}
.pull {
  width: 23.75em;
  height: 31.69em;
}
.pull-parent {
  position: relative;
  width: 100%;
  height: 31.69em;
  text-align: left;
  color: #8181a5;
  font-family: Inter;
  cursor: pointer;
  &:hover .pull-stats {
    background-color: #fcfcfe;
  }
}
</style>
