<template>
    <div class="modal-wrapper">
      <div class="parent">
        <div  class="div">
          <div class="header-pop-up">
            <div class="page-title-parent">
              <div class="page-title">{{ stage1 ? 'Забыли пароль?' : stage2 ? 'Создание нового пароля' : 'Смена пароля'}}</div>
              <img
                class="close-icon-action close-icon"
                alt=""
                src="@/assets/desktop/close.svg"
                @click="close"
              />
            </div>
            <div class="header-pop-up-child" />
          </div>
          <div class="fieldsinputchoise-parent">
            <div></div>
            <div v-if="stage3" class="image-wrapper">
              <img  class="component-17-icon" alt="" src="./public/success.svg" />
            </div>
            <span v-if="stage1" class="prompt_stage1 prompt">
                Введите адрес электронной почты, который вы использовали при регистрации, <br> и мы вышлем вам инструкции по сбросу пароля.
            </span>
            <!--<div v-if="stage2" >
                <div class="prompt2">Введите код из электронной почты</div>
                <div  class="prompt">
                    Мы отправили код подтверждения на адрес <span>{{email}}.</span>
                </div>
            </div>-->
            <div v-if="stage2" >
                <div class="prompt2">Введите новый пароль</div>
                
            </div>
            <div v-if="stage3">
                <div class="prompt4-title">Ваш пароль был успешно изменен!</div>
            </div>
            <div v-else :class="stage1 ? 'input-wrapper_stage1 input-wrapper' : stage2 ? '' : ''">
                <label v-if="stage1" class="label-email_stage1 label-email">Email <span class="required">*</span></label>
            <input-data
                v-if="stage1"
                placeholder="Ваша почта"
                v-model="email"
                :style="{ position: 'relative', width: '40%' }"
            ></input-data>
            <span class="prompt_email" v-if="!isValidEmail">
              Некорректный email. Пример, example@mail.com
             </span>
            <!--<input-data 
                v-if="stage2"
                placeholder="Код"
                v-model="code"
                name="code"
                :style="{ position: 'relative', width: '60%' }"
            ></input-data>
            <span class="prompt_code prompt" v-if="!isValidCode">
              Неверный код
             </span>-->
            <div class="group-input" v-if="stage2">
              <div>
                <label v-if="stage2" class="label-email">Новый пароль <span class="required">*</span></label>
                <input-data 
                placeholder="Пароль"
                v-model="password"
                  ></input-data>
              </div>
              <div>
                <label v-if="stage2" class="label-email">Подтверждение пароля <span class="required">*</span></label>
                <input-data 
                placeholder="Пароль"
                v-model="repeatPassword"
                ></input-data>
              </div>
              <div>
                <label v-if="stage2" class="label-email">Код подтверждения <span class="required">*</span></label>
                <input-data 
                placeholder="Код"
                v-model="code"
                name="code"
                :style="{ position: 'relative', width: '60%' }"
                ></input-data>
                <span class="prompt_code prompt" v-if="!isValidCode">
                  Неверный код
                </span>
              </div>
              
              <span class="prompt_password prompt" v-if="notEqualPassword">
                Пароли не совпадают
             </span>
            </div>
               <!--<catos-button
                v-if="stage2"
                :style="{  width: '60%', height: '40px' }"
                @click="handleConfirmEmail"
                >Подтвердить</catos-button>-->
            </div>

            <catos-button
            v-if="stage1"
             @click="getCode"
          :style="{  width: '40%', height: '40px', margin: '0 auto' }"
          >Продолжить</catos-button>

          <!--<div class="group-prompt" v-if="stage2">
                <div class="prompt">
                Отправить код повторно через 01:00
            </div>
            <div class="prompt">
                Если вы не получили наше письмо, проверьте папку "Спам".
            </div>
          </div>-->
          <!--<div class="group-info" v-if="stage3">
            В надежном пароле:
            <ul class="list">
                <li class="list-item prompt">Нет пробелов</li>
                <li class="list-item prompt">Минимум 8 символов</li>
                <li class="list-item prompt">Заглавные буквы</li>
                <li class="list-item prompt">Строчные буквы</li>
                <li class="list-item prompt">Латинские буквы</li>
                <li class="list-item prompt">Цифры</li>
            </ul>
          </div>-->
          <div class="prompt4 prompt" v-if="stage3">
            Теперь вы можете вернуться на страницу входа в систему
          </div>
          <catos-button
                v-if="stage2"
                :style="{  width: '60%', height: '40px' }"
                @click="handleChangePassowrd"
                >Подтвердить</catos-button>
                <catos-button
                v-if="stage3"
                :style="{  width: '50%', height: '40px', margin: '0 auto' }"
                @click="close"
                >Войти</catos-button>
          </div>
        </div>
      </div>
     

    </div>
  </template>
  <script setup lang="ts">
  import { changePassword, securityCode } from "@/api/users.api";
  import { ref, watch } from "vue";
  import { useErrorDataStore } from "@/stores/errorData";
  import inputData from "../fields/input-data.vue";
  import catosButton from "../ui-kit/buttons/catos-button.vue";
  import { validateEmail } from "@/utils/validateInput";

  const emtis = defineEmits(["close", "create"]);
  const email = ref('')
  const code  = ref('')
  const password = ref('')
  const repeatPassword = ref('')
  const stage1 = ref(true)
  const stage2 = ref(false)
  const stage3 = ref(false)

  const isValidEmail = ref(true);
  const isValidCode = ref(true)
  const isValidPassword = ref(true)
  const notEqualPassword = ref(false)

  const getCode = async () => {
    if(!email.value) {
      isValidEmail.value = false
    }
    if(isValidEmail.value) {
      stage1.value = false
      stage2.value= true
      await securityCode(email.value)
    }
  }

  /*const handleConfirmEmail = async () => {
    if (code.value.length === 6) {
    confirmEmail(code.value)
      .then(res => {
        if (res.status === 200) {
          isValidCode.value = true
          stage2.value = false
          stage3.value = true
        } else {
          console.log(res);
        }
      })
      .catch(err => {
        isValidCode.value = false
        console.log(err);
      });
  }
  else {
    isValidCode.value = false
  }
  }*/

  const handleChangePassowrd = async () => {
    if(password.value !== repeatPassword.value) {
      notEqualPassword.value = true
      return
    }
    else{
      notEqualPassword.value = false
    }
    if (code.value.length === 6) {
      isValidCode.value = true
      const payload = {
      new_password: password.value,
      code: Number(code.value)
    }
    await changePassword(email.value, payload)
    .then(res => {
        if (res.status === 200) {
          isValidPassword.value = true
          stage2.value = false
          stage3.value = true
        } else {
          console.log(res);
        }
      })
      .catch(err => {
        isValidPassword.value = false
        console.log(err);
      });
    }
    else {
      isValidCode.value = false
    }
  }
  
  const close = () => {
    emtis("close");
  };

  /*watch (code, (newVal) => {
    console.log(newVal)
    validateCode(newVal)
  })*/

  watch(email, (newVal) => {
  const {setErrorText} = useErrorDataStore()
  setErrorText('')
  if(newVal !== undefined || newVal !== null) {
    const isValid = validateEmail(newVal)  
    if(!isValid) {
      isValidEmail.value = false
    }
    else {
      isValidEmail.value = true
    }
  }

}, {deep: true})

   
  </script>
  <style scoped lang="scss">
  .modal-wrapper {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
  .page-title {
    flex: 1;
    position: relative;
    font-size: 1.13em;
    line-height: 130%;
    font-weight: 600;
  }
  .close-icon {
    position: relative;
    width: 1.5em;
    height: 1.5em;
    overflow: hidden;
    flex-shrink: 0;
    &-action {
      cursor: pointer;
    }
  }
  .page-title-parent {
    align-self: stretch;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    padding: 1.25em;
    align-items: center;
    justify-content: flex-start;
    gap: 0.81em;
  }
  .header-pop-up-child {
    align-self: stretch;
    position: relative;
    background-color: #f6f4fc;
    height: 0.06em;
  }
  .header-pop-up {
    align-self: stretch;
    border-radius: 15px 15px 0px 0px;
    border: 1px solid #f3efff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .div1 {
    position: relative;
    font-size: 0.88em;
    line-height: 130%;
  }
  .text {
    position: relative;
    font-size: 0.88em;
    line-height: 130%;
    font-weight: 300;
  }
  .iconchange {
    position: relative;
    width: 1.5em;
    height: 1.5em;
  }
  .text-parent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .fields-password-and-mail {
    align-self: stretch;
    border-radius: 16px;
    border: 0.5px solid #2e3a59;
    box-sizing: border-box;
    height: 2.5em;
    display: flex;
    flex-direction: column;
    padding: 0.5em 0.75em;
    align-items: flex-start;
    justify-content: center;
    color: rgba(46, 58, 89, 0.36);
  }
  .fieldsinputchoise {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.63em;
  }
  .div2 {
    flex: 1;
    position: relative;
    font-size: 1em;
  }
  .vector-icon {
    position: relative;
    width: 1em;
    height: 1em;
  }
  .group {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.94em;
  }
  .span1 {
    font-weight: 300;
  }
  .span {
    letter-spacing: 0.02em;
  }
  .span4 {
    font-weight: 300;
    font-family: Inter;
    color: rgba(46, 58, 89, 0.4);
  }
  .span3 {
    letter-spacing: 0.03em;
  }
  .div3 {
    position: relative;
    font-size: 1em;
    line-height: 130%;
  }
  .tag {
    flex: 1;
    border-radius: 16px;
    background-color: #f6f4fc;
    border: 1px solid rgba(0, 0, 0, 0.03);
    box-sizing: border-box;
    height: 2.5em;
    display: flex;
    flex-direction: row;
    padding: 0.38em 1.5em;
    align-items: center;
    justify-content: center;
  }
  .span6 {
    color: #2e3a59;
  }
  .div4 {
    position: relative;
    font-size: 1em;
    letter-spacing: 0.01em;
    line-height: 130%;
  }
  .tag-parent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1.25em;
  }
  .scroll-thumb-icon {
    position: relative;
    width: 21.38em;
    height: 2.38em;
  }
  .frame-group {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.63em;
    color: rgba(46, 58, 89, 0.4);
  }
  .frame-parent {
    width: 13.25em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.88em;
  }
  .instance-parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1.25em;
  }
  .frame-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frame-child {
    position: relative;
    width: 1.5em;
    height: 1.39em;
  }
  .b {
    position: relative;
    font-size: 1em;
    letter-spacing: 1px;
    line-height: 1.75em;
  }
  .group-parent {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.19em;
  }
  .buttonnext {
    border-radius: 20px;
    background: linear-gradient(89.81deg, #9747ff, #ad6fff);
    border: 0.5px solid #fdd674;
    box-sizing: border-box;
    width: 21.38em;
    height: 3em;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    padding: 0.5em 0.38em 0.5em 0em;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1rem;
    color: #fff;
    &:hover {
      background: linear-gradient(73deg, #7811fe 0%, #ad6fff 100%), #445331;
    }
  }
  .div8 {
    position: relative;
    font-size: 1em;
    letter-spacing: 1px;
    line-height: 1.75em;
    font-weight: 500;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .buttonnext1 {
    border-radius: 20px;
    background-color: #fff;
    width: 21.38em;
    height: 3em;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    padding: 0.5em 0.38em 0.5em 0em;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #1f1f1f;
    border: none;
    font-size: 1rem;
    cursor: pointer;
  }
  .buttonnext-parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1.25em;
    text-align: center;
    color: #fff;
    margin-top: 1.5em;
  }
  .fieldsinputchoise-parent {
    align-self: stretch;
    border-radius: 0px 0px 15px 15px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 1.25em;
    justify-content: flex-start;
    gap: 1.25em;
    padding-top: 0px;
  }
  .div {
    min-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .parent {
    position: relative;
    width: 100%;
    text-align: left;
    color: #3b3b3b;
    display: flex;
    justify-content: center;
    font-family: Inter;
  }
  .prompt{
    font-size: .83em;
    line-height: 120%;
    font-weight: 300;
    color: #3b3b3b94;
    span{
        font-size: 12px;
        color: rgba(0, 0, 0, 1);
    }
    &_email{
    position: absolute;
    top: 66px;
    left: 130px;
    font-size: 10.8px;
    color: #E93E33;
    }
    &_code {
      position: absolute;
      top: 230px;
      left: 5px;
      font-size: 10.8px;
      color: #E93E33;
    }
    &_stage1{
      text-align: center;
    }
    &_password{
      position: absolute;
      top: 150px;
      left: 5px;
      font-size: 10.8px;
      color: #E93E33;
    }
  }
  .prompt2{
    font-size: 16px;
    font-weight: 700;
    color: #3b3b3b;
    line-height: 120%;
    margin-bottom: 12px;
  }
  .prompt4{
    font-size: 14px;
    text-align: center;
  }
  .prompt4-title{
    margin-bottom: 0px;
    text-align: center;
  }
  .label-email{
    display: block;
    font-size: 16px;
    margin-bottom: 4px;
    color: #3b3b3b;
    &_stage1{
      position: relative;
      right: 70px;
    }
  }
  .required{
    color: red;
    font-size: 16px;
  }
  .input-wrapper{
    position: relative;
    &_stage1{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .input-wrapper-row{
    display: flex;
    gap: 24px;
  }
  .group-prompt, .group-input{
    display: flex;
        flex-direction: column;
        gap: 6px;
    }
    .group-input{
      position: relative;
        gap: 20px
    }
    .image-wrapper{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .list-item{
      padding-bottom: 6px;
    }
    .list{
      margin-bottom: 0px;
    }
  </style>
  