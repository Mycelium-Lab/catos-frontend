<template>
  <modal from="setting">
    <div class="wrapper">
      <div class="group">
        <div class="div8">Изменение кошелька</div>
        <div class="catos-container">
          <p class="p">
            В целях безопасности, после изменения кошелька вам позвонит менеджер
            CATOS
          </p>
          <p class="p">
            и убедится в том, что это именно вы инициировали изменение кошелька
          </p>
        </div>
      </div>
      <img
        class="iconsstatus-transaction"
        alt=""
        src="@/assets/images/iconswallet.svg"
      />

      <div class="div9">Документация и инструкции</div>
      <div class="swipe-down"></div>
      <div class="frame-group">
        <div class="frame-div">
          <div class="div10">Внимание:</div>
          <div class="catos-wrapper">
            <div class="catos-container1">
              <p class="p">
                Менеджеры CATOS никогда не спрашивают пароли от вашего аккаунта
                и никогда
              </p>
              <p class="p">
                не просят код из СМС или коды для двухфакторной авторизации
              </p>
            </div>
          </div>
        </div>
        <div class="frame-wrapper">
          <div class="frame-container">
            <div class="buttonnext-parent">
              <div class="buttonnext" @click="next">
                <b class="ton-kepeer">Изменить кошелек</b>
              </div>
              <div class="buttonnext1" @click="cancel">
                <div class="div11">Отмена</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import modal from "../ui-kit/modal.vue";

const router = useRouter();
const cancel = () => {
  router.push({ name: "setting" });
};
const next = () => {
  router.push({ name: "setting-wallet-scan" });
};
</script>

<style scoped>
.wrapper {
  height: 600px;
}
.div8 {
  align-self: stretch;
  position: relative;
  font-size: 1.13em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
}
.p {
  margin: 0;
}
.catos-container {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.01em;
  line-height: 130%;
  color: rgba(59, 59, 59, 0.6);
}
.group {
  position: absolute;
  top: 2.25em;
  left: 10vw;
  border-radius: 7px;
  width: 77vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75em;
  text-align: center;
}
.iconsstatus-transaction {
  position: absolute;
  top: 9.5em;

  height: 6.75em;
  overflow: hidden;
  left: 34vw;
  width: 30vw;
}
.div9 {
  position: relative;
  top: 43.58em;
  font-size: 0.75em;
  text-decoration: underline;
  letter-spacing: 0.01em;
  line-height: 130%;
  text-align: center;
  color: rgba(87, 126, 247, 0.96);
}
.swipe-down {
  position: absolute;
  top: 0.75em;
  left: 10.94em;
  border-radius: 25px;
  width: 2.63em;
  height: 0.31em;
}
.catos-container1,
.div10 {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.01em;
  line-height: 130%;
}
.div10 {
  display: inline-block;
  width: 100%;
  text-align: center;
}
.catos-container1 {
  flex: 1;
  font-weight: 300;
  text-align: center;
}
.catos-wrapper,
.frame-div {
  display: flex;
  justify-content: flex-start;
}
.catos-wrapper {
  border-radius: 16px;
  background-color: rgba(165, 146, 221, 0.1);
  width: 100%;
  flex-direction: row;
  padding: 0.63em;
  box-sizing: border-box;
  align-items: flex-start;
}
.frame-div {
  flex-direction: column;
  align-items: center;
  gap: 0.25em;
  width: 100%;
}
.ton-kepeer {
  position: relative;
  font-size: 1em;
  line-height: 1.75em;
}
.buttonnext {
  border-radius: 20px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  width: 100%;
  height: 3em;
  overflow: hidden;
  flex-direction: row;
  box-sizing: border-box;
}
.buttonnext,
.buttonnext1,
.div11 {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.div11 {
  position: relative;
  font-size: 0.88em;
  line-height: 2em;
  width: 7.64em;
}
.buttonnext1 {
  border-radius: 20px;
  width: 100%;
  height: 3em;
  overflow: hidden;
  flex-direction: row;
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  color: rgba(38, 38, 38, 0.62);
}
.buttonnext-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.38em;
  width: 100%;
  text-decoration: none;
  color: #fff;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.frame-container {
  align-self: stretch;
  align-items: flex-start;
  width: 100%;
}
.frame-container,
.frame-group,
.frame-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.frame-wrapper {
  width: 77vw;
  align-items: center;
  color: #f3f3f3;
}
.frame-group {
  position: absolute;
  top: 17.5em;
  left: 10.5vw;
  align-items: flex-start;
  gap: 1.5em;
  width: 77vw;
}
.connect {
  position: relative;
  border-radius: 40px 40px 0 0;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.13);
  box-sizing: border-box;
  width: 100%;
  height: 47.44em;
  overflow: hidden;
  text-align: center;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
