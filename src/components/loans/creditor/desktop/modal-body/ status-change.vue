<template>
  <desktop-modal @close="close">
    <template v-slot:title>{{
      variant === "collector" ? "Изменить статус ?" : "Что выполнить ?"
    }}</template>
    <template v-slot:body>
      <div class="frame-parent">
        <div v-if="variant === 'loans'" class="wrapper">
          <div class="div">
            <span>Изменить статус для </span>
            <span class="span">{{ amount }}</span>
            <span> займов:</span>
          </div>
        </div>
        <div class="status-all-parent">
          <button class="status-all" @click="updateStatus">
            <div class="colors-graphsorders-parent">
              <img
                class="colors-graphsorders-icon"
                alt=""
                src="@/assets/images/colors-graphsorders1.svg"
              />
              <div class="div1">
                {{
                  variant === "collector"
                    ? "Погашена"
                    : "Одобрить выбранные заявки"
                }}
              </div>
            </div>
          </button>
          <button class="status-all" @click="updateStatus">
            <div class="colors-graphsorders-parent">
              <img
                class="colors-graphsorders-icon"
                alt=""
                src="@/assets/images/colors-graphsorders3.svg"
              />
              <div class="div1">
                {{
                  variant === "collector"
                    ? "Не погашена"
                    : "Отклонить выбранные заявки"
                }}
              </div>
            </div>
          </button>
          <button
            v-if="variant === 'loans'"
            class="status-all"
            @click="updateStatus"
          >
            <div class="colors-graphsorders-parent">
              <img
                class="colors-graphsorders-icon"
                alt=""
                src="@/assets/images/colors-graphsorders4.svg"
              />
              <div class="div1">Оставить в ожидании</div>
            </div>
          </button>
        </div>
      </div>
    </template>
  </desktop-modal>
</template>
<script setup lang="ts">
import desktopModal from "@/components/base/desktop-modal.vue";
const emtis = defineEmits(["close"]);

const { variant } = defineProps({
  variant: {
    type: String,
    default: "loans",
  },
  amount: {
    type: Number
  }
});
const updateStatus = () => {
  //TODO: Добавить логику по смене статуса
  close();
};
const close = () => {
  emtis("close");
};
</script>
<style scoped>
.span {
  text-decoration: underline;
  color: rgba(87, 126, 247, 0.96);
}
.div {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.wrapper {
  width: 18.75em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.colors-graphsorders-icon {
  position: relative;
  width: 1em;
  height: 1em;
}
.div1 {
  position: relative;
  font-size: 0.88rem;
  line-height: 130%;
}
.colors-graphsorders-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.31em;
}
.status-all {
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  border: none;
  color: #3b3b3b;
}
.status-all-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
  color: #3b3b3b;
}
.frame-parent {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
  text-align: left;
  color: #2e3a59;
  font-family: Inter;
}
</style>
