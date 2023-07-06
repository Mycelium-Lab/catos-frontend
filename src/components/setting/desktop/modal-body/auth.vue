<template>
  <div class="header-pop-up-parent">
    <div class="header-pop-up">
      <div class="buttonback-parent">
        <div class="buttonback">
          <button class="search-icon" @click="back">
            <!--<img class="ico-icon" alt="" src="/ico.svg" />-->
            <div class="div">Назад</div>
          </button>
        </div>
        <div class="slidersteps">
          <div class="loader" />
          <div class="numbers">
            <div class="div1">из</div>
            <div class="div1">4</div>
          </div>
          <div :class="stage === 5 ? 'steps_ready steps' : 'steps'">
            <div :class="stage === 5 ? 'div3_ready div3' : 'div3'">
              {{ stage === 5 ? "Готово" : stage }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="frame-parent">
      <div class="wrapper">
        <div class="google-authentificator-container">
          <slot name="top-text"></slot>
        </div>
      </div>
      <img
        v-if="stage < 5"
        class="frame-child"
        alt=""
        src="@/assets/desktop/auth.svg"
      />
      <img
        v-if="stage === 5"
        class="frame-child"
        alt=""
        src="@/assets/desktop/success-auth.svg"
      />
      <div class="google-authentificator">
        <slot name="bottom-text"></slot>
      </div>
      <div class="frame-group">
        <div class="google-authentificator-io-parent">
          <div class="google-authentificator-container">
            <span v-if="stage !== 5">Google Authentificator: </span>
            <slot name="google-authenticator-text"></slot>
          </div>
          <div class="frame-container">
            <slot name="google-authenticator-action"></slot>
          </div>
        </div>

        <div class="buttonnext-parent">
          <catos-button
            variant="secondary"
            :style="{ width: '100%' }"
            @click="next"
          >
            <slot name="action"></slot>
          </catos-button>
          <div class="div5">
            <slot name="footer-text"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
const { stage } = defineProps({
  stage: {
    type: Number,
    default: 1,
  },
});
const emit = defineEmits(["close", "change-stage"]);
const close = () => {
  emit("close");
};
const next = () => {
  emit("change-stage", stage + 1);
};
const back = () => {
  emit("change-stage", stage - 1);
};
</script>
<style scoped lang="scss">
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
  position: relative;
  background-color: #f6f4fc;
  width: 48.31em;
  height: 0.06em;
}
.ico-icon {
  position: relative;
  width: 0.41em;
  height: 0.73em;
}
.div {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.search-icon {
  position: absolute;
  top: calc(50% - 19px);
  left: 0em;
  border-radius: 10px;
  background-color: #f5f9ff;
  border: 0.5px solid rgba(46, 58, 89, 0.04);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.63em 0.94em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
  cursor: pointer;
  height: 40px;
}
.buttonback {
  flex: 1;
  position: relative;
  border-radius: 9px;
  background-color: rgba(251, 251, 251, 0.42);
  height: 2.5em;
}
.loader {
  position: absolute;
  top: 0.1em;
  left: 2.63em;
  border-radius: 24px;
  background-color: #f5f9ff;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  width: 7.69em;

  height: 24px;
}
.div1 {
  position: relative;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 500;
}
.numbers {
  position: absolute;
  top: 0.46em;
  left: 7.8em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.44em;
}
.div3 {
  position: relative;
  font-size: 0.75em;
  line-height: 120%;
  font-weight: 500;
  &_ready {
    color: rgba(108, 191, 98, 1);
  }
}
.steps {
  position: absolute;
  top: 0em;
  left: 2.6em;
  border-radius: 19px;
  background-color: #f5f9ff;
  width: 4.06em;
  height: 1.75em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #2e3a59;
  &_ready {
    width: 7.69em;
  }
}
.slidersteps {
  position: relative;
  width: 10.31em;
  height: 1.94em;
  color: #958463;
}
.buttonback-parent {
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 0.63em 1.25em 0em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.81em;
}
.header-pop-up {
  position: relative;
  top: 0em;
  left: 0em;
  border-radius: 15px 15px 0px 0px;
  width: 30em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.wrapper {
  align-self: stretch;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.frame-child {
  position: relative;
  width: 39.06em;
  height: 8.88em;
}
.google-authentificator {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
  color: #78789a;
}
.ios {
  color: rgba(59, 59, 59, 0.7);
}
.google-authentificator-container {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
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
.frame-container {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
  text-align: left;
}
.google-authentificator-io-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1em;
}
.ton-kepeer {
  position: relative;
  font-size: 1em;
  line-height: 130%;
}
.buttonnext {
  align-self: stretch;
  border-radius: 20px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
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
.p {
  margin: 0;
}
.div5 {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
  color: rgba(59, 59, 59, 0.7);
}
.buttonnext-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1em;
  color: #f3f3f3;
}
.frame-group {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.88em;
  color: #3b3b3b;
}
.frame-parent {
  position: relative;

  left: 0em;
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  width: 480px;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
  text-align: center;
  color: rgba(59, 59, 59, 0.6);
}
.header-pop-up-parent {
  position: relative;
  width: 100%;

  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
