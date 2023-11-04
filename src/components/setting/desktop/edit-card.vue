<template>
  <div class="frame-parent">
    <div class="fields-password-and-mail-parent">
      <div class="fields-password-and-mail">
        <div class="iconsmail-parent">
          <img class="iconsmail" alt="" src="@/views/public/iconsmail.svg" />
          <div class="alessowaitsongmailcom">AlessoWaitson@gmail.com</div>
          <img
            class="iconsedit-1"
            alt=""
            src="@/assets/images/iconseditoutline-black.svg"
            @click="() => (isChangeEmail = true)"
          />
        </div>
      </div>
      <div class="fields-password-and-mail">
        <div class="iconsmail-parent">
          <img class="iconsmail" alt="" src="@/assets/images/iconsmobile.svg" />
          <div class="alessowaitsongmailcom">+390-999-00-01</div>
          <img
            class="iconsedit-1"
            alt=""
            src="@/assets/images/iconseditoutline-black.svg"
            @click="() => (isChangePhone = true)"
          />
        </div>
      </div>
    </div>
    <div class="fields-password-and-mail2">
      <div class="iconsmail-parent">
        <img class="iconsmail" alt="" src="@/views/public/iconslock.svg" />
        <div class="alessowaitsongmailcom">**********</div>
        <img
          class="iconsedit-1"
          alt=""
          src="@/assets/images/iconseditoutline-black.svg"
          @click="() => (isChangePassword = true)"
        />
      </div>
    </div>
  </div>
  <desktop-modal
    v-if="isChangeEmail || isChangePhone"
    @close="
      () => (isChangeEmail ? (isChangeEmail = false) : (isChangePhone = false))
    "
  >
    <template v-slot:title>
      {{ isChangeEmail ? "Смена почты" : "Смена номера телефона" }}</template
    >
    <template v-slot:body>
      <div class="fields">
        <div class="fieldsregistration-options3">
          <div class="fieldsregistration-options-child"></div>
          <div class="text-and-fill2">
            <div class="div282">
              <span>
                {{ isChangeEmail ? "Новая почта" : "Введите новый номер" }}
              </span>
              <span class="span"> *</span>
            </div>
          </div>

          <input-data
            :left="true"
            :placeholder="isChangeEmail ? 'Ваша почта' : 'Ваш номер телефона'"
            :style="{ width: '333px', margin: '20px 20px 0 20px' }"
          >
            <template v-slot:left-icon>
              <img v-if="isChangeEmail" src="@/assets/images/iconsmail.svg" />
              <img v-else src="@/assets/images/iconsmobile.svg" />
            </template>
          </input-data>
          <div class="div292">
            Укажите новую почту на которую будет отправлен код
          </div>
        </div>
        <div class="des-and-bbn1">
          <div class="text-and-button">
            <catos-button
              variant="fourth"
              :style="{ width: '100%', margin: '0 auto' }"
              >Отправить номер</catos-button
            >
          </div>
        </div>
      </div>
      <div class="fields">
        <div class="fieldsregistration-options4">
          <div
            class="fieldsregistration-options-child_email fieldsregistration-options-child"
          ></div>
          <div class="text-and-fill2">
            <div class="div282">
              <span>Подтверждение почты </span>
              <span class="span">*</span>
            </div>
          </div>
          <div class="fields-password-and-mail5">
            <div class="iconslock-container">
              <div class="div32">Введите код:</div>
            </div>
          </div>
          <a
            class="koahyan123gmailcom"
            href="mailto:Koa.Hyan123@gmail.com"
            target="_blank"
          >
            <span
              >Код отправлен на {{ isChangeEmail ? "почту" : "номер" }}:</span
            >
            <span class="koahyan123gmailcom1">
              {{
                isChangeEmail ? " Koa.Hyan123@gmail.com" : " +7 (999) 215-43-26"
              }}</span
            >
          </a>
          <div class="div33">
            <span>Примерное время </span>
            <span class="span5">ожидания</span>
            <span>:</span>
            <span class="span6"> </span>
            <span class="koahyan123gmailcom1"> 1 мин</span>
          </div>
          <div class="fieldsregistration-options-inner">
            <div class="frame-parent4">
              <div class="group">
                <img
                  class="iconssend"
                  alt=""
                  src="@/assets/images/iconssend.svg"
                />

                <div class="div34">Отправить код повторно:</div>
              </div>
              <div class="frame">
                <div class="div35">60 сек</div>
              </div>
            </div>
          </div>
          <div class="inputfields">
            <input maxlength="1" class="component-4" />
            <input maxlength="1" class="component-4" />
            <input maxlength="1" class="component-4" />
            <input maxlength="1" class="component-4" />
            <input maxlength="1" class="component-4" />
          </div>
        </div>
      </div>
      <div class="des-and-bbn1">
        <div class="text-and-button">
          <catos-button
            variant="fourth"
            :style="{ width: '100%' }"
            @click="
              () => {
                isChangePhone = false;
                isChangeEmail = false;
              }
            "
          >
            <div class="text">
              {{ isChangeEmail ? "Изменить почту" : "Изменить номер телефона" }}
            </div>
          </catos-button>
        </div>
      </div>
      <div class="instance-wrapper">
        <div class="frame-parent5">
          <div class="name-parent">
            <div class="div42">
              <span class="span8">Если у вас возникли дополнительные </span
              >вопросы или нашли ошибку нашей системе обратитесь в службу
              поддержки
            </div>
          </div>
          <button class="footer-wrapper_email footer-wrapper">
            <div class="message-circle-parent">
              <img
                class="iconsmobile"
                alt=""
                src="@/assets/images/messagecircle.svg"
              />

              <div class="div43">Служба поддержки</div>
            </div>
          </button>
        </div>
      </div>
    </template>
  </desktop-modal>

  <desktop-modal
    v-if="isChangePassword"
    @close="() => (isChangePassword = false)"
  >
    <template v-if="currentPage === 'admin-profile'" v-slot:title>
      Восстановление пароля
    </template>
    <template v-slot:title v-else> Изменение пароля </template>
    <template v-slot:body v-if="currentPage === 'admin-profile'">
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
    <template v-else v-slot:body>
      <div>
        <input-data
          :style="{ width: '410px' }"
          placeholder="Введите текущий пароль"
          type="password"
        >
          <template v-slot:right-icon>
            <img
              src="@/assets/images/password.png"
              :style="{ width: '1.13em', height: '1.13em' }"
            />
          </template>
        </input-data>
        <span class="div29">
          Текущий пароль можно посмотреть в настройках профиля
        </span>
      </div>
      <input-data
        :style="{ width: '410px' }"
        placeholder="Введите текущий пароль"
        type="password"
      >
        <template v-slot:right-icon>
          <img
            src="@/assets/images/password.png"
            :style="{ width: '1.13em', height: '1.13em' }"
          />
        </template>
      </input-data>
      <input-data
        :style="{ width: '410px' }"
        placeholder="Введите текущий пароль"
        type="password"
      >
        <template v-slot:right-icon>
          <img
            src="@/assets/images/password.png"
            :style="{ width: '1.13em', height: '1.13em' }"
          />
        </template>
      </input-data>
      <catos-button
        :style="{
          width: '300px',
          margin: '0 auto',
          position: 'relative',
          top: '0.5em',
          borderRadius: '24px',
        }"
        @click="
          () => {
            isChangePassword = false;
            isSuccessChangePassword = true;
          }
        "
        >Изменить пароль</catos-button
      >

      <a
        class="link__restore"
        @click="
          () => {
            isChangePassword = false;
            isRestorePassword = true;
          }
        "
        >Восстановить пароль?</a
      >
      <div class="instance-wrapper">
        <div class="frame-parent5">
          <div class="name-parent">
            <div class="div42">
              <span class="span8">Если у вас возникли дополнительные </span
              >вопросы или нашли ошибку нашей системе обратитесь в службу
              поддержки
            </div>
          </div>
          <button class="footer-wrapper">
            <div class="message-circle-parent">
              <img
                class="iconsmobile"
                alt=""
                src="@/assets/images/messagecircle.svg"
              />

              <div class="div43">Служба поддержки</div>
            </div>
          </button>
        </div>
      </div>
    </template>
  </desktop-modal>
  <desktop-modal
    v-if="isSuccessChangePassword"
    @close="() => (isSuccessChangePassword = false)"
  >
    <template v-slot:title v-if="currentPage === 'admin-profile'">
      Восстановление пароля
    </template>
    <template v-slot:title v-else> Изменение пароля </template>
    <template v-slot:body v-if="currentPage === 'admin-profile'">
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
    <template v-slot:body v-else>
      <div class="fieldsregistration-options1">
        <div class="text-and-fill1">
          <img class="success-image" src="@/assets/images/success.svg" />
          <h3 class="title-info">Пароль успешно изменен</h3>
          <span class="div28">
            Пароль повиться в вашем профиле, приятного использования
          </span>
        </div>
      </div>
      <catos-button
        :style="{
          width: '300px',
          margin: '0 auto',
          borderRadius: '24px',
        }"
        @click="() => (isSuccessChangePassword = false)"
        >Вернуться в профиль</catos-button
      >
    </template>
  </desktop-modal>
  <desktop-modal
    v-if="isRestorePassword"
    @close="() => (isRestorePassword = false)"
  >
    <template v-slot:title> Восстановление пароля </template>

    <template v-slot:body>
      <div class="fields_restore fields">
        <p class="fields_label">Укажите один из удобных вариантов</p>
        <div class="fieldsregistration-options2">
          <div class="fieldsregistration-options-child"></div>
          <div class="text-and-fill2">
            <div class="div282">
              <span>Номер телефона </span>
              <span class="span">*</span>
            </div>
          </div>

          <input-data
            :left="true"
            placeholder="Ваш номер телефона"
            :style="{ width: '430px', margin: '20px 20px 0 20px' }"
          >
            <template v-slot:left-icon>
              <img src="@/assets/images/iconsmobile.svg" />
            </template>
          </input-data>
          <div class="div292">Укажите номер на который вы зарегистрированы</div>
        </div>
        <div class="fieldsregistration-options2">
          <div class="fieldsregistration-options-child"></div>
          <div class="text-and-fill2">
            <div class="div282">
              <span>Электронная почта </span>
              <span class="span">*</span>
            </div>
          </div>

          <input-data
            :left="true"
            placeholder="Ваш почта"
            :style="{ width: '430px', margin: '20px 20px 0 20px' }"
          >
            <template v-slot:left-icon>
              <img src="@/assets/images/iconsmail.svg" />
            </template>
          </input-data>
          <div class="div292">Укажите номер на который вы зарегистрированы</div>
        </div>
      </div>
      <div class="des-and-bbn">
        <div class="text-and-button">
          <catos-button
            variant="fourth"
            :style="{ width: '100%' }"
            @click="() => (isRestorePassword = false)"
          >
            <div class="text">Изменить и отправить новый пароль</div>
          </catos-button>
          <catos-button
            variant="fourth_outline"
            :style="{ width: '100%', color: '#555562' }"
          >
            <div class="text">Выслать текущий пароль</div>
          </catos-button>
        </div>
      </div>
    </template>
  </desktop-modal>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import desktopModal from "@/components/base/desktop-modal.vue";
