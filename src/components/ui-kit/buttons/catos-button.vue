<template>
  <button
    :class="
      disabled ? `catos-button_${variant}_disabled` : `catos-button_${variant}`
    "
    class="catos-button"
    id="974:23895"
  >
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const { variant, content, disabled } = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  content: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.catos-button {
  border-radius: 1.25rem;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.360625rem;
  font-family: Inter, "Source Sans Pro";
  font-size: var(--font-size-base);
  font-weight: 500;
  height: 3em;
  justify-content: center;
  line-height: 1.75;
  margin-right: 8.3rem;
  position: relative;
  white-space: nowrap;
  width: 21.375em;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.catos-button_primary {
  background-color: #ffdb6d;
  color: var(--color-darkslategray-100);
  font-weight: 700;
  &:hover {
    background-color: rgba(251, 204, 63, 1);
    //border: 1px solid rgba(0, 0, 0, 0.14);
    cursor: pointer;
  }
  &_disabled {
    background-color: rgba(224, 219, 205, 1);
    cursor: not-allowed;
    color: rgba(59, 59, 59, 0.5);
  }
}
.catos-button_secondary {
  font-weight: 700;
  background: linear-gradient(89.77deg, #9747ff 3.65%, #ad6eff 118.96%);
  color: #f3f3f3;
  &:hover {
    background: linear-gradient(89.7deg, #7811fe 4.08%, #ad6fff 147.58%),
      #7811fe;
    border: 1px solid rgba(0, 0, 0, 0.14);
    cursor: pointer;
  }
  &_disabled {
    background: #9f93af;
    cursor: not-allowed;
    color: rgba(59, 59, 59, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.14);
    opacity: 0.3;
  }
}
.catos-button_tretiary {
  font-weight: 500;
  background: linear-gradient(89.77deg, #9747ff 3.65%, #ad6eff 118.96%);
  color: #f3f3f3;
  width: 17.25em;
  height: 2.5em;
  border-radius: 27px;
  &:hover {
    background: linear-gradient(89.7deg, #7811fe 4.08%, #ad6fff 147.58%),
      #7811fe;
    border: 1px solid rgba(0, 0, 0, 0.14);
    cursor: pointer;
  }
  &_disabled {
    background: #9f93af;
    cursor: not-allowed;
    color: rgba(59, 59, 59, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.14);
    opacity: 0.3;
  }
}
.catos-button_fourth,
.catos-button_fourth_2,
.catos-button_fourth_outline {
  font-weight: 500;
  font-size: var(--font-size-sm);
  color: rgba(254, 254, 254, 1);
  background-color: rgba(87, 126, 247, 0.96);
  width: 19.715em;
  height: 40px;
  border-radius: 25px;
  &:hover {
    background: rgba(48, 98, 253, 1);
    cursor: pointer;
  }
}
.catos-button_fourth {
  &_disabled {
    background: #9f93af;
    cursor: not-allowed;
    color: rgba(59, 59, 59, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.14);
    opacity: 0.3;
    height: 40px;
  }
}
.catos-button_fourth_2 {
  background: linear-gradient(89.77deg, #9747ff 3.65%, #ad6eff 118.96%);

  &:hover {
    background: linear-gradient(89.7deg, #7811fe 4.08%, #ad6fff 147.58%),
      #7811fe;
    border: 1px solid rgba(0, 0, 0, 0.14);
  }
}
.catos-button_fourth_outline {
  background: transparent;
  border: 1px solid rgba(87, 126, 247, 0.96);
  color: var(--color-darkslategray-100);
  &:hover {
    background: rgba(87, 126, 247, 0.24);
    border-color: rgba(87, 126, 247, 0.96);
  }
}
.catos-button_trash {
  font-weight: 400;
  font-size: var(--font-size-xs);
  background: var(--color-darkslategray-100);
  color: #f3f3f3;
  width: 23.417em;
  height: 3.334em;
  border-radius: 36px;
  cursor: pointer;
}
</style>
