<template>
  <span :class="`status-tag_${variant}`" class="status-tag"> {{ text }} </span>
</template>

<script setup lang="ts">
import { computed } from "vue";
const { variant } = defineProps({
  variant: {
    type: String,
    default: "approved",
  },
  text: {
    type: String,
  },
});

const content = computed(() =>
  variant === "approved"
    ? "Одобрено"
    : variant === "reject"
    ? "Отклонено"
    : variant === "pending"
    ? "Ожидание"
    : variant === "forsales"
    ? "Продается"
    : variant === "reject-loans"
    ? "Просрочен повторно"
    : ""
);
</script>

<style lang="scss" scoped>
.status-tag {
  border-radius: var(--br-5xl);
  border: 1px solid rgba(0, 0, 0, 0.03);
  display: flex;
  align-items: center;
  font-family: Inter, "Source Sans Pro";
  font-size: 0.8125rem;
  font-weight: 500;
  height: 3.078em;
  justify-content: center;
  line-height: 1.75;
  position: relative;
  white-space: nowrap;
  width: 77vw;
  cursor: pointer;
  &_approved {
    background: rgba(229, 254, 229, 1);
    color: rgba(28, 189, 98, 1);
  }
  &_reject {
    background: rgba(255, 234, 228, 1);
    color: rgba(254, 59, 48, 1);
  }
  &_pending {
    background: rgba(242, 235, 247, 1);
    color: rgba(168, 101, 255, 1);
  }
  &_forsales {
    background: rgba(253, 214, 116, 0.2);
    color: rgba(255, 153, 1, 1);
  }
}
</style>
