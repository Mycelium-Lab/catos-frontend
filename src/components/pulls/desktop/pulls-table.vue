<template>
  <div class="frame-div">
        <div
          :class="`desctopverpull-stats-parent_${role}-${variant} desctopverpull-stats-parent`"
          @click="toDetail"
        >
          <div class="desctopverpull-stats">
            <div
              :class="`desctopverpull-stats-child_${role}-${variant} desctopverpull-stats-child`"
            />
            <div
              :class="
                role === 'collector' ? 'filtr6_collector filtr6' : 'filtr6'
              "
            >
              <div class="wrapper">
                <div class="div120">Пулл № {{ pool.id }}</div>
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
                        <div
                          v-if="role === 'collector'"
                          class="txt2_borrower txt2"
                        >
                          Цена:
                        </div>
                        <div class="ton18">
                          {{ pool.available_liquidity }} TON
                        </div>
                        <div
                          v-if="role === 'borrower'"
                          class="txt2_borrower txt2"
                        >
                          Одобренный лимит
                        </div>
                        <div
                          v-if="role === 'creditor' || role === 'investor'"
                          class="txt2"
                        >
                          Доступно ликвидности
                        </div>
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
                  <div class="div127_creditor-info div127">Кредитор:</div>

                  <div class="group-creditor">
                    <span class="div127_creditor-info">Деньги до зарплаты</span>
                    <img
                      class="radiobutton-icon"
                      alt=""
                      src="@/assets/images/investore.svg"
                    />
                  </div>
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
                  <div
                    v-if="role === 'collector' && variant === 'debt'"
                    class="frame-parent23"
                  >
                    <div class="frame">
                      <div class="div121">Статус:</div>
                    </div>
                    <div
                      class="colors-graphsorders-group_red colors-graphsorders-group"
                    >
                      <img
                        class="colors-graphsorders-icon"
                        alt=""
                        src="@/assets/images/colors-graphsorders3.svg"
                      />
                      <div class="statuspull_collector statuspull">
                        <div class="div126">Не погашена</div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="role === 'collector' && variant !== 'marketplace'"
                    class="line-div"
                  />
                  <div
                    v-if="role === 'borrower' && variant === 'all'"
                    class="frame-parent23"
                  >
                    <div class="frame">
                      <div class="div127">Одобренный лимит:</div>
                    </div>
                    <div class="ton-wrapper">
                      <div class="div128">
                        до {{ pool.max_loan_amount }} TON
                      </div>
                    </div>
                  </div>
                  <div v-if="role === 'collector'" class="frame-parent23">
                    <div class="frame">
                      <div class="div127"><b>Цена продажи:</b></div>
                    </div>
                    <div class="ton-wrapper">
                      <div class="div128"><b>4 000 TON</b></div>
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
                      <div class="div128">
                        {{ pool.millipercent / 100 }}% в день
                      </div>
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
                      <div class="div128">
                        до {{ parse(pool.max_duration).days }} дней
                      </div>
                    </div>
                  </div>
                  <div v-if="role !== 'collector'" class="line-div" />
                  <div v-if="role !== 'collector'" class="frame-parent23">
                    <div class="frame_period frame">
                      <div class="div127">Беспроцентный период:</div>
                    </div>
                    <div class="ton-wrapper">
                      <div class="div128">
                        {{ parse(pool.free_period).days }} дней
                      </div>
                    </div>
                  </div>
                  <div v-if="role === 'borrower'" class="line-div" />
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
                      role === 'investor' ||
                      (role === 'borrower' && variant === 'my')
                    "
                    class="line-div"
                  />
                  <div
                    v-if="
                      role === 'creditor' ||
                      role === 'investor' ||
                      (role === 'borrower' && variant === 'my')
                    "
                    class="frame-parent23"
                  >
                    <div class="frame">
                      <div class="div127">Всего ликвидности:</div>
                    </div>
                    <div class="ton-wrapper">
                      <div class="div128">{{ pool.all_liquidity }} TON</div>
                    </div>
                  </div>
                  <div
                    v-if="
                      role === 'creditor' ||
                      role === 'investor' ||
                      (role === 'borrower' && variant === 'my')
                    "
                    class="line-div"
                  />
                  <div
                    v-if="
                      role === 'creditor' ||
                      role === 'investor' ||
                      (role === 'borrower' && variant === 'my')
                    "
                    class="frame-parent23"
                  >
                    <div class="frame">
                      <div class="div127">Свободно:</div>
                    </div>
                    <div class="ton-wrapper">
                      <div class="div128">
                        {{ pool.available_liquidity }} TON
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="role === 'investor' && variant === 'all'"
                    class="line-div"
                  />
                  <div
                    v-if="role === 'investor' && variant === 'all'"
                    class="frame-parent23"
                  >
                    <div class="frame">
                      <div class="div127">Сгенерированный доход:</div>
                    </div>
                    <div class="ton-wrapper">
                      <div class="div128">273 000 TON</div>
                    </div>
                  </div>
                  <div
                    v-if="role === 'investor' && variant === 'all'"
                    class="line-div"
                  />
                  <div
                    v-if="role === 'investor' && variant === 'all'"
                    class="frame-parent23"
                  >
                    <div class="frame">
                      <div class="div127">Действующих инвесторов:</div>
                    </div>
                    <div class="ton-wrapper">
                      <div class="div128">273</div>
                    </div>
                  </div>
                  <div v-if="role === 'investor'" class="line-div" />
                  <div v-if="role === 'investor'" class="frame-parent23">
                    <div class="frame">
                      <div class="div127">Доходность за 30 дней:</div>
                    </div>
                    <div class="ton-wrapper">
                      <div class="div128">75% годовых</div>
                    </div>
                  </div>

                  <div
                    v-if="
                      role === 'creditor' ||
                      (role === 'borrower' && variant === 'my')
                    "
                    class="line-div"
                  />
                  <div
                    v-if="
                      role === 'creditor' ||
                      (role === 'borrower' && variant === 'my')
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

                <div
                  v-if="role === 'investor' && variant === 'my'"
                  class="frame-parent"
                >
                  <div class="wrapper">
                    <div class="div">Мои инвестиции</div>
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
                  <div class="div128_percent div128">
                    Проценты начисляются с 12.12.2023 года
                  </div>
                </div>
              </div>
              <div class="des-and-bbn6">
                <div class="text-and-button-parent">
                  <div
                    v-if="variant === 'my' && role === 'creditor'"
                    class="text-and-button6"
                  >
                    <button
                      class="buttons-tabs7_creditor buttons-tabs7"
                      @click.stop="toLoans"
                    >
                      <div class="text6">Займы</div>
                    </button>
                    <button
                      class="buttons-tabs7_creditor buttons-tabs7"
                      @click.stop="toAnalytics"
                    >
                      <div class="text7">Аналитика</div>
                    </button>
                  </div>
                  <div class="text-and-button6">
                    <!--<button
                v-if="variant === 'all'"
                :class="`buttons-tabs7_${role} buttons-tabs7`"
                @click.stop="() => (isMangae = true)"
              >
                <div v-if="role === 'depositor'" class="text8">
                  <span class="span2">Добавить ликвидность</span>
                </div>
                <div
                  v-if="role === 'borrower' && variant === 'all'"
                  class="text8"
                >
                  <span class="span2">Взять займ</span>
                </div>
              </button>-->
                    <button
                      v-if="role === 'creditor' && variant === 'my'"
                      :class="`buttons-tabs7_${role} buttons-tabs7`"
                      @click.stop="toManageLiquid"
                    >
                      <div v-if="role === 'creditor'" class="text8">
                        <span class="span2">Упр</span>
                        <span class="span3">. ликвид</span>
                      </div>
                    </button>

                    <catos-button
                      v-if="role === 'investor' && variant === 'my'"
                      :style="{ width: '100%' }"
                      variant="fourth"
                      @click.stop="toWidthdrawLequid"
                      >Вывести депозит</catos-button
                    >
                    <catos-button
                      v-if="role === 'investor'"
                      :style="{ width: '100%' }"
                      variant="fourth"
                      @click.stop="toAddLequid"
                      >Инвестировать</catos-button
                    >
                    <catos-button
                      v-if="role === 'borrower' && variant === 'all'"
                      :style="{ width: '100%' }"
                      variant="fourth"
                      @click.stop="toGetLoan"
                      >Взять займ</catos-button
                    >
                    <catos-button
                      v-if="role === 'collector' && variant === 'marketplace'"
                      :style="{ width: '100%' }"
                      variant="fourth"
                      @click.stop="toBuy"
                      >Купить</catos-button
                    >

                    <button
                      v-if="role === 'creditor' && variant === 'my'"
                      :class="`buttons-tabs7_${role}-${variant} buttons-tabs7_${role} buttons-tabs7`"
                      @click.stop="toDetail"
                    >
                      <div class="text9">Подробнее</div>
                    </button>
                    <catos-button
                      v-else
                      :style="{ width: '100%' }"
                      variant="fourth_outline"
                      @click.stop="toDetail"
                      >Подробнее</catos-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <all-creditor-pulls
          v-if="isAllCreditor"
          @close="() => (isAllCreditor = false)"
        ></all-creditor-pulls>
        <my-creditor-pulls
          v-if="isMyCreditor"
          :state="myCreditorState"
          @loans="toLoans"
          @analytics="toAnalytics"
          @close="
            () => {
              isMyCreditor = false;
              resetState('my-creditor');
            }
          "
        >
        </my-creditor-pulls>
        <all-borrower-pulls
          :pool="pool"
          v-if="isAllBorrower"
          :state="allBorrowerState"
          @close="
            () => {
              isAllBorrower = false;
              resetState('all-borrower');
            }
          "
        ></all-borrower-pulls>
        <my-borrower-pulls  
    v-if="isMyBorrower"
    :state="myBorrowerState"
    @close="
      () => {
        isMyBorrower = false;
        resetState('my-borrower');
      }
      "
  >
  </my-borrower-pulls>

        <add
          v-if="
            (isAllDepositor || isMyDepositor) &&
            allDepositorState.addLiquidModal
          "
          @close="
            () => {
              isAllDepositor = false;
              resetState('all-depositor');
            }
          "
          :poolId="pool.id"
        ></add>
        <withdraw
          v-if="
            (isAllDepositor || isMyDepositor) &&
            allDepositorState.widthrawLiquidModal
          "
          @close="
            () => {
              isAllDepositor = false;
              resetState('all-depositor');
            }
          "
           :poolId="pool.id"
        ></withdraw>
        <all-depositor-pulls
          v-if="
            isAllDepositor &&
            !allDepositorState.addLiquidModal &&
            !allDepositorState.widthrawLiquidModal
          "
          :poolId="pool.id"
          @close="
            () => {
              isAllDepositor = false;
              resetState('all-depositor');
            }
          "
        >
        </all-depositor-pulls>
        <my-depositor-pulls
          @add="
            () => {
              isMyDepositor = false;
              toAddLequid();
            }
          "
          @widthraw="
            () => {
              isMyDepositor = false;
              toWidthdrawLequid();
            }
          "
          v-if="isMyDepositor"
          @close="
            () => {
              isMyDepositor = false;
              resetState('my-depositor');
            }
          "
        ></my-depositor-pulls>
        <all-collector-pulls
          v-if="isAllCollector && !allCollectorState.buyModal"
          @by="
            () => {
              isAllCollector = false;
              toBuy();
            }
          "
          @close="
            () => {
              isAllCollector = false;
              resetState('all-collector');
            }
          "
        ></all-collector-pulls>
        <my-collector-pulls
          v-if="isMyCollector"
          @close="
            () => {
              isMyCollector = false;
              resetState('my-collector');
            }
          "
        >
        </my-collector-pulls>
        <buy
          v-if="allCollectorState.buyModal"
          @close="
            () => {
              isAllCollector = false;
              resetState('all-collector');
            }
          "
          @myLoans="
            () => {
              isAllCollector = false;
              toMySold();
              resetState('all-collector');
            }
          "
        ></buy>
  </div>
