<template>
  <div class="iphone-13-13-">
    <img class="bg-icon" alt="" src="./public/bg.svg" />

    <div class="header">
      <div class="page-title-parent">
        <b class="page-title1">Регистрация кредитора</b>
        <b class="page-title1">Подтверждение регистрации</b>
        <b class="page-title1">Анкета организации</b>
        <b class="page-title4">Анкета представителя</b>
        <b class="page-title1">Экран подключения кошелька</b>
      </div>
    </div>
    <div class="form-registration-66">
      <img class="component-17-icon" alt="" src="./public/success.svg" />

      <div class="frame-group">
        <div class="frame-container">
          <div class="frame">
            <div class="div8">Спасибо за регистрацию</div>
          </div>
          <div class="catos-group">
            <div class="catos-container">
              <p class="p">
                Ваша анкета проходит проверку системой модерации CATOS. Обычно
                это занимает
              </p>
              <p class="p">не более 12 часов.</p>
            </div>
            <div class="catos-container">
              <p class="p">
                Представители CATOS могут связаться с вами для уточнения данных.
                Мы оповестим вас
              </p>
              <p class="p">по телефону и электронной почте как только</p>
              <p class="p">ваша анкета будет одобрена.</p>
            </div>
          </div>
        </div>
        <div class="buttonnext" id="buttonNextContainer" @click="toPools">
          <b class="b1">{{ roleStorage.get() === "creditor" ? 'Создать пулл' : roleStorage.get() === "collector"  ? 'Выбрать задолженность' : 'Выбрать пулл' }}</b>
        </div>
        <div class="frame-div">
          <div class="wrapper1">
            <div class="div9">
              <span class="span">Если у вас возникли дополнительные </span
              >вопросы или нашли ошибку нашей системе обратитесь в службу
              поддержки
            </div>
          </div>
          <div class="frame-wrapper">
            <div class="message-circle-parent">
              <img
                class="message-circle-icon"
                alt=""
                src="./public/messagecircle.svg"
              />

              <router-link class="div10" to="support"
                >Служба поддержки</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper2">
        <div class="div11">Закрыть</div>
      </div>
      <div class="header1">
        <div class="div12">Поздравляем</div>
      </div>
    </div>
    <router-link class="buttonback" to="" @click="$router.go(-1)">
      <div class="div13">Назад</div>
      <img class="search-icon" alt="" src="./public/search-icon.svg" />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { roleStorage } from "@/utils/localStorage";

const router = useRouter();
const toPools = () => {
  switch(roleStorage.get()) {
    case 'borrower': {
      router.push(`/pulls/borrower`);
      break;
    }
    case 'collector': {
      router.push(`/loans/collector`);
      break;
    }
    case 'investor': {
      router.push(`/pulls/depositor`);
      break;
    }
    case 'creditor': {
      router.push(`/pulls/creditor`);
      break;
    }
  }
};
</script>

<style scoped lang="scss">
.bg-icon {
  position: absolute;
  top: 0;
  left: 0;
  height: 20.88em;
}
.page-title1,
.page-title4 {
  position: relative;
  font-size: 1.25em;
  line-height: 1.4em;
}
.page-title4 {
  color: rgba(59, 59, 59, 0.67);
}
.page-title-parent {
  position: absolute;
  top: 0.63em;
  left: -88.87em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 7.56em;
}
.header {
  position: absolute;
  height: 6.13%;
  width: 100.51%;
  top: 16.35%;
  right: -0.26%;
  bottom: 77.52%;
  left: -0.26%;
}
.component-17-icon {
  position: relative;
  top: 6.06em;

  width: 5.38em;
  height: 5.38em;
  overflow: hidden;
}
.div8 {
  align-self: stretch;
  position: relative;
  font-size: 1em;
  letter-spacing: 0.01em;
  line-height: 130%;
}
.frame {
  border-radius: 16px;
  background-color: rgba(165, 146, 221, 0.07);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  box-sizing: border-box;
  align-items: flex-end;
  justify-content: flex-start;
}
.p {
  margin: 0;
}
.catos-container {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  line-height: 140%;
  font-weight: 300;
}
.catos-group,
.frame-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.catos-group {
  border-radius: 16px;
  background-color: rgba(165, 146, 221, 0.07);
  width: 100%;
  padding: 0.5em 0.25em;
  box-sizing: border-box;
  align-items: flex-end;
  gap: 0.5em;
  color: rgba(59, 59, 59, 0.96);
}
.frame-container {
  align-items: flex-start;
  gap: 1.25em;
  width: 100%;
}
.b1 {
  position: relative;
  font-size: 1em;
  line-height: 1.75em;
}
.buttonnext {
  border-radius: 20px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  width: 77vw;
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
}
.span {
  letter-spacing: 0.01em;
}
.div9 {
  align-self: stretch;
  position: relative;
  font-size: 0.63em;
  line-height: 130%;
  font-weight: 300;
}
.wrapper1 {
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
.div10 {
  position: relative;
  font-size: 0.75em;
  text-decoration: underline;
  line-height: 130%;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  color: rgba(44, 86, 192, 1);
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
  width: 77vw;
  height: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  color: rgba(44, 86, 192, 1);
  border: 1px solid rgba(165, 146, 221, 0.15);
}
.frame-div,
.frame-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-div {
  gap: 0.75em;
  color: rgba(59, 59, 59, 0.54);
  width: 77vw;
}
.frame-group {
  position: absolute;
  top: 14.13em;
  left: 2.81em;
  gap: 2em;
  width: 77vw;
}
.div11 {
  position: relative;
  font-size: 0.75em;
  line-height: 120%;
}
.wrapper2 {
  position: absolute;
  top: 1.25em;
  right: 1em;
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  color: rgba(0, 0, 0, 0.51);
}
.div12 {
  align-self: stretch;
  position: relative;
  font-size: 1.13em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
}
.header1 {
  position: absolute;
  top: 2.69em;

  border-radius: 7px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 0.44em 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.form-registration-66 {
  position: absolute;
  top: 8em;
  left: 0;
  border-radius: 40px 40px 0 0;
  background-color: #fff;
  width: 100vw;
  height: 45em;
  text-align: center;
  overflow: hidden;
}
.div13 {
  position: absolute;
  top: 0.43em;
  left: 3.29em;
  font-size: 0.88em;
  line-height: 2em;
  font-weight: 300;
}
.buttonback,
.search-icon {
  position: absolute;
  height: 2.5em;
}
.search-icon {
  top: calc(50% - 20px);
  right: 3.88em;
  border-radius: 10px;
  width: 2.5em;
  overflow: hidden;
}
.buttonback {
  top: 3.63em;
  left: 1em;
  border-radius: 9px;
  width: 6.38em;
  color: #3b3b3b;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.iphone-13-13- {
  position: relative;
  background-color: #fdd674;
  width: 100%;
  height: 48.94em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
  overflow: hidden;
}
@media(min-width: 500px) {
  .frame-group {
    width: 352px;
    position: relative;
    margin: 0 auto;
    left: 0px;
    top: 10.13em;
  }
  .buttonnext, .frame-div,.frame-wrapper{
    width: 100% !important;
  }
  .wrapper2{
    display: none;
  }
}
</style>
