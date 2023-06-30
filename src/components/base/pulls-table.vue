<template>
  <div
    :class="`desctopverpull-stats-parent_${role}-${variant} desctopverpull-stats-parent`"
    @click="toDaetail"
  >
    <div class="desctopverpull-stats">
      <div
        :class="`desctopverpull-stats-child_${role}-${variant} desctopverpull-stats-child`"
      />
      <div class="filtr6">
        <div class="wrapper">
          <div class="div120">Пулл №1223</div>
        </div>
      </div>
      <div class="pull-stats6">
        <div class="statusbar-cards-parent">
          <div class="statusbar-cards">
            <div class="buttons-tabs6">
              <div class="iconsbar-cards-parent">
                <img
                  class="iconsbar-cards"
                  alt=""
                  src="@/assets/images/pie-chart.svg"
                />
                <div class="txt1-parent">
                  <div class="txt1">Займ на:</div>
                  <div v-if="role === 'collector'" class="txt2_borrower txt2">
                    Текущий долг:
                  </div>
                  <div class="ton18">37 000 TON</div>
                  <div v-if="role === 'borrower'" class="txt2_borrower txt2">
                    Одобреный лимит
                  </div>
                  <div
                    v-if="role === 'creditor' || role === 'depositor'"
                    class="txt2"
                  >
                    Доступно ликвидности
                  </div>
                </div>
              </div>
              <div class="status-all">
                <div class="colors-graphsorders-parent">
                  <img
                    class="colors-graphsorders-icon"
                    alt=""
                    src="/colors-graphsorders.svg"
                  />
                  <div class="div121">Просрочен</div>
                </div>
              </div>
            </div>
            <div class="frame-parent20">
              <div class="iconsbar-cards-parent">
                <img
                  class="icons2bar-cards"
                  alt=""
                  src="@/assets/images/percent.svg"
                />
                <div class="div122">1 день = 1%</div>
              </div>
              <div class="iconsbar-cards-parent">
                <img
                  class="icons2bar-cards1"
                  alt=""
                  src="@/assets/images/clock.svg"
                />
                <div class="div123">3 дня = 0%</div>
              </div>

              <div class="iconsbar-cards-parent">
                <img
                  class="icons2bar-cards"
                  alt=""
                  src="@/assets/images/activity.svg"
                />
                <div class="div124">ROI = 75%</div>
              </div>
            </div>
          </div>
          <div
            v-if="role === 'borrower' || role === 'collector'"
            class="creditor-info"
          >
            <div class="div127">Кредитор:</div>
            <span class="div127">Деньги до зарплаты</span>
          </div>
          <div v-if="role !== 'collector'" class="frame-parent21">
            <div class="frame">
              <div class="div121">Состояние:</div>
            </div>
            <div class="colors-graphsorders-group">
              <img
                class="colors-graphsorders-icon"
                alt=""
                src="@/assets/images/colors-graphsorders1.svg"
              />
              <div class="statuspull">
                <div class="div126">Активен</div>
              </div>
            </div>
          </div>
          <div class="frame-parent22">
            <div v-if="role === 'collector'" class="frame-parent23">
              <div class="frame">
                <div class="div127">Статус:</div>
              </div>
              <div class="ton-wrapper">
                <div class="div128">Не погашен</div>
              </div>
            </div>
            <div
              v-if="role === 'borrower' && variant === 'all'"
              class="frame-parent23"
            >
              <div class="frame">
                <div class="div127">Одобренный лимит:</div>
              </div>
              <div class="ton-wrapper">
                <div class="div128">до 50 000 TON</div>
              </div>
            </div>
            <div v-if="role === 'collector'" class="line-div" />
            <div v-if="role === 'collector'" class="frame-parent23">
              <div class="frame">
                <div class="div127">Текущий долг:</div>
              </div>
              <div class="ton-wrapper">
                <div class="div128">50 000 TON</div>
              </div>
            </div>
            <div class="line-div" />
            <div class="frame-parent23">
              <div class="frame">
                <div class="div127">Ставка:</div>
              </div>
              <div class="ton-wrapper">
                <div class="div128">1% в день</div>
              </div>
            </div>
            <div v-if="role === 'collector'" class="line-div" />
            <div v-if="role === 'collector'" class="frame-parent23">
              <div class="frame">
                <div class="div127">Просрочен:</div>
              </div>
              <div class="ton-wrapper">
                <div class="div128">9 дней</div>
              </div>
            </div>
            <div v-if="role !== 'collector'" class="line-div" />
            <div v-if="role !== 'collector'" class="frame-parent23">
              <div class="frame">
                <div class="div127">На срок:</div>
              </div>
              <div class="ton-wrapper">
                <div class="div128">до 30 дней</div>
              </div>
            </div>
            <div v-if="role !== 'collector'" class="line-div" />
            <div v-if="role !== 'collector'" class="frame-parent23">
              <div class="frame_period frame">
                <div class="div127">Беспроцентный период:</div>
              </div>
              <div class="ton-wrapper">
                <div class="div128">3 дня</div>
              </div>
            </div>
            <div
              v-if="role === 'collector' && variant === 'debt'"
              class="line-div"
            />
            <div
              v-if="role === 'collector' && variant === 'debt'"
              class="frame-parent23"
            >
              <div class="frame_period frame">
                <div class="div127">Стоимость покупки:</div>
              </div>
              <div class="ton-wrapper">
                <div class="div128">9 000 TON</div>
              </div>
            </div>
            <div
              v-if="
                role === 'creditor' ||
                role === 'depositor' ||
                (role === 'borrower' && variant === 'my')
              "
              class="line-div"
            />
            <div
              v-if="
                role === 'creditor' ||
                role === 'depositor' ||
                (role === 'borrower' && variant === 'my')
              "
              class="frame-parent23"
            >
              <div class="frame">
                <div class="div127">Всего ликвидности:</div>
              </div>
              <div class="ton-wrapper">
                <div class="div128">450 000 TON</div>
              </div>
            </div>
            <div
              v-if="
                role === 'creditor' ||
                role === 'depositor' ||
                (role === 'borrower' && variant === 'my')
              "
              class="line-div"
            />
            <div
              v-if="
                role === 'creditor' ||
                role === 'depositor' ||
                (role === 'borrower' && variant === 'my')
              "
              class="frame-parent23"
            >
              <div class="frame">
                <div class="div127">Свободно:</div>
              </div>
              <div class="ton-wrapper">
                <div class="div128">37 000 TON</div>
              </div>
            </div>
            <div v-if="role === 'depositor'" class="line-div" />
            <div v-if="role === 'depositor'" class="frame-parent23">
              <div class="frame">
                <div class="div127">Доходность за 30 дней:</div>
              </div>
              <div class="ton-wrapper">
                <div class="div128">75% годов</div>
              </div>
            </div>

            <div
              v-if="
                role === 'creditor' || (role === 'borrower' && variant === 'my')
              "
              class="line-div"
            />
            <div
              v-if="
                role === 'creditor' || (role === 'borrower' && variant === 'my')
              "
              class="frame-parent23"
            >
              <div class="frame">
                <div class="div127">ROI инвесторов:</div>
              </div>
              <div class="ton-wrapper">
                <div class="div128">75% годовых</div>
              </div>
            </div>
          </div>

          <div v-if="role === 'depositor'" class="frame-parent">
            <div class="wrapper">
              <div class="div">Моя ликвидность</div>
            </div>
            <div class="frame-group">
              <div class="frame-wrapper">
                <div class="frame-container">
                  <div class="container">
                    <div class="div1">Инвестировано:</div>
                  </div>
                  <div class="ton-wrapper">
                    <div class="ton1">100 TON</div>
                  </div>
                </div>
              </div>
              <div class="frame-child" />
              <div class="frame-wrapper">
                <div class="frame-parent1">
                  <div class="frame">
                    <div class="div1">Доходность всего:</div>
                  </div>
                  <div class="ton-container">
                    <div class="ton1">7 TON</div>
                  </div>
                </div>
              </div>
              <div class="frame-child" />
              <div class="frame-wrapper">
                <div class="frame-parent1">
                  <div class="frame">
                    <div class="div1">Текущая доходность:</div>
                  </div>
                  <div class="ton-container">
                    <div class="ton1">45% годовых</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="notification6">
            <img
              class="percent-icon12"
              alt=""
              src="@/assets/images/percent.svg"
            />
            <div class="div128">Проценты начисляются с 12/12/2023 года</div>
          </div>
        </div>
        <div class="des-and-bbn6">
          <div class="text-and-button-parent">
            <div
              v-if="variant === 'all' && role === 'creditor'"
              class="text-and-button6"
            >
              <button
                class="buttons-tabs7_creditor buttons-tabs7"
                @click.stop="toLoans"
              >
                <div class="text6">Займы</div>
              </button>
              <button class="buttons-tabs7_creditor buttons-tabs7">
                <div class="text7">Аналитика</div>
              </button>
            </div>
            <div class="text-and-button6">
              <button
                v-if="variant === 'all'"
                :class="`buttons-tabs7_${role} buttons-tabs7`"
                @click.stop="() => (isMangae = true)"
              >
                <div v-if="role === 'creditor'" class="text8">
                  <span class="span2">Упр</span>
                  <span class="span3">. ликвид</span>
                </div>
                <div v-if="role === 'depositor'" class="text8">
                  <span class="span2">Добавить ликвидность</span>
                </div>
                <div
                  v-if="role === 'borrower' && variant === 'all'"
                  class="text8"
                >
                  <span class="span2">Взять займ</span>
                </div>
              </button>
              <catos-button
                v-if="role === 'depositor' && variant === 'my'"
                :style="{ width: '100%' }"
                variant="fourth"
                >Изъять ликвидность</catos-button
              >
              <catos-button
                v-if="role === 'depositor' && variant === 'my'"
                :style="{ width: '100%' }"
                variant="fourth"
                >Добавить ликвидность</catos-button
              >
              <catos-button
                v-if="role === 'collector' && variant === 'marketplace'"
                :style="{ width: '100%' }"
                variant="fourth"
                >Купить</catos-button
              >

              <button
                v-if="role === 'creditor' && variant === 'all'"
                :class="`buttons-tabs7_${role}-${variant} buttons-tabs7_${role} buttons-tabs7`"
                @click.stop="
                  () =>
                    variant === 'all'
                      ? (isDetailOther = true)
                      : (isDetailPersonal = true)
                "
              >
                <div class="text9">Подробнее</div>
              </button>
              <catos-button
                v-else
                :style="{ width: '100%' }"
                variant="fourth_outline"
                @click.stop="
                  () =>
                    variant === 'all'
                      ? (isDetailOther = true)
                      : (isDetailPersonal = true)
                "
                >Подробнее</catos-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <detail-other-desktop
    v-if="isDetailOther"
    @close="() => (isDetailOther = false)"
  ></detail-other-desktop>
  <liquidity-management-desktop
    v-if="isMangae"
    @close="isMangae = false"
    @withdraw="
      () => {
        isMangae = false;
        isWithdraw = true;
      }
    "
    @add="
      () => {
        isMangae = false;
        isAdd = true;
      }
    "
  ></liquidity-management-desktop>
  <liquidity-managment-modal v-if="isWithdraw" @close="isWithdraw = false">
    <template v-slot:header> Пулл #12345 </template>
    <template v-slot:subheaderIcon>
      <img class="header-icon" alt="" src="@/assets/images/change-cash.svg" />
    </template>
    <template v-slot:subheader> Изъятие ликвидности из пулла #12345 </template>
    <template v-slot:first-row>
      <div class="field">
        <div class="roi">Доступно для изьятия:</div>
        <div class="div9">257 324 TON</div>
      </div>
    </template>
    <template v-slot:form>
      <div class="text-and-button_action text-and-button">
        <div class="fieldsinput-parent">
          <div class="fieldsinput">
            <div class="div16">Введите сумму для вывода:</div>
            <input-data
              :style="{ width: '456px' }"
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
        </div>
      </div>
    </template>
    <template v-slot:action>
      <div class="des-and-bbn_withdraw des-and-bbn">
        <button class="button">
          <div class="buttons-tabs">
            <div class="text">Вывести на кошелек CATOS</div>
          </div>
        </button>
        <button class="button">
          <div class="buttons-tabs">
            <div class="text">Вывести на кошелек TONKeeper</div>
          </div>
        </button>
        <button class="button" @click="() => (isWithdraw = false)">
          <div class="buttons-tabs_cancel buttons-tabs">
            <div class="text">Отмена</div>
          </div>
        </button>
      </div>
    </template>
  </liquidity-managment-modal>
  <liquidity-managment-modal v-if="isAdd" @close="isAdd = false">
    <template v-slot:header> Пулл #12345 </template>
    <template v-slot:subheaderIcon>
      <img class="header-icon" alt="" src="@/assets/images/success-cash.svg" />
    </template>
    <template v-slot:subheader> Добавление ликвидности в пулл #12345 </template>
    <template v-slot:first-row>
      <div class="field">
        <div class="roi">Баланс кошелька:</div>
        <div class="div9">257 324 TON</div>
      </div>
    </template>
    <template v-slot:form>
      <div class="text-and-button_action text-and-button">
        <div class="fieldsinput-parent_add fieldsinput-parent">
          <label class="label">Настроить токен:</label>
          <div :style="{ margin: '0 auto', width: '456px' }">
            <catos-select
              placeholder="Выберите токен"
              :options="options"
              :value="valueStatus"
              @selected="ev => (valueToken = ev)"
            ></catos-select>
          </div>
          <div class="fieldsinput">
            <div class="div16">Введите сумму для пополнения:</div>
            <input-data
              :style="{ width: '456px' }"
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
        </div>
      </div>
    </template>
    <template v-slot:action>
      <div class="des-and-bbn_add des-and-bbn">
        <button
          class="button"
          @click="
            () => {
              isAdd = false;
              isQr = true;
            }
          "
        >
          <div class="buttons-tabs">
            <div class="text">Добавить</div>
          </div>
        </button>
        <button class="button" @click="() => (isAdd = false)">
          <div class="buttons-tabs_cancel buttons-tabs">
            <div class="text">Отмена</div>
          </div>
        </button>
      </div>
    </template>
  </liquidity-managment-modal>
  <confirm-qr-destop
    v-if="isQr"
    @close="() => (isQr = false)"
    @result="
      () => {
        isSuccess = true;
        isQr = false;
      }
    "
  >
    <template v-slot:header> Пулл #12345 </template>
    <template v-slot:title>Add liquidity</template>
    <template v-slot:subtitle>
      <p class="scan-the-qr">Scan the QR code and pay 13 512 TON with</p>
      <p class="scan-the-qr">Tonkeeper using</p>
      <a class="scan-the-qr-link">EQB5...dzE1h</a>
    </template>
    <template v-slot:action>
      <b class="ton-kepeer">Add liquidity</b>
    </template>
    <template v-slot:footer>
      <div class="we-do-not">
        By proceeding, you accept the <br />
        <a>CATOS Terms of Service</a> and <a>Privacy Policy</a>.
      </div>
    </template>
  </confirm-qr-destop>
  <status-modal-desktop v-if="isSuccess" @close="() => (isSuccess = false)">
    <template v-slot:header> Транзакция №591561351 </template>
    <template v-slot:title> Транзакция успешно выполнена </template>
    <template v-slot:image>
      <img src="@/assets/images/success-transaction.svg" />
    </template>
    <template v-slot:subtitle>
      <p class="status-subtitle">
        Вы успешно вывели 257 324 TON <br />
        из пулла <a class="status-subtitle-link">#123456</a> на свой кошелек
        <br /><a class="status-subtitle-link">EQB5...dzE1hа44</a>
      </p>
      <p class="status-subtitle">
        <a class="status-subtitle-link">Просмотр транзакции в Tonscan</a>
      </p>
    </template>
    <template v-slot:action> Ок </template>
  </status-modal-desktop>
  <detail-personal-desktop
    v-if="isDetailPersonal"
    @close="isDetailPersonal = false"
  ></detail-personal-desktop>
