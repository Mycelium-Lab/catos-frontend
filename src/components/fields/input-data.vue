<template>
  <div class="catos-fields__wrapper">
    <input
      :value="value"
      class="catos-fields"
      :readonly="readonly"
      :placeholder="mutatePlaceholder"
      @focus="handleFocus"
      @blur="handleBlur"
      :type="type"
      @input="selected"
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
      :id="type === 'date' && hideNativeFormatDate ? 'input-date' : ''"
    />
    <div class="custom-format" v-if="type === 'date' && hideNativeFormatDate">
      дд.мм.гггг
    </div>
    <div class="catos-fields__inner-icon_left">
      <slot name="left-icon" />
    </div>
    <div class="catos-fields__inner-icon_right">
      <slot name="right-icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const { placeholder, simulate, value } = defineProps({
  placeholder: {
    type: String,
  },
  type: {
    type: String,
  },
  left: {
    type: Boolean,
  },
  background: {
    type: String,
  },
  border: {
    type: String,
  },
  readonly: {
    type: Boolean,
  },
  value: {
    type: String,
  },
  simulate: {
    type: Boolean,
  },
});

const hideNativeFormatDate = ref(true);
const emit = defineEmits(["selected"]);
const mutatePlaceholder = ref(placeholder);
const handleFocus = () => {
  switch (mutatePlaceholder.value) {
    case "Ваша почта":
      mutatePlaceholder.value = "Введите вашу почту";
      break;
    case "Ваш номер телефона":
      mutatePlaceholder.value = "Введите ваш номер телефона";
      break;
    case "Пароль":
      mutatePlaceholder.value = "Введите ваш пароль";
      break;
    default:
      break;
  }
};
const handleBlur = () => {
  switch (mutatePlaceholder.value) {
    case "Введите вашу почту":
      mutatePlaceholder.value = "Ваша почта";
      break;
    case "Введите ваш номер телефона":
      mutatePlaceholder.value = "Ваш номер телефона";
      break;
    case "Введите ваш пароль":
      mutatePlaceholder.value = "Пароль";
      break;
    default:
      break;
  }
};
const selected = (ev: any) => {
  hideNativeFormatDate.value = false;
  console.log(ev.target.value);
  emit("selected", ev.target.value);
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
