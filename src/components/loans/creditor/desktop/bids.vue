<template>
  <bids-detail
    v-if="isDetail"
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
    <template v-slot:title> Анкета заявителя: </template>
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
            >Скчать анкету</catos-button
          >
        </div>
      </div>
    </template>
  </desktop-modal>
  <status-change v-if="isStatusChange" @close="close"> </status-change>
</template>

<script setup lang="ts">
import { ref } from "vue";
import bidsDetail from "./modal-body/bids-detail.vue";
import confirmQrDestop from "@/components/base/confirm-qr-destop.vue";
import desktopModal from "@/components/base/desktop-modal.vue";
import CatosButton from "@/components/ui-kit/buttons/catos-button.vue";
import StatusChange from "./modal-body/ status-change.vue";
const { state } = defineProps({
  state: {
    type: Object,
    required: true,
  },
});
const isDetail = ref(state.detailModal);
const isRepeadAPI = ref(false);
const isBlank = ref(false);
const isStatusChange = ref(state.statusChangeModal);

const emtis = defineEmits(["close"]);
const close = () => {
  emtis("close");
};
</script>

<style scoped>
.group-action {
  display: flex;
  gap: 10px;
}
</style>
