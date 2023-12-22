<template>
  <div class="cards-parent" @click="toDetail">
        <div class="cards">
      <div class="statusbar-cards" v-if="role === 'creditor'">
        <div class="buttons-tabs">
          <div class="checkboxdone-parent">
            <!-- На беке пока нельзя менять статус для нескольких заявок сразу -->
            <!--<catos-checkbox
              @onChange="handleCheckBox"
              :isChecked="isChecked"
              :key="Number(isChecked)"
            >
            </catos-checkbox>-->

            <div class="txt1-parent">
              <div class="txt1">{{ loanRequest ? loanRequest?.borrower.name : loan?.borrower.name }} {{ loanRequest ? loanRequest?.borrower.surname : loan?.borrower.surname }}</div>
              <div class="txt2">{{`ID ${loanRequest ? loanRequest?.id : loan?.id}` }}</div>
            </div>
          </div>
          <div class="status-all-parent">
            <div class="status-all">
              <div class="colors-graphsorders-parent">
                <template v-if="variant === 'bids'">
                  <img
                    v-if="loanRequest?.status === 'approved'"
                    class="colors-graphsorders-icon"
                    alt=""
                    src="@/assets/images/colors-graphsorders1.svg"
                  />
                  <img
                    v-else-if="loanRequest?.status === 'declined'"
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
                    v-if="isOverdue"
                    class="colors-graphsorders-icon"
                    alt=""
                    src="@/assets/images/colors-graphsorders3.svg"
                  />
                  <img
                    v-else-if="loan?.status === 'paid'"
                    class="colors-graphsorders-icon"
                    alt=""
                    src="@/assets/images/colors-graphsorders1.svg"
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
                    v-if="loan?.status === 'for_sale'"
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
                  {{  i18n.global.t(`loans-request-status.${loanRequest?.status}`)}}
                </div>
                <div v-else-if="variant === 'loans'" class="div">
                  {{ isOverdue ? i18n.global.t(`loans-status.overdue`) : i18n.global.t(`loans-status.${loan?.status}`)}}
                </div>
                <div v-else-if="variant === 'marketplace'" class="div">
                  {{ loan?.status === "for_sale" ? "Продается" : "Продан" }}
                </div>
              </div>
              <img
                class="iconchange"
                alt=""
                src="@/assets/desktop/iconchange.svg"
              />
            </div>
            <!--<div class="wrapper">
              <div class="div">1д 1ч</div>
            </div>-->
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
              <div class="ton18">{{ 
              variant === "sold" ? duty 
              : role === 'borrower' && loanRequest?.id ? loanRequest?.approved_amount / NANO_MULTIPLIER
              : loan?.amount ? loan?.amount / NANO_MULTIPLIER : 0}} TON</div>
              <div
                v-if="loanRequestStatus === 'creditor' || role === 'investor'"
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
                src="@/assets/images/colors-graphsorders3.svg"
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
            <div class="div122">{{ loanRequest ? interestRateStringLoanRequest : interestRateString}}</div>
          </div>
          <div class="iconsbar-cards-parent">
            <img
              class="icons2bar-cards1"
              alt=""
              src="@/assets/images/clock.svg"
            />
            <div class="div123">{{ freePeriodString }}</div>
          </div>

          <div class="iconsbar-cards-parent">
            <img
              class="icons2bar-cards"
              alt=""
              src="@/assets/images/iconscalendar-mini.svg"
            />
            <div class="div124">{{ monthInterestRateString }}</div>
          </div>
        </div>
      </div>
      <div></div>
      <div v-if="role === 'borrower' && loan" class="creditor-info">
        <div class="div127">Кредитор:</div>
          <div class="group">
            <a class="div127">{{ poolByLoan?.organization }}</a>
            <img
                  class="radiobutton-icon"
                  alt=""
                  src="@/assets/images/investore.svg"
              />
          </div>
        </div>
      <div :class="role === 'borrower' && loanRequest ? 'frame-parent_loanrequest frame-parent' : 'frame-parent'">
        <div v-if="role === 'borrower' && loanRequest" class="field-parent">
          <div class="field">
            <div class="div2">Одобренная сумма:</div>
            <div class="ton">{{ loanRequest?.approved_amount ? loanRequest?.approved_amount / NANO_MULTIPLIER : 0 }} TON</div>
          </div>
          <div class="col-titles-bg" />
        </div>
        <div v-if="role === 'borrower' && !loanRequest" class="field-parent">
          <div class="field">
            <div class="div2">Займ:</div>
            <div class="ton">{{ loan?.amount ? loan?.amount / NANO_MULTIPLIER : 0 }} TON</div>
          </div>
          <div class="col-titles-bg" />
        </div>
        <div v-if="role === 'borrower' && loanRequest" class="field-parent">
          <div class="field">
            <div class="div2">Одобренный период:</div>
            <div class="ton">{{  durationLoanRequest  }}</div>
          </div>
          <div class="col-titles-bg" />
        </div>
        <div v-if="role === 'borrower'" class="field-parent">
          <div class="field">
            <div class="div2">Ставка:</div>
            <div class="ton">{{ loanRequest ? interestRateLoanRequest : interestRate }}% в день</div>
          </div>
          <div v-if="!loanRequest" class="col-titles-bg" />
        </div>
        <div v-if="role === 'borrower' && !loanRequest" class="field-parent">
          <div class="field">
            <div class="div2">На срок:</div>
            <div class="ton">до {{ maxDuration }}</div>
          </div>
          <div class="col-titles-bg" />
        </div>
        <div v-if="role === 'borrower' && !loanRequest" class="field-parent">
          <div class="field">
            <div class="div2">Беспроцентный период:</div>
            <div class="ton">до {{`${freePeriodDate} (${freePeriodStatus})` }}</div>
          </div>
          <div class="col-titles-bg" />
        </div>
        <div
          v-if="role === 'borrower' && variant === 'paid'"
          class="field-parent"
        >
          <div class="field">
            <div class="div2">Дата погашения:</div>
            <div class="ton"></div>
          </div>
        </div>
        <div v-if="role === 'creditor'" class="field-parent">
          <div class="field">
            <template v-if="variant === 'marketplace'">
              <div class="div2">
                <b> Цена продажи:</b>
              </div>
              <div class="ton">
                <b> {{ loan?.price ? loan?.price / NANO_MULTIPLIER : 0}} TON</b>
              </div>
            </template>
            <template v-else>
              <div class="div2">Одобренный период:</div>
              <div class="ton">{{ loanRequest ? durationLoanRequest : duration }}</div>
            </template>
          </div>
          <div class="col-titles-bg" />
        </div>
        <div v-if="role === 'creditor'" class="field-parent">
          <div class="field">
            <div class="div2">
              {{ variant === "marketplace" ? "Долг" : "Одобренная сумма" }}:
            </div>
            <div class="ton">{{
             variant === "marketplace" ? duty 
            : loan?.amount ? loan?.amount / NANO_MULTIPLIER
            : loanRequest?.approved_amount ? loanRequest?.approved_amount  / NANO_MULTIPLIER
            : 0}} TON</div>
          </div>
          <div class="col-titles-bg" />
        </div>
        <div v-if="role === 'creditor' && statusChangedTerm" class="field-parent">
          <div class="field">
            <div class="div2">Дата смены статуса:</div>
            <div class="ton">{{ loanRequest ? statusChangedTerm : ''}}</div>
          </div>
          <div class="col-titles-bg" />
        </div>
        <div v-if="role === 'creditor'" class="field-parent">
          <div class="field">
            <div class="div2">Анкета заявителя:</div>
            <div class="div8"  @click.stop="() => isBlank = true">Открыть</div>
          </div>
         
        </div>
      </div>
      <div
        v-if="
          role === 'borrower' && loanRequest
        "
        class="notification6"
      >
        <img
          class="percent-icon12"
          alt=""
          src="@/assets/images/alerttriangle-white.svg"
        />
        <div class="div128">
          Ваша заявка на займ была успешно одобрена
        </div>
      </div>
      <div
        v-if="
          role === 'borrower' && status === 'active' && ( variant === 'active' || variant === 'for_sale')
        "
        class="notification6"
      >
        <img class="percent-icon12" alt="" src="@/assets/images/percent.svg" />
        <div class="div128">Проценты начисляются с {{accrualDate}}</div>
      </div>
      <div
        v-if="
          role === 'borrower' && status === 'active' && ( variant === 'active' || variant === 'for_sale')
        "
        class="notification6"
      >
        <img
          class="percent-icon12"
          alt=""
          src="@/assets/images/alerttriangle-white.svg"
        />
        <div class="div128">
          Вернуть не позднее: до {{ endTerm }} (осталось {{restDays}} дней)
        </div>
      </div>
      <div
        v-if="
          role === 'borrower' && status === 'overdue' && ( variant === 'active' || variant === 'for_sale')
        "
        class="notification6"
      >
        <img
          class="percent-icon12"
          alt=""
          src="@/assets/images/alerttriangle-white.svg"
        />
        <div class="div128">
          Вернуть не позднее: до {{endTerm}} (займ просрочен)
        </div>
      </div>
      <div
        v-if="
          role === 'borrower' && status === 'overdue' && ( variant === 'active' || variant === 'for_sale')
        "
        class="notification6_overdue notification6"
      >
        <img
          class="percent-icon12"
          alt=""
          src="@/assets/images/alerttriangle-red.svg"
        />
        <div class="div128 div128">
          {{ variant === 'active'
          ? "Ваш долг вместе с персональными данными может быть выставлен на открытый аукцион для коллекторов."
          : "Ваш долг вместе с персональными данными был выставлен на открытый аукцион для коллекторов." }}
          
        </div>
      </div>

      <div class="des-and-bbn">
        <div class="field-parent">
          <button
            v-if="
              role === 'borrower' && loanRequest
            "
            class="buttons-tabs1"
            @click.stop="() => toActive('retrieveLoanRequest')"
          >
            <div class="text">Взять займ</div>
          </button>
          <button
            v-if="
              role === 'borrower' && status === 'active' && variant === 'active' && !loanRequest
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
              ( variant === 'active' || variant ==='for_sale' ) && 
              !loanRequest
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
              v-if="variant === 'active'"
              class="buttons-tabs1_overdue buttons-tabs1"
              @click.stop="() => toActive('prolong')"
            >
              <div class="text">Пролонгировать</div>
            </button>
          </div>
          <button
            v-else-if="
              role === 'creditor' && variant === 'loans' && isOverdue
            "
            class="buttons-tabs1"
            @click.stop="toAction"
          >
            <div class="text">
              Выставить займ на продажу
            </div>
          </button>
          <button
            v-else-if="
              role === 'creditor' && loan?.status !== 'paid' && loan?.status !== 'sold'
            "
            class="buttons-tabs1"
            @click.stop="toAction"
          >
            <div class="text">
              {{
                variant === "bids"
                  ? "Сменить статус"
                  : "Изменить цену продажи TON"
              }}
            </div>
          </button>
          <button v-if="role !== 'borrower' || !loanRequest" class="buttons-tabs2" @click="toDetail">
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
    v-if="isBids && bidsState.detailModal"
    :state="bidsState"
    :loanRequest="loanRequest"
    @on-handle-change-status="() =>{
      bidsState.statusChangeModal = true;
      isBids = true;
    }"
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
    :loan="loan"
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
    :loan="loan"
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
    v-if="isActive && loanRequest"
    :state="activeState"
    :status="status"
    :loanRequest="loanRequest"
    @close="
      () => {
        isActive = false;
        resetState('active');
      }
    "
  ></active>
  <active
    v-if="isActive && !loanRequest"
    :state="activeState"
    :status="status"
    :loan="loan"
    :poolId="poolByLoan?.id ? poolByLoan?.id : 0"
    @close="
      () => {
        isActive = false;
        resetState('active');
      }
    "
  ></active>
  <repaid
    v-if="isRepaid"
    :loan="loan"
    :state="repaidState"
    :status="status"
    @close="
      () => {
        isRepaid = false;
        resetState('paid');
      }
    "
  >
  </repaid>
  <status-change 
      v-if="isBids && bidsState.statusChangeModal" 
      :id="loanRequest?.id ? loanRequest?.id : 0"
      :amount="amountToChangeStatus === 0 ? 1 : amountToChangeStatus"
      :currentStatus="loanRequest?.status"
      @close="() => {
        isBids = false;
        resetState('bids');
      }"> 
  </status-change>
  <sold v-if="isSold" @close="() => (isSold = false)" :loan="loan"></sold>
  <blank v-if="isBlank"  @close="() => isBlank = false" back  :toBack="
      () => {
        isBlank = false;
      }
    "
  :title="`Анкета заявителя #${loanRequest?.borrower_id}`"></blank>
