<template>
  <div class="field-buttons">
    <button class="field-button" @click="toTransaction">
      <div class="div">История транзакций</div>
      <img class="iconchange" alt="" src="@/views/public/iconchange.svg" />
    </button>
    <!-- <button class="field-button" @click="() => (isScrinning = true)">
      <div class="div">Настроить API</div>
      <img class="iconchange" alt="" src="@/views/public/iconchange.svg" />
    </button> -->
    <button class="field-button" @click="() => (isChangeWallet = true)">
      <div class="div">Изменить кошелек</div>
      <img class="iconchange" alt="" src="@/views/public/iconchange.svg" />
    </button>
    <!--<button class="field-button">
      <div class="div">Изменить данные компании</div>
      <img class="iconchange" alt="" src="@/views/public/iconchange.svg" />
    </button>-->
    <div class="field-button-switch">
      <div class="div3">Двухфакторная авторизация</div>
      <catos-switch @toggle="(ev: any) => (isAuth = ev)"></catos-switch>
    </div>
    <div class="tags-grey">
      <img
        class="bg-hover-icon"
        alt=""
        src="@/assets/desktop/fallback/bg-hover.svg"
      />
      <b class="tag">Кредитор</b>
    </div>
  </div>
  <desktop-modal
    v-if="isScrinning || isChangeWallet || isSuccessChangeWallet"
    @close="
      () => {
        isChangeWallet = false;
        isScrinning = false;
      }
    "
  >
    <template v-slot:title>
      <h3
        :style="{
          fontSize: '18px',
          fontWeight: '600',
          margin: '0',
        }"
      >
        {{
          isScrinning
            ? "Автоматический скринниг по API"
            : isChangeWallet || isSuccessChangeWallet
            ? "Изменение кошелька"
            : ""
        }}
      </h3>
    </template>
    <template v-slot:body>
      <scrinning
        v-if="isScrinning"
        @close="() => (isScrinning = false)"
        @result="
          () => {
            isSuccessScrinning = true;
            isScrinning = false;
          }
        "
      ></scrinning>
      <change-wallet
        v-if="isChangeWallet || isSuccessChangeWallet"
        @close="() => (isChangeWallet = false)"
      >
        <template v-if="isSuccessChangeWallet" v-slot:title>
          Кошелек успешно изменен
        </template>
        <template v-if="isChangeWallet" v-slot:subtitle>
          В целях безопасности, после изменения кошелька вам позвонит менеджер
          CATOS и убедится в том, что это именно вы инициировали изменение
          кошелька
        </template>
        <template v-slot:action>
          <catos-button
            variant="secondary"
            @click="handleChangeWallet"
            :style="{ width: '100%', margin: '0 auto' }"
          >
            {{ isChangeWallet ? "Изменить кошелек" : "Продолжить" }}
          </catos-button>
        </template>
        <template v-if="isChangeWallet" v-slot:cancel>
          <div class="buttonnext1" @click="() => (isChangeWallet = false)">
            <div class="div1">Отмена</div>
          </div>
        </template>
        <template v-if="isChangeWallet" v-slot:doc>
          <div class="div2">Документация и инструкции</div>
        </template>
      </change-wallet>
    </template>
  </desktop-modal>
  <status-modal-desktop
    v-if="isSuccessScrinning"
    @close="() => (isSuccessScrinning = false)"
  >
    <template v-slot:header>
      <h3
        :style="{
          fontSize: '18px',
          fontWeight: '600',
          margin: '0',
        }"
      >
        {{ isSuccessScrinning ? "Автоматический скринниг по API" : "" }}
      </h3>
    </template>
    <template v-slot:title> Настройки сохранены </template>
    <template v-slot:image>
      <div
        :style="{
          width: '440px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
        }"
      >
        <img src="@/assets/desktop/success-scrinning-api.svg" />
      </div>
    </template>
    <template v-slot:action> Вернуться в настройки </template>
  </status-modal-desktop>

  <!--Auth-->
  <desktop-modal
    v-if="isAuth"
    @close="
      () => {
        stage = 1;
        isAuth = false;
      }
    "
  >
    <template v-slot:title> Двухфакторная авторизация </template>
    <template v-if="stage === 1" v-slot:body>
      <auth @change-stage="handleAuthStage" :stage="stage">
        <template v-slot:top-text>
          Для большей защиты вашего акаунта используйте двухфакторную
          авторизацию
        </template>
        <template v-slot:bottom-text>
          Для того, что бы продолжить загрузите и установите приложение Google
          Authentificator на ваш телефон
        </template>
        <template v-slot:google-authenticator-text>
          для iOS и для Android
        </template>
        <template v-slot:google-authenticator-action>
          <div class="ios-parent">
            <div class="android">iOS</div>
            <img
              class="iconchange"
              alt=""
              src="@/assets/desktop/fallback/iconchange.svg"
            />
          </div>
          <div class="ios-parent">
            <div class="android">Android</div>
            <img
              class="iconchange"
              alt=""
              src="@/assets/desktop/fallback/iconchange.svg"
            />
          </div>
        </template>
        <template v-slot:action> Продолжить </template>
        <template v-slot:footer-text>
          Если приложение установлено, <br />
          нажмите продолжить
        </template>
      </auth>
    </template>
    <template v-if="stage === 2" v-slot:body>
      <auth @change-stage="handleAuthStage" :stage="stage">
        <template v-slot:top-text>
          <span :style="{ fontWeight: '700' }"
            >Пожалуйста сохраните ваш ключ доступа:</span
          >
          <br />запишите на бумаге, сделайте скриншот или скопируйте
        </template>
        <template v-slot:bottom-text>
          Этот ключ поможет вам восстановить ваш Google Authentication в случае
          утери или смены телефона
        </template>
        <template v-slot:google-authenticator-text>
          скопируйте ключ доступа
        </template>
        <template v-slot:google-authenticator-action>
          <copy-paste value="LKDXOOQCPWAAIAWT" padding="45">
            <template v-slot:label> Key: </template>
            <template v-slot:icon>
              <img src="@/assets/images/iconspaste.svg"
            /></template>
          </copy-paste>
        </template>
        <template v-slot:action> Сохранил, продолжить </template>
      </auth>
    </template>
    <template v-if="stage === 3" v-slot:body>
      <auth @change-stage="handleAuthStage" :stage="stage">
        <template v-slot:top-text>
          Отсканируйте QR код с ключем доступа в приложении Google
          <br />Authentificator или добавьте его вручную:
        </template>
        <template v-slot:bottom-text>
          Этот ключ поможет вам восстановить ваш Google Authentication в случае
          утери или смены телефона
        </template>
        <template v-slot:google-authenticator-text>
          скопируйте ключ доступа
        </template>
        <template v-slot:google-authenticator-action>
          <div
            :style="{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              width: '100%',
            }"
          >
            <copy-paste value="CATOSdApp" padding="110">
              <template v-slot:label> Account Name: </template>
              <template v-slot:icon>
                <img src="@/assets/images/iconspaste.svg"
              /></template>
            </copy-paste>
            <copy-paste value="LKDXOOQCPWAAIAWT" padding="45">
              <template v-slot:label> Key: </template>
              <template v-slot:icon>
                <img src="@/assets/images/iconspaste.svg"
              /></template>
            </copy-paste>
          </div>
        </template>
        <template v-slot:action> Сохранил, продолжить </template>
      </auth>
    </template>
    <template v-if="stage === 4" v-slot:body>
      <auth @change-stage="handleAuthStage" :stage="stage">
        <template v-slot:top-text>
          Вставьте или напишите ключ доступа сгенерированный для вас приложением
          Google Authentificator:
        </template>

        <template v-slot:google-authenticator-text>
          введите <br />
          сгенерированный для вас ключ доступа
        </template>
        <template v-slot:google-authenticator-action>
          <copy-paste value="LKDXOOQCPWAAIAWT" padding="45">
            <template v-slot:label> Key: </template>
            <template v-slot:icon>
              <img src="@/assets/images/iconspaste.svg"
            /></template>
          </copy-paste>
        </template>
        <template v-slot:action> Включить 2FA </template>
      </auth>
    </template>
    <template v-if="stage === 5" v-slot:body>
      <auth @change-stage="handleAuthStage" :stage="stage">
        <template v-slot:top-text>
          <h3>Ваш аккаунт защищен</h3>
          Двухфакторная авторизация активирована – ваш аккаунт под двойной
          защитой
        </template>
        <template v-slot:bottom-text>
          Теперь, при входе в Catos с другого устройства вам нужно будет ввести
          одноразовый код активации из Google Authentificator:
        </template>
        <template v-slot:action> Включить 2FA </template>
      </auth>
    </template>
  </desktop-modal>
  <confirm-qr-destop
    variant="back"
    :to-back="
      () => {
        isScan = false;
        isChangeWallet = true;
      }
    "
    v-if="isScan"
    @close="() => (isScan = false)"
    @result="
      () => {
        isScan = false;
        isSuccessChangeWallet = true;
      }
    "
  >
    <template v-slot:header> Изменение кошелька </template>
    <template v-slot:title> Connect TON </template>
    <template v-slot:subtitle>
      Scan the QR code and pay 13 512 TON <br />
      with Tonkeeper using
    </template>
    <template v-slot:action> Sign in with Tokenkeeper </template>
    <template v-slot:footer>
      <span class="scan-footer">
        We do not receive or store your wallet login details, so your TON is
        safe.
      </span>
    </template>
  </confirm-qr-destop>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import desktopModal from "@/components/base/desktop-modal.vue";
