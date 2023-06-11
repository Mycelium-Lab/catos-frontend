<template>
  <div class="wrapper">
    <div class="ui-forms-elements-child"></div>
    <div
      :class="
        translatePosition === 0
          ? 'ui-forms-elements-inner_start'
          : 'ui-forms-elements-inner_end'
      "
      class="ui-forms-elements-inner"
    ></div>
  </div>
</template>

<script setup lang="ts">
const { translatePosition } = defineProps({
  translatePosition: {
    type: Number,
    default: 0,
  },
});
</script>

<style scoped>
.wrapper {
  position: relative;
  top: 1rem;
}
.ui-forms-elements-child,
.ui-forms-elements-item {
  position: absolute;
  height: 0.16%;
  width: 19.65%;
  top: 79.02%;
  right: 68.75%;
  bottom: 20.82%;
  left: 11.6%;
  border-top: 2px solid var(--color-lavender-100);
  box-sizing: border-box;
}
.ui-forms-elements-item {
  right: 32.57%;
  left: 47.78%;
}
.line-div,
.ui-forms-elements-inner {
  position: absolute;
  top: 0rem;
  left: 9.31rem;
  border-top: 2px solid var(--color-khaki-100);
  box-sizing: border-box;
  width: 9.63rem;
  height: 0.13rem;
}
.line-div {
  top: 0rem;
  left: 51.06rem;
}
.ui-forms-elements-inner_start {
  transform: translateX(0%);
}
.ui-forms-elements-inner_end {
  transform: translateX(100%);
}
.ui-forms-elements {
  position: relative;
  background-color: var(--m3-sys-light-on-primary);
  width: 100%;
  height: 76.56rem;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-gray-100);
  font-family: var(--font-lato);
}
</style>