</template>

<script setup lang="ts">
import { ref } from "vue";
import detailOtherDesktop from "@/components/pulls/creditor/detail-other-desktop.vue";
import liquidityManagementDesktop from "../pulls/creditor/liquidity/liquidity-management-desktop.vue";
import detailPersonalDesktop from "../pulls/creditor/detail-personal-desktop.vue";
import liquidityManagmentModal from "@/components/base/liquidity-managment-modal.vue";
import confirmQrDestop from "./confirm-qr-destop.vue";
import inputData from "../fields/input-data.vue";
import catosSelect from "../fields/catos-select.vue";
import StatusModalDesktop from "./status-modal-desktop.vue";
import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import { useRouter } from "vue-router";

const valueToken = ref("");
const valueStatus = ref("");
const options = ["Россия", "Украина", "Казахстан", "Белорусь"];
const { variant } = defineProps({
  variant: {
    type: String,
  },
  role: {
    type: String,
  },
});
const isDetailOther = ref(false);
const isDetailPersonal = ref(false);
const isMangae = ref(false);
const isWithdraw = ref(false);
const isAdd = ref(false);
const isQr = ref(false);
const isSuccess = ref(false);

const toDaetail = () => {
  if (variant === "all") {
    /*if (isMangae.value) {
      isDetailOther.value = false;
    } else {
      isDetailOther.value = true;
    }*/
    isDetailOther.value = true;
  } else {
    isDetailPersonal.value = true;
  }
};
const router = useRouter();
const toLoans = () => {
  router.push({ name: "loans", state: { variant } });
};
</script>

