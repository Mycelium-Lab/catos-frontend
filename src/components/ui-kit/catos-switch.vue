<template>
  <!--Привести к идеальному виду -->
  <input id="s2" type="checkbox" class="switch-10" checked />
  <input id="s2" type="checkbox" class="switch-10" />
  <input id="s2" type="checkbox" class="switch-10" checked disabled />
  <input id="s2" type="checkbox" class="switch-10" disabled />
  <!--<div class="switch">
    <div class="handle-container">
      <div class="handle"></div>
    </div>
    <div class="state-layer"></div>
  </div>
  <div class="switch1">
    <div class="handle-container1">
      <div class="handle1"></div>
      <div class="overlay"></div>
    </div>
  </div>
  <div class="switch2">
    <div class="handle-container1">
      <div class="handle2"></div>
      <div class="overlay1"></div>
    </div>
  </div>
  <div class="switch3">
    <div class="handle-container">
      <div class="handle3"></div>
    </div>
    <div class="state-layer1"></div>
  </div>
  <div class="switch4">
    <div class="handle-container1">
      <div class="handle4"></div>
      <div class="overlay2"></div>
    </div>
  </div>
  <div class="switch5">
    <div class="handle-container1">
      <div class="handle5"></div>
      <div class="overlay3"></div>
    </div>
  </div>

  <ul>
    <li>
      <input id="c1" type="checkbox" />
      <label for="c1">Checkbox</label>
    </li>
    <li>
      <input id="c2" type="checkbox" checked />
      <label for="c2">Checkbox</label>
    </li>
    <li>
      <input id="r1" type="radio" name="radio" value="1" />
      <label for="r1">Radio</label>
    </li>
    <li>
      <input id="r2" type="radio" name="radio" value="2" checked />
      <label for="r2">Radio</label>
    </li>
    <li>
      <input id="s1" type="checkbox" class="switch-10" />
      <label for="s1">Switch</label>
    </li>
    <li>
      <input id="s2" type="checkbox" class="switch-10" checked />
      <label for="s2">Switch</label>
    </li>
  </ul>

  <ul>
    <li>
      <input id="c1d" type="checkbox" disabled />
      <label for="c1d">Checkbox</label>
    </li>
    <li>
      <input id="c2d" type="checkbox" checked disabled />
      <label for="c2d">Checkbox</label>
    </li>
    <li>
      <input id="r1d" type="radio" name="radiod" value="1" disabled />
      <label for="r1d">Radio</label>
    </li>
    <li>
      <input id="r2d" type="radio" name="radiod" value="2" checked disabled />
      <label for="r2d">Radio</label>
    </li>
    <li>
      <input id="s1d" type="checkbox" class="switch-10" disabled />
      <label for="s1d">Switch</label>
    </li>
    <li>
      <input id="s2d" type="checkbox" class="switch-10" checked disabled />
      <label for="s2d">Switch</label>
    </li>
  </ul>-->
</template>

<script setup></script>

