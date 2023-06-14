<template>
  <modal>
    <div class="connect-ton-parent">
      <div class="connect-ton">Connect TON</div>
      <div class="scan-the-qr-code-and-pay-13-51-wrapper">
        <div class="scan-the-qr-container">
          <p class="scan-the-qr">Scan the QR code and pay 13 512 TON</p>
          <p class="scan-the-qr">with Tonkeeper using</p>
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
      <div class="buttonnext">
        <b class="ton-kepeer">Sign in with Tokenkeeper</b>
      </div>
    </div>
    <div class="we-do-not">
      We do not receive or store your wallet login details, so your TON is safe.
    </div>
  </modal>
</template>

<script setup lang="ts">
import modal from "../ui-kit/modal.vue";
</script>

<style scoped>
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
}
.connect-ton-parent {
  position: absolute;
  top: 2.25em;
  left: 11vw;
  border-radius: 7px;
  width: 77vw;
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
  top: 8em;
  left: 18%;
  border-radius: 29px;
  border: 1px dashed #a592dd;
  box-sizing: border-box;
  width: 15em;
  height: 15em;
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
}
.or-press-the-the-button-below-parent {
  position: absolute;
  top: 24.44em;
  left: 11vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
  width: 77vw;
  text-align: center;
}
.we-do-not {
  position: absolute;
  top: 41.42em;
  left: 11vw;
  font-size: 0.75em;
  letter-spacing: 0.01em;
  line-height: 120%;
  font-weight: 300;
  color: rgba(59, 59, 59, 0.7);
  display: inline-block;
  width: 77vw;
  text-align: center;
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
