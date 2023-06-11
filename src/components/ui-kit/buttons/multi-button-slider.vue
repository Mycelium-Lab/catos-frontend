<template>
  <div
    :class="`button-slider__wrapper_${ButtonSliderVariant[variantIndex]}
      button-slider__wrapper`"
  >
    <input :class="`slider_${ButtonSliderVariant[variantIndex]} slider`" />
    <ul class="slider__nav">
      <li
        v-for="index in Object.keys(Loans).filter(key => !isNaN(Number(key)))"
        key="index"
        :class="
          Number(index) === 0
            ? `button-slider_left_${ButtonSliderVariant[variantIndex]} button-slider_left`
            : Number(index) === 1
            ? `button-slider_middle_${ButtonSliderVariant[variantIndex]} button-slider_middle`
            : `button-slider_right_${ButtonSliderVariant[variantIndex]} button-slider_right`
        "
        :style="
          activeTab === Number(index)
            ? { color: 'var(--color-darkslategray-100)' }
            : ''
        "
        @click="ev => goTo(ev, Number(index))"
      >
        {{ Loans[Number(index)] }}
      </li>
    </ul>
    <span
      class="slider-tab"
      :style="{
        transform: `translateX(${to}px)`,
        'transition-timing-function': 'ease-out',
        transition: '0.3s',
      }"
      :class="
        activeTab === 1
          ? 'slider-tab_middle'
          : activeTab === 2
          ? 'slider-tab_right'
          : 'slider-tab_left'
      "
    >
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ButtonSliderVariant } from "@/types/buttons-props";
import { Loans } from "@/types/tabs/tabs";
const { variantIndex } = defineProps({
  variantIndex: {
    type: Number,
    default: 1,
  },
});
const activeTab = ref(0);
// активная таба по умолчанию, в мобильной версии смещена на 3 px
const from = ref(3);
const to = ref(0);
const goTo = (ev: any, index: number) => {
  activeTab.value = index;
  to.value = ev.target.offsetLeft;
  to.value = to.value - from.value;
};
</script>

<style scoped lang="scss">
.button-slider__wrapper {
  font-size: var(--font-size-sm);
  color: rgba(181, 181, 195, 1);
  position: relative;
  width: 24.4285714286em;
  &_loans {
    font-weight: 400;
    width: 21.429em;
    color: rgba(129, 129, 165, 1);
  }
  &_loans {
    width: 24.429em;
  }
}
.button-slider {
  &_left,
  &_middle,
  &_right {
    text-align: center;
    z-index: 100;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
  }
  &_left {
    margin-left: 3px;
    width: 7.214285714285714em;
  }
  &_middle {
    width: 7.285714285714286em;
  }
  &_right {
    width: 9.571428571428571em;
    margin-right: 2px;
  }
}
.slider__nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  list-style: none;
  padding: 0em;
  margin: 0em;
}
.slider-tab {
  position: absolute;
  top: 1.5px;
  left: 2px;
  height: 90%;
  background: rgba(253, 214, 116, 1);
  border-radius: var(--br-base);
  &_left {
    width: 7.214285714285714em;
  }
  &_middle {
    width: 7.285714285714286em;
  }
  &_right {
    width: 9.571428571428571em;
  }
}
.slider {
  width: 100%;
  height: 2.5em;
  font-size: var(--font-size-sm);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  --active-inner: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  display: inline-block;
  vertical-align: top;
  position: relative;
  margin: 0;
  padding: 0em;
  cursor: pointer;
  border: 0.5px solid rgba(0, 0, 0, 0.04);
  background: rgba(246, 244, 252, 1);
  transition: background 0.3s;
}
.slider {
  &_loans {
    background: rgba(246, 244, 252, 1);
    height: 2.5em;
    border-color: rgba(0, 0, 0, 0.04);
  }
}
input {
  &.slider {
    border-radius: 100px;
  }
}
</style>
