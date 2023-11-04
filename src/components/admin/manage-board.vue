<template>
  <div class="field-buttons">
    <template v-if="currentPage === 'admin-pannel'">
      <button class="field-button" @click="toManageBids">
        <div class="kyc">Управление заявками и KYC</div>
        <img class="iconchange" alt="" src="@//views/public/iconchange.svg" />
      </button>
      <button class="field-button" @click="toManageUser">
        <div class="kyc">Управление пользователями</div>
        <img class="iconchange" alt="" src="@//views/public/iconchange.svg" />
      </button>
      <button class="field-button" @click="toManagePulls">
        <div class="div1">Управление пуллами</div>
        <img class="iconchange" alt="" src="@//views/public/iconchange.svg" />
      </button>
      <button class="field-button" @click="toManageLoans">
        <div class="div1">Управление займами</div>
        <img class="iconchange" alt="" src="@//views/public/iconchange.svg" />
      </button>
      <div class="field-button-switch">
        <div class="api">Скоринг по API</div>
        <catos-switch @toggle="(ev: any) => (isScrinning = ev)"></catos-switch>
      </div>
      <div class="field-button-switch">
        <div class="api">Добавить администратора</div>
        <catos-switch @toggle="(ev: any) => (isAddAdmin = ev)"></catos-switch>
      </div>
      <div class="field-button-switch">
        <div class="api">Сменить пароль</div>
        <catos-switch
          @toggle="(ev: any) => (isChangePassword = ev)"
        ></catos-switch>
      </div>
      <button class="field-button" @click="toAnalytic">
        <div class="div1">Финансовая аналитика CATOS</div>
        <img class="iconchange" alt="" src="@//views/public/iconchange.svg" />
      </button>
    </template>
    <template v-if="currentPage === 'admin-profile'">
      <div class="field-button-switch">
        <div class="api">Двухфакторная авторизация</div>
        <catos-switch @toggle="(ev: any) => (isAuth = ev)"></catos-switch>
      </div>
    </template>
    <add-admin
      v-if="isAddAdmin"
      @close="() => (isAddAdmin = false)"
    ></add-admin>
  </div>

  <desktop-modal
    v-if="isChangePassword"
    @close="() => (isChangePassword = false)"
  >
    <template v-slot:title> Восстановление пароля </template>

    <template v-slot:body>
      <p class="subtitle-admin-profile">
        Ссылка на создание нового пароля будет отправлена на <br />
        ваш email
      </p>
      <input-data
        :left="true"
        placeholder="Ваша почта"
        :style="{ width: '100%' }"
      >
        <template v-slot:left-icon>
          <img src="@/assets/images/iconsmail.svg" />
        </template>
      </input-data>
      <catos-button
        variant="secondary"
        :style="{ width: '100%', margin: '0' }"
        @click="
          () => {
            isChangePassword = false;
            isSuccessChangePassword = true;
          }
        "
        >Отправить</catos-button
      >
    </template>
  </desktop-modal>

  <desktop-modal
    v-if="isSuccessChangePassword"
    @close="() => (isSuccessChangePassword = false)"
  >
    <template v-slot:title> Восстановление пароля </template>

    <template v-slot:body>
      <p class="subtitle-success-sadmin-profile">
        Ссылка на создание нового пароля была отправлена на <br />ваш email<br />
        <a>someemain@mail.com</a>
      </p>
      <p
        class="subtitle-success-sadmin-profile-alert subtitle-success-sadmin-profile"
      >
        Если письмо не пришло в течении 10 минут, проверьте папку "спам"
      </p>
      <catos-button
        variant="secondary"
        :style="{ width: '100%', margin: '0' }"
        @click="isSuccessChangePassword = false"
        >Ок</catos-button
      >
    </template>
  </desktop-modal>

  <desktop-modal
    v-if="isScrinning"
    @close="
      () => {
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
        Автоматический скринниг по API
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
          жмите продолжить
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
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
// @ts-ignore
import catosSwitch from "@/components/ui-kit/catos-switch.vue";
// @ts-ignore
// @ts-ignore
import addAdmin from "@/components/admin/modal-body/add-admin.vue";
import desktopModal from "@/components/base/desktop-modal.vue";
import StatusModalDesktop from "@/components/base/status-modal-desktop.vue";
import Scrinning from "@/components/setting/desktop/modal-body/scrinning.vue";
import auth from "@/components/setting/desktop/modal-body/auth.vue";
import copyPaste from "@/components/fields/copy-paste.vue";
import inputData from "@/components/fields/input-data.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
const isScrinning = ref(false);
const isSuccessScrinning = ref(false);
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const currentPage = computed(() => {
  return route.name;
});
const isAddAdmin = ref(false);
const isChangePassword = ref(false);
const isSuccessChangePassword = ref(false);

const router = useRouter();
const toManageBids = () => {
  localStorage.setItem("manage", JSON.stringify("bids"));
  router.push({ name: "manage-bids" });
};
const toManageUser = () => {
  localStorage.setItem("manage", JSON.stringify("user"));
  router.push({ name: "manage-user" });
};
const toManagePulls = () => {
  localStorage.setItem("manage", JSON.stringify("pulls"));
  router.push({ name: "manage-pulls" });
};
const toManageLoans = () => {
  localStorage.setItem("manage", JSON.stringify("loans"));
  router.push({ name: "manage-loans" });
};

const toAnalytic = () => {
  router.push({ name: "admin-analytic" });
};

const isAuth = ref(false);

const stage = ref(1);

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
</script>
<style scoped lang="scss">
.kyc {
  position: relative;
  font-size: 0.88rem;
  line-height: 130%;
  z-index: 0;
  color: #3b3b3b;
  font-family: Inter;
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
.field-button {
  align-self: stretch;
  border-radius: 8px;
  background-color: #f5f5fa;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0em 0.5em 0.75em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  border: none;
  cursor: pointer;
}
.div1 {
  position: relative;
  font-size: 0.88rem;
  line-height: 140%;
  z-index: 0;
  color: #3b3b3b;
  font-family: Inter;
}
.api {
  position: relative;
  font-size: 0.88rem;
  line-height: 130%;
  color: #3b3b3b;
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
  color: #3b3b3b;
  font-family: Inter;
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
  width: 2.5em;
  z-index: 1;
}
.subtitle-admin-profile {
  color: rgba(59, 59, 59, 0.8);
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  margin: 0;
}
.subtitle-success-sadmin-profile {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  color: rgba(59, 59, 59, 0.8);
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  & a {
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      text-decoration: none;
    }
  }
  &-alert {
    line-height: 130%;
    color: #8181a5;
    text-align: center;
    width: 410px;
  }
}
</style>
