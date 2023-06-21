export const creditor = [
  {
    path: "/pulls/creditor",
    name: "pulls",
    component: () => import("../views/pulls/creditor.vue"),
  },
  {
    path: "/pulls/detail-personal",
    name: "pulls-detail-personal",
    component: () => import("../components/pulls/creditor/detail-personal.vue"),
  },
  {
    path: "/pulls/personal",
    name: "pulls-personal",
    component: () =>
      import("../components/pulls/creditor/personal/personal.vue"),
  },
  {
    path: "/pulls/filter",
    name: "pulls-filter",
    component: () => import("../components/pulls/filter.vue"),
  },
  {
    path: "/pulls/sort",
    name: "pulls-sort",
    component: () => import("../components/pulls/sort.vue"),
  },

  {
    path: "/pulls/create",
    name: "pulls-create",
    component: () => import("../components/pulls/creditor/create-pull.vue"),
  },
  {
    path: "/pulls/create-scan",
    name: "pulls-create-scan",
    component: () =>
      import("../components/pulls/creditor/create-pull-scan.vue"),
  },

  {
    path: "/pulls/liquidity-management",
    name: "pulls-liquidity-management",
    component: () =>
      import("../components/pulls/creditor/liquidity/liquidity-management.vue"),
  },
  {
    path: "/pulls/liquidity-add",
    name: "pulls-liquidity-add",
    component: () => import("../components/pulls/creditor/liquidity/add.vue"),
  },
  {
    path: "/pulls/liquidity-scan",
    name: "pulls-liquidity-scan",
    component: () =>
      import("../components/pulls/creditor/liquidity/add-scan.vue"),
  },
];

export const borrower = [
  {
    path: "/pulls/borrower",
    name: "pulls-borrower",
    component: () => import("../views/pulls/borrower.vue"),
  },
  {
    path: "/pulls/borrower/detail",
    name: "pulls-borrower-detail",
    component: () => import("../components/pulls/borrower/detail-other.vue"),
  },
  {
    path: "/pulls/borrower/get-loan",
    name: "pulls-borrower-get-loan",
    component: () => import("../components/pulls/borrower/loan.vue"),
  },
  {
    path: "/pulls/borrower/get-loan-payment",
    name: "pulls-borrower-get-loan-payment",
    component: () => import("../components/pulls/borrower/payment.vue"),
  },
  {
    path: "/pulls/borrower/get-loan-scan",
    name: "pulls-borrower-get-loan-scan",
    component: () => import("../components/base/confirm-qr.vue"),
  },
  {
    path: "/pulls/borrower/get-loan-result",
    name: "pulls-borrower-get-loan-result",
    component: () => import("../components/pulls/borrower/payment-result.vue"),
  },
];

export const depositor = [
  {
    path: "/pulls/depositor",
    name: "pulls-depositor",
    component: () => import("../views/pulls/depositor.vue"),
  },
  {
    path: "/pulls/depositor-detail",
    name: "pulls-depositor-detail",
    component: () =>
      import("../components/pulls/depositor/depositor-detail.vue"),
  },
  {
    path: "/pulls/depositor-filter",
    name: "pulls-depositor-filter",
    component: () =>
      import("../components/pulls/depositor/depositor-filter.vue"),
  },
  {
    path: "/pulls/depositor-sort",
    name: "pulls-depositor-sort",
    component: () => import("../components/pulls/depositor/depositor-sort.vue"),
  },
];

export const collector = [
  {
    path: "/pulls/collector",
    name: "pulls-collector",
    component: () => import("../views/pulls/collector.vue"),
  },
  {
    path: "/pulls/collector-detail",
    name: "pulls-collector-detail",
    component: () =>
      import("../components/pulls/collector/collector-detail.vue"),
  },
  {
    path: "/pulls/collector-debt-detail",
    name: "pulls-collector-debt-detail",
    component: () => import("../components/pulls/collector/debt-detail.vue"),
  },
];
