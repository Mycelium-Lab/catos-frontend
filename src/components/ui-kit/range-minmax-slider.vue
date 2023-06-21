<template>
  <div class="minmax-inputs">
    <input type="number" :step="step" v-model="sliderMinValue" readonly />
    <input type="number" :step="step" v-model="sliderMaxValue" readonly />
  </div>
  <div ref="slider" class="custom-slider minmax">
    <input
      type="range"
      name="min"
      id="min"
      :min="min"
      :max="max"
      :value="minValue"
      :step="step"
      @input="
        ({ target }) => {
          // @ts-ignore
          handle(target);
        }
      "
    />
    <input
      type="range"
      name="max"
      id="max"
      :min="min"
      :max="max"
      :value="maxValue"
      :step="step"
      @input="
        ({ target }) => {
          // @ts-ignore
          handle(target);
        }
      "
    />
  </div>
</template>
<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";

const { min, max, step, minValue, maxValue } = defineProps({
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
  minValue: {
    type: Number,
    default: 50,
  },
  maxValue: {
    type: Number,
    default: 80,
  },
});

// define emits for the slider component
const emit = defineEmits(["update:minValue", "update:maxValue"]);

// define refs for the slider element and the slider values
const slider = ref(null);
const sliderMinValue = ref(minValue);
const sliderMaxValue = ref(maxValue);

// function to get the percentage of a value between the min and max values
// @ts-ignore
const getPercent = (value, min, max) => {
  return ((value - min) / (max - min)) * 100;
};

// function to get the difference between the min and max values
const sliderDifference = computed(() => {
  return Math.abs(sliderMaxValue.value - sliderMinValue.value);
});

// function to set the css variables for width, left, and right
// @ts-ignore
const setCSSProps = (width, left, right) => {
  // @ts-ignore
  slider.value.style.setProperty("--width", `${width}%`);
  // @ts-ignore
  slider.value.style.setProperty("--progressLeft", `${left}%`);
  // @ts-ignore
  slider.value.style.setProperty("--progressRight", `${right}%`);
};

// watchEffect to emit the updated values, and update the css variables
// when the slider values change
watchEffect(() => {
  if (slider.value) {
    // emit slidet values when updated
    emit("update:minValue", sliderMinValue.value);
    emit("update:maxValue", sliderMaxValue.value);

    // calculate values in percentages
    const differencePercent = getPercent(sliderDifference.value, min, max);
    const leftPercent = getPercent(sliderMinValue.value, min, max);
    const rightPercent = 100 - getPercent(sliderMaxValue.value, min, max);

    // set the CSS variables
    setCSSProps(differencePercent, leftPercent, rightPercent);
  }
});
const handle = (target: any) => {
  if (target.id === "min") {
    sliderMinValue.value = parseFloat(target.value);
  } else if (target.id === "max") {
    sliderMaxValue.value = parseFloat(target.value);
  }
  //sliderMinValue = parseFloat(target.value);
  // sliderMinValue.value = parseFloat(target.value);
};
</script>

<style scoped>
.slider-cont {
  width: 300px;
}

.custom-slider {
  --trackHeight: 0.125rem;
  --thumbRadius: 1rem;
}

/* style the input element with type "range" */
.custom-slider input[type="range"] {
  position: relative;
  appearance: none;
  background: none;
  /* pointer-events: none; */
  border-radius: 999px;
  z-index: 0;
}

/* ::before element to replace the slider track */
.custom-slider input[type="range"]::before,
.custom-slider.minmax::before {
  content: "";
  position: absolute;
  width: var(--ProgressPercent, 100%);
  height: 100%;
  background: rgba(151, 71, 255, 0.8);
  /* z-index: -1; */
  pointer-events: none;
  border-radius: 999px;
}

/* `::-webkit-slider-runnable-track` targets the track (background) of a range slider in chrpme and safari browsers. */
.custom-slider input[type="range"]::-webkit-slider-runnable-track {
  appearance: none;
  background: #a865ff;
  height: var(--trackHeight);
  border-radius: 999px;
}

/* `::-moz-range-track` targets the track (background) of a range slider in Mozilla Firefox. */
.custom-slider input[type="range"]::-moz-range-track {
  appearance: none;
  background: #a865ff;
  height: var(--trackHeight);
  border-radius: 999px;
}

.custom-slider input[type="range"]::-webkit-slider-thumb {
  position: relative;
  /* top: 50%; 
  transform: translate(0, -50%);
  */
  width: var(--thumbRadius);
  height: var(--thumbRadius);
  margin-top: calc((var(--trackHeight) - var(--thumbRadius)) / 2);
  background: #a865ff;
  border-radius: 999px;
  pointer-events: all;
  appearance: none;
  z-index: 1;
}

.custom-slider.minmax {
  position: relative;
  height: var(--trackHeight);
  background: rgba(151, 71, 255, 0.2);
  border-radius: 999px;
  margin: 0.5rem 0;
  --progressLeft: 0%;
  --progressRight: 0%;
}

.custom-slider.minmax input[type="range"] {
  position: absolute;
  pointer-events: none;
  width: 100%;
  top: -2px;
}
.custom-slider.minmax input[type="range"]::-webkit-slider-runnable-track {
  background: none;
}

.custom-slider.minmax::before {
  left: var(--progressLeft);
  right: var(--progressRight);
  width: unset;
}

.custom-slider.minmax input[type="range"]::before {
  display: none;
}

.minmax-inputs {
  display: flex;
  justify-content: space-between;
}

.minmax-inputs input {
  width: 41.4vw;
  height: 40px;
  padding: 6px 24px 6px 24px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.03);
  background: rgba(246, 244, 252, 1);
}
</style>
