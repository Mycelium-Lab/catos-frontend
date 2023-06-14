export const wallet = [
  {
    path: "/wallet",
    name: "wallet",
    component: () => import("../views/wallet.vue"),
  },
  {
    path: "/wallet/to-up",
    name: "to-up",
    component: () => import("../components/wallet/to-up.vue"),
  },
  {
    path: "/wallet/withrow",
    name: "withrow",
    component: () => import("../components/wallet/withrow.vue"),
  },
  {
    path: "/wallet/exchange",
    name: "exchange",
    component: () => import("../components/wallet/exchange.vue"),
  },
  {
    path: "/wallet/checks",
    name: "checks",
    component: () => import("../components/wallet/checks.vue"),
  },
  {
    path: "/wallet/checks-create",
    name: "checks-create",
    component: () => import("../components/wallet/check/create.vue"),
  },
  {
    path: "/wallet/accounts",
    name: "accounts",
    component: () => import("../components/wallet/accounts.vue"),
  },
  {
    path: "/wallet/accounts-create",
    name: "accounts-create",
    component: () => import("../components/wallet/account/create.vue"),
  },
  {
    path: "/wallet/accounts-create-finish",
    name: "accounts-create-finish",
    component: () => import("../components/wallet/account/create-finish.vue"),
  },
];
