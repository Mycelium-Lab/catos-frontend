<template>
  <div :class="desktop ? 'chips-wrapper' : 'chips-wrapper_mobile'">
    <span class="choise-title"> Выбор сортировки: </span>
    <ul class="sort-list">
      <li class="chips_add chips">
        <div class="edit-field">Создать</div>
        <img
          class="chip-icon"
          src="@/assets/images/iconsadd.svg"
          @click="
            () => {
              desktop ? handleEdit(true) : activeEdit(true);
              activeChip = -1;
            }
          "
        />
      </li>
      <li
        v-for="(chip, i) in chips"
        key="chip"
        class="chips"
        :class="activeChip === i ? 'chips_active' : ''"
        @click="() => (activeChip = i)"
      >
        <div class="edit-field">
          {{ chip }}
        </div>
        <img
          class="chip-icon"
          @click="() => (desktop ? handleEdit(true) : activeEdit(true))"
          src="@/assets/images/iconseditoutline-black.svg"
        />
      </li>
    </ul>
  </div>

  <edit-filter-window
    v-if="isEdit && desktop"
    isCreateMode
    @close="() => (isEdit = false)"
  ></edit-filter-window>
</template>

<script setup lang="ts">
import { ref } from "vue";
const chips = ["Транзакция 2", "Сортировка 1"];
const activeChip = ref(-1);
const isEdit = ref(false);
const isCreateMode = ref(false);
import editFilterWindow from "../base/desktop/edit-filter-window.vue";

const { desktop } = defineProps({
  desktop: { type: Boolean, default: false },
});

const handleEdit = (isCreate: any) => {
  if (isCreate) {
    isCreateMode.value = true;
  }
  isEdit.value = true;
};
const emit = defineEmits(["onEdit"]);

const activeEdit = (isCreate: any) => {
  emit("onEdit", isCreate);
};
</script>

<style scoped lang="scss">
.choise-title {
  font-size: var(--font-size-sm);
  font-weight: 300;
  color: #2e3a59;
}
.sort-list {
  padding-left: 0em;
  margin-bottom: 2em;
  display: flex;
  justify-content: space-between;
  list-style: none;
  gap: 0.8em;
  overflow-x: auto;
  margin-bottom: 0em;
}
.sort-list::-webkit-scrollbar {
  width: 0;
}
.chips {
  border-radius: 24.18px;
  background: #ffffff;
  font-size: var(--font-size-sm);
  padding: 0.43857143em 0.85714286em;
  color: #2e3a59;
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.05);
  white-space: nowrap;
  font-weight: 400;
  position: relative;
  height: 28px;
  gap: 1em;
  & input {
    outline: none;
    background: transparent;
    border: none;
    position: relative;
    z-index: 100;
  }
  & .edit-field {
    outline: none;
  }
  &_add {
    background: #e4e0f1;
    border: none;
  }
  &_active {
    background: #a865ff;
    color: #ffffff;
  }
}
.edit-widnow {
  position: relative;
  width: 77vw;
  border: 13px;
  z-index: 1000;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0px 12px 12px rgba(151, 71, 255, 0.04);
}
.chips-wrapper_mobile {
  margin-top: 60px;
}
.chip-icon {
  cursor: pointer;
}
.chips-wrapper_mobile {
  width: 90vw;
  position: relative;
  margin: 0 auto;
  margin-top: 3.8em;
}
@media (min-width: 500px) {
  .sort-list {
    justify-content: initial;
  }
}
</style>