<style scoped lang="scss">
@supports (-webkit-appearance: none) or (-moz-appearance: none) {
  .wrap-switch-10 {
    position: relative;
    width: 52px;
  }
  input[type="checkbox"],
  input[type="radio"] {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
    --active-inner: #fff;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 28px;
    outline: none;
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 0;
    cursor: pointer;
    border: 0.5px solid var(--color-darkslategray-200);
    background: var(--b, var(--m3-sys-light-surface-variant));
    transition: background 0.3s;
    &:after {
      content: "";
      display: block;
      left: 0;
      top: 0;
      position: absolute;
      transition: transform var(--d-t, 0.3s) var(--d-t-e, ease),
        opacity var(--d-o, 0.2s);
    }
    &:checked {
      --b: var(--catos-secondary);
      --bc: var(--catos-secondary);
      --d-o: 0.3s;
      --d-t: 0.6s;
      --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
      border: none;
      background: var(--b, var(--m3-sys-light-surface-variant));
    }
    &:disabled {
      --b: var(--m3-sys-light-surface-variant);
      border: 0.5px solid var(--m3-sys-light-on-surface);
      cursor: not-allowed;
      opacity: 0.12;
      &:checked {
        --b: var(--m3-sys-light-surface-variant);
        background-color: var(--m3-sys-light-on-surface-variant);
        opacity: 0.12;
        border: none;
      }
    }
    &:hover {
      &:checked {
        &:not(:disabled) {
          &:after {
            background-color: var(--m3-sys-light-primary-container);
          }
          &:before {
            content: "";
            display: block;
            right: -5px;
            top: -6px;
            position: absolute;
            width: 2.5rem;
            height: 2.5rem;
            opacity: 0.08;
            z-index: 0;
            border-radius: var(--br-81xl);
            background-color: var(--catos-secondary);
          }
        }
      }
    }
    &:hover {
      &:not(:checked) {
        &:not(:disabled) {
          &:after {
            background-color: var(--colors-dark-dark-50);
          }
          &:before {
            content: "";
            display: block;
            left: -5px;
            top: -6px;
            position: absolute;
            width: 2.5rem;
            height: 2.5rem;
            opacity: 0.08;
            z-index: 0;
            border-radius: var(--br-81xl);
            background-color: var(--m3-sys-light-on-surface);
          }
        }
      }
    }
    &:not(.switch-10) {
      width: 21px;
      &:after {
        opacity: var(--o, 0);
      }
      &:checked {
        --o: 1;
      }
    }
    & + label {
      font-size: 14px;
      line-height: 21px;
      display: inline-block;
      vertical-align: top;
      cursor: pointer;
      margin-left: 4px;
    }
  }
  input[type="checkbox"] {
    &:not(.switch-10) {
      border-radius: 3px;
      &:after {
        width: 5px;
        height: 9px;
        border: 2px solid var(--active-inner);
        border-top: 0;
        border-left: 0;
        left: 7px;
        top: 4px;
        transform: rotate(var(--r, 20deg));
      }
      &:checked {
        --r: 43deg;
      }
    }
    &.switch-10 {
      width: 52px;
      border-radius: 100px;
      &:after {
        left: 5px;
        top: 5px;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        background: var(--ab, var(--m3-sys-light-outline));
        transform: translateX(var(--x, 0));
      }
      &:checked {
        --ab: var(--active-inner);
        --x: 22px;
      }
      &:checked:after {
        top: 4px;
        width: 20px;
        height: 20px;
      }
      &:checked:after:hover {
        top: 4px;
        width: 20px;
        height: 20px;
      }
      &:disabled {
        &:not(:checked) {
          &:after {
            background-color: var(--m3-sys-light-on-surface);
          }
        }
      }
    }
  }
  input[type="radio"] {
    border-radius: 50%;
    &:after {
      width: 19px;
      height: 19px;
      border-radius: 50%;
      background: var(--active-inner);
      opacity: 0;
      transform: scale(var(--s, 0.7));
    }
    &:checked {
      --s: 0.5;
    }
  }
}
/*.handle {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  border-radius: 50%;
  background-color: var(--m3-sys-light-on-surface);
  width: 1rem;
  height: 1rem;
  opacity: 0.38;
  z-index: 0;
}
.handle-container {
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}
.state-layer,
.switch {
  position: absolute;
  border-radius: var(--br-81xl);
}
.state-layer {
  margin: 0 !important;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--m3-sys-light-surface-variant);
  border: 0.5px solid var(--m3-sys-light-on-surface);
  box-sizing: border-box;
  opacity: 0.12;
  z-index: 0;
}
.switch {
  top: 29.88rem;
  left: 53.88rem;
  width: 3.25rem;
  height: 1.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.handle1,
.overlay {
  position: absolute;
  margin: 0 !important;
}
.handle1 {
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  border-radius: 50%;
  background-color: var(--colors-dark-dark-50);
  width: 1rem;
  height: 1rem;
  z-index: 1;
}
.overlay {
  top: calc(50% - 20px);
  left: calc(50% - 20px);
  border-radius: var(--br-81xl);
  background-color: var(--m3-sys-light-on-surface);
  width: 2.5rem;
  height: 2.5rem;
  opacity: 0.08;
  z-index: 0;
}
.handle-container1,
.switch1 {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.handle-container1 {
  width: 2rem;
  height: 2rem;
  justify-content: center;
  position: relative;
  z-index: 0;
}
.switch1 {
  position: absolute;
  top: 29.88rem;
  left: 47.63rem;
  border-radius: var(--br-81xl);
  background-color: var(--m3-sys-light-surface-variant);
  border: 0.5px solid var(--color-darkslategray-200);
  box-sizing: border-box;
  width: 3.25rem;
  height: 1.75rem;
  justify-content: flex-start;
}
.handle2 {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  border-radius: 50%;
  background-color: var(--m3-sys-light-outline);
  width: 1rem;
  height: 1rem;
  z-index: 1;
}
.overlay1,
.switch2 {
  position: absolute;
  border-radius: var(--br-81xl);
}
.overlay1 {
  margin: 0 !important;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  background-color: var(--m3-sys-light-on-surface);
  width: 1rem;
  height: 1rem;
  display: none;
  opacity: 0.08;
  z-index: 0;
}
.switch2 {
  top: 29.88rem;
  left: 41.38rem;
  background-color: var(--m3-sys-light-surface-variant);
  border: 0.5px solid var(--color-darkslategray-200);
  box-sizing: border-box;
  width: 3.25rem;
  height: 1.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.handle3 {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 10px);
  left: calc(50% - 10px);
  border-radius: 50%;
  background-color: var(--m3-sys-light-surface);
  width: 1.25rem;
  height: 1.25rem;
  z-index: 0;
}
.state-layer1,
.switch3 {
  position: absolute;
  border-radius: var(--br-81xl);
}
.state-layer1 {
  margin: 0 !important;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--m3-sys-light-on-surface-variant);
  opacity: 0.12;
  z-index: 0;
}
.switch3 {
  top: 29.88rem;
  left: 21.94rem;
  width: 3.25rem;
  height: 1.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
.handle4 {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 10px);
  left: calc(50% - 10px);
  border-radius: 50%;
  background-color: var(--m3-sys-light-primary-container);
  width: 1.25rem;
  height: 1.25rem;
  z-index: 1;
}
.overlay2,
.switch4 {
  position: absolute;
  border-radius: var(--br-81xl);
  background-color: var(--catos-secondary);
}
.overlay2 {
  margin: 0 !important;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
  width: 2.5rem;
  height: 2.5rem;
  opacity: 0.08;
  z-index: 0;
}
.switch4 {
  top: 29.88rem;
  left: 15.69rem;
  width: 3.25rem;
  height: 1.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
.handle5,
.handle-10 {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 10px);
  left: calc(50% - 10px);
  border-radius: 50%;
  background-color: var(--m3-sys-light-on-primary);
  width: 1.25rem;
  height: 1.25rem;
  z-index: 1;
}
.handle-10 {
  top: 5px;
  left: calc(50% - 0.5px);
  &:hover {
    background-color: var(--m3-sys-light-primary-container);
    cursor: pointer;
  }
}
.overlay3,
.switch5 {
  position: absolute;
  border-radius: var(--br-81xl);
}
.overlay3 {
  margin: 0 !important;
  top: calc(50% - 12px);
  left: calc(50% - 12px);
  background-color: var(--m3-sys-light-primary);
  width: 1.5rem;
  height: 1.5rem;
  display: none;
  opacity: 0.08;
  z-index: 0;
}
.switch5 {
  top: 8rem;
  left: 0rem;
  background-color: var(--catos-secondary);
  width: 3.25rem;
  height: 1.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}*/
</style>
