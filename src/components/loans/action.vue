<template>
  <div class="div8">
    <div class="header">
      <div class="div13">Заявки</div>
    </div>
    <div class="col-titles-bg1"></div>
    <div class="bg"></div>
    <div class="header-parent">
      <div class="header1">
        <div class="div41">
          {{
            isIssueLoan
              ? "Выставить займ #12345 на маркетплейс коллекторов CATOS"
              : value === "loans"
              ? "Информация о займе #12345"
              : "Заявка на займ #12346"
          }}
        </div>
      </div>
      <span class="close" @click="toBack">Закрыть</span>
      <div class="div42">
        <div class="container-button">
          <!--<slot name="status-inner"></slot>-->
          <statusButtonOption
            v-if="value === 'bids'"
            :variantIndex="
              currentStatus === 'reject'
                ? 1
                : currentStatus === 'panding'
                ? 2
                : 0
            "
          ></statusButtonOption>
          <status-tag
            v-else
            :variant="
              currentStatus === 'forsales'
                ? 'forsales'
                : currentStatus === 'repaid' || currentStatus == 'sold'
                ? 'approved'
                : currentStatus === 'issued'
                ? 'pending'
                : 'reject'
            "
            :text="
              currentStatus === 'forsales'
                ? 'Продается'
                : currentStatus === 'repaid'
                ? 'Погашен'
                : currentStatus === 'issued'
                ? 'Выдан'
                : currentStatus == 'sold'
                ? 'Продан'
                : 'Просрочен повторно'
            "
          ></status-tag>
          <span class="takeoff" v-if="value !== 'bids' && !isIssueLoan"
            >Снять с продажи</span
          >
        </div>
        <div
          v-if="currentStatus === 'forsales' || currentStatus === 'issued'"
          class="fieldsinput-parent"
        >
          <div class="fieldsinput">
            <div class="div16">Изменить сумму продажи:</div>
            <input-data
              :style="{ width: '77vw' }"
              placeholder="10 000 TON"
            ></input-data>
          </div>
          <div class="min-10-ton-parent">
            <div class="min-10-ton-container">
              <span>Min:</span>
              <span class="span8"> </span>
              <span class="ton1">10 TON</span>
            </div>
            <div class="min-10-ton-container">
              <span>Max:</span>
              <span class="span8"> </span>
              <span class="ton1">257 324 TON</span>
            </div>
          </div>
          <catos-button
            variant="fourth"
            :style="{
              width: '77vw',
              position: 'relative',
              margin: '0 auto',
              height: '58px',
              bottom: '12px',
            }"
            @click="toBack"
            >Сохранить</catos-button
          >
        </div>
        <!--BODY-->
        <div class="inner">
          <div class="frame-parent1">
            <template v-for="item in Object.keys(body)" :keys="item">
              <div v-if="Number(item)" class="frame-inner"></div>
              <div class="frame-parent2">
                <div class="wrapper2">
                  <div class="div46">{{ body[item][0] }}</div>
                </div>
                <div
                  :class="
                    body[item][0] === 'Анкета заявителя:'
                      ? 'wrapper7'
                      : 'wrapper3'
                  "
                  @click="
                    () => {
                      if (body[item][0] === 'Анкета заявителя:') {
                        isForm = true;
                      }
                    }
                  "
                >
                  <div
                    :class="
                      body[item][0] === 'Анкета заявителя:' ? 'div51' : 'div47'
                    "
                  >
                    {{ body[item][1] }}
                  </div>
                </div>
              </div>
            </template>
            <!--<div class="frame-parent2">
              <div class="wrapper2">
                <div class="div46">
                  {{
                    value === "marketplace" ? "Ставка:" : "Дата смены статуса:"
                  }}
                </div>
              </div>
              <div class="wrapper3">
                <div class="div47">
                  {{ value === "marketplace" ? "1% в день" : "21.12.2022" }}
                </div>
              </div>
            </div>
            <div class="frame-inner"></div>
            <div class="frame-parent2">
              <div class="wrapper2">
                <div class="div46">
                  {{
                    value === "bids"
                      ? "Заявитель"
                      : value === "Дата получения займа"
                      ? "Заявитель"
                      : ""
                  }}
                </div>
              </div>
              <div class="wrapper3">
                <div class="div49">Иван Иванов</div>
              </div>
            </div>
            <div class="frame-inner"></div>
            <div class="frame-parent2">
              <div class="wrapper2">
                <div class="div46">Анкета заявителя:</div>
              </div>
              <div class="wrapper7" @click="() => (isForm = true)">
                <div class="div51">Открыть</div>
              </div>
            </div>
            <div class="frame-inner"></div>
            <div class="frame-parent2">
              <div class="wrapper2">
                <div class="div46">Дата создания заявки:</div>
              </div>
              <div class="wrapper3">
                <div class="div47">18.12.2022</div>
              </div>
            </div>-->
          </div>
        </div>
        <!--BODY-->

        <div
          v-if="
            currentStatus === 'approved' ||
            currentStatus === 'forsales' ||
            currentStatus === 'issued' ||
            value === 'marketplace'
          "
          class="percent-group"
        >
          <img class="percent-icon1" alt="" src="@/assets/images/percent.svg" />

          <div class="div24">Проценты начисляются с 12 апреля 2023 года</div>
        </div>
        <div
          v-else-if="
            value === 'loans' &&
            (currentStatus === 'overdue' || currentStatus === 'repaid')
          "
        >
          <div class="percent-group" v-if="!isIssueLoan">
            <img
              class="percent-icon1"
              alt=""
              src="@/assets/images/alerttriangle-white.svg"
            />

            <div class="div24">
              Беспроцентный период: до 05.02.22, 16:00
              <span class="finish">(закончен)</span>
            </div>
          </div>
          <div
            v-if="currentStatus === 'overdue'"
            :style="!isIssueLoan ? { position: 'relative', top: '0.8em' } : {}"
            class="percent-group"
          >
            <img
              class="percent-icon1"
              alt=""
              src="@/assets/images/alerttriangle-white.svg"
            />

            <div class="div24">
              Вернуть не позднее: до 13.02.22, 16:00
              <span class="overdue"> (просрочен повторно) </span>
            </div>
          </div>
        </div>

        <div class="frame-parent6">
          <div
            v-if="currentStatus !== 'repaid' || currentStatus !== 'overdue'"
            class="frame-parent7"
          >
            <div class="parent1">
              <div class="div54">Одобренные ранее:</div>
              <div class="dividing"></div>
              <div class="frame-wrapper">
                <div class="frame-wrapper1">
                  <div class="frame-wrapper2">
                    <div class="ton-wrapper">
                      <div class="ton2">
                        <span>Пул </span>
                        <span class="span6">#12345</span>
                        <span>, срок 30 дней, сумма 10 000 TON </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="frame-wsrapper">
                <div class="frame-wrapper1">
                  <div class="frame-wrapper2">
                    <div class="ton-wrapper">
                      <div class="ton2">
                        <span>Пул </span>
                        <span class="span6">#12344</span>
                        <span>, срок 14 дней, сумма 3 000 TON </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="frame-wrapper">
                <div class="frame-wrapper1">
                  <div class="frame-wrapper2">
                    <div class="ton-wrapper">
                      <div class="ton2">
                        <span>Пул </span>
                        <span class="span6">#12343</span>
                        <span class="span9">, </span>
                        <span class="span10">не одобрено</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="frame-wrapper">
                <div class="frame-wrapper1">
                  <div class="frame-wrapper2">
                    <div class="ton-wrapper">
                      <div class="ton2">
                        <span>Пул </span>
                        <span class="span6">#12342</span>
                        <span>, срок 14 дней, сумма 3 000 TON </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="value !== 'loans'" class="buttons-tabs4">
              <div class="div41">Изменить одобренную сумму</div>
            </div>
          </div>
          <div v-if="!isIssueLoan" class="des-and-bbn2">
            <div class="text-and-button">
              <catos-button
                v-if="value === 'loans' && currentStatus === 'overdue'"
                variant="fourth"
                :style="{ width: '70vw' }"
                @click="() => (isIssueLoan = true)"
              >
                Выставить займ на продажу
              </catos-button>
              <div
                v-else-if="currentStatus !== 'repaid'"
                class="buttons-tabs5"
                @click="toScan"
              >
                <div class="text">Отправить API повторно</div>
              </div>
              <div
                class="buttons-tabs1"
                @click="
                  () => {
                    if (value !== 'bids') {
                      toBack();
                    }
                  }
                "
              >
                <div class="text">
                  {{ value === "bids" ? "Подробнее" : "Закрыть" }}
                </div>
              </div>
            </div>
          </div>

          <div v-else class="fieldsinput-parent_loans fieldsinput-parent">
            <div class="fieldsinput_loans fieldsinput">
              <div class="div16">Установить цену продажи:</div>
              <input-data
                :style="{ width: '77vw' }"
                placeholder="10 000 TON"
              ></input-data>
            </div>
            <catos-button
              v-if="value === 'loans'"
              variant="fourth"
              :style="{
                width: '77vw',
                position: 'relative',
                margin: '0 auto',
                height: '56px',
              }"
              @click="() => (isModal = true)"
            >
              Продать
            </catos-button>
            <div
              class="min-10-ton-parent"
              :style="isIssueLoan ? { top: '-4em' } : {}"
            >
            </div>
          </div>
        </div>
      </div>

      <div
        :class="
          isIssueLoan
            ? 'wrapper11_issueloan wrapper11'
            : 'wrapper11_marketplace wrapper11'
        "
      >
        <div class="div56">Статус:</div>
      </div>
    </div>
  </div>
  <load-modal
    v-if="isForm"
    variant="form"
    @on-close="() => (isForm = false)"
  ></load-modal>
  <status-modal v-if="isModal"></status-modal>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import inputData from "../fields/input-data.vue";
