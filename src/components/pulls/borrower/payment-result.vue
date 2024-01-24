<template>
  <div class="div8">
    <div class="pull-stats3">
      <div class="status-reg">
        <div class="parent10">
          <div class="div71">Займ #12456 получен</div>
          <img
            class="iconsstatus-transaction1"
            alt=""
            src="@/assets/images/success-cash-rounded.svg"
          />

          <div class="fields">
            <div class="fields">
              <div class="frame-wrapper1">
                <div class="ton-frame">
                  <div class="ton5">13 000 TON</div>
                </div>
              </div>
              <div class="eqb5dze1h44">
                <span class="eqb5dze1h44-txt">
                  <p class="p">Были отправлены на ваш кошелек:</p>
                  <p class="eqb5dze1h441">EQB5...dzE1hа44</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pull-stats-inner">
        <div class="parent11">
          <div class="div72">Транзакция:</div>
          <div class="field-copykey-parent">
            <div class="field-copykey">
              <div class="text-1">
                <div class="key">Key:</div>
              </div>
              <div class="code">
                <div class="cahrjj3">EQCoqrqUMQCKKZTBFCQ0VzgOf</div>
              </div>
            </div>
            <div class="component-27-parent">
              <div class="component-27">
                <img
                  class="menu-2-icon"
                  alt=""
                  src="@/assets/images/iconsshare-black.svg"
                />

                <div class="number">Поделиться</div>
              </div>
              <div class="component-27">
                <img
                  class="menu-2-icon_paste menu-2-icon"
                  alt=""
                  src="@/assets/images/iconspaste.svg"
                />

                <div class="number">Скопировать</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pull-stats-item"></div>
      <div class="pull-stats-child1"></div>
      <div class="frame-parent23">
        <div class="frame-parent24">
          <div class="parent12">
            <div class="div47">Кредитор:</div>
            <div class="alert-triangle-parent">
              <div class="div74">Деньги до зарплаты</div>
              <img
                class="radiobutton-icon"
                alt=""
                src="@/assets/images/investore.svg"
              />
            </div>
          </div>
          <div class="frame-child6"></div>
          <div class="alert-triangle-parent-1 alert-triangle-parent">
            <div class="div47">Пул:</div>
            <div class="wrapper15">
              <div class="div76">#123445</div>
            </div>
          </div>
          <div class="frame-child6"></div>
          <div class="frame-parent25">
            <div class="wrapper16">
              <div class="div47">Ставка:</div>
            </div>
            <div class="ton-wrapper">
              <div class="div78">1% в день</div>
            </div>
          </div>
          <div class="frame-child6"></div>
          <div class="frame-parent25">
            <div class="wrapper16">
              <div class="div47">Беспроцентный период:</div>
            </div>
            <div class="ton-wrapper">
              <div class="div78">
                до 12.05.23
                <span class="span46">, 16:00</span>
              </div>
            </div>
          </div>
          <div class="frame-child6"></div>
          <div class="frame-parent25">
            <div class="wrapper16">
              <div class="div47">Вернуть не позднее:</div>
            </div>
            <div class="ton-wrapper">
              <div class="div78">13.05.23, 16:00</div>
            </div>
          </div>
          <div class="percent-group">
            <img
              class="percent-icon1"
              alt=""
              src="@/assets/images/percent.svg"
            />

            <div class="div83">
              <p class="p">Проценты начнут начисляться с 12 апреля</p>
              <p class="p">2023 года, после 16:00</p>
            </div>
          </div>
        </div>
        <div class="fields">
          <div class="info-2-inner">
            <div class="frame-parent21">
              <div class="alert-triangle-parent">
                <img
                  class="iconsedit-outline"
                  alt=""
                  src="@/assets/images/alerttriangle.svg"
                />

                <div class="div63">Внимание!</div>
              </div>
              <div class="div64">
                Если не вернуть займ во время, ваш долг может быть продан
                коллекторам на открытом аукционе
              </div>
            </div>
          </div>
        </div>
        <div class="des-and-bbn-wrapper">
          <div class="des-and-bbn3">
            <div class="text-and-button5">
              <div class="buttons-tabs8">
                <div class="text9">Сменить статус</div>
              </div>
              <div class="buttons-tabs9" @click="toLoans">
                <div class="text9">Перейти в мои займы</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import catosCheckbox from "@/components/ui-kit/catos-checkbox.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const toLoans = () => {
  router.push({ name: "loans-borrower" });
};
</script>

