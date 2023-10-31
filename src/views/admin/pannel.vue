<template>
  <default-desktop-admin>
    <template v-slot:title> Панель администратора </template>
    <template v-slot:body>
      <kanban-board></kanban-board>
      <manage-board></manage-board>
    </template>
  </default-desktop-admin>
</template>

<script setup lang="ts">
//@ts-ignore
import defaultDesktopAdmin from "@/components/layouts/default-desktop-admin.vue";
//@ts-ignore
import KanbanBoard from "../../components/admin/kanban-board.vue";
import manageBoard from "../../components/admin/manage-board.vue";
</script>

<style scoped></style>
