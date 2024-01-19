<template>
  <default-desktop-admin back>
    <template v-slot:title> Заявки </template>
    <template v-slot:slider>
      <multi-button-slider
        :style="{ width: '480px', margin: '0em' }"
        @on-slide="handleSlide"
        role="admin"
      ></multi-button-slider>
    </template>
    <template v-slot:tools>
      <input-data
        placeholder="Найти пулы"
        :style="{ width: '542px' }"
        background="#fff"
        left
      >
        <template v-slot:left-icon>
          <img src="@/assets/images/iconssearch.svg" width="20" alt="" />
        </template>
      </input-data>
      <tool-bar variant="bids"></tool-bar>
    </template>
    <template v-slot:body>
      <div class="rectangle-group_desktop rectangle-group">
        <div class="group-item"></div>
        <div class="div8">Новые</div>
        <div class="div9">Одобренные</div>
        <div class="div10">Отклоненные</div>
      </div>
    </template>
    <template v-slot:list>
      <ul>
        <li v-for="n in 6" :key="n">
          <bids-admin-table :variant="currentWindow" :key="currentWindow">
          </bids-admin-table>
        </li>
      </ul>
    </template>
  </default-desktop-admin>
</template>

<script setup lang="ts">
import { ref } from "vue";
//@ts-ignore
import defaultDesktopAdmin from "@/components/layouts/default-desktop-admin.vue";
import multiButtonSlider from "@/components/ui-kit/buttons/multi-button-slider.vue";
import inputData from "@/components/fields/input-data.vue";
import bidsAdminTable from "@/components/admin/desktop/bids-admin-table.vue";
import ToolBar from "@/components/base/desktop/tool-bar.vue";

const currentWindow = ref("borrower");
const handleSlide = (index: any) => {
  if (index === 0) {
    currentWindow.value = "borrower";
  } else if (index === 1) {
    currentWindow.value = "creditor";
  } else if (index === 2) {
    currentWindow.value = "depositor";
  } else if (index === 3) {
    currentWindow.value = "redeemed";
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0em;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0;
}
.menu-2-parent {
  flex: 1;
  border-radius: 15px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.75em;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  color: #3b3b3b;
  border-radius: 16px;
  background: rgba(246, 244, 252, 0.5);
}
.iconscalendar {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.div1 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
}
.span {
  text-decoration: underline;
  color: #5d83f7;
}
.rectangle-group {
  position: relative;
  top: 24em;
  /* left: 1.5em; */
  width: 87.4vw;
  height: 3em;
  text-align: right;
  overflow-x: auto;
  color: rgba(59, 59, 59, 0.7);
  margin: 0 auto;
  padding: 0px;
}
.rectangle-group::-webkit-scrollbar {
  width: 0;
}
.group-item {
  position: absolute;
  top: 1.19em;
  left: 0;
  border-radius: 14px;
  background-color: #a592dd;
  width: 1.94em;
  height: 0.25em;
}
.div10,
.div11,
.div8,
.div9 {
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  cursor: pointer;
}
.div8 {
  left: 0.14em;
  font-weight: 500;
  color: #3b3b3b;
}
.div10,
.div11,
.div9 {
  left: 3.14em;
}
.div10,
.div11 {
  left: 9.64em;
}
@media (min-width: 500px) {
  .rectangle-group {
    top: 0;
    height: 1.5em;
    display: flex;
    gap: 30px;
  }
}
</style>
