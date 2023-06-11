<template>
  <div
    :class="`button-slider__wrapper_${ButtonSliderVariant[variantIndex]}
    button-slider__wrapper`"
  >
    <input
      type="checkbox"
      :class="`slider_${ButtonSliderVariant[variantIndex]} slider`"
    />
    <span
      :class="`button-slider_left_${ButtonSliderVariant[variantIndex]} button-slider_left`"
      >{{
        ButtonSliderVariant[variantIndex] === "dashboard"
          ? "Кол-во займов"
          : "Владею"
      }}</span
    >
    <span
      :class="`button-slider_right_${ButtonSliderVariant[variantIndex]} button-slider_right`"
      >{{
        ButtonSliderVariant[variantIndex] === "dashboard"
          ? "Займы в TON"
          : "Не владею"
      }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { ButtonSliderVariant } from "@/types/buttons-props";
const { variantIndex } = defineProps({
  variantIndex: {
    type: Number,
    default: 0,
  },
});
</script>

<style scoped lang="scss">
.button-slider__wrapper {
  font-size: var(--font-size-sm);
  color: rgba(181, 181, 195, 1);
  position: relative;
  &_registration {
    width: 20.571428571428571em;
  }
  &_dashboard,
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
  &_left {
    position: absolute;
    left: 2.9em;
    top: 0.5em;
    z-index: 100;
    &::after {
      content: "";
      position: relative;
      bottom: 2px;
      width: 100%;
      height: 0.08em;
      display: block;
      background: rgba(181, 181, 195, 1);
    }
    &_dashboard {
      top: 0.65em;
      left: 1.6em;
      &::after {
        display: none;
      }
    }
  }
  &_right {
    position: absolute;
    right: 2.5em;
    top: 0.5em;
    z-index: 100;
    &::after {
      content: "";
      width: 100%;
      height: 0.08em;
      display: block;
      background: rgba(181, 181, 195, 1);
      position: relative;
      bottom: 2px;
    }
    &_dashboard {
      top: 0.65em;
      right: 2.2em;
      &::after {
        display: none;
      }
    }
  }
}
.slider {
  position: relative;
  width: 100%;
  font-size: var(--font-size-sm);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  --active-inner: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 2.286em;
  outline: none;
  display: inline-block;
  vertical-align: top;
  position: relative;
  margin: 0;
  cursor: pointer;
  border: 0.5px solid rgba(165, 146, 221, 1);
  background: transparent;
  transition: background 0.3s;
  &:after {
    content: "";
    display: block;
    left: 0;
    top: 0;
    position: absolute;
    transition: transform var(--d-t, 0.3s) var(--d-t-e, ease),
      opacity var(--d-o, 0.2s);
  }
  &:checked {
    --d-o: 0.3s;
    --d-t: 0.6s;
    --d-t-e: cubic-bezier(0.5, 0.8, 0.1, 1.04);
    border: none;
    background: transparent;
    border: 0.5px solid rgb(165, 146, 221);
  }
  &:checked ~ .button-slider_right {
    font-weight: 500;
    color: white;
  }
  &:checked ~ .button-slider_right_dashboard {
    font-weight: 400;
    color: var(--color-darkslategray-100);
  }
  &:checked ~ .button-slider_right::after {
    display: none;
  }
  &:not(:checked) ~ .button-slider_left {
    font-weight: 500;
    color: white;
  }
  &:not(:checked) ~ .button-slider_left_dashboard {
    font-weight: 400;
    color: var(--color-darkslategray-100);
  }
  &:not(:checked) ~ .button-slider_left::after {
    display: none;
  }
  &:not(.slider) {
    width: 21px;
    &:after {
      opacity: var(--o, 0);
    }
    &:checked {
      --o: 1;
    }
  }
  & + label {
    font-size: 14px;
    line-height: 21px;
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    margin-left: 4px;
  }
}
.slider {
  &_dashboard {
    background: rgba(246, 244, 252, 1);
    height: 2.5em;
    border-color: rgba(0, 0, 0, 0.04);
    &:checked {
      --d-o: 0.3s;
      --d-t: 0.6s;
      --d-t-e: cubic-bezier(0.5, 0.8, 0.1, 1.04);
      border: none;
      background: rgba(246, 244, 252, 1);
      border: 0.5px solid rgba(0, 0, 0, 0.04);
    }
  }
}
input[type="checkbox"] {
  &:not(.slider) {
    border-radius: 3px;
    &:after {
      width: 5px;
      height: 9px;
      border: 2px solid var(--active-inner);
      border-top: 0;
      border-left: 0;
      left: 7px;
      top: 4px;
      transform: rotate(var(--r, 20deg));
    }
    &:checked {
      --r: 43deg;
    }
  }
  &.slider {
    border-radius: 100px;
    &:after {
      border-radius: 100px;
      width: 47.906%;
      height: 100%;
      background: rgba(165, 146, 221, 1);
      transform: translateX(var(--x, 0));
    }
    &:checked {
      --ab: var(--active-inner);
      --x: 144px;
    }
    &:checked:after {
      width: 50%;
      height: 100%;
    }
    &_dashboard {
      &:after {
        font-weight: 400;
        background: rgba(253, 214, 116, 1);
        width: 50%;
        height: 91%;
        top: 0.1em;
      }
      &:checked:after {
        width: 50%;
        height: 91%;
        top: 0.095em;
      }
    }
    &_dashboard {
      &:checked {
        --x: 146px;
      }
      &:not(:checked) {
        --ab: var(--active-inner);
        --x: 3px;
      }
    }
  }
}
input[type="radio"] {
  border-radius: 50%;
  &:after {
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background: var(--active-inner);
    opacity: 0;
    transform: scale(var(--s, 0.7));
  }
  &:checked {
    --s: 0.5;
  }
}
</style>