</template>
<script setup lang="ts">
import { ref, PropType, computed, onMounted } from "vue";
import { roleStorage } from "@/utils/localStorage";
import catosCheckbox from "../../ui-kit/catos-checkbox.vue";
import bids from "./desktop/bids.vue";
import loans from "./desktop/loans.vue";
import marketplace from "./desktop/marketplace.vue";
import active from "../borrower/desktop/active.vue";
import repaid from "../borrower/desktop/repaid.vue";
import sold from "../borrower/desktop/sold.vue";
import StatusChange from "./desktop/modal-body/ status-change.vue";
import { LoansResponse } from "@/types/loan.types";
import { LoansRequestResponse } from "@/types/loan.types";
import { useComputedLoanRequestInfo } from "@/composables/infoCalculation/useComputedLoanRequestInfo";
import { i18n } from "@/i18n";
import { useComputedLoanInfo } from "@/composables/infoCalculation/useComputedLoanInfo";
import {useComputedPoolInfo} from "@/composables/infoCalculation/useComputedPoolInfo"
import { usePoolListStore } from "@/stores/poolList";
import blank from "@/components/base/desktop/blank.vue"
import { NANO_MULTIPLIER } from "@/utils/constants";

onMounted(async() => {
  if(loan?.pool_id && role.value === 'borrower') {
    poolByLoan.value = await poolItem(loan?.pool_id)
    maxDuration.value = useComputedPoolInfo(poolByLoan.value).maxDuration.value
    freePeriod.value = useComputedPoolInfo(poolByLoan.value).freePeriod.value
    freePeriodString.value = useComputedPoolInfo(poolByLoan.value).freePeriodString.value

    monthInterestRateString.value = useComputedLoanInfo(loan, freePeriod.value).monthInterestRateString.value
    freePeriodStatus.value = useComputedLoanInfo(loan, freePeriod.value).freePeriodStatus.value
    freePeriodDate.value = useComputedLoanInfo(loan, freePeriod.value).freePeriodDate.value
    restDays.value = useComputedLoanInfo(loan).restDays.value
    accrualDate.value = useComputedLoanInfo(loan, freePeriod.value).interestAccrualDate.value
  }
  else if(loanRequest?.pool_id && role.value === 'borrower') {
    poolByLoan.value = await poolItem(loanRequest?.pool_id)
    freePeriod.value = useComputedPoolInfo(poolByLoan.value).freePeriod.value
    freePeriodString.value = useComputedPoolInfo(poolByLoan.value).freePeriodString.value

    monthInterestRateString.value = useComputedLoanRequestInfo(loanRequest, freePeriod.value).monthInterestRateString.value
  }
})