</template>

<script setup lang="ts">
import { Ref, computed, ref, PropType } from "vue";

import catosButton from "@/components/ui-kit/buttons/catos-button.vue";
import allCreditorPulls from "@/components/pulls/creditor/desktop/all-creditor-pulls.vue";
import myCreditorPulls from "@/components/pulls/creditor/desktop/my-creditor-pulls.vue";
import myBorrowerPulls from "@/components/pulls/borrower/desktop/my-borrower-pulls.vue";
import allBorrowerPulls from "@/components/pulls/borrower/desktop/all-borrower-pulls.vue";
import allDepositorPulls from "@/components/pulls/depositor/desktop/all-depositor-pulls.vue";
import add from "@/components/pulls/creditor/desktop/modal-body/add.vue";
import withdraw from "@/components/pulls/creditor/desktop/modal-body/withdraw.vue";
import myDepositorPulls from "@/components/pulls/depositor/desktop/my-depositor-pulls.vue";
import allCollectorPulls from "@/components/pulls/collector/desktop/all-collector-pulls.vue";
import myCollectorPulls from "@/components/pulls/collector/desktop/my-collector-pulls.vue";
import buy from "@/components/pulls/collector/desktop/buy.vue";
import { useRouter } from "vue-router";
import { parse } from "tinyduration";
import { Pool } from "@/types/pool.type";
import { roleStorage } from "@/utils/localStorage";

