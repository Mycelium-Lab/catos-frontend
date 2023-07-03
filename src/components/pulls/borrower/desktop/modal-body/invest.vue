<template>
  <div class="frame-parent">
    <div class="status-reg-parent">
      <div class="status-reg">
        <div class="img-tetx">
          <img
            class="imagepersones-icon"
            alt=""
            src="@/assets/desktop/iconsinvest.svg"
          />
          <div class="text">
            <div class="div">Получить статус инвестора</div>
            <div class="catos-wrapper">
              <div class="catos">
                Чтобы начать инвестировать в кредитные пулы Catos и получать
                дополнительную прибыль, нужно зарегистрироваться в качестве
                кредитора-инвестора в системе.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="des-and-bbn">
        <catos-button variant="fourth" :style="{ width: '100%', margin: '0' }"
          >Зарегестрироваться как инвестор</catos-button
        >

        <catos-button variant="fourth" :style="{ width: '100%', margin: '0' }"
          >Войти как инвестор</catos-button
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// @ts-ignore
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
</script>
<style scoped>
.imagepersones-icon {
  position: relative;
  width: 8.88em;
  height: 8.88em;
  object-fit: cover;
}
.div {
  align-self: stretch;
  position: relative;
  font-size: 1.13em;
  line-height: 130%;
  font-weight: 600;
}
.catos {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.catos-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: rgba(59, 59, 59, 0.96);
}
.text {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.img-tetx {
  width: 25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75em;
}
.status-reg {
  align-self: stretch;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: 0em 0.88em;
  align-items: center;
  justify-content: center;
}
.text1 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.buttons-tabs {
  align-self: stretch;
  border-radius: 25px;
  background-color: rgba(87, 126, 247, 0.96);
  display: flex;
  flex-direction: row;
  padding: 0.69em 1.5em;
  align-items: center;
  justify-content: center;
}
.button {
  align-self: stretch;
  height: 2.44em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.text2 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 500;
}
.button1 {
  align-self: stretch;
  height: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #fefefe;
}
.des-and-bbn {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f9fbff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  padding: 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
  text-align: right;
  color: #f8f8ff;
}
.status-reg-parent {
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  width: 30em;
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
  height: 26.38em;
  text-align: center;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
