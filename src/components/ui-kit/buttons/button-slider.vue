<template>
  <div
    :class="`button-slider__wrapper_${ButtonSliderVariant[variantIndex]}
    button-slider__wrapper`"
  >
    <input
      type="checkbox"
      :class="`slider_${ButtonSliderVariant[variantIndex]}_label_${isSide}  slider_${ButtonSliderVariant[variantIndex]} slider`"
      @change="handleChange"
    />
    <span
      :class="`button-slider_left_${ButtonSliderVariant[variantIndex]} button-slider_left`"
      :style="
        isSide === 'left' && variantIndex !== 0
          ? { color: '#3b3b3b' }
          : isSide === 'left' && variantIndex === 0
          ? { color: '#F8F8FF' }
          : isSide !== 'left' && variantIndex !== 0
          ? { color: 'rgb(129, 129, 165' }
          : { color: '#d9d9d9' }
      "
      @click="() => handle('left')"
      >{{ variantIndex !== 0 ? tabs[0] : "Владею" }}</span
    >
    <span
      @click="() => handle('right')"
      :style="
        isSide === 'right' && variantIndex !== 0
          ? { color: '#3b3b3b' }
          : isSide === 'right' && variantIndex === 0
          ? { color: '#F8F8FF' }
          : isSide !== 'right' && variantIndex !== 0
          ? { color: 'rgb(129, 129, 165' }
          : { color: '#d9d9d9' }
      "
      :class="`button-slider_right_${ButtonSliderVariant[variantIndex]} button-slider_right`"
      >{{ variantIndex !== 0 ? tabs[1] : "Не владею" }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ButtonSliderVariant } from "@/types/buttons-props";
const { variantIndex, variant } = defineProps({
  variantIndex: {
    type: Number,
    default: 0,
  },
  tabs: {
    type: Array,
    default: [],
  },
  variant: {
    type: String,
  },
});

const isSide = ref(variant ? "right" : "left");
const handle = (side: any) => {
  console.log(side);
  isSide.value = side;
  const currentSlide = side === "left" ? 0 : 1;
  emit("onSlide", currentSlide);
};

const emit = defineEmits(["onSlide"]);

const handleChange = (ev: any) => {
  isSide.value = ev.target.checked ? "right" : "left";

  const currentSlide = Number(ev.target.checked);
  emit("onSlide", currentSlide);
};
</script>

<style scoped lang="scss">
.button-slider__wrapper {
  font-size: var(--font-size-sm);
  color: rgba(181, 181, 195, 1);
  position: relative;
  &_registration,
  &_dashboard,
  &_loans,
  &_collector {
    font-weight: 400;
    width: 77vw;
    color: rgba(129, 129, 165, 1);
    position: relative;
    margin: 0 auto;
  }
  &_loans {
    width: 24.429em;
  }
}
.button-slider {
  &_left {
    //Mobile
    /*position: absolute;
    left: 5%;
    top: 0.5em;
    width: clamp(110px, 26.7vw, 100%);
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
    text-align: center;*/

    position: absolute;
    left: 3.5em;
    top: 0.5em;
    /* width: clamp(110px, 26.7vw, 100%); */
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
    text-align: center;

    /*&::after {
      content: "";
      position: relative;
      bottom: 2px;
      width: 100%;
      height: 0.08em;
      display: block;
      width: 40%;
      top: 0.1em;
      margin: 0 auto;
      background: #d9d9d9;
    }*/
    &_dashboard {
      top: 0.65em;

      width: clamp(110px, 26.7vw, 100%);
      &::after {
        display: none;
      }
    }
    &_collector {
      top: 0.85em;
      width: clamp(110px, 26.7vw, 100%);
      left: 4%;
      &::after {
        display: none;
      }
    }
  }
  &_right {
    position: absolute;
    text-align: center;
    //right: 6%;
    right: 3em;
    top: 0.5em;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
    //width: 26.2vw;

    /*&::after {
      content: "";
      width: 100%;
      height: 0.08em;
      display: block;
      background: rgba(181, 181, 195, 1);
      position: relative;
      bottom: 2px;
    }*/
    &_dashboard {
      top: 0.65em;

      &::after {
        display: none;
      }
    }
    &_collector {
      top: 0.85em;
      width: 43vw;
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
  &:checked ~ .button-slider_right_dashboard,
  &:checked ~ .button-slider_right_collector {
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
  &:not(:checked) ~ .button-slider_left_dashboard,
  &:not(:checked) ~ .button-slider_left_collector {
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
  &_dashboard,
  &_collector {
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
      width: 50%;
      height: 100%;
      background: rgba(165, 146, 221, 1);
      transform: translateX(var(--x, 0));
    }
    &:checked {
      --ab: var(--active-inner);
      --x: 101%;
    }
    &:checked:after {
      width: 50%;
      height: 100%;
    }
    &_dashboard,
    &_collector {
      &:after {
        font-weight: 400;
        background: rgba(253, 214, 116, 1);

        height: 91%;
        top: 0.1em;
      }
      &:checked:after {
        height: 91%;
        top: 0.095em;
      }
    }
    &_dashboard {
      &:after {
        width: 50%;
      }
      &:checked:after {
        width: 50%;
      }
    }

    &_collector {
      &_label_left {
        &:after {
          width: 38%;
        }
        &:checked:after {
          width: 38%;
        }
      }
      &_label_right {
        &:after {
          width: 65%;
        }
        &:checked:after {
          width: 65%;
        }
      }
    }
    &_registration_label_right {
      &:checked {
        --x: 100%;
      }
    }
    &_dashboard,
    &_collector {
      &:checked {
        --x: 99%;
      }
      &:not(:checked) {
        --ab: var(--active-inner);
        --x: 3px;
      }
    }
    &_registration_label_right {
      &:after {
        --x: 100.5%;
      }
    }
    &_dashboard_label_right {
      &:after {
        --x: 99%;
      }
    }
    &_collector_label_right {
      &:after {
        --x: 52.3%;
      }
    }
    &_registration_label_left {
      &:after {
        --ab: var(--active-inner);
        --x: 0px;
      }
    }
    &_dashboard_label_left,
    &_collector_label_left {
      &:after {
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
@media (min-width: 500px) {
  .button-slider {
    &_left {
      &_dashboard {
        width: auto;
        cursor: pointer;
        left: 2em;
      }
    }
    &_right {
      &_dashboard {
        width: auto;
        cursor: pointer;
        right: 2em;
      }
    }
  }
}
@media (max-width: 365px) {
  .button-slider__wrapper {
    &_dashboard {
      width: 260px;
    }
  }
}
</style>
