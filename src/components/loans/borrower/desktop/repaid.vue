<template>
  <detail
    v-if="isDetail"
    @close="close"
    @prolong="
      () => {
        isDetail = false;
        isProlong = true;
      }
    "
  ></detail>
  <detail-prolong
    v-if="isProlong"
    @close="close"
    :toBack="
      () => {
        isDetail = true;
        isProlong = false;
      }
    "
  ></detail-prolong>
</template>

<script setup lang="ts">
import { ref } from "vue";
import detail from "./repaid/detail.vue";
import detailProlong from "./modal-body/detail-prolong.vue";

const { status, state } = defineProps({
  state: {
    type: Object,
    required: true,
  },
  status: {
    type: String,
  },
});
const emits = defineEmits(["close", "link"]);
const close = () => {
  emits("close");
};
const isDetail = ref(state.detailModal);
const isProlong = ref(false);
</script>

<style scoped></style>
