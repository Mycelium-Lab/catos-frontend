<template>
  <confirm-qr-destop @close="close" @result="close">
    <template v-slot:header> Займ из пулла #12345 </template>
    <template v-slot:title>Repay the loan</template>
    <template v-slot:subtitle>
      {{ `Scan the QR code and pay ${amount} TON with` }}
      <br />
      Tonkeeper using
    </template>
    <template v-slot:link> EQB5...dzE1hа44 </template>
    <template v-slot:action>Repay the loan </template>
    <template v-slot:footer>
      <div class="frame-parent-repay">
        <div class="frame-group-repay">
          <div class="frame-wrapper-repay">
            <div class="frame-container-repay">
              <div class="container-repay">
                <div class="div1-repay">Cумма к погашению:</div>
              </div>
              <div class="ton-wrapper-repay">
                <div class="ton1-repay">13 512 TON</div>
              </div>
            </div>
          </div>

          <div class="frame-wrapper-repay">
            <div class="frame-parent1-repay">
              <div class="frame-repay">
                <div class="div1-repay">Комиссия CATOS:</div>
              </div>
              <div class="ton-container-repay">
                <div class="ton1-repay">5%</div>
              </div>
            </div>
          </div>
          <div class="frame-child-repay" />
          <div class="frame-wrapper-repay">
            <div class="frame-parent1-repay">
              <div class="frame-repay">
                <div class="div1-repay">Итого:</div>
              </div>
              <div class="ton-container-repay">
                <div class="ton1-repay">
                  <b>{{ amount }} TON</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="policy-text">
        By proceeding, you accept the <br />
        and Privacy Policy.
      </p>
    </template>
  </confirm-qr-destop>
</template>

<script setup lang="ts">
import { computed } from "vue";
import ConfirmQrDestop from "@/components/base/confirm-qr-destop.vue";
import useParsedNumber from "@/compossables/useParsedNumber";
const emits = defineEmits(["close"]);
const close = () => {
  emits("close");
};

const amount = computed(() => {
  const calculated = Math.ceil(13512 * 1.05);
  const { parsed } = useParsedNumber(calculated);
  return parsed;
});
</script>

<style scoped lang="scss">
.frame-parent-repay {
  position: relative;
  border-radius: 16px;
  background-color: #f6f4fc;
  width: 340px;
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
.div-repay {
  position: relative;
  font-size: 14px;
  line-height: 130%;
  font-weight: 500;
}
.wrapper-repay {
  border-radius: 8.79px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 8px;
  align-items: center;
  justify-content: flex-start;
  border: 0.3px solid #656060;
}
.frame-group-repay {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.frame-wrapper-repay {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.frame-container-repay {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.81em;
}
.container-repay {
  flex: 1;
  display: flex;
  flex-direction: row;
  //padding: 0.13em 0em 0.13em 0.38em;
  align-items: flex-start;
  justify-content: flex-start;
}
.div1-repay {
  position: relative;
  font-size: 14px;
  line-height: 130%;
  font-weight: 300;
}
.ton-repay {
  position: relative;
  font-size: 14px;
  line-height: 130%;
  font-weight: 300;
  display: flex;
  align-items: center;
  width: 10.83em;
  flex-shrink: 0;
}
.frame-child-repay {
  position: relative;
  border-top: 1px solid #050506;
  box-sizing: border-box;
  width: 100%;
  height: 0.06em;
}
.frame-parent1-repay {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 0.81em;
}
.ton-container-repay {
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  text-align: right;
}
.ton1-repay {
  flex: 1;
  position: relative;
  font-size: 14px;
  line-height: 130%;
  font-weight: 300;
  color: #3b3b3b;
}
.policy-text {
  margin-top: 1em;
}
</style>
