<script setup lang="ts">
import { ref, computed } from "vue";
import catosCheckbox from "./components/ui-kit/catos-checkbox.vue";
import catosSwitch from "./components/ui-kit/catos-switch.vue";
import rangeMinmaxSlider from "./components/ui-kit/range-minmax-slider.vue";
import lines from "./components/ui-kit/lines.vue";
import inputData from "./components/fields/input-data.vue";
import copyPaste from "./components/fields/copy-paste.vue";
import loaderField from "./components/fields/loader-field.vue";
import catosButton from "./components/ui-kit/buttons/catos-button.vue";
import statusTag from "./components/ui-kit/buttons/status-tag.vue";
import statusButtonOption from "./components/ui-kit/buttons/status-button-option.vue";
import buttonIcon from "./components/ui-kit/buttons/button-icon.vue";
import buttonSlider from "./components/ui-kit/buttons/button-slider.vue";
import MultiButtonSlider from "./components/ui-kit/buttons/multi-button-slider.vue";
import stepper from "./components/ui-kit/buttons/stepper.vue";
import progressBar from "./components/ui-kit/buttons/progress-bar.vue";
import catosSelect from "./components/fields/catos-select.vue";
import { ButtonIconVariant, ButtonSliderVariant } from "@/types/buttons-props";

import Login2 from "@/components/login/login-2.vue";
import LoginRoles2 from "@/components/login/login-roles-2.vue";
import HomeView2 from "./views/HomeView-2.vue";
import PhoneConfirmation from "./components/login/phone-confirmation.vue";
import PhoneConfirmation2 from "./components/login/phone-confirmation-2.vue";
import Signup from "./components/signup/signup.vue";
import AnketaPredst from "./components/signup/anketa-redst.vue";
import AnketaPredstavl from "./components/signup/creditor/anketa-predstavl.vue";
import ConnectWallet from "./components/signup/connect-wallet.vue";
import ConnectWalletFinish from "./components/signup/connect-wallet-finish.vue";
import AnketaPredstavlProverka from "./components/signup/anketa-predstavl-proverka.vue";
import Creditor from "./components/signup/creditor/creditor.vue";
import ConfirmSignup from "./components/signup/confirm-signup.vue";
import Success from "./components/signup/success.vue";
import Support from "./components/signup/support.vue";
import AcceptedRequest from "./components/signup/accepted-request.vue";
import qrCodeStyling from "./components/qr-code-styling.vue";

import ButtomSheet from "./components/ui-kit/bottomsheet.vue";

import Default from "./components/layouts/Default.vue";
import Green from "./components/layouts/Green.vue";
import Red from "./components/layouts/Red.vue";

const route = useRoute();

/* const layout = computed(() => {
  console.log(route.meta.layout);
  return route.meta.layout || "default-layout";
});
*/

const sliderMin = ref(50);
const sliderMax = ref(80);

/*const variant = ref(ButtonSliderVariant.dashboard);
const place = ref("Выберите страну проживания:");
const value = ref("");
const options = {
  sng: ["Россия", "Украина", "Казахстан", "Белорусь"],
  euro: ["Польша", "Латвия", "Молдова", "Литва", "Швеция"],
};*/

import { RouterView, useRoute } from "vue-router";
</script>

<template>
  <router-view></router-view>

  <!--<router-view></router-view>-->
  <!--<catos-select
    :placeholder="place"
    :options="options"
    :value="value"
    @selected="ev => (value = ev)"
  ></catos-select>
  -->
  <!--<button-icon
    :variant="variant"
    @clicked="index => (variant = index)"
    :key="variant"
  >
    <img src="./assets/images/ui-kit/right.svg" alt="" />
  </button-icon>-->
  <!-- <status-button-option
    :variantIndex="variant"
    @selected="(index: number) => variant = index"
    :key="variant"
  >
  </status-button-option>
-->
  <!--<range-minmax-slider
    :max="700"
    v-model:min-value="sliderMin"
    v-model:max-value="sliderMax"
  ></range-minmax-slider>
  -->
  <!--<header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
--></template>
