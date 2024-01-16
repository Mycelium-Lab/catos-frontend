<template>
  <div class="iphone-13-13-pro-66">
    <div class="div">Войдите</div>
    <div class="div1">Уже зарегистрированы?</div>
    <div class="iphone-13-13-pro-66-child"></div>
    <b class="page-title">{{ title }}</b>
    <div class="catos">Добро пожаловать в CATOS!</div>
    <img class="iphone-13-13-pro-66-item" alt="" src="./public/group-36.svg" />

    <div class="parent">
      <div :class="isMobile ? 'div2' : 'div2_desktop div2'">
        <template v-if="isMobile">
          <p class="p">Выберите роль в качестве которой</p>
          <p class="p">вы хотите присоединиться к проекту:</p>
        </template>
        <template v-else>
          <p class="p">
            Выберите роль в качестве которой вы хотите присоединиться к проекту:
          </p>
        </template>
      </div>
      <div class="component-19-parent">
        <router-link
          class="component-19"
          @click="() => setRole('borrower')"
          :to="{
            name: 'start',
            state: { title: 'Регистрация заемщика'},
          }"
        >
          <div class="description-and-image">
            <img
              class="imagepersones-icon"
              alt=""
              src="./public/imagepersones.svg"
            />

            <div class="description">
              <div class="div3">Пользователь</div>
              <div class="div4">
                Выберите эту роль, если вы хотели бы брать и гасить займы в
                любой точке мира и на лучших условиях
              </div>
            </div>
          </div>
        </router-link>
        <router-link
          @click="() => setRole('investor')"
          class="component-191"
          :to="{
            name: 'start',
            state: { title: 'Регистрация инвестора'},
          }"
          id="component19Container1"
        >
          <div class="description-and-image">
            <img
              class="imagepersones-icon1"
              alt=""
              src="./public/imagepersones1@2x.png"
            />

            <div class="description">
              <div class="div5">Кредитор-инвестор</div>
              <div class="div6">
                Выберите эту роль, если вы хотели бы получать доходность на
                депозит путем инвестирования в пуллы
              </div>
            </div>
          </div>
        </router-link>
        <router-link
          @click="() => setRole('creditor')"
          class="component-193"
          :to="{
            name: 'start',
            state: { title: 'Регистрация кредитора'},
          }"
        >
          <div class="description-and-image">
            <div class="imagepersones-icon">
              <div class="imagepersones-child"></div>
              <div class="icons-bluegreengold-buildingle">
                <img
                  class="icons-bluegreengold-buildingle1"
                  alt=""
                  src="./public/icons-bluegreengold-buildinglegal@2x.png"
                />
              </div>
            </div>
            <div class="description">
              <div class="div7">Финансовая организация</div>
              <div class="div8">
                <span class="span"
                  >Если вы представитель кредитной финансовой организации,
                  станьте партнером. Создайте и управляйте собственным кредитным
                  пулом на платформе</span
                >
                <span> CATOS</span>
              </div>
            </div>
          </div>
        </router-link>
        <router-link
          class="component-193"
          @click="() => setRole('collector')"
          :to="{
            name: 'start',
            state: { title: 'Регистрация коллектора'},
          }"
        >
          <div class="description-and-image">
            <div class="imagepersones-icon">
              <div class="imagepersones-child"></div>
              <div class="icons-bluegreengold-paper">
                <img
                  class="icons-bluegreengold-buildingle1"
                  alt=""
                  src="./public/icons-bluegreengold-paper@2x.png"
                />
              </div>
            </div>
            <div class="description">
              <div class="div9">Коллекторское агентство</div>
              <div class="catos1">
                <span class="catos-txt"
                  >Если вы представитель коллекторской организации с хорошей
                  репутацией,
                  <span class="catos2">
                    станьте партнером и выкупайте просроченные задолженнности на
                    платформе CATOS</span
                  >
                </span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div :class="isMobile ? 'group' : 'group_desktop group'">
        <div class="div10">
          {{
            title === "Войти"
              ? "Еще не зарегистрированы?"
              : "Уже зарегистрированы?"
          }}
        </div>
        <router-link
          v-if="title === 'Войти'"
          :to="{ name: 'home', state: { title: 'Регистрация' } }"
          class="div11"
          >Зарегистрируйтесь</router-link
        >
        <router-link v-else to="/" class="div11">Войдите</router-link>
        <!-- <router-link to="/" @click="toAdmin"> Администратор </router-link> -->
      </div>
    </div>
    <div class="loader-parent">
      <div class="loader"></div>
      <div class="loader1"></div>
      <div class="container">
        <div class="div12">из</div>
        <div class="div12">100%</div>
      </div>
      <div class="div14">20%</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useUserDataStore } from "@/stores/userData";
import { type Role } from "../../types/user.types";
import { roleStorage } from "@/utils/localStorage";
import { useDevice } from "@/compossables/useDevice";
import { useRouter } from "vue-router";

const { isMobile } = useDevice();