import catosButton from "../ui-kit/buttons/catos-button.vue";
import statusButtonOption from "../ui-kit/buttons/status-button-option.vue";
import statusTag from "../ui-kit/buttons/status-tag.vue";
import loadModal from "../base/load-modal.vue";
import statusModal from "./creditor/status-modal.vue";

const isForm = ref(false);
const isModal = ref(false);
const router = useRouter();
const toScan = () => {
  router.push({
    name: "pulls-borrower-get-loan-scan",
    state: {
      title: "Add liquidity",
      subTitle:
        "Scan the QR code and pay 13 512 TON with Tonkeeper using EQB5...dzE1h",
      routerName: "loans",
      actionTitle: "Add liquidity",
      bottomSubTitle: "policy",
      from: "pulls",
    },
  });
};

const toBack = () => {
  router.go(-1);
};

const body = computed(() => {
  console.log(window.history.state.body);
  if (isIssueLoan.value) {
    return {
      0: ["Заявитель:", "Иван Иванов"],
      1: ["Ставка:", "1% в день"],
      2: ["Займ:", "13 000 TON"],
      3: ["Начисленные проценты:", "512 TON"],
      4: ["Сумма к возвращению:", "13 512 TON"],
    };
  } else {
    return window.history.state.body;
  }
});

