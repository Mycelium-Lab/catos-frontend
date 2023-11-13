<template>
    <status-modal-desktop
        v-if="isProgress && !isSuccess && !isFail"
        @result="() => (isProgress = false)"
        @close="handleClose"
      >
        <template v-slot:header> Транзакция №591561351 </template>
        <template v-slot:title> {{ title }} </template>
        <template v-slot:subtitle> Пожалуйста, подтвердите транзакцию в своем кошельке </template>
        <template v-slot:image>
         <loader></loader>
        </template>
        <template v-slot:action> Ок </template>
    </status-modal-desktop>
    <status-modal-desktop
            v-if="isSuccess"
            @result="() => (isSuccess = false)"
            @close="handleClose"
        >
            <template v-slot:header> Транзакция №591561351 </template>
            <template v-slot:title> Транзакция успешно выполнена </template>
            <template v-slot:subtitle> 
            <p class="status-subtitle"> Вы успешно создали пулл <a class="status-subtitle-link">#123456</a> </p>
            <p class="status-subtitle"> 
                <a class="status-subtitle-link">Просмотр транзакции в Tonscan</a>
            </p>
            </template>
            <template v-slot:image>
            <img src="@/assets/images/success-transaction.svg" />
            </template>
            <template v-slot:action> Ок </template>
      </status-modal-desktop>
      <status-modal-desktop
        v-if="isFail"
        @result="() => (isFail = false)"
        @close="handleClose"
      >
        <template v-slot:header> Транзакция №591561351 </template>
        <template v-slot:title> Произошла ошибка при создании пулла </template>
        <template v-slot:subtitle> 
          <p class="status-subtitle">Указание причины: <br>Причина 01</p>
          <p class="status-subtitle"> 
            <a class="status-subtitle-link">Повторить транзакциию</a>
          </p>
        </template>
        <template v-slot:image>
          <img src="@/assets/images/fail-transaction.svg" />
        </template>
        <template v-slot:action> Ок </template>
      </status-modal-desktop>
</template>

<script setup lang="ts">
import { ref } from "vue";
import statusModalDesktop from "@/components/base/status-modal-desktop.vue";
import loader from "@/components/base/loader.vue"

const { status, title } = defineProps({
  status: String,
  title: String
})
const emits = defineEmits(['close'])

const isProgress = ref(true);
const isSuccess = ref(status === 'success' ? true : false);
const isFail = ref(status === 'fail' ? true : false)

const handleClose = () => {
    isProgress.value = false
    emits('close')
}
</script>

<style scoped lang="scss">
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