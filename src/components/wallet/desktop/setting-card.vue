<template>
  <div class="field-buttons-desktop">
    <div class="field-button" @click="toChecks">
      <div class="div">Чеки</div>
      <img class="iconchange" alt="" src="@/views/public/iconchange.svg" />
    </div>
    <div class="field-button" @click="toAccounts">
      <div class="div">Счета</div>
      <img class="iconchange" alt="" src="@/views/public/iconchange.svg" />
    </div>
    <div class="field-button" @click="() => (isChangeWallet = true)">
      <div class="div">Изменить кошелек</div>
      <img class="iconchange" alt="" src="@/views/public/iconchange.svg" />
    </div>
    <div class="tags-grey">
      <img class="bg-hover-icon" alt="" src="@/views/public/iconchange.svg" />
      <b class="tag">Кредитор</b>
    </div>
  </div>
  <desktop-modal
    v-if="isChangeWallet || isSuccessChangeWallet"
    @close="
      () => {
        isChangeWallet = false;
        isSuccessChangeWallet = false;
      }
    "
  >
    <template v-slot:title>
      <h3
        :style="{
          fontSize: '18px',
          fontWeight: '600',
          margin: '0',
        }"
      >
        Изменение кошелька
      </h3>
    </template>
    <template v-slot:body>
      <change-wallet @close="() => (isChangeWallet = false)">
        <template v-if="isSuccessChangeWallet" v-slot:title>
          Кошелек успешно изменен
        </template>
        <template v-if="isChangeWallet" v-slot:subtitle>
          В целях безопасности, после изменения кошелька вам позвонит менеджер
          CATOS и убедится в том, что это именно вы инициировали изменение
          кошелька
        </template>
        <template v-slot:action>
          <catos-button
            variant="secondary"
            @click="handleChangeWallet"
            :style="{ width: '100%', margin: '0 auto' }"
          >
            {{ isChangeWallet ? "Изменить кошелек" : "Продолжить" }}
          </catos-button>
        </template>
        <template v-if="isChangeWallet" v-slot:cancel>
          <div class="buttonnext1" @click="() => (isChangeWallet = false)">
            <div class="div1">Отмена</div>
          </div>
        </template>
        <template v-if="isChangeWallet" v-slot:doc>
          <div class="div2">Документация и инструкции</div>
        </template>
      </change-wallet>
    </template>
  </desktop-modal>

  <confirm-qr-destop
    variant="back"
    :to-back="
      () => {
        isScan = false;
        isChangeWallet = true;
      }
    "
    v-if="isScan"
    @close="() => (isScan = false)"
    @result="
      () => {
        isScan = false;
        isSuccessChangeWallet = true;
      }
    "
  >
    <template v-slot:header> Изменение кошелька </template>
    <template v-slot:title> Connect TON </template>
    <template v-slot:subtitle>
      Scan the QR code and pay 13 512 TON <br />
      with Tonkeeper using
    </template>
    <template v-slot:action> Sign in with Tokenkeeper </template>
    <template v-slot:footer>
      <span class="scan-footer">
        We do not receive or store your wallet login details, so your TON is
        safe.
      </span>
    </template>
  </confirm-qr-destop>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import desktopModal from "@/components/base/desktop-modal.vue";
import confirmQrDestop from "@/components/base/confirm-qr-destop.vue";
import changeWallet from "../../setting/desktop/modal-body/change-wallet.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
const router = useRouter();
const isChangeWallet = ref(false);
const isSuccessChangeWallet = ref(false);
const isScan = ref(false);
const toChecks = () => {
  router.push({ name: "checks" });
};
const toAccounts = () => {
  router.push({ name: "accounts" });
};
const handleChangeWallet = () => {
  if (isChangeWallet.value) {
    isChangeWallet.value = false;
    isScan.value = true;
  } else {
    isSuccessChangeWallet.value = false;
  }
};
</script>
<style scoped>
.div {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  z-index: 0;
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
  z-index: 1;
  cursor: pointer;
}
.field-button {
  align-self: stretch;
  border-radius: 8px;
  background-color: #f5f5fa;
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
.bg-hover-icon {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 8px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.tag {
  position: absolute;
  top: calc(50% - 11px);
  left: 1.21em;
  font-size: 0.88em;
  line-height: 1.5em;
}
.tags-grey {
  position: relative;
  width: 6.25em;
  height: 2.25em;
  display: none;
  text-align: center;
  color: #8181a5;
  font-family: Lato;
}
.field-buttons-desktop {
  position: relative;
  border-radius: 16px;
  background-color: #fff;
  border: 0.5px solid rgba(46, 58, 89, 0.08);
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  align-items: center;
  justify-content: flex-start;
  gap: 1em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
.scan-footer {
  color: rgba(59, 59, 59, 0.7);
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-weight: 300;
  line-height: 130%;
  width: 440px;
}
.div1 {
  font-size: 0.88em;
  line-height: 130%;
}
.buttonnext1 {
  align-self: stretch;
  border-radius: 20px;
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  color: rgba(38, 38, 38, 0.62);
  cursor: pointer;
}
.div2 {
  /* left: 12.79em; */
  font-size: 0.75em;
  text-decoration: underline;
  letter-spacing: 0.01em;
  line-height: 130%;
  color: rgba(87, 126, 247, 0.96);
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
}
</style>