const value = computed(() => {
  console.log(window.history.state.value);
  return window.history.state.value;
});

const currentStatus = computed(() => {
  console.log(window.history.state.status);
  return window.history.state.status;
});

const isIssueLoan = ref(false);
</script>

<style scoped lang="scss">
.col-titles-bg {
  position: absolute;
  width: calc(100% - 358px);
  top: 27.63em;
  right: -0.75em;
  left: 23.13em;
  border-radius: 18px;
  background-color: #f6f4fc;
  height: 0.06em;
  transform: rotate(90deg);
  transform-origin: 0 0;
}
.group-item {
  position: absolute;
  top: 1.19em;
  left: 0;
  border-radius: 14px;
  background-color: #a592dd;
  width: 1.94em;
  height: 0.25em;
}
.div10,
.div11,
.div12,
.div9 {
  position: absolute;
  top: 0;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
}
.div9 {
  left: 0.14em;
  font-weight: 500;
  color: #3b3b3b;
}
.div10,
.div11,
.div12 {
  left: 3.14em;
}
.div11,
.div12 {
  left: 9.64em;
}
.div12 {
  left: 17.36em;
}
.rectangle-group {
  position: absolute;
  top: 18em;
  left: 1.5em;
  width: 21.25em;
  height: 1.44em;
  text-align: right;
  color: rgba(59, 59, 59, 0.7);
}
.div13 {
  align-self: stretch;
  position: relative;
  font-size: 1.13em;
  letter-spacing: 0.01em;
  line-height: 110%;
  font-weight: 600;
}
.header {
  position: absolute;
  top: 5.81em;
  left: 2.81em;
  border-radius: 7px;
  width: 18.75em;
  display: flex;
  flex-direction: column;
  padding: 0.44em 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.col-titles-bg1 {
  position: absolute;
  width: calc(100% - 48px);
  top: 8.56em;
  right: 1.5em;
  left: 1.5em;
  border-radius: 18px;
  background-color: rgba(246, 244, 252, 0.5);
  height: 7.69em;
}
.fill {
  position: absolute;
  top: 0.13em;
  left: 0.13em;
  border-radius: 16px;
  background-color: #fdd674;
  width: 6.31em;
  height: 1.94em;
}
.div14,
.div15,
.div16 {
  position: absolute;
  top: 0.71em;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 110%;
}
.div14 {
  left: 2.14em;
  color: #3b3b3b;
}
.div15,
.div16 {
  left: 8.86em;
  display: inline-block;
  width: 5.5em;
  cursor: pointer;
}
.div16 {
  left: 0em;
  width: 77vw;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 1em;
  color: rgba(59, 59, 59, 1);
}
.button-slider {
  position: absolute;
  top: 8.56em;
  left: 1.5em;
  border-radius: 20px;
  background-color: #f6f4fc;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  width: 21.38em;
  height: 2.19em;
  overflow: hidden;
  color: rgba(59, 59, 59, 0.75);
}
.search-icon {
  position: relative;
  width: 1.25em;
  height: 1.25em;
  overflow: hidden;
  flex-shrink: 0;
}
.div20 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
  font-weight: 300;
}
.search {
  border-radius: 14px;
  background-color: #fff;
  border: 1px solid #a592dd;
  box-sizing: border-box;
  width: 9em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.63em 0.75em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
  color: rgba(0, 0, 0, 0.4);
}
.div21 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 0.71em;
  font-weight: 300;
}
.file-text-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
  cursor: pointer;
}
.menu-2-icon {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.search-parent {
  position: absolute;
  top: 12.25em;
  left: 2.81em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.13em;
  text-align: left;
  color: #5d83f7;
}
.checkboxdone {
  position: relative;
  border-radius: 4.14px;
  border: 0.8px solid #a592dd;
  box-sizing: border-box;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.div23,
.id-100 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 130%;
}
.div23 {
  font-weight: 600;
  display: inline-block;
  width: 8.43em;
}
.id-100 {
  color: #b5b5c3;
}
.checkboxdone-parent,
.group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.checkboxdone-parent {
  position: absolute;
  top: 0.03em;
  left: 0;
  flex-direction: row;
  align-items: center;
  gap: 1em;
}
.div24 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 130%;
  font-weight: 500;
}
.statusapplication {
  position: absolute;
  top: 0;
  left: 10.88em;
  border-radius: 24px;
  background-color: #ffeae4;
  border: 0.5px solid rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  width: 7.5em;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  align-items: center;
  justify-content: center;
  color: #fe3b30;
}
.frame-group {
  position: absolute;
  top: 1.25em;
  left: 1.31em;
  width: 18.38em;
  height: 2.5em;
  cursor: pointer;
}
.cardsuser-child {
  position: absolute;
  top: 4.94em;
  left: 1.31em;
}
.col-titles-bg2 {
  align-self: stretch;
  position: relative;
  border-radius: 18px;
  background-color: rgba(165, 146, 221, 0.1);
  height: 0.06em;
}
.div25 {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.01em;
  line-height: 130%;
  font-weight: 300;
  z-index: 0;
}
.col-titles-bg3,
.div26 {
  position: absolute;
  margin: 0 !important;
}
.col-titles-bg3 {
  top: calc(50% - 10px);
  left: 9.44em;
  border-radius: 18px;
  background-color: rgba(165, 146, 221, 0.1);
  width: 1.25em;
  height: 0.06em;
  transform: rotate(90deg);
  transform-origin: 0 0;
  z-index: 1;
}
.div26 {
  top: calc(50% - 9px);
  right: 4.14em;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 130%;
  color: #3b3b3b;
  z-index: 2;
}
.field,
.field1 {
  display: flex;
  justify-content: flex-start;
}
.field1 {
  width: 18.75em;
  height: 1.25em;
  flex-direction: row;
  align-items: center;
  position: relative;
  gap: 1.63em;
}
.field {
  height: 2.5em;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.56em;
}
.ton {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 9px);
  right: 3em;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 130%;
  color: #3b3b3b;
  z-index: 2;
}
.field2 {
  height: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 0.56em;
}
.span {
  letter-spacing: 0.01em;
}
.span1 {
  letter-spacing: 0.02em;
}
.span2 {
  letter-spacing: 0.03em;
}
.div29,
.div31 {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 9px);
  font-size: 0.88em;
  line-height: 130%;
  z-index: 2;
}
.div29 {
  right: 4.64em;
  color: #3b3b3b;
}
.div31 {
  right: 4.43em;
  text-decoration: underline;
  letter-spacing: 0.01em;
  color: rgba(87, 126, 247, 0.96);
}
.field-parent {
  position: absolute;
  top: 5em;
  left: 1.38em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  color: #737373;
}
.text {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.buttons-tabs,
.buttons-tabs1 {
  align-self: stretch;
  border-radius: 25px;
  box-sizing: border-box;
  height: 2em;
  display: flex;
  flex-direction: row;
  padding: 0.44em 5.5em;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.buttons-tabs {
  background-color: rgba(87, 126, 247, 0.96);
}
.buttons-tabs1 {
  border: 0.5px solid rgba(87, 126, 247, 0.96);
  color: #555562;
}
.des-and-bbn,
.text-and-button {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.text-and-button {
  flex: 1;
  width: 70.8vw;
  gap: 0.81em;
}
.des-and-bbn {
  position: absolute;
  top: 16.25em;
  left: 1.31em;
  border-radius: 16px;
  background-color: #f9fbff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  width: 18.75em;
  padding: 0.75em;
  text-align: right;
  color: #fefefe;
}
.cardsuser {
  position: relative;
  border-radius: 24px;
  background-color: rgba(251, 249, 253, 0.5);
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  width: 21.38em;
  height: 23.81em;
  overflow: hidden;
  flex-shrink: 0;
}
.frame-container {
  position: absolute;
  top: 1.25em;
  left: 1.31em;
  width: 18.38em;
  height: 2.5em;
}
.cardsuser-parent {
  position: absolute;
  top: 21.19em;
  left: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25em;
  text-align: left;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(166, 146, 221, 0.2);
  backdrop-filter: blur(3px);
  width: 100vw;
  height: 63.56em;
}
.div41 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 500;
  text-align: center;
}
.header1,
.statusapplication2 {
  box-sizing: border-box;
  width: 18.75em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.header1 {
  position: relative;
  top: 2.5em;
  /* left: 2.81em; */
  border-radius: 8px;
  padding: 0.25em 0.75em;
  width: 77vw;
  margin: 0 auto;
}
.statusapplication2 {
  border-radius: 24px;
  background-color: #f2ebf7;
  border: 0.5px solid rgba(0, 0, 0, 0.03);
  height: 2.5em;
  padding: 0.63em;
  z-index: 0;
}
.div44 {
  position: relative;
  font-size: 0.81em;
  letter-spacing: 0.01em;
  font-weight: 500;
}
.frame {
  width: 16.75em;
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  z-index: 1;
  color: #1cbd62;
}
.component-23-child {
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  width: 16.81em;
  height: 0.06em;
  z-index: 2;
}
.wrapper1 {
  width: 16.75em;
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  z-index: 3;
  color: #fe3b30;
}
.chevron-down-icon {
  position: absolute;
  margin: 0 !important;
  top: 0.5em;
  left: 16.25em;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 4;
}
.component-23,
.container-button {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.component-23 {
  border-radius: 21px;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  justify-content: flex-start;
  position: relative;
  gap: 0.88em;
}
.container-button {
  border-radius: 16px;
  border: 1px solid rgba(46, 58, 89, 0.08);
  box-sizing: border-box;
  width: 100%;
  padding: 1em 0.81em;
  justify-content: center;
}
.div46 {
  position: relative;
  letter-spacing: 0.01em;
  font-weight: 300;
  font-size: 12px;
  line-height: 10px;
}
.wrapper2 {
  width: 40vw;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.div47 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.01em;
  line-height: 130%;
  font-weight: 300;
}
.frame-parent2,
.wrapper3 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.wrapper3 {
  flex: 1;
  padding: 0.13em 0;
  color: #3b3b3b;
}
.frame-parent2 {
  align-self: stretch;
  gap: 3.25em;
}
.frame-inner {
  align-self: stretch;
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  height: 0.06em;
}
.div49,
.div51 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
}
.div49 {
  font-weight: 300;
}
.div51 {
  text-decoration: underline;
}
.frame-parent1,
.inner,
.wrapper7 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.wrapper7 {
  flex: 1;
  flex-direction: row;
  padding: 0.13em 0;
  color: rgba(87, 126, 247, 0.96);
}
.frame-parent1,
.inner {
  flex-direction: column;
}
.frame-parent1 {
  width: 100%;
  gap: 0.75em;
}
.inner {
  color: #737373;
  width: 77vw;
}
.div54 {
  position: relative;
  font-size: 0.88em;
  line-height: 150%;
  font-weight: 500;
  display: inline-block;
  width: 21.43em;
}
.dividing {
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  width: 100%;
  height: 0.06em;
}
.span6 {
  text-decoration: underline;
  color: rgba(87, 126, 247, 0.96);
}
.ton2 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.frame-wrapper2,
.ton-wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.ton-wrapper {
  flex: 1;
  padding: 0.13em 0;
}
.frame-wrapper2 {
  align-self: stretch;
}
.frame-wrapper1 {
  width: 18.75em;
}
.frame-wrapper,
.frame-wrapper1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.span9 {
  color: #3b3b3b;
}
.span10 {
  color: red;
}
.parent1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1em;
  width: 100%;
}
.buttons-tabs4 {
  align-self: stretch;
  border-radius: 25px;
  background-color: rgba(87, 126, 247, 0.96);
  height: 2em;
  display: flex;
  flex-direction: row;

  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  text-align: right;
  color: #fefefe;
}
.frame-parent7 {
  border-radius: 16px;
  border: 1px solid rgba(46, 58, 89, 0.2);
  display: flex;
  flex-direction: column;
  padding: 1.5em 1.31em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5em;
  width: 100%;
}
.buttons-tabs5 {
  align-self: stretch;
  border-radius: 25px;
  background: linear-gradient(89.77deg, #9747ff, #ad6fff);
  height: 2em;
  display: flex;
  flex-direction: row;

  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.des-and-bbn2,
.div42,
.frame-parent6 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.des-and-bbn2 {
  border-radius: 16px;
  background-color: #f9fbff;
  width: 77vw;
  padding: 0.75em;
  box-sizing: border-box;
  align-items: flex-start;
  text-align: right;
  color: #fefefe;
}
.div42,
.frame-parent6 {
  align-items: center;
  gap: 1.38em;
  color: #3b3b3b;
  width: 87.7vw;
}
.div42 {
  position: relative;
  top: 4em;

  gap: 2em;
  color: #a865ff;
  width: 87.7vw;
  margin: 0 auto;
}
.swipe-down {
  position: absolute;
  top: 0.75em;
  left: 10.81em;
  border-radius: 25px;
  background-color: #cad0e4;
  width: 2.63em;
  height: 0.31em;
}
.div56 {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.01em;

  background: #fff;
}
.wrapper11 {
  position: absolute;
  top: -38.5em;

  background-color: #fff;

  flex-direction: row;
  padding: 0 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  width: 25vw;
  margin: 0 auto;
  text-align: center;
  &_marketplace {
    top: 5.2em;
    left: 37vw;
  }
  &_issueloan {
    top: 6.2em;
    left: 37vw;
  }
}
.battery-icon,
.header-parent {
  position: absolute;
  overflow: hidden;
}
.header-parent {
  top: 8.56em;
  left: 0;
  border-radius: 30px 30px 0 0;
  background-color: #fff;
  box-shadow: 0 12px 12px rgba(151, 71, 255, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  width: 100vw;
  height: 100%;
  text-align: left;
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
.div57 {
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
.home-icon {
  position: absolute;
  top: 0.38em;
  left: 0.75em;
  width: 1.88em;
  height: 1.88em;
  overflow: hidden;
}
.div59 {
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
.div60 {
  position: absolute;
  top: 3.6em;
  left: 1.02em;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
  background: linear-gradient(rgba(48, 51, 55, 0.9), rgba(48, 51, 55, 0.9)),
    rgba(255, 255, 255, 0.9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.iconsmenu1 {
  width: 3.38em;
  height: 3.38em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
.div61 {
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
  cursor: pointer;
  z-index: 2;
}
.div62 {
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
  cursor: pointer;
  z-index: 3;
}
.div63 {
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
.b1,
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
.b1 {
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
.div8,
.nav-menu {
  background-color: #fff;
}

.div8 {
  position: relative;
  width: 100%;
  height: 1306px;
  overflow: hidden;
  text-align: center;
  color: #3b3b3b;
  font-family: Inter;
}

.fieldsinput-parent {
  border-radius: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 0.63em;
  height: 148px;
  background-color: #f9fbff;
  &_loans {
    height: 150px;
  }
}
.fieldsinput {
  align-self: stretch;
  display: flex;
  flex-direction: column;
}
.fieldsinput {
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
  width: 100%;
  z-index: 0;
  background-color: #f9fbff;
  border-radius: 16px;
  height: 148px;
  &_loans {
    height: 150px;
  }
}
.div16 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
}
.min-10-ton-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 1;
  text-align: center;
  position: relative;
  top: -1em;
  width: 77vw;
  margin: 0 auto;
}
.min-10-ton-container {
  position: relative;
  font-size: 0.63em;
  line-height: 1em;
  font-weight: 300;
  color: rgba(59, 59, 59, 1);
}
.span8 {
  color: rgba(165, 146, 221, 0.7);
}
.ton1 {
  color: #a592dd;
}

.span10 {
  font-weight: 300;
}
.ton4 {
  text-decoration: underline;
  color: rgba(87, 126, 247, 0.96);
}
.close {
  position: absolute;
  right: 1em;
  top: 3em;
  font-size: 10px;
  line-height: 100%;
  /* identical to box height, or 10px */

  letter-spacing: 0.01em;

  color: rgba(38, 38, 38, 0.62);
}
.takeoff {
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */

  letter-spacing: 0.01em;

  color: #3b3b3b;
  margin-top: 24px;
  margin-bottom: 12px;
}
.percent-group {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.percent-group {
  border-radius: 16px;
  background-color: #f6f4fc;
  width: 77vw;
  overflow: hidden;
  flex-direction: row;
  padding: 0.81em 0.75em;
  box-sizing: border-box;
  gap: 0.63em;
}
.percent-icon1 {
  position: relative;
  width: 1.2em;
  height: 1.2em;
  overflow: hidden;
  flex-shrink: 0;
}
.div24 {
  position: relative;
  font-size: 0.63em;

  font-weight: 300;
  color: rgba(59, 59, 59, 1);
  line-height: 130%;
}

.finish {
  color: rgba(255, 153, 1, 1);
}
.overdue {
  color: rgba(255, 0, 0, 1);
}
</style>
