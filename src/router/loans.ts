export const loans = [
  {
    path: "/loans",
    name: "loans",
    component: () => import("../components/loans/loans.vue"),
  },
  {
    path: "/loans/sort",
    name: "loans-sort",
    component: () => import("../components/loans/sort.vue"),
  },
  {
    path: "/loans/action",
    name: "loans-action",
    component: () => import("../components/loans/action.vue"),
  },
  {
    path: "/loans/setting-status",
    name: "loans-setting-status",
    component: () => import("../components/loans/setting-status.vue"),
  },
];

export const borrowerLoans = [
  {
    path: "/loans/borrower",
    name: "loans-borrower",
    component: () => import("../views/loans/borrower.vue"),
  },
  {
    path: "/loans/borrower-detail",
    name: "loans-borrower-detail",
    component: () => import("../components/loans/borrower/loans-detail.vue"),
  },
  {
    path: "/loans/borrower-repay",
    name: "loans-borrower-repay",
    component: () => import("../components/base/confirm-qr.vue"),
  },
  {
    path: "/loans/borrower-prolong",
    name: "loans-borrower-prolong",
    component: () => import("../components/loans/borrower/prolong.vue"),
  },
  {
    path: "/loans/borrower-prolong-detail",
    name: "loans-borrower-prolong-detail",
    component: () => import("../components/loans/borrower/prolong-detail.vue"),
  },
  {
    path: "/loans/borrower-repaid-detail",
    name: "loans-borrower-repaid-detail",
    component: () => import("../components/loans/borrower/repaid-detail.vue"),
  },
  {
    path: "/loans/borrower-sold-detail",
    name: "loans-borrower-sold-detail",
    component: () => import("../components/loans/borrower/sold-detail.vue"),
  },
  {
    path: "/loans/borrower-sort",
    name: "loans-borrower-sort",
    component: () => import("../components/sort/sort-borrower.vue"),
  },
];
