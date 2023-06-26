<template>
  <modal>
    <div class="wrapper">
      <div class="frame-group">
        <div class="frame-container">
          <div class="frame-div">
            <div class="header-parent-create-finish">
              <div class="header-create-finish">
                <div class="div8">Счет на:</div>
              </div>
              <div class="header1">
                <div class="ton">10 000 000 TON</div>
              </div>
            </div>
            <div class="div9">
              Используйте адрес ниже для пополнения баланса:
            </div>
          </div>
          <div class="qr">
            <div class="qr-code-2">
              <img
                class="replace-me-icon"
                alt=""
                src="@/assets/images/replace-me@2x.png"
              />
            </div>
          </div>
          <div class="info">
            <div class="frame-parent1">
              <div class="frame">
                <div class="div10">Ссылка на получение счета:</div>
              </div>
              <copy-paste :style="{ marginTop: '0em' }">
                <template v-slot:icon>
                  <img src="@/assets/images/iconscopy.svg" alt="" />
                </template>
              </copy-paste>
            </div>
          </div>
        </div>
        <div class="frame-parent2">
          <div class="component-27-wrapper">
            <div class="component-27">
              <img
                class="share-icon"
                alt=""
                src="@/assets/images/iconsshare.svg"
              />

              <div class="number">Поделиться</div>
            </div>
          </div>
          <div class="frame-wrapper">
            <div class="trash-2-parent">
              <img
                class="trash-2-icon"
                alt=""
                src="@/assets/images/iconstrash.svg"
              />

              <div class="div11">Удалить счет</div>
            </div>
          </div>
        </div>
      </div>
      <div class="des-and-bbn-create-finish">
        <div class="text-and-button">
          <router-link
            class="buttons-tabs"
            id="buttonsTabsContainer"
            :to="{ name: 'accounts' }"
          >
            <div class="text">К счетам</div>
          </router-link>
          <router-link class="buttons-tabs1" :to="{ name: 'wallet' }">
            <div class="text">В кошелек</div>
          </router-link>
        </div>
      </div>
    </div>
  </modal>
</template>

<script setup lang="ts">
import modal from "@/components/ui-kit/modal.vue";
import copyPaste from "@/components/fields/copy-paste.vue";
</script>

<style scoped>
.wrapper {
  height: 900px;
}
.swipe-down {
  position: absolute;
  top: 0.75em;
  left: 10.81em;
  border-radius: 25px;
  width: 2.63em;
  height: 0.31em;
}
.div8 {
  position: relative;
  font-size: 1em;
  line-height: 130%;
  font-weight: 600;
}
.header-create-finish {
  border-radius: 6px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.ton {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 500;
}
.header1 {
  border-radius: 6px;
  background: linear-gradient(
      rgba(165, 146, 221, 0.21),
      rgba(165, 146, 221, 0.21)
    ),
    #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.header-parent-create-finish {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
}
.div9,
.frame-div {
  display: flex;
  align-items: center;
}
.div9 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  color: rgba(59, 59, 59, 0.6);
  text-align: center;
  justify-content: center;
}
.frame-div {
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.63em;
  width: 100%;
}
.qr-code-2,
.replace-me-icon {
  position: absolute;
  overflow: hidden;
}
.replace-me-icon {
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
.qr-code-2 {
  top: calc(50% - 73px);
  left: calc(50% - 73px);
  border-radius: 17.64px;
  border: 0.6px dashed #a592dd;
  box-sizing: border-box;
  width: 9.13em;
  height: 9.13em;
}
.div10,
.qr {
  position: relative;
}
.qr {
  width: 9.13em;
  height: 9.13em;
  overflow: hidden;
  flex-shrink: 0;
}
.div10 {
  font-size: 0.63em;
  line-height: 130%;
  font-weight: 300;
  display: flex;
  align-items: center;
  width: 26.8em;
}
.frame {
  border-radius: 10px;
  width: 18.75em;
  display: flex;
  flex-direction: column;
  padding: 0 0.75em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.key {
  position: relative;
  font-size: 0.75em;
  line-height: 140%;
  font-weight: 600;
}
.text-1 {
  display: none;
  flex-direction: row;
  padding: 0 0.63em 0 0;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
}
.cahrjj3 {
  position: relative;
  font-size: 0.75em;
  text-decoration: underline;
  line-height: 140%;
  font-weight: 600;
  color: inherit;
}
.code {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  color: #3b3b3b;
}
.iconchange {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  max-height: 100%;
  width: 3.25em;
  z-index: 2;
}
.field-copykey {
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  border: 0.5px solid rgba(165, 146, 221, 0.1);
  box-sizing: border-box;
  width: 18.75em;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0 0.5em 0.75em;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  color: rgba(59, 59, 59, 0.5);
}
.frame-parent1 {
  align-items: flex-start;
  gap: 0.38em;
  width: 100%;
}
.frame-container,
.frame-parent1,
.info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.info {
  align-items: flex-start;
  color: #000;
  width: 100%;
}
.frame-container {
  border-radius: 14px;
  background-color: #f8f6fc;
  overflow: hidden;
  padding: 1.13em 1.31em;
  align-items: center;
  gap: 1.63em;
  width: 100%;
}
.share-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.number {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 600;
}
.component-27 {
  border-radius: 33px;
  background-color: #a865ff;
  width: 100%;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0 0.44em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}
.component-27-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.trash-2-icon {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
}
.div11 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 500;
}
.frame-wrapper,
.trash-2-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.trash-2-parent {
  justify-content: flex-start;
  gap: 0.63em;
}
.frame-wrapper {
  border-radius: 36px;
  background-color: #3b3b3b;
  width: 100%;
  height: 2.5em;
  padding: 0.38em 1.69em;
  box-sizing: border-box;
  justify-content: center;
}
.frame-group,
.frame-parent2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
}
.frame-parent2 {
  gap: 1.13em;
  color: #fff;
}
.frame-group {
  position: relative;
  top: 1.5em;
  gap: 1.31em;
  padding: 0 24px;
}
.text {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.buttons-tabs {
  cursor: pointer;
}
.buttons-tabs,
.buttons-tabs1 {
  align-self: stretch;
  border-radius: 25px;
  border: 0.5px solid rgba(87, 126, 247, 0.96);
  box-sizing: border-box;
  height: 2em;
  display: flex;
  flex-direction: row;
  padding: 0.44em 5.5em;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: rgba(85, 85, 98, 1);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.des-and-bbn-create-finish,
.text-and-button {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.text-and-button {
  flex: 1;
  width: 100%;
  gap: 0.81em;
}
.des-and-bbn-create-finish {
  position: absolute;
  top: 34.94em;
  left: 6vw;
  border-radius: 16px;
  background-color: #f9fbff;
  width: 88vw;
  padding: 0.75em;
  box-sizing: border-box;
  text-align: right;
  color: #555562;
}
.swipe-down-parent {
  position: relative;
  border-radius: 30px 30px 0 0;
  background-color: #fff;
  box-shadow: 0 12px 12px rgba(151, 71, 255, 0.04);
  width: 100%;
  height: 66.25em;
  overflow: auto;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
