<template>
  <div class="wrapper" :data-open="state === 'open' ? 1 : 0">
    <div class="bg" @click="() => setState('half')"></div>
    <div
      ref="card"
      class="card"
      :data-state="isMoving ? 'move' : state"
      :style="{ top: `${isMoving ? y : calcY()}px` }"
    >
      <div class="pan-area" ref="pan">
        <div class="bar" ref="bar" :style="{ backgroundColor: barColor }"></div>
      </div>
      <span class="close" @click="close">Закрыть</span>
      <div class="contents">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Hammer from "hammerjs";

export default {
  name: "bottom-sheet",

  props: {
    openY: {
      type: Number,
      default: 0.2,
    },

    halfY: {
      type: Number,
      default: 0.8,
    },

    defaultState: {
      type: String,
      default: "half",
    },

    barColor: {
      type: String,
      default: "rgba(0, 0, 0, .3)",
    },

    value: {
      type: String,
      default: "half",
    },

    minState: {
      type: String,
      default: "half",
    },

    top: {},
  },

  data() {
    return {
      mc: null as any,
      y: 0,
      startY: 0,
      isMoving: false,
      state: this.defaultState,
      rect: {} as any,
      states: ["close", "half", "open"],
      sheetState: null as any,
    };
  },

  mounted() {
    window.onresize = () => {
      this.rect = (this.$refs["card"] as any).getBoundingClientRect();
    };

    this.rect = (this.$refs["card"] as any).getBoundingClientRect();

    this.mc = new Hammer(this.$refs["pan"] as any);
    this?.mc?.get("pan")?.set({ direction: Hammer.DIRECTION_ALL });

    this.mc.on("panup pandown", (evt: any) => {
      this.y = evt.center.y - 16;
    });

    this.mc.on("panstart", (evt: any) => {
      this.startY = evt.center.y;
      this.isMoving = true;
    });

    this.mc.on("panend", (evt: any) => {
      this.isMoving = false;

      switch (this.state) {
        case "close": //Added a close state on the condition to be able to swipe from closed to half/closed state.
        case "half":
          if (this.state === "close") {
            if (this.startY - evt.center.y > 120) {
              this.state = "half";
            }
            if (this.startY - evt.center.y > 320) {
              this.state = "open";
            }
            break;
          }
          if (this.startY - evt.center.y > 120) {
            this.state = "open";
          }
          if (this.startY - evt.center.y < -50) {
            this.state = "close";
          }
          break;
        case "open":
          if (this.startY - evt.center.y < -120) {
            this.state = "half";
          }
          break;
        default:
          this.state = "half";
      }

      this.checkForMinState();
    });

    this.checkForMinState();
  },

  beforeDestroy() {
    this.mc.destroy();
    window.onresize = null;
  },

  methods: {
    calcY() {
      switch (this.state) {
        case "close":
          return this.rect.height;
        case "open":
          console.log(this.rect.height * this.openY);
          return this.rect.height * this.openY;
        case "half":
          console.log(this.rect.height * this.halfY);
          return this.rect.height * this.halfY;
        default:
          return this.y;
      }
    },

    checkForMinState() {
      if (
        this.states.indexOf(this.state) < this.states.indexOf(this.minState)
      ) {
        this.state = this.minState;
      }
    },

    setState(state: any) {
      this.state = state;
    },

    close() {
      this.$emit("onClose");
    },
  },

  watch: {
    value(newState) {
      this.setState(newState);
    },

    state(newState) {
      if (newState === "open") {
        this.$emit("onOpen");
      }
      if (this.sheetState !== newState) {
        this.$emit("input", newState);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper[data-open="1"] {
  position: fixed;
  top: 0;
  left: 0;
}

.wrapper[data-open="1"] .bg {
  display: block;
  transition: all 0.3s;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.02);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
}

.card {
  width: 100%;
  height: 100vh;
  position: fixed;
  background: white;
  border-radius: 17px 17px 0 0;
  left: 0;
  border: 1px solid #2e3a5933;
  z-index: 10;
  overflow-y: auto;
  overflow-x: hidden;
}

.card[data-state="half"],
.card[data-state="open"],
.card[data-state="close"] {
  transition: top 0.3s ease-out;
}

.bar {
  width: 42px;
  height: 5px;
  border-radius: 25px;
  margin: 0 auto;
  cursor: pointer;
  color: #cad0e4;
}

.pan-area {
  top: 0;
  right: 0;
  left: 0;
  position: absolute;
  padding: 12px 0;
  .bar {
    &:hover {
      cursor: grab;
    }
    &:active {
      cursor: grabbing;
    }
  }
}

.card[data-state="close"] .pan-area {
  top: -28px;
}

.contents {
  margin-top: 28px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 100%;
  padding-bottom: calc(100vh * 0.2);
  box-sizing: border-box;
}
.close {
  color: rgba(38, 38, 38, 0.62);
  font-size: 10px;
  font-weight: 400;
  position: absolute;
  top: 3em;
  right: 2em;
}
</style>