import inputData from "@/components/fields/input-data.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import { useRoute } from "vue-router";
const isChangeEmail = ref(false);
const isChangePhone = ref(false);
const isChangePassword = ref(false);
const isSuccessChangePassword = ref(false);
const isRestorePassword = ref(false);

const route = useRoute();
const currentPage = computed(() => {
  return route.name;
});
</script>
<style scoped lang="scss">
.component-4 {
  border-radius: 15px;
  border: 1px solid #70ca98;
  box-sizing: border-box;
  width: 2.7em;
  height: 2.7em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
}
.inputfields {
  position: absolute;
  top: 4.6em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 0.31em;
  color: #2e3a59;
  width: 100%;
}
.frame {
  border-radius: 8px;
  background-color: rgba(253, 214, 116, 0.39);
  flex-direction: column;
  padding: 0.13em 0.69em;
  justify-content: center;
  display: flex;
  align-items: center;
}
.div34,
.div35 {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.02em;
  line-height: 120%;
}
.div35 {
  font-size: 0.88em;
  background: linear-gradient(
    38.6deg,
    #2e2c2c,
    #4b4949 67.46%,
    #131313,
    rgba(0, 0, 0, 0.94),
    #434343
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.iconssend {
  position: relative;
  border-radius: 2px;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.group {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.frame-parent4 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.fieldsregistration-options-inner {
  position: absolute;
  width: calc(100% - 42px);
  top: 9.38em;
  right: 1.31em;
  left: 1.31em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: Poppins;
}
.koahyan123gmailcom1 {
  color: #3b3b3b;
}
.span6 {
  color: #000;
}
.span5 {
  color: rgba(59, 59, 59, 0.68);
}
.div33 {
  position: absolute;
  top: 2.5rem;
  left: 6.14%;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
  color: rgba(59, 59, 59, 0.58);
}
.koahyan123gmailcom {
  position: absolute;
  top: 1.5rem;
  left: 6.14%;
  font-size: 0.63em;
  line-height: 1em;
  font-weight: 300;
  text-decoration: none;
  color: rgba(59, 59, 59, 0.58);
}
.div32 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
}
.iconslock-container {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.fields-password-and-mail5 {
  position: absolute;
  width: calc(100% - 42px);
  top: calc(50% - 47.5px);
  right: 1.31em;
  left: 1.31em;
  border-radius: 16px;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  height: 2.5em;
  overflow: hidden;
  display: none;
  flex-direction: column;
  padding: 0 0.75em;
  align-items: flex-start;
  justify-content: center;
  color: #2e3a59;
  font-family: Poppins;
}
.text-and-button {
  align-self: stretch;
  flex: 1;
  align-items: flex-start;
  gap: 0.81em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.des-and-bbn,
.des-and-bbn1 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  border-radius: 16px;
  background-color: #f9fbff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  padding: 0.75em 1.31em;
  align-items: flex-start;
  text-align: right;
  color: #fefefe;
}
.des-and-bbn1 {
  width: 380px;
  margin: 0 auto;
}
.fieldsregistration-options-child {
  position: absolute;
  width: 100%;
  top: calc(50% - 49.5px);
  right: 0;
  left: 0;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  height: 6.5em;
  &_email {
    height: 98%;
    top: calc(27% - 49.5px);
  }
}
.fields {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 1.75em;
  width: 380px;
  margin: 0 auto;
  &_label {
    margin: 0px;
    width: 288px;
    color: rgba(59, 59, 59, 0.8);
    font-size: 14px;
    font-family: Inter;
    font-weight: 300;
    line-height: 120%;
  }
  &_restore {
    width: 480px;
  }
}
.span {
  color: red;
}
.fieldsregistration-options2,
.fieldsregistration-options3,
.fieldsregistration-options4 {
  position: relative;
  width: 100%;
  height: 6.81em;
  z-index: 0;
}
.fieldsregistration-options3,
.fieldsregistration-options4 {
  width: 380px;
}
.fieldsregistration-options4 {
  height: 203px;
}
.div282 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
  font-weight: 500;
  color: #3b3b3b;
  background: #fff;
  padding: 0em 6px;
}
.div28 {
  font-size: 0.75em;
  line-height: 0.71em;
  font-weight: 300;
  text-align: center;
  color: rgba(59, 59, 59, 0.96);
  line-height: 140%;
  width: 332px;
}
.title-info {
  font-weight: 400;
  font-size: var(--font-size-base);
  line-height: 20.8px;
  margin: 0.5em 0em;
}
.fieldsregistration-options1 {
  position: relative;
  width: 450px;

  z-index: 0;
  background: #f6f4fc;
  border-radius: var(--br-base);
  padding: 0.63em 0.88em;
}

.text-and-fill1,
.text-and-fill2 {
  background: none;
  flex-direction: column;

  align-items: center;

  display: flex;
  width: 100%;
}
.text-and-fill2 {
  top: 0;
  left: 1.13em;
  background-color: #fff;
  flex-direction: row;
  padding: 0 1em;
  align-items: flex-start;
  justify-content: flex-start;
}
.div292 {
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
  color: #78789a;

  position: relative;
  width: 345px;
  margin: 14px 20px 0px 20px;
}
.div29 {
  width: 84.21%;

  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
  color: rgba(59, 59, 59, 0.58);
  align-items: center;

  display: flex;
  margin-top: 0.8em;
}
.frame-parent5,
.instance-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 380px;
}
.frame-parent5 {
  gap: 0.75em;
}
.name-parent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.div42 {
  position: relative;
  line-height: 130%;
}
.div42 {
  align-self: stretch;
  font-size: 0.75em;
  font-weight: 300;
  text-align: center;
  color: rgba(59, 59, 59, 0.54);
}
.span8 {
  letter-spacing: 0.01em;
}
.footer-wrapper {
  border-radius: 16px;
  width: 300px;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  color: #2c56c0;
  border: 1px solid rgba(165, 146, 221, 0.15);
  background: transparent;
  cursor: pointer;
  margin: 0 auto;
  &_email {
    width: 100%;
  }
}
.message-circle-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
}
.iconsmobile {
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
}
.div43 {
  position: relative;
  line-height: 130%;
  font-size: 0.75rem;
  text-decoration: underline;
}
.link__restore {
  font-size: var(--font-size-xs);
  color: #737373;
  margin: 0 auto;
  text-decoration: underline;
  width: 142px;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
}
.iconsmail {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.alessowaitsongmailcom {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 500;
}
.iconsedit-1 {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
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
  align-self: stretch;
  border-radius: 16px;
  background-color: #fff;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 0.03em 0.75em;
  align-items: flex-start;
  justify-content: center;
}
.fields-password-and-mail-parent {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.fields-password-and-mail2 {
  flex: 1;
  border-radius: 16px;
  background-color: #fff;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  height: 2.5em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.03em 0.75em;
  align-items: flex-start;
  justify-content: center;
}
.frame-parent {
  position: relative;
  border-radius: 15px;
  background-color: #fff;
  border: 1px solid #eeeff2;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 1.25em 3.5em 1.25em 1.25em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
  text-align: left;
  color: #2e3a59;
  font-family: Inter;
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
