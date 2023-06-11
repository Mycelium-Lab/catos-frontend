<template>
  <button :class="`status-button_${variant}`" class="status-button">
    {{ content }}
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
const { variant } = defineProps({
  variant: {
    type: String,
    default: "approve",
  },
});

const content = computed(() =>
  variant === "approve"
    ? "Одобрить выбранные заявки"
    : variant === "reject"
    ? "Отклонить выбранные заявки"
    : variant === "pending"
    ? "Оставить в ожидании"
    : ""
);
</script>

<style lang="scss" scoped>
.status-button {
  border-radius: var(--br-5xl);
  border: 1px solid rgba(0, 0, 0, 0.03);
  display: flex;
  align-items: center;
  font-family: Inter, "Source Sans Pro";
  font-size: var(--font-size-sm);
  font-weight: 500;
  height: 2.858em;
  justify-content: center;
  line-height: 1.75;
  margin-right: 8.3rem;
  position: relative;
  white-space: nowrap;
  width: 21.429em;
  cursor: pointer;
  &_approve {
    background: rgba(229, 254, 229, 1);
    color: rgba(28, 189, 98, 1);
    &:hover {
      background: rgba(112, 202, 152, 1);
      color: rgba(255, 255, 255, 1);
    }
  }
  &_reject {
    background: rgba(255, 234, 228, 1);
    color: rgba(254, 59, 48, 1);
    &:hover {
      background: rgba(255, 0, 0, 1);
      color: rgba(255, 255, 255, 1);
    }
  }
  &_pending {
    background: rgba(242, 235, 247, 1);
    color: rgba(168, 101, 255, 1);
    &:hover {
      background: rgba(168, 101, 255, 1);
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