const { variant, loan, loanRequest, loanRequestStatus } = defineProps({
  variant: {
    type: String,
  },
  loan: {
    type: Object as PropType<LoansResponse>,
  },
  loanRequest: {
    type: Object as PropType<LoansRequestResponse>,
  },
  loanRequestStatus: {
    type: String
  },
  amountToChangeStatus: {
    type: Number
  }
});

const maxDuration = ref()
const monthInterestRateString = ref()
const freePeriod = ref()
const freePeriodString = ref()
const freePeriodStatus = ref()
const freePeriodDate = ref()
const restDays = ref()
const accrualDate = ref()
const isBlank = ref(false)

const { poolItem } = usePoolListStore();
const {duty, isOverdue, interestRate, duration, startTerm, endTerm, interestRateString} = useComputedLoanInfo(loan)
const {interestRate: interestRateLoanRequest, interestRateString: interestRateStringLoanRequest, duration: durationLoanRequest, statusChangedTerm} = useComputedLoanRequestInfo(loanRequest)


const status = computed(() => {
  if (loan?.end) {
    const end = new Date(loan?.end);
    const now = new Date();
    if(now > end) {
      return 'overdue'
    }
  }
  return 'active'
})
const role = computed(() => {
  return roleStorage.get()
})
const poolByLoan = ref()

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
  retrieveLoanRequest: false
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
      activeState.retrieveLoanRequest = false
    case "paid":
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

