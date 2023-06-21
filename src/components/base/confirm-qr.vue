<template>
  <modal :from="from">
    <div class="connect-ton-parent">
      <div class="connect-ton">{{ title }}</div>
      <div class="scan-the-qr-code-and-pay-13-51-wrapper">
        <div class="scan-the-qr-container">
          <p class="scan-the-qr">{{ subTitle }}</p>
          <!--<p class="scan-the-qr">with Tonkeeper using</p>-->
        </div>
      </div>
    </div>
    <div class="qr-code-2">
      <img
        class="replace-me-icon"
        alt=""
        src="@/assets/images/replace-me@2x.png"
      />
    </div>
    <div class="or-press-the-the-button-below-parent">
      <div class="scan-the-qr-container">Or press the the button below</div>
      <div class="buttonnext" @click="toGo">
        <b class="ton-kepeer">{{ action }}</b>
      </div>
    </div>
    <div class="we-do-not" v-if="bottomSubTitle === 'policy'">
      By proceeding, you accept the <span>CATOS Terms of Service</span> and
      <span>Privacy Policy</span>
    </div>
    <status-modal
      :variant="modalWindow.variant"
      v-if="isStatus && from !== 'prolong'"
    >
    </status-modal>
    <prolong-modal
      :variant="modalWindow.variant"
      :title="modalWindow.title"
      v-else-if="isStatus && from === 'prolong'"
    >
    </prolong-modal>
  </modal>
</template>

<script setup lang="ts">
import modal from "@/components/ui-kit/modal.vue";
import statusModal from "./status-modal.vue";
import prolongModal from "../loans/prolong-modal.vue";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const isStatus = ref(false);

const toGo = () => {
  if (routerName.value) {
    router.push({ name: `${routerName.value}` });
  } else {
    isStatus.value = true;
  }
};
const bottomSubTitle = computed(() => {
  console.log(window.history.state.title);
  return window.history.state.bottomSubTitle;
});

const subTitle = computed(() => {
  console.log(window.history.state.subTitle);
  return window.history.state.subTitle;
});

const title = computed(() => {
  return window.history.state.title;
});

const routerName = computed(() => {
  console.log(window.history.state.routerName);
  return window.history.state.routerName;
});
const action = computed(() => {
  return window.history.state.actionTitle;
});

const modalWindow = computed(() => {
  return window.history.state.modal;
});

const from = computed(() => {
  return window.history.state.from;
});
</script>

<style scoped lang="scss">
.connect-ton {
  align-self: stretch;
  position: relative;
  font-size: 1.13em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
}
.scan-the-qr {
  margin: 0;
}
.scan-the-qr-container {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.01em;
  line-height: 120%;
  font-weight: 300;
  display: inline-block;
  width: 100%;
}
.connect-ton-parent,
.scan-the-qr-code-and-pay-13-51-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 300px;
}
.connect-ton-parent {
  position: relative;
  top: 2.25em;

  border-radius: 7px;
  width: 100%;
  padding: 0.44em 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 0.75em;
  text-align: center;
}
.qr-code-2,
.replace-me-icon {
  position: absolute;
  overflow: hidden;
}
.replace-me-icon {
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
.qr-code-2 {
  top: 3em;
  /* left: 18%; */
  border-radius: 29px;
  border: 1px dashed #a592dd;
  box-sizing: border-box;
  width: 15em;
  height: 15em;
  /* display: none; */
  position: relative;
  margin: 0 auto;
}
.ton-kepeer {
  position: relative;
  font-size: 1em;
  line-height: 1.75em;
}
.buttonnext {
  border-radius: 20px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  width: 100%;
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  color: #f3f3f3;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
}
.or-press-the-the-button-below-parent {
  position: relative;
  top: 5em;
  /* left: 11vw; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
  width: 77vw;
  text-align: center;
  margin: 0 auto;
}
.we-do-not {
  position: relative;
  top: 8.42em;

  font-size: 0.75em;
  letter-spacing: 0.01em;
  line-height: 120%;
  font-weight: 300;
  color: rgba(59, 59, 59, 0.7);

  width: 57vw;
  margin: 0 auto;
  text-align: center;
  text-align: center;
  letter-spacing: 0.01em;
  line-height: 120%;
  & span {
    color: rgba(87, 126, 247, 0.96);
    text-decoration: underline;
  }
}
.swipe-down {
  position: absolute;
  top: 0.75em;
  left: 10.94em;
  border-radius: 25px;
  width: 2.63em;
  height: 0.31em;
}
.connect {
  position: relative;
  border-radius: 40px 40px 0 0;
  background-color: #fff;
  box-shadow: 0-17px 44px rgba(165, 146, 221, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.13);
  box-sizing: border-box;
  width: 100%;
  height: 41.19em;
  overflow: hidden;
  text-align: center;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
