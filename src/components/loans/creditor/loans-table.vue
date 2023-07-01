<template>
  <div class="cards-parent" @click="toDetail">
    <div class="cards">
      <div class="statusbar-cards" v-if="role === 'creditor'">
        <div class="buttons-tabs">
          <div class="checkboxdone-parent">
            <catos-checkbox
              @onChange="handleCheckBox"
              :isChecked="isChecked"
              :key="Number(isChecked)"
            >
            </catos-checkbox>

            <div class="txt1-parent">
              <div class="txt1">Иван Иванов Иванович</div>
              <div class="txt2">ID 12345</div>
            </div>
          </div>
          <div class="status-all-parent">
            <div class="status-all">
              <div class="colors-graphsorders-parent">
                <template v-if="variant === 'bids'">
                  <img
                    v-if="status === 'approved'"
                    class="colors-graphsorders-icon"
                    alt=""
                    src="@/assets/images/colors-graphsorders1.svg"
                  />
                  <img
                    v-else-if="status === 'rejected'"
                    class="colors-graphsorders-icon"
                    alt=""
                    src="@/assets/images/colors-graphsorders3.svg"
                  />
                  <img
                    v-else
                    class="colors-graphsorders-icon"
                    alt=""
                    src="@/assets/images/colors-graphsorders4.svg"
                  />
                </template>
                <template v-else-if="variant === 'loans'">
                  <img
                    v-if="status === 'repaid'"
                    class="colors-graphsorders-icon"
                    alt=""
                    src="@/assets/images/colors-graphsorders1.svg"
                  />
                  <img
                    v-else-if="status === 'overdue'"
                    class="colors-graphsorders-icon"
                    alt=""
                    src="@/assets/images/colors-graphsorders3.svg"
                  />
                  <img
                    v-else
                    class="colors-graphsorders-icon"
                    alt=""
                    src="@/assets/images/colors-graphsorders2.svg"
                  />
                </template>
                <template v-else-if="variant === 'marketplace'">
                  <img
                    v-if="status === 'sales'"
                    class="colors-graphsorders-icon"
                    alt=""
                    src="@/assets/images/colors-graphsorders2.svg"
                  />
                  <img
                    v-else
                    class="colors-graphsorders-icon"
                    alt=""
                    src="@/assets/images/colors-graphsorders1.svg"
                  />
                </template>

                <div v-if="variant === 'bids'" class="div">
                  {{
                    status === "approved"
                      ? "Одобрена"
                      : status === "rejected"
                      ? "Отклонена"
                      : "Ожидание"
                  }}
                </div>
                <div v-else-if="variant === 'loans'" class="div">
                  {{
                    status === "repaid"
                      ? "Погашен"
                      : status === "overdue"
                      ? "Просрочен"
                      : "Продан"
                  }}
                </div>
                <div v-else-if="variant === 'marketplace'" class="div">
                  {{ status === "sales" ? "Продается" : "Продан" }}
                </div>
              </div>
              <img
                class="iconchange"
                alt=""
                src="@/assets/desktop/iconchange.svg"
              />
            </div>
            <div class="wrapper">
              <div class="div">1д 1 ч</div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="statusbar-cards">
        <div class="buttons-tabs6">
          <div class="iconsbar-cards-parent">
            <img
              class="iconsbar-cards"
              alt=""
              src="@/assets/images/pie-chart.svg"
            />
            <div class="txt1-parent">
              <div v-if="role === 'borrower'" class="txt2_borrower txt2">
                {{ variant === "sold" ? "Текущий долг" : "Займ на" }}:
              </div>
              <div class="ton18">37 000 TON</div>

              <div
                v-if="role === 'creditor' || role === 'depositor'"
                class="txt2"
              >
                Доступно ликвидности
              </div>
            </div>
          </div>
          <div v-if="variant === 'sold'" class="status-all">
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
              src="@/assets/images/iconscalendar-mini.svg"
            />
            <div class="div124">30 дней = 15%</div>
          </div>
        </div>
      </div>
      <div v-if="role === 'borrower'" class="creditor-info">
        <div class="div127">Кредитор:</div>
        <span class="div127">Деньги до зарплаты</span>
      </div>
      <div class="frame-parent">
        <div v-if="role === 'borrower'" class="field-parent">
          <div class="field">
            <div class="div2">Займ:</div>
            <div class="ton">1 500 TON</div>
          </div>
          <div class="col-titles-bg" />
        </div>
        <div v-if="role === 'borrower'" class="field-parent">
          <div class="field">
            <div class="div2">Ставка:</div>
            <div class="ton">1 500 TON</div>
          </div>
          <div class="col-titles-bg" />
        </div>
        <div v-if="role === 'borrower'" class="field-parent">
          <div class="field">
            <div class="div2">Начисленные проценты:</div>
            <div class="ton">1 500 TON</div>
          </div>
          <div class="col-titles-bg" />
        </div>
        <div v-if="role === 'borrower'" class="field-parent">
          <div class="field">
            <div class="div2">На срок:</div>
            <div class="ton">1 500 TON</div>
          </div>
          <div class="col-titles-bg" />
        </div>
        <div v-if="role === 'borrower'" class="field-parent">
          <div class="field">
            <div class="div2">Беспроцентный период:</div>
            <div class="ton">1 500 TON</div>
          </div>
          <div class="col-titles-bg" />
        </div>
        <div v-if="role === 'borrower'" class="field-parent">
          <div class="field">
            <div class="div2">Сумма к возвращению:</div>
            <div class="ton">1 500 TON</div>
          </div>
          <div class="col-titles-bg" />
        </div>
        <div v-if="role === 'creditor'" class="field-parent">
          <div class="field">
            <div class="div2">Одобренный период:</div>
            <div class="ton">2 месяца</div>
          </div>
          <div class="col-titles-bg" />
        </div>
        <div v-if="role === 'creditor'" class="field-parent">
          <div class="field">
            <div class="div2">Одобренная сумма:</div>
            <div class="ton">4 000 TON</div>
          </div>
          <div class="col-titles-bg" />
        </div>
        <div v-if="role === 'creditor'" class="field-parent">
          <div class="field">
            <div class="div2">Дата смены статуса:</div>
            <div class="ton">28.12.22</div>
          </div>
          <div class="col-titles-bg" />
        </div>
        <div v-if="role === 'creditor'" class="field-parent">
          <div class="field">
            <div class="div2">Анкета заявителя:</div>
            <div class="div8">Открыть</div>
          </div>
          <div class="col-titles-bg" />
        </div>
      </div>
      <div
        v-if="
          role === 'borrower' && status === 'active' && variant === 'active'
        "
        class="notification6"
      >
        <img class="percent-icon12" alt="" src="@/assets/images/percent.svg" />
        <div class="div128">Проценты начисляются с 12/12/2023 года</div>
      </div>
      <div
        v-if="
          role === 'borrower' && status === 'active' && variant === 'active'
        "
        class="notification6"
      >
        <img class="percent-icon12" alt="" src="@/assets/images/percent.svg" />
        <div class="div128">
          Вернуть не позднее: до 13.02.22, 16:00 (осталось 29 дней)
        </div>
      </div>
      <div
        v-if="
          role === 'borrower' && status === 'overdue' && variant === 'active'
        "
        class="notification6"
      >
        <img class="percent-icon12" alt="" src="@/assets/images/percent.svg" />
        <div class="div128">
          Вернуть не позднее: до 13.02.22, 16:00 (займ просрочен)
        </div>
      </div>
      <div
        v-if="
          role === 'borrower' && status === 'overdue' && variant === 'active'
        "
        class="notification6"
      >
        <img class="percent-icon12" alt="" src="@/assets/images/percent.svg" />
        <div class="div128">
          Ваш долг вместе с персональными данными будет выставлен на открытый
          аукцион для коллекторов через 23:59:59
        </div>
      </div>

      <div class="des-and-bbn">
        <div class="field-parent">
          <button
            v-if="
              role === 'borrower' && status === 'active' && variant === 'active'
            "
            class="buttons-tabs1"
            @click.stop="() => toActive('repay')"
          >
            <div class="text">Погасить досрочно</div>
          </button>
          <div
            v-if="
              role === 'borrower' &&
              status === 'overdue' &&
              variant === 'active'
            "
            class="group-action"
          >
            <button
              class="buttons-tabs1_overdue buttons-tabs1"
              @click.stop="() => toActive('repay')"
            >
              <div class="text">Погасить</div>
            </button>
            <button
              class="buttons-tabs1_overdue buttons-tabs1"
              @click.stop="() => toActive('prolong')"
            >
              <div class="text">Пролонгировать</div>
            </button>
          </div>
          <button
            v-else-if="
              role === 'creditor' && status !== 'repaid' && status !== 'sold'
            "
            class="buttons-tabs1"
            @click="toAction"
          >
            <div class="text">
              {{
                variant === "bids"
                  ? "Сменить статус"
                  : variant === "loans" && status === "overdue"
                  ? "Выставить займ на продажу"
                  : "Изменить цену продажи TON"
              }}
            </div>
          </button>
          <button class="buttons-tabs2" @click="toDetail">
            <div class="text">Подробнее</div>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!--<loans-modal-desktop
    v-if="isModal"
    @close="() => (isModal = false)"
  ></loans-modal-desktop>-->

  <bids
    v-if="isBids"
    :state="bidsState"
    @close="
      () => {
        isBids = false;
        resetState('bids');
      }
    "
  >
  </bids>

  <loans
    v-if="isLoans"
    :state="loansState"
    :status="status"
    @close="
      () => {
        isLoans = false;
        isChecked = false;
        resetState('loans');
      }
    "
  >
  </loans>

  <marketplace
    v-if="isMarketplace"
    :state="marketplaceState"
    @close="
      () => {
        isMarketplace = false;
        isChecked = false;
        resetState('marketplace');
      }
    "
  ></marketplace>

  <active
    v-if="isActive"
    :state="activeState"
    :status="status"
    @close="
      () => {
        isActive = false;
        resetState('active');
      }
    "
  ></active>
  <repaid
    v-if="isRepaid"
    :state="repaidState"
    :status="status"
    @close="
      () => {
        isRepaid = false;
        resetState('repaid');
      }
    "
  >
  </repaid>
  <sold v-if="isSold" @close="() => (isSold = false)"></sold>
