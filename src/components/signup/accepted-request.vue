<template>
  <div class="iphone-13-13-">
    <img class="bg-icon" alt="" src="./public/bg.svg" />

    <div class="buttonnext-parent">
      <div class="buttonnext">
        <b class="b1">Закрыть</b>
      </div>
      <div class="header">
        <div class="div8">Служба поддержки</div>
      </div>
      <div class="component-17-parent">
        <img class="component-17-icon" alt="" src="./public/success.svg" />

        <div class="catos-wrapper">
          <div class="catos-container">
            <p class="p">
              Ваш запрос принят <span class="span">, </span>модерация CATOS
              ответит вам в самое ближайшее время
            </p>
          </div>
        </div>
      </div>
    </div>

    <router-link class="buttonback" to="" @click="$router.go(-1)">
      <div class="div11">Назад</div>
      <img class="search-icon" alt="" src="./public/search-icon.svg" />
    </router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.bg-icon {
  position: absolute;
  top: 0;
  left: 0;
  height: 20.88em;
}
.b1,
.buttonnext {
  display: flex;
  align-items: center;
  justify-content: center;
}
.b1 {
  position: relative;
  font-size: 1em;
  line-height: 1.75em;
  width: 6.69em;
  flex-shrink: 0;
}
.buttonnext {
  position: absolute;
  top: 17.19em;
  left: 11vw;
  border-radius: 20px;
  background-color: #ffdb6d;
  width: 77vw;
  height: 3em;
  overflow: hidden;
  flex-direction: row;
  padding: 0.5em 7.25em;
  box-sizing: border-box;
}
.div8 {
  align-self: stretch;
  position: relative;
  font-size: 1.13em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
}
.header {
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
.component-17-icon {
  position: relative;
  width: 5.38em;
  height: 5.38em;
  overflow: hidden;
  flex-shrink: 0;
}
.span {
  letter-spacing: -1px;
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
.catos-wrapper,
.component-17-parent {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.catos-wrapper {
  border-radius: 16px;
  width: 77vw;
  padding: 0.5em 0.25em;
  box-sizing: border-box;
  align-items: flex-end;
}
.component-17-parent {
  position: absolute;
  top: 6.25em;
  left: 11vw;
  align-items: center;
  gap: 1.44em;
  color: rgba(59, 59, 59, 0.96);
  width: 77vw;
}
.buttonnext-parent {
  position: absolute;
  top: 8em;
  left: 0;
  border-radius: 40px 40px 0 0;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  width: 100vw;
  height: 45.44em;
  overflow: hidden;
}
.battery-icon {
  position: absolute;
  height: 25.76%;
  width: 6.24%;
  top: 39.39%;
  right: 7.61%;
  bottom: 34.85%;
  left: 86.15%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.wifi-icon {
  position: relative;
  width: 0.95em;
  height: 0.69em;
}
.mobile-signal-icon {
  position: relative;
  width: 1.06em;
  height: 0.67em;
}
.div9 {
  position: absolute;
  height: 85.71%;
  width: 100%;
  top: 9.52%;
  left: 0;
  font-size: 0.94em;
  letter-spacing: -0.02em;
  font-weight: 100;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.div11 {
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
  text-align: left;
  color: #3b3b3b;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.iphone-13-13- {
  position: relative;
  background-color: #fdd674;
  width: 100%;
  height: 53.44em;
  overflow-y: auto;
  text-align: center;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
