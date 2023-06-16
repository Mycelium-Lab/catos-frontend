<template>
  <div class="iphone-13-13-">
    <img class="bg-icon" alt="" src="./public/bg.svg" />

    <div class="frame-group">
      <div class="fieldsinput-parent">
        <div class="fieldsinput">
          <div class="email-container">
            <span>Представьтесь пожалуйста </span>
            <span class="span">*</span>
          </div>
          <input-data
            placeholder="Введите имя"
            :style="{ width: '100%' }"
          ></input-data>
        </div>
        <div class="fieldsinput">
          <div class="email-container">
            <span>Ваш Email для обратной связи </span>
            <span class="span">*</span>
          </div>
          <input-data
            placeholder="Ваша почта"
            :style="{ width: '100%' }"
          ></input-data>
        </div>
        <div class="frame-div">
          <div class="div11">
            <span>Описание проблемы </span>
            <span class="span">*</span>
          </div>
          <catos-textarea placeholder="Напишите ваш вопрос"></catos-textarea>
        </div>
        <div class="frame-container">
          <div class="icons-parent">
            <img class="frame-inner" alt="" src="./public/frame-1817518.svg" />

            <div class="div13">Прикрепить файл</div>
          </div>
          <div class="loadernav">
            <div class="icons-parent">
              <div class="icons">
                <div class="iconsfile">
                  <img class="vector-icon" alt="" src="./public/vector.svg" />

                  <div class="jpg">JPG</div>
                </div>
              </div>
              <div class="frame-wrapper">
                <div class="goa-filejpg-wrapper">
                  <div class="email-container">
                    Goa_file
                    <span class="jpg1">.jpg</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="loader">
              <div class="loader1">
                <img
                  class="loader-child"
                  alt=""
                  src="./public/frame-18174861.svg"
                />

                <div class="div14">12%</div>
              </div>
              <img class="loader-child" alt="" src="./public/remove.svg" />
            </div>
          </div>
        </div>
      </div>
      <router-link class="buttonnext" to="accepted-request">
        <b class="b1">Отправить</b>
      </router-link>
      <div class="header">
        <div class="div15">Служба поддержки</div>
      </div>
    </div>

    <router-link class="buttonback" to="" @click="$router.go(-1)">
      <div class="div18">Назад</div>
      <img class="search-icon" alt="" src="./public/search-icon.svg" />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import inputData from "../../components/fields/input-data.vue";
import catosTextarea from "../../components/fields/catos-textarea.vue";
</script>

<style scoped lang="scss">
.bg-icon {
  position: absolute;
  top: 0;
  left: 0;
  height: 20.88em;
}
.span {
  color: red;
}
.div9 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.03em;
  line-height: 120%;
  font-weight: 300;
}
.iconsedit-outline {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
}
.group {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.fields-password-and-mail2,
.fieldsinput {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.fields-password-and-mail2 {
  border-radius: 16px;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  width: 18.75em;
  height: 2.5em;
  padding: 0.5em 0.75em;
  justify-content: center;
  color: rgba(59, 59, 59, 0.5);
}
.fieldsinput {
  justify-content: flex-start;
  gap: 0.5em;
}
.email-container {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
  font-weight: 300;
}
.iconsmail1 {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
}
.div10 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 300;
}
.fields-password-and-mail3 {
  border-radius: 16px;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  width: 18.75em;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 0 0.75em;
  align-items: flex-start;
  justify-content: center;
  color: rgba(46, 58, 89, 0.36);
}
.div11 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.span3 {
  letter-spacing: 0.03em;
}
.span4 {
  letter-spacing: 0.02em;
}
.div12 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 120%;
  font-weight: 300;
}
.frame {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0 0.75em 0 0;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
}
.fields-password-and-mail-child {
  position: absolute;
  margin: 0 !important;
  right: 0.72em;
  bottom: 0.66em;
  width: 0.59em;
  height: 0.59em;
  z-index: 1;
}
.fields-password-and-mail4,
.frame-div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.fields-password-and-mail4 {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f9fbff;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  height: 4em;
  padding: 0.5em 0.75em 1em;
  position: relative;
  gap: 0.25em;
  color: rgba(46, 58, 89, 0.36);
}
.frame-div {
  width: 100%;
  gap: 0.5em;
}
.frame-inner {
  position: relative;
  width: 1.31em;
  height: 1.31em;
}
.div13 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
  background: linear-gradient(#2e3a59, #2e3a59), #000;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.vector-icon {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.iconsfile-child {
  top: 0.09em;
  left: 0.53em;
  border-radius: 1.07px;
  width: 0.53em;
  height: 0.5em;
}
.iconsfile,
.iconsfile-child,
.jpg {
  position: absolute;
}
.jpg {
  top: 2.35em;
  left: 0.54em;
  font-size: 0.35em;
  line-height: 120%;
  font-weight: 500;
}
.iconsfile {
  top: 0.38em;
  left: 0.5em;
  width: 1.06em;
  height: 1.31em;
}
.icons {
  position: relative;
  border-radius: 42px;
  background-color: #fdd674;
  width: 2em;
  height: 2em;
}
.jpg1 {
  letter-spacing: 1px;
}
.frame-wrapper,
.goa-filejpg-wrapper,
.icons-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-wrapper,
.icons-parent {
  flex-direction: row;
  align-items: center;
}
.frame-wrapper {
  color: #2e3a59;
}
.icons-parent {
  gap: 0.5em;
}
.loader-child {
  position: relative;
  width: 0.88em;
  height: 0.88em;
  overflow: hidden;
  flex-shrink: 0;
}
.div14 {
  position: relative;
  font-size: 0.75em;
  line-height: 120%;
  font-weight: 500;
}
.loader,
.loader1,
.loadernav {
  display: flex;
  flex-direction: row;
}
.loader1 {
  border-radius: 24px;
  background-color: #f5f9ff;
  width: 4.38em;
  padding: 0.44em 0.5em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.38em;
}
.loader,
.loadernav {
  align-items: center;
}
.loader {
  justify-content: flex-start;
  gap: 0.75em;
  color: #2e3a59;
}
.loadernav {
  align-self: stretch;
  justify-content: space-between;
}
.fieldsinput-parent,
.frame-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-container {
  align-self: stretch;
  gap: 0.88em;
  color: #fff;
}
.fieldsinput-parent {
  position: absolute;
  top: 6.31em;
  left: 2.81em;
  gap: 1.38em;
  text-align: left;
  width: 77vw;
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
  top: 28.88em;
  left: 2.81em;
  border-radius: 20px;
  background-color: #ffdb6d;
  width: 77vw;
  height: 3em;
  overflow: hidden;
  flex-direction: row;
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  color: #3b3b3b;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
}
.div15 {
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

.battery-icon,
.frame-group {
  position: absolute;
  overflow: hidden;
}
.frame-group {
  top: 8em;
  left: 0;
  border-radius: 40px 40px 0 0;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  width: 100vw;
  height: 45.44em;
}

.div18 {
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
