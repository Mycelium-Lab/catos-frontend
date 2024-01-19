<template>
  <status-modal-desktop
    variant="back"
    :toBack="close"
    @close="close"
    actionGroupColumn
    :firstAction="close"
    :lastAction="toGetLoans"
  >
    <template v-slot:header> Займ из пула #{{ poolByLoan?.id }} </template>
    <template v-slot:title> Займ #{{ loan?.id }} получен </template>
    <template v-slot:image>
      <img src="@/assets/images/success-cash-2.svg" />
    </template>
    <template v-slot:subtitle>
      <div class="subtitle">
        <b>{{ loan?.amount ? loan?.amount / NANO_MULTIPLIER : 0 }} TON</b> <br />
        Были отправлены на ваш кошелек: <br />
        <a class="link">EQB5...dzE1hа44</a>
      </div>
    </template>
    <template v-slot:body>
      <detail-repaid @prolong="prolong" :loan="loan"></detail-repaid>
    </template>
    <template v-slot:action-first>Назад в мои займы</template>
    <template v-slot:action-last>Получить новый займ</template>
  </status-modal-desktop>
</template>

<script setup lang="ts">
import { ref, PropType, onMounted } from "vue";
import statusModalDesktop from "@/components/base/status-modal-desktop.vue";
import detailRepaid from "../modal-body/detail-repaid.vue";
import { LoansResponse } from "@/types/loan.types";
import { usePoolListStore } from "@/stores/poolList";
import { useRouter } from "vue-router";
import { NANO_MULTIPLIER } from "@/utils/constants";

onMounted(async () => {
  if(loan?.pool_id) {
    poolByLoan.value = await poolItem(loan?.pool_id)
  }
})

const { loan } = defineProps({
  loan: {
    type: Object as PropType<LoansResponse>,
  }
});

const poolByLoan = ref()
const { poolItem } = usePoolListStore();

const emits = defineEmits(["close", "prolong"]);
const router = useRouter();
const close = () => {
  emits("close");
};
const prolong = () => {
  emits("prolong");
};
const toGetLoans = () => {
  router.push({ name: "pulls-borrower" });
};
</script>

<style scoped lang="scss">
.subtitle {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  color: #3b3b3b;
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
}
.link {
  cursor: pointer;
  text-decoration: underline;
  color: rgba(87, 126, 247, 0.96);
  &:hover {
    text-decoration: none;
  }
}
</style>
