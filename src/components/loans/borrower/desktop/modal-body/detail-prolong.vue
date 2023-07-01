<template>
  <desktop-modal variant="back" :toBack="toBack" @close="close">
    <template v-slot:title> Займ из пулла #12345 </template>
    <template v-slot:body>
      <div class="frame-parent">
        <div class="frame-wrapper">
          <div class="frame-group">
            <div class="frame-container">
              <div class="frame-div">
                <div class="wrapper">
                  <div class="div">Информация о пролонгациях займа #657946</div>
                </div>
              </div>
              <div class="frame-parent1">
                <div class="frame-wrapper1">
                  <div class="frame-wrapper2">
                    <div class="field-copykey-parent">
                      <div class="field-copykey">
                        <div class="text-1">
                          <div class="key">Key:</div>
                        </div>
                        <div class="code">
                          <div class="id-4743545">ID: 4743545</div>
                          <div class="ton">Пролонгирован: 23.02.22 19:30</div>
                          <div class="ton">Оплачено: 328 TON</div>
                        </div>
                        <img class="iconchange" alt="" src="/iconchange.svg" />
                      </div>
                      <div class="component-27-parent">
                        <div class="component-27">
                          <img class="share-icon" alt="" src="/share.svg" />
                          <div class="number">Поделиться</div>
                        </div>
                        <div class="component-27">
                          <img class="share-icon" alt="" src="/copy.svg" />
                          <div class="number">Скопировать</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="frame-child" />
                <div class="frame-wrapper1">
                  <div class="frame-wrapper2">
                    <div class="field-copykey-parent">
                      <div class="field-copykey">
                        <div class="text-1">
                          <div class="key">Key:</div>
                        </div>
                        <div class="code">
                          <div class="id-4743545">ID: 4743545</div>
                          <div class="ton">Пролонгирован: 23.02.22 19:30</div>
                          <div class="ton">Оплачено: 328 TON</div>
                        </div>
                        <img class="iconchange" alt="" src="/iconchange1.svg" />
                      </div>
                      <div class="component-27-parent">
                        <div class="component-27">
                          <img class="share-icon" alt="" src="/share1.svg" />
                          <div class="number">Поделиться</div>
                        </div>
                        <div class="component-27">
                          <img class="share-icon" alt="" src="/copy1.svg" />
                          <div class="number">Скопировать</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="frame-child" />
                <div class="frame-wrapper1">
                  <div class="frame-wrapper2">
                    <div class="field-copykey-parent">
                      <div class="field-copykey">
                        <div class="text-1">
                          <div class="key">Key:</div>
                        </div>
                        <div class="code">
                          <div class="id-4743545">ID: 4743545</div>
                          <div class="ton">Пролонгирован: 23.02.22 19:30</div>
                          <div class="ton">Оплачено: 328 TON</div>
                        </div>
                        <img class="iconchange" alt="" src="/iconchange2.svg" />
                      </div>
                      <div class="component-27-parent">
                        <div class="component-27">
                          <img class="share-icon" alt="" src="/share2.svg" />
                          <div class="number">Поделиться</div>
                        </div>
                        <div class="component-27">
                          <img class="share-icon" alt="" src="/copy2.svg" />
                          <div class="number">Скопировать</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="frame-child" />
                <div class="frame-wrapper1">
                  <div class="frame-wrapper2">
                    <div class="field-copykey-parent">
                      <div class="field-copykey">
                        <div class="text-1">
                          <div class="key">Key:</div>
                        </div>
                        <div class="code">
                          <div class="id-4743545">ID: 4743545</div>
                          <div class="ton">Пролонгирован: 23.02.22 19:30</div>
                          <div class="ton">Оплачено: 328 TON</div>
                        </div>
                        <img class="iconchange" alt="" src="/iconchange3.svg" />
                      </div>
                      <div class="component-27-parent">
                        <div class="component-27">
                          <img class="share-icon" alt="" src="/share3.svg" />
                          <div class="number">Поделиться</div>
                        </div>
                        <div class="component-27">
                          <img class="share-icon" alt="" src="/copy3.svg" />
                          <div class="number">Скопировать</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="frame-child" />
              </div>
            </div>
            <div class="rectangle-parent">
              <div class="instance-child" />
              <div class="instance-item" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </desktop-modal>
</template>
<script setup lang="ts">
import desktopModal from "@/components/base/desktop-modal.vue";

const { toBack } = defineProps({
  toBack: {
    type: Function,
  },
});
const emits = defineEmits(["close", "link"]);
const close = () => {
  emits("close");
};
</script>
<style scoped>
.div {
  align-self: stretch;
  position: relative;
  font-size: 1.25em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
}
.wrapper {
  align-self: stretch;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  padding: 0.44em 0em;
  align-items: center;
  justify-content: center;
}
.frame-div {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.key {
  position: relative;
  font-size: 0.75em;
  line-height: 140%;
  font-weight: 600;
}
.text-1 {
  display: none;
  flex-direction: row;
  padding: 0em 0.63em 0em 0em;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
}
.id-4743545 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 130%;
  text-align: right;
}
.ton {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.code {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
  z-index: 1;
  color: #3b3b3b;
}
.iconchange {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  top: 0em;
  right: 0.94em;
  bottom: 0em;
  max-height: 100%;
  width: 3.25em;
  display: none;
  z-index: 2;
}
.field-copykey {
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.5em 0em 0.5em 0.75em;
  align-items: flex-start;
  justify-content: center;
  position: relative;
}
.share-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.number {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.component-27 {
  flex: 1;
  border-radius: 7px;
  background-color: rgba(165, 146, 221, 0.1);
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0.44em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}
.component-27-parent {
  align-self: stretch;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
  color: rgba(59, 59, 59, 0.8);
}
.field-copykey-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}
.frame-wrapper2 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-wrapper1 {
  width: 36.25em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-child {
  align-self: stretch;
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  height: 0.06em;
}
.frame-parent1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
  text-align: left;
  color: rgba(59, 59, 59, 0.5);
}
.frame-container {
  display: flex;
  flex-direction: column;
  padding: 0em 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
}
.instance-child {
  position: absolute;
  height: 100%;
  top: 0em;
  right: 0.13em;
  bottom: 0em;
  border-radius: 32px;
  background-color: rgba(230, 221, 255, 0.39);
  width: 0.38em;
}
.instance-item {
  position: absolute;
  height: 41.71%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 58.29%;
  left: 0%;
  border-radius: 21px;
}
.rectangle-parent {
  align-self: stretch;
  position: relative;
  width: 0.63em;
  display: none;
}
.frame-group {
  height: 34.06em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.frame-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent {
  position: relative;
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 1.25em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
