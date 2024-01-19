<template>
  <div class="menu">
    <div class="iconsmenu-parent">
      <img
        class="iconsmenu"
        alt=""
        src="@/assets/desktop/catos-menu-logo.svg"
      />
      <div class="div">МЕНЮ</div>
    </div>
    <div class="buttons">
      <div class="component-21" v-if="role !== 'collector'" @click="toPulls">
        <div class="iconsmenu1">
          <img alt="" src="@/assets/desktop/menu-pulls.svg" />
        </div>
        <div class="div1">пулы</div>
      </div>
      <div
        class="component-211"
        v-if="
          role === 'creditor' || role === 'borrower' || role === 'collector'
        "
        @click="toLoans"
      >
        <div class="iconsmenu1">
          <img alt="" src="@/assets/desktop/menu-loans.svg" />
        </div>
        <div class="div1">
          {{ role === "collector" ? "Задолженности" : "Займы" }}
        </div>
      </div>
      <div
        class="component-211"
        v-if="role === 'creditor' || role === 'investor'"
        @click="toDashBoard"
      >
        <div class="iconsmenu1">
          <img alt="" src="@/assets/desktop/menu-dashboard.svg" />
        </div>
        <div class="div1">Дашбоард</div>
      </div>
      <!--<div
        class="component-211"
        v-if="role === 'creditor' || role === 'depositor'"
      >
        <div class="iconsmenu1">
          <img alt="" src="@/assets/desktop/menu-setting.svg" />
        </div>
        <div class="div1">Настройки</div>
      </div>-->
      <!--<div class="component-211" @click="toWallet">
        <div class="iconsmenu1">
          <img alt="" src="@/assets/desktop/menu-wallet.svg" />
        </div>
        <div class="div1">Кошелек</div>
      </div>-->
      <div class="component-211" @click="toProfile">
        <div class="iconsmenu1">
          <div class="container-icon">
            <div class="user-container">
              <div class="user-container-child" />
              <img alt="" src="@/assets/desktop/menu-profile.svg" />
            </div>
          </div>
        </div>
        <div class="div1">Профиль</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import router from "@/router";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { roleStorage } from "@/utils/localStorage";

const route = useRoute();
const role = ref(roleStorage.get());
const currentPage = computed(() => {
  return route.name;
});

const toPulls = () => {
  if (role.value === "creditor") {
    router.push({ name: "pulls" });
  } else if (role.value === "borrower") {
    router.push({ name: "pulls-borrower" });
  } else if (role.value === "investor") {
    router.push({ name: "pulls-depositor" });
  } else if (role.value === "collector") {
    router.push({ name: "pulls-collector" });
  }
};
const toLoans = () => {
  if (role.value === "borrower") {
    router.push({ name: "loans-borrower" });
  } else if (role.value === "creditor") {
    router.push({ name: "loans" });
  } else if (role.value === "collector") {
    router.push({ name: "loans-collector" });
  }
};
const toDashBoard = () => {
  if (role.value === "investor") {
    router.push({ name: "dashboard-depositor" });
  } else if (role.value === "creditor") {
    router.push({ name: "dashboard" });
  }
};
// const toWallet = () => {
//   console.log(role.value);
//   if (role.value === "creditor") {
//     router.push({ name: "wallet" });
//   } else if (role.value === "borrower") {
//     router.push({ name: "wallet" });
//   } else if (role.value === "investor") {
//     router.push({ name: "wallet" });
//   } else if (role.value === "collector") {
//     router.push({ name: "wallet" });
//   }
// };
const toProfile = () => {
  // if (role.value === "creditor") {
  //   router.push({ name: "setting" });
  // } else if (role.value === "borrower") {
  //   router.push({ name: "setting" });
  // } else if (role.value === "investor") {
  //   router.push({ name: "setting" });
  // } else if (role.value === "collector") {
    router.push({ name: "setting" });
  // }
};
</script>
<style scoped lang="scss">
.iconsmenu {
  position: absolute;
  top: 0em;
  left: -0.03em;
  border-radius: 16px;
  width: 3em;
  height: 3.75em;
}
.div {
  position: absolute;
  top: 2.3em;
  left: 4.75em;
  font-size: 0.63em;
  line-height: 130%;
  font-weight: 500;
}
.iconsmenu-parent {
  position: relative;
  width: 7.69em;
  height: 3.75em;
}
.container-icon {
  position: relative;
  width: 3.75em;
  height: 3.75em;
}
.iconsmenu1 {
  border-radius: 16px;
  width: 3em;
  height: 3.75em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.div1 {
  position: relative;
  font-size: 0.75em;
  line-height: 120%;
  font-weight: 500;
}
.component-21 {
  border-radius: 16px;
  /*background-color: #f6f4fc;*/
  width: 7.75em;
  display: flex;
  flex-direction: row;
  padding: 0em 1.81em 0em 0em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  color: rgba(48, 51, 55, 0.9);
  cursor: pointer;
  &:hover {
    border-radius: 16px;
    background: #f6f4fc;
  }
}
.component-211 {
  border-radius: 16px;
  width: 7.75em;
  display: flex;
  flex-direction: row;
  padding: 0em 1.81em 0em 0em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  &:hover {
    border-radius: 16px;
    background: #f6f4fc;
  }
}
.user-container-child {
  position: absolute;
  top: 0.17em;
  left: 0.14em;
  border-radius: 6.67px;
  border: 6.7px solid #353240;
  box-sizing: border-box;
  width: 1.74em;
  height: 1.74em;
}
.vector-icon {
  position: absolute;
  top: calc(50% - 10px);
  left: calc(50% - 10.56px);
  width: 1.32em;
  height: 1.32em;
}
.user-container {
  position: absolute;
  top: calc(50% - 15.56px);
  left: calc(50% - 15.56px);
  width: 2.01em;
  height: 2.01em;
  overflow: hidden;
}
.buttons {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.38em;
  text-align: right;
  color: rgba(93, 104, 123, 0.9);
}
.menu {
  border-radius: 16px;
  border: 1px solid #f6f4fc;
  box-sizing: border-box;
  width: 8.69em;
  display: flex;
  flex-direction: column;
  padding: 0em 0.5em 0.63em;
  align-items: center;
  justify-content: flex-start;
  gap: 2em;
}
</style>
