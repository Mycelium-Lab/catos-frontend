<template>
  <modal v-if="isMobile">
    <div class="wrapper">
      <div class="header">
        <div class="div9">Чеки</div>
      </div>
      <div class="swipe-down"></div>
      <div class="des-1-2-parent-check">
        <div class="des-1-2-check">
          <div class="des-2">
            <div class="div10">
              Создайте чек и оправьте его (ссылку) получаетелю. Перейдя по
              ссылке чека получатель сможет его активировать и получить
              криптовалюту в удобное для него время
            </div>
          </div>
          <div class="des">
            <img class="des-child" alt="" src="@/assets/images/dialog.png" />

            <div class="div11">
              Отправляйте криптовалюту используя виртуальные чеки. Забудьте про
              длинные адреса кошельков и ожидание подтверждения транзакций.
            </div>
          </div>
        </div>
        <div class="buttonnext-wrapper-checks">
          <div class="buttonnext-checks" @click="toCreateCheck">
            <b class="ton-kepeer">Создать чек</b>
          </div>
        </div>
        <div class="descrioption-parent-check">
          <div class="descrioption">
            <div class="number2">Мои чеки</div>
            <div class="details1">Детали</div>
          </div>
          <div class="frame-group">
            <div class="frame-container">
              <div class="frame-div">
                <div class="svg-gobbler-2-1-group">
                  <div class="svg-wrapper">
                    <img
                      class="svg-gobbler-2-11"
                      alt=""
                      src="@/assets/images/invoice.svg"
                    />
                  </div>

                  <div class="ticked-id-parent">
                    <b class="ticked-id">Чек #207</b>
                    <div class="time">
                      2 мая <span class="span">, </span>11:52
                    </div>
                  </div>
                </div>
                <div
                  class="buttons-icon-outline-arr"
                  id="buttonsIconOutlineArr"
                  @click="() => (isDetail = true)"
                >
                  <div class="bg1">
                    <img src="@/assets/images/more.png" />
                  </div>
                </div>
              </div>
              <div class="frame-parent1">
                <div class="title-parent">
                  <div class="title1">Чек на 10 TON</div>
                  <div class="description">
                    <p class="p">Мой первый чек для бабули, привет</p>
                    <p class="p1">моя бабуля!</p>
                  </div>
                </div>
                <div class="frame-inner"></div>
                <div class="author">
                  <img
                    class="img-icon"
                    alt=""
                    src="@/assets/images/edit-photo.png"
                  />

                  <div class="author1">Валентин Иванович</div>
                </div>
              </div>
            </div>
            <div class="frame-container">
              <div class="frame-div">
                <div class="svg-gobbler-2-1-group">
                  <div class="svg-wrapper">
                    <img
                      class="svg-gobbler-2-11"
                      alt=""
                      src="@/assets/images/invoice.svg"
                    />
                  </div>

                  <div class="ticked-id-parent">
                    <b class="ticked-id">Чек #207</b>
                    <div class="time">
                      11 апреля <span class="span">, 10</span>:51
                    </div>
                  </div>
                </div>
                <div
                  class="buttons-icon-outline-arr"
                  id="buttonsIconOutlineArr1"
                >
                  <div class="bg1">
                    <img src="@/assets/images/more.png" />
                  </div>
                </div>
              </div>
              <div class="frame-parent1">
                <div class="title-parent">
                  <div class="title1">Чек на 50 TON</div>
                  <div class="description">Чек без описания:</div>
                </div>
                <div class="frame-inner"></div>
                <div class="author">
                  <img
                    class="img-icon"
                    alt=""
                    src="@/assets/images/edit-photo.png"
                  />

                  <div class="author1">Валентин Иванович</div>
                </div>
              </div>
            </div>
            <div class="frame-container">
              <div class="frame-div">
                <div class="svg-gobbler-2-1-group">
                  <div class="svg-wrapper">
                    <img
                      class="svg-gobbler-2-11"
                      alt=""
                      src="@/assets/images/invoice.svg"
                    />
                  </div>

                  <div class="ticked-id-parent">
                    <b class="ticked-id">Чек #206</b>
                    <div class="time">11:52</div>
                  </div>
                </div>
                <div class="buttons-icon-outline-arr">
                  <div class="bg1">
                    <img src="@/assets/images/more.png" />
                  </div>
                </div>
              </div>
              <div class="frame-parent1">
                <div class="title-parent">
                  <div class="title1">Чек на 50 TON</div>
                  <div class="description">Чек без описания:</div>
                </div>
                <div class="frame-inner"></div>
                <div class="author">
                  <img
                    class="img-icon"
                    alt=""
                    src="@/assets/images/edit-photo.png"
                  />

                  <div class="author1">Валентин Иванович</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="popUpContainer" class="popup-overlay" style="display: none">
        <div class="popup-">
          <div class="counters-graph-web-checks">
            <div class="bg-checks"></div>
            <div class="component-26">
              <div class="number">Поделиться</div>
            </div>
            <div class="component-261">
              <div class="number">Скопировать</div>
            </div>
            <div class="title-wrapper">
              <b class="title">Чек #207</b>
            </div>
          </div>
          <div class="field-">
            <div class="svg-gobbler-2-1-parent">
              <div class="name">
                <div class="invoice-aa-04-19-18">Чек отправлен</div>
                <div class="new-madieton-llc">Описание статуса:</div>
              </div>
            </div>
            <div class="details">
              <div class="total">10 TON</div>
              <div class="paid">Отправлено</div>
            </div>
            <div class="arrows-table"></div>
          </div>
          <div class="div8" id="popuptext">Закрыть</div>
        </div>
      </div>

      <detail v-if="isDetail"></detail>
    </div>
  </modal>
  <checks-desktop v-else></checks-desktop>
