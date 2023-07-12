<template>
  <div class="div">
    <app-bar></app-bar>
    <div class="frame-parent">
      <div class="frame-wrapper_desktop">
        <div class="page-title-parent">
          <h1 class="page-title"><slot name="title"> </slot></h1>
          <slot name="slider"></slot>

          <div class="tools-parent">
            <slot name="tools"></slot>
          </div>
        </div>
      </div>
      <slot name="body"></slot>
      <div class="frame-div">
        <slot name="list"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import appBar from "@/components/ui-kit/desktop/app-bar.vue";
</script>

<style scoped>
.div {
  background-color: #fff;
  width: 100%;
  overflow: hidden;
  text-align: center;
  color: #3b3b3b;
  font-family: Inter;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 20px;
}
.frame-parent {
  width: 780px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.frame-wrapper_desktop {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.page-title-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.page-title {
  position: relative;
  font-size: 1.75rem;
  letter-spacing: 0.01em;
  line-height: 130%;
  font-weight: 600;
  text-align: left;
  margin: 0em;
}
.tools-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.13em;
  text-align: left;
  width: 780px;
  color: #5d83f7;
  margin: 0 auto;
}
.frame-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.88em;
  text-align: left;
}
</style>
