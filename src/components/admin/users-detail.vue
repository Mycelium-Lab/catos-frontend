<template>
  <modal from="setting">
    <div class="swipe-down-parent">
      <div class="swipe-down" />
      <div class="wrapper">
        <div class="div">Анкета пользователя #12345</div>
      </div>
      <div class="des-and-bbn">
        <div class="text-and-button" @click="toBack">
          <div class="buttons-tabs">
            <div class="text">Закрыть</div>
          </div>
        </div>
      </div>
      <div class="frame-parent">
        <div class="frame-group">
          <div class="frame-container">
            <div class="container">
              <div class="email">Статус:</div>
            </div>
            <div class="frame-div">
              <div class="ellipse-parent">
                <div class="frame-child" />
                <div class="div2">Отклонен</div>
              </div>
              <img
                class="iconchange"
                alt=""
                src="/src/views/public/iconchange.svg"
              />
            </div>
          </div>
          <div class="frame-parent1">
            <div class="frame">
              <div class="div2">Причина не указана</div>
            </div>
            <div class="div4">
              Отклонил администартор:
              <span class="span">Михаил Боняшин</span>
              <span class="span1">, дата: 23</span>.07
              <span class="span2">.22</span>
            </div>
          </div>
          <div class="frame-parent2">
            <div class="header-wrapper">
              <div class="header">
                <div class="div">ФИО и личные данные</div>
              </div>
            </div>
            <div class="frame-parent3">
              <div class="frame-parent4">
                <div class="frame-parent5">
                  <div class="email-wrapper">
                    <div class="email">Имя:</div>
                  </div>
                  <div class="someuswergmailru-wrapper">
                    <div class="someuswergmailru">Иванов</div>
                  </div>
                </div>
                <div class="frame-item" />
                <div class="frame-parent5">
                  <div class="email-wrapper">
                    <div class="email">Фамилия:</div>
                  </div>
                  <div class="someuswergmailru-wrapper">
                    <div class="someuswergmailru">Иван</div>
                  </div>
                </div>
                <div class="frame-item" />
                <div class="frame-parent5">
                  <div class="email-wrapper">
                    <div class="email">Отчество:</div>
                  </div>
                  <div class="someuswergmailru-wrapper">
                    <div class="someuswergmailru">Иванович</div>
                  </div>
                </div>
              </div>
              <div class="frame-item" />
              <div class="field">
                <div class="field1">
                  <div class="div12">Анкета заявителя:</div>
                  <div class="div13">Открыть</div>
                </div>
              </div>
              <div class="frame-item" />
              <div class="frame-parent5">
                <div class="email-wrapper">
                  <div class="email">Статус:</div>
                </div>
                <div class="someuswergmailru-wrapper">
                  <div class="someuswergmailru">Заблокирован</div>
                </div>
              </div>
              <div class="frame-item" />
              <div class="frame-parent5">
                <div class="email-wrapper">
                  <div class="email">Email:</div>
                </div>
                <div class="someuswergmailru-wrapper">
                  <div class="someuswergmailru">someuswer@gmail.ru</div>
                </div>
              </div>
              <div class="frame-item" />
              <div class="frame-parent5">
                <div class="email-wrapper">
                  <div class="email">Телефон:</div>
                </div>
                <div class="someuswergmailru-wrapper">
                  <div class="someuswergmailru">+7 (999) 202-77-77</div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-parent2">
            <div class="header-wrapper">
              <div class="header">
                <div class="div">Данные займов CATOS</div>
              </div>
            </div>
            <div class="frame-parent4">
              <div class="frame-parent5">
                <div class="email-wrapper">
                  <div class="email">Займы:</div>
                </div>
                <div class="someuswergmailru-wrapper">
                  <div class="div19">
                    <p class="p">
                      <span class="span3">
                        <span class="span4">Всего</span>
                        <span class="span5"> </span>
                      </span>
                      <span class="span6">3</span>
                      <span>
                        <span class="span7">: </span>
                      </span>
                    </p>
                    <p class="p">
                      <span>
                        <span>Активно: </span>
                        <span class="span8">1</span>
                      </span>
                    </p>
                    <p class="p">
                      <span>
                        <span>Погашено: </span>
                        <span class="span8">2</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="frame-item" />
              <div class="frame-parent5">
                <div class="email-wrapper">
                  <div class="email">Текущий общий долг:</div>
                </div>
                <div class="someuswergmailru-wrapper">
                  <div class="someuswergmailru">100 000 TON</div>
                </div>
              </div>
              <div class="frame-item" />
              <div class="frame-parent5">
                <div class="email-wrapper">
                  <div class="email">Дата регистрации:</div>
                </div>
                <div class="someuswergmailru-wrapper">
                  <div class="someuswergmailru">12.11.2022</div>
                </div>
              </div>
              <div class="frame-item" />
              <div class="frame-parent5">
                <div class="email-wrapper">
                  <div class="email">Последний вход:</div>
                </div>
                <div class="someuswergmailru-wrapper">
                  <div class="someuswergmailru">13.11.2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="des-and-bbn1">
          <div class="text-and-button" @click="toBack">
            <div class="buttons-tabs">
              <div class="text">Закрыть</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>