</template>

<script setup lang="ts">
import { ref } from "vue";
import modal from "@/components/ui-kit/modal.vue";
import checksDesktop from "./desktop/checks/checks-desktop.vue";
//Отрисовать детали корректно
import detail from "@/components/wallet/check/detail.vue";
import { useRouter } from "vue-router";
const isDetail = ref(false);
const router = useRouter();
const toCreateCheck = () => {
  router.push({ name: "checks-create" });
};
import { useDevice } from "@/compossables/useDevice";

const { isMobile } = useDevice();
</script>

<styles scoped lang="scss">
.wrapper {
  height: 1300px;
}
.div9 {
  position: relative;
  font-size: 1em;
  line-height: 130%;
  font-weight: 600;
}
.header {
  position: absolute;
  top: 1.5em;
  border-radius: 8px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0.75em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}

.div10 {
  align-self: stretch;
  position: relative;
  font-size: 0.63em;
  line-height: 130%;
  font-weight: 300;
}
.des-2 {
  position: absolute;
  top: 1.89em;
  left: 0;
  border-radius: 16px;
  border: 0.5px solid rgba(165, 146, 221, 0.4);
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.63em 0.75em 0.63em;
  align-items: center;
  justify-content: center;
}
.des-child {
  position: relative;
  width: 3.16em;
  height: 3.16em;
  object-fit: cover;
}
.div11 {
  flex: 1;
  position: relative;
  font-size: 0.63em;
  line-height: 130%;
}
.des {
  position: absolute;
  top: -0.03em;
  left: 0;
  border-radius: 16px;
  background-color: #f8f6fc;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.63em 0.75em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 0.38em;
  color: #78789a;
}
.des-1-2-check {
  position: relative;
  width: 100%;
  height: 7.56em;
}
.ton-kepeer {
  position: relative;
  font-size: 1em;
  line-height: 1.75em;
}
.buttonnext-checks,
.buttonnext-wrapper-checks {
  display: flex;
  align-items: center;
  justify-content: center;
}
.buttonnext-checks {
  border-radius: 20px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  width: 100%;
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  flex-direction: row;
  text-decoration: none;
  color: #ffff;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.buttonnext-wrapper-checks {
  width: 100%;
  flex-direction: column;
  text-align: center;
  color: #f3f3f3;
  padding: 0 21px;
  position: relative;
}
.details1,
.number2 {
  position: relative;
  font-size: 0.75em;
  line-height: 1.5em;
}
.details1 {
  display: inline-block;
  width: 3.67em;
  flex-shrink: 0;
}
.descrioption {
  border-radius: 8px;
  background-color: rgba(245, 245, 250, 0.4);
  width: 100%;
  height: 1.81em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0 0.38em;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
}
.svg-gobbler-2-11 {
  position: relative;
  border-radius: 10px;
  width: 14px;
  height: 13px;
  overflow: hidden;
  flex-shrink: 0;
}
.ticked-id {
  position: relative;
  font-size: 0.88em;
  line-height: 1.5em;
  background: linear-gradient(rgba(59, 59, 59, 0.8), rgba(59, 59, 59, 0.8)),
    #3b3b3b;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.span {
  letter-spacing: -1px;
}
.time {
  position: relative;
  font-size: 0.75em;
  line-height: 1.5em;
  font-weight: 500;
  text-align: right;
}
.svg-gobbler-2-1-group,
.ticked-id-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.svg-gobbler-2-1-group {
  flex-direction: row;
  align-items: flex-end;
  gap: 0.81em;
}
.bg1,
.icon {
  position: absolute;
}
.bg1 {
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #ececf2;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  top: calc(50% - 9px);
  left: calc(50% - 9px);
  font-size: 1.13em;
}
.buttons-icon-outline-arr {
  position: relative;
  width: 2.25em;
  height: 2.25em;
  text-align: center;
  color: #8181a5;
  font-family: fa-solid-900;
}
.frame-div {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.title1 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 600;
  display: inline-block;
  width: 21.43em;
}
.p {
  margin-block-start: 0;
  margin-block-end: 1px;
}
.p1 {
  margin: 0;
}
.description {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  color: rgba(59, 59, 59, 0.8);
  display: inline-block;
  width: 21.43em;
}
.title-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.frame-inner {
  align-self: stretch;
  position: relative;
  border-top: 1px solid rgba(165, 146, 221, 0.1);
  box-sizing: border-box;
  height: 0.06em;
}
.img-icon {
  position: relative;
  border-radius: 6px;
  width: 2.13em;
  height: 2.13em;
  object-fit: cover;
}
.author1 {
  position: relative;
  font-size: 0.88em;
  line-height: 1.5em;
  display: inline-block;
  width: 12.71em;
  flex-shrink: 0;
}
.author {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.06em;
  color: #1c1d21;
  font-family: Lato;
}
.frame-container,
.frame-parent1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.frame-parent1 {
  align-self: stretch;
  border-radius: 12px;
  background-color: rgba(165, 146, 221, 0.1);
  padding: 0.75em;
  justify-content: flex-start;
  gap: 0.63em;
  color: #3b3b3b;
}
.frame-container {
  border-radius: 10px;
  border: 1px solid rgba(165, 146, 221, 0.08);
  box-sizing: border-box;
  width: 100%;
  padding: 1.25em 0.75em;
  justify-content: center;
  gap: 1.13em;
}
.frame-group {
  align-items: flex-start;
  gap: 0.75em;
  color: #8681a5;
  font-family: Inter;
  width: 100%;
}
.des-1-2-parent-check,
.descrioption-parent-check,
.frame-group {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.descrioption-parent-check {
  align-items: flex-start;
  gap: 1.25em;
  font-family: Lato;
  width: 100%;
  position: relative;
}
.des-1-2-parent-check {
  position: relative;
  top: 4.56em;
  align-items: center;
  gap: 2em;
  color: #8181a5;
  padding: 0 24px;
}

.header-parent {
  width: 100%;
  background-color: #fff;
}
.header-parent {
  position: relative;
  border-radius: 30px 30px 0 0;
  box-shadow: 0 12px 12px rgba(151, 71, 255, 0.04);

  overflow: auto;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
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
.component-26,
.component-261 {
  position: absolute;
  top: 3.06em;
  left: 1.88em;
  border-radius: 7px;
  background-color: rgba(165, 146, 221, 0.1);
  width: 8.38em;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0.44em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}
.component-261 {
  left: 10.94em;
}
.title {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 1.5em;
  background: linear-gradient(rgba(59, 59, 59, 0.8), rgba(59, 59, 59, 0.8)),
    #3b3b3b;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.title-wrapper {
  position: absolute;
  top: 0.81em;
  left: 1.75em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.counters-graph-web-checks {
  position: absolute;
  top: 3.94em;
  left: 0.69em;
  width: 21.06em;
  height: 6.13em;
}
.svg-gobbler-2-1 {
  position: relative;
  border-radius: 10px;
  width: 2.38em;
  height: 2.38em;
  overflow: hidden;
  flex-shrink: 0;
}
.invoice-aa-04-19-18,
.new-madieton-llc {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  display: inline-block;
  width: 13.75em;
}
.invoice-aa-04-19-18 {
  font-weight: 500;
}
.new-madieton-llc {
  color: rgba(59, 59, 59, 0.4);
}
.name,
.svg-gobbler-2-1-parent {
  display: flex;
  justify-content: flex-start;
}
.name {
  overflow: hidden;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.13em;
}
.svg-gobbler-2-1-parent {
  flex-direction: row;
  align-items: center;
  gap: 0.69em;
  z-index: 0;
}
.paid,
.total {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.total {
  display: inline-block;
  width: 9em;
}
.paid {
  align-self: stretch;
  color: #70ca98;
}
.details {
  display: flex;
  flex-direction: column;
  padding: 0.13em 0;
  align-items: flex-start;
  justify-content: center;
  gap: 0.13em;
  z-index: 1;
  text-align: right;
}
.arrows-table,
.chevron-right-icon {
  width: 0.63em;
  overflow: hidden;
  flex-shrink: 0;
}
.chevron-right-icon {
  position: relative;
  height: 1em;
}
.arrows-table {
  margin: 0 !important;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 20.75em;
  border-radius: 0 4px 4px 0;
  background-color: #f1ecff;
  display: flex;
  flex-direction: row;
  padding: 0.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.arrows-table,
.div8,
.field- {
  position: absolute;
}
.field- {
  top: 0.5em;
  left: 0.44em;
  border-radius: 10px;
  background-color: rgba(246, 244, 251, 0.5);
  width: 21.38em;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0 0.25em 0.25em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  color: #3b3b3b;
}

.popup- {
  position: relative;
  border-radius: 10px;
  background-color: #f6f4fc;
  width: 22.25em;
  height: 13.13em;
  overflow: hidden;
  max-width: 90%;
  max-height: 90%;
  text-align: left;
  color: rgba(59, 59, 59, 0.8);
  font-family: Inter;
}
.svg-wrapper {
  align-items: center;
  justify-content: center;
  display: flex;
  width: 38px;
  height: 38px;
  background-color: rgba(165, 146, 221, 0.1);
  border: 0.5px solid rgba(165, 146, 221, 0.05);
  border-radius: 10px;
}
</styles>
