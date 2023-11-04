<template>
  <div class="frame-parent">
    <div class="catos-wrapper">
      <div class="catos-container">
        <h3 class="title">
          <slot name="title"></slot>
        </h3>

        <slot name="subtitle"></slot>
        <span class="span"> </span>
      </div>
    </div>
    <img class="frame-child" alt="" src="@/assets/desktop/change-wallet.svg" />
    <div class="parent">
      <div class="catos-container">Внимание:</div>
      <div class="catos-frame">
        <div class="catos">
          Менеджеры CATOS никогда не спрашивают пароли от вашего аккаунта и
          никогда не просят код из СМС или коды для двухфакторной авторизации
        </div>
      </div>
    </div>
    <div class="frame-wrapper">
      <div class="frame-container">
        <div class="buttonnext-parent">
          <slot name="action"></slot>

          <slot name="cancel"></slot>
        </div>
      </div>
    </div>
    <slot name="doc"> </slot>
  </div>
</template>
<script setup lang="ts">
import CatosButton from "@/components/ui-kit/buttons/catos-button.vue";

const emmit = defineEmits(["close", "scan"]);
const close = () => {
  emmit("close");
};
const toScan = () => {
  emmit("scan");
};
</script>
<style scoped lang="scss">
.span {
  font-weight: 300;
}
.catos-container {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.catos-wrapper {
  border-radius: 7px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.frame-child {
  width: 480px;
}
.catos {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.catos-frame {
  align-self: stretch;
  border-radius: 16px;
  background-color: rgba(165, 146, 221, 0.1);
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
}
.parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
  color: #3b3b3b;
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

.buttonnext-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.38em;
}
.frame-container {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-wrapper {
  width: 27.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #f3f3f3;
}

.frame-parent {
  position: relative;
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  width: 440px;
  text-align: center;
  color: rgba(59, 59, 59, 0.6);
  font-family: Inter;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.title {
  color: #3b3b3b;
  text-align: center;
  /* Desktop/Heading/H4 */
  font-size: 18px;
  font-family: Inter;
  font-weight: 600;
  line-height: 130%;
  margin: 0em;
}
</style>
