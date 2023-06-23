<template>
  <div class="iphone-13-13-form-registr">
    <img class="bg-icon" alt="" src="./public/bg.svg" />

    <div class="form-registration-66">
      <div class="component-18">
        <img class="hide-line-icon" alt="" src="./public/hide-line.svg" />

        <img
          class="icons3dpersona-creditors"
          alt=""
          src="./public/icons3dpersona-creditors1@2x.png"
        />

        <img
          class="dffdfsdqfc4-gigapixel-low-res-icon"
          alt=""
          src="./public/dffdfsdqfc4gigapixellow-resscale2-00x-1@2x.png"
        />

        <div class="div8">&lt;Имя пользователя&gt;</div>
        <div class="tonorg">Tonkeeper</div>
        <img class="component-17-icon" alt="" src="./public/component-17.svg" />

        <div class="div9">Синхронизировать</div>
      </div>
      <div class="group">
        <div class="div10">Последний этап</div>
        <div class="div11">Привяжите ваш тон кошелек</div>
      </div>
      <router-link class="buttonnext" to="connect-wallet-finish">
        <b class="ton-kepeer">Подключить TON Kepeer</b>
      </router-link>
      <div class="catos-container">
        <span class="ton-keeper-txt-container_preview ton-keeper-txt-container">
          <p class="catos-">CATOS - платформа кредитования</p>
          <p class="catos-">на базе блокчейна TON</p>
          <p class="catos-">&nbsp;</p>
          <p class="catos-">
            <span
              >Для того, чтобы брать, гасить и предоставлять займы вашей
              организации необходим криптовалютный кошелек
            </span>
            <span class="ton-keeper1">TON Keeper</span>
          </p>
        </span>
      </div>
      <div class="faq">
        <div class="faq1">
          <div class="faq2">FAQ:</div>
          <div class="frame-group">
            <div class="catos-group">
              <div class="catos1">
                Полный и подробный гайд по использованию платформы CATOS
              </div>
              <img class="iconchange" alt="" src="./public/iconchange.svg" />
            </div>
            <div class="catos-group">
              <div class="ton-keeper2">
                <span class="ton-keeper-txt-container">
                  <p class="catos-">Полный и подробный гайд</p>
                  <p class="catos-">
                    по установке использованию криптокошелька TON Keeper
                  </p>
                </span>
              </div>
              <img class="iconchange" alt="" src="./public/iconchange.svg" />
            </div>
          </div>
        </div>
        <div class="faq-child"></div>
        <div class="download">
          <div class="ton-keeper-container">
            <span>Скачать TON Keeper: </span>
            <span class="ios">для iOS, для РС, для MAC</span>
          </div>
          <div class="frame-container">
            <div class="ios-parent">
              <div class="android">iOS</div>
              <img class="iconchange2" alt="" src="./public/iconchange1.svg" />
            </div>
            <div class="ios-parent">
              <div class="android">Android</div>
              <img class="iconchange2" alt="" src="./public/iconchange2.svg" />
            </div>
          </div>
          <div class="frame-container">
            <div class="ios-parent">
              <div class="android">Windows</div>
              <img class="iconchange2" alt="" src="./public/iconchange1.svg" />
            </div>
            <div class="ios-parent">
              <div class="android">Mac OS</div>
              <img class="iconchange2" alt="" src="./public/iconchange2.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header">
      <div class="page-title-parent">
        <b class="page-title1">Экран подключения кошелька</b>
      </div>
    </div>
    <div class="slidersteps">
      <div class="loader"></div>
      <div class="numbers">
        <div class="div14">из</div>
        <div class="div14">7</div>
      </div>
      <div class="steps">
        <div class="div16">6 шаг</div>
      </div>
    </div>
    <router-link class="buttonback" to="" @click="$router.go(-1)">
      <div class="div17">Назад</div>
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
.hide-line-icon,
.icons3dpersona-creditors {
  position: absolute;
  top: 2.06em;
  left: 4.44em;
  width: 9.88em;
  height: 0.88em;
  overflow: hidden;
}
.icons3dpersona-creditors {
  top: 0;
  left: 0;
  border-radius: 45px;
  width: 4.44em;
  height: 4.38em;
  object-fit: cover;
}
.dffdfsdqfc4-gigapixel-low-res-icon {
  position: absolute;
  top: 0;
  left: 14.31em;
  border-radius: 268px;
  width: 4.44em;
  height: 4.44em;
  object-fit: cover;
}
.div8,
.tonorg {
  position: absolute;
  top: 8.94em;
  left: -1.13em;
  font-size: 0.55em;
  letter-spacing: 0.01em;
  line-height: 110%;
}
.tonorg {
  left: 27.94em;
}
.component-17-icon {
  position: absolute;
  top: 1.31em;
  left: 8.25em;
  width: 2.25em;
  height: 2.25em;
  overflow: hidden;
}
.div9 {
  position: absolute;
  top: 8.63em;
  left: 14.13em;
  font-size: 0.5em;
  line-height: 110%;
  color: #767676;
}
.component-18 {
  position: relative;
  top: 6.75em;

  width: 295px;
  height: 5.56em;
  text-align: left;
  color: rgba(0, 0, 0, 0.5);
  margin: 0 auto;
}
.div10,
.div11 {
  align-self: stretch;
  position: relative;
  font-size: 1.13em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
}
.div11 {
  font-size: 0.75em;
  line-height: 120%;
  font-weight: 300;
}
.group {
  position: absolute;
  top: 2.25em;
  left: 6vw;
  border-radius: 7px;
  width: 87.7vw;
  display: flex;
  flex-direction: column;
  padding: 0.44em 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 0.25em;
  color: #3b3b3b;
}
.ton-kepeer {
  position: relative;
  font-size: 1em;
  line-height: 1.75em;
}
.buttonnext {
  position: absolute;
  top: 23.06em;
  left: 11vw;
  border-radius: 20px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  width: 77vw;
  height: 3em;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  color: #f3f3f3;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
}
.catos- {
  margin: 0;
}
.ton-keeper1 {
  text-decoration: underline;
  color: #4e95ff;
}
.catos-container,
.catos1,
.faq2 {
  font-size: 0.75em;
  line-height: 140%;
  display: flex;
  align-items: center;
  width: 25em;
}
.catos-container {
  position: absolute;
  top: 19.92em;
  left: 3.75em;
  font-weight: 300;
  width: 77vw;
}
.catos1,
.faq2 {
  position: relative;
  font-weight: 500;
}
.catos1 {
  line-height: 130%;
  font-weight: 300;
  width: 80%;
  flex-shrink: 0;
  z-index: 0;
}
.iconchange {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  width: 39ox;
  top: 0;
  right: 0;
  bottom: 0;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  z-index: 1;
}
.catos-group {
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  width: 100%;
  height: 3.63em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0 0.5em 0.75em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  position: relative;
}
.ton-keeper-txt-container {
  width: 70%;
  &_preview {
    width: 100%;
  }
}
.ton-keeper2 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
  display: flex;
  align-items: center;
  width: 21.08em;
  flex-shrink: 0;
  z-index: 0;
}
.faq1,
.frame-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-group {
  gap: 1em;
  color: #3b3b3b;
  width: 77vw;
}
.faq1 {
  gap: 0.38em;
}
.faq-child {
  align-self: stretch;
  position: relative;
  border-top: 0.5px solid rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  height: 0.03em;
}
.ios {
  color: rgba(59, 59, 59, 0.7);
}
.ton-keeper-container {
  position: relative;
  font-size: 0.75em;
  line-height: 140%;
  font-weight: 300;
}
.iconchange2 {
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
.download,
.faq,
.frame-container {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-container {
  align-self: stretch;
  flex-direction: row;
  gap: 0.75em;
}
.download,
.faq {
  flex-direction: column;
}
.download {
  width: 77vw;
  gap: 1.06em;
  color: #3b3b3b;
}
.faq {
  position: absolute;
  top: 28.56em;
  left: 11vw;
  gap: 2em;
  text-align: left;
}
.form-registration-66 {
  position: absolute;
  top: 12.25em;
  left: 0;
  border-radius: 40px 40px 0 0;
  background-color: #fff;
  width: 100vw;
  height: 53.56em;
  text-align: center;
  color: rgba(59, 59, 59, 0.96);
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
/*.page-title-parent {
  position: absolute;
  top: 0.63em;
  left: -88.87em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 7.56em;
}*/
.battery-icon,
.header {
  position: absolute;
  height: 4.56%;
  width: 100vw;
  top: 12.16%;
  bottom: 83.29%;
  text-align: center;
  text-align: center;
}
.battery-icon {
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
.div12 {
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

.loader {
  position: absolute;
  top: 0.13em;
  left: 2.63em;
  border-radius: 24px;
  background-color: #f5f9ff;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  width: 7.69em;
  height: 1.5em;
  opacity: 0.51;
}
.div14 {
  position: relative;
  font-size: 0.5em;
  line-height: 120%;
  font-weight: 500;
}
.numbers {
  position: absolute;
  top: 0.56em;
  left: 8.19em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.44em;
}
.div16 {
  position: relative;
  font-size: 0.75em;
  line-height: 120%;
  font-weight: 500;
}
.slidersteps,
.steps {
  position: absolute;
  height: 1.75em;
}
.steps {
  top: 0;
  left: 2.75em;
  border-radius: 19px;
  background-color: #f5f9ff;
  width: 4.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #2e3a59;
}
.slidersteps {
  top: 4.19em;
  right: 1em;
  width: 10.31em;
  color: #958463;
}
.div17 {
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
  top: 3.81em;
  left: 1em;
  border-radius: 9px;
  width: 6.38em;
  color: #3b3b3b;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.iphone-13-13-form-registr {
  position: relative;
  background-color: #fdd674;
  width: 100%;
  height: 65.81em;
  overflow-y: auto;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
