<template>
  <div class="organizm-loader-Nmi" id="995:25323">
    <div class="frame-1817439-tk4" id="I995:25323;967:72927">
      <input class="input-load" type="file" @change="onFileChanged($event)" accept="image/*" capture/>
      <div class="business-registration-proof--SFn" id="I995:25323;967:72928">
        <span class="business-registration-proof--SFn-sub-0"
          >{{ name }}
        </span>
        <span class="business-registration-proof--SFn-sub-1">{{ obligatoryField ? "*" : "" }}</span>
      </div>
      <div class="loader-8np" id="I995:25323;967:72929">
        <div class="frame-1817477-FcY" id="I995:25323;967:72929;967:72866">
          <img
            class="upload-cloud-NSG"
            src="../../assets/images/ui-kit/input-data/uploadcloud.svg"
            id="I995:25323;967:72929;967:72867"
          />
          <div class="item--b48" id="I995:25323;967:72929;967:72868">
            Загрузить файлы
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const { placeholder, name, obligatoryField } = defineProps({
  placeholder: {
    type: String,
  },
  name: {
    type: String,
  },
  obligatoryField: {
    type: Boolean,
  },
});
const emit = defineEmits(["onChange"]);
const file = ref<File | null>(null);
const form = ref<HTMLFormElement>();

const onFileChanged = ($event: Event) => {
  const target = $event.target as HTMLInputElement;
  if (target && target.files) {
    file.value = target.files[0];
    emit("onChange", file.value);
    // console.log(file.value);
  }
};
// const mutatePlaceholder = ref(placeholder);
// const handleFocus = () => {
//   switch (mutatePlaceholder.value) {
//     case "Ваша почта":
//       mutatePlaceholder.value = "Введите вашу почту";
//       break;
//     case "Ваш номер телефона":
//       mutatePlaceholder.value = "Введите ваш номер телефона";
//       break;
//     case "Пароль":
//       mutatePlaceholder.value = "Введите ваш пароль";
//       break;
//     default:
//       break;
//   }
// };
// const handleBlur = () => {
//   switch (mutatePlaceholder.value) {
//     case "Введите вашу почту":
//       mutatePlaceholder.value = "Ваша почта";
//       break;
//     case "Введите ваш номер телефона":
//       mutatePlaceholder.value = "Ваш номер телефона";
//       break;
//     case "Введите ваш пароль":
//       mutatePlaceholder.value = "Пароль";
//       break;
//     default:
//       break;
//   }
// };
</script>

<style scoped lang="scss">
.input-load {
  position: absolute;
  width: 100%;
  height: 50px;
  top: 1.6rem;
  z-index: 1000;
  cursor: pointer;
  opacity: 0;
  &:hover ~ .loader-8np {
    background-color: rgba(212, 196, 246, 1) !important;
    border-color: rgba(46, 58, 89, 0.24);
  }
}

.organizm-loader-Nmi {
  background-color: rgba(237, 244, 255, 0.3000000119);
  border-radius: 1.6rem;
  overflow: hidden;
  padding: 1.25rem 1.2rem;
  width: 18.4rem;
  .frame-1817439-tk4 {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    .business-registration-proof--SFn {
      align-items: baseline;
      color: #3b3b3b;
      display: flex;
      flex-shrink: 0;
      font-family: Inter, "Source Sans Pro";
      font-size: 1.2rem;
      font-weight: 300;
      line-height: 0.8333333333;
      margin-bottom: 1.065rem;
      margin-left: 0.3rem;
      white-space: nowrap;

      .business-registration-proof--SFn-sub-0 {
        font-size: var(--font-size-xs);
      }
      .business-registration-proof--SFn-sub-1 {
        color: #ff0000;
        font-family: Inter, "Source Sans Pro";
        font-size: var(--font-size-xs);
        font-weight: 300;
        line-height: 0.8333333333;
        padding-left: 0.4em;
      }
    }
    .loader-8np {
      background-color: rgba(230, 221, 255, 0.6800000072);
      border: dashed 0.1rem #a592dd;
      border-radius: 1rem;
      box-sizing: border-box;
      flex-shrink: 0;
      height: 3.2rem;
      width: 100%;

      .frame-1817477-FcY {
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        display: flex;
        height: 100%;
        padding: 0.3rem 0rem 0.3rem 0.099rem;
        width: 100%;

        .upload-cloud-NSG {
          flex-shrink: 0;
          height: 1.7998rem;
          margin-right: 0.8003rem;
          object-fit: contain;
          position: relative;
          vertical-align: top;
          width: 2.2002rem;
        }
        .item--b48 {
          color: #2e3a59;
          display: flex;
          flex-shrink: 0;
          font-family: Inter, "Source Sans Pro";
          font-size: 0.625rem;
          font-weight: 300;
          line-height: 1;
          margin-bottom: 0.0002rem;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
