<template>
  <desktop-modal @close="close">
    <template v-slot:title> Получить займ из пула #12345 </template>
    <template v-slot:body>
      <div class="frame-parent">
        <div class="frame-wrapper">
          <div class="frame-group">
            <div class="frame-container">
              <div class="frame-div">
                <div class="frame-wrapper1">
                  <div class="parent">
                    <div class="div">Займ #12456 получен</div>
                    <img
                      class="iconsstatus-transaction"
                      alt=""
                      src="@/assets/images/success-cash-2.svg"
                    />
                    <div class="eqb5dze1h44-wrapper">
                      <div class="eqb5dze1h44">
                        <h3 class="value">13 000 TON</h3>
                        <p class="p">
                          <span class="span1">
                            были отправлены на ваш кошелек:
                          </span>
                        </p>
                        <p class="eqb5dze1h441">EQB5...dzE1hа44</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="frame-wrapper2">
                  <div class="group">
                    <div class="div1">Транзакция:</div>
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
                <div class="frame-parent1">
                  <div class="frame-parent2">
                    <div class="container">
                      <div class="div2">Кредитор:</div>
                      <div
                        class="radiobutton-parent"
                        @click="() => (isCreditorInfo = true)"
                      >
                        <div class="div3_creditor div3">Деньги до зарплаты</div>
                        <img
                          class="radiobutton-icon"
                          alt=""
                          src="@/assets/images/investore.svg"
                        />
                      </div>
                    </div>
                    <div class="frame-child" />
                    <div class="parent1">
                      <div class="div2">пул:</div>
                      <div class="wrapper">
                        <div class="div5">#123445</div>
                      </div>
                    </div>
                    <div class="frame-child" />
                    <div class="frame-parent3">
                      <div class="frame">
                        <div class="div6">Ставка:</div>
                      </div>
                      <div class="wrapper1">
                        <div class="div7">1% в день</div>
                      </div>
                    </div>
                    <div class="frame-child" />
                    <div class="frame-parent4">
                      <div class="wrapper2">
                        <div class="div2">Беспроцентный период:</div>
                      </div>
                      <div class="div3">
                        до 12.05.23
                        <span class="span2">, 16:00</span>
                      </div>
                    </div>
                    <div class="frame-child" />
                    <div class="notification-wrapper">
                      <div class="notification">
                        <img
                          class="percent-icon"
                          alt=""
                          src="@/assets/images/percent.svg"
                        />
                        <div class="div10">
                          Проценты начнут начисляться с 12 апреля 2023 года,
                          после 16:00
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="info-2">
                    <div class="info-2-inner">
                      <div class="frame-parent5">
                        <div class="radiobutton-parent">
                          <img
                            class="alert-triangle-icon"
                            alt=""
                            src="@/assets/images/alerttriangle.svg"
                          />
                          <div class="div11">Внимание!</div>
                        </div>
                        <div class="eqb5dze1h44">
                          Если не вернуть займ во время, ваш долг может быть
                          продан коллекторам на открытом аукционе
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="des-and-bbn-wrapper">
              <catos-button
                variant="fourth_outline"
                :style="{ width: '100%', margin: '0' }"
                @click="toLoans"
                >Перейти в "Мои займы"</catos-button
              >
            </div>
          </div>
        </div>
      </div>
    </template>
  </desktop-modal>
  <creditor-info
    v-if="isCreditorInfo"
    @close="() => (isCreditorInfo = false)"
  ></creditor-info>
</template>
<script setup lang="ts">
import { ref } from "vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import desktopModal from "@/components/base/desktop-modal.vue";
import creditorInfo from "@/components/base/desktop/creditor-info.vue";
import { useRouter } from "vue-router";

const emits = defineEmits(["close"]);

const isCreditorInfo = ref(false);
const router = useRouter();

const toLoans = () => {
  router.push({ name: "loans-borrower" });
};
const close = () => {
  emits("close");
};
</script>
<style scoped lang="scss">
.div {
  align-self: stretch;
  position: relative;
  font-size: 1.25em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
}
.iconsstatus-transaction {
  position: relative;
  width: 8.88em;
  height: 8.88em;
  overflow: hidden;
  flex-shrink: 0;
}
.span {
  color: #3b3b3b;
}
.span1 {
  color: rgba(59, 59, 59, 0.96);
}
.p {
  margin: 0;
}
.eqb5dze1h441 {
  margin: 0;
  text-decoration: underline;
}
.eqb5dze1h44 {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.eqb5dze1h44-wrapper {
  width: 20.75em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #577ef7;
}
.parent {
  align-self: stretch;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  padding: 0.44em 0em;
  align-items: center;
  justify-content: center;
  gap: 0.75em;
}
.frame-wrapper1 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.div1 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 130%;
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
.group {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.frame-wrapper2 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
}
.div2 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.div3 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
  &_creditor {
    color: #2c56c0;
    text-decoration: underline;
  }
}
.radiobutton-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
  cursor: pointer;
}
.container {
  align-self: stretch;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.frame-child {
  align-self: stretch;
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  height: 0.06em;
}
.div5 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 130%;
  font-weight: 300;
}
.wrapper {
  width: 3.69em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: rgba(87, 126, 247, 0.96);
}
.parent1 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.div6 {
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
.div7 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.wrapper1 {
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
}
.frame-parent3 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.wrapper2 {
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
}
.span2 {
  letter-spacing: -0.01em;
}
.frame-parent4 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}
.percent-icon {
  position: relative;
  width: 1em;
  height: 1em;
  overflow: hidden;
  flex-shrink: 0;
}
.div10 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.notification {
  flex: 1;
  border-radius: 16px;
  background-color: #f6f4fc;
  display: flex;
  flex-direction: row;
  padding: 0.94em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.notification-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent2 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
}
.alert-triangle-icon {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
}
.div11 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
  display: inline-block;
  width: 17.57em;
  flex-shrink: 0;
}
.frame-parent5 {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.info-2-inner {
  align-self: stretch;
  border-radius: 11px;
  background-color: #f9f0e1;
  display: flex;
  flex-direction: row;
  padding: 0.63em 0.75em;
  align-items: flex-start;
  justify-content: flex-start;
}
.info-2 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent1 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.75em;
  text-align: left;
}
.frame-div {
  display: flex;
  flex-direction: column;
  padding: 0em 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.instance-child {
  position: absolute;
  height: 100%;
  top: 0em;
  right: 0.13em;
  bottom: 0em;
  border-radius: 32px;
  background-color: rgba(230, 221, 255, 0.39);
  width: 0.38em;
}
.instance-item {
  position: absolute;
  height: 41.71%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 58.29%;
  left: 0%;
  border-radius: 21px;
  background-color: #a592dd;
}
.rectangle-parent {
  align-self: stretch;
  position: relative;
  width: 0.63em;
}
.frame-container {
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
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
  border: 1px solid #5d83f7;
  display: flex;
  flex-direction: row;
  padding: 0.69em 1.5em;
  align-items: center;
  justify-content: center;
}
.button {
  align-self: stretch;
  height: 2.5em;
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
}
.des-and-bbn-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
  color: #555562;
}
.frame-group {
  position: absolute;
  top: 1.25em;
  left: 1.25em;
  height: 52.06em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.frame-wrapper {
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  width: 41.25em;
}
.frame-parent {
  position: relative;
  width: 100%;
  height: 38em;
  text-align: center;
  color: #3b3b3b;
  font-family: Inter;
  overflow-y: auto;
}
.value {
  margin: 0em;
  color: #3b3b3b;
  text-align: center;
  font-size: 18px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: 1px;
}
</style>
