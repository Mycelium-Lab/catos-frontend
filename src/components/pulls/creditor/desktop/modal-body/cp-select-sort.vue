<template>
  <label class="label">Токену:</label>
  <catos-select
    placeholder="Выберите токен"
    :options="options"
    :value="valueToken"
    :optionWidth="87.7"
    @selected="ev => (valueToken = ev)"
  ></catos-select>
</template>

<script setup lang="ts">
import { ref } from "vue";
import catosSelect from "@/components/fields/catos-select.vue";
const valueToken = ref("");
const valuePlace = ref("");
const valueStatus = ref("");
const options = ["Россия", "Украина", "Казахстан", "Белорусь"];
</script>

<style scoped></style>
