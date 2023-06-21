<template>
  <div class="statusapi">
    <div class="status-reg">
      <div class="wrapp">
        <div class="des-and-bbn_text des-and-bbn" id="desAndBbn">
          <div class="text-and-button_top text-and-button">
            <div class="buttons-tabs_top buttons-tabs">
              <img
                src="@/assets/images/change-cash.svg"
                :width="54"
                :height="54"
              />
              <div class="status">Изъятие ликвидности из пулла #12345</div>
            </div>
          </div>
        </div>
        <div class="wallet-state">
          <div class="wallet-state_balance">
            <span>Баланс кошелька:</span>
            <span>640 000 TON</span>
          </div>
          <div class="wallet-state_address">
            <span>Ваш кошелек: EQB%...dzE1h</span>
            <span>(Изменить)</span>
          </div>
        </div>
        <div
          class="des-and-bbn_bottom_setting des-and-bbn_bottom des-and-bbn"
          id="desAndBbn"
        >
          <div class="text-and-button_action text-and-button">
            <div class="fieldsinput-parent">
              <div class="fieldsinput">
                <div class="div16">Введите сумму для пополнения:</div>
                <input-data
                  :style="{ width: '100%' }"
                  placeholder="10 000 TON"
                ></input-data>
              </div>
              <div class="min-10-ton-parent">
                <div class="min-10-ton-container">
                  <span>Min:</span>
                  <span class="span8"> </span>
                  <span class="ton1">10 TON</span>
                </div>
                <div class="min-10-ton-container">
                  <span>Max:</span>
                  <span class="span8"> </span>
                  <span class="ton1">257 324 TON</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="des-and-bbn_bottom_action des-and-bbn_bottom des-and-bbn"
          id="desAndBbn"
        >
          <div class="text-and-button">
            <catos-button
              variant="fourth"
              :style="{ width: '97%' }"
              @click="toScan"
              >Вывести на кошелек CATOS</catos-button
            >

            <catos-button
              variant="fourth"
              :style="{ width: '97%', top: '0.85em' }"
              @click="toScan"
              >Вывести на кошелек TONKeeper</catos-button
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
import catosSelect from "@/components/fields/catos-select.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import inputData from "@/components/fields/input-data.vue";
const router = useRouter();
const emit = defineEmits(["onClose"]);
const toBack = () => {
  emit("onClose");
};

const toScan = () => {
  router.push({ name: "pulls-liquidity-scan", state: { action: "Withdraw" } });
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
  top: -7em;
}
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
  position: relative;
  top: 8em;
  /* left: 2vw; */
  border-radius: 16px;
  width: 95.15vw;
  padding: 1.5em 0em 0.63em 0em;
  box-sizing: border-box;
  background-color: #fff;
  height: 565px;
  margin: 0 auto;
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
  width: 100%;
  position: relative;
  top: 1.4em;

  align-items: center;
  justify-content: center;
  &_top {
    top: 1.1em;
  }
}
.des-and-bbn,
.text-and-button {
  width: 77.7vw;
  position: relative;
  flex-direction: row;

  align-items: center;

  height: 64px;
  border-radius: 16px;
  &_top {
    background: #fff;
  }
}
.des-and-bbn {
  position: relative;
  top: 29em;
  width: 83.6vw;
  padding: 0.75em;
  box-sizing: border-box;
  cursor: pointer;
  text-align: right;
  color: #555562;
  background: rgb(246, 244, 252);
  border-radius: 12px;
  padding: 0.75em;
  box-sizing: border-box;
  cursor: pointer;
  text-align: right;
  margin: 0 auto;
  color: #555562;
  &_text {
    top: -2.6em;
    & {
      .buttons-tabs {
        border: none;
        flex-direction: row;
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
        font-size: 1em;
        font-weight: 400;
        color: rgba(59, 59, 59, 1);
        width: 77vw;
        text-align: start;
        padding-left: 0.5em;
        line-height: 130%;
        width: 54.2vw;
        letter-spacing: 0.01em;
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
  padding-top: 12px;
  padding-bottom: 12px;
  top: 2.5em;
  height: 101px;
  &_action {
    height: 146px;
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
}
.des-and-bbn_bottom_setting {
  top: 1em;
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
  top: 2.7em;
  height: 88.8%;
}
.des-and-bbn_text {
  height: 90px;
}
.wallet-state {
  display: flex;
  font-weight: 300;
  font-size: 12px;
  line-height: 10px;
  flex-direction: column;
  width: 77vw;
  position: relative;
  margin: 0 auto;
  gap: 10px;
  top: -2em;
  &_balance,
  &_address {
    display: flex;
  }
  &_balance {
    gap: 20vw;
  }
  &_address {
    gap: 6vw;
  }
}
.text-and-button_action {
  background: transparent;
}
.label {
  position: absolute;
  left: 0em;
  font-size: 14px;
}
</style>
