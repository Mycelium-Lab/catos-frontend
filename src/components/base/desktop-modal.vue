<template>
  <div class="modal-wrapper">
    <div class="filter-parent">
      <div class="filter">
        <div class="rectangle-parent">
          <div class="frame-child" />
          <div class="header-pop-up">
            <div class="page-title-parent">
              <div>
                <h4 class="title">
                  <slot name="title"></slot>
                </h4>
                &nbsp;
                <a class="title-link title" @click="handle">
                  <slot name="title-link"></slot>
                </a>
              </div>

              <!--<div class="page-title">Фильтры</div>-->
              <img
                class="close-icon"
                alt=""
                src="@/assets/desktop/close.svg"
                @click="close"
              />
            </div>
            <div class="frame-child" />
          </div>
        </div>
        <div class="frame-parent">
          <div class="back-row" v-if="variant === 'back'">
            <button @click="() => (toBack ? toBack() : '')">
              <img src="@/assets/images/chevron-left.svg" width="8" />
              Назад
            </button>
          </div>
          <div class="parent">
            <slot name="body"></slot>
          </div>
          <div class="buttonnext-parent">
            <!--<slot name="footer">
              <div class="buttonnext">
                <b class="ton-kepeer">Сохранить и выйти</b>
              </div>
              <div class="div18">Сбросить параметры</div>
            </slot>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(["close", "link"]);
const { variant } = defineProps({
  variant: {
    type: String,
  },
  toBack: {
    type: Function,
  },
});
const handle = () => {
  emits("link");
};
const close = () => {
  emits("close");
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
.filter {
  border-radius: 15px;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.filter-parent {
  position: relative;
  border-radius: 15px;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
.rectangle-parent {
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.frame-child {
  align-self: stretch;
  position: relative;
  background-color: #f6f4fc;
  height: 0.06em;
}
.header-pop-up {
  align-self: stretch;
  border-radius: 15px 15px 0px 0px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.page-title-parent {
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 1.25em;
  align-items: center;
  justify-content: space-between;
  gap: 0.81em;
  border: 1px solid #f6f4fc;
}
.close-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
}
.frame-parent {
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  align-items: center;
  justify-content: flex-start;
  /*gap: 2.25em;*/
  color: #2e3a59;
}
.parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  /*gap: 1.88em;*/
  gap: 1.25em;
}
.buttonnext-parent {
  width: 21.38em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5em;
  text-align: center;
  color: #f3f3f3;
}
.buttonnext {
  border-radius: 20px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  width: 20.63em;
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
.ton-kepeer {
  position: relative;
  font-size: 1em;
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
.back-row {
  border-radius: 9px;
  background: rgba(251, 251, 251, 0.42);
  width: 37.5em;
  padding: 1px 0px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
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
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
