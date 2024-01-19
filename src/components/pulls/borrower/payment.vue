<template>
  <div class="header">
    <div class="div8">
      {{ from === "pulls" ? " Кредитные пулы" : "Задолженности" }}
    </div>
  </div>
  <div class="statusapi">
    <div class="status-reg">
      <div class="wrapp">
        <div class="des-and-bbn_text des-and-bbn" id="desAndBbn">
          <div class="text-and-button">
            <div class="buttons-tabs">
              <img
                src="@/assets/images/success-cash.svg"
                :width="54"
                :height="54"
              />
              <div class="status">Выберете способ оплаты</div>
            </div>
          </div>
        </div>
        <div
          class="des-and-bbn_bottom_setting des-and-bbn_bottom des-and-bbn"
          id="desAndBbn"
          @click="
            () => {
              isActive === 0 ? (isActive = -1) : (isActive = 0);
            }
          "
        >
          <catos-checkbox
            variant="radiobutton"
            id="1"
            :select="isActive === 0"
          ></catos-checkbox>
          <label
            >Кошелек Catos

            <div>Balance: 10 273 TON</div>
          </label>
        </div>
        <div
          class="des-and-bbn_bottom_setting des-and-bbn_bottom des-and-bbn"
          @click="
            () => {
              isActive === 1 ? (isActive = -1) : (isActive = 1);
            }
          "
          id="desAndBbn"
        >
          <catos-checkbox
            variant="radiobutton"
            id="2"
            :select="isActive === 1"
          ></catos-checkbox>
          <label
            >Кошелек TONKeeper
            <div>Balance: 10 273 TON</div>
          </label>
        </div>
        <div class="des-and-bbn_bottom des-and-bbn" id="desAndBbn">
          <div class="text-and-button">
            <catos-button
              variant="fourth"
              :style="{ width: '97%', marginBottom: '1em' }"
              @click="toScan"
              :disabled="isActive === -1"
              >Продолжить</catos-button
            >

            <div class="buttos-tabs_action buttons-tabs" @click="toBack">
              <div class="text">Отмена</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, computed } from "vue";

import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import catosCheckbox from "@/components/ui-kit/catos-checkbox.vue";

const isActive = ref(-1);
const router = useRouter();
const bottomSubTitle = computed(() => {
  console.log(window.history.state.bottomSubTitle);
  return window.history.state.bottomSubTitle;
});

const subTitle = computed(() => {
  console.log(window.history.state.subTitle);
  return window.history.state.subTitle;
});

const title = computed(() => {
  return window.history.state.title;
});

const routerName = computed(() => {
  console.log(window.history.state.routerName);
  return window.history.state.routerName;
});
const actionTitle = computed(() => {
  return window.history.state.actionTitle;
});

const from = computed(() => {
  if (window.history.state.from) {
    return window.history.state.from;
  } else {
    return "pulls";
  }
});

const modal = computed(() => {
  return window.history.state.modal;
});

const toScan = () => {
  router.push({
    name: "pulls-borrower-get-loan-scan",
    state: {
      title: title.value,
      subTitle: subTitle.value,
      routerName: routerName.value,
      actionTitle: actionTitle.value,
      bottomSubTitle: bottomSubTitle.value,
      from: from.value,
      modal: modal.value,
    },
  });
};
const toBack = () => {
  router.go(-1);
};
</script>

<style scoped lang="scss">
.div8 {
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-top: 12vh;
}
.decor-2-off,
.iconsstatus-transaction {
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 2;
  top: -11em;
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
  top: 3em;
}
.status-reg {
  position: absolute;
  bottom: 0;
  left: 2vw;
  border-radius: 16px;
  width: 95vw;
  padding: 0.63em 0em;
  box-sizing: border-box;

  background-color: #fff;
  height: 83%;
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
  width: 77.2vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: white;
  border-radius: 16px;
  position: relative;
  margin: 0 auto;
}
.des-and-bbn {
  position: absolute;
  top: 29em;
  left: 18vw;
  width: 61vw;
  padding: 0.75em;
  box-sizing: border-box;
  cursor: pointer;
  text-align: right;
  color: #555562;
  background: rgba(246, 244, 252, 1);
  border-radius: 12px;
  padding: 0.75em;
  box-sizing: border-box;
  cursor: pointer;
  text-align: right;
  color: #555562;
  &_text {
    top: -3em;
    width: 82.4vw;
    left: 0em;
    margin: 0 auto;
    position: relative;
    height: 92px;
    & {
      .buttons-tabs {
        border: none;
        flex-direction: row;
        text-align: center;
        height: 100%;
        align-items: center;
        padding: 0 0.5em;
        width: 100%;
      }

      & .text-and-button {
        top: 0.2em;
        height: 4em;
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
        font-size: 16px;
        font-weight: 500;
        color: rgba(59, 59, 59, 1);
        width: 77vw;
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
  top: -1em;
  & .text-and-button {
    width: 100%;
    background: transparent;
  }
}
.buttos-tabs_action {
  width: 97%;
  text-decoration: none;
  color: rgba(85, 85, 98, 1);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.des-and-bbn_bottom_setting {
  top: -1em;
  background: transparent;
  flex-direction: row;
  border-color: rgba(46, 58, 89, 0.2);
  margin-bottom: 16px;
  align-items: center;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  &:hover {
    background-color: rgba(165, 146, 221, 0.08);
    border-color: rgba(165, 146, 221, 0.4);
  }
  & label {
    text-align: start;
    padding-left: 0.5em;
    & div {
      font-weight: 300;
      font-size: 12px;
      line-height: 16px;
      /* identical to box height, or 133% */

      display: flex;
      align-items: center;

      color: #3b3b3b;
      padding-top: 4px;
    }
  }
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
.wrapp {
  position: relative;
  width: 87.7vw;
  margin: 0 auto;
  border: 1px solid rgba(46, 58, 89, 0.08);
  border-radius: 12px;
  top: 4em;
}
</style>
