<template>
  <div class="statusapi">
    <img class="decor-2-off" alt="" src="@/assets/images/dash-line-left.svg" />

    <img
      class="decor-on-icon"
      alt=""
      src="@/assets/images/dash-line-right.svg"
    />

    <div class="status-reg">
      <div class="group">
        <div class="div8">Скриннинг не удался</div>
        <img
          class="iconsstatus-transaction"
          alt=""
          src="@/assets/images/iconsfail.svg"
        />
      </div>
      <span class="support">
        Если у вас возникли дополнительные вопросы, или вы нашли ошибку в нашей
        системе обратитесь в службу поддержки
      </span>
      <div class="des-and-bbn_bottom des-and-bbn" id="desAndBbn">
        <catos-button
          variant="fourth_outline"
          :style="{ width: '77vw', left: '-9px', borderColor: '#A592DD26' }"
        >
          <img src="@/assets/images/message-circle-gradient.svg" />
          <span class="support_btn"> Cлужба поддержки </span>
        </catos-button>
      </div>
    </div>
    <div class="des-and-bbn" id="desAndBbn">
      <catos-button variant="fourth" :style="{ width: '100%' }"
        >Повторить снова</catos-button
      >
      <div class="text-and-button">
        <div class="buttons-tabs">
          <div class="text">Вернуться в настройки</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import catosButton from "../ui-kit/buttons/catos-button.vue";
</script>

<style scoped lang="scss">
.decor-2-off,
.decor-on-icon {
  position: absolute;
  top: 2.88em;
  height: 10.88em;
  overflow: hidden;
}
.decor-2-off {
  top: 10.8em;
  left: 1.4em;
  width: 50%;
  z-index: 10;
}
.decor-on-icon {
  top: 11em;
  right: 2em;
  width: 50%;
  z-index: 1;
}
.div8 {
  align-self: stretch;
  position: relative;
  font-size: 1.13em;
  letter-spacing: 0.01em;
  line-height: 130%;
  font-weight: 500;
  top: -1.3em;
}
.iconsstatus-transaction {
  position: relative;
  width: 5.38em;
  height: 5.38em;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 20;
  top: -1em;
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
  top: 20%;
  left: 1.31em;
  border-radius: 16px;
  width: 87vw;
  padding: 0.63em 0.88em;
  box-sizing: border-box;
  justify-content: center;
  height: 68.5vh;
  background-color: #fff;
}
.text {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.buttons-tabs {
  align-self: stretch;
  border-radius: 25px;
  border: 0.5px solid rgba(87, 126, 247, 0.96);
  box-sizing: border-box;
  height: 2em;
  display: flex;
  flex-direction: row;
  width: 100%;

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
  position: absolute;
  top: 22em;
  left: 11vw;
  border-radius: 16px;
  background-color: #f9fbff;
  width: 77vw;

  padding: 0.75em;
  box-sizing: border-box;
  cursor: pointer;
  text-align: right;
  color: #555562;
  gap: 0.7em;
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
}
.support {
  position: absolute;
  font-size: 0.625rem;
  color: rgba(59, 59, 59, 0.54);
  letter-spacing: 0.01em;
  font-weight: 300;
  top: 35em;
  width: 79vw;
}
.des-and-bbn_bottom {
  top: 24em;
  background: transparent;
  left: 4vw;
}
.support_btn {
  color: #2c56c0;
}
</style>
