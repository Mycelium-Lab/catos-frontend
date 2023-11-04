<template>
  <modal from="setting">
    <div class="connect">
      <div class="parent">
        <div class="div">Восстановление пароля</div>
        <div :class="isSuccess ? 'email_send email' : 'email'">
          Ссылка на создание нового пароля
          {{ isSuccess ? "была" : "будет" }} отправлена на ваш email
        </div>
        <a
          v-if="isSuccess"
          class="email_send email"
          :style="{ textDecoration: 'underline' }"
        >
          someemain@mail.com</a
        >
      </div>
      <input-data
        v-if="!isSuccess"
        left
        placeholder="Ваша почта"
        :style="{ width: '85%', margin: '0' }"
      >
        <template v-slot:left-icon>
          <img src="@/assets/images/iconsmail.svg" />
        </template>
      </input-data>

      <div class="connect-inner">
        <div class="buttonnext-parent">
          <div
            class="buttonnext"
            @click="() => (isSuccess ? toBack() : (isSuccess = true))"
          >
            <b class="ton-kepeer">{{ isSuccess ? "Ок" : "Отправить" }}</b>
          </div>
          <div v-if="!isSuccess" class="div2" @click="toBack">Отмена</div>
        </div>
      </div>
    </div>
  </modal>
</template>
<script setup lang="ts">
import { ref } from "vue";
// @ts-ignore
import modal from "../ui-kit/modal.vue";
import { useRouter } from "vue-router";
import inputData from "../fields/input-data.vue";
const router = useRouter();
const isSuccess = ref(false);
const toBack = () => {
  router.push({ name: "admin-profile-mobile" });
};
</script>
<style scoped lang="scss">
.swipe-down {
  position: relative;
  border-radius: 25px;
  background-color: #cad0e4;
  width: 2.63em;
  height: 0.31em;
}
.div {
  position: relative;
  font-size: 1.13em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
}
.email {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  color: #8181a5;
  &_send {
    color: #3b3b3b;
    text-align: center;
    font-size: 12px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
}
.parent {
  border-radius: 7px;
  width: 18.75em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75em;
}
.iconsmail {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.div1 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.iconsmail-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.fields-password-and-mail {
  border-radius: 16px;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  width: 18.75em;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 0em 0.75em;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  color: rgba(46, 58, 89, 0.36);
}
.ton-kepeer {
  position: relative;
  font-size: 1em;
  line-height: 130%;
}
.buttonnext {
  border-radius: 20px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  width: 18.75em;
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.div2 {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.01em;
  line-height: 120%;
  color: #656060;
  display: inline-block;
  width: 25em;
}
.buttonnext-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1em;
}
.connect-inner {
  width: 18.75em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #f3f3f3;
}
.connect {
  position: relative;

  background-color: #fff;

  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 3em 2.5em;
  align-items: center;
  justify-content: center;
  gap: 2.5em;
  text-align: center;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
