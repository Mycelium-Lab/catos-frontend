export const dashboardСreditor = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/dashboard/creditor.vue"),
  },
  {
    path: "/dashboard/cards",
    name: "dashboard-cards",
    component: () => import("../components/dashboard/cards.vue"),
  },
  {
    path: "/dashboard/analytics",
    name: "dashboard-analytics",
    component: () => import("../components/dashboard/analytics.vue"),
  },
];

export const dashboardDepositor = [
  {
    path: "/dashboard/depositor",
    name: "dashboard-depositor",
    component: () => import("../views/dashboard/depositor.vue"),
  },
  {
    path: "/dashboard/depositor-sort",
    name: "dashboard-depositor-sort",
    component: () => import("../components/dashboard/depositor/sort.vue"),
  },
];
