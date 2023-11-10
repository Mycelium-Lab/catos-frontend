<template>
    <detail
      v-if="isDetailMy"
      @close="close"
      @add="
        () => {
            isDetailMy = false;
            isAdd = true;
        }
      "
      @widthdraw="
        {
            isDetailMy = false;
            isWidthdraw = true;
        }
    
      "
    >
    </detail>

    <add v-if="isAdd" @close="() => {
        isAdd = false;
        close()
    }"
    @qr="handleTransaction"
    >

    </add>

    <withdraw v-if="isWidthdraw" @close="() => {
         isWidthdraw = false;
         close()
    }"
    @qr="handleTransaction"
    >
    </withdraw>
    
    <transaction-desktop v-if="isTransaction" @close="() => {
        isTransaction = false
        close()
      }">
    </transaction-desktop>
  
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import detail from "./modal-body/detail.vue";
  import getLoan from "./modal-body/get-loan.vue";
  import invest from "./modal-body/invest.vue";
  import desktopModal from "@/components/base/desktop-modal.vue";
  import getLoanSuccess from "@/components/pulls/borrower/desktop/modal-body/get-loan-success.vue";
  import statusModalDesktop from "@/components/base/status-modal-desktop.vue";
  import loader from "@/components/base/loader.vue"
  import add from "@/components/pulls/creditor/desktop/modal-body/add.vue"
  import withdraw from "@/components/pulls/creditor/desktop/modal-body/withdraw.vue"
  import transactionDesktop from "@/components/base/modals/transaction-desktop.vue";
  
  const { state } = defineProps({
    state: {
      type: Object,
      required: true,
    },
  });
  const isDetailMy = ref(state.detailMyModal);
  const isAdd = ref(false)
  const isWidthdraw = ref(false)
  const isTransaction = ref(false)
  
  const emits = defineEmits(["close", "get-loan"]);
  
  const close = () => {
    emits("close");
  };

  const handleTransaction = () => {
    isTransaction.value = true;
  }
  
  </script>
  
  <style scoped></style>
  