const userDataStore = useUserDataStore();
const setRole = (role: Role) => {
  roleStorage.set(role);
  userDataStore.userDTO.role = role;
};

const router = useRouter();
const toAdmin = () => {
  setRole("admin");
  router.push(
    isMobile.value ? { name: "admin-pannel-mobile" } : { name: "admin-pannel" }
  );
};

//TODO: Переписать на vue router from  компонент name вместо history
const title = computed(() => {
  return window.history.state.title;
});
</script>

<style scoped lang="scss">
.div,
.div1 {
  position: absolute;
  font-size: 0.75em;
}
.div {
  width: 12.82%;
  top: 80.79%;
  left: 43.59%;
  text-decoration: underline;
  color: #b9a1f8;
  display: flex;
  align-items: center;
}
.div1 {
  top: 78.72%;
  left: 31.03%;
  font-weight: 500;
}
.iphone-13-13-pro-66-child {
  position: absolute;
  height: 67.15%;
  width: 102.82%;
  top: -4.44%;
  right: -1.79%;
  bottom: 37.29%;
  left: -1.03%;
}
.catos,
.page-title {
  position: relative;
  top: 3em;
  font-size: 1.56em;
  line-height: 1.12em;
  margin: 0 auto;
  //width: 600px;
  width: 100vw;
  text-align: center;
}
.page-title {
  display: inline-block;
}
.catos {
  top: 5em;
  // left: 7vw;
  font-size: 1em;
  line-height: 1.75em;
  font-weight: 500;
  //width: 90.6vw;

  text-align: center;
}
.iphone-13-13-pro-66-item {
  position: absolute;
  height: 18.74%;
  width: 59.49%;
  top: -4em;
  right: 0;
  bottom: 81.26%;
  left: 65.51%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.p {
  margin: 0;
}
.div2 {
  position: relative;
  top: 3em;

  font-size: 0.88em;
  line-height: 130%;
  text-align: center;
  width: 100vw;
}
.imagepersones-icon {
  position: relative;
  width: 4.5em;
  height: 4.5em;
}
.div3,
.div4 {
  position: relative;
}
.div3 {
  font-size: 1em;
  line-height: 1.75em;
  font-weight: 500;
  background: linear-gradient(#3b3b3b, #3b3b3b), #a592dd;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  width: 15.56em;
}
.div4 {
  align-self: stretch;
  font-size: 0.75em;
  line-height: 1.33em;
  font-weight: 300;
}
.description,
.description-and-image {
  width: 13.96em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.description-and-image {
  width: 20.13em;
  flex-direction: row;
  align-items: center;
  gap: 0.56em;
}
.component-19 {
  border-radius: 16px;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  width: 100%;
  height: 7.65em;
  display: flex;
  flex-direction: column;
  padding: 0.75em 0 0.88em;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #3b3b3b;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  &:hover {
    background: rgba(165, 146, 221, 0.08);
    border: 1px solid rgba(165, 146, 221, 0.4);
    cursor: pointer;
  }
}
.imagepersones-icon1 {
  position: relative;
  width: 4.5em;
  height: 4.5em;
  object-fit: cover;
}
.div5,
.div6 {
  position: relative;
}
.div5 {
  font-size: 1em;
  line-height: 1.56em;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 15.31em;
}
.div6 {
  align-self: stretch;
  font-size: 0.75em;
  line-height: 1.33em;
  font-weight: 300;
  color: #3b3b3b;
}
.component-191 {
  border-radius: 16px;
  text-decoration: none;

  box-sizing: border-box;
  width: 100%;
  height: 7.65em;
  display: flex;
  flex-direction: column;
  padding: 0.75em 0 0.88em;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #1f1f1f;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  &:hover {
    background: rgba(165, 146, 221, 0.08);
    border: 1px solid rgba(165, 146, 221, 0.4);
    cursor: pointer;
  }
}
.imagepersones-child {
  position: absolute;
  top: -0.06em;
  left: 0;
  border-radius: 50%;
  background-color: #fdc228;
  width: 4.5em;
  height: 4.5em;
}
.icons-bluegreengold-buildingle1 {
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
  object-fit: cover;
}
.icons-bluegreengold-buildingle {
  position: absolute;
  top: 0.56em;
  left: 0.5em;
  width: 3.52em;
  height: 3.5em;
}
.div7 {
  position: relative;
  font-size: 1em;
  line-height: 120%;
  font-weight: 500;
  background: linear-gradient(#3b3b3b, #3b3b3b), #a592dd;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  width: 15.56em;
}
.span {
  font-weight: 300;
}
.div8 {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  line-height: 1.33em;
}
.icons-bluegreengold-paper {
  position: absolute;
  top: 0.56em;
  left: 0.56em;
  width: 3.4em;
  height: 3.38em;
}
.div9 {
  position: relative;
  font-size: 1em;
  line-height: 1.19em;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 15.56em;
}
.catos2 {
  letter-spacing: -0.01em;
}
.catos-txt {
  width: 100%;
}
.catos1,
.component-193 {
  display: flex;
  align-items: center;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.catos1 {
  position: relative;
  font-size: 0.75em;
  line-height: 1.33em;
  font-weight: 300;
  color: #3b3b3b;
  width: 19.05em;
}
.component-193 {
  border-radius: 16px;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  width: 100%;
  height: 7.65em;
  flex-direction: column;
  padding: 0.75em 0 0.88em;
  justify-content: center;
  color: #3b3b3b;
  &:hover {
    background: rgba(165, 146, 221, 0.08);
    border: 1px solid rgba(165, 146, 221, 0.4);
    cursor: pointer;
  }
}
.component-19-parent {
  position: absolute;
  top: 6.8em;
  left: 6.5vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.19em;
  text-decoration: none;
  width: 87.7vw;
}
.div10,
.div11 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.div10 {
  letter-spacing: 1px;
  font-weight: 500;
}
.div11 {
  text-decoration: underline;
  color: #a592dd;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.group,
.parent {
  position: absolute;
}
.group {
  top: 42.88em;
  left: 25vw;
  height: 2.88em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
  color: #1f1f1f;
  width: 50vw;
  text-align: center;
  &_desktop {
    top: 30em;
  }
}
.parent {
  top: 10em;
  left: -0.06em;
  border-radius: 40px 40px 0 0;
  background-color: #fff;
  width: 100.6vw;
  height: 54.13em;
  overflow-y: auto;
  overflow-x: hidden;
}
.loader,
.loader1 {
  position: absolute;
  left: 2.63em;
  border-radius: 24px;
  background-color: #f5f9ff;
}
.loader {
  top: 0.13em;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  width: 7.69em;
  height: 1.5em;
  opacity: 0.51;
}
.loader1 {
  top: 0;
  width: 3.44em;
  height: 1.75em;
}
.div12 {
  position: relative;
  font-size: 0.5em;
  line-height: 120%;
  font-weight: 500;
}
.container {
  position: absolute;
  top: 0.56em;
  left: 7.19em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.44em;
}
.div14 {
  position: absolute;
  top: 0.36em;
  left: 3.93em;
  font-size: 0.88em;
  line-height: 120%;
  font-weight: 500;
  color: #2e3a59;
}
.loader-parent {
  position: absolute;
  top: 4.13em;
  left: 12.56em;
  width: 10.31em;
  height: 1.75em;
  opacity: 0;
  color: #958463;
}
.battery-icon,
.group-icon {
  position: absolute;
  height: 2.92%;
  width: 6.92%;
  top: 55.06%;
  right: 4.1%;
  bottom: 42.02%;
  left: 88.97%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.battery-icon {
  height: 25.76%;
  width: 6.24%;
  top: 39.39%;
  right: 7.61%;
  bottom: 34.85%;
  left: 86.15%;
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
.div15 {
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
.time-style,
.time-style1 {
  position: absolute;
  height: 47.73%;
  width: 13.85%;
  top: 27.27%;
  right: 80.77%;
  bottom: 25%;
  left: 5.38%;
}
.time-style1 {
  display: none;
  color: #fff;
}
.ui-bars-status-bars-white {
  position: absolute;
  top: 0;
  left: 0;
  width: 24.38em;
  height: 2.75em;
  text-align: center;
  color: #1c1c1c;
}
.iphone-13-13-pro-66 {
  position: relative;
  background-color: #fdd674;
  width: 100%;
  height: 60.5em;
  overflow: hidden;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
.div2_desktop {
  top: 5em;
}
@media (min-width: 500px) {
  .group_desktop {
    top: 44em;
  }
}
@media (min-width: 790px) {
  .component-19,
  .component-191,
  .component-193 {
    width: 480px;
  }

  .component-19-parent {
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    flex-direction: row;
    width: 90vw;
    left: 0em;
  }
  .description-and-image {
    width: 100%;
    flex-direction: row;
    align-items: center;
    gap: 0.56em;
    margin-left: 3em;
  }
  .description {
    width: 70%;
  }
  .catos1 {
    width: 100%;
  }
  .group {
    top: 45em;
  }
}

@media (min-width: 1088px) {
  .group_desktop {
    top: 28em;
  }
}
@media (min-width: 1210px) {
  .component-19,
  .component-191,
  .component-193 {
    width: 48.8%;
  }
  .component-19-parent {
    width: 65.5vw;
  }
  .div4,
  .div6,
  span {
    font-size: 14px;
  }
  .description {
    width: 23vw;
  }
}
@media (max-width: 385px) {
  .description-and-image {
    justify-content: center;
  }
  .description {
    width: 65%;
  }
  .catos1,
  .div8,
  .div4,
  .div5 {
    width: auto;
  }
  .component-193 {
    height: 9.65em;
  }
  .component-19-parent {
    gap: 1em;
  }
  .group {
    top: 45.5em;
  }
}
</style>
