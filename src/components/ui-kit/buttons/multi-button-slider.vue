<template>
  <div
    :class="`button-slider__wrapper_${ButtonSliderVariant[variantIndex]}
      button-slider__wrapper`"
  >
    <input :class="`slider_${ButtonSliderVariant[variantIndex]} slider`" />
    <ul
      :class="
        role === 'admin' ? 'slider__nav_admin slider__nav' : 'slider__nav'
      "
    >
      <li
        v-if="role !== 'admin'"
        v-for="index in Object.keys(
          role === 'creditor' ? Loans : LoansBorrower
        ).filter(key => !isNaN(Number(key)))"
        key="index"
        :class="
          activeTab === Number(index) && Number(index) === 0
            ? `button-slider_left_${ButtonSliderVariant[variantIndex]} button-slider_left active`
            : Number(index) === 0
            ? `button-slider_left_${ButtonSliderVariant[variantIndex]} button-slider_left`
            : activeTab === Number(index) && Number(index) === 1
            ? `button-slider_middle_${ButtonSliderVariant[variantIndex]} button-slider_middle active`
            : Number(index) === 1
            ? `button-slider_middle_${ButtonSliderVariant[variantIndex]} button-slider_middle `
            : activeTab === Number(index) && Number(index) === 2
            ? `button-slider_right_${ButtonSliderVariant[variantIndex]} button-slider_right active`
            : Number(index) === 2
            ? `button-slider_right_${ButtonSliderVariant[variantIndex]} button-slider_right`
            : `button-slider_last_${ButtonSliderVariant[variantIndex]} button-slider_last`
        "
        :style="
          activeTab === Number(index)
            ? { color: 'var(--color-darkslategray-100)', cursor: 'pointer' }
            : { cursor: 'pointer' }
        "
        @click="ev => goTo(ev, Number(index))"
      >
        {{
          role === "creditor"
            ? Loans[Number(index)]
            : role === "admin"
            ? LoansAdmin[Number(index)]
            : LoansBorrower[Number(index)]
        }}
      </li>
      <li
        v-else
        v-for="index in Object.keys(LoansAdmin).filter(
          key => !isNaN(Number(key))
        )"
        :key="index"
        :class="
          activeTab === Number(index) && Number(index) === 0
            ? `button-slider_left_${ButtonSliderVariant[variantIndex]}_admin button-slider_left active`
            : Number(index) === 0
            ? `button-slider_left_${ButtonSliderVariant[variantIndex]}_admin button-slider_left`
            : activeTab === Number(index) && Number(index) === 1
            ? `button-slider_middle_${ButtonSliderVariant[variantIndex]}_admin button-slider_middle active`
            : Number(index) === 1
            ? `button-slider_middle_${ButtonSliderVariant[variantIndex]}_admin button-slider_middle `
            : activeTab === Number(index) && Number(index) === 2
            ? `button-slider_right_${ButtonSliderVariant[variantIndex]}_admin button-slider_right active`
            : Number(index) === 2
            ? `button-slider_right_${ButtonSliderVariant[variantIndex]}_admin button-slider_right`
            : activeTab === Number(index) && Number(index) === 3
            ? `button-slider_last_${ButtonSliderVariant[variantIndex]}_admin button-slider_last active`
            : `button-slider_last_${ButtonSliderVariant[variantIndex]}_admin button-slider_last`
        "
        :style="
          activeTab === Number(index)
            ? { color: 'var(--color-darkslategray-100)', cursor: 'pointer' }
            : { cursor: 'pointer' }
        "
        @click="ev => goTo(ev, Number(index))"
      >
        {{ LoansAdmin[Number(index)] }}
      </li>
    </ul>
    <!--<span
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
    </span>-->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ButtonSliderVariant } from "@/types/buttons-props";
import { Loans, LoansBorrower, LoansAdmin } from "@/types/tabs/tabs";

const { variantIndex } = defineProps({
  variantIndex: {
    type: Number,
    default: 1,
  },
  role: {
    type: String,
    default: "creditor",
  },
});
const emmit = defineEmits(["onSlide"]);

const activeTab = ref(0);
// активная таба по умолчанию, в мобильной версии смещена на 3 px
const from = ref(3);
const to = ref(0);
const goTo = (ev: any, index: number) => {
  activeTab.value = index;
  to.value = ev.target.offsetLeft;
  to.value = to.value - from.value;
  emmit("onSlide", index);
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
    color: rgba(129, 129, 165, 1);
    width: 88vw;
    margin: 0 auto;
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
    margin-left: 2px;
    width: 30%;
  }
  &_middle {
    width: 30%;
  }
  &_right {
    width: 30%;
    margin-right: 2px;
  }
  &_left_loans_admin {
    width: 22%;
  }
  &_middle_loans_admin {
    width: 22%;
  }
  &_right_loans_admin {
    width: 22%;
  }
  &_last_loans_admin {
    width: 22%;
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
  &_admin {
    justify-content: initial;
    gap: 10px;
  }
}

.slider-tab {
  position: absolute;
  top: 1.5px;
  left: 2px;
  height: 90%;
  background: rgba(253, 214, 116, 1);
  border-radius: var(--br-base);
  &_left {
    width: 30%;
  }
  &_middle {
    width: 30%;
    left: 1px;
  }
  &_right {
    width: 40%;
  }
  &_left_loans_admin {
    width: 40%;
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
.slider__nav {
  .active {
    position: relative;
    top: -1.1em;
  }
  & .active:before {
    content: "";
    position: relative;
    top: 1.68em;
    display: block;
    width: 100%;
    height: 31px;
    background: rgba(253, 214, 116, 1);
    border-radius: var(--br-base);
    z-index: -10;
    /* transform: translateX(10px);
    transition-timing-function: ease-out;
    transition: 0.3s;*/
  }
}
</style>
