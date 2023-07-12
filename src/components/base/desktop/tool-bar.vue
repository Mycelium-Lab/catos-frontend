<template>
  <div class="filter-group">
    <div class="filter-container">
      <img
        class="filter-item"
        alt=""
        src="@/assets/desktop/filter.svg"
        @click="() => (isFilter = true)"
      />
      <div v-if="variant === 'loans'" class="div4">
        <span>Скачать </span>
        <span class="span">(1)</span>
      </div>
      <div v-else class="div4">
        <span>Фильтр </span>
        <span class="span" @click="() => (isFilter = true)">(1)</span>
      </div>
    </div>
    <div v-if="variant !== 'bids'" class="filter-container">
      <img
        class="menu-2-icon"
        alt=""
        src="@/assets/desktop/sort.svg"
        @click="() => (isSort = true)"
      />
      <div class="div5">
        <span>Сортировка </span>
        <span class="span1" @click="() => (isSort = true)">(1)</span>
      </div>
    </div>
  </div>
  <filter-desktop
    v-if="isFilter"
    @close="() => (isFilter = false)"
  ></filter-desktop>
  <sort v-if="isSort" @close="() => (isSort = false)">
    <template v-slot:title>Фильтр / Сортировка</template>
    <template v-slot:select>
      <cp-select-sort
        v-if="role === 'creditor' && variant === 'pulls'"
      ></cp-select-sort>
    </template>

    <template v-slot:left-option>
      <bp-left-option-sort
        v-if="
          (role === 'borrower' && variant === 'pulls') ||
          role === 'depositor' ||
          role === 'creditor'
        "
      ></bp-left-option-sort>
      <bl-left-option-sort
        v-if="role === 'borrower' && variant === 'loans'"
      ></bl-left-option-sort>
      <cl-left-option-sort
        v-if="role === 'creditor' && variant === 'loans'"
      ></cl-left-option-sort>
      <mu-left-option-sort
        v-if="variant === 'manage-user'"
      ></mu-left-option-sort>
      <mp-left-option-sort
        v-if="variant === 'manage-pulls'"
      ></mp-left-option-sort>
      <ml-left-option-sort
        v-if="variant === 'manage-loans'"
      ></ml-left-option-sort>
      <ml-left-option-sort v-if="role === 'collector'"></ml-left-option-sort>
    </template>
    <template v-slot:right-option>
      <bp-right-option-sort
        v-if="
          (role === 'borrower' && variant === 'pulls') ||
          role === 'depositor' ||
          role === 'creditor'
        "
      ></bp-right-option-sort>
      <bl-right-option-sort
        v-if="role === 'borrower' && variant === 'loans'"
      ></bl-right-option-sort>
      <cl-right-option-sort
        v-if="role === 'creditor' && variant === 'loans'"
      ></cl-right-option-sort>
      <mu-right-option-sort
        v-if="variant === 'manage-user'"
      ></mu-right-option-sort>
      <mp-right-option-sort
        v-if="variant === 'manage-pulls'"
      ></mp-right-option-sort>
      <ml-right-option-sort
        v-if="variant === 'manage-loans'"
      ></ml-right-option-sort>
      <ml-right-option-sort v-if="role === 'collector'"></ml-right-option-sort>
    </template>
    <template v-slot:action>Применить и сохранить фильтр</template>
  </sort>
</template>

<script setup lang="ts">
import { ref } from "vue";
import filterDesktop from "@/components/pulls/filter-desktop.vue";
import sort from "@/components/base/desktop/sort.vue";
import blLeftOptionSort from "@/components/loans/borrower/desktop/modal-body/bl-left-option-sort.vue";
import clLeftOptionSort from "@/components/loans/creditor/desktop/modal-body/cl-left-option-sort.vue";
import blRightOptionSort from "@/components/loans/borrower/desktop/modal-body/bl-right-option-sort.vue";
import clRightOptionSort from "@/components/loans/creditor/desktop/modal-body/cl-right-option-sort.vue";
import cpSelectSort from "@/components/pulls/creditor/desktop/modal-body/cp-select-sort.vue";
import muLeftOptionSort from "@/components/admin/desktop/modal-body/mu-left-option-sort.vue";
import muRightOptionSort from "@/components/admin/desktop/modal-body/mu-right-option-sort.vue";
import mpLeftOptionSort from "@/components/admin/desktop/modal-body/mp-left-option-sort.vue";
import mpRightOptionSort from "@/components/admin/desktop/modal-body/mp-right-option-sort.vue";
import mlLeftOptionSort from "@/components/admin/desktop/modal-body/ml-left-option-sort.vue";
import mlRightOptionSort from "@/components/admin/desktop/modal-body/ml-right-option-sort.vue";
import bpLeftOptionSort from "@/components/pulls/borrower/desktop/modal-body/bpLeftOptionSort.vue";
import bpRightOptionSort from "@/components/pulls/borrower/desktop/modal-body/bpRightOptionSort.vue";

const { variant } = defineProps({
  variant: {
    type: String,
    default: "pulls",
  },
  role: {
    type: String,
  },
});

const isFilter = ref(false);
const isSort = ref(false);
</script>

<style scoped>
.filter-group {
  align-self: stretch;
  border-radius: 16px;
  background-color: rgba(246, 244, 252, 0.5);
  display: flex;
  flex-direction: row;
  padding: 0em 2.5em;
  align-items: center;
  justify-content: center;
  gap: 2.5em;
  text-align: left;
  color: #3b3b3b;
  height: 40px;
}
.filter-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.filter-item {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  cursor: pointer;
}
.div4 {
  position: relative;
  font-size: 0.88em;

  line-height: 0.71em;
}
.span {
  cursor: pointer;
  color: #5d83f7;
}
.menu-2-icon {
  cursor: pointer;
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.div5 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
}
.span1 {
  cursor: pointer;
  color: #5d83f7;
}
</style>
