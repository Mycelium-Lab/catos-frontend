<template>
  <detail-other-desktop :pool="pool" @close="close"> </detail-other-desktop>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import detailOtherDesktop from "../detail-other-desktop.vue";
import { Pool } from "@/types/pool.type";

const emits = defineEmits(["close"]);

const { pool } = defineProps({
  pool: {
    type: Object as PropType<Pool>,
  },
});

const close = () => {
  emits("close");
};
</script>

<style scoped></style>
