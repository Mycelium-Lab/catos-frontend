<template>
  <desktop-modal @close="close">
    <template v-slot:title>{{
      variant === "collector" ? "Изменить статус ?" : "Что выполнить ?"
    }}</template>
    <template v-slot:body>
      <div class="frame-parent">
        <div v-if="variant === 'loans'" class="wrapper">
          <!-- На беке пока нельзя менять статус для нескольких заявок сразу-->
          <!--<div class="div">
            <span>Изменить статус для </span>
            <span class="span">{{ amount }}</span>
            <span> займов:</span>
          </div>
        -->
        </div>
        <div class="status-all-parent">
          <button class="status-all" @click="() => variant === 'collector' ? updateStatus() : openApprove = true">
            <div class="colors-graphsorders-parent">
              <img
                class="colors-graphsorders-icon"
                alt=""
                src="@/assets/images/colors-graphsorders1.svg"
              />
              <div class="div1">
                {{
                  variant === "collector"
                    ? "Погашена"
                    : "Одобрить выбранные заявки"
                }}
              </div>
            </div>
          </button>
          <button class="status-all" @click="() => variant === 'collector' ? updateStatus() : decline()">
            <div class="colors-graphsorders-parent">
              <img
                class="colors-graphsorders-icon"
                alt=""
                src="@/assets/images/colors-graphsorders3.svg"
              />
              <div class="div1">
                {{
                  variant === "collector"
                    ? "Не погашена"
                    : "Отклонить выбранные заявки"
                }}
              </div>
            </div>
          </button>
          <button
            v-if="variant === 'loans' && currentStatus === 'pending'"
            class="status-all"
            @click="updateStatus"
          >
            <div class="colors-graphsorders-parent">
              <img
                class="colors-graphsorders-icon"
                alt=""
                src="@/assets/images/colors-graphsorders4.svg"
              />
              <div class="div1">Оставить в ожидании</div>
            </div>
          </button>
        </div>
      </div>
    </template>
  </desktop-modal>
  <approve v-if="openApprove" :id="id" @close="openApprove = false"></approve>
  <action-desktop 
    v-if="isAction && !actionStatus" 
    @close="isAction = false" 
    :status="actionStatus"
    title="Отклонение займа"
    header="Сменить статус"
    subtitle="Пожалуйста, подождите пока завершится процесс отклонения займа"
    ></action-desktop>
    <action-desktop v-else-if="isAction && actionStatus === 'success'" 
    @close="handleSuccess"
    :status="actionStatus"
    header="Сменить статус"
     title="Операция успешно выполнена"
    subtitle="Займ успешно отклонен"
    ></action-desktop>
    <action-desktop 
    v-else-if="isAction && actionStatus === 'fail'" 
    @close="isAction = false" 
    header="Сменить статус"
    title="Произошла ошибка при отклонении займа"
    :status="actionStatus"></action-desktop>
</template>
<script setup lang="ts">
import { ref } from "vue";
import desktopModal from "@/components/base/desktop-modal.vue";
import approve from '@/components/loans/creditor/desktop/approve.vue'
import actionDesktop from "@/components/base/modals/action-desktop.vue";
import { declineLoanRequest } from "@/api/loanRequests.api";

const emtis = defineEmits(["close"]);

const isAction = ref(false)
const actionStatus = ref('')

const { variant, id } = defineProps({
  variant: {
    type: String,
    default: "loans",
  },
  amount: {
    type: Number
  },
  id: {
    type: Number,
    required: true,
  },
  currentStatus : String
});

const openApprove = ref(false)

const decline = async () => {
  isAction.value = true
  await declineLoanRequest(id).then(res => {
    actionStatus.value = 'success'
    }).catch(e => {
      actionStatus.value = 'fail'
        console.error(e)
    })
}

const handleSuccess = () => {
  isAction.value = false;
  location.reload()
}
const updateStatus = () => {
  close();
}


const close = () => {
  emtis("close");
};
</script>
<style scoped>
.span {
  text-decoration: underline;
  color: rgba(87, 126, 247, 0.96);
}
.div {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.wrapper {
  width: 18.75em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.colors-graphsorders-icon {
  position: relative;
  width: 1em;
  height: 1em;
}
.div1 {
  position: relative;
  font-size: 0.88rem;
  line-height: 130%;
}
.colors-graphsorders-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.31em;
}
.status-all {
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  border: none;
  color: #3b3b3b;
}
.status-all-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
  color: #3b3b3b;
}
.frame-parent {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
  text-align: left;
  color: #2e3a59;
  font-family: Inter;
}
</style>