<style scoped lang="scss">
.buttonnext- {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 20px;
  width: 4.66em;
  height: 50.97em;
}
.bg-icon,
.buttonnext-1,
.pull {
  position: absolute;
  top: 0;
  left: 0;
  width: 35.19em;
  height: 20.88em;
}
.buttonnext-1,
.pull {
  top: 52.38em;
  width: 36.44em;
  height: 215.63em;
}
.pull {
  top: 0;
  background-color: #fff;
  width: 24.38em;
  height: 57.94em;
  overflow: hidden;
}
.div9 {
  align-self: stretch;
  position: relative;
  font-size: 1.13em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
}
.header,
.pull-stats-child {
  position: absolute;
  box-sizing: border-box;
}
.header {
  top: 5.81em;
  left: 2.81em;
  border-radius: 7px;
  width: 18.75em;
  display: flex;
  flex-direction: column;
  padding: 0.44em 0;
  align-items: center;
  justify-content: center;
}
.pull-stats-child {
  width: 100%;
  top: calc(50% - 235.5px);
  right: 0;
  left: 0;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 0.5px solid #2e3a59;
  height: 30.25em;
}
.div10 {
  position: relative;
  font-size: 0.63em;
  line-height: 0.68em;
}
.frame {
  border-radius: 8.79px;
  border: 0.3px solid #656060;
  box-sizing: border-box;
  height: 1.25em;
  display: flex;
  flex-direction: row;
  padding: 0.42em;
  align-items: center;
  justify-content: center;
}
.filtr,
.frame-inner {
  position: absolute;
  top: 0;
}
.filtr {
  left: 1em;
  background-color: #fff;
  width: 5.63em;
  display: flex;
  flex-direction: row;
  padding: 0 0.34em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-inner {
  left: 0;
  border-radius: 16px;
  background-color: #f6f4fc;
  width: 20.38em;
  height: 5.94em;
  overflow: hidden;
}
.div11,
.ton {
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.ton {
  font-size: 1.13em;
  line-height: 0.89em;
  background: linear-gradient(
    38.6deg,
    #2e2c2c,
    #4b4949 67.46%,
    #131313,
    rgba(0, 0, 0, 0.94),
    #434343
  );
}
.div11 {
  font-size: 0.63em;
  line-height: 0.68em;
  font-weight: 300;
  background: linear-gradient(#3b3b3b, #3b3b3b), #3b3b3b;
}
.ton-parent {
  position: absolute;
  top: 1.13em;
  left: 2.63em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.38em;
}
.pie-chart-icon {
  position: absolute;
  top: 1.25em;
  left: 0.69em;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
}
.buttons-tabs,
.percent-icon {
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}
.buttons-tabs {
  border-radius: 15px;
  background-color: #fff;
  width: 10.5em;
  height: 4.06em;
}
.percent-icon {
  width: 0.75em;
  height: 0.75em;
}
.div12 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
}
.buttons-tabs-parent,
.frame-div,
.percent-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.buttons-tabs-parent,
.frame-div {
  flex-direction: column;
  align-items: flex-start;
  gap: 0.63em;
}
.buttons-tabs-parent {
  position: absolute;
  top: 0.94em;
  left: 0.81em;
  flex-direction: row;
  align-items: center;
  gap: 0.75em;
}
.frame-container {
  position: relative;
  width: 20.38em;
  height: 5.94em;
}
.div15 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
  font-weight: 300;
}
.frame-parent2 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4.06em;
}
.line-div {
  align-self: stretch;
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  height: 0.06em;
}
.ton-wrapper {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0;
  align-items: flex-start;
  justify-content: flex-start;
}
.roi {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
  font-weight: 300;
}
.frame-parent1,
.roi-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.roi-wrapper {
  width: 7.19em;
  flex-direction: row;
  padding: 0.13em 0;
  box-sizing: border-box;
}
.frame-parent1 {
  width: 18.75em;
  flex-direction: column;
  gap: 0.5em;
}
.percent-icon1 {
  position: relative;
  width: 1em;
  height: 1em;
  overflow: hidden;
  flex-shrink: 0;
}
.div23 {
  position: relative;
  font-size: 0.63em;
  line-height: 1em;
  font-weight: 300;
}
.frame-group,
.percent-group {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.percent-group {
  border-radius: 16px;
  background-color: #f6f4fc;
  width: 100%;
  overflow: hidden;
  flex-direction: row;
  padding: 0.81em 0.75em;
  box-sizing: border-box;
  gap: 0.63em;
}
.frame-group {
  border-radius: 20px;
  flex-direction: column;
  padding: 0 0 0.75em;
  gap: 0.88em;
}
.text {
  position: absolute;
  top: calc(50% - 9px);
  left: calc(50% - 24.5px);
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.buttons-tabs1 {
  align-self: stretch;
  position: relative;
  border-radius: 25px;
  background-color: rgba(87, 126, 247, 0.96);
  border: 0.5px solid rgba(87, 126, 247, 0.96);
  box-sizing: border-box;
  height: 2em;
}
.text1 {
  position: absolute;
  top: 0.5em;
  left: calc(50% - 39px);
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.text-and-button {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.81em;
}
.span {
  letter-spacing: 0.02em;
}
.span1 {
  letter-spacing: 0.03em;
}
.text2,
.text3 {
  position: absolute;
  top: 0.5em;
  font-size: 0.88em;
  line-height: 120%;
  font-weight: 500;
}
.text2 {
  left: 1.79em;
}
.text3 {
  left: calc(50% - 41px);
  letter-spacing: 0.02em;
}
.text-and-button-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.des-and-bbn,
.pull-stats1 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.des-and-bbn {
  border-radius: 16px;
  background-color: #f9fbff;
  width: 18.75em;
  padding: 0.75em;
  box-sizing: border-box;
  align-items: flex-start;
  text-align: right;
  color: #f8f8ff;
}
.pull-stats1 {
  position: absolute;
  top: 2em;
  left: 0.5em;
  align-items: center;
  gap: 0.88em;
}
.pull-stats {
  position: absolute;
  top: 20.75em;
  left: 1.5em;
  width: 21.38em;
  height: 31.06em;
  text-align: left;
}
.frame-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
}
.span2 {
  text-decoration: underline;
  color: #5d83f7;
}
.div24 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
  font-weight: 300;
}
.menu-2-icon {
  position: relative;
  width: 1.2em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
  &_paste {
    width: 1.4em;
  }
}
.frame-parent8,
.menu-2-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.menu-2-parent {
  gap: 0.5em;
  cursor: pointer;
}
.frame-parent8 {
  position: absolute;
  top: 12.25em;
  left: 2.81em;
  width: 18.75em;
  gap: 3.75em;
  text-align: left;
}
.fill {
  position: absolute;
  top: 0.06em;
  left: 0.06em;
  border-radius: 20px;
  background-color: #fdd674;
  border: 0.5px solid rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  width: 7.38em;
  height: 2.06em;
}
.div26,
.div27 {
  position: absolute;
  top: 0.71em;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 110%;
}
.div26 {
  left: 1.68em;
  background: linear-gradient(rgba(59, 59, 59, 0.96), rgba(59, 59, 59, 0.96)),
    #000;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.div27 {
  left: 10.14em;
  display: inline-block;
  width: 5.5em;
}
.button-slider {
  position: absolute;
  top: 8.56em;
  left: 4.5em;
  border-radius: 20px;
  background-color: #f6f4fc;
  width: 15.38em;
  height: 2.19em;
  overflow: hidden;
  color: rgba(59, 59, 59, 0.75);
}
.b1,
.group-icon {
  position: relative;
}
.group-icon {
  width: 1.5em;
  height: 1.39em;
}
.b1 {
  font-size: 1em;
  letter-spacing: 1px;
  line-height: 1.75em;
}
.buttonnext,
.group-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.group-container {
  gap: 0.19em;
}
.buttonnext {
  position: absolute;
  top: 15.75em;
  left: 1.5em;
  border-radius: 20px;
  background: linear-gradient(89.81deg, #9747ff, #ad6fff);
  border: 0.5px solid #fdd674;
  box-sizing: border-box;
  width: 21.38em;
  height: 3em;
  overflow: hidden;
  padding: 0.5em 0.38em 0.5em 0;
  cursor: pointer;
  color: #fff;
}
.div29 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 120%;
}
.description {
  position: absolute;
  top: 2.19em;
  left: calc(50% - 162.5px);
  width: 20.31em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  color: #262626;
}
.div30 {
  position: absolute;
  top: 3.8em;
  left: 32em;
  font-size: 0.63em;
  text-decoration: underline;
  letter-spacing: 0.01em;
  line-height: 100%;
  font-weight: 500;
}
.swipe-down {
  position: absolute;
  top: 0.75em;
  left: 10.88em;
  border-radius: 25px;
  background-color: #cad0e4;
  width: 2.63em;
  height: 0.31em;
}
.div31,
.div32 {
  position: relative;
  font-size: 0.88em;
}
.div31 {
  line-height: 150%;
  font-weight: 300;
}
.div32 {
  letter-spacing: 0.01em;
  line-height: 100%;
}
.iconsedit-outline {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
  top: -0.1em;
}
.tag {
  border-radius: 24.18px;
  background-color: rgba(224, 219, 238, 0.82);
  height: 1.75em;
  padding: 0.38em 0.75em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.group,
.tag,
.tag1,
.tags-brand {
  display: flex;
  flex-direction: row;
  gap: 0.75em;
}
.tag1 {
  border-radius: 24.18px;
  border: 1px solid #e4e0f1;
  box-sizing: border-box;
  height: 1.75em;
  padding: 0.38em 0.75em;
  align-items: center;
  justify-content: center;
}
.group,
.tags-brand {
  align-items: flex-start;
  justify-content: flex-start;
}
.group {
  position: absolute;
  top: 5em;
  left: 2em;
  width: 21.88em;
  flex-direction: column;
  gap: 0.63em;
  color: #2e3a59;
}
.text4 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.03em;
  line-height: 120%;
  font-weight: 300;
}
.text-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.fields-password-and-mail2,
.fieldsinputchoise {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.fields-password-and-mail2 {
  border-radius: 16px;
  border: 0.5px solid #2e3a59;
  box-sizing: border-box;
  height: 2.5em;
  padding: 0.5em 0.75em;
  justify-content: center;
  color: rgba(46, 58, 89, 0.36);
}
.fieldsinputchoise {
  justify-content: flex-start;
  gap: 0.63em;
}
.span5,
.span8 {
  font-weight: 300;
}
.span8 {
  font-family: Inter;
  color: rgba(46, 58, 89, 0.4);
}
.div37 {
  position: relative;
  font-size: 0.95em;
  line-height: 100%;
}
.tag3 {
  border-radius: 16px;
  background-color: #f6f4fc;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  width: 9.63em;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.38em 1.5em;
  align-items: center;
  justify-content: center;
}
.span10 {
  color: #2e3a59;
}
.pro-beats {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.01em;
  line-height: 100%;
}
.tag-parent,
.tag4 {
  display: flex;
  flex-direction: row;
}
.tag4 {
  border-radius: 16px;
  background-color: #f6f4fc;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  width: 9.56em;
  height: 2.5em;
  padding: 0.38em 1.5em;
  align-items: center;
  justify-content: center;
}
.tag-parent {
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.13em;
}
.scroll-thumb-icon {
  position: relative;
  width: 20.31em;
  height: 1.63em;
}
.frame-parent10,
.parent1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent10 {
  gap: 0.63em;
  color: rgba(46, 58, 89, 0.4);
}
.parent1 {
  gap: 0.88em;
}
.pro-beats1 {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.02em;
  line-height: 100%;
}
.tag5,
.tag6 {
  border-radius: 9px;
  background-color: #f6f4fc;
  width: 9.63em;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.38em 1.5em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.tag6 {
  width: 9.56em;
}
.fieldsinputchoise-parent {
  position: absolute;
  top: 10.69em;
  left: 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.75em;
  color: #3b3b3b;
}
.div43 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 100%;
  font-weight: 300;
}
.ton-kepeer {
  position: relative;
  font-size: 1em;
  line-height: 1.75em;
}
.buttonnext1,
.parent5 {
  display: flex;
  align-items: center;
}
.buttonnext1 {
  border-radius: 20px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  width: 20.63em;
  height: 3em;
  overflow: hidden;
  flex-shrink: 0;
  flex-direction: row;
  padding: 0.5em 7.25em;
  box-sizing: border-box;
  justify-content: center;
  text-align: center;
  color: #f3f3f3;
}
.parent5 {
  position: absolute;
  top: 48.69em;
  left: 2em;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5em;
}
.battery-icon,
.div28 {
  position: absolute;
  overflow: hidden;
}
.div28 {
  top: 53.88em;
  left: 0.06em;
  border-radius: 24px 24px 0 0;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  width: 24.31em;
  height: 56.94em;
  text-align: left;
  color: rgba(38, 38, 38, 0.62);
}
.battery-icon {
  height: 25.76%;
  width: 6.24%;
  top: 39.4%;
  right: 7.61%;
  bottom: 34.85%;
  left: 86.15%;
  max-width: 100%;
  max-height: 100%;
}
.wifi-icon {
  position: relative;
  width: 0.95em;
  height: 0.69em;
}
.mobile-signal-icon {
  position: relative;
  width: 1.06em;
  height: 0.67em;
}
.div44 {
  position: absolute;
  height: 85.71%;
  width: 100%;
  top: 9.52%;
  left: 0;
  font-size: 0.94em;
  letter-spacing: -0.02em;
  font-weight: 100;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.time-style,
.time-style1 {
  position: absolute;
  height: 47.73%;
  width: 13.85%;
  top: 27.27%;
  right: 80.77%;
  bottom: 25%;
  left: 5.38%;
}
.time-style1 {
  display: none;
  color: #fff;
}
.ui-bars-status-bars-white {
  position: absolute;
  top: 0;
  left: 0;
  width: 24.38em;
  height: 2.75em;
  color: #1c1c1c;
}
.pull-parent,
.swipe-down1 {
  position: absolute;
  top: 0;
  left: -0.03em;
  background-color: #f6f6f6;
  width: 24.38em;
  height: 110.81em;
}
.swipe-down1 {
  top: 0.75em;
  left: 10.81em;
  border-radius: 25px;
  background-color: #cad0e4;
  width: 2.63em;
  height: 0.31em;
}
.div46 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  letter-spacing: 0.01em;
  line-height: 120%;
}
.description1 {
  position: absolute;
  top: 2.19em;
  left: calc(50% - 150px);
  width: 18.75em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}
.div47,
.div48 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.div48 {
  font-size: 0.75em;
  line-height: 100%;
}
.tag11 {
  flex: 1;
  border-radius: 16px;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.38em 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.ton3 {
  position: relative;
  font-size: 0.95em;
  letter-spacing: 0.02em;
  line-height: 100%;
}
.tag12 {
  border-radius: 16px;
  background-color: #f6f4fc;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  width: 9.94em;
  height: 2.5em;
  padding: 0.38em 1.5em;
  align-items: center;
  justify-content: center;
}
.tag-parent2,
.tag12,
.tag13 {
  display: flex;
  flex-direction: row;
}
.tag13 {
  flex: 1;
  border-radius: 16px;
  height: 2.5em;
  padding: 0.38em 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  color: rgba(46, 58, 89, 0.4);
}
.tag-parent2 {
  align-self: stretch;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.38em;
}
.scroll-thumb-icon4 {
  position: relative;
  width: 18.78em;
  height: 2.38em;
}
.frame-parent14 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
  color: #2e3a59;
}
.parent6 {
  width: 18.75em;
  gap: 0.88em;
}
.fields,
.parent6 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
}
.span41 {
  font-weight: 300;
  color: rgba(46, 58, 89, 0.4);
}
.tag15 {
  border-radius: 16px;
  background-color: #f6f4fc;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  width: 9.94em;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.38em 1.5em;
  align-items: center;
  justify-content: center;
  color: #3b3b3b;
}
.fields-parent {
  position: absolute;
  top: 14.25em;
  left: 2.81em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2em;
}
.frame-child5 {
  position: absolute;
  margin: 0 !important;
  top: 0;
  left: 0;
  width: 1.22em;
  height: 1.13em;
  z-index: 0;
}
.group-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
}
.text5 {
  position: relative;
  font-size: 1em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.frame-parent16,
.text-and-button2 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.frame-parent16 {
  width: 5.25em;
  flex-direction: row;
  gap: 0.25em;
}
.text-and-button2 {
  align-self: stretch;
  border-radius: 27px;
  background-color: #9747ff;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  flex-direction: column;
}
.text6 {
  position: absolute;
  top: 0.5em;
  left: calc(50% - 28px);
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.buttons-tabs5 {
  align-self: stretch;
  position: relative;
  border-radius: 25px;
  height: 2em;
}
.des-and-bbn1,
.text-and-button3 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.text-and-button3 {
  align-self: stretch;
  color: #555562;
}
.des-and-bbn1 {
  position: absolute;
  top: 50.25em;
  left: 2.81em;
  border-radius: 16px;
  background-color: #f9fbff;
  width: 18.75em;
  padding: 0.75em;
  box-sizing: border-box;
  gap: 1em;
  text-align: right;
  color: #f8f8ff;
}
.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.parent8 {
  position: absolute;
  top: 5.75em;
  left: 2em;
  border-radius: 16px;
  border: 1px solid #f6f4fc;
  box-sizing: border-box;
  width: 20.38em;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0.81em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.frame-parent17,
.frame-parent18,
.new-pull-inner {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent18 {
  width: 18.75em;
  flex-direction: row;
  gap: 4.06em;
}
.frame-parent17,
.new-pull-inner {
  flex-direction: column;
}
.frame-parent17 {
  gap: 0.5em;
}
.new-pull-inner {
  position: absolute;
  top: 9em;
  left: 2.81em;
}
.new-pull-child {
  position: absolute;
  top: 12.72em;
  left: 2.81em;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  width: 18.81em;
  height: 0.06em;
}
.div60,
.ton4 {
  position: relative;
  font-size: 1em;
  line-height: 130%;
}
.ton4 {
  font-weight: 600;
}
.header1 {
  border-radius: 6px;
  background: linear-gradient(
      rgba(165, 146, 221, 0.21),
      rgba(165, 146, 221, 0.21)
    ),
    #fff;
  flex-direction: row;
  padding: 0.38em 0 0.38em 1.13em;
  align-items: center;
  gap: 0.63em;
}
.header-parent,
.header1,
.wrapper14 {
  align-self: stretch;
  display: flex;
  justify-content: flex-start;
}
.wrapper14 {
  flex-direction: row;
  padding: 0 0 0 1.13em;
  align-items: flex-start;
  color: #78789a;
}
.header-parent {
  flex-direction: column;
  align-items: center;
  gap: 0.25em;
}
.div62 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.info-1 {
  border-radius: 8px;
  border: 1px solid rgba(165, 146, 221, 0.1);
  box-sizing: border-box;
  width: 18.75em;
  height: 4.44em;
  display: flex;
  flex-direction: row;
  padding: 0.63em 1.13em;
  align-items: flex-start;
  justify-content: flex-start;
}
.div63 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
  display: inline-block;
  width: 17.57em;
  flex-shrink: 0;
}
.alert-triangle-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
  &-1 {
    justify-content: space-between;
    width: 100%;
  }
}
.div64 {
  align-self: stretch;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.frame-parent21 {
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25em;
  width: 100%;
}
.frame-parent20,
.frame-parent21,
.info-2,
.info-2-inner {
  display: flex;
  justify-content: flex-start;
}
.info-2-inner {
  border-radius: 11px;
  background-color: #f9f0e1;
  width: 100%;
  flex-direction: row;
  padding: 0.63em 0.75em;
  box-sizing: border-box;
  align-items: flex-start;
}
.frame-parent20,
.info-2 {
  flex-direction: column;
}
.info-2 {
  align-items: flex-start;
  margin-top: -1.19em;
}
.frame-parent20 {
  top: 32em;
  left: calc(50% - 171px);
  border-radius: 14px;
  background-color: #f8f6fc;
  padding: 1.25em 1.31em;
  align-items: center;
  gap: 1.13em;
}
.frame-parent20,
.home-icon,
.new-pull {
  position: absolute;
  overflow: hidden;
}
.new-pull {
  top: 8.56em;
  left: 0;
  border-radius: 30px 30px 0 0;
  background-color: #fff;
  box-shadow: 0 12px 12px rgba(151, 71, 255, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  width: 24.38em;
  height: 69.13em;
  text-align: left;
}
.home-icon {
  top: 0.38em;
  left: 0.75em;
  width: 1.88em;
  height: 1.88em;
}
.div65 {
  position: absolute;
  top: 3.6em;
  left: 1.1em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
}
.container1,
.iconsmenu {
  width: 3.38em;
  height: 3.38em;
}
.container1 {
  position: relative;
}
.iconsmenu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 0;
  color: rgba(48, 51, 55, 0.9);
}
.basket-icon {
  position: absolute;
  top: 0.38em;
  left: 0.73em;
  width: 1.88em;
  height: 1.88em;
  overflow: hidden;
}
.div66 {
  position: absolute;
  top: 3.6em;
  left: 1.02em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
}
.iconsmenu1 {
  width: 3.38em;
  height: 3.38em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.news-icon {
  position: absolute;
  top: 0.38em;
  left: 0.77em;
  width: 1.88em;
  height: 1.88em;
  overflow: hidden;
}
.div67 {
  position: absolute;
  top: 3.6em;
  left: 0.2em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
}
.iconsmenu2 {
  width: 3.38em;
  height: 3.38em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.div68 {
  position: absolute;
  top: 3.6em;
  left: 0.05em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
}
.iconsmenu3 {
  width: 3.38em;
  height: 3.38em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;
}
.div69 {
  position: absolute;
  top: 3.6em;
  left: 0.6em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
}
.wallet-money-cash-svgrepo-com-icon {
  position: absolute;
  top: 0.41em;
  left: 0.81em;
  width: 1.81em;
  height: 1.81em;
  overflow: hidden;
}
.iconsmenu4 {
  width: 3.38em;
  height: 3.38em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 4;
}
.b2,
.mask-icon {
  position: absolute;
  left: 7.14%;
}
.mask-icon {
  height: 85.71%;
  width: 85.71%;
  top: 7.14%;
  right: 7.14%;
  bottom: 7.14%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.b2 {
  height: 61.54%;
  width: 69.23%;
  top: 21.43%;
  font-size: 0.41em;
  line-height: 120%;
  display: inline-block;
}
.status {
  top: 0.63em;
  left: 8em;
  z-index: 5;
  color: rgba(255, 255, 255, 0.96);
}
.status,
.status-icon,
.status-icon1,
.status1 {
  position: absolute;
  margin: 0 !important;
  width: 0.88em;
  height: 0.88em;
  opacity: 0;
}
.status1 {
  top: 0.63em;
  left: 8em;
  z-index: 6;
  color: rgba(255, 255, 255, 0.96);
}
.status-icon,
.status-icon1 {
  top: 0.69em;
  left: 16.75em;
  z-index: 7;
}
.status-icon1 {
  left: 12.5em;
  z-index: 8;
}
.bg,
.nav-menu {
  position: absolute;
  width: 24.38em;
}
.nav-menu {
  top: 67.5em;
  left: -0.03em;
  border-radius: 20px 20px 0 0;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: 0.5em 2em 1.25em;
  align-items: center;
  justify-content: space-between;
  text-align: right;
  color: rgba(93, 104, 123, 0.9);
}
.bg {
  top: 0;
  left: 0;
  background-color: rgba(166, 146, 221, 0.2);
  backdrop-filter: blur(4px);
  height: 64.56em;
}
.rectangle-div {
  position: absolute;
  top: calc(50% - 189px);
  left: calc(50% - 171px);
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 0.5px solid rgba(46, 58, 89, 0.4);
  box-sizing: border-box;
  width: 21.38em;
  height: 26.25em;
}
.radiobutton-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.balance-10-273,
.catos1 {
  align-self: stretch;
  position: relative;
  font-size: 1em;
  line-height: 1.56em;
  font-weight: 500;
}
.balance-10-273 {
  font-size: 0.75em;
  line-height: 1.33em;
  font-weight: 300;
}
.component-20,
.description-and-image {
  display: flex;
  align-items: center;
  justify-content: center;
}
.description-and-image {
  align-self: stretch;
  flex-direction: row;
  gap: 0.63em;
}
.component-20 {
  position: absolute;
  top: 8em;
  left: calc(50% - 156px);
  border-radius: 16px;
  background-color: rgba(165, 146, 221, 0.08);
  border: 1px solid rgba(165, 146, 221, 0.4);
  box-sizing: border-box;
  width: 19.56em;
  flex-direction: column;
  padding: 0.75em 1.31em 0.88em;
  cursor: pointer;
}
.balance-104-273,
.tonkeeper {
  align-self: stretch;
  position: relative;
  font-size: 1em;
  letter-spacing: 1px;
  line-height: 1.56em;
  font-weight: 500;
}
.balance-104-273 {
  font-size: 0.75em;
  letter-spacing: 0.01em;
  line-height: 1.33em;
  font-weight: 300;
}
.description-and-image1 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.component-21 {
  position: absolute;
  top: 13.44em;
  left: calc(50% - 156px);
  border-radius: 16px;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  width: 19.56em;
  display: flex;
  flex-direction: column;
  padding: 0.75em 1.31em 0.88em;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.group-icon1 {
  position: absolute;
  height: 6.11%;
  width: 7.2%;
  top: 40.19%;
  right: 3.95%;
  bottom: 53.7%;
  left: 88.86%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.text7,
.text8 {
  position: absolute;
  top: 0.5em;
  left: calc(50% - 45px);
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.text8 {
  left: calc(50% - 24px);
}
.buttons-tabs7 {
  align-self: stretch;
  position: relative;
  border-radius: 25px;
  border: 0.5px solid rgba(87, 126, 247, 0.96);
  box-sizing: border-box;
  height: 2em;
  color: #555562;
}
.des-and-bbn2,
.text-and-button-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.text-and-button-wrapper {
  align-self: stretch;
  flex-direction: row;
}
.des-and-bbn2 {
  position: absolute;
  top: 19.63em;
  left: calc(50% - 149px);
  border-radius: 16px;
  background-color: #f9fbff;
  width: 18.75em;
  flex-direction: column;
  padding: 0.75em;
  box-sizing: border-box;
  text-align: right;
  color: #f8f8ff;
}
.rectangle-group {
  position: absolute;
  top: 1.56em;
  left: calc(50% - 170.5px);
  width: 21.38em;
  height: 28.88em;
}
.iconsstatus-transaction {
  position: relative;
  width: 3.38em;
  height: 3.38em;
  overflow: hidden;
  flex-shrink: 0;
}
.div70 {
  position: relative;
  font-size: 1em;
  letter-spacing: 0.01em;
  line-height: 130%;
}
.field-fill-color-field-info,
.field-info {
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.field-info {
  align-self: stretch;
  border-radius: 16px;
  background-color: #fff;
  height: 4em;
  flex-direction: row;
  padding: 0 0.25em;
  justify-content: flex-start;
  gap: 0.5em;
}
.field-fill-color-field-info {
  position: absolute;
  top: 1.56em;
  left: calc(50% - 161.5px);
  border-radius: 12px;
  background-color: #f6f4fc;
  border: 1px solid rgba(46, 58, 89, 0.08);
  width: 20.31em;
  overflow: hidden;
  flex-direction: column;
  padding: 0.88em 0.75em;
  justify-content: center;
}
.pull-stats2 {
  position: absolute;
  top: 8.63em;
  left: calc(50% - 186px);
  border-radius: 15px;
  background-color: #fff;
  width: 23.19em;
  height: 43.94em;
  overflow: hidden;
  text-align: left;
}
.div71 {
  align-self: stretch;
  position: relative;
  font-size: 1em;
  letter-spacing: 0.01em;
  line-height: 130%;
}
.iconsstatus-transaction1 {
  position: relative;
  width: 5.38em;
  height: 5.38em;
  overflow: hidden;
  flex-shrink: 0;
}
.ton5 {
  position: relative;
  font-size: 1em;
  letter-spacing: 1px;
  line-height: 130%;
  font-weight: 600;
}
.ton-frame {
  border-radius: 9px;
  display: flex;
  flex-direction: row;
  padding: 0 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-wrapper1 {
  width: 18.75em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.p {
  margin: 0;
}
.eqb5dze1h441 {
  margin: 0;
  text-decoration: underline;
  color: #577ef7;
}
.eqb5dze1h44-txt {
  line-break: anywhere;
  width: 100%;
}
.eqb5dze1h44 {
  position: relative;
  font-size: 0.75em;
  line-height: 140%;
  font-weight: 300;
  display: flex;
  align-items: center;
  width: 25em;
}
.parent10,
.status-reg {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.parent10 {
  justify-content: flex-start;
  gap: 0.88em;
}
.status-reg {
  position: relative;
  top: 1.19em;
  /* left: 2.25em; */
  border-radius: 16px;
  width: 77vw;
  padding: 0.63em 0.88em;
  box-sizing: border-box;
  margin: 0 auto;
  justify-content: center;
}
.div72,
.key {
  position: relative;
}
.div72 {
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 130%;
}
.key {
  font-size: 0.75em;
  line-height: 140%;
  font-weight: 600;
}
.text-1 {
  display: none;
  flex-direction: row;
  padding: 0 0.63em 0 0;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
}
.cahrjj3 {
  position: relative;
  font-size: 0.75em;
  text-decoration: underline;
  line-height: 140%;
  font-weight: 600;
}
.code {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  color: rgba(87, 126, 247, 0.96);
}
.iconchange1 {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  max-height: 100%;
  width: 3.25em;
  display: none;
  z-index: 2;
}
.field-copykey {
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  width: 77vw;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0 0.5em 0.75em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  position: relative;
}
.number {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.component-27,
.component-27-parent {
  display: flex;
  flex-direction: row;
  gap: 0.5em;
}
.component-27 {
  flex: 1;
  border-radius: 7px;
  background-color: rgba(165, 146, 221, 0.1);
  padding: 0.25em 0.44em;
  align-items: center;
  justify-content: center;
}
.component-27-parent {
  align-self: stretch;
  align-items: flex-start;
  justify-content: flex-start;
  color: rgba(59, 59, 59, 0.8);
}
.field-copykey-parent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  text-align: left;
  width: 100%;
  color: rgba(59, 59, 59, 0.5);
}
.parent11,
.pull-stats-inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.parent11 {
  align-self: stretch;
  gap: 0.5em;
}
.pull-stats-inner {
  position: relative;
  top: 3.56em;
  width: 77vw;
  margin: 0 auto;
  text-align: right;
}
.pull-stats-child1,
.pull-stats-item {
  position: absolute;
  top: 15.28em;
  left: -0.03em;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  width: 100%;
  height: 0.06em;
}
.pull-stats-child1 {
  top: 24.78em;
}
.div74 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.parent12 {
  align-self: stretch;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0;
  align-items: center;
  justify-content: space-between;
  gap: 0.63em;
}
.frame-child6 {
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  width: 100%;
  height: 0.06em;
}
.div76 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 130%;
  font-weight: 300;
}
.wrapper15,
.wrapper16 {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.wrapper15 {
  align-items: center;
  color: rgba(87, 126, 247, 0.96);
}
.wrapper16 {
  padding: 0.13em 0;
  align-items: flex-start;
  width: 70%;
}
.div78 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
  text-align: end;
}
.frame-parent25 {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5em;
}
.span46 {
  letter-spacing: -0.01em;
}
.div83 {
  position: relative;
  font-size: 0.63em;
  line-height: 130%;
  font-weight: 300;
}
.frame-parent24 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
  width: 100%;
}
.text9 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.buttons-tabs8,
.buttons-tabs9 {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  align-self: stretch;
  border-radius: 25px;
  box-sizing: border-box;
  height: 2em;
  flex-direction: row;
  cursor: pointer;
  align-items: center;
  justify-content: center;
}
.buttons-tabs8 {
  background-color: rgba(87, 126, 247, 0.96);
  display: none;
}
.buttons-tabs9 {
  border: 0.5px solid rgba(87, 126, 247, 0.96);
  display: flex;
  color: #555562;
}
.des-and-bbn3,
.text-and-button5 {
  display: flex;
  flex-direction: column;
}
.text-and-button5 {
  flex: 1;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.81em;
}
.des-and-bbn3 {
  border-radius: 16px;
  background-color: #f9fbff;
  width: 100%;
  padding: 0.75em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.des-and-bbn-wrapper,
.frame-parent23 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.des-and-bbn-wrapper {
  border-radius: 14px;
  background-color: #f9fbff;
  border: 1px solid rgba(165, 146, 221, 0.1);
  box-sizing: border-box;
  width: 77vw;
  height: 4.69em;
  overflow: hidden;
  flex-shrink: 0;
  padding: 0.63em 0;
  text-align: right;
  position: relative;
  margin: 0 auto;
  color: #fefefe;
}
.frame-parent23 {
  position: relative;
  top: 6.3em;
  /* left: 2.25em; */
  gap: 1.75em;
  text-align: left;
  margin: 0 auto;
  width: 77vw;
}
.pull-stats3 {
  position: relative;
  top: 3.31em;

  border-radius: 15px 15px 0 0;
  background-color: #fff;
  width: 95.5vw;
  height: 61.25em;
  overflow-y: auto;
  margin: 0 auto;
}
.div8 {
  position: relative;
  background-color: rgba(166, 146, 221, 0.2);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  width: 100%;
  height: 64.56em;
  overflow: hidden;
  text-align: center;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