<script setup lang="ts">
// @ts-ignore
import modal from "@/components/ui-kit/modal.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const toBack = () => {
  router.push({ name: "manage-user-mobile" });
};
</script>
<style scoped>
.div {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.wrapper {
  position: absolute;
  top: 2.5em;
  left: calc(50% - 112.5px);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0.75em;
  align-items: center;
  justify-content: center;
}
.text {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
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
  padding: 0.44em 5.5em;
  align-items: center;
  justify-content: center;
}
.text-and-button {
  width: 17.25em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.des-and-bbn {
  position: absolute;
  top: 160.81em;
  left: 2.81em;
  border-radius: 16px;
  background-color: #f9fbff;
  width: 18.75em;
  display: flex;
  flex-direction: column;
  padding: 0.75em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
  color: #555562;
}
.container {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-child {
  position: relative;
  border-radius: 50%;
  background-color: #ff0000;
  border: 0.5px solid rgba(165, 146, 221, 0.1);
  box-sizing: border-box;
  width: 0.63em;
  height: 0.63em;
}
.div2 {
  position: relative;
  font-size: 0.75em;
  line-height: 140%;
}
.ellipse-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.31em;
  z-index: 0;
}
.iconchange {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  top: 0em;
  right: 0em;
  bottom: 0em;
  max-height: 100%;
  width: 2.5em;
  z-index: 1;
}
.frame-div {
  flex: 1;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  height: 2em;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0em 0.5em 0.75em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  position: relative;
}
.frame-container {
  border-radius: 12px;
  border: 1px solid rgba(129, 129, 165, 0.1);
  box-sizing: border-box;
  width: 21.38em;
  display: flex;
  flex-direction: row;
  padding: 0.5em 1.31em;
  align-items: center;
  justify-content: flex-start;
  gap: 3em;
}
.frame {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.span {
  text-decoration: underline;
}
.span1 {
  letter-spacing: -0.01em;
}
.span2 {
  letter-spacing: 0.01em;
}
.div4 {
  position: relative;
  font-size: 0.63em;
  line-height: 140%;
  color: #8181a5;
}
.frame-parent1 {
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.63em 1.31em 0.88em;
  align-items: flex-start;
  justify-content: center;
  gap: 0.81em;
}
.header {
  align-self: stretch;
  border-radius: 6px;
  background-color: #f9f7fc;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0em;
  align-items: center;
  justify-content: center;
}
.header-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.frame-parent5 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4.06em;
}
.frame-item {
  align-self: stretch;
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  height: 0.06em;
}
.frame-parent4 {
  width: 18.75em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.div12 {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.01em;
  line-height: 130%;
  z-index: 0;
}
.div13 {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 9px);
  right: 0em;
  font-size: 0.75em;
  text-decoration: underline;
  letter-spacing: 0.01em;
  line-height: 130%;
  color: rgba(87, 126, 247, 0.96);
  display: inline-block;
  width: 10em;
  flex-shrink: 0;
  z-index: 1;
}
.field1 {
  width: 18.75em;
  height: 1.25em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  gap: 1.63em;
}
.field {
  height: 1.25em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
}
.email {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.email-wrapper {
  width: 7.19em;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.someuswergmailru {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.someuswergmailru-wrapper {
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent3 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.frame-parent2 {
  border-radius: 14px;
  border: 1px solid #f8f6fc;
  box-sizing: border-box;
  width: 21.38em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1.13em 1.31em 1.5em;
  align-items: center;
  justify-content: flex-start;
  gap: 1.63em;
}
.span4 {
  font-family: Inter;
}
.span5 {
  font-weight: 300;
  font-family: Inter;
}
.span3 {
  color: #3b3b3b;
}
.span6 {
  text-decoration: underline;
  font-family: Inter;
  color: rgba(87, 126, 247, 0.96);
}
.span7 {
  font-weight: 300;
}
.p {
  margin: 0;
}
.span8 {
  text-decoration: underline;
  color: rgba(87, 126, 247, 0.96);
}
.div19 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.frame-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.88em;
}
.des-and-bbn1 {
  border-radius: 16px;
  background-color: #f9fbff;
  width: 18.75em;
  display: flex;
  flex-direction: column;
  padding: 0.75em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
  color: #555562;
}
.frame-parent {
  position: relative;
  top: 6.63em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
  width: 87.7vw;
  margin: 0 auto;
}
.swipe-down-parent {
  position: relative;

  box-sizing: border-box;
  width: 100%;
  height: 75.44em;
  overflow: hidden;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
