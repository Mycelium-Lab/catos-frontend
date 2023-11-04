export const setting = [
  {
    path: "/setting",
    name: "setting",
    component: () => import("../views/setting.vue"),
  },
  {
    path: "/setting/edit-photo",
    name: "edit-photo",
    component: () => import("../components/setting/edit-photo.vue"),
  },
  {
    path: "/setting/change-email",
    name: "change-email",
    component: () => import("../components/setting/change-email.vue"),
  },
  {
    path: "/setting/change-phone",
    name: "change-phone",
    component: () => import("../components/setting/change-phone.vue"),
  },
  {
    path: "/setting/change-password",
    name: "change-password",
    component: () => import("../components/setting/change-password.vue"),
  },
  {
    path: "/setting/success-password",
    name: "success-password",
    component: () =>
      import("../components/setting/success-change-password.vue"),
  },
  {
    path: "/setting/restore-password",
    name: "restore-password",
    component: () => import("../components/setting/restore-password.vue"),
  },
  {
    path: "/setting/transactions",
    name: "transaction-history",
    component: () => import("../components/setting/transaction-history.vue"),
  },
  {
    path: "/setting/scrinning",
    name: "scrinning",
    component: () => import("../components/setting/scrinning.vue"),
  },
  {
    path: "/setting/authentication",
    name: "authentication",
    component: () => import("../components/setting/authentication.vue"),
  },
  {
    path: "/setting/authentication-save",
    name: "authentication-save",
    component: () => import("../components/setting/authentication-save.vue"),
  },
  {
    path: "/setting/authentication-connect",
    name: "authentication-connect",
    component: () => import("../components/setting/authentication-connect.vue"),
  },
  {
    path: "/setting/authentication-turnon",
    name: "authentication-turnon",
    component: () => import("../components/setting/authentication-turnon.vue"),
  },
  {
    path: "/setting/authentication-success",
    name: "authentication-success",
    component: () => import("../components/setting/authentication-success.vue"),
  },
  {
    path: "/setting/wallet",
    name: "setting-wallet",
    component: () => import("../components/setting/wallet.vue"),
  },
  {
    path: "/setting/wallet-scan",
    name: "setting-wallet-scan",
    component: () => import("../components/setting/wallet-scan.vue"),
  },
  {
    path: "/setting/wallet-success",
    name: "setting-wallet-success",
    component: () => import("../components/setting/wallet-success.vue"),
  },
  {
    path: "/setting/transaction-history-sort",
    name: "transaction-history-sort",
    component: () => import("../components/sort/sort.vue"),
  },
];