<style scoped lang="scss">
li {
  &:hover .desctopverpull-stats-child {
    background-color: #fcfcfe;
  }
  &:hover .desctopverpull-stats-parent {
    cursor: pointer;
  }
}
.desctopverpull-stats-child {
  position: absolute;
  width: 100%;
  top: 10px;
  right: 0em;
  left: 0em;
  border-radius: 15px;

  backdrop-filter: blur(5px);
  border: 0.5px solid rgba(46, 58, 89, 0.4);
  box-sizing: border-box;
  height: 100%;
}
.div120 {
  position: relative;
  font-size: 0.63em;
  line-height: 0.68em;
}
.wrapper {
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
.filtr6 {
  position: absolute;
  top: -0.25em;
  left: 1em;
  border-radius: 12px 12px 0px 0px;
  background-color: #fcfcfe;
  width: 5.63em;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0.38em 0em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.iconsbar-cards {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.txt1 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
  display: none;
}
.ton18 {
  position: relative;
  font-size: 1.13em;
  line-height: 100%;
  font-weight: 500;
  background: linear-gradient(
    38.6deg,
    #2e2c2c,
    #4b4949 67.46%,
    #131313,
    rgba(0, 0, 0, 0.94),
    #434343
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.txt2 {
  position: relative;
  font-size: 0.63em;
  line-height: 130%;
  font-weight: 300;
  &_borrower {
    color: #a592dd;
  }
}
.txt1-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.13em;
}
.iconsbar-cards-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.colors-graphsorders-icon {
  position: relative;
  width: 1em;
  height: 1em;
}
.div121 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.colors-graphsorders-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.31em;
}
.status-all {
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  flex-direction: row;
  padding: 0.5em 0em 0.5em 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  color: #3b3b3b;
}
.buttons-tabs6 {
  flex: 1;
  border-radius: 15px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.75em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.icons2bar-cards {
  position: relative;
  width: 0.75em;
  height: 0.75em;
  overflow: hidden;
  flex-shrink: 0;
}
.div122 {
  position: relative;
  font-size: 0.75em;
  line-height: 120%;
  font-weight: 300;
}
.icons2bar-cards1 {
  position: relative;
  width: 0.75em;
  height: 0.75em;
}
.div123 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
  font-weight: 300;
}
.icons2bar-cards-container {
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.div124 {
  position: relative;
  font-size: 0.75em;
  line-height: 120%;
  font-weight: 300;
  display: flex;
  align-items: center;
  width: 7.25em;
  flex-shrink: 0;
}
.frame-parent20 {
  width: 6.56em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.38em;
  color: #3b3b3b;
}
.statusbar-cards {
  border-radius: 16px;
  background-color: #f6f4fc;
  width: 20.13em;
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75em;
  color: #8181a5;
}
.frame {
  width: 8.88em;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.div126 {
  position: absolute;
  width: 100%;
  top: 0%;
  left: 0%;
  font-size: 0.75em;
  line-height: 0.83em;
  display: flex;
  align-items: center;
}
.statuspull {
  position: relative;
  width: 3.44em;
  height: 0.63em;
  top: 0.1em;
}
.colors-graphsorders-group {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
  color: #1cbd62;
}
.frame-parent21 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0em 0.69em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4.06em;
}
.div127 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.div128 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.frame-parent23 {
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
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
}
.frame-parent22 {
  width: 18.75em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.percent-icon12 {
  position: relative;
  width: 1em;
  height: 1em;
  overflow: hidden;
  flex-shrink: 0;
}
.notification6 {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f6f4fc;
  display: flex;
  flex-direction: row;
  padding: 0.94em;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63em;
}
.statusbar-cards-parent {
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.88em;
}
.text6 {
  font-size: 0.88rem;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.buttons-tabs7 {
  align-self: stretch;
  position: relative;
  border-radius: 25px;
  background-color: rgba(87, 126, 247, 0.96);
  border: 0.5px solid rgba(87, 126, 247, 0.96);
  box-sizing: border-box;
  height: 3em;
  color: #f8f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    background: #3062fd;
  }
  &_creditor {
    height: 2.4em;
    &-my {
      height: 3em;
    }
  }
}
.text7 {
  font-size: 0.88rem;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.text-and-button6 {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.81em;
}
.span2 {
  letter-spacing: 0.02em;
}
.span3 {
  letter-spacing: 0.03em;
}
.text8 {
  font-size: 0.88rem;
  line-height: 120%;
  font-weight: 500;
}
.text9 {
  font-size: 0.88rem;
  letter-spacing: 0.02em;
  line-height: 120%;
  font-weight: 500;
}
.text-and-button-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.des-and-bbn6 {
  border-radius: 16px;
  background-color: #f9fbff;
  width: 325px;
  display: flex;
  flex-direction: column;
  padding: 0.75em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
  color: #f8f8ff;
}
.pull-stats6 {
  position: relative;
  top: 1.75em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.88em;
}
.desctopverpull-stats {
  top: 0em;
  left: 0em;
  width: 21.38em;
  height: 34em;
}
.desctopverpull-stats-parent {
  position: relative;
  width: 100%;
  height: 34em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
  &_depositor-all {
    height: 41em;
  }
  &_depositor-my {
    height: 44em;
  }
  &_creditor-my {
    height: 31em;
  }
  &_borrower-all {
    height: 32em;
  }
  &_borrower-my {
    height: 34em;
  }
  &_collector-debt {
    height: 29.5em;
  }
}
.header-icon {
  position: relative;
  width: 48px;
  height: 48px;
  overflow: hidden;
  flex-shrink: 0;
}
.des-and-bbn {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f9fbff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
  text-align: right;
  color: #fefefe;

  &_withdraw {
    flex-direction: column;
    margin-top: 3em;
  }
  &_add {
    margin-top: 8.5em;
  }
}
.buttons-tabs {
  align-self: stretch;
  border-radius: 25px;
  background-color: rgba(87, 126, 247, 0.96);
  display: flex;
  flex-direction: row;
  padding: 0.69em 1.5em;
  align-items: center;
  justify-content: center;
  color: #fefefe;

  &:hover {
    background: #3062fd;
    cursor: pointer;
  }
  &_cancel {
    border: 1px solid #5d83f7;
    color: #555562;
    background: transparent;
    &:hover {
      cursor: pointer;
      border: 0.5px solid rgba(87, 126, 247, 0.96);
      background: rgba(87, 126, 247, 0.24);
    }
  }
}
.button {
  border: none;
  background: transparent;
  width: 100%;
}
.div9 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.field {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.63em;
}
.roi {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.text-and-button {
  position: relative;
  flex-direction: row;
  width: 100%;
  align-items: center;

  height: 64px;
  border-radius: 16px;
  &_top {
    background: #fff;
  }
}
.fieldsinput-parent {
  border-radius: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  gap: 0.63em;
  background: #f9fbff;
  height: 110px;
  &_add {
    height: 194px;
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
  margin-top: 1em;
}
.div16 {
  position: relative;
  font-size: 0.75em;
  line-height: 0.83em;
}

.min-10-ton-parent {
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 1;
  text-align: center;
  width: 96%;
}
.min-10-ton-container {
  position: relative;
  font-size: 0.63em;
  line-height: 1em;
  font-weight: 300;
}

.span8 {
  color: rgba(165, 146, 221, 0.7);
}
.ton1 {
  color: #3b3b3b;
}
.label {
  font-size: 14px;
  position: relative;
  left: 0.8em;
}
.scan-the-qr,
.status-subtitle {
  margin: 0;
  text-align: center;
  &-link {
    display: inline-block;
    color: rgba(87, 126, 247, 0.96);
    text-align: center;
    font-size: 14px;
    font-family: Inter;
    font-weight: 300;
    line-height: 10px;
    text-decoration-line: underline;
    cursor: pointer;
    padding-top: 8px;
  }
}
.ton-kepeer {
  position: relative;
  line-height: 130%;
}
.we-do-not {
  align-self: stretch;
  position: relative;
  line-height: 130%;
  font-weight: 300;
  color: rgba(59, 59, 59, 0.7);
  a {
    text-decoration: underline;
    cursor: pointer;
    color: rgba(87, 126, 247, 0.96);
  }
}
.status-subtitle {
  font-weight: 300;
}
.div {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.wrapper {
  border-radius: 8.79px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 0.31em 0.31em 0.31em 0.38em;
  align-items: center;
  justify-content: flex-start;
}
.div1 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.container {
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em 0.13em 0.38em;
  align-items: flex-start;
  justify-content: flex-start;
}
.ton {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
  display: flex;
  align-items: center;
  width: 10.83em;
  flex-shrink: 0;
}
.ton-wrapper {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
}
.frame-container {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.81em;
}
.frame-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.frame-child {
  position: relative;
  border-top: 1px solid #f3efff;
  box-sizing: border-box;
  width: 17.56em;
  height: 0.06em;
}
.frame {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em 0.13em 0.38em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
  &_period {
    width: 9.81em;
  }
}
.ton1 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.ton-container {
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  text-align: right;
}

.frame-parent1 {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 0.81em;
}
.frame-group {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25em;
}
.frame-parent {
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
.creditor-info {
  display: flex;
  width: 100%;

  border-radius: 16px;
  border: 1px solid #f6f4fc;
  padding: 4px 16px;
  height: 30px;
  align-items: center;
  gap: 10px;
}
</style>
