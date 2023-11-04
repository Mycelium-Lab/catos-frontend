<template>
  <desktop-modal @close="close" :variant="back ? 'back' : ''" :toBack="toBack">
    <template v-slot:title> {{ title }} </template>
    <template v-slot:body>
      <div
        :style="{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }"
      >
        <img width="86" src="@/assets/images/iconsloadpdf.svg" />
        <div class="group-action">
          <catos-button
            variant="fourth"
            :style="{ width: '165px', margin: '0' }"
            >Открыть анкету</catos-button
          >
          <catos-button
            variant="fourth"
            :style="{ width: '165px', margin: '0' }"
            >Скчать анкету</catos-button
          >
        </div>
      </div>
    </template>
  </desktop-modal>
</template>

<script setup lang="ts">
import desktopModal from "@/components/base/desktop-modal.vue";
import CatosButton from "@/components/ui-kit/buttons/catos-button.vue";
const { toBack } = defineProps({
  toBack: { type: Function },
  title: { type: String },
  back: { type: Boolean, default: false },
});
const emits = defineEmits(["close"]);
const close = () => {
  emits("close");
};
</script>

<style scoped>
.group-action {
  display: flex;
  gap: 10px;
}
</style>
