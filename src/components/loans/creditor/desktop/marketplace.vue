<template>
  <sales-detail
    v-if="isSalesDetail"
    @close="close"
    @api="
      () => {
        isSalesDetail = false;
        isRepeadAPI = true;
      }
    "
  ></sales-detail>
  <sold-detail
    v-if="isSoldDetail"
    @close="close"
    @api="
      () => {
        isSoldDetail = false;
        isRepeadAPI = true;
      }
    "
    @blank="
      () => {
        isSalesDetail = false;
        isSoldDetail = false;
        isBlank = true;
      }
    "
  ></sold-detail>
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
        status === 'sales' ? (isSalesDetail = true) : (isSoldDetail = true);
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
</template>

<script setup lang="ts">
import { ref } from "vue";
import SalesDetail from "./modal-body/sales-detail.vue";
import soldDetail from "./modal-body/sold-detail.vue";
import confirmQrDestop from "@/components/base/confirm-qr-destop.vue";
import desktopModal from "@/components/base/desktop-modal.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
const { state } = defineProps({
  state: {
    type: Object,
    required: true,
  },
  status: {
    type: String,
  },
});
const isSalesDetail = ref(state.salesDetailModal);
const isSoldDetail = ref(state.soldDetailModal);
const isRepeadAPI = ref(false);
const isBlank = ref(false);

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
