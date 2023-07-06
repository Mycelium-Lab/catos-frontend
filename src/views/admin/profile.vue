<template>
  <default-desktop-admin back>
    <template v-slot:title> Профиль администратора </template>
    <template v-slot:body>
      <profile-board></profile-board>
      <edit-card></edit-card>
      <manage-board></manage-board>
    </template>
  </default-desktop-admin>
</template>

<script setup lang="ts">
//@ts-ignore
import defaultDesktopAdmin from "@/components/layouts/default-desktop-admin.vue";
//@ts-ignore
import profileBoard from "../../components/admin/profile-board.vue";
//@ts-ignore
import editCard from "@/components/setting/desktop/edit-card.vue";
//@ts-ignore
import manageBoard from "../../components/admin/manage-board.vue";
</script>

<style scoped></style>