const { variant } = defineProps({
  variant: {
    type: String,
  },



  pool: {
    type: Object as PropType<Pool>,
    required: true,
  }
});

const role = computed(() => {
  return roleStorage.get()
})

const emits = defineEmits(["mySoldLoans"]);

const role = computed(() => {
  return roleStorage.get()
})

const toMySold = () => {
  emits("mySoldLoans");
};
const isAllCreditor = ref(false);
const isMyCreditor = ref(false);
const isAllBorrower = ref(false);
const isAllDepositor = ref(false);
const isMyDepositor = ref(false);
const isMyBorrower = ref(false)
const isAllCollector = ref(false);
const isMyCollector = ref(false);

const myCreditorState = {
  detailOtherModal: false,
  manageLiquidModal: false,
};
const allBorrowerState = {
  detailOtherModal: false,
  getLoanModal: false,
  toInvestModal: false,
};
const myBorrowerState = {
  detailMyModal: false,
}

const allDepositorState = {
  detailOtherModal: false,
  addLiquidModal: false,
  widthrawLiquidModal: false,
};

const myDepositorState = {
  detailOtherModal: false,
};

const allCollectorState = {
  detailOtherModal: false,
  buyModal: false,
};
const myCollectorState = {
  detailOtherModal: false,
};

const resetState = (state: string) => {
  switch (state) {
    case "my-creditor":
      myCreditorState.detailOtherModal = false;
      myCreditorState.manageLiquidModal = false;
    case "all-borrower":
      allBorrowerState.detailOtherModal = false;
      allBorrowerState.getLoanModal = false;
    case "my-borrower":
      myBorrowerState.detailMyModal = false
    case "all-depositor":
      allDepositorState.addLiquidModal = false;
      allDepositorState.detailOtherModal = false;
      allDepositorState.widthrawLiquidModal = false;
    case "my-depositor":
      myDepositorState.detailOtherModal = false;
    case "all-collector":
      allCollectorState.detailOtherModal = false;
      allCollectorState.buyModal = false;
    case "my-collector":
      allCollectorState.detailOtherModal = false;
  }
};

