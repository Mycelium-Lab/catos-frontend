<template>
  <div class="inputfields">
    <input
      v-for="(n, index) in code"
      class="component-4"
      :key="index"
      pattern="\d*"
      :id="'input_' + index"
      maxlength="1"
      v-model="code[index]"
      @input="handleInput"
      @keypress="isNumber"
      @keydown.delete="handleDelete"
      @paste="onPaste"
    />
  </div>
</template>

<script setup lang="ts">
const { code } = defineProps<{
  code: string[]
}>();
const emit = defineEmits(["codeEntered"]);
const keysAllowed: string[] = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
let pastedCode: string[] | undefined;

function isNumber(event: Event) {
  (event.currentTarget as HTMLInputElement).value = "";
  const keyPressed: string = (event as KeyboardEvent).key;
  if (!keysAllowed.includes(keyPressed)) {
    event.preventDefault();
  }
}
function handleInput(event: Event) {
  const inputType = (event as InputEvent).inputType;
  let activeElement = event.target as HTMLInputElement;

  if (inputType === "insertText")
    (activeElement.nextElementSibling as HTMLElement)?.focus();

  if (inputType === "insertFromPaste" && pastedCode) {
    for (const num of pastedCode) {
      let id: number = parseInt(activeElement.id.split("_")[1]);
      activeElement.value = num;
      code[id] = num;

      if (activeElement.nextElementSibling) {
        activeElement = activeElement.nextElementSibling as HTMLInputElement;
        (activeElement.nextElementSibling as HTMLElement)?.focus();
      }
    }
  }
  if (code.filter(el => el !== undefined && el !== "").length === 6) {
    emit("codeEntered");
  }
}
function handleDelete(event: Event) {
  let value = (event.target as HTMLInputElement).value;
  let activeElement = event.target as HTMLInputElement;
  if (!value) (activeElement.previousElementSibling as HTMLElement)?.focus();
}
function onPaste(event: Event) {
  pastedCode = (event as ClipboardEvent).clipboardData
    ?.getData("text")
    .trim()
    .split("");
  if (pastedCode) {
    for (const num of pastedCode) {
      if (!keysAllowed.includes(num)) event.preventDefault();
    }
  }
}
</script>

<style scoped lang="scss">
.inputfields {
  width: 100%;
  height: 4em;
  overflow: hidden;
  font-size: var(--font-size-sm);
  color: rgba(46, 58, 89, 1);
  font-weight: 400;
  outline: none;
  line-height: 14px;
}
.component-4 {
  border-radius: 15px;
  border: 1px solid #70ca98;
  box-sizing: border-box;
  width: 2.7em;
  height: 2.7em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
}
</style>
