<template>
  <div class="catos-select-wrapper">
    <button
      :class="isOpen ? 'catos-select_active catos-select' : 'catos-select'"
      @click="() => (isOpen = !isOpen)"
      :data-element="dataElement"
      :disabled="disabled"
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
        :data-element="dataElement"
      />
      <img
        src="../../assets/images/ui-kit/chevron-double.svg"
        alt="chevron-double"
        :data-element="dataElement"
      />
    </button>
    <ul
      v-if="isOpen"
      :style="
        optionWidth
          ? { width: `${optionWidth}vw` }
          : { width: `${optionWidthDesk}px` }
      "
      :class="
        top
          ? 'catos-select__options_top catos-select__options'
          : sticky
          ? 'catos-select__options_sticky catos-select__options'
          : 'catos-select__options'
      "
    >
      <template v-if="Array.isArray(options)">
        <li
          v-for="(option, index) in options"
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
      </template>
      <template v-else="!Array.isArray(options)">
        <li v-for="option in arrOptions" data-element="option">
          <p class="catos-select__options_name" data-element="option">
            {{ getTranslated(option) }}
          </p>
          <ul class="catos-select__options_group" data-element="option">
            <li
              v-for="(item, index) in options[option]"
              :key="index"
              class="catos-select__option"
              data-element="option"
              :class="options[option].length - 1 === index ? 'last' : ''"
            >
              <input
                class="catos-option_input"
                :value="item"
                @click="getOption"
                readonly
                data-element="option"
              />
            </li>
          </ul>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

const translate = {
  euro: "Европа",
  asia: "Азия",
  africa: "Aфрика",
  america: "Америка",
  australia_okeania: "Австралия и Океания",
  republic: "Республика",
  edge: "Край",
  region: "Область",
};

const { placeholder, options, dataElement } = defineProps({
  placeholder: {
    type: String,
  },
  options: {
    type: Object,
    required: true,
  },
  value: {
    type: String,
  },
  optionWidth: {
    type: Number,
  },
  optionWidthDesk: {
    type: Number,
  },
  top: {
    type: Boolean,
    default: false,
  },
  sticky: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  dataElement: {
    type: String,
    default: "select",
  },
});

const emit = defineEmits(["selected"]);

const isOpen = ref(false);

const getOption = (ev: any) => {
  isOpen.value = false;
  emit("selected", ev.target.value);
};

const arrOptions = computed(() => {
  if (!Array.isArray(options)) {
    // @ts-ignore
    return Object.keys(options);
  }
});

const getTranslated = (option: string) => {
  // @ts-ignore
  return translate[option];
};
watch(isOpen, () => {
  function handleClick(e: any) {
    if (
      e.target.dataset.element === dataElement ||
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
.catos-select-wrapper {
  position: relative;
}
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
  background: transparent;
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
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: var(--br-base);
  padding: 0px;
  list-style: none;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  max-height: 400px;
  overflow-y: auto;
  //position: sticky;
  position: absolute;
  z-index: 1000;
  background: #fff;
  padding: 15px;
  &_sticky {
    position: sticky;
  }
  &_top {
    top: -27.3em;
  }
  &_name {
    font-size: var(--font-size-sm);
    color: rgba(46, 58, 89, 1);
    &:first-child {
      padding-top: 0.5em;
      padding-left: 1.428571428571429em;
      margin: 0em;
    }
  }
  &_group {
    padding: 0px;
    list-style: none;
    padding: 0.8em 1em 0 1em;
  }
}

.catos-select__option:not(:first-child) {
  margin-top: 0.4em;
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
  background: transparent;
  cursor: pointer;
  &_fill {
    color: rgba(46, 58, 89, 1);
  }
}
.catos-option_input {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  background: rgba(230, 221, 255, 0.07);
  width: 100%;
  text-align: start;
  font-size: var(--font-size-base);
  height: 2.5em;
  color: #262626;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--br-xs);

  cursor: pointer;

  &:hover {
    background: #f6f4fe;
  }
}
.last {
  margin-bottom: 1em;
}
</style>