const toManageLiquid = () => {
  isMyCreditor.value = true;
  myCreditorState.manageLiquidModal = true;
};

const toAddLequid = () => {
  isAllDepositor.value = true;
  allDepositorState.addLiquidModal = true;
};

const toWidthdrawLequid = () => {
  isAllDepositor.value = true;
  allDepositorState.widthrawLiquidModal = true;
};
const toGetLoan = () => {
  isAllBorrower.value = true;
  allBorrowerState.detailOtherModal = false;
  allBorrowerState.getLoanModal = true;
};

const toBuy = () => {
  isAllCollector.value = true;
  allCollectorState.buyModal = true;
};

const toDetail = () => {
  if (role.value === "creditor") {
    if (variant === "my") {
      isMyCreditor.value = true;
      myCreditorState.detailOtherModal = true;
    }
    if (variant === "all") {
      isAllCreditor.value = true;
    }
  } else if (role.value === "borrower") {
    if (variant === "my") {
      isMyBorrower.value = true;
      myBorrowerState.detailMyModal = true;
    }
    if (variant === "all") {
      isAllBorrower.value = true;
      allBorrowerState.detailOtherModal = true;
    }
  } else if (role.value === "investor") {
    if (variant === "all") {
      isAllDepositor.value = true;
      allDepositorState.detailOtherModal = true;
    }
    if (variant === "my") {
      isMyDepositor.value = true;
      myDepositorState.detailOtherModal = true;
    }
  } else if (role.value === "collector") {
    if (variant === "marketplace") {
      isAllCollector.value = true;
      allCollectorState.detailOtherModal = true;
    } else {
      isMyCollector.value = true;
      myCollectorState.detailOtherModal = true;
    }
  }


};
const router = useRouter();
const toLoans = () => {
  router.push({ name: "loans", state: { variant } });
};
const toAnalytics = () => {
  router.push({ name: "dashboard-analytics-desktop", state: { variant } });
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
  font-size: 12px;
  line-height: 0.68em;
}
.wrapper {
  border-radius: 8px;
  border: 0.3px solid #656060;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: 0.42em;
  align-items: center;
  justify-content: center;
  padding: 8px;
}
.filtr6 {
  position: absolute;
  top: -0.25em;
  left: 1em;
  background-color: #ffff;

  overflow: hidden;
  display: flex;
  flex-direction: row;
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
.txt1-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.19em;
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
  font-size: 14px;
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
.frame-div {
  flex-direction: column;
  align-items: flex-start;
  gap: 0.63em;
}
.frame {
  display: flex;
  flex-direction: row;
  padding: 0.13em 0em;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
}
.div126 {
  position: absolute;
  top: 0%;
  right: 0%;
  font-size: 0.75em;
  line-height: 0.83em;
  display: flex;
  align-items: center;
}
.statuspull {
  position: relative;
  width: 3.44em;
  height: 0.63em;
  &_collector {
    width: 5em;
  }
}
.colors-graphsorders-group {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  /*color: #1cbd62;
  &_red {
    color: red;
  }*/
}
.frame-parent21 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 4.06em;
  padding: 0 10px;
}

.div128,
.div127 {
  position: relative;
  font-size: 14px;
  line-height: 130%;
  font-weight: 300;
}
.div127 {
  &_creditor-info {
    font-size: 12px;
  }
}
.div128 {
  flex: 1;
  &_percent {
    font-size: 12px;
  }
}

.frame-parent23 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
  padding: 0 10px;
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
      height: 2.4em;
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
  top: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.88em;
  padding: 0 10px;
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
  &_investor-all {
    height: 42.3em;
  }
  &_investor-my {
    height: 46.5em;
  }
  &_creditor-my {
    height: 36.3em;
  }
  &_borrower-all {
    height: 36em;
  }
  &_borrower-my {
    height: 38em;
  }
  &_collector-debt {
    height: 34.5em;
  }
  &_collector-marketplace {
    height: 33em;
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
  padding: 8px;
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
  //padding: 0.13em 0em 0.13em 0.38em;
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
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
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
  height: 38px;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}
.radiobutton-icon {
  position: relative;
  width: 1.75em;
  height: 1.75em;
}
.group-creditor {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