</template>
<script setup lang="ts">
import { ref } from "vue";
import catosCheckbox from "../../ui-kit/catos-checkbox.vue";
import bids from "./desktop/bids.vue";
import loans from "./desktop/loans.vue";
import marketplace from "./desktop/marketplace.vue";
import active from "../borrower/desktop/active.vue";
import repaid from "../borrower/desktop/repaid.vue";
import sold from "../borrower/desktop/sold.vue";

const { variant, role, status } = defineProps({
  variant: {
    type: String,
  },
  role: {
    type: String,
  },
  status: {
    type: String,
  },
});

const bidsState = {
  detailModal: false,

  statusChangeModal: false,
};
const loansState = {
  detailModal: false,
  statusManageModal: false,
  exposeModal: false,
};
const marketplaceState = {
  salesDetailModal: false,
  soldDetailModal: false,
};
const activeState = {
  prolongModal: false,
  repayModal: false,
  detailModal: false,
};
const repaidState = {
  detailModal: false,
};

const resetState = (state: string) => {
  switch (state) {
    case "bids":
      bidsState.detailModal = false;
      bidsState.statusChangeModal = false;
    case "loans":
      loansState.detailModal = false;
      loansState.statusManageModal = false;
      loansState.exposeModal = false;
    case "marketplace":
      marketplaceState.salesDetailModal = false;
      marketplaceState.soldDetailModal = false;
    case "active":
      activeState.prolongModal = false;
      activeState.repayModal = false;
      activeState.detailModal = false;
    case "repaid":
      repaidState.detailModal = false;
  }
};
const isModal = ref(false);
const isBids = ref(false);
const isLoans = ref(false);
const isMarketplace = ref(false);
const isActive = ref(false);
const isRepaid = ref(false);
const isSold = ref(false);

