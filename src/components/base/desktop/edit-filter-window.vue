<template>
  <div class="edit-widnow_mobile">
    <p class="edit-widnow_title">
      {{ isCreateMode ? "Создание фильтра:" : "Переименовать фильтр:" }}
    </p>
    <input-data
      placeholder="Название фильтра"
      :style="{ background: '#fff', borderRadius: '12px' }"
    >
      <template v-slot:right-icon>
        <img src="@/assets/images/iconseditoutline-black.svg" />
      </template>
    </input-data>
    <span class="text-require">Допустимое количество символов 16</span>
    <div class="btn-group_mobile">
      <catos-button
        variant="fourth"
        @click="close"
        :style="{ margin: '0', width: '121px' }"
        >Сохранить</catos-button
      >
      <button class="edit-widnow_close" @click="close">
        <span>Отмена</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import inputData from "../../fields/input-data.vue";
import CatosButton from "../../ui-kit/buttons/catos-button.vue";

const emits = defineEmits(["close"]);
const { isCreateMode } = defineProps({
  isCreateMode: {
    type: Boolean,
  },
});

const close = () => {
  emits("close");
};
</script>

<style scoped lang="scss">
/*.edit-widnow-overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1000;
}*/
.edit-widnow_mobile {
  background: #f6f4fc;
  position: absolute;
  width: 330px;
  top: 180px;
  border-radius: 13px;
  z-index: 1000;

  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0px 12px 12px rgba(151, 71, 255, 0.04);

  padding: 32px 21px 30px 21px;
  &_title {
    text-align: center;
    color: rgba(59, 59, 59, 1);
    font-size: 14px;
  }
  .text-require {
    display: inline-block;
    text-align: center;
    font-size: 13px;
    color: rgba(59, 59, 59, 0.3);
    font-weight: 300;
    padding-top: 8px;
    width: 100%;
  }
  .btn-group_mobile {
    display: flex;
    margin: 0 auto;
    padding-top: 28px;
    gap: 30px;
  }
  &_close {
    border: none;
    background-color: transparent;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    padding-top: 14px;
    color: rgba(0, 0, 0, 0.5);
  }
}
.edit-widnow_close {
  border: none;
  background: none;
  cursor: pointer;
  color: #8181a5;
  text-align: right;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}
.edit-widnow_title {
  margin-top: 0;
}
</style>
