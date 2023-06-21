<template>
  <div class="div8">
    <div class="bg3"></div>
    <div class="inner">
      <div class="header">
        <div class="div11">Кредитные пуллы</div>
      </div>
    </div>
    <section class="content"><slot /></section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.inner {
  position: absolute;
  z-index: 10;
  top: 7em;
}
.battery-icon {
  position: absolute;
  height: 25.76%;
  width: 6.24%;
  top: 39.4%;
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
  font-weight: 500;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.time-style {
  position: absolute;
  height: 47.73%;
  width: 13.85%;
  top: 27.27%;
  right: 80.77%;
  bottom: 25%;
  left: 5.38%;
}
.div10 {
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
.time-style1 {
  position: absolute;
  height: 47.73%;
  width: 13.85%;
  top: 27.27%;
  right: 80.77%;
  bottom: 25%;
  left: 5.38%;
  display: none;
  color: #fff;
}
.ui-bars-status-bars-white {
  position: absolute;
  top: 0;
  left: 0;
  width: 24.38em;
  height: 2.75em;
  color: #1c1c1c;
}
.bg-icon {
  width: 100%;
  //width: 130vw;
}
.div11 {
  align-self: stretch;
  position: relative;
  font-size: 1.13em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
}
.header {
  left: 0em;
  border-radius: 7px;
  width: 100vw;
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.p {
  margin: 0;
}
.div13 {
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
  left: 2.81em;
  border-radius: 7px;
  width: 18.75em;
  display: flex;
  flex-direction: column;
  padding: 0.44em 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 0.75em;
}
.span {
  letter-spacing: 0.01em;
}
.google-authentificator-container {
  position: absolute;
  top: 25.92em;
  left: 3.75em;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
  display: inline-block;
  width: 25em;
}
.connect-child {
  position: absolute;
  top: 6em;
  left: -74.19em;
  width: 98.44em;
  height: 9.94em;
}
.iconsstatus-transaction {
  position: absolute;
  top: 9.38em;
  left: 7.75em;
  width: 8.88em;
  height: 8.88em;
  overflow: hidden;
}
.ios {
  color: rgba(59, 59, 59, 0.7);
}
.google-authentificator-container1 {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  line-height: 140%;
  font-weight: 300;
}
.iconchange {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  max-height: 100%;
  width: 2.5em;
  z-index: 1;
}
.ios-parent {
  flex: 1;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  height: 2.5em;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0 0.5em 0.75em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  position: relative;
}
.android {
  position: relative;
  font-size: 0.75em;
  line-height: 140%;
  z-index: 0;
}
.frame-container,
.google-authentificator-io-parent {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-container {
  width: 18.75em;
  flex-direction: row;
  gap: 0.75em;
  text-align: left;
}
.google-authentificator-io-parent {
  flex-direction: column;
  gap: 1em;
}
.ton-kepeer {
  position: relative;
  font-size: 1em;
  line-height: 1.75em;
}
.buttonnext {
  border-radius: 20px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  width: 88vw;
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
.div14 {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.01em;
  line-height: 120%;
  font-weight: 300;
  color: rgba(59, 59, 59, 0.7);
  display: inline-block;
  width: 25em;
}
.buttonnext-parent,
.frame-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.buttonnext-parent {
  gap: 1em;
  color: #f3f3f3;
}
.frame-group {
  position: absolute;
  top: 24.19em;
  left: 2.81em;
  width: 18.75em;
  gap: 1.5em;
  cursor: pointer;
}
.swipe-down {
  position: absolute;
  top: 0.75em;
  left: 10.94em;
  border-radius: 25px;
  background-color: #cad0e4;
  width: 2.63em;
  height: 0.31em;
}
.connect,
.div8 {
  z-index: 10;
}
.connect {
  position: absolute;
  top: 60em;
  left: 0;
  border-radius: 40px 40px 0 0;
  border: 1px solid rgba(0, 0, 0, 0.13);
  box-sizing: border-box;
  width: 24.38em;
  height: 48em;
  overflow: hidden;
}
.div8 {
  position: absolute;
  top: 3.6em;
  left: 0.2em;
  min-width: 100%;
  height: 59.38em;
  overflow-y: auto;
  text-align: center;
  color: #3b3b3b;
  font-family: Inter;
  overflow: hidden;
  left: 0 !important;
  top: 0 !important;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
  height: 100vh;
}
.content {
  position: relative;

  top: 34vw;
}
.bg3 {
  top: 0;
  background-color: rgba(166, 146, 221, 0.2);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  height: 30vh;
  width: 100vw;
  position: absolute;
  left: 0;

  z-index: 30;
}
.buttonnext-group {
  z-index: 1000;
  position: absolute;
  top: 0;
}
</style>