import StatusModalDesktop from "@/components/base/status-modal-desktop.vue";
import Scrinning from "./modal-body/scrinning.vue";
import changeWallet from "./modal-body/change-wallet.vue";
import confirmQrDestop from "@/components/base/confirm-qr-destop.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import catosSwitch from "@/components/ui-kit/catos-switch.vue";
import copyPaste from "@/components/fields/copy-paste.vue";
import auth from "./modal-body/auth.vue";
const router = useRouter();

const isScrinning = ref(false);
const isChangeWallet = ref(false);
const isSuccessScrinning = ref(false);
const isScan = ref(false);
const isSuccessChangeWallet = ref(false);
const isAuth = ref(false);

const stage = ref(1);

const handleChangeWallet = () => {
  if (isChangeWallet.value) {
    isChangeWallet.value = false;
    isScan.value = true;
  } else {
    isSuccessChangeWallet.value = false;
  }
};
const handleAuthStage = (ev: any) => {
  if (ev < 1 || ev > 5) {
    if (ev > 5) {
      stage.value = 1;
    }
    isAuth.value = false;
  } else {
    stage.value = ev;
  }
};
const toTransaction = () => {
  router.push({ name: "transaction-history" });
};
</script>
<style scoped lang="scss">
.div {
  position: relative;
  font-size: 0.88rem;
  line-height: 130%;
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
  width: 2.5rem;
  z-index: 1;
  cursor: pointer;
}
.field-button {
  align-self: stretch;
  border-radius: 8px;
  background-color: #f5f5fa;
  height: 2.5rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5rem 0rem 0.5rem 0.75rem;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  border: none;
  color: #3b3b3b;
  cursor: pointer;
}
.div3 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.handle {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  border-radius: 50%;
  background-color: #79747e;
  width: 1em;
  height: 1em;
  z-index: 1;
}
.overlay {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  border-radius: 100px;
  background-color: #1c1b1f;
  width: 1em;
  height: 1em;
  display: none;
  opacity: 0.08;
  z-index: 0;
}
.handle-container {
  width: 2em;
  height: 2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
}
.switch {
  border-radius: 100px;
  background-color: #e7e0ec;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  width: 3.25em;
  height: 1.75em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.field-button-switch {
  align-self: stretch;
  border-radius: 8px;
  background-color: #f5f5fa;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0.63em;
  align-items: center;
  justify-content: space-between;
}
.bg-hover-icon {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 8px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.tag {
  position: absolute;
  top: calc(50% - 11px);
  left: 1.21em;
  font-size: 0.88em;
  line-height: 1.5em;
}
.tags-grey {
  position: relative;
  width: 6.25em;
  height: 2.25em;
  display: none;
  text-align: center;
  color: #8181a5;
  font-family: Lato;
}
.field-buttons {
  position: relative;
  border-radius: 16px;
  background-color: #fff;
  border: 0.5px solid rgba(46, 58, 89, 0.08);
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  align-items: center;
  justify-content: flex-start;
  gap: 1em;
  text-align: left;

  font-family: Inter;
}
.scan-footer {
  color: rgba(59, 59, 59, 0.7);
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-weight: 300;
  line-height: 130%;
  width: 440px;
}
.div2 {
  /* left: 12.79em; */
  font-size: 0.75em;
  text-decoration: underline;
  letter-spacing: 0.01em;
  line-height: 130%;
  color: rgba(87, 126, 247, 0.96);
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
}
.div1 {
  font-size: 0.88em;
  line-height: 130%;
}
.buttonnext1 {
  align-self: stretch;
  border-radius: 20px;
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  color: rgba(38, 38, 38, 0.62);
  cursor: pointer;
}
.ios-parent {
  flex: 1;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  height: 2.5em;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0em 0.5em 0.75em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  position: relative;
}
.android {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
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
  z-index: 1;
}
</style>
