<template>
  <button
    :class="`status-button-option_${Status[variantIndex]}`"
    class="status-button-option"
    @click="() => (isOpen = !isOpen)"
  >
    {{ content }}
    <img
      :class="
        isOpen
          ? 'status-button-option_chevron_open status-button-option_chevron'
          : 'status-button-option_chevron'
      "
      src="../../../assets/images/ui-kit/chevron.svg"
      alt="chevron"
    />
  </button>
  <ul v-if="isOpen" class="status-select">
    <li
      v-for="index in optionsIndex"
      :key="index"
      :id="String(index)"
      :class="`status-option_${Status[index]} status-option`"
      @click="select"
    >
      {{ options[index] }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Status, StatusTranslation } from "@/types/buttons-props";
import { getButtonContent } from "@/utils/getButtonContent";

const { variantIndex } = defineProps({
  variantIndex: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["selected"]);

const isOpen = ref(false);
const index = ref(variantIndex);

const content = computed((): any => {
  const textList = Object.values(StatusTranslation);
  return getButtonContent(textList, index.value);
});
const options = computed(() => {
  const statuses = Object.values(StatusTranslation);
  return statuses.filter(status => status !== Status[index.value]);
});
const optionsIndex = computed(() => {
  const statuses = Object.keys(Status).filter(
    key => !isNaN(Number(key)) && Number(key) !== index.value
  );
  return statuses
    .filter(status => status !== Status[index.value])
    .map(status => Number(status));
});

const select = (ev: any) => {
  isOpen.value = false;
  emit("selected", Number(ev.target.id));
};
</script>

<style lang="scss" scoped>
.status-button-option {
  position: relative;
  border-radius: var(--br-5xl);
  border: 1px solid rgba(0, 0, 0, 0.03);
  display: flex;
  align-items: center;
  font-size: 0.8125rem;
  font-weight: 500;
  height: 3.078em;
  justify-content: center;
  line-height: 1.75;
  margin-right: 8.3rem;
  position: relative;
  white-space: nowrap;
  width: 23.077em;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  &_approve {
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
  &_chevron {
    position: absolute;
    right: 1.142857142857143em;
    &_open {
      transform: rotate(180deg);
      transition: all 0.7s;
    }
  }
}
.status-select {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  align-items: center;
  font-size: 0.8125rem;
  list-style: none;
  margin: 0em;
  margin-top: 0.875rem;
  padding: 0em;
  width: 23.077em;
  cursor: pointer;
}
.status-option {
  text-align: center;
  border: 1px solid rgba(243, 239, 255, 1);
  padding: 0.769230769230769em 0 1.8464em 0;
  width: 89.335%;
  font-weight: 500;
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  &:last-child {
    border-bottom-color: transparent;
  }
  &_approve {
    color: rgba(28, 189, 98, 1);
  }
  &_reject {
    color: rgba(254, 59, 48, 1);
  }
  &_pending {
    color: rgba(168, 101, 255, 1);
  }
}
</style>
