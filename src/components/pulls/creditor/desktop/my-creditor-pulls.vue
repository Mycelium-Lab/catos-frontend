<template>
  <detail-personal-desktop
    v-if="isDetailOther"
    @close="close"
    @management="
      () => {
        isDetailOther = false;
        isMangaeLiquid = true;
      }
    "
    @loans="
      () => {
        isDetailOther = false;
        toLoans();
      }
    "
  ></detail-personal-desktop>
  <liquidity-management-desktop
    v-if="isMangaeLiquid"
    @close="close"
    @withdraw="
      () => {
        isMangaeLiquid = false;
        isWithdraw = true;
      }
    "
    @add="
      () => {
        isMangaeLiquid = false;
        isAdd = true;
      }
    "
  ></liquidity-management-desktop>
  <withdraw
    v-if="isWithdraw"
    @close="close"
    @qr="
      () => {
        isWithdraw = false;
        isWithdrawQr = true;
      }
    "
  ></withdraw>
  <add
    v-if="isAdd"
    @close="close"
    @qr="
      () => {
        isAdd = false;
        isAddQr = true;
      }
    "
  ></add>
  <confirm-qr-destop
    v-if="isWithdrawQr"
    @close="close"
    @result="
      () => {
        isSuccessWithdraw = true;
        isWithdrawQr = false;
      }
    "
  >
    <template v-slot:header> Пулл #12345 </template>
    <template v-slot:title>Withdraw liquidity</template>
    <template v-slot:subtitle> Scan the QR code with Tonkeeper using </template>
    <template v-slot:link> EQB5...dzE1h </template>
    <template v-slot:action>
      <b class="ton-kepeer">Withdraw</b>
    </template>
    <template v-slot:footer>
      <div class="we-do-not">
        By proceeding, you accept the <br />
        <a>CATOS Terms of Service</a> and <a>Privacy Policy</a>.
      </div>
    </template>
  </confirm-qr-destop>
  <confirm-qr-destop
    v-if="isAddQr"
    @close="close"
    @result="
      () => {
        isSuccessAdd = true;
        isAddQr = false;
      }
    "
  >
    <template v-slot:header> Пулл #12345 </template>
    <template v-slot:title>Add liquidity</template>
    <template v-slot:subtitle>
      Scan the QR code and pay 13 512 TON <br />
      with Tonkeeper using
    </template>
    <template v-slot:link> EQB5...dzE1h </template>
    <template v-slot:action>
      <b class="ton-kepeer">Add liquidity</b>
    </template>
    <template v-slot:footer>
      <div class="we-do-not">
        By proceeding, you accept the <br />
        <a>CATOS Terms of Service</a> and <a>Privacy Policy</a>.
      </div>
    </template>
  </confirm-qr-destop>
  <status-modal-desktop v-if="isSuccessWithdraw || isSuccessAdd" @close="close">
    <template v-slot:header> Транзакция №591561351 </template>
    <template v-slot:title> Транзакция успешно выполнена </template>
    <template v-slot:image>
      <img src="@/assets/images/success-transaction.svg" />
    </template>
    <template v-slot:subtitle>
      <p class="status-subtitle">
        Вы успешно {{ isSuccessWithdraw ? "вывели" : "добавили" }} 257 324 TON
        <br />
        {{ isSuccessWithdraw ? "из" : "в" }}
        {{ isSuccessWithdraw ? "пулла" : "пулл" }}
        <a
          class="status-subtitle-link"
          @click="
            () => {
              isSuccessWithdraw = false;
              isSuccessAdd = false;
              isDetailOther = true;
            }
          "
          >#123456</a
        >

        <template v-if="isSuccessWithdraw">
          на свой кошелек <br /><a class="status-subtitle-link"
            >EQB5...dzE1hа44</a
          >
        </template>
      </p>
      <p class="status-subtitle">
        <a class="status-subtitle-link">Просмотр транзакции в Tonscan</a>
      </p>
    </template>
    <template v-slot:action> Ок </template>
  </status-modal-desktop>
</template>

<script setup lang="ts">
import { ref } from "vue";
import detailPersonalDesktop from "../detail-personal-desktop.vue";
import liquidityManagementDesktop from "@/components/pulls/creditor/liquidity/liquidity-management-desktop.vue";
import withdraw from "./modal-body/withdraw.vue";
import add from "./modal-body/add.vue";
import confirmQrDestop from "@/components/base/confirm-qr-destop.vue";
import statusModalDesktop from "@/components/base/status-modal-desktop.vue";
const { state } = defineProps({
  state: {
    type: Object,
    required: true,
  },
});

const isDetailOther = ref(state.detailOtherModal);
const isMangaeLiquid = ref(state.manageLiquidModal);
const isWithdraw = ref(false);
const isAdd = ref(false);
const isWithdrawQr = ref(false);
const isAddQr = ref(false);
const isSuccessWithdraw = ref(false);
const isSuccessAdd = ref(false);

const emits = defineEmits(["close", "loans"]);
const toLoans = () => {
  emits("loans");
};
const close = () => {
  emits("close");
};
</script>

<style scoped lang="scss">
.status-subtitle {
  margin: 0;
  text-align: center;
  &-link {
    display: inline-block;
    color: rgba(87, 126, 247, 0.96);
    text-align: center;
    font-size: 14px;
    font-family: Inter;
    font-weight: 300;
    line-height: 10px;
    text-decoration-line: underline;
    cursor: pointer;
    padding-top: 8px;
    &:hover {
      text-decoration: none;
    }
  }
}
.status-subtitle {
  color: rgba(59, 59, 59, 0.96);
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
  margin: 0;
}
.status-subtitle-link {
  color: rgba(87, 126, 247, 0.96);
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
  text-decoration-line: underline;
  cursor: pointer;
}
</style>
