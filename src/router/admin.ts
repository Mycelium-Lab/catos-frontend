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
];
