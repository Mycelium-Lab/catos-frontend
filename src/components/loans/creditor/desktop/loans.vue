<template>
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
            >Скачать анкету</catos-button
          >
        </div>
      </div>
    </template>
  </desktop-modal>
  <repaid-detail
    v-if="isDetail && loan?.status === 'paid'"
    :loan="loan"
    @close="close"
    @blank="
      () => {
        isDetail = false;
        isBlank = true;
      }
    "
  ></repaid-detail>
  <overdue-detail
    v-if="isDetail && status == 'overdue'"
    :loan="loan"
    @close="close"
    @blank="
      () => {
        isDetail = false;
        isBlank = true;
      }
    "
  ></overdue-detail>
  <status-manage v-if="isStatusManage" @close="close" :loan="loan">
    <status-change :id="loan?.id ? loan?.id : 0" v-if="isStatusChange" @close="close"></status-change>
  </status-manage>
  <expose
    v-if="isExpose"
    :loan="loan"
    @close="close"
    @blank="
      () => {
        isExpose = false;
        isBlank = true;
      }
    "
    @sell="
      () => {
        isExpose = false;
        isSell = true;
      }
    "
  ></expose>
  <sell-out
    v-if="isSell"
    :loan="loan"
    @close="close"
    @result="
      () => {
        isSell = false;
        isSellResult = true;
      }
    "
  ></sell-out>
  <status-modal-desktop v-if="isSellResult" @close="close">
    <template v-slot:header> Займ #12345 </template>
    <template v-slot:image>
      <img src="@/assets/images/success-transaction.svg" />
    </template>
    <template v-slot:subtitle>
      <div :style="{ width: '340px' }">
        <p class="subtitle">
          Успешно выставлен <br />
          на продажу по цене:
        </p>
        <p class="price">21 343 TON</p>
      </div>
    </template>
    <template v-slot:action>Подробнее</template>
  </status-modal-desktop>
</template>
<script setup lang="ts">
import { ref, PropType } from "vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import desktopModal from "@/components/base/desktop-modal.vue";
import statusManage from "./modal-body/status-manage.vue";
import StatusChange from "./modal-body/ status-change.vue";
import expose from "./modal-body/expose.vue";
import sellOut from "./modal-body/sell-out.vue";
import statusModalDesktop from "@/components/base/status-modal-desktop.vue";
import RepaidDetail from "./modal-body/repaid-detail.vue";
import OverdueDetail from "./modal-body/overdue-detail.vue";
import { LoansResponse } from "@/types/loan.types";

const { state } = defineProps({
  state: {
    type: Object,
    required: true,
  },
  status: {
    type: String,
  },
  loan: {
    type: Object as PropType<LoansResponse>,
  },
});
const emtis = defineEmits(["close"]);

const isDetail = ref(state.detailModal);
const isBlank = ref(false);
const isStatusManage = ref(state.statusManageModal);
const isStatusChange = ref(state.statusChangeModal);
const isExpose = ref(state.exposeModal);
const isSell = ref(false);
const isSellResult = ref(false);

const close = () => {
  emtis("close");
};
</script>
<style scoped lang="scss">
.div {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.wrapper {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
}
.colors-graphsorders-icon {
  position: relative;
  width: 1em;
  height: 1em;
}
.colors-graphsorders-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.31em;
}
.iconchange {
  position: relative;
  width: 2.5em;
  height: 2.5em;
}
.status-all {
  flex: 1;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0em 0em 0em 0.63em;
  align-items: center;
  justify-content: space-between;
}
.frame-group {
  flex: 1;
  border-radius: 12px;
  border: 1px solid rgba(129, 129, 165, 0.1);
  box-sizing: border-box;
  height: 3.31em;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0.5em 0.5em 1.31em;
  align-items: center;
  justify-content: flex-start;
  gap: 3em;
}
.frame-container {
  align-self: stretch;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.frame-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.div2 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.div3 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.field {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.63em;
}
.col-titles-bg {
  align-self: stretch;
  position: relative;
  border-radius: 18px;
  background-color: rgba(165, 146, 221, 0.1);
  height: 0.06em;
}
.component {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.div15 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 130%;
  color: #5d83f7;
  &_link {
    cursor: pointer;
    &:hover {
      text-decoration: none;
    }
  }
}
.component-parent {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.frame-wrapper1 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.alert-triangle-icon {
  position: relative;
  width: 1em;
  height: 1em;
  overflow: hidden;
  flex-shrink: 0;
}
.span {
  font-weight: 300;
  font-family: Inter;
}
.p {
  margin: 0;
}
.p1 {
  margin: 0;
  color: #ff9901;
}
.notification {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f6f4fc;
  display: flex;
  flex-direction: row;
  padding: 0.94em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.p3 {
  margin: 0;
  color: #ff0000;
}
.div19 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.notification1 {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f6f4fc;
  display: flex;
  flex-direction: row;
  padding: 0.94em 2.06em 0.94em 0.94em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.frame-parent1 {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
}
.frame-div {
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.text {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 500;
}
.buttons-tabs {
  align-self: stretch;
  border-radius: 25px;
  background-color: rgba(87, 126, 247, 0.96);
  display: flex;
  flex-direction: row;
  padding: 0.69em 1.5em;
  align-items: center;
  justify-content: center;
}
.button {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.buttons-tabs1 {
  flex: 1;
  border-radius: 25px;
  border: 1px solid #5d83f7;
  box-sizing: border-box;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.44em 5.5em;
  align-items: center;
  justify-content: center;
  color: #555562;
}
.des-and-bbn {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f9fbff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
  text-align: right;
  color: #fefefe;
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
  color: #3b3b3b;
  font-family: Inter;
}
.group-action {
  display: flex;
  gap: 10px;
}
.subtitle,
.price {
  color: #3b3b3b;
  text-align: center;

  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin: 0;
}
.price {
  font-size: 18px;
  margin-top: 12px;
  font-weight: 600;
}
</style>
