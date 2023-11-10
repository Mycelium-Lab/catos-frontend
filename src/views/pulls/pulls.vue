<template>
     <ul class="list-desktop">
        <li
            v-for="pool in poolListStore.pools"
            :key="pool.id"
        >
        <pulls-table
            :role="role"
            :variant="variant"
            :key="variant"
            :pool="pool"
        ></pulls-table>
        </li>
      </ul>
</template>

<script setup lang="ts">
import pullsTable from "@/components/pulls/desktop/pulls-table.vue";
import { usePoolListStore } from "@/stores/poolList";
const poolListStore = usePoolListStore();

const { variant, role } = defineProps({
  variant: {
    type: String,
  },
  role: {
    type: String,
  },
});
</script>

<style scoped lang="scss">
.list-desktop {
  list-style: none;
  padding: 0em;
  display: flex;
  flex-wrap: wrap;
  gap: 38px 20px;
}
</style>