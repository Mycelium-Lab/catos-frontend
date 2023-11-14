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
        close()
    }"
    :poolId="poolId"
    >

    </add>

    <withdraw v-if="isWidthdraw" @close="() => {
         close()
    }">
    </withdraw>
    
    <!--<transaction-desktop v-if="isTransaction" 
    @close="close"
    :title="isAdd ? 'Подтвердите добавление ликвидности' : 'Подтвердите изъятие ликвидности'"
    :subtitle="isAdd ? 'Пожалуйста, подтвердите доавление ликвидности в своем кошельке' 
    : 'Пожалуйста, подтвердите изъятие ликвидности в своем кошельке'"
    >
    </transaction-desktop>-->
  
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import detail from "./modal-body/detail.vue";
  import add from "@/components/pulls/creditor/desktop/modal-body/add.vue"
  import withdraw from "@/components/pulls/creditor/desktop/modal-body/withdraw.vue"
  
  const { state, poolId } = defineProps({
    state: {
      type: Object,
      required: true,
    },
    poolId: {type: Number, required: true}
  });

  const isDetailMy = ref(state.detailMyModal);
  const isAdd = ref(false)
  const isWidthdraw = ref(false)
  
  const emits = defineEmits(["close", "get-loan"]);
  
  const close = () => {
    emits("close");
    isAdd.value = false
    isWidthdraw.value = false
  };
  
  </script>
  
  <style scoped></style>
  