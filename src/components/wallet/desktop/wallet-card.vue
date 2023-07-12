<template>
  <div class="user-nav-desktop">
    <div class="usd-wrapper">
      <div class="usd">
        <span class="span">
          <span class="span1">Общий баланс: </span>
          <span class="span2"> </span>
        </span>
        <span class="usd1">(≈12650912 USD)</span>
      </div>
    </div>
    <div class="counters-graph-web-parent">
      <div class="counters-graph-web">
        <div class="bg" />
        <img
          class="graph-icon"
          alt=""
          src="@/assets/desktop/fallback/graph.svg"
        />
        <div class="numbers-parent">
          <div class="numbers">
            <div class="number">1 049 893 СAT</div>
          </div>
          <div class="title">(≈10 656 456 USD)</div>
        </div>
      </div>
      <div class="counters-graph-web">
        <div class="bg" />
        <img
          class="graph-icon"
          alt=""
          src="@/assets/desktop/fallback/graph.svg"
        />
        <div class="numbers-group">
          <div class="numbers1">
            <div class="number1">
              <span class="span">140 570 Toncoin:</span>
              <span class="span3"> </span>
            </div>
          </div>
          <div class="title">(≈1 994 456 USD)</div>
        </div>
      </div>
    </div>
    <div class="des-and-bbn">
      <div class="text-and-button">
        <div class="button" @click="() => (isToUp = true)">
          <div class="buttons-tabs">
            <div class="text">Пополнить</div>
          </div>
        </div>

        <div class="button">
          <div class="buttons-tabs" @click="() => (isWithdraw = true)">
            <div class="text">Вывести</div>
          </div>
        </div>
        <div class="button">
          <div class="buttons-tabs" @click="() => (isSwap = true)">
            <div class="text">Обменять</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <desktopModal
    v-if="isToUp || isWithdraw || isSwap"
    @close="
      () => {
        isToUp = false;
        isWithdraw = false;
        isSwap = false;
      }
    "
  >
    <template v-slot:title>{{
      isToUp ? "Пополнение" : isWithdraw ? "Вывод средств" : "Обмен"
    }}</template>
    <template v-slot:body>
      <to-up v-if="isToUp" @payNotif="payNotif"></to-up>
      <withdraw
        v-if="isWithdraw"
        @result="
          () => {
            isWithdraw = false;
            isWithdrawSuccess = true;
          }
        "
      ></withdraw>
      <swap
        v-if="isSwap"
        @result="
          () => {
            isSwap = false;
            isSwapSuccess = true;
          }
        "
      ></swap>
    </template>
  </desktopModal>
  <status-modal-desktop
    v-if="isSwapSuccess"
    :firstAction="() => (isSwapSuccess = false)"
    :lastAction="toTransaction"
    @close="() => (isSwapSuccess = false)"
    actionGroup
    actionGroupColumn
  >
    <template v-slot:header>Обмен средств:</template>
    <template v-slot:title>Успешно</template>
    <template v-slot:image>
      <img src="@/assets/images/success-transaction-2.svg" />
    </template>
    <template v-slot:subtitle>
      <span :style="{ textAlign: 'center', fontSize: '14px' }"
        ><span :style="{ fontWeight: '600' }">0.6 CAT</span> <br />Вы успешно
        обменяли 100 TON на 0.6 CATOS</span
      >
    </template>
    <template v-slot:action-first>В кошелек</template>
    <template v-slot:action-last>В историю транзакций</template>
  </status-modal-desktop>
  <status-modal-desktop
    v-if="isWithdrawSuccess"
    :firstAction="() => (isWithdrawSuccess = false)"
    :lastAction="toTransaction"
    @close="() => (isWithdrawSuccess = false)"
    actionGroup
    actionGroupColumn
  >
    <template v-slot:header>Вывод средств:</template>
    <template v-slot:title>Успешно</template>
    <template v-slot:image>
      <img src="@/assets/images/success-transaction.svg" />
    </template>
    <template v-slot:subtitle>
      <span :style="{ textAlign: 'center', fontSize: '14px' }"
        ><span :style="{ fontWeight: '600' }">120 000 TON</span> <br />успешно
        отправлены по адресу:</span
      >
    </template>
    <template v-slot:body>
      <copy-paste
        :style="{ width: '412px', fontSize: '12px' }"
        value="EQCoqrqUMQCKKZTBFCQ0VzgOf 
