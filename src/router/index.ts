import { createRouter, createWebHistory } from "vue-router";
import { admin, adminMobile } from "./admin";

import { dashboardDepositor, dashboardСreditor } from "./dashboard";
import { borrowerLoans, loans, collector } from "./loans";
import { borrower, creditor, depositor } from "./pulls";
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
        import("../components/signup/borrower/signup-borrower.vue"),
    },
    {
      path: "/sign-up/depositor-verification",
      name: "depositor-verification",
      component: () =>
        import("../components/signup/borrower/verification.vue"),
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
    {
      path: "/chart",
      name: "accepted-request",
      component: () => import("../components/dashboard/chart.vue"),
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
    setting[16],
    setting[17],
    wallet[0],
    wallet[1],
    wallet[2],
    wallet[3],
    wallet[4],
    wallet[5],
    wallet[6],
    wallet[7],
    wallet[8],
    creditor[0],
    creditor[1],
    creditor[2],
    creditor[3],
    creditor[4],
    creditor[5],
    creditor[6],
    creditor[7],
    creditor[8],
    creditor[9],
    borrower[0],
    borrower[1],
    borrower[2],
    borrower[3],
    borrower[4],
    borrower[5],
    borrower[6],
    borrower[7],
    borrower[8],
    depositor[0],
    depositor[1],
    depositor[2],
    depositor[3],
    collector[0],
    collector[1],
    collector[2],
    collector[3],
    collector[4],
    loans[0],
    loans[1],
    loans[2],
    loans[3],
    dashboardСreditor[0],
    dashboardСreditor[1],
    dashboardСreditor[2],
    dashboardСreditor[3],
    dashboardСreditor[4],
    dashboardDepositor[0],
    dashboardDepositor[1],
    borrowerLoans[0],
    borrowerLoans[1],
    borrowerLoans[2],
    borrowerLoans[3],
    borrowerLoans[4],
    borrowerLoans[5],
    borrowerLoans[6],
    admin[0],
    admin[1],
    admin[2],
    admin[3],
    admin[4],
    admin[5],
    admin[6],
    adminMobile[0],
    adminMobile[1],
    adminMobile[2],
    adminMobile[3],
    adminMobile[4],
    adminMobile[5],
    adminMobile[6],
    adminMobile[7],
    adminMobile[8],
    adminMobile[9],
    adminMobile[10],
    adminMobile[11],
    adminMobile[12],
    adminMobile[13],
    adminMobile[14],
    adminMobile[15],
    adminMobile[16],
    adminMobile[17],
    adminMobile[18],
    adminMobile[19],
    adminMobile[20],
    adminMobile[21],
  ],
  // @ts-ignore
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
