<template>
  <default-desktop>
    <template v-slot:title> Дашбоард </template>
    <template v-slot:tools>
      <div class="frame-parent">
        <div class="frame-group">
          <div class="frame-wrapper">
            <div class="frame-container">
              <div class="search-parent">
                <!--<div class="search">
                  <img class="search-icon" alt="" src="/search.svg" />
                  <div class="div">Найти пул</div>
                </div>-->
                <input-data
                  placeholder="Найти пулы"
                  :style="{ width: '418px' }"
                  background="#fff"
                  left
                >
                  <template v-slot:left-icon>
                    <img
                      src="@/assets/images/iconssearch.svg"
                      width="20"
                      alt=""
                    />
                  </template>
                </input-data>
                <div class="frame-div">
                  <input-data
                    type="date"
                    placeholder="01.02.2022"
                    :value="date"
                    @selected="(e: any) => (date = e)"
                  ></input-data>
                  <div class="menu-2-parent">
                    <img
                      class="iconscalendar"
                      alt=""
                      src="@/assets/desktop/sort.svg"
                    />
                    <div class="div1">
                      <span>Фильтр </span>
                      <span class="span">(1)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="component-25-wrapper" @click="toPulls">
            <div class="component-25">
              <div class="div3">Выбрать другой пул</div>
              <img
                class="iconscalendar"
                alt=""
                src="@/assets/images/chevron-right.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:body>
      <ul>
        <li v-for="n in 1" :key="n">
          <chartFrame serial="n"></chartFrame>
        </li>
      </ul>
    </template>
  </default-desktop>
</template>

<script setup lang="ts">
import { ref } from "vue";
// @ts-ignore
import defaultDesktop from "@/components/layouts/default-desktop.vue";
// @ts-ignore
import chartFrame from "@/components/dashboard/desktop/chart-frame.vue";
// @ts-ignore
import inputData from "@/components/fields/input-data.vue";
// @ts-ignore

import { useRouter } from "vue-router";

const date = ref("");
const router = useRouter();
const toPulls = () => {
  router.push({ name: "pulls" });
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0em;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.search-icon {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
}
.div {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
  font-weight: 300;
}
.search {
  border-radius: 14px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  width: 26.13em;
  display: flex;
  flex-direction: row;
  padding: 0.88em 0.75em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
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
.iconscalendar-parent {
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
}
.span {
  text-decoration: underline;
  color: #5d83f7;
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
}
.frame-div {
  flex: 1;
  border-radius: 16px;
  background-color: rgba(246, 244, 252, 0.5);
  height: 3em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.25em;
  color: #1f1f1f;
}
.search-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.frame-container {
  align-self: stretch;
  border-radius: 15px 15px 0px 0px;
  background-color: #f6f4fc;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-wrapper {
  position: absolute;
  top: 0em;
  left: 0em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.div3 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.component-25 {
  align-self: stretch;
  border-radius: 18px;
  background-color: rgba(193, 172, 255, 0.2);
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  height: 3.25em;
  display: flex;
  flex-direction: row;
  padding: 1.78em 1.63em;
  align-items: center;
  justify-content: center;
  gap: 0.63em;
}
.component-25-wrapper {
  position: absolute;
  top: 6.75em;
  left: 0em;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0em 1.25em 1.25em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  color: #3b3b3b;
  cursor: pointer;
}
.frame-group {
  border-radius: 15px;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  width: 780px;
  height: 180px;
  overflow: hidden;
}
.frame-parent {
  position: relative;
  width: 100%;
  height: 11.25em;
  text-align: left;
  color: rgba(0, 0, 0, 0.4);
  font-family: Inter;
}
</style>
