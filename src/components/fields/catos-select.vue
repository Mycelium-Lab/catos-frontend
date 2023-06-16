<template>
  <div
    :class="isOpen ? 'catos-select_active catos-select' : 'catos-select'"
    @click="() => (isOpen = !isOpen)"
    data-element="select"
  >
    <input
      :value="value || placeholder"
      :class="
        value
          ? 'catos-select_input_fill catos-select_input'
          : 'catos-select_input'
      "
      type="text"
      readonly
      data-element="select"
    />
    <img
      src="../../assets/images/ui-kit/chevron-double.svg"
      alt="chevron-double"
      data-element="select"
    />
  </div>
  <ul v-if="isOpen" class="catos-select__options">
    <li data-element="option">
      <p class="catos-select__options_name" data-element="option">Страны СНГ</p>
      <ul class="catos-select__options_group" data-element="option">
        <li
          v-for="(option, index) in options?.sng"
          :key="index"
          class="catos-select__option"
          data-element="option"
        >
          <input
            class="catos-option_input"
            :value="option"
            @click="getOption"
            readonly
            data-element="option"
          />
        </li>
      </ul>
    </li>
    <li data-element="option">
      <p class="catos-select__options_name" data-element="option">
        Страны Еврозоны
      </p>
      <ul class="catos-select__options_group" data-element="option">
        <li
          v-for="(option, index) in options?.euro"
          :key="index"
          class="catos-select__option"
          data-element="option"
          :class="options?.euro.length - 1 === index ? 'last' : ''"
        >
          <input
            class="catos-option_input"
            :value="option"
            @click="getOption"
            readonly
            data-element="option"
          />
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const { placeholder } = defineProps({
  placeholder: {
    type: String,
  },
  options: {
    type: Object,
  },
  value: {
    type: String,
  },
});

const emit = defineEmits(["selected"]);

const isOpen = ref(false);

const getOption = (ev: any) => {
  isOpen.value = false;
  emit("selected", ev.target.value);
};

watch(isOpen, () => {
  function handleClick(e: any) {
    if (
      e.target.dataset.element === "select" ||
      e.target.dataset.element === "option"
    ) {
    } else {
      isOpen.value = false;
    }
    if (!isOpen.value) {
      window.removeEventListener("click", handleClick);
    }
  }
  if (isOpen.value) {
    window.addEventListener("click", handleClick);
  }
});
</script>

<style scoped lang="scss">
.catos-select {
  position: relative;
  border: 0.5px solid #2e3a59;
  border-radius: 16px;
  font-size: var(--font-size-sm);
  width: 100%;
  padding: 0.785714285714286em 0.857142857142857em;
  display: flex;
  height: 40px;
  align-items: center;
  &_active,
  &_active input {
    background: rgba(248, 248, 255, 1);
  }
  img {
    width: 1.285714285714286em;
    height: 1.285714285714286em;
  }
}
.catos-select__options {
  width: 18.25em;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: var(--br-base);
  padding: 0px;
  list-style: none;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  position: absolute;
  z-index: 100;
  background: #fff;
  top: 4.3em;
  &_name {
    font-size: var(--font-size-sm);
    color: rgba(46, 58, 89, 1);
    &:first-child {
      padding-top: 1.714285714285714em;
      padding-left: 1.428571428571429em;
      margin: 0em;
    }
  }
  &_group {
    padding: 0px;
    list-style: none;
    padding: 0.857142857142857em 1.428571428571429em 0 1.428571428571429em;
  }
}
.catos-select__option:not(:first-child) {
  margin-top: 0.25em;
}
.catos-select_input,
.catos-option_input {
  border: none;
  outline: none;
  padding: 0.285714285714286em 0 0.285714285714286em 0.571428571428571em;
  color: rgba(59, 59, 59, 0.5);
  font-family: Inter, sans-serif;
  border-radius: 16px;
  font-weight: 300;
  width: 100%;
  font-size: 1em;
  &_fill {
    color: rgba(46, 58, 89, 1);
  }
}
.catos-option_input {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  background: rgba(230, 221, 255, 0.07);
  width: 100%;
  text-align: center;
  font-size: var(--font-size-base);
  height: 2.5em;
  color: #262626;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--br-xs);
  // Остановился здесь
  // Закрывать список при клике за его пределом
  // Для первых убрать отступ
  cursor: pointer;

  &:hover {
    background: #f6f4fe;
  }
}
.last {
  margin-bottom: 2em;
}
</style>
