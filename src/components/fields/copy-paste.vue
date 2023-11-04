<template>
  <div class="catos-fields__wrapper">
    <input
      class="catos-fields_copy-pate"
      @focus="handleFocus"
      @blur="handleBlur"
      type="text"
      :id="id"
      :readonly="readonly"
      :value="value"
      :placeholder="placeholder"
      :style="{ paddingLeft: `${padding}px` }"
    />
    <div class="catos-fields__label">
      <slot name="label" />
    </div>
    <div class="catos-fields__inner-icon">
      <div class="catos-fields__inner-icon-wrapper">
        <slot name="icon" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const { placeholder, id } = defineProps({
  placeholder: {
    type: String,
  },
  id: {
    type: String,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String,
  },
  padding: {
    type: String,
  },
});
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
</script>

<style scoped>
.catos-fields__wrapper {
  /* width: 300px;*/
  width: 100%;
  position: relative;
  /*margin-top: 20px;*/
}
.catos-fields_copy-pate {
  border-radius: var(--br-xs);
  border: none;
  box-sizing: border-box;
  width: 100%;
  height: 2.5rem;
  overflow: hidden;
  font-size: var(--font-size-xs);
  color: rgba(46, 58, 89, 1);
  /*padding: 0 18%;*/
  padding-left: 12px;

  font-weight: 600;
  outline: none;
  line-height: 14px;
  background-color: rgba(165, 146, 221, 0.07);
}
.catos-fields__label {
  position: absolute;
  top: 1.1em;
  left: 1em;
  color: rgba(59, 59, 59, 0.5);
  font-family: var(--inter-small-12);
  font-weight: 600;
  font-size: var(--font-size-xs);
}
.catos-fields__inner-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  /* !1 */
  right: 0em;
  width: 3em;
  height: 40px;
  background-color: rgba(230, 221, 255, 1);
  border-top-right-radius: var(--br-xs);
  border-bottom-right-radius: var(--br-xs);
  cursor: pointer;
}
.catos-fields__inner-icon-wrapper {
  margin-top: 0.3em;
}
.catos-fields_copy-pate::placeholder {
  color: var(--color-darkslategray-300);
}
.catos-fields_copy-pate:focus {
  font-weight: 600;
  border-color: var(--catos-secondary);
  color: var(--colors-dark-dark-50);
}
.catos-fields_copy-pate:focus::placeholder {
  color: rgba(0, 0, 0, 0.06);
}
</style>
