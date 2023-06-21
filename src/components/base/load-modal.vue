<template>
  <div class="statusapi">
    <div
      class="status-reg"
      :style="variant === 'form' ? { height: '331px' } : { height: '282px' }"
    >
      <div class="group">
        <div class="div8">
          {{
            variant === "form" ? "Анкета заявителя" : "Скачать таблицу в СVS"
          }}
        </div>
        <img
          class="iconsstatus-transaction"
          alt=""
          src="@/assets/images/iconsloadpdf.svg"
          :width="86"
          :height="86"
        />
      </div>
    </div>

    <div class="des-and-bbn_bottom des-and-bbn" id="desAndBbn">
      <div class="text-and-button">
        <catos-button
          v-if="variant === 'table'"
          variant="fourth"
          :style="{ width: '97%', marginBottom: '1em' }"
          @click="toWallet"
          >Скачать таблицу</catos-button
        >
        <catos-button
          v-if="variant === 'form'"
          variant="fourth"
          :style="{ width: '97%', marginBottom: '1em' }"
          @click="toWallet"
          >Скачать анкету</catos-button
        >

        <catos-button
          variant="fourth"
          v-if="variant === 'form'"
          :style="{ width: '97%', marginBottom: '1em' }"
          @click="toWallet"
          >Открыть анкету</catos-button
        >

        <div class="buttos-tabs_action buttons-tabs" @click="close">
          <div class="text">Закрыть</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
const router = useRouter();

const props = defineProps({
  variant: { type: String },
});

const emmit = defineEmits(["onClose"]);

const close = () => {
  emmit("onClose");
};
const toWallet = () => {
  router.push({ name: "wallet" });
};
</script>

<style scoped lang="scss">
.decor-2-off,
.div8 {
  align-self: stretch;
  position: relative;
  font-size: 16px;
  letter-spacing: 0.01em;
  line-height: 130%;
  font-weight: 500;
  top: -1.5em;
}
.iconsstatus-transaction {
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 2;
  top: -1em;
}
.group,
.status-reg {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.group {
  align-self: stretch;
  justify-content: flex-start;
  gap: 0.75em;
  position: relative;
  top: 3em;
}
.status-reg {
  position: absolute;
  top: 10em;
  left: 6vw;
  border-radius: 16px;
  width: 87.7vw;
  padding: 0.63em 0em;
  box-sizing: border-box;

  background-color: #fff;
}
.text {
  position: relative;
  font-size: 14px;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.buttons-tabs {
  align-self: stretch;
  border-radius: 25px;
  border: 0.5px solid rgba(87, 126, 247, 0.96);
  box-sizing: border-box;
  height: 32px;
  display: flex;
  flex-direction: row;
  width: 55vw;

  align-items: center;
  justify-content: center;
}
.des-and-bbn,
.text-and-button {
  width: 17.25em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.des-and-bbn {
  position: absolute;
  top: 22em;
  left: 18vw;

  width: 61vw;

  padding: 0.75em;
  box-sizing: border-box;
  cursor: pointer;
  text-align: right;
  color: #555562;
  &_text {
    top: 20em;
    & {
      .buttons-tabs {
        border: none;
        flex-direction: column;
        text-align: center;
      }
      a {
        text-align: center;
        text-decoration: underline;
        color: rgba(87, 126, 247, 0.96);
        font-size: 12px;
        font-weight: 500;
        position: relative;
        top: 1em;
        width: 77vw;
        left: 2vw;
      }
      .count {
        font-size: 16px;
        font-weight: 600;
        top: -0.6em;
        position: relative;
        left: 0.6em;
      }
      .status {
        font-size: 12px;
        font-weight: 400;
        color: rgba(59, 59, 59, 0.72);
        width: 77vw;
        text-align: center;
        padding-left: 2em;
      }
    }
  }
}
.statusapi {
  position: fixed;

  background: rgba(166, 146, 221, 0.2);
  backdrop-filter: blur(2px);
  width: 100%;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  color: #3b3b3b;
  font-family: Inter;
  top: 0em;
  z-index: 20000;
}
.des-and-bbn_bottom {
  position: relative;
  width: 44.4vw;
  margin: 0 auto;
  left: 0em;
  border-radius: 14px;
  border-radius: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding: 0em;
  & .text-and-button {
    width: 100%;
  }
}
.buttos-tabs_action {
  width: 97%;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  border: none;
}
.des-and-bbn_bottom_setting {
  top: 26em;
}

.fieldsinput-parent {
  border-radius: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 0.63em;
}
.fieldsinput {
  align-self: stretch;
  display: flex;
  flex-direction: column;
}
.fieldsinput {
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
  width: 100%;
  z-index: 0;
  margin-top: 20px;
}
.div16 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
}
.min-10-ton-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 1;
  text-align: center;
}
.min-10-ton-container {
  position: relative;
  font-size: 0.63em;
  line-height: 1em;
  font-weight: 300;
}
.span8 {
  color: rgba(165, 146, 221, 0.7);
}
.ton1 {
  color: #a592dd;
}

.span10 {
  font-weight: 300;
}
.ton4 {
  text-decoration: underline;
  color: rgba(87, 126, 247, 0.96);
}
</style>
