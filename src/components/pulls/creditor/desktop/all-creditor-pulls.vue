<template>
  <detail-other-desktop 
  :pool="pool" @close="close"   
  v-if="isDetailOther"
  @management="
      () => {
        isDetailOther = false;
        isMangaeLiquid = true;
      }
    "
    @loans="
      () => {
        isDetailOther = false;
        toLoans();
      }
    "
    @analytics="
      () => {
        isDetailOther = false;
        toAnalytics();
      }
      "
  > 
  </detail-other-desktop>
  <liquidity-management-desktop
    v-if="isMangaeLiquid"
    :pool="pool"
    @close="close"
    @withdraw="
      () => {
        isMangaeLiquid = false;
        isWithdraw = true;
      }
    "
    @add="
      () => {
        isMangaeLiquid = false;
        isAdd = true;
      }
    "
  ></liquidity-management-desktop>
  <withdraw
    :poolId="pool?.id ? pool?.id : 0"
    v-if="isWithdraw"
    @close="close"
  ></withdraw>
  <add
  :poolId="pool?.id ? pool?.id : 0"
    v-if="isAdd"
    @close="close"
  ></add>
</template>

<script setup lang="ts">
import { ref, PropType } from "vue";
import detailOtherDesktop from "../detail-other-desktop.vue";
import liquidityManagementDesktop from "@/components/pulls/creditor/liquidity/liquidity-management-desktop.vue";
import withdraw from "./modal-body/withdraw.vue";
import add from "./modal-body/add.vue";
import { Pool } from "@/types/pool.type";

const emits = defineEmits(["close", "loans", "analytics"]);

const { pool } = defineProps({
  pool: {
    type: Object as PropType<Pool>,
  },
});

const isDetailOther = ref(true);
const isMangaeLiquid = ref(false);
const isWithdraw = ref(false);
const isAdd = ref(false);

const toLoans = () => {
  emits("loans");
};
const toAnalytics = () => {
  emits("analytics");
};

const close = () => {
  emits("close");
};
</script>

<style scoped></style>
