<template>
    <status-modal-desktop
        v-if="isProgress && !isSuccess && !isFail"
        @result="() => (isProgress = false)"
        @close="handleClose"
      >
        <template v-slot:header> {{ header }} </template>
        <template v-slot:title> {{ title }}</template>
        <template v-slot:subtitle> {{ subtitle }} </template>
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
            <template v-slot:header> {{ header }} </template>
            <template v-slot:title> {{ title }} </template>
            <template v-slot:subtitle> 
            <p class="status-subtitle"> {{ subtitle }} <a class="status-subtitle-link"></a> </p>
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
      <template v-slot:header> {{ header }} </template>
      <template v-slot:title> {{ title }} </template>
      <template v-slot:subtitle> 
        <p class="status-subtitle"><span :style="{display: 'flex', justifyContent: 'center'}">Указание причины:</span><span :style="{display: 'flex', justifyContent: 'center'}">Причина 01</span></p>
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

const {status} = defineProps({
  status: {type: String},
  header: {type: String},
  title: {type: String},
  subtitle: {type: String},
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
.status-subtitle {
  width: 70%;
  text-align: center;
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