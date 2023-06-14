<template>
  <div class="statusapi">
    <div class="status-reg">
      <div class="group">
        <div class="div8">Не удалось</div>
        <img
          class="iconsstatus-transaction"
          alt=""
          src="@/assets/images/fail-transaction.svg"
        />
      </div>
    </div>
    <div class="des-and-bbn_text des-and-bbn" id="desAndBbn">
      <div class="text-and-button">
        <div class="buttons-tabs">
          <div class="count">120 000 TON</div>
          <div class="status">Не удалось вывести по адресу</div>
          <copy-paste
            :style="{ width: '77vw', fontSize: '12px', left: '2vw' }"
            value="EQCoqrqUMQCKKZTBFCQ0VzgOf 
  С2K3ieCVOecUmPSFclu2HQJ"
          >
            <template v-slot:icon>
              <img src="@/assets/images/iconscopy.svg" alt="" /> </template
          ></copy-paste>

          <div class="warning">
            <img
              class="warning-icon"
              src="@/assets/images/alerttriangle.svg"
              alt=""
            />
            <span>Провертье данные кошелька и повторите попытку</span>
          </div>
          <a>Просмотр транзакции в TON explorer</a>
        </div>
      </div>
    </div>
    <div class="des-and-bbn" id="desAndBbn">
      <div class="text-and-button">
        <catos-button
          variant="secondary"
          :style="{
            width: '55vw',
            marginBottom: '1em',
            height: '32px',
            fontWeight: '500',
            fontSize: '14px',
          }"
          >Повторить снова</catos-button
        >

        <catos-button
          variant="fourth"
          :style="{ width: '55vw', marginBottom: '1em' }"
          >В кошелек</catos-button
        >

        <div class="buttons-tabs">
          <div class="text">В историю транзакций</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import copyPaste from "../../fields/copy-paste.vue";
import catosButton from "../../ui-kit/buttons/catos-button.vue";
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
  top: -9em;
}
.iconsstatus-transaction {
  position: relative;
  width: 5.38em;
  height: 5.38em;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 2;
  top: -14em;
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
  top: 5em;
}
.status-reg {
  position: absolute;
  top: 15em;
  left: 6vw;
  border-radius: 16px;
  width: 87vw;
  padding: 0.63em 0.88em;
  box-sizing: border-box;
  justify-content: center;
  background-color: #fff;
  height: 47em;
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
}
.des-and-bbn {
  position: absolute;
  top: 46em;
  left: 18vw;

  width: 61vw;

  padding: 0.75em;
  box-sizing: border-box;
  cursor: pointer;
  text-align: right;
  color: #555562;
  &_text {
    top: 33em;
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
        top: 3em;
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
.warning {
  position: relative;
  top: 2em;
  background-color: rgba(253, 214, 116, 0.2);
  left: 2vw;
  border-radius: 11px;
  width: 77vw;
  padding: 0.2em 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.warning-icon {
  width: 8px;
  height: 8px;
  margin-right: 4.33px;
}
</style>
