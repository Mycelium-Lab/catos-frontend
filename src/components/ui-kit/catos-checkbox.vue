<template>
  <div
    v-if="variant === 'square'"
    class="catos-wrapper__checkbox_square"
    @click="() => (checked = !checked)"
  >
    <div
      :class="checked ? 'catos__checkbox_square_checked' : ''"
      class="catos__checkbox_square catos__checkbox"
    ></div>
    <img
      v-if="checked"
      class="check-mark check-mark_square"
      src="../../assets/images/ui-kit/check-mark-square.svg"
      alt="checkbox mark"
    />
  </div>

  <div
    v-if="variant === 'rounded'"
    class="catos-wrapper__checkbox_rounded"
    @click="() => (checked = !checked)"
  >
    <div
      :class="checked ? 'catos__checkbox_rounded_checked' : ''"
      class="catos__checkbox_rounded catos__checkbox"
    ></div>
    <img
      v-if="checked"
      class="check-mark check-mark_rounded"
      src="../../assets/images/ui-kit/сheck-mark-rounded.svg"
      alt="checkbox mark"
    />
  </div>
  <!--TODO: Проработать радиобаттон. Активным должен быть только один-->
  <div
    v-if="variant === 'radiobutton'"
    class="catos-wrapper__radiobutton"
    @click="() => (checked = !checked)"
  >
    <img src="../../assets/images/ui-kit/radiobutton.svg" alt="radiobutton" />
    <img
      v-if="checked"
      class="check-mark catos__radiobutton_acive"
      src="../../assets/images/ui-kit/radiobutton-active.svg"
      alt="ckecked radiobutton"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  variant: { type: String, default: "square" },
});

const checked = ref(false);
</script>

<style scoped lang="scss">
.catos-wrapper__checkbox_square,
.catos-wrapper__checkbox_rounded,
.catos-wrapper__radiobutton {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  position: relative;
}
.catos-wrapper__checkbox_square {
  .check-mark_square {
    top: 5.5px;
    left: 4px;
  }
}
.catos-wrapper__checkbox_rounded {
  .check-mark_rounded {
    top: 2px;
    left: 5px;
  }
}
.catos-wrapper__radiobutton {
  .catos__radiobutton_acive {
    left: 0px;
  }
}
.catos__checkbox {
  cursor: pointer;
  border: solid 0.0833rem #dbdbdb;
  border-radius: 4.14px;
  box-sizing: border-box;
  flex-shrink: 0;
  height: 1.5rem;
  margin: 0rem 1.5rem 0.2rem 0rem;
  overflow: hidden;
  position: relative;
  width: 1.5rem;
  &_square {
    border-radius: 4.14px;
    &_checked {
      border-color: #a592dd;
    }
  }
  &_rounded {
    border-radius: 50%;
    &_checked {
      border-color: #fdd674;
    }
  }
}
.check-mark {
  position: absolute;
}
</style>
