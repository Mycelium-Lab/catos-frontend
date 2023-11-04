<template>
  <div class="div">
    <div :class="back ? 'frame-parent_with_back frame-parent' : 'frame-parent'">
      <div class="frame-wrapper">
        <div v-if="back" class="buttonback" @click="toPannel">
          <div class="div32">Назад</div>
          <img
            class="search-icon"
            alt=""
            src="@/assets/images/search-icon.svg"
          />
        </div>
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
import { useRouter } from "vue-router";
const router = useRouter();
const toPannel = () => {
  router.push({ name: "admin-pannel" });
};
const { back } = defineProps({
  back: { type: Boolean, default: false },
});
</script>

<style scoped lang="scss">
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
  &_with_back {
    margin-bottom: 20em;
  }
}
.frame-wrapper {
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
  margin-top: 2em;
}
.page-title {
  position: relative;
  font-size: 1.75em;
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

  color: #5d83f7;
}
.frame-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.88em;
  text-align: left;
  margin-top: 20px;
}
.div32 {
  position: relative;
  top: 0.7em;
  left: 1.3em;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.search-icon {
  position: absolute;
  top: calc(50% - 20px);
  right: 3.88em;
  border-radius: 10px;
  width: 2.5em;
  height: 2.5em;
  overflow: hidden;
}
.buttonback {
  position: relative;
  height: 2.5em;
  width: 6em;
  top: 0.5em;

  left: 0.4em;
  border-radius: 9px;
  background-color: rgba(251, 251, 251, 0.42);
  cursor: pointer;
}
</style>
