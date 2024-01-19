<template>
  <div class="frame-parent">
    <div class="header-parent">
      <div class="header">
        <div class="div">Поздравляем</div>
      </div>
      <img
        class="component-18-icon"
        alt=""
        src="@/assets/images/success2.svg"
      />
      <div class="frame-group">
        <div class="wrapper">
          <div class="div1">Спасибо за регистрацию</div>
        </div>
        <div class="catos-parent">
          <div class="catos-container">
            <p class="catos">
              Ваша анкета проходит проверку системой модерации CATOS. Обычно это
              занимает
            </p>
            <p class="catos">не более 12 часов.</p>
          </div>
          <div class="catos-container">
            <p class="catos">
              Представители CATOS могут связаться с вами для уточнения данных.
              Мы оповестим вас
            </p>
            <p class="catos">по телефону и электронной почте как только</p>
            <p class="catos">ваша анкета будет одобрена.</p>
          </div>
        </div>
      </div>
      <div class="buttonnext-wrapper">
        <div class="buttonnext" @click="toPulls">
          <b class="b">Выбрать пул</b>
        </div>
      </div>
      <div class="frame-container">
        <div class="container">
          <div class="div2">
            <span class="span">Если у вас возникли дополнительные </span>вопросы,
            или вы нашли ошибку в нашей системе, обратитесь в службу поддержки.
          </div>
        </div>
        <div class="frame-wrapper">
          <div class="message-circle-parent">
            <img
              class="message-circle-icon"
              alt=""
              src="../../public/messagecircle.svg"
            />
            <div class="div3">Служба поддержки</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { roleStorage } from "@/utils/localStorage";

const router = useRouter();

const toPulls = () => {
  const role = roleStorage.get();
  let pulls = "";

  if (role === "borrower") {
    pulls = "pulls-borrower";
  } else if (role === "investor") {
    pulls = "pulls-depositor";
  } else if (role === "creditor") {
    pulls = "pulls";
  } else if (role === "collector") {
    pulls = "pulls-collector";
  }
  router.push({ name: pulls });
};
</script>
<style scoped>
.div {
  align-self: stretch;
  position: relative;
  font-size: 1.13em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
}
.header {
  border-radius: 7px;
  width: 18.75em;
  display: flex;
  flex-direction: column;
  padding: 0.44em 0em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.component-18-icon {
  position: relative;
  width: 8.88em;
  height: 8.88em;
  overflow: hidden;
  flex-shrink: 0;
}
.div1 {
  align-self: stretch;
  position: relative;
  font-size: 1.13em;
  line-height: 130%;
  font-weight: 600;
}
.wrapper {
  align-self: stretch;
  border-radius: 16px;
  background-color: rgba(165, 146, 221, 0.07);
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  align-items: flex-end;
  justify-content: flex-start;
}
.catos {
  margin: 0;
}
.catos-container {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 140%;
  font-weight: 300;
}
.catos-parent {
  align-self: stretch;
  border-radius: 16px;
  background-color: rgba(165, 146, 221, 0.07);
  display: flex;
  flex-direction: column;
  padding: 0.63em;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 1.25em;
  color: rgba(59, 59, 59, 0.96);
}
.frame-group {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.b {
  position: relative;
  font-size: 1em;
  line-height: 1.75em;
}
.buttonnext {
  align-self: stretch;
  border-radius: 20px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.buttonnext-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #fff;
}
.span {
  letter-spacing: 0.01em;
}
.div2 {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.container {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.message-circle-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.div3 {
  position: relative;
  font-size: 0.75em;
  text-decoration: underline;
  line-height: 130%;
}
.message-circle-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
}
.frame-wrapper {
  border-radius: 16px;
  width: 18.75em;
  height: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  color: #2c56c0;
  margin: 0 auto;
  border: 1px solid;
  cursor: pointer;
}
.frame-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
  color: rgba(59, 59, 59, 0.54);
}
.header-parent {
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  width: 26.25em;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
}
.frame-parent {
  position: relative;
  width: 100%;
  height: 42.69em;
  text-align: center;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