С2K3ieCVOecUmPSFclu2HQJ"
      >
        <template v-slot:icon>
          <img src="@/assets/images/iconscopy.svg" alt="" /> </template
      ></copy-paste>
      <a class="view-transaction">Просмотр транзакции в TON explorer</a>
    </template>
    <template v-slot:action-first>В кошелек</template>
    <template v-slot:action-last>В историю транзакций</template>
  </status-modal-desktop>
</template>
<script setup lang="ts">
import { ref } from "vue";
// import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import desktopModal from "@/components/base/desktop-modal.vue";
import statusModalDesktop from "@/components/base/status-modal-desktop.vue";
import toUp from "./modal-body/to-up.vue";
import withdraw from "./modal-body/withdraw.vue";
import copyPaste from "@/components/fields/copy-paste.vue";
import swap from "./modal-body/swap.vue";
import { useRouter } from "vue-router";

const isToUp = ref(false);
const isWithdraw = ref(false);
const isSwap = ref(false);
const isSwapSuccess = ref(false);
const isWithdrawSuccess = ref(false);

const emits = defineEmits(["pay-notif"]);

const payNotif = () => {
  emits("pay-notif", () => (isToUp.value = false));
};
const router = useRouter();
const toTransaction = () => {
  router.push({ name: "transaction-history" });
};
</script>
<style scoped lang="scss">
.span1 {
  font-weight: 600;
}
.span2 {
  font-weight: 500;
  font-family: Inter;
}
.span {
  font-size: 1em;
}
.usd1 {
  font-size: 0.88em;
}
.usd {
  position: relative;
  line-height: 130%;
}
.usd-wrapper {
  align-self: stretch;
  border-radius: 14px;
  background-color: rgba(165, 146, 221, 0.08);
  border: 1px solid rgba(165, 146, 221, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.88em 1.5em;
  align-items: flex-start;
  justify-content: flex-start;
}
.bg {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 14px;
  background-color: rgba(165, 146, 221, 0.08);
}
.graph-icon {
  position: absolute;
  width: 38.67%;
  top: calc(50% - 22.5px);
  right: 4%;
  left: 57.33%;
  max-width: 100%;
  overflow: hidden;
  height: 2.88em;
}
.number {
  position: absolute;

  left: 0em;
  font-size: 1em;
  line-height: 130%;
  font-weight: 600;
}
.numbers {
  width: 7.19em;
  height: 1.31em;
}
.title {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  color: #8181a5;
}
.numbers-parent {
  position: absolute;
  top: calc(50% - 21.5px);
  left: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.counters-graph-web {
  flex: 1;
  position: relative;
  border-radius: 13px;
  border: 1px solid rgba(165, 146, 221, 0.08);
  box-sizing: border-box;
  height: 5.31em;
  overflow: hidden;
}
.span3 {
  font-size: 1.25em;
}
.number1 {
  position: absolute;
  top: calc(50% - 13px);
  left: 0em;
  line-height: 130%;
  font-weight: 600;
}
.numbers1 {
  position: relative;
  width: 8.38em;
  height: 1.63em;
}
.numbers-group {
  position: absolute;
  top: calc(50% - 23.5px);
  left: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.counters-graph-web-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.94em;
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
  display: flex;
  flex-direction: row;
  padding: 0.69em 1.5em;
  align-items: center;
  justify-content: center;
}
.button {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.text-and-button {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.88em;
}
.des-and-bbn {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f9fbff;
  border: 1px solid rgba(165, 146, 221, 0.08);
  display: flex;
  flex-direction: row;
  padding: 0.75em;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
  color: #fefefe;
}
.user-nav-desktop {
  position: relative;
  border-radius: 16px;
  background-color: #fff;
  border: 1px solid rgba(165, 146, 221, 0.08);
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.94em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
.view-transaction {
  color: rgba(87, 126, 247, 0.96);
  text-align: right;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: 0.28px;
  text-decoration-line: underline;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
}
</style>