const isChecked = ref(false);

const toAction = () => {
  if (role === "creditor") {
    if (variant === "bids") {
      bidsState.statusChangeModal = true;
      bids.value = true;
    }

    if (status === "overdue") {
      loansState.exposeModal = true;
      isLoans.value = true;
    }
  }
};

const toDetail = () => {
  if (role === "creditor") {
    if (variant === "bids") {
      bidsState.detailModal = true;
      isBids.value = true;
    }
    if (variant === "loans") {
      loansState.detailModal = true;
      isLoans.value = true;
    }
    if (variant === "marketplace") {
      isMarketplace.value = true;
      if (status === "sales") {
        marketplaceState.salesDetailModal = true;
      } else {
        marketplaceState.soldDetailModal = true;
      }
    }
    //isModal.value = true;
  } else if (role === "borrower") {
    if (variant === "active") {
      isActive.value = true;
      toActive("detail");
    } else if (variant === "repaid") {
      repaidState.detailModal = true;
      isRepaid.value = true;
    } else if (variant === "sold") {
      isSold.value = true;
    }
  }
};

const toActive = (init: string) => {
  isActive.value = true;
  switch (init) {
    case "prolong": {
      return (activeState.prolongModal = true);
    }
    case "repay":
      return (activeState.repayModal = true);
    case "detail":
      return (activeState.detailModal = true);
  }
};
const handleCheckBox = (ev: any) => {
  if (ev) {
    if (variant === "bids") {
      bidsState.statusChangeModal = true;
      isBids.value = true;
    }
    if (variant === "loans") {
      isLoans.value = true;
      loansState.statusManageModal = true;
    }
  }
  console.log(ev);
};
</script>
<style scoped lang="scss">
.checkboxdone-icon {
  position: relative;
  border-radius: 4.14px;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.txt1 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 130%;
  font-weight: 500;
}
.txt2 {
  position: relative;
  font-size: 0.75em;
  line-height: 100%;
  font-weight: 300;
  color: #8181a5;
}
.txt1-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.13em;
}
.checkboxdone-parent {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}
.colors-graphsorders-icon {
  position: relative;
  width: 1em;
  height: 1em;
}
.div {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  top: 0.1em;
}
.colors-graphsorders-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.31em;
}
.iconchange {
  position: relative;
  width: 2.5em;
  height: 2.5em;
}
.status-all {
  align-self: stretch;
  flex: 1;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0em 0em 0em 0.63em;
  align-items: center;
  justify-content: space-between;
}
.wrapper {
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(165, 146, 221, 0.07);
  width: 3em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.status-all-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.buttons-tabs {
  flex: 1;
  border-radius: 15px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
}
.statusbar-cards {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f6f4fc;
  display: flex;
  flex-direction: row;
  padding: 0.63em;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
}
.div2 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.field {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.63em;
}
.col-titles-bg {
  align-self: stretch;
  position: relative;
  border-radius: 18px;
  background-color: rgba(165, 146, 221, 0.1);
  height: 0.06em;
}
.field-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.63em;
}
.ton {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
}
.div8 {
  position: relative;
  font-size: 0.88em;
  text-decoration: underline;
  line-height: 130%;
  color: #5d83f7;
}
.frame-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: 0em 0.63em;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0.63em;
}
.text {
  position: relative;
  font-size: 0.88rem;
  line-height: 130%;
  font-weight: 500;
}
.buttons-tabs1 {
  align-self: stretch;
  border-radius: 25px;
  background-color: rgba(87, 126, 247, 0.96);
  height: 2.5em;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  color: rgba(254, 254, 254, 1);
  &:hover {
    background: #3062fd;
  }
  &_overdue {
    flex: 1;
  }
}
.buttons-tabs2 {
  align-self: stretch;
  border-radius: 25px;
  border: 0.5px solid rgba(87, 126, 247, 0.96);
  box-sizing: border-box;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  padding: 0.44em 5.5em;
  align-items: center;
  justify-content: center;
  color: #555562;
  background: transparent;
  cursor: pointer;
  &:hover {
    border: 0.5px solid rgba(87, 126, 247, 0.96);
    background: rgba(87, 126, 247, 0.24);
  }
}
.des-and-bbn {
  align-self: stretch;
  border-radius: 16px;
  background-color: #f9fbff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  padding: 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
  color: #fefefe;
}
.cards {
  position: relative;
  top: 0em;
  left: 0em;
  border-radius: 24px;
  background-color: #fff;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  width: 23.75em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.63em;
  align-items: center;
  justify-content: center;
  gap: 1.25em;
}
.cards-parent {
  position: relative;
  width: 100%;

  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
li {
  &:hover .cards {
    background-color: #fcfcfe;
  }
  &:hover .cards-parent {
    cursor: pointer;
  }
}
.iconsbar-cards-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.iconsbar-cards {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
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
.div121 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
}
.frame-parent20 {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0.38em;
  color: #3b3b3b;
  font-size: 14px;
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
.div127 {
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
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
.percent-icon12 {
  position: relative;
  width: 1em;
  height: 1em;
  overflow: hidden;
  flex-shrink: 0;
}
.div128 {
  flex: 1;
  position: relative;
  font-size: 0.75em;
  line-height: 130%;
  font-weight: 300;
}
.group-action {
  display: flex;
  gap: 10px;
  width: 100%;
}
.prolong-result {
  color: rgba(59, 59, 59, 0.72);
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  border-radius: 11px;
  background: #f6f4fc;
  width: 300px;
  padding: 10px 12px;
}
</style>
