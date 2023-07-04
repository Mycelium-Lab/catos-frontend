<template>
  <div v-if="isDetail" class="frame-parent_rejected">
    <div class="frame-group">
      <div class="c-wrapper">
        <div class="c">Cостояние:</div>
      </div>
      <div class="status-all">
        <div class="colors-graphsorders-parent">
          <img
            class="colors-graphsorders-icon"
            alt=""
            src="@/assets/images/colors-graphsorders3.svg"
          />
          <div class="div">Отклонен</div>
        </div>
        <img class="iconchange" alt="" src="src/views/public/iconchange.svg" />
      </div>
    </div>
    <div class="parent">
      <div class="div1">Причина не указана</div>
      <div class="div2">
        Отклонил администартор:
        <span class="span">Михаил Боняшин</span>
        <span class="span1">, дата: 23</span>.07
        <span class="span2">.22</span>
      </div>
    </div>
    <div class="frame-wrapper">
      <div class="frame-container">
        <div class="frame-div">
          <div class="header-wrapper">
            <div class="header">
              <div class="catos">ФИО и личные данные</div>
            </div>
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="email">Имя:</div>
              <div class="someuswergmailru">Иванов</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="email">Фамлия:</div>
              <div class="someuswergmailru">Иванов</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="email">Отчество:</div>
              <div class="someuswergmailru">Иванович</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="email">Анкета заявителя:</div>
              <a
                class="div11"
                @click="
                  () => {
                    isDetail = false;
                    isBlank = true;
                  }
                "
                >Открыть</a
              >
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="email">Статус:</div>
              <div class="someuswergmailru">Заблокирован</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="email">Email:</div>
              <div class="someuswergmailru">someuswer@gmail.ru</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="email">Телефон:</div>
              <div class="someuswergmailru">+7 (999) 202-77-77</div>
            </div>
            <div class="col-titles-bg" />
          </div>
        </div>
        <div class="frame-div">
          <div class="header-wrapper">
            <div class="header">
              <div class="catos">Данные займов CATOS</div>
            </div>
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="email">Займы:</div>
              <div class="div17">
                <p class="p">
                  <span> Всего: </span>
                  <a class="span3">3</a>
                </p>
                <p class="p">
                  <span>Активно: </span>
                  <a class="span3">1</a>
                </p>
                <p class="p">
                  <span>Погашено: </span>
                  <a class="span3">2</a>
                </p>
              </div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="email">Текущий общий долг:</div>
              <div class="someuswergmailru">100 000 TON</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="email">Дата регистрации:</div>
              <div class="someuswergmailru">12.11.2022</div>
            </div>
            <div class="col-titles-bg" />
          </div>
          <div class="field-parent">
            <div class="field">
              <div class="email">Последний вход:</div>
              <div class="someuswergmailru">13.11.2022</div>
            </div>
            <div class="col-titles-bg" />
          </div>
        </div>
      </div>
    </div>
    <div class="button-wrapper">
      <catos-button
        :style="{ width: '580px', height: '40px', margin: '0' }"
        @click="close"
        variant="fourth_outline"
      >
        Закрыть
      </catos-button>
    </div>
  </div>
  <blank
    v-if="isBlank"
    back
    @close="
      () => {
        isBlank = false;
        close();
      }
    "
    title="Анкета пользователя #12345"
    :toBack="
      () => {
        isBlank = false;
        isDetail = true;
      }
    "
  ></blank>
</template>
<script setup lang="ts">
import { ref } from "vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import blank from "@/components/base/desktop/blank.vue";
const emits = defineEmits(["close"]);
const close = () => {
  emits("close");
};
const isDetail = ref(true);
const isBlank = ref(false);
</script>
<style scoped lang="scss">
.c {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.c-wrapper {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
}
.colors-graphsorders-icon {
  position: relative;
  width: 1em;
  height: 1em;
}
.div {
  position: relative;
  font-size: 0.75em;
  line-height: 140%;
  top: 0.06em;
}
.colors-graphsorders-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.31em;
}
.iconchange {
  position: relative;
  width: 2.5em;
  height: 2.5em;
}
.status-all {
  align-self: stretch;
  flex: 1;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0em 0em 0em 0.63em;
  align-items: center;
  justify-content: space-between;
}
.frame-group {
  align-self: stretch;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1em;
}
.div1 {
  position: relative;
  font-size: 0.88em;
  line-height: 140%;
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
.div2 {
  position: relative;
  font-size: 0.75em;
  line-height: 140%;
  color: #8181a5;
}
.parent {
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.94em;
  align-items: flex-start;
  justify-content: center;
  gap: 0.31em;
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
  width: 36.25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.field {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.63em;
}
.col-titles-bg {
  align-self: stretch;
  position: relative;
  border-radius: 18px;
  background-color: rgba(165, 146, 221, 0.1);
  height: 0.06em;
}
.field-parent {
  width: 36.25em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}

.email {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.someuswergmailru {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.frame-div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.catos {
  position: relative;
  font-size: 1em;
  line-height: 130%;
}
.span3,
.div11 {
  text-decoration: underline;
  color: rgba(87, 126, 247, 0.96);
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
}
.p {
  margin: 0;
}
.div17 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  text-align: right;
}
.frame-container {
  width: 37.5em;
  display: flex;
  flex-direction: column;
  padding: 0em 0.63em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.88em;
}
.frame-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent_rejected {
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
.button-wrapper {
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  background: #f9fbff;
  width: 580px;
  padding: 10px;
  height: 48px;
  display: flex;
  align-items: center;
}
@media (max-height: 900px) {
  .frame-parent_rejected {
    height: 27em;
    overflow-y: auto;
    & .parent {
      padding: 1.94em;
    }
  }
}
</style>
