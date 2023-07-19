<template>
  <div class="frame-parent-calculator">
    <div class="wrapper-calculator">
      <div class="div-calculator">Калькулятор прогнозируемой доходности</div>
    </div>

    <div class="frame-group-calculator">
      <div class="frame-wrapper-calculator">
        <div class="frame-container-calculator">
          <div class="container-calculator">
            <div class="div1-calculator">Доходность за последние 30 дней:</div>
          </div>
          <div class="ton-wrapper-calculator">
            <div class="ton1-calculator">20%</div>
          </div>
        </div>
      </div>

      <div class="frame-wrapper-calculator">
        <div class="frame-parent1-calculator">
          <div class="frame-calculator">
            <div class="div1-calculator">Вы инвестируете:</div>
          </div>
          <div class="ton-container-calculator">
            <div class="ton1-calculator">{{ input }} TON</div>
          </div>
        </div>
      </div>
      <div class="frame-child-calculator" />
      <div class="frame-wrapper-calculator">
        <div class="frame-parent1-calculator">
          <div class="frame-calculator">
            <div class="div1-calculator">
              Прогнозируемая годовая доходность:
            </div>
          </div>
          <div class="ton-container-calculator">
            <div class="ton1-calculator">
              <b>{{ amount }} TON</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="info-2-calculator">
    <div class="info-2-inner-calculator">
      <div class="frame-parent5-calculator">
        <div class="radiobutton-parent-calculator">
          <img
            class="alert-triangle-icon-calculator"
            alt=""
            src="@/assets/images/alerttriangle.svg"
          />
          <div class="div11-calculator">Внимание!</div>
        </div>
        <div class="eqb5dze1h44-calculator">
          <b>Прогназируемая доходность </b>на основе доходности за последние 30
          дней. Фактическая доходность может отличаться
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const { input } = defineProps({
  input: {
    type: Number,
    required: true,
  },
});
const amount = computed(() => Math.ceil(input * 0.2 * 12));
</script>

<style scoped lang="scss">
.frame-parent-calculator {
  position: relative;
  border-radius: 16px;
  background-color: #f6f4fc;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.63em 0.75em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: center;
  gap: 0.63em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
.div-calculator {
  position: relative;
  font-size: 14px;
  line-height: 130%;
  font-weight: 500;
}
.wrapper-calculator {
  border-radius: 8.79px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 8px;
  align-items: center;
  justify-content: flex-start;
  border: 0.3px solid #656060;
}
.frame-group-calculator {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.frame-wrapper-calculator {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.frame-container-calculator {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.81em;
}
.container-calculator {
  flex: 1;
  display: flex;
  flex-direction: row;
  //padding: 0.13em 0em 0.13em 0.38em;
  align-items: flex-start;
  justify-content: flex-start;
}
.div1-calculator {
  position: relative;
  font-size: 14px;
  line-height: 130%;
  font-weight: 300;
}
.ton-calculator {
  position: relative;
  font-size: 14px;
  line-height: 130%;
  font-weight: 300;
  display: flex;
  align-items: center;
  width: 10.83em;
  flex-shrink: 0;
}
.frame-child-calculator {
  position: relative;
  border-top: 1px solid #050506;
  box-sizing: border-box;
  width: 100%;
  height: 0.06em;
}
.frame-parent1-calculator {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 0.81em;
}
.ton-container-calculator {
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  text-align: right;
}
.ton1-calculator {
  flex: 1;
  position: relative;
  font-size: 14px;
  line-height: 130%;
  font-weight: 300;
  color: #3b3b3b;
}
.info-2-inner-calculator {
  align-self: stretch;
  border-radius: 11px;
  background-color: #f9f0e1;
  display: flex;
  flex-direction: row;
  padding: 0.63em 0.75em;
  align-items: flex-start;
  justify-content: flex-start;
}
.info-2-calculator {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent5-calculator {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.radiobutton-parent-calculator {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
  cursor: pointer;
}
.alert-triangle-icon-calculator {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
}
.div11-calculator {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
  display: inline-block;
  width: 17.57em;
  flex-shrink: 0;
}
.eqb5dze1h44-calculator {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
</style>
