<template>
  <div class="custom-slider">
    <slot name="left-label"></slot>
    <slot name="right-label"></slot>
    <div
      :class="
        inputLabel
          ? `input-wrapper_${inputLabel} input-wrapper`
          : 'input-wrapper'
      "
    >
      <input
        @input="({ target }) => handle(target)"
        :min="min"
        :max="max"
        :step="step"
        v-model="sliderValue"
        type="number"
        class="input"
      />
      {{ inputLabel === "percent" ? `${parseValue}%` : parseValue }}
    </div>

    <input
      ref="slider"
      :value="sliderValue"
      @input="({ target }) => handle(target)"
      type="range"
      :min="min"
      :max="max"
      :step="step"
      class="slider"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, watchEffect, computed } from "vue";

// define component props for the slider component
const { min, max, step, modelValue } = defineProps({
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
  modelValue: {
    type: Number,
    default: 50,
  },
  inputLabel: {
    type: String,
  },
});

// define emits for the slider component
const emit = defineEmits(["update:modelValue"]);

// define refs for the slider component

// @ts-ignore
const sliderValue = ref(modelValue);
const slider = ref(null);

const parseValue = computed(() => {
  const arrValue = String(sliderValue.value).split("");
  console.log(arrValue.length);
  if (String(sliderValue.value).length === 4) {
    arrValue.splice(1, 0, " ");
  } else if (String(sliderValue.value).length > 4) {
    arrValue.splice(2, 0, " ");
  }
  return arrValue.join("");
});

// function to get the progress of the slider
// @ts-ignore
const getProgress = (value, min, max) => {
  return ((value - min) / (max - min)) * 100;
};

// function to set the css variable for the progress
// @ts-ignore
const setCSSProgress = progress => {
  // @ts-ignore
  slider.value.style.setProperty("--ProgressPercent", `${progress}%`);
};

// watchEffect to update the css variable when the slider value changes
watchEffect(() => {
  if (slider.value) {
    // emit the updated value to the parent component
    emit("update:modelValue", sliderValue.value);

    // update the slider progress

    const progress = getProgress(
      // @ts-ignore
      sliderValue.value,
      // @ts-ignore
      slider.value.min,
      // @ts-ignore
      slider.value.max
    );

    // define extrawidth to ensure that the end of progress is always under the slider thumb.
    let extraWidth = (100 - progress) / 10;

    // set the css variable
    setCSSProgress(progress + extraWidth);
  }
});
const handle = (target: any) => {
  sliderValue.value = parseFloat(target.value);
};
</script>
<style scoped lang="scss">
.custom-slider {
  --trackHeight: 0.5rem;
  --thumbRadius: 1rem;
  display: flex;
  flex-direction: column;
}

/* style the input element with type "range" */
.custom-slider input[type="range"] {
  top: 1.2em;
  position: relative;
  appearance: none;
  /* pointer-events: none; */
  border-radius: 999px;
  z-index: 0;
}

/* ::before element to replace the slider track */

/* `::-webkit-slider-runnable-track` targets the track (background) of a range slider in chrome and safari browsers. */
.custom-slider input[type="range"]::-webkit-slider-runnable-track {
  appearance: none;
  background: rgba(151, 71, 255, 0.2);
  height: 2px;
  border-radius: 999px;
}

/* `::-moz-range-track` targets the track (background) of a range slider in Mozilla Firefox. */

.custom-slider input[type="range"]::-webkit-slider-thumb {
  position: relative;
  top: 300%;
  transform: translate(0, -50%);

  width: 26px;
  height: 26px;
  margin-top: calc((var(--trackHeight) - var(--thumbRadius)) / 2);
  background: rgba(168, 101, 255, 1);
  border-radius: 999px;
  pointer-events: all;
  appearance: none;
  z-index: 1;
}
.input {
  /* background: rgba(246, 244, 252, 1);
  border: 1px solid rgba(0, 0, 0, 0.03);
  border-radius: 16px;
  height: 40px;
  padding-left: 19vw;
  outline: none;
  font-weight: 400;
  font-size: 15.2727px;
  line-height: 100%;
  width: 100%;
  letter-spacing: 0.02em;
  position: relative;
  margin: 0 auto;
  color: #2e3a59;
  */

  width: 1%;
  height: 40px;

  outline: none;
  border: none;
  background: transparent;
  font-size: 15.273px;
  color: transparent;
}

.input-wrapper_ton::after {
  content: "TON";
}
.input-wrapper_day::after {
  content: "дней";
}
.input-wrapper::after,
.input-wrapper::before {
  position: absolute;
}
.input-wrapper {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 53%;
  height: 40px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.03);
  background: #f6f4fc;
  font-size: 15.273px;
  padding: 6px 55px 6px 24px;
  gap: 3vw;
  margin: 0 auto;
}
.input-wrapper_ton::after {
  right: 7vw;
}
.input-wrapper_day::after {
  right: 9.5vw;
}
</style>
