<template>
  <div class="slider-steps-YK6" id="996:28341">
    <div class="loader-HGg" id="I996:28341;394:5428">
      <div class="numbers-yvC" id="I996:28341;394:5429">
        <div class="item--YCc" id="I996:28341;394:5430">из</div>
        <div class="item-7-qhW">{{ quantity }}</div>
      </div>
    </div>
    <div class="steps-7f2" :class="`steps-7f2_${current}`">
      {{ current !== 8 ? `${current} шаг` : "Готово" }}
    </div>
  </div>
</template>

<script setup lang="ts">
const { quantity, current } = defineProps({
  quantity: {
    type: Number,
    default: 0,
  },
  current: {
    type: Number,
    default: 0,
  },
});
</script>

<style scoped lang="scss">
.slider-steps-YK6 {
  flex-shrink: 0;

  position: relative;
  width: 13.7rem;

  .loader-HGg {
    background-color: rgba(245, 249, 255, 0.5099999905);
    border: solid 0.1rem rgba(0, 0, 0, 0.0152999994);
    border-radius: 2.4rem;
    height: 1.625em;
    left: 1.4rem;
    position: absolute;
    top: 0.2rem;
    width: 7.813em;

    .numbers-yvC {
      align-items: center;
      display: flex;
      justify-content: flex-end;
      height: 100%;
      width: 100%;
      font-size: 0.495em;
      padding-right: 3.6616em;

      .item--YCc {
        color: #948463;
        font-family: Inter, "Source Sans Pro";
        font-weight: 500;
        line-height: 1.2;
        margin-right: 0.6rem;
        white-space: nowrap;
      }
      .item-7-qhW {
        color: #958463;
        display: flex;
        flex-shrink: 0;
        font-family: Inter, "Source Sans Pro";
        font-weight: 500;
        line-height: 1.2;
        white-space: nowrap;
      }
    }
  }
  .steps-7f2 {
    align-items: center;
    background-color: rgba(245, 249, 255, 1);
    border-radius: 19px;
    color: #2e3a59;
    display: flex;
    font-family: Inter, "Source Sans Pro";
    font-size: var(--font-size-xs);
    font-weight: 500;
    height: 2.334em;
    justify-content: center;
    left: 0.74em;
    line-height: 1.2000000477;
    position: absolute;
    top: 0.15em;
    white-space: nowrap;
    &_1 {
      width: 4.334em;
    }
    &_2 {
      width: 5.416666666666667em;
    }
    &_3 {
      width: 6.166666666666667em;
    }
    &_4 {
      width: 7.166666666666667em;
    }
    &_5 {
      width: 8.25em;
    }
    &_6 {
      width: 9.916666666666667em;
    }
    &_7,
    &_8 {
      width: 11.5em;
    }
    &_8 {
      color: rgba(108, 191, 98, 1);
    }
  }
}
</style>
