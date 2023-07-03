<template>
  <div class="modal-wrapper">
    <div class="div1">
      <div class="header-pop-up">
        <div class="page-title-group">
          <div class="page-title1">
            <h4 class="title">
              <slot name="header"></slot>
            </h4>
            &nbsp;
            <a class="title-link title">
              <slot name="header-link"></slot>
            </a>
          </div>
          <img
            class="close-icon"
            alt=""
            src="@/assets/desktop/close.svg"
            @click="close"
          />
        </div>
        <div class="header-pop-up-child" />
      </div>
      <div class="inner">
        <div class="frame-parent">
          <div class="connect-ton-parent">
            <div class="back-row" v-if="variant === 'back'">
              <button @click="() => (toBack ? toBack() : '')">
                <img src="@/assets/images/chevron-left.svg" width="8" />
                Назад
              </button>
            </div>
            <div class="connect-ton"><slot name="title"></slot></div>
            <div class="scan-the-qr-code-with-your-pho-wrapper">
              <div class="scan-the-qr-container">
                <div class="subtitle">
                  <slot name="subtitle"></slot>
                </div>
                <a class="link">
                  <slot name="link"></slot>
                </a>
              </div>
            </div>
          </div>
          <img
            class="replace-me-icon"
            alt=""
            src="@/assets/images/replace-me@2x.png"
          />
          <div class="or-press-the-the-button-below-parent">
            <div class="scan-the-qr-container">
              Or press the the button below
            </div>
            <catos-button
              variant="secondary"
              :style="{ width: '100%' }"
              @click="handle"
            >
              <slot name="action"> </slot
            ></catos-button>
          </div>

          <span class="footer-text">
            <slot name="footer"></slot>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import catosButton from "../ui-kit/buttons/catos-button.vue";
const { variant } = defineProps({
  variant: {
    type: String,
  },
  toBack: {
    type: Function,
  },
});
const emtis = defineEmits(["close", "result"]);
const close = () => {
  emtis("close");
};
const handle = () => {
  emtis("result");
};
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
.page-title1 {
  flex: 1;
  position: relative;
  line-height: 130%;
  font-weight: 600;
}
.close-icon {
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
}
.page-title-group {
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 1.25rem;
  align-items: center;
  justify-content: flex-start;
  gap: 0.81rem;
}
.header-pop-up-child {
  align-self: stretch;
  position: relative;
  background-color: #f6f4fc;
  height: 0.06rem;
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
.connect-ton {
  align-self: stretch;
  position: relative;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
}
.scan-the-qr {
  margin: 0;
}
.scan-the-qr-container {
  align-self: stretch;
  position: relative;
  line-height: 130%;
  font-weight: 300;
}
.scan-the-qr-code-with-your-pho-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.88rem;
}
.connect-ton-parent {
  align-self: stretch;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 1.25rem;
}
.replace-me-icon {
  position: relative;
  width: 15rem;
  height: 15rem;
  object-fit: cover;
}
.buttonnext {
  align-self: stretch;
  border-radius: 20px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  height: 3rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5rem 7.25rem;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #f3f3f3;
  border: none;
  cursor: pointer;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.14);
    background: linear-gradient(73deg, #7811fe 0%, #ad6fff 100%), #7811fe;
  }
}
.or-press-the-the-button-below-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75rem;
}

.frame-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 340px;
}
.inner {
  align-self: stretch;
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  font-size: 0.88rem;
}
.div1 {
  position: relative;
  border-radius: 15px;
  border: 1px solid #f6f4fc;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: 1.13rem;
  color: #3b3b3b;
  font-family: Inter;
}
.back-row {
  border-radius: 9px;
  background: rgba(251, 251, 251, 0.42);
  width: 100%;
  padding: 1px 0px;
  display: flex;
  justify-content: flex-start;
  & button {
    height: 39px;
    border-radius: 10px;
    border: 0.5px solid rgba(46, 58, 89, 0.04);
    background: #f5f9ff;
    color: #3b3b3b;
    font-size: 14px;
    font-family: Inter;
    font-weight: 300;
    line-height: 130%;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    &:hover {
      background: #f2f2f6;
    }
  }
}
.subtitle,
.link {
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
}
.subtitle {
  color: #3b3b3b;
}
.link {
  display: inline-block;
  margin-top: 8px;
  color: rgba(87, 126, 247, 0.96);
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
}
.footer-text {
  color: rgba(59, 59, 59, 0.7);
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
}
.title {
  display: inline-block;
  color: #3b3b3b;
  margin: 0;
  font-size: 18px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  &-link {
    cursor: pointer;
    text-decoration: underline;
    color: rgba(87, 126, 247, 0.96);
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
