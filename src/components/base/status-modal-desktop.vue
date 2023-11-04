<template>
  <div class="modal-wrapper">
    <div class="div">
      <div class="header-pop-up">
        <div class="page-title-parent">
          <div class="page-title">
            <h4 class="title">
              <slot name="header"></slot>
            </h4>
            &nbsp;
            <a class="title-link title">
              <slot name="header-link"></slot>
            </a>
          </div>
          <img
            class="close-icon-action close-icon"
            alt=""
            src="@/assets/desktop/close.svg"
            @click="close"
          />
        </div>
        <div class="header-pop-up-child" />
      </div>
      <div class="frame-parent">
        <div class="frame-group">
          <h3 class="status-title">
            <slot name="title"></slot>
          </h3>
          <slot name="image"></slot>
        </div>
        <slot name="subtitle"></slot>
        <slot name="body"></slot>
        <div
          v-if="actionGroup || actionGroupColumn"
          :class="
            actionGroupColumn
              ? 'group-action_column group-action'
              : 'group-action'
          "
        >
          <catos-button
            variant="fourth"
            :style="
              actionGroupColumn
                ? { width: '320px', margin: '0' }
                : { width: '205px', margin: '0' }
            "
            @click="() => (firstAction ? firstAction() : '')"
          >
            <slot name="action-first"></slot>
          </catos-button>
          <catos-button
            variant="fourth_outline"
            :style="
              actionGroupColumn
                ? { width: '320px', margin: '0' }
                : { width: '205px', margin: '0' }
            "
            @click="() => (lastAction ? lastAction() : '')"
          >
            <slot name="action-last"></slot>
          </catos-button>
        </div>
        <button v-else class="button" @click="close">
          <slot name="action"> </slot>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
const emits = defineEmits(["close"]);
const { actionGroup } = defineProps({
  actionGroup: {
    type: Boolean,
    default: false,
  },
  actionGroupColumn: {
    type: Boolean,
    default: false,
  },
  firstAction: {
    type: Function,
  },
  lastAction: {
    type: Function,
  },
});
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

.div2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  font-size: 16px;
  font-family: Inter;
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
.ton-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.31em;
}
.div1 {
  border-radius: 15px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.94em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.percent-icon {
  position: relative;
  width: 0.75em;
  height: 0.75em;
  overflow: hidden;
  flex-shrink: 0;
}
.div3 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
}
.percent-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}

.parent {
  align-self: stretch;
  border-radius: 20px;
  background-color: #f6f4fc;
  overflow: hidden;

  padding: 0.63em 1.25em 0.63em 0.63em;

  gap: 0.75em;
}
.c {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.c-wrapper {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
}
.colors-graphsorders-icon {
  position: relative;
  width: 1em;
  height: 1em;
}
.span {
  color: rgba(129, 129, 165, 0.4);
}
.colors-graphsorders-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.31em;
}
.iconchange {
  position: relative;
  width: 2.5em;
  height: 2.5em;
}
.status-all {
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  width: 13.56em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0em 0em 0em 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
}
.frame-div {
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1em;
  color: #3b3b3b;
}
.frame-group {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
}
.div6 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
}
.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.div7 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
  font-weight: 300;
}
.radiobutton-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.group {
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid #f6f4fc;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0.81em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.div9 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  & span {
    color: #5d83f7;
  }
}
.field {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.63em;
}
.col-titles-bg {
  align-self: stretch;
  position: relative;
  border-radius: 18px;
  background-color: rgba(165, 146, 221, 0.1);
  height: 0.06em;
}
.field-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.roi {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.field-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent1 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: 0em 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.percent-icon1 {
  position: relative;
  width: 1em;
  height: 1em;
  overflow: hidden;
  flex-shrink: 0;
}
.div25 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}

.text {
  position: relative;
  font-size: 0.88rem;
  line-height: 130%;
  font-weight: 500;
}

.button {
  align-self: stretch;
  flex: 1;
  padding: 0.863em 0em;
  font-size: 14px;
  border: 1px solid #5d83f7;
  color: #555562;
  background: transparent;
  border-radius: 25px;
  &:hover {
    cursor: pointer;
    border: 0.5px solid rgba(87, 126, 247, 0.96);
    background: rgba(87, 126, 247, 0.24);
  }
}

.frame-parent {
  align-self: stretch;
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25em;
  height: 100%;
  overflow-y: auto;
}
.div {
  position: relative;
  border-radius: 15px;
  border: 1px solid #f6f4fc;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
.status-title {
  margin: 0em;
  font-size: 20px;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: 0.2px;
}
.group-action {
  //width: 440px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  background: #f9fbff;
  &_column {
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: center;
  }
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
