<template>
  <textarea class="catos-textarea" :value="value" :placeholder="placeholder" @input="selected"></textarea>
</template>

<script setup lang="ts">
const { placeholder, value } = defineProps({
  placeholder: {
    type: String,
  },
  type: {
    type: String,
  },
  value: {
    type: String,
  },
});
const emit = defineEmits(["selected"]);
const selected = ($event: Event) => {
  const target = $event.target as HTMLInputElement;
  if (target) {
    emit("selected", target.value);
  }
};
</script>

<style scoped lang="scss">
.catos-textarea {
  border-radius: var(--br-base);
  border: 0.5px solid var(--field-stroke);
  box-sizing: border-box;
  width: 100%;
  height: 4.142857142857143em;
  overflow: hidden;
  font-size: var(--font-size-sm);
  color: rgba(46, 58, 89, 1);
  padding: 1em var(--padding-xs) 0 var(--padding-xs);
  font-weight: 400;
  outline: none;
  line-height: 14px;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  resize: none;
  &::placeholder {
    color: var(--color-darkslategray-300);
    font-weight: 400;
  }
  &:focus {
    font-weight: 600;
    border-color: var(--catos-secondary);
    color: var(--colors-dark-dark-50);
  }
  &:focus::placeholder {
    color: rgba(0, 0, 0, 0.06);
  }
}
</style>
