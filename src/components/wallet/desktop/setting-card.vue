<template>
  <div class="field-buttons-desktop">
    <div class="field-button" @click="toChecks">
      <div class="div">Чеки</div>
      <img class="iconchange" alt="" src="@/views/public/iconchange.svg" />
    </div>
    <div class="field-button" @click="toAccounts">
      <div class="div">Счета</div>
      <img class="iconchange" alt="" src="@/views/public/iconchange.svg" />
    </div>
    <div class="field-button" @click="toTransactioHistory">
      <div class="div">История транзакций</div>
      <img class="iconchange" alt="" src="@/views/public/iconchange.svg" />
    </div>
    <div class="tags-grey">
      <img class="bg-hover-icon" alt="" src="@/views/public/iconchange.svg" />
      <b class="tag">Кредитор</b>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const toChecks = () => {
  router.push({ name: "checks" });
};
const toAccounts = () => {
  router.push({ name: "accounts" });
};
const toTransactioHistory = () => {
  router.push({ name: "transaction-history" });
};
</script>
<style scoped>
.div {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  z-index: 0;
}
.iconchange {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  top: 0em;
  right: 0em;
  bottom: 0em;
  max-height: 100%;
  width: 2.5em;
  z-index: 1;
  cursor: pointer;
}
.field-button {
  align-self: stretch;
  border-radius: 8px;
  background-color: #f5f5fa;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0em 0.5em 0.75em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  cursor: pointer;
}
.bg-hover-icon {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 8px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.tag {
  position: absolute;
  top: calc(50% - 11px);
  left: 1.21em;
  font-size: 0.88em;
  line-height: 1.5em;
}
.tags-grey {
  position: relative;
  width: 6.25em;
  height: 2.25em;
  display: none;
  text-align: center;
  color: #8181a5;
  font-family: Lato;
}
.field-buttons-desktop {
  position: relative;
  border-radius: 16px;
  background-color: #fff;
  border: 0.5px solid rgba(46, 58, 89, 0.08);
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  align-items: center;
  justify-content: flex-start;
  gap: 1em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
.scan-footer {
  color: rgba(59, 59, 59, 0.7);
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-weight: 300;
  line-height: 130%;
  width: 440px;
}
.div1 {
  font-size: 0.88em;
  line-height: 130%;
}
.buttonnext1 {
  align-self: stretch;
  border-radius: 20px;
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  color: rgba(38, 38, 38, 0.62);
  cursor: pointer;
}
.div2 {
  /* left: 12.79em; */
  font-size: 0.75em;
  text-decoration: underline;
  letter-spacing: 0.01em;
  line-height: 130%;
  color: rgba(87, 126, 247, 0.96);
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
}
</style>
