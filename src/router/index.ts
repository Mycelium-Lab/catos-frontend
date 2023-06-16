import { createRouter, createWebHistory } from "vue-router";
import { setting } from "./settings";
import { wallet } from "./wallet";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView-2.vue"),
    },
    {
      path: "/roles",
      name: "roles",
      component: () => import("../components/login/login-roles-2.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../components/login/login-2.vue"),
    },
    {
      path: "/phone-confirmation",
      name: "phone-confirmation",
      component: () => import("../components/login/phone-confirmation-2.vue"),
    },
    {
      path: "/sign-up",
      name: "start",
      component: () => import("../components/signup/start.vue"),
    },
    {
      path: "/sign-up/confirm",
      name: "confirm",
      component: () => import("../components/signup/confirm-signup.vue"),
    },
    {
      path: "/sign-up/anketa-redst",
      name: "anketa-redst",
      component: () => import("../components/signup/creditor/anketa-redst.vue"),
    },
    {
      path: "/sign-up/anketa",
      name: "anketa",
      component: () =>
        import("../components/signup/creditor/anketa-predstavl.vue"),
    },
    {
      path: "/sign-up/anketa-verification",
      name: "anketa-verification",
      component: () =>
        import("../components/signup/creditor/anketa-predstavl-proverka.vue"),
    },
    {
      path: "/sign-up/depositor",
      name: "signup-depositor",
      component: () =>
        import("../components/signup/depositor/signup-depositor.vue"),
    },
    {
      path: "/sign-up/depositor-verification",
      name: "depositor-verification",
      component: () =>
        import("../components/signup/depositor/verification.vue"),
    },
    {
      path: "/sign-up/borrower",
      name: "signup-borrower",
      component: () =>
        import("../components/signup/borrower/signup-borrower.vue"),
    },
    {
      path: "/sign-up/borrower-verification",
      name: "borrower-verification",
      component: () => import("../components/signup/borrower/verification.vue"),
    },
    {
      path: "/sign-up/borrower-finish",
      name: "borrower-finish",
      component: () =>
        import("../components/signup/borrower/signup-borrow-finish.vue"),
    },
    {
      path: "/sign-up/connect-wallet",
      name: "connect-wallet",
      component: () => import("../components/signup/connect-wallet.vue"),
    },
    {
      path: "/sign-up/connect-wallet-finish",
      name: "connect-wallet-finish",
      component: () => import("../components/signup/connect-wallet-finish.vue"),
    },
    {
      path: "/sign-up/success",
      name: "success",
      component: () => import("../components/signup/success.vue"),
    },
    {
      path: "/sign-up/support",
      name: "support",
      component: () => import("../components/signup/support.vue"),
    },
    {
      path: "/sign-up/accepted-request",
      name: "accepted-request",
      component: () => import("../components/signup/accepted-request.vue"),
    },
    setting[0],
    setting[1],
    setting[2],
    setting[3],
    setting[4],
    setting[5],
    setting[6],
    setting[7],
    setting[8],
    setting[9],
    setting[10],
    setting[11],
    setting[12],
    setting[13],
    setting[14],
    setting[15],
    wallet[0],
    wallet[1],
    wallet[2],
    wallet[3],
    wallet[4],
    wallet[5],
    wallet[6],
    wallet[7],
    wallet[8],
  ],
});

export default router;
