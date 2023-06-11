<template>
  <button
    :class="`button-icon_${ButtonIconVariant[variant]} button-icon`"
    @click="handleClick"
  >
    {{ content }}
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import {
  ButtonIconTranslation,
  ButtonIconVariant,
} from "@/types/buttons-props";
import { getButtonContent } from "@/utils/getButtonContent";
const { variant } = defineProps({
  variant: {
    type: Number,
    default: 6,
  },
});
const emit = defineEmits(["clicked"]);
const active = ref(false);
const content = computed((): any => {
  const textList = Object.values(ButtonIconTranslation);
  return getButtonContent(textList, variant);
});
const handleClick = () => {
  active.value = true;
  if (
    ButtonIconVariant[variant] !== "copy" &&
    ButtonIconVariant[variant] !== "share"
  ) {
    return;
  }
  const pase = ButtonIconVariant[variant] === "share" ? 2 : 4;
  emit("clicked", pase);
};
</script>

<style lang="scss">
.button-icon {
  padding: 0em;
  padding-right: 0.33em;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  gap: 0.428em;
  &_back {
    width: 2.5rem;
    height: 2.5rem;
    background: rgba(245, 249, 255, 1);
    border: 1px solid rgba(46, 58, 89, 0.04);
    border-radius: 9px;
    &:hover {
      background: rgba(251, 251, 251, 0.42);
      cursor: pointer;
    }
    &_with_text {
      justify-content: flex-end;
      font-family: var(--inter-small-12);
      font-size: var(--font-size-sm);
      font-weight: 300;
      width: 6.375rem;
      height: 2.5rem;
      background: none;
      border-radius: 9px;
      & img {
        border: 1px solid rgba(46, 58, 89, 0.04);
        border-radius: 10px;
        background: rgba(245, 249, 255, 1);
        padding: 0.93em 1.323571428571429em 0.93em 0.9em;
      }
      &:hover {
        background: rgba(251, 251, 251, 0.42);
        cursor: pointer;
      }
      &:hover img {
        background: rgba(242, 242, 246, 1);
        cursor: pointer;
      }
    }
  }
  &_share,
  &_sharied {
    font-family: var(--inter-small-12);
    font-size: var(--font-size-xs);
    color: rgba(59, 59, 59, 0.8);
    width: 11.167em;
    height: 2.667em;
    border-radius: 7px;
    background: rgba(165, 146, 221, 0.1);
  }
  &_sharied {
    background: rgba(168, 101, 255, 1);
    color: rgba(239, 239, 239, 0.93);
  }
  &_sharied path {
    fill: rgba(239, 239, 239, 0.93);
  }
  &_copy,
  &_copied {
    font-family: var(--inter-small-12);
    font-size: var(--font-size-xs);
    color: rgba(59, 59, 59, 0.8);
    width: 11.167em;
    height: 2.667em;
    border-radius: 7px;
    background: rgba(165, 146, 221, 0.1);
  }
  &_copied {
    background: rgba(153, 238, 191, 1);
  }
  &_topulls {
    flex-direction: row;
    justify-content: space-around;
    padding: 0 2.2em 0 1.5em;
    cursor: pointer;
    color: var(--color-darkslategray-100);
    font-family: var(--inter-small-12);
    font-size: var(--font-size-sm);
    width: 24.429em;
    height: 3.715em;
    border-radius: 18px;
    border: 0.5px solid rgba(46, 58, 89, 0.2);
    background: #fbf9fc;
    &:hover {
      background: rgba(193, 172, 255, 0.2);
    }
  }
}
</style>
