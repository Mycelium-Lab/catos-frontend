<template>
    <status-modal-desktop
        v-if="isProgress && !isSuccess && !isFail"
        @result="() => (isProgress = false)"
        @close="handleClose"
      >
        <template v-slot:header> Транзакция №591561351 </template>
        <template v-slot:title> {{ titlePending }}</template>
        <template v-slot:subtitle> {{ subtitlePending }} </template>
        <template v-slot:image>
         <loader></loader>
        </template>
        <template v-slot:action> Ок </template>
    </status-modal-desktop>
    <status-modal-desktop
        v-if="isApproved"
        @result="() => (isProgress = false)"
        @close="handleClose"
      >
        <template v-slot:header> Транзакция №591561351 </template>
        <template v-slot:title> Транзакция успешно одобрена</template>
        <template v-slot:subtitle> Пожалуйста, дождитесь завершения транзакции </template>
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
            <p class="status-subtitle"> {{ subtitleSuccess }} <a class="status-subtitle-link"></a> </p>
            <p class="status-subtitle"> 
                <a class="status-subtitle-link" :href="hash" target="_blank">Просмотр транзакции в Tonscan</a>
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
      <template v-slot:title> {{ titleFaild }} </template>
      <template v-slot:subtitle> 
        <p class="status-subtitle">Указание причины: <br>{{ faildCause }}</p>
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
import { ref, onMounted, watch, onUnmounted } from "vue";
import statusModalDesktop from "@/components/base/status-modal-desktop.vue";
import loader from "@/components/base/loader.vue"
import { transaction } from "@/api/transaction"

onMounted(async() => {
  refreshTransaction()
})

onUnmounted(() => {
  // @ts-ignore
  clearInterval(window.refreshTransactionId)
})

const refreshTransaction = () => {
  // @ts-ignore
  if(window.refreshTransactionId) {
      // @ts-ignore
      clearInterval(window.refreshTransactionId)
     }

      // @ts-ignore
    window.refreshTransactionId = setInterval(async function () {
    await transaction(uid)
    .then((res) => {
      const response = res.data
      status.value = response.status
      hash.value = response.hash
      if(status.value === 'failed' || status.value === 'successfull') {
          // @ts-ignore
        clearInterval(window.refreshTransactionId)
      }
    })
    .catch(e => {
      console.error(e)
      //faildCause.value = e
    })
  }, 5000)
}

const {uid} = defineProps({
  uid: {type: String, required: true}, 
  titlePending: {type: String},
  subtitlePending: {type: String},
  subtitleSuccess: {type: String},
  titleFaild: {type: String},
})
const emits = defineEmits(['close'])

const status = ref('')
const hash = ref('')
const isProgress = ref(true);
const isApproved = ref(false)
const isSuccess = ref(false);
const isFail = ref(false)

const faildCause = ref('')

const handleClose = () => {
  isProgress.value = false
  emits('close')
}

watch(status, (newValue) => {
  status.value = newValue
  if(newValue === 'approved') {
    isProgress.value = false
    isApproved.value = true
  }
  else if(newValue === 'successfull') {
    isProgress.value = false
    isSuccess.value = true
  }
  else if(newValue === 'failed') {
    isProgress.value = false
    isFail.value = true
  }
})
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