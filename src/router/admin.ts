export const admin = [
  {
    path: "/admin-pannel",
    name: "admin-pannel",
    component: () => import("../views/admin/pannel.vue"),
  },
  {
    path: "/admin-profile",
    name: "admin-profile",
    component: () => import("../views/admin/profile.vue"),
  },
  {
    path: "/admin-manage-bids",
    name: "manage-bids",
    component: () => import("../views/admin/manage-bids.vue"),
  },
  {
    path: "/admin-manage-user",
    name: "manage-user",
    component: () => import("../views/admin/manage-user.vue"),
  },
  {
    path: "/admin-manage-pulls",
    name: "manage-pulls",
    component: () => import("../views/admin/manage-pulls.vue"),
  },
  {
    path: "/admin-manage-loans",
    name: "manage-loans",
    component: () => import("../views/admin/manage-loans.vue"),
  },
];
export const adminMobile = [
  {
    path: "/admin-pannel-mobile",
    name: "admin-pannel-mobile",
    component: () => import("../views/admin/mobile/pannel.vue"),
  },
  {
    path: "/admin-profile-mobile",
    name: "admin-profile-mobile",
    component: () => import("../views/admin/mobile/profile.vue"),
  },
  {
    path: "/admin-restore-password",
    name: "admin-restore-password",
    component: () => import("../components/admin/restore-password.vue"),
  },
  {
    path: "/admin-manage-bids-mobile",
    name: "manage-bids-mobile",
    component: () => import("../views/admin/mobile/manage-bids.vue"),
  },
  {
    path: "/admin-bids-blank-mobile",
    name: "manage-bids-blank",
    component: () => import("../components/admin/blank.vue"),
  },
  {
    path: "/admin-manage-users-mobile",
    name: "manage-user-mobile",
    component: () => import("../views/admin/mobile/manage-users.vue"),
  },
  {
    path: "/admin-user-detail-mobile",
    name: "manage-user-detail",
    component: () => import("../components/admin/users-detail.vue"),
  },
  {
    path: "/admin-manage-pulls-mobile",
    name: "manage-pulls-mobile",
    component: () => import("../views/admin/mobile/manage-pulls.vue"),
  },
  {
    path: "/admin-pulls-detail-mobile",
    name: "manage-pulls-detail",
    component: () => import("../components/admin/pulls-detail.vue"),
  },
  {
    path: "/admin-manage-loans-mobile",
    name: "manage-loans-mobile",
    component: () => import("../views/admin/mobile/manage-loans.vue"),
  },
  {
    path: "/admin-loans-detail-mobile",
    name: "manage-loans-detail",
    component: () => import("../components/admin/loans-detail.vue"),
  },
  {
    path: "/admin-manage-api-mobile",
    name: "manage-api-mobile",
    component: () => import("../views/admin/mobile/manage-api.vue"),
  },
  {
    path: "/admin-add-mobile",
    name: "manage-add-mobile",
    component: () => import("../components/admin/add.vue"),
  },
  {
    path: "/manage-user-filter",
    name: "manage-user-filter",
    component: () => import("../components/admin/filter-manage-users.vue"),
  },
  {
    path: "/manage-pulls-filter",
    name: "manage-pulls-filter",
    component: () => import("../components/admin/filter-manage-pulls.vue"),
  },
  {
    path: "/manage-loans-filter",
    name: "manage-loans-filter",
    component: () => import("../components/admin/filter-manage-loans.vue"),
  },
  {
    path: "/manage-bids-filter",
    name: "manage-bids-filter",
    component: () => import("../components/admin/filter-manage-bids.vue"),
  },
  {
    path: "/manage-api-filter",
    name: "manage-api-filter",
    component: () => import("../components/admin/filter-manage-api.vue"),
  },
  {
    path: "/manage-users-sort",
    name: "manage-user-sort",
    component: () => import("../components/admin/sort-manage-users.vue"),
  },
  {
    path: "/manage-pulls-sort",
    name: "manage-pulls-sort",
    component: () => import("../components/admin/sort-manage-pulls.vue"),
  },
  {
    path: "/manage-loans-sort",
    name: "manage-loans-sort",
    component: () => import("../components/admin/sort-manage-loans.vue"),
  },
  {
    path: "/manage-api-sort",
    name: "manage-api-sort",
    component: () => import("../components/admin/sort-manage-api.vue"),
  },
];
