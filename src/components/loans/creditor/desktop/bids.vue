<template>
  <bids-detail
  v-if="isDetail"
    :loanRequest="loanRequest"
    @on-handle-change-status="handleChangeStatus"
    @close="close"
    @api="
      () => {
        isDetail = false;
        isRepeadAPI = true;
      }
    "
    @blank="
      () => {
        isDetail = false;
        isBlank = true;
      }
    "
  ></bids-detail>
  <confirm-qr-destop v-if="isRepeadAPI" @result="close" @close="close">
    <template v-slot:header> Заявка на займ #12346 </template>
    <template v-slot:title> Add liquidity </template>
    <template v-slot:subtitle>
      <div class="subtitle">
        Scan the QR code and pay 13 512 TON <br />
        with Tonkeeper using
      </div>
    </template>
    <template v-slot:link> EQB5...dzE1h </template>
    <template v-slot:action>Add liquidity </template>
    <template v-slot:footer
      >By proceeding, you accept the CATOS Terms of Service and Privacy Policy.
    </template>
  </confirm-qr-destop>
  <desktop-modal
    v-if="isBlank"
    @close="close"
    variant="back"
    :toBack="
      () => {
        isBlank = false;
        isDetail = true;
      }
    "
  >
    <template v-slot:title> Анкета заявителя #{{loanRequest?.borrower_id}} </template>
    <template v-slot:body>
      <div
        :style="{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }"
      >
        <img width="86" src="@/assets/images/iconsloadpdf.svg" />
        <div class="group-action">
          <catos-button
            variant="fourth"
            :style="{ width: '165px', margin: '0' }"
            >Открыть анкету</catos-button
          >
          <catos-button
            variant="fourth"
            :style="{ width: '165px', margin: '0' }"
            >Скачать анкету</catos-button
          >
        </div>
      </div>
    </template>
  </desktop-modal>
</template>

<script setup lang="ts">
import { ref, PropType } from "vue";
import bidsDetail from "./modal-body/bids-detail.vue";
import confirmQrDestop from "@/components/base/confirm-qr-destop.vue";
import desktopModal from "@/components/base/desktop-modal.vue";
import CatosButton from "@/components/ui-kit/buttons/catos-button.vue";
import { LoansRequestResponse } from "@/types/loan.types";

const { state } = defineProps({
  state: {
    type: Object,
    required: true,
  },
  loanRequest: {
    type: Object as PropType<LoansRequestResponse>,
  },
});
const isDetail = ref(state.detailModal);
const isRepeadAPI = ref(false);
const isBlank = ref(false);

const emtis = defineEmits(["close", "onHandleChangeStatus"]);
const close = () => {
  emtis("close");
};
const handleChangeStatus = () => {
  emtis('onHandleChangeStatus')
}
</script>

<style scoped>
.group-action {
  display: flex;
  gap: 10px;
}
</style>