const emits = defineEmits(['onActiveCheckbox', 'onInactiveCheckbox'])

const toAction = () => {
  if (role.value === "creditor") {
    if (variant === "bids") {
      bidsState.statusChangeModal = true;
      isBids.value = true;
    }

    if (status.value === "overdue") {
      loansState.exposeModal = true;
      isLoans.value = true;
    }
  }
};

const toDetail = () => {
  if (role.value === "creditor") {
    if (variant === "bids") {
      bidsState.detailModal = true;
      isBids.value = true;
    }
    else if (variant === "loans" && loan?.status === "sold") {
      isMarketplace.value = true
      marketplaceState.soldDetailModal = true;
    }
    else if (variant === "loans") {
      loansState.detailModal = true;
      isLoans.value = true;
    }
    else if (variant === "marketplace") {
      isMarketplace.value = true;
      if (loan?.status === "for_sale") {
        marketplaceState.salesDetailModal = true;
      } else {
        marketplaceState.soldDetailModal = true;
      }
    }
    //isModal.value = true;
  } else if (role.value === "borrower") {
    if (variant === "active") {
      isActive.value = true;
      toActive("detail");
    } else if (variant === "paid") {
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
    case "retrieveLoanRequest":
    return (activeState.retrieveLoanRequest = true);
  }
};

const handleCheckBox = (ev: any) => {
  if (ev) {
    emits('onActiveCheckbox')
  }
  else{
    emits('onInactiveCheckbox')
  }
  if (variant === "bids") {
      bidsState.statusChangeModal = true;
      isBids.value = true;
    }
    if (variant === "loans") {
      isLoans.value = true;
      loansState.statusManageModal = true;
    }
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
  gap: 5.63em;
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
  text-align: end;
  font-weight: 300;
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
  &_loanrequest{
    height: 46%;
  }
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
  justify-content: space-between;
  gap: 1.25em;
  height: 100%;
}
.cards-parent {
  position: relative;
  width: 100%;
  height: 100%;
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
  justify-content: space-between;
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
  &_overdue {
    background: rgba(255, 0, 0, 0.08);
  }
}
.percent-icon12 {
  position: relative;
  width: 1em;
  height: 1em;
  overflow: hidden;
  flex-shrink: 0;
}

.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
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
.group{
  display: flex;
  align-items: center;
  gap: 6px;
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
