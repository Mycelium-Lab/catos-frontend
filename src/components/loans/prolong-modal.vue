<template>
  <div class="statusapi">
    <div class="status-reg">
      <div class="group">
        <div class="div8">{{ title }}</div>
        <img
          class="iconsstatus-transaction"
          alt=""
          :src="getImageUrl()"
          :width="86"
          :height="86"
        />
      </div>
    </div>
    <div class="des-and-bbn_text des-and-bbn" id="desAndBbn">
      <div class="text-and-button">
        <div class="buttons-tabs">
          <div class="status">
            Дата возврата продлена <br />на 15 дней до 29.03.23
          </div>
        </div>
      </div>
    </div>

    <div class="des-and-bbn_bottom des-and-bbn" id="desAndBbn">
      <div class="text-and-button">
        <div
          class="buttos-tabs_action_info buttos-tabs_action buttons-tabs"
          @click="toLoans"
        >
          <div class="text">Посмотреть информацию о займе</div>
        </div>
      </div>
      <div class="text-and-button">
        <div class="buttos-tabs_action buttons-tabs" @click="toLoans">
          <div class="text">Перейти в Мои займы</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
const router = useRouter();
import { ModalImages } from "@/types/modal-props";

const { title, subtitle, variant } = defineProps({
  title: { type: String },

  subtitle: { type: String },
  variant: { type: Number, required: true },
});

const emit = defineEmits(["onModal"]);

const toLoans = () => {
  router.push({ name: "loans-borrower" });
};

const getImageUrl = () => {
  return ModalImages[variant];
};
</script>

<style scoped lang="scss">
.decor-2-off,
.div8 {
  font-size: 16px;
  letter-spacing: 0.01em;
  line-height: 130%;
  font-weight: 400;
}
.iconsstatus-transaction {
  overflow: hidden;
  flex-shrink: 0;
  z-index: 2;
}
.group,
.status-reg {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 21em;
}
.group {
  align-self: stretch;
  justify-content: flex-start;
  gap: 0.75em;
  position: relative;
}
.status-reg {
  position: absolute;
  top: 10em;
  left: 6vw;
  border-radius: 16px;
  width: 87.7vw;
  padding: 3em 0em;
  box-sizing: border-box;

  background-color: #fff;
  height: 387px;
}
.text {
  position: relative;
  font-size: 14px;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.des-and-bbn {
  position: relative;
  color: rgba(87, 126, 247, 0.96);
  top: 28em;
  width: 67.5vw;
  padding: 0.75em;
  box-sizing: border-box;
  cursor: pointer;
  text-align: right;

  margin: 0 auto;
  text-align: center;

  &_text {
    top: 20.5em;
    width: 15em;
    background: #f6f4fc;
    border-radius: 11px;
    margin-top: 18px;
    & {
      .buttons-tabs {
        border: none;
        flex-direction: column;
        text-align: center;
        width: 100%;
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
        font-weight: 400;
        font-size: 12px;
        line-height: 130%;
        color: rgba(59, 59, 59, 0.72);
        width: 100%;
        text-align: center;
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
  width: 77vw;
  margin: 0 auto;
  left: 0em;
  background: #f9fbff;
  border-radius: 14px;
  border: 1px solid rgba(165, 146, 221, 0.1);
  border-radius: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  top: 23em;
  &_setting {
    display: inline-block;
    text-decoration: underline;
    top: 27.5em;
  }
  & .text-and-button {
    width: 100%;
  }
}
.buttos-tabs_action {
  width: 97%;
  text-decoration: none;
  color: rgba(85, 85, 98, 1);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  &_info {
    margin-bottom: 13px;
    background: rgba(87, 126, 247, 0.96);
    color: rgba(254, 254, 254, 1);
    border-radius: 25px;
  }
}
.des-and-bbn_bottom_setting {
  text-align: center;

  font-size: 12px;
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
