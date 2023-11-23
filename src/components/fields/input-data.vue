<template>
  <div class="catos-fields__wrapper">
    <input
      :min="min"
      :max="max"
      :value="modelValue"
      class="catos-fields"
      :readonly="readonly"
      :placeholder="mutatePlaceholder"
      :type="type"
      @input="handleInput"
      @blur="handleBlur"
      :style="
        left
          ? { paddingLeft: '3.3em' }
          : background && border
          ? { backgroundColor: `${background}`, border }
          : background
          ? { backgroundColor: `${background}` }
          : border
          ? { border }
          : simulate
          ? { backgroundColor: 'transparent', border: 'none' }
          : ''
      "
    />
    <div class="catos-fields__inner-icon_left">
      <slot name="left-icon" />
    </div>
    <div class="catos-fields__inner-icon_right">
      <slot name="right-icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const { modelValue, placeholder, simulate, name, min, max, type } =
  defineProps<{
    modelValue?: string;
    placeholder?: string;
    type?: string;
    left?: boolean;
    background?: string;
    border?: string;
    readonly?: boolean;
    simulate?: boolean;
    name?: string;
    min?: number;
    max?: number;
  }>();

const emit = defineEmits(["update:modelValue"]);

const mutatePlaceholder = computed(() => {
  switch (placeholder) {
    case "Ваша почта":
      return "Введите вашу почту";
    case "Ваш номер телефона":
      return "79008001234";
    case "Пароль":
      return "Введите ваш пароль";
    default:
      return placeholder;
  }
});

const handleInput = (event: any) => {
  if (name === "tel") {
    event.target.value = event.target.value.replace(/[^0-9]/g, "");
    if (String(event.target.value).length > 11) {
      event.target.value = String(event.target.value).slice(0, 11);
    }
  }

  if (name === "passport") {
    event.target.value = event.target.value.replace(/[^0-9]/g, "");

    const val = event.target.value.replace(/^(.{4})(.*)$/, "$1 $2");
    event.target.value = val;
    if (String(event.target.value).length > 11) {
      event.target.value = String(event.target.value).slice(0, 11);
    }
  }

  if (name === "revenue") {
    event.target.value = event.target.value.replace(/[^0-9]/g, "");
  }
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};

const handleBlur = (event: any) => {
  if (type === "number") {
    try {
      if (
        (min && Number(event.target.value) < min) ||
        (max && Number(event.target.value) > max)
      ) {
        event.target.value = "";
      }
    } catch (e) {
      console.log(e);
    }
  }
};
</script>

<style scoped>
.catos-fields__wrapper {
  position: relative;
}
.catos-fields {
  border-radius: var(--br-base);
  border: 0.5px solid var(--field-stroke);
  box-sizing: border-box;
  width: 100%;
  height: 2.857142857142857em;
  overflow: hidden;
  font-size: var(--font-size-sm);
  color: rgba(46, 58, 89, 1);
  padding: 0 var(--padding-xs);
  font-weight: 400;
  outline: none;
  line-height: 14px;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
}
.catos-fields__inner-icon_left {
  position: absolute;
  top: 8px;
  left: 15.67px;
}
.catos-fields__inner-icon_right {
  position: absolute;
  top: 11px;
  right: 18px;
}
.catos-fields::placeholder {
  color: var(--color-darkslategray-300);
  font-weight: 400;
}
.catos-fields:focus {
  font-weight: 600;
  border-color: var(--catos-secondary);
  color: var(--colors-dark-dark-50);
}
.catos-fields:focus::placeholder {
  color: rgba(0, 0, 0, 0.06);
}

/*input[type="date"]::-webkit-calendar-picker-indicator {
  color: transparent;
  background: none;
  z-index: 1;
}*/
#input-date {
  text-indent: -500px;
}
.custom-format {
  position: absolute;
  bottom: 0.7em;
  left: 1em;
  width: 2em;
  color: #b4b7c3;
  font-weight: 300;
}
</style>
