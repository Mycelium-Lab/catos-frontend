<template>
    <status-modal
        v-if="isProgress"
        title="Подтвердите создание пула"
        subtitle="Пожалуйста, подтвердите создание пула в своем кошельке"
        :variant="0"
        isProgress
        @on-modal="handleClose"
  ></status-modal>
   <status-modal
        v-if="isSuccess"
        title="Подтвердите создание пула"
        subtitle="Пожалуйста, подтвердите создание пула в своем кошельке"
        :variant="0"
        @on-modal="handleClose"
  ></status-modal>
  <status-modal
        v-if="isFail"
        title="Произошла ошибка при создании пула"
        :variant="1"
        @on-modal="handleClose"
  ></status-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import statusModal from "@/components/base/status-modal.vue";

const emits = defineEmits(['close'])

const isProgress = ref(true);
const isSuccess = ref(false);
const isFail = ref(false)

const handleClose = () => {
    isProgress.value = false
    isSuccess.value = false
    isFail.value = false
    emits('close')
}

</script>

<style scoped>

</style